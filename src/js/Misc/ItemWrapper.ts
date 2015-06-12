import AbstractItemIdWrapper = require("./AbstractItemIdWrapper");
import Item = require("../Core/ServiceObjects/Items/Item");
import ExchangeService = require("../Core/ExchangeService");
import {EwsLogging} from "../Core/EwsLogging";
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class ItemWrapper extends AbstractItemIdWrapper {
    private item: Item;
    constructor(item: Item) {
        super();
        EwsLogging.Assert(
            item != null,
            "ItemWrapper.ctor",
            "item is null");
        EwsLogging.Assert(
            !item.IsNew,
            "ItemWrapper.ctor",
            "item does not have an Id");

        this.item = item;
    }
    GetItem(): Item { return this.item; }
    IternalToJson(service: ExchangeService): any { throw new Error("ItemWrapper.ts - IternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): void { this.item.Id.WriteToXml(writer) }
}
export = ItemWrapper;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
