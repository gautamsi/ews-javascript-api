import {ServiceResponse} from "./ServiceResponse";
import {MailboxHoldResult} from "../../MailboxSearch/MailboxHoldResult";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetHoldOnMailboxesResponse extends ServiceResponse {
    HoldResult: MailboxHoldResult;
    private holdResult: MailboxHoldResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetHoldOnMailboxesResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetHoldOnMailboxesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}