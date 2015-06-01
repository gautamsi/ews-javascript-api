import ComplexProperty = require("./ComplexProperty");
import RuleProperty = require("../Enumerations/RuleProperty");
import RuleErrorCode = require("../Enumerations/RuleErrorCode");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
			
 class RuleError extends ComplexProperty {
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
export = RuleError;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
