import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {ComplexProperty} from "../../ComplexProperties/ComplexProperty";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";

import {SearchFilter} from "./SearchFilter";
export class Not extends SearchFilter {
	SearchFilter: SearchFilter;
	private searchFilter: SearchFilter;
	GetXmlElementName(): string{ throw new Error("SearchFilter_Not.ts - GetXmlElementName : Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("SearchFilter_Not.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("SearchFilter_Not.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("SearchFilter_Not.ts - LoadFromJson : Not implemented.");}
	SearchFilterChanged(complexProperty: ComplexProperty): void{ throw new Error("SearchFilter_Not.ts - SearchFilterChanged : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("SearchFilter_Not.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_Not.ts - WriteElementsToXml : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------

