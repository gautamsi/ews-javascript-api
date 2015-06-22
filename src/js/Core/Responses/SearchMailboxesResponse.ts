import {ServiceResponse} from "./ServiceResponse";
import {SearchMailboxesResult} from "../../MailboxSearch/SearchMailboxesResult";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class SearchMailboxesResponse extends ServiceResponse {
    SearchResult: SearchMailboxesResult;
    private searchResult: SearchMailboxesResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("SearchMailboxesResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("SearchMailboxesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



