import {ComplexProperty} from "./ComplexProperty";
import {RulePredicates} from "./RulePredicates";
import {RuleActions} from "./RuleActions";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class Rule extends ComplexProperty {
	Id: string;
	DisplayName: string;
	Priority: number;
	IsEnabled: boolean;
	IsNotSupported: boolean;
	IsInError: boolean;
	Conditions: RulePredicates;
	Actions: RuleActions;
	Exceptions: RulePredicates;
	private ruleId: string;
	private displayName: string;
	private priority: number;
	private isEnabled: boolean;
	private isNotSupported: boolean;
	private isInError: boolean;
	private conditions: RulePredicates;
	private actions: RuleActions;
	private exceptions: RulePredicates;
	InternalToJson(service: ExchangeService): any{ throw new Error("Rule.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("Rule.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Rule.ts - LoadFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Rule.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Rule.ts - WriteElementsToXml : Not implemented.");}
}






			

