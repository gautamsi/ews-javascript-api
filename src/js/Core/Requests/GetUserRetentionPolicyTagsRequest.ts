import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetUserRetentionPolicyTagsResponse = require("../Responses/GetUserRetentionPolicyTagsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetUserRetentionPolicyTagsRequest extends SimpleServiceRequestBase {
	Execute(): GetUserRetentionPolicyTagsResponse{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = GetUserRetentionPolicyTagsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
