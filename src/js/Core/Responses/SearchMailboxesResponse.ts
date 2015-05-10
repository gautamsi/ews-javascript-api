import ServiceResponse = require("./ServiceResponse");
import SearchMailboxesResult = require("../../MailboxSearch/SearchMailboxesResult");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class SearchMailboxesResponse extends ServiceResponse {
    SearchResult: SearchMailboxesResult;
    private searchResult: SearchMailboxesResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = SearchMailboxesResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
