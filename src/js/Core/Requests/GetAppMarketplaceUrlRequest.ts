import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetAppMarketplaceUrlResponse = require("../Responses/GetAppMarketplaceUrlResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetAppMarketplaceUrlRequest extends SimpleServiceRequestBase {
	ApiVersionSupported: string;
	SchemaVersionSupported: string;
	Execute(): GetAppMarketplaceUrlResponse{ throw new Error("GetAppMarketplaceUrlRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetAppMarketplaceUrlRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetAppMarketplaceUrlRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetAppMarketplaceUrlRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("GetAppMarketplaceUrlRequest.ts - ParseResponse : Not implemented.");}
	Validate(): void{ throw new Error("GetAppMarketplaceUrlRequest.ts - Validate : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetAppMarketplaceUrlRequest.ts - WriteElementsToXml : Not implemented.");}
}
export = GetAppMarketplaceUrlRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
