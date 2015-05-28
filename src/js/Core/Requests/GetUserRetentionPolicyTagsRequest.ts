import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetUserRetentionPolicyTagsResponse = require("../Responses/GetUserRetentionPolicyTagsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetUserRetentionPolicyTagsRequest extends SimpleServiceRequestBase {
	Execute(): GetUserRetentionPolicyTagsResponse{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - ParseResponse : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - WriteElementsToXml : Not implemented.");}
}
export = GetUserRetentionPolicyTagsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
