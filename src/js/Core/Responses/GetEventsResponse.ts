import {ServiceResponse} from "./ServiceResponse";
import {GetEventsResults} from "../../Notifications/GetEventsResults";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetEventsResponse extends ServiceResponse {
	Results: GetEventsResults;
	private results: GetEventsResults;
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("GetEventsResponse.ts - ReadElementsFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetEventsResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}






			

