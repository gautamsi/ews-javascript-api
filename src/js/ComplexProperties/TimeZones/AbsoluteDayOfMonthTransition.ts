import {TimeZonePeriod} from "./TimeZonePeriod";
import {TimeZoneDefinition} from "./TimeZoneDefinition";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {AbsoluteMonthTransition} from "./AbsoluteMonthTransition";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class AbsoluteDayOfMonthTransition extends AbsoluteMonthTransition {
    get DayOfMonth(): number{return this.dayOfMonth;}
    private dayOfMonth: number = null;
    
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition, targetPeriod: TimeZonePeriod);
    constructor(timeZoneDefinition, targetPeriod?: TimeZonePeriod) {
        super(timeZoneDefinition, targetPeriod);
        this.dayOfMonth = timeZoneDefinition
    }

    CreateTransitionTime(): any {
        throw new Error("AbsoluteDayOfMonthTransition.ts - CreateTransitionTime : Not implemented.");
        // return TimeZoneInfo.TransitionTime.CreateFixedDateRule(
        //         new DateTime(this.TimeOffset.Ticks),
        //         this.Month,
        //         this.DayOfMonth); 
    }
    GetXmlElementName(): string { return XmlElementNames.RecurringDateTransition; }
    InitializeFromTransitionTime(transitionTime: any): any {
        super.InitializeFromTransitionTime(transitionTime);

        this.dayOfMonth = transitionTime.Day;
    }
    //ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("AbsoluteDayOfMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.Day,
            this.dayOfMonth);
    }
}