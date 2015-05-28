import AbstractItemIdWrapper = require("./AbstractItemIdWrapper");
import Item = require("../Core/ServiceObjects/Items/Item");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class ItemWrapper extends AbstractItemIdWrapper {
    private item: Item;
    GetItem(): Item { throw new Error("ItemWrapper.ts - GetItem : Not implemented."); }
    IternalToJson(service: ExchangeService): any { throw new Error("ItemWrapper.ts - IternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("ItemWrapper.ts - WriteToXml : Not implemented."); }
}
export = ItemWrapper;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
