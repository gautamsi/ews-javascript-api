import {TimeZonePeriod} from "./TimeZonePeriod";
import {AbsoluteDateTransition} from "./AbsoluteDateTransition";
import {RelativeDayOfMonthTransition} from "./RelativeDayOfMonthTransition";
import {AbsoluteDayOfMonthTransition} from "./AbsoluteDayOfMonthTransition";
import {TimeZoneTransitionGroup} from "./TimeZoneTransitionGroup";
import {TimeZoneDefinition} from "./TimeZoneDefinition";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {StringHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {ServiceLocalException} from "../../Exceptions/ServiceLocalException";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ComplexProperty} from "../ComplexProperty";
export class TimeZoneTransition extends ComplexProperty {
    private static PeriodTarget: string = "Period";
    private static GroupTarget: string = "Group";

    get TargetPeriod(): TimeZonePeriod { return this.targetPeriod; }
    get TargetGroup(): TimeZoneTransitionGroup { return this.targetGroup; }
    private timeZoneDefinition: TimeZoneDefinition;
    private targetPeriod: TimeZonePeriod;
    private targetGroup: TimeZoneTransitionGroup;
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition, targetGroup: TimeZoneTransitionGroup);
    constructor(timeZoneDefinition, targetPeriod: TimeZonePeriod);
    constructor(timeZoneDefinition, targetPeriodOrGroup?: TimeZonePeriod | TimeZoneTransitionGroup) {
        super();
        this.timeZoneDefinition = timeZoneDefinition;

        if (targetPeriodOrGroup instanceof TimeZonePeriod) {
            this.targetPeriod = targetPeriodOrGroup;
        }
        else if (targetPeriodOrGroup instanceof TimeZoneTransitionGroup) {
            this.targetGroup = targetPeriodOrGroup;
        }
    }
    static AbsoluteDateTransition(timeZoneDefinition: TimeZoneDefinition): AbsoluteDateTransition { throw new Error("TimeZoneTransition.ts - uninitialized workaround - bootstrap to prevent circular dependency"); }
    static RelativeDayOfMonthTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod?: TimeZonePeriod): RelativeDayOfMonthTransition { throw new Error("TimeZoneTransition.ts - uninitialized workaround - bootstrap to prevent circular dependency"); }
    static AbsoluteDayOfMonthTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod?: TimeZonePeriod): AbsoluteDayOfMonthTransition { throw new Error("TimeZoneTransition.ts - uninitialized workaround - bootstrap to prevent circular dependency"); }
    //static AbsoluteDateTransition(timeZoneDefinition:TimeZoneDefinition):AbsoluteDateTransition {throw new Error("TimeZoneTransition.ts - uninitialized workaround - bootstrap to prevent circular dependency");}
    Create(timeZoneDefinition: TimeZoneDefinition, xmlElementName: string): TimeZoneTransition {
        switch (xmlElementName) {
            case XmlElementNames.AbsoluteDateTransition:
                return TimeZoneTransition.AbsoluteDateTransition(timeZoneDefinition);//check: avoid circular module loading; new AbsoluteDateTransition(timeZoneDefinition);
            case XmlElementNames.RecurringDayTransition:
                return TimeZoneTransition.RelativeDayOfMonthTransition(timeZoneDefinition);//check: avoid circular module loading new RelativeDayOfMonthTransition(timeZoneDefinition);
            case XmlElementNames.RecurringDateTransition:
                return TimeZoneTransition.AbsoluteDayOfMonthTransition(timeZoneDefinition);//check: avoid circular module loading new AbsoluteDayOfMonthTransition(timeZoneDefinition);
            case XmlElementNames.Transition:
                return new TimeZoneTransition(timeZoneDefinition);
            default:
                throw new ServiceLocalException(
                    StringHelper.Format(
                        Strings.UnknownTimeZonePeriodTransitionType,
                        xmlElementName));
        }
    }
    CreateTimeZoneTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod, transitionTime: any): TimeZoneTransition {
        var transition: TimeZoneTransition;

        if (transitionTime.IsFixedDateRule) {
            transition = TimeZoneTransition.AbsoluteDayOfMonthTransition(timeZoneDefinition, targetPeriod); //check: avoid circular module loadingnew AbsoluteDayOfMonthTransition(timeZoneDefinition, targetPeriod);
        }
        else {
            transition = TimeZoneTransition.RelativeDayOfMonthTransition(timeZoneDefinition, targetPeriod); //check: avoid circular module loadingnew RelativeDayOfMonthTransition(timeZoneDefinition, targetPeriod);
        }

        transition.InitializeFromTransitionTime(transitionTime);

        return transition;
    }
    CreateTransitionTime(): any { throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition); }
    GetXmlElementName(): string { return XmlElementNames.Transition; }
    InitializeFromTransitionTime(transitionTime: any): any { /*virtual method - throw new Error("TimeZoneTransition.ts - InitializeFromTransitionTime : Not implemented.");*/ }
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeZoneTransition.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("TimeZoneTransition.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {

        throw new Error("TimeZoneTransition.ts - LoadFromXmlJsObject : Not implemented.");
        //super.LoadFromXmlJsObject(jsonProperty, service);

        // for(var key in jsonProperty)
        // {
        //     switch (key) {
        //         case XmlElementNames.To:
        //             string targetKind = jsonProperty.ReadAsJsonObject(key).ReadAsString(XmlAttributeNames.Kind);
        //             string targetId = jsonProperty.ReadAsJsonObject(key).ReadAsString(XmlElementNames.Value);

        //             switch (targetKind) {
        //                 case TimeZoneTransition.PeriodTarget:
        //                     if (!this.timeZoneDefinition.Periods.TryGetValue(targetId, out this.targetPeriod)) {
        //                         throw new ServiceLocalException(
        //                             string.Format(
        //                                 Strings.PeriodNotFound,
        //                                 targetId));
        //                     }

        //                     break;
        //                 case TimeZoneTransition.GroupTarget:
        //                     if (!this.timeZoneDefinition.TransitionGroups.TryGetValue(targetId, out this.targetGroup)) {
        //                         throw new ServiceLocalException(
        //                             string.Format(
        //                                 Strings.TransitionGroupNotFound,
        //                                 targetId));
        //                     }

        //                     break;
        //                 default:
        //                     throw new ServiceLocalException(Strings.UnsupportedTimeZonePeriodTransitionTarget);
        //             }
        //             break;
        //     }
        // }
    }
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("TimeZoneTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.To);

        if (this.targetPeriod != null) {
            writer.WriteAttributeValue(null, XmlAttributeNames.Kind, TimeZoneTransition.PeriodTarget);
            writer.WriteValue(this.targetPeriod.Id, XmlElementNames.To);
        }
        else {
            writer.WriteAttributeValue(null, XmlAttributeNames.Kind, TimeZoneTransition.GroupTarget);
            writer.WriteValue(this.targetGroup.Id, XmlElementNames.To);
        }

        writer.WriteEndElement(); // To
    }
    WriteToXml(writer: EwsServiceXmlWriter): void { super.WriteToXml(writer, this.GetXmlElementName()); }
}

