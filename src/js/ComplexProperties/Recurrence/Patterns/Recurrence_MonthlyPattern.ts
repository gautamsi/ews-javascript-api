import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
			
import IntervalPattern = require("./Recurrence_IntervalPattern");						
 class MonthlyPattern extends IntervalPattern {
	XmlElementName: string;
	DayOfMonth: number;
	private dayOfMonth: number;
	InternalValidate(): void{ throw new Error("Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = MonthlyPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			
