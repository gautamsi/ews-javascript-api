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
	GetXmlElementName(): string{ throw new Error("SearchFilter_ContainsSubstring.ts - GetXmlElementName : Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("SearchFilter_ContainsSubstring.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("SearchFilter_ContainsSubstring.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("SearchFilter_ContainsSubstring.ts - LoadFromJson : Not implemented.");}
	ReadAttributesFromXml(reader: EwsServiceXmlReader): void{ throw new Error("SearchFilter_ContainsSubstring.ts - ReadAttributesFromXml : Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("SearchFilter_ContainsSubstring.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_ContainsSubstring.ts - WriteAttributesToXml : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_ContainsSubstring.ts - WriteElementsToXml : Not implemented.");}
}
export = ContainsSubstring;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------
