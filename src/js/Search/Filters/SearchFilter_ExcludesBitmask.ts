import {PropertyBasedFilter} from "./SearchFilter_PropertyBasedFilter";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class ExcludesBitmask extends PropertyBasedFilter {
	Bitmask: number;
	private bitmask: number;
	GetXmlElementName(): string{ throw new Error("SearchFilter_ExcludesBitmask.ts - GetXmlElementName : Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("SearchFilter_ExcludesBitmask.ts - InternalToJson : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("SearchFilter_ExcludesBitmask.ts - LoadFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("SearchFilter_ExcludesBitmask.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_ExcludesBitmask.ts - WriteElementsToXml : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------

