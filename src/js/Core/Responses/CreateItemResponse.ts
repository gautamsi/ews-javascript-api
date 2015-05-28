import CreateItemResponseBase = require("./CreateItemResponseBase");
import Item = require("../ServiceObjects/Items/Item");
import ExchangeService = require("../ExchangeService");
class CreateItemResponse extends CreateItemResponseBase {
    private item: Item;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("CreateItemResponse.ts - GetObjectInstance : Not implemented."); }
    Loaded(): any { throw new Error("CreateItemResponse.ts - Loaded : Not implemented."); }
}
export = CreateItemResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
