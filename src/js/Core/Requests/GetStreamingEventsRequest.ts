import HangingServiceRequestBase = require("./HangingServiceRequestBase");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetStreamingEventsRequest extends HangingServiceRequestBase {
	 static HeartbeatFrequencyDefault: number = 45000;
	HeartbeatFrequency: number;
	private subscriptionIds: string[] /*System.Collections.Generic.IEnumerable<string>*/;
	private connectionTimeout: number;
	private static heartbeatFrequency: number;
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = GetStreamingEventsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
