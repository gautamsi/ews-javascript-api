import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetInboxRulesResponse = require("../Responses/GetInboxRulesResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetInboxRulesRequest extends SimpleServiceRequestBase {
	MailboxSmtpAddress: string;
	private mailboxSmtpAddress: string;
	Execute(): GetInboxRulesResponse{ throw new Error("GetInboxRulesRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetInboxRulesRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetInboxRulesRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetInboxRulesRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("GetInboxRulesRequest.ts - ParseResponse : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetInboxRulesRequest.ts - WriteElementsToXml : Not implemented.");}
}
export = GetInboxRulesRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
