import ServiceResponse = require("./ServiceResponse");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
			
 class GetAppMarketplaceUrlResponse extends ServiceResponse {
	AppMarketplaceUrl: string;
	private appMarketplaceUrl: string;
	ReadElementsFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = GetAppMarketplaceUrlResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
