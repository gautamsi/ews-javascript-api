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
	GetEnumerator(): RuleError[] /*System.Collections.Generic.IEnumerator<RuleError>*/{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	SetOperationByIndex(operations: RuleOperation[] /*System.Collections.Generic.IEnumerator<RuleOperation>*/): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = RuleOperationError;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
