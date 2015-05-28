import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class ByteArrayArray extends ComplexProperty {
    private static ItemXmlElementName: string = "Base64Binary";
    Content: any[];// System.Byte[][];
    private content: any[];// System.Byte[][];//System.Collections.Generic.List<T>;
    InternalToJson(service: ExchangeService): any { throw new Error("ByteArrayArray.ts - InternalToJson : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ByteArrayArray.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ByteArrayArray.ts - WriteElementsToXml : Not implemented."); }
}
export = ByteArrayArray;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
