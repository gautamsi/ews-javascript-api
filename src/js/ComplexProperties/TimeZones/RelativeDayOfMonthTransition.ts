import AbsoluteMonthTransition = require("./AbsoluteMonthTransition");
import DayOfTheWeek = require("../../Enumerations/DayOfTheWeek");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
			
 class RelativeDayOfMonthTransition extends AbsoluteMonthTransition {
	DayOfTheWeek: DayOfTheWeek;
	WeekIndex: number;
	private dayOfTheWeek: DayOfTheWeek;
	private weekIndex: number;
	CreateTransitionTime(): any /*System.TimeZoneInfo.TransitionTime*/{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	InitializeFromTransitionTime(transitionTime: any /*System.TimeZoneInfo.TransitionTime*/): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = RelativeDayOfMonthTransition;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
