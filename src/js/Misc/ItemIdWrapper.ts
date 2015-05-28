import ItemId = require("../ComplexProperties/ItemId");
import AbstractItemIdWrapper = require("./AbstractItemIdWrapper");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class ItemIdWrapper extends AbstractItemIdWrapper {
    private itemId: ItemId;
    IternalToJson(service: ExchangeService): any { throw new Error("ItemIdWrapper.ts - IternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("ItemIdWrapper.ts - WriteToXml : Not implemented."); }
}
export = ItemIdWrapper;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
