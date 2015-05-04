import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
			
 class SubscriptionBase {
	Service: ExchangeService;
	Id: string;
	Watermark: string;
	UsesWatermark: boolean;
	private service: ExchangeService;
	private id: string;
	private watermark: string;
	LoadFromJson(jsonResponse: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	LoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = SubscriptionBase;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
