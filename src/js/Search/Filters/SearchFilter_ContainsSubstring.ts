import PropertyBasedFilter = require("./SearchFilter_PropertyBasedFilter");
import ContainmentMode = require("../../Enumerations/ContainmentMode");
import ComparisonMode = require("../../Enumerations/ComparisonMode");
import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

 class ContainsSubstring extends PropertyBasedFilter {
	ContainmentMode: ContainmentMode;
	ComparisonMode: ComparisonMode;
	Value: string;
	private containmentMode: ContainmentMode;
	private comparisonMode: ComparisonMode;
	private value: string;
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	ReadAttributesFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = ContainsSubstring;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------
