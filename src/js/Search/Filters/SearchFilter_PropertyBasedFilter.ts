import PropertyDefinitionBase = require("../../PropertyDefinitions/PropertyDefinitionBase");
import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

import SearchFilter = require("./SearchFilter");
class PropertyBasedFilter extends SearchFilter {
	PropertyDefinition: PropertyDefinitionBase;
	private propertyDefinition: PropertyDefinitionBase;
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = PropertyBasedFilter;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------
