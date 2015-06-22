import {HangingServiceRequestBase} from "./HangingServiceRequestBase";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class GetStreamingEventsRequest extends HangingServiceRequestBase {
	 static HeartbeatFrequencyDefault: number = 45000;
	HeartbeatFrequency: number;
	private subscriptionIds: string[] /*System.Collections.Generic.IEnumerable<string>*/;
	private connectionTimeout: number;
	private static heartbeatFrequency: number;
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetStreamingEventsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetStreamingEventsRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetStreamingEventsRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("GetStreamingEventsRequest.ts - ParseResponse : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetStreamingEventsRequest.ts - WriteElementsToXml : Not implemented.");}
}






			

