class AbstractItemIdWrapper {//IJsonSerializable
    GetItem(): Item { throw new Error("Not implemented."); }
    IternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = AbstractItemIdWrapper;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
