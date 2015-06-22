import {ComplexProperty} from "./ComplexProperty";
import {RuleOperation} from "./RuleOperation";
import {RuleError} from "./RuleError";
import {RuleErrorCollection} from "./RuleErrorCollection";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class RuleOperationError extends ComplexProperty {
	Operation: RuleOperation;
	Count: number;
	Item: RuleError;
	private operationIndex: number;
	private operation: RuleOperation;
	private ruleErrors: RuleErrorCollection;
	GetEnumerator(): RuleError[] /*System.Collections.Generic.IEnumerator<RuleError>*/{ throw new Error("RuleOperationError.ts - GetEnumerator : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("RuleOperationError.ts - LoadFromJson : Not implemented.");}
	SetOperationByIndex(operations: RuleOperation[] /*System.Collections.Generic.IEnumerator<RuleOperation>*/): void{ throw new Error("RuleOperationError.ts - SetOperationByIndex : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RuleOperationError.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}






			

