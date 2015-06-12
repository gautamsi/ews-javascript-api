import {ComplexProperty} from "./ComplexProperty";
import {RuleProperty} from "../Enumerations/RuleProperty";
import {RuleErrorCode} from "../Enumerations/RuleErrorCode";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class RuleError extends ComplexProperty {
	RuleProperty: RuleProperty;
	ErrorCode: RuleErrorCode;
	ErrorMessage: string;
	Value: string;
	private ruleProperty: RuleProperty;
	private errorCode: RuleErrorCode;
	private errorMessage: string;
	private value: string;
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("RuleError.ts - LoadFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RuleError.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}






			

