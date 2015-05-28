import ServiceResponse = require("./ServiceResponse");
import RuleCollection = require("../../ComplexProperties/RuleCollection");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
			
 class GetInboxRulesResponse extends ServiceResponse {
	Rules: RuleCollection;
	private ruleCollection: RuleCollection;
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetInboxRulesResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}
export = GetInboxRulesResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
