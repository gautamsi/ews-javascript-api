import AbsoluteMonthTransition = require("./AbsoluteMonthTransition");
import DayOfTheWeek = require("../../Enumerations/DayOfTheWeek");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
			
 class RelativeDayOfMonthTransition extends AbsoluteMonthTransition {
	DayOfTheWeek: DayOfTheWeek;
	WeekIndex: number;
	private dayOfTheWeek: DayOfTheWeek;
	private weekIndex: number;
	CreateTransitionTime(): any /*System.TimeZoneInfo.TransitionTime*/{ throw new Error("RelativeDayOfMonthTransition.ts - CreateTransitionTime : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("RelativeDayOfMonthTransition.ts - GetXmlElementName : Not implemented.");}
	InitializeFromTransitionTime(transitionTime: any /*System.TimeZoneInfo.TransitionTime*/): void{ throw new Error("RelativeDayOfMonthTransition.ts - InitializeFromTransitionTime : Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RelativeDayOfMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("RelativeDayOfMonthTransition.ts - WriteElementsToXml : Not implemented.");}
}
export = RelativeDayOfMonthTransition;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
