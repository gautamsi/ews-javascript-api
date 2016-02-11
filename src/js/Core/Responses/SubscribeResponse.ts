import {ServiceResponse} from "./ServiceResponse";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class SubscribeResponse<TSubscription> extends ServiceResponse {
    Subscription: TSubscription;
    private subscription: TSubscription;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("SubscribeResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("SubscribeResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}