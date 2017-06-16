import { Convert } from "../../ExtensionMethods";
import { DateTime } from "../../DateTime";
import { EwsLogging } from "../../Core/EwsLogging";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../../Core/ExchangeService";
import { TimeZoneDefinition } from "./TimeZoneDefinition";
import { TimeZoneInfo } from "../../TimeZoneInfo";
import { TimeZonePeriod } from "./TimeZonePeriod";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { AbsoluteMonthTransition } from "./AbsoluteMonthTransition";
/**
 * @internal Represents a time zone period transition that occurs on a specific day of a specific month.
 */
export class AbsoluteDayOfMonthTransition extends AbsoluteMonthTransition {

    private dayOfMonth: number = null;

    /**
     * @internal Gets the day of then month when this transition occurs.
     */
    get DayOfMonth(): number {
        return this.dayOfMonth;
    }

    /**
     * @internal Initializes a new instance of the **AbsoluteDayOfMonthTransition** class.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition this transition belongs to.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition);
    /**
     * @internal Initializes a new instance of the **AbsoluteDayOfMonthTransition** class.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition this transition belongs to.
     * @param   {TimeZonePeriod}        targetPeriod         The period the transition will target.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod);
    constructor(timeZoneDefinition: TimeZoneDefinition, targetPeriod?: TimeZonePeriod) {
        super(timeZoneDefinition, targetPeriod);
    }

    /**
     * @internal Creates a time zone transition time.
     * @virtual
     *
     * @return  {TimeZoneInfo.TransitionTime}      A TimeZoneInfo.TransitionTime.
     */
    CreateTransitionTime(): TimeZoneInfo.TransitionTime {
        return TimeZoneInfo.TransitionTime.CreateFixedDateRule(
            new DateTime(this.TimeOffset.Milliseconds),
            this.Month,
            this.DayOfMonth);
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.RecurringDateTransition;
    }

    /**
     * @internal Initializes this transition based on the specified transition time.
     * @virtual
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
    InitializeFromTransitionTime(transitionTime: TimeZoneInfo.TransitionTime): void {
        super.InitializeFromTransitionTime(transitionTime);

        this.dayOfMonth = transitionTime.Day;
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        super.LoadFromXmlJsObject(jsObject, service);

        if (jsObject[XmlElementNames.Day]) {
            this.dayOfMonth = Convert.toInt(jsObject[XmlElementNames.Day]);

            EwsLogging.Assert(
                this.dayOfMonth > 0 && this.dayOfMonth <= 31,
                "AbsoluteDayOfMonthTransition.TryReadElementFromXml",
                "dayOfMonth is not in the valid 1 - 31 range.");
        }
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.Day,
            this.dayOfMonth);
    }
}
