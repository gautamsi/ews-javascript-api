import ServiceResponse = require("./ServiceResponse");
import MailboxHoldResult = require("../../MailboxSearch/MailboxHoldResult");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetHoldOnMailboxesResponse extends ServiceResponse {
    HoldResult: MailboxHoldResult;
    private holdResult: MailboxHoldResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetHoldOnMailboxesResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetHoldOnMailboxesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = GetHoldOnMailboxesResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
