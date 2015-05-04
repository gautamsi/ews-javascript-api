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
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = RuleError;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
