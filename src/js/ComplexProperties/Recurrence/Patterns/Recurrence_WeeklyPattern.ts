import ComplexProperty = require("../../ComplexProperty");
import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
import DayOfTheWeekCollection = require("../DayOfTheWeekCollection");						
			
import IntervalPattern = require("./Recurrence_IntervalPattern");						
class WeeklyPattern extends IntervalPattern {
	XmlElementName: string;
	DaysOfTheWeek: DayOfTheWeekCollection;
	FirstDayOfWeek: any /*System.DayOfWeek*/;
	private daysOfTheWeek: DayOfTheWeekCollection;
	private firstDayOfWeek: any /*System.Nullable<System.DayOfWeek>*/;
	DaysOfTheWeekChanged(complexProperty: ComplexProperty): void{ throw new Error("Recurrence_WeeklyPattern.ts - DaysOfTheWeekChanged : Not implemented.");}
	InternalValidate(): void{ throw new Error("Recurrence_WeeklyPattern.ts - InternalValidate : Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Recurrence_WeeklyPattern.ts - InternalWritePropertiesToXml : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Recurrence_WeeklyPattern.ts - LoadFromJson : Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Recurrence_WeeklyPattern.ts - PatternToJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Recurrence_WeeklyPattern.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}
export = WeeklyPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			
