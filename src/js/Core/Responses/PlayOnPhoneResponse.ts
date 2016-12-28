import {ServiceResponse} from "./ServiceResponse";
import {PhoneCallId} from "../../UnifiedMessaging/PhoneCallId";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class PlayOnPhoneResponse extends ServiceResponse {
    PhoneCallId: PhoneCallId;
    private phoneCallId: PhoneCallId;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("PlayOnPhoneResponse.ts - ReadElementsFromJson : Not implemented."); }
    /**@internal */
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("PlayOnPhoneResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}