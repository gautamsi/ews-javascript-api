import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
			
import Recurrence = require("./Recurrence");						
 class IntervalPattern extends Recurrence {
	Interval: number;
	private interval: number;
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Recurrence_IntervalPattern.ts - InternalWritePropertiesToXml : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Recurrence_IntervalPattern.ts - LoadFromJson : Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Recurrence_IntervalPattern.ts - PatternToJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Recurrence_IntervalPattern.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}
export = IntervalPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			
