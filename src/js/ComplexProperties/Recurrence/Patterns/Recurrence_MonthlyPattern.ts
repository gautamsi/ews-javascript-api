import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
			
import IntervalPattern = require("./Recurrence_IntervalPattern");						
 class MonthlyPattern extends IntervalPattern {
	XmlElementName: string;
	DayOfMonth: number;
	private dayOfMonth: number;
	InternalValidate(): void{ throw new Error("Recurrence_MonthlyPattern.ts - InternalValidate : Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Recurrence_MonthlyPattern.ts - InternalWritePropertiesToXml : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Recurrence_MonthlyPattern.ts - LoadFromJson : Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Recurrence_MonthlyPattern.ts - PatternToJson : Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Recurrence_MonthlyPattern.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}
export = MonthlyPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			
