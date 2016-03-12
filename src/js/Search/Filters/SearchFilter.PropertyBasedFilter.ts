import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";

import {SearchFilter} from "./SearchFilter";
export class PropertyBasedFilter extends SearchFilter {
	PropertyDefinition: PropertyDefinitionBase;
	private propertyDefinition: PropertyDefinitionBase;
	InternalToJson(service: ExchangeService): any{ throw new Error("SearchFilter_PropertyBasedFilter.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("SearchFilter_PropertyBasedFilter.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("SearchFilter_PropertyBasedFilter.ts - LoadFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("SearchFilter_PropertyBasedFilter.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_PropertyBasedFilter.ts - WriteElementsToXml : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------

