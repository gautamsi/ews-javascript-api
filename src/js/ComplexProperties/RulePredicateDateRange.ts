import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class RulePredicateDateRange extends ComplexProperty {
	Start: Date;
	End: Date;
	private start: Date;
	private end: Date;
	InternalToJson(service: ExchangeService): any{ throw new Error("RulePredicateDateRange.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("RulePredicateDateRange.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("RulePredicateDateRange.ts - LoadFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RulePredicateDateRange.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("RulePredicateDateRange.ts - WriteElementsToXml : Not implemented.");}
}






			

