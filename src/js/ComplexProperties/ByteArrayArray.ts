import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class ByteArrayArray extends ComplexProperty {
    private static ItemXmlElementName: string = "Base64Binary";
    Content: any[];// System.Byte[][];
    private content: any[];// System.Byte[][];//System.Collections.Generic.List<T>;
    InternalToJson(service: ExchangeService): any { throw new Error("ByteArrayArray.ts - InternalToJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ByteArrayArray.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ByteArrayArray.ts - WriteElementsToXml : Not implemented."); }
}


