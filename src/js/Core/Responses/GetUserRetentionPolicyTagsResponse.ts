import ServiceResponse = require("./ServiceResponse");
import RetentionPolicyTag = require("../../Elc/RetentionPolicyTag");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
			
 class GetUserRetentionPolicyTagsResponse extends ServiceResponse {
	RetentionPolicyTags: RetentionPolicyTag[];
	private retentionPolicyTags: RetentionPolicyTag[] /*System.Collections.Generic.List<RetentionPolicyTag>*/;
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("GetUserRetentionPolicyTagsResponse.ts - ReadElementsFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetUserRetentionPolicyTagsResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}
export = GetUserRetentionPolicyTagsResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
