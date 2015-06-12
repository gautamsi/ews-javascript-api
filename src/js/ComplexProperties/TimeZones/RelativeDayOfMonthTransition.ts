import {AbsoluteMonthTransition} from "./AbsoluteMonthTransition";
import {DayOfTheWeek} from "../../Enumerations/DayOfTheWeek";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class RelativeDayOfMonthTransition extends AbsoluteMonthTransition {
	DayOfTheWeek: DayOfTheWeek;
	WeekIndex: number;
	private dayOfTheWeek: DayOfTheWeek;
	private weekIndex: number;
	CreateTransitionTime(): any /*System.TimeZoneInfo.TransitionTime*/{ throw new Error("RelativeDayOfMonthTransition.ts - CreateTransitionTime : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("RelativeDayOfMonthTransition.ts - GetXmlElementName : Not implemented.");}
	InitializeFromTransitionTime(transitionTime: any /*System.TimeZoneInfo.TransitionTime*/): void{ throw new Error("RelativeDayOfMonthTransition.ts - InitializeFromTransitionTime : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RelativeDayOfMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("RelativeDayOfMonthTransition.ts - WriteElementsToXml : Not implemented.");}
}






			

