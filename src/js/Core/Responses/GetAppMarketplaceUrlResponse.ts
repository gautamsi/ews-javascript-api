import ServiceResponse = require("./ServiceResponse");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
			
 class GetAppMarketplaceUrlResponse extends ServiceResponse {
	AppMarketplaceUrl: string;
	private appMarketplaceUrl: string;
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetAppMarketplaceUrlResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}
export = GetAppMarketplaceUrlResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
