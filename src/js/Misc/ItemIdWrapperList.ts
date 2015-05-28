import ItemId = require("../ComplexProperties/ItemId");
import Item = require("../Core/ServiceObjects/Items/Item");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlNamespace = require("../Enumerations/XmlNamespace");
class ItemIdWrapperList {//IEnumerable<AbstractItemIdWrapper>
    Count: number;
    Item: Item;
    private itemIds: ItemId[];//System.Collections.Generic.List<ItemId>;
    Add(item: Item | ItemId): any { throw new Error("ItemIdWrapperList.ts - Add : Not implemented."); }
    //Add(itemId: ItemId): any { throw new Error("ItemIdWrapperList.ts - Add : Not implemented."); }
    AddRange(items: Item[]| ItemId[]/*System.Collections.Generic.IEnumerable<Item>*/): any { throw new Error("ItemIdWrapperList.ts - AddRange : Not implemented."); }
    //AddRange(itemIds: ItemId[]/*System.Collections.Generic.IEnumerable<ItemId>*/): any { throw new Error("ItemIdWrapperList.ts - AddRange : Not implemented."); }
    GetEnumerator(): any { throw new Error("ItemIdWrapperList.ts - GetEnumerator : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("ItemIdWrapperList.ts - InternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): any { throw new Error("ItemIdWrapperList.ts - WriteToXml : Not implemented."); }
}
export = ItemIdWrapperList;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
