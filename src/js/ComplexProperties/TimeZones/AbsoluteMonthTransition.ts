import { Convert } from "../../ExtensionMethods";
import { EwsLogging } from "../../Core/EwsLogging";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { ExchangeService } from "../../Core/ExchangeService";
import { ServiceLocalException } from "../../Exceptions/ServiceLocalException";
import { TimeSpan } from "../../TimeSpan";
import { TimeZoneDefinition } from "./TimeZoneDefinition";
import { TimeZoneInfo } from "../../TimeZoneInfo";
import { TimeZonePeriod } from "./TimeZonePeriod";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { TimeZoneTransition } from "./TimeZoneTransition";
/**
 * @internal Represents the base class for all recurring time zone period transitions.
 */
export abstract class AbsoluteMonthTransition extends TimeZoneTransition {
    private timeOffset: TimeSpan = null;
    private month: number = null;

    /**
     * @internal Gets the time offset from midnight when the transition occurs.
     */
    get TimeOffset(): TimeSpan {
        return this.timeOffset;
    }

    /**
     * @internal Gets the month when the transition occurs.
     */
    get Month(): number {
        return this.month;
    }

    /**
     * @internal Initializes a new instance of the **AbsoluteMonthTransition** class.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition this transition belongs to.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition);
    /**
     * @internal Initializes a new instance of the **AbsoluteMonthTransition** class.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition this transition belongs to.
     * @param   {TimeZonePeriod}        targetPeriod         The period the transition will target.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod);
    constructor(timeZoneDefinition: TimeZoneDefinition, targetPeriod?: TimeZonePeriod) {
        super(timeZoneDefinition, targetPeriod);
    }

    /**
     * @internal Initializes this transition based on the specified transition time.
     * @virtual
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
    InitializeFromTransitionTime(transitionTime: TimeZoneInfo.TransitionTime): void {

    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        super.LoadFromXmlJsObject(jsObject, service);

        if (jsObject[XmlElementNames.TimeOffset]) {
            this.timeOffset = EwsUtilities.XSDurationToTimeSpan(jsObject[XmlElementNames.TimeOffset]);
        }

        if (jsObject[XmlElementNames.Month]) {
            this.month = Convert.toInt(jsObject[XmlElementNames.Month]);

            EwsLogging.Assert(
                this.month > 0 && this.month <= 12,
                "AbsoluteMonthTransition.TryReadElementFromXml",
                "month is not in the valid 1 - 12 range.");
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
            XmlElementNames.TimeOffset,
            EwsUtilities.TimeSpanToXSDuration(this.timeOffset));

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.Month,
            this.month);
    }
}
