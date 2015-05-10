import ServiceResponse = require("./ServiceResponse");
import GetStreamingEventsResults = require("../../Notifications/GetStreamingEventsResults");
import HangingServiceRequestBase = require("../Requests/HangingServiceRequestBase");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
			
 class GetStreamingEventsResponse extends ServiceResponse {
	Results: GetStreamingEventsResults;
	ErrorSubscriptionIds: string[] /*System.Collections.Generic.List<string>*/;
	private results: GetStreamingEventsResults;
	private request: HangingServiceRequestBase;
	LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean{ throw new Error("Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = GetStreamingEventsResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
