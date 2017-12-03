import { AbsoluteDayOfMonthTransition } from "./AbsoluteDayOfMonthTransition";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../../Core/ExchangeService";
import { IOutParam } from "../../Interfaces/IOutParam";
import { RelativeDayOfMonthTransition } from "./RelativeDayOfMonthTransition";
import { ServiceLocalException } from "../../Exceptions/ServiceLocalException";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { TimeZoneDefinition } from "./TimeZoneDefinition";
import { TimeZoneInfo } from "../../TimeZoneInfo";
import { TimeZonePeriod } from "./TimeZonePeriod";
import { TimeZoneTransitionGroup } from "./TimeZoneTransitionGroup";
import { TypeContainer } from "../../TypeContainer";
import { XmlAttributeNames } from "../../Core/XmlAttributeNames";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { ComplexProperty } from "../ComplexProperty";
/**
 * @internal Represents the base class for all time zone transitions.
 */
export class TimeZoneTransition extends ComplexProperty {

    private static readonly PeriodTarget: string = "Period";
    private static readonly GroupTarget: string = "Group";

    private timeZoneDefinition: TimeZoneDefinition;
    private targetPeriod: TimeZonePeriod;
    private targetGroup: TimeZoneTransitionGroup;

    /**
     * @internal Gets the target period of the transition.
     */
    get TargetPeriod(): TimeZonePeriod { return this.targetPeriod; 
    }

    /**
     * @internal Gets the target transition group of the transition.
     */
    get TargetGroup(): TimeZoneTransitionGroup { return this.targetGroup; 
    }

    /**
     * @internal Initializes a new instance of the **TimeZoneTransition** class.
     *
     * @param   {TimeZoneDefinition}   timeZoneDefinition   The time zone definition the transition will belong to.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition);
    /**
     * @internal Initializes a new instance of the **TimeZoneTransition** class.
     *
     * @param   {TimeZoneDefinition}        timeZoneDefinition   The time zone definition the transition will belong to.
     * @param   {TimeZoneTransitionGroup}   targetGroup          The transition group the transition will target.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition, targetGroup: TimeZoneTransitionGroup);
    /**
     * @internal Initializes a new instance of the **TimeZoneTransition** class.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition the transition will belong to.
     * @param   {TimeZonePeriod}        targetPeriod         The period the transition will target.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod);
    constructor(timeZoneDefinition: TimeZoneDefinition, targetPeriodOrGroup?: TimeZonePeriod | TimeZoneTransitionGroup) {
        super();
        this.timeZoneDefinition = timeZoneDefinition;

        if (targetPeriodOrGroup instanceof TimeZonePeriod) {
            this.targetPeriod = targetPeriodOrGroup;
        }
        else if (targetPeriodOrGroup instanceof TimeZoneTransitionGroup) {
            this.targetGroup = targetPeriodOrGroup;
        }
    }

    /**
     * @internal Creates a time zone period transition of the appropriate type given an XML element name.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition to which the transition will belong.
     * @param   {string}                xmlElementName       The XML element name.
     * @return  {TimeZoneTransition}    A TimeZonePeriodTransition instance.
     */
    static Create(timeZoneDefinition: TimeZoneDefinition, xmlElementName: string): TimeZoneTransition {
        switch (xmlElementName) {
            case XmlElementNames.AbsoluteDateTransition:
                return new TypeContainer.AbsoluteDateTransition(timeZoneDefinition);
            case XmlElementNames.RecurringDayTransition:
                return new TypeContainer.RelativeDayOfMonthTransition(timeZoneDefinition);
            case XmlElementNames.RecurringDateTransition:
                return new TypeContainer.AbsoluteDayOfMonthTransition(timeZoneDefinition);
            case XmlElementNames.Transition:
                return new TimeZoneTransition(timeZoneDefinition);
            default:
                throw new ServiceLocalException(
                    StringHelper.Format(
                        Strings.UnknownTimeZonePeriodTransitionType,
                        xmlElementName));
        }
    }

    /**
     * @internal Creates a time zone transition based on the specified transition time.
     *
     * @param   {TimeZoneDefinition}            timeZoneDefinition   The time zone definition that will own the transition.
     * @param   {TimeZonePeriod}                targetPeriod         The period the transition will target.
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime       The transition time to initialize from.
     * @return  {TimeZoneTransition}            A TimeZoneTransition.
     */
    static CreateTimeZoneTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod, transitionTime: TimeZoneInfo.TransitionTime): TimeZoneTransition {
        var transition: TimeZoneTransition;

        if (transitionTime.IsFixedDateRule) {
            transition = new TypeContainer.AbsoluteDayOfMonthTransition(timeZoneDefinition, targetPeriod);
        }
        else {
            transition = new TypeContainer.RelativeDayOfMonthTransition(timeZoneDefinition, targetPeriod);
        }

        transition.InitializeFromTransitionTime(transitionTime);

        return transition;
    }

    /**
     * @internal Creates a time zone transition time.
     * @virtual
     *
     * @return  {TimeZoneInfo.TransitionTime}      A TimeZoneInfo.TransitionTime.
     */
    CreateTransitionTime(): TimeZoneInfo.TransitionTime {
        throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.Transition;
    }

    /**
     * @internal Initializes this transition based on the specified transition time.
     * @virtual
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
    InitializeFromTransitionTime(transitionTime: TimeZoneInfo.TransitionTime): void { }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {

        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames.To:
                    let targetKind: string = jsObject[key][XmlAttributeNames.Kind];
                    let targetId: string = jsObject[key][XmlElementNames.To];

                    switch (targetKind) {
                        case TimeZoneTransition.PeriodTarget:
                            let targetPeriod: IOutParam<TimeZonePeriod> = { outValue: null }
                            if (!this.timeZoneDefinition.Periods.tryGetValue(targetId, targetPeriod)) {
                                throw new ServiceLocalException(
                                    StringHelper.Format(
                                        Strings.PeriodNotFound,
                                        targetId));
                            }
                            else {
                                this.targetPeriod = targetPeriod.outValue;
                            }

                            break;
                        case TimeZoneTransition.GroupTarget:
                            let targetGroup: IOutParam<TimeZoneTransitionGroup> = { outValue: null }

                            if (!this.timeZoneDefinition.TransitionGroups.tryGetValue(targetId, targetGroup)) {
                                throw new ServiceLocalException(
                                    StringHelper.Format(
                                        Strings.TransitionGroupNotFound,
                                        targetId));
                            }
                            else {
                                this.targetGroup = targetGroup.outValue;
                            }

                            break;
                        default:
                            throw new ServiceLocalException(Strings.UnsupportedTimeZonePeriodTransitionTarget);
                    }
                    break;
            }
        }
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.To);

        if (this.targetPeriod != null) {
            writer.WriteAttributeValue(XmlAttributeNames.Kind, TimeZoneTransition.PeriodTarget);
            writer.WriteValue(this.targetPeriod.Id, XmlElementNames.To);
        }
        else {
            writer.WriteAttributeValue(XmlAttributeNames.Kind, TimeZoneTransition.GroupTarget);
            writer.WriteValue(this.targetGroup.Id, XmlElementNames.To);
        }

        writer.WriteEndElement(); // To
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        super.WriteToXml(writer, this.GetXmlElementName());
    }
}

export module TimeZoneTransition {
    export var AbsoluteDateTransition;
    export var AbsoluteDayOfMonthTransition;
    export var RelativeDayOfMonthTransition;
}
