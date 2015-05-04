import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
			
 class RulePredicateSizeRange extends ComplexProperty {
	MinimumSize: number;
	MaximumSize: number;
	private minimumSize: number;
	private maximumSize: number;
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = RulePredicateSizeRange;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
