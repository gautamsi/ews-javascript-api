import ServiceResponse = require("./ServiceResponse");
import NonIndexableItemDetailsResult = require("../../MailboxSearch/NonIndexableItemDetailsResult");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetNonIndexableItemDetailsResponse extends ServiceResponse {
    NonIndexableItemsResult: NonIndexableItemDetailsResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetNonIndexableItemDetailsResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
