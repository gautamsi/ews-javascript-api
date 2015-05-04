			
 class GetInboxRulesRequest extends SimpleServiceRequestBase {
	MailboxSmtpAddress: string;
	private mailboxSmtpAddress: string;
	Execute(): GetInboxRulesResponse{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = GetInboxRulesRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			