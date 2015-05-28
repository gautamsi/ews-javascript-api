import ServiceResponse = require("./ServiceResponse");
import GetEventsResults = require("../../Notifications/GetEventsResults");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
			
 class GetEventsResponse extends ServiceResponse {
	Results: GetEventsResults;
	private results: GetEventsResults;
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("GetEventsResponse.ts - ReadElementsFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetEventsResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}
export = GetEventsResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
