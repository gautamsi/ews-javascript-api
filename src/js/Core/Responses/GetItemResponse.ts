import ServiceResponse = require("./ServiceResponse");
import Item = require("../ServiceObjects/Items/Item");
import PropertySet = require("../PropertySet");
import ExchangeService = require("../ExchangeService");
import JsonObject = require("../JsonObject");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetItemResponse extends ServiceResponse {
    Item: Item;
    private item: Item;
    private propertySet: PropertySet;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetItemResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
