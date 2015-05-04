			
 class InstallAppRequest extends SimpleServiceRequestBase {
	private manifestStream: any /*System.IO.Stream*/;
	Execute(): InstallAppResponse{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = InstallAppRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			