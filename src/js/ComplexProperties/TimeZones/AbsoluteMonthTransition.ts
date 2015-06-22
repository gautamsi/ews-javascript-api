import {TimeZonePeriod} from "./TimeZonePeriod";
import {TimeZoneDefinition} from "./TimeZoneDefinition";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {EwsUtilities} from "../../Core/EwsUtilities";
import {TimeSpan} from "../../DateTime";
import {ServiceLocalException} from "../../Exceptions/ServiceLocalException";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {TimeZoneTransition} from "./TimeZoneTransition";
export class AbsoluteMonthTransition extends TimeZoneTransition {
    get TimeOffset(): TimeSpan { return this.timeOffset; }
    get Month(): number { return this.month; }
    private timeOffset: TimeSpan = null;
    private month: number = null;
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition, targetPeriod: TimeZonePeriod);
    constructor(timeZoneDefinition, targetPeriod?: TimeZonePeriod) {
        super(timeZoneDefinition, targetPeriod);
    }
    InitializeFromTransitionTime(transitionTime: any): any { throw new Error("AbsoluteMonthTransition.ts - InitializeFromTransitionTime : Not implemented."); }
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("AbsoluteMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
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

