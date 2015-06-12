import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";

import {PropertyBasedFilter} from "./SearchFilter_PropertyBasedFilter";
export class RelationalFilter extends PropertyBasedFilter {
	OtherPropertyDefinition: PropertyDefinitionBase;
	Value: any;
	private otherPropertyDefinition: PropertyDefinitionBase;
	private value: any;
	InternalToJson(service: ExchangeService): any{ throw new Error("SearchFilter_RelationalFilter.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("SearchFilter_RelationalFilter.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("SearchFilter_RelationalFilter.ts - LoadFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("SearchFilter_RelationalFilter.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_RelationalFilter.ts - WriteElementsToXml : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------

