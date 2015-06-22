import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class RulePredicateSizeRange extends ComplexProperty {
	MinimumSize: number;
	MaximumSize: number;
	private minimumSize: number;
	private maximumSize: number;
	InternalToJson(service: ExchangeService): any{ throw new Error("RulePredicateSizeRange.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("RulePredicateSizeRange.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("RulePredicateSizeRange.ts - LoadFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RulePredicateSizeRange.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("RulePredicateSizeRange.ts - WriteElementsToXml : Not implemented.");}
}






			

