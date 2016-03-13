import {PropertyBasedFilter} from "./SearchFilter.PropertyBasedFilter";
import {ContainmentMode} from "../../Enumerations/ContainmentMode";
import {ComparisonMode} from "../../Enumerations/ComparisonMode";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class ContainsSubstring extends PropertyBasedFilter {
	ContainmentMode: ContainmentMode;
	ComparisonMode: ComparisonMode;
	Value: string;
	private containmentMode: ContainmentMode;
	private comparisonMode: ComparisonMode;
	private value: string;
	GetXmlElementName(): string{ throw new Error("SearchFilter.ContainsSubstring.ts - GetXmlElementName : Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("SearchFilter.ContainsSubstring.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("SearchFilter.ContainsSubstring.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("SearchFilter.ContainsSubstring.ts - LoadFromJson : Not implemented.");}
	ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("SearchFilter.ContainsSubstring.ts - ReadAttributesFromXml : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("SearchFilter.ContainsSubstring.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter.ContainsSubstring.ts - WriteAttributesToXml : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter.ContainsSubstring.ts - WriteElementsToXml : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------

