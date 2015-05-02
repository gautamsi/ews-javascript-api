class ItemWrapper extends AbstractItemIdWrapper {
    private item: Item;
    GetItem(): Item { throw new Error("Not implemented."); }
    IternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = ItemWrapper;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
