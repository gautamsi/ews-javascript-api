import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetAppMarketplaceUrlResponse = require("../Responses/GetAppMarketplaceUrlResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetAppMarketplaceUrlRequest extends SimpleServiceRequestBase {
	ApiVersionSupported: string;
	SchemaVersionSupported: string;
	Execute(): GetAppMarketplaceUrlResponse{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = GetAppMarketplaceUrlRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
