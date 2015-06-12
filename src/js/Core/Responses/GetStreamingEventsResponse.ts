import {ServiceResponse} from "./ServiceResponse";
import {GetStreamingEventsResults} from "../../Notifications/GetStreamingEventsResults";
import {HangingServiceRequestBase} from "../Requests/HangingServiceRequestBase";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetStreamingEventsResponse extends ServiceResponse {
	Results: GetStreamingEventsResults;
	ErrorSubscriptionIds: string[] /*System.Collections.Generic.List<string>*/;
	private results: GetStreamingEventsResults;
	private request: HangingServiceRequestBase;
	LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean{ throw new Error("GetStreamingEventsResponse.ts - LoadExtraErrorDetailsFromXml : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetStreamingEventsResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}






			

