import ItemId = require("../../ComplexProperties/ItemId");
import ServiceResponse = require("./ServiceResponse");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class MarkAsJunkResponse extends ServiceResponse {
    MovedItemId: ItemId;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("MarkAsJunkResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MarkAsJunkResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = MarkAsJunkResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
