import {ServiceResponse} from "./ServiceResponse";
import {NonIndexableItemDetailsResult} from "../../MailboxSearch/NonIndexableItemDetailsResult";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetNonIndexableItemDetailsResponse extends ServiceResponse {
    NonIndexableItemsResult: NonIndexableItemDetailsResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetNonIndexableItemDetailsResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetNonIndexableItemDetailsResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}