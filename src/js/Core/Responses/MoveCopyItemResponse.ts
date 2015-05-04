import ServiceResponse = require("./ServiceResponse");
import Item = require("../ServiceObjects/Items/Item");
import ExchangeService = require("../ExchangeService");
import JsonObject = require("../JsonObject");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class MoveCopyItemResponse extends ServiceResponse {
    Item: Item;
    private item: Item;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = MoveCopyItemResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
