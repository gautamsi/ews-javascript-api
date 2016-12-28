import {TimeZonePeriod} from "./TimeZonePeriod";
import {TimeZoneDefinition} from "./TimeZoneDefinition";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {DayOfTheWeek} from "../../Enumerations/DayOfTheWeek";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {AbsoluteMonthTransition} from "./AbsoluteMonthTransition";
export class RelativeDayOfMonthTransition extends AbsoluteMonthTransition {
	get DayOfTheWeek(): DayOfTheWeek { return this.dayOfTheWeek; }
	get WeekIndex(): number { return this.weekIndex; }
	private dayOfTheWeek: DayOfTheWeek = DayOfTheWeek.Sunday;
	private weekIndex: number = null;

	constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition, targetPeriod: TimeZonePeriod);
    constructor(timeZoneDefinition, targetPeriod?: TimeZonePeriod) {
        super(timeZoneDefinition, targetPeriod);
    }

	CreateTransitionTime(): any /*System.TimeZoneInfo.TransitionTime*/ { throw new Error("RelativeDayOfMonthTransition.ts - CreateTransitionTime : Not implemented."); 
				// return TimeZoneInfo.TransitionTime.CreateFloatingDateRule(
        //         new DateTime(this.TimeOffset.Ticks),
        //         this.Month,
        //         this.WeekIndex == -1 ? 5 : this.WeekIndex,
        //         EwsUtilities.EwsToSystemDayOfWeek(this.DayOfTheWeek));

		}
	GetXmlElementName(): string { return XmlElementNames.RecurringDayTransition;}
	InitializeFromTransitionTime(transitionTime: any /*System.TimeZoneInfo.TransitionTime*/): void { throw new Error("RelativeDayOfMonthTransition.ts - InitializeFromTransitionTime : Not implemented."); }
	//ReadElementsFromXmlJsObject(reader: any): boolean{ throw new Error("RelativeDayOfMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	/**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		super.WriteElementsToXml(writer);

		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.DayOfWeek,
			this.dayOfTheWeek);

		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.Occurrence,
			this.weekIndex);
	}
}