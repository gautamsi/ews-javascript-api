import ServiceResponse = require("./ServiceResponse");
import SearchableMailbox = require("../../MailboxSearch/SearchableMailbox");
import FailedSearchMailbox = require("../../MailboxSearch/FailedSearchMailbox");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetSearchableMailboxesResponse extends ServiceResponse {
    SearchableMailboxes: SearchableMailbox[];
    FailedMailboxes: FailedSearchMailbox[];
    private searchableMailboxes: any[];//System.Collections.Generic.List<T>;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetSearchableMailboxesResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
