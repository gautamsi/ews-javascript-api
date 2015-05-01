class ByteArrayArray extends ComplexProperty {
    private static ItemXmlElementName: string = "Base64Binary";
    Content: any[];// System.Byte[][];
    private content: any[];// System.Byte[][];//System.Collections.Generic.List<T>;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
