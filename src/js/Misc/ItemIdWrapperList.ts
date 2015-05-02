class ItemIdWrapperList {//IEnumerable<AbstractItemIdWrapper>
    Count: number;
    Item: Item;
    private itemIds: ItemId[];//System.Collections.Generic.List<ItemId>;
    Add(item: Item | ItemId): any { throw new Error("Not implemented."); }
    //Add(itemId: ItemId): any { throw new Error("Not implemented."); }
    AddRange(items: Item[]| ItemId[]/*System.Collections.Generic.IEnumerable<Item>*/): any { throw new Error("Not implemented."); }
    //AddRange(itemIds: ItemId[]/*System.Collections.Generic.IEnumerable<ItemId>*/): any { throw new Error("Not implemented."); }
    GetEnumerator(): any { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): any { throw new Error("Not implemented."); }
}
export = ItemIdWrapperList;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
