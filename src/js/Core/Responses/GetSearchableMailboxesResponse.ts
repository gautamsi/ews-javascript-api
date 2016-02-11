import {ServiceResponse} from "./ServiceResponse";
import {SearchableMailbox} from "../../MailboxSearch/SearchableMailbox";
import {FailedSearchMailbox} from "../../MailboxSearch/FailedSearchMailbox";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetSearchableMailboxesResponse extends ServiceResponse {
    SearchableMailboxes: SearchableMailbox[];
    FailedMailboxes: FailedSearchMailbox[];
    private searchableMailboxes: any[];//System.Collections.Generic.List<T>;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetSearchableMailboxesResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetSearchableMailboxesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}