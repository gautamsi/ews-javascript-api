import PropertyDefinitionBase = require("../../PropertyDefinitions/PropertyDefinitionBase");
import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

import SearchFilter = require("./SearchFilter");
class PropertyBasedFilter extends SearchFilter {
	PropertyDefinition: PropertyDefinitionBase;
	private propertyDefinition: PropertyDefinitionBase;
	InternalToJson(service: ExchangeService): any{ throw new Error("SearchFilter_PropertyBasedFilter.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("SearchFilter_PropertyBasedFilter.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("SearchFilter_PropertyBasedFilter.ts - LoadFromJson : Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("SearchFilter_PropertyBasedFilter.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_PropertyBasedFilter.ts - WriteElementsToXml : Not implemented.");}
}
export = PropertyBasedFilter;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------
