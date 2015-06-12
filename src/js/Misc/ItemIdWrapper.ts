import ItemId = require("../ComplexProperties/ItemId");
import AbstractItemIdWrapper = require("./AbstractItemIdWrapper");
import ExchangeService = require("../Core/ExchangeService");
import {EwsLogging} from "../Core/EwsLogging";
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class ItemIdWrapper extends AbstractItemIdWrapper {
    private itemId: ItemId;
    constructor(itemId: ItemId) {
        super();
        EwsLogging.Assert(
            itemId != null,
            "ItemIdWrapper.ctor",
            "itemId is null");

        this.itemId = itemId;
    }
    IternalToJson(service: ExchangeService): any { throw new Error("ItemIdWrapper.ts - IternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): void {this.itemId.WriteToXml(writer);}
}
export = ItemIdWrapper;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
