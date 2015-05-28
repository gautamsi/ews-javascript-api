import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import ComplexProperty = require("../../ComplexProperties/ComplexProperty");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

import SearchFilter = require("./SearchFilter");
class Not extends SearchFilter {
	SearchFilter: SearchFilter;
	private searchFilter: SearchFilter;
	GetXmlElementName(): string{ throw new Error("SearchFilter_Not.ts - GetXmlElementName : Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("SearchFilter_Not.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("SearchFilter_Not.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("SearchFilter_Not.ts - LoadFromJson : Not implemented.");}
	SearchFilterChanged(complexProperty: ComplexProperty): void{ throw new Error("SearchFilter_Not.ts - SearchFilterChanged : Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("SearchFilter_Not.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_Not.ts - WriteElementsToXml : Not implemented.");}
}
export = Not;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------
