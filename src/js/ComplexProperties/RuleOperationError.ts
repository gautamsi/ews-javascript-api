import ComplexProperty = require("./ComplexProperty");
import RuleOperation = require("./RuleOperation");
import RuleError = require("./RuleError");
import RuleErrorCollection = require("./RuleErrorCollection");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
			
 class RuleOperationError extends ComplexProperty {
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
export = RuleOperationError;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
