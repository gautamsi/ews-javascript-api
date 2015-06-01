import DayOfTheWeekIndex = require("../../../Enumerations/DayOfTheWeekIndex");
import DayOfTheWeek = require("../../../Enumerations/DayOfTheWeek");
import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
			
 import IntervalPattern = require("./Recurrence_IntervalPattern");						
class RelativeMonthlyPattern extends IntervalPattern {
	XmlElementName: string;
	DayOfTheWeekIndex: DayOfTheWeekIndex;
	DayOfTheWeek: DayOfTheWeek;
	private dayOfTheWeek: any /*Nullable<DayOfTheWeek>*/;
	private dayOfTheWeekIndex: any /*Nullable<DayOfTheWeekIndex>*/;
	InternalValidate(): void{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - InternalValidate : Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - InternalWritePropertiesToXml : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - LoadFromJson : Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - PatternToJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}
export = RelativeMonthlyPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			
