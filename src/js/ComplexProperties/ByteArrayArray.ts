import {ExchangeService} from "../Core/ExchangeService";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {ComplexProperty} from "./ComplexProperty";
export class ByteArrayArray extends ComplexProperty {
    private static ItemXmlElementName: string = "Base64Binary";
    //ref: bytearray not implemented here, storing base64 value instead
    private content: string[] = [];// System.Byte[][];//System.Collections.Generic.List<T>;
    get Content(): string[] {// System.Byte[][];
        return this.content;
    }

    InternalToJson(service: ExchangeService): any { throw new Error("ByteArrayArray.ts - InternalToJson : Not implemented."); }
    LoadFromXmlJsObject(jsonCollection: any, serviceExchangeService): void {
        if (jsonCollection !== null && jsonCollection[ByteArrayArray.ItemXmlElementName]) {
            var binarydata: any[] = EwsServiceJsonReader.ReadAsArray(jsonCollection, ByteArrayArray.ItemXmlElementName);
            for (var blob of binarydata) {
                this.content.push(blob);//ref: storing original base64 content //EwsServiceJsonReader.ReadBase64ElementValue(blob));
            }
        }

    }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        for (var item of this.content) {
            writer.WriteStartElement(XmlNamespace.Types, ByteArrayArray.ItemXmlElementName);
            writer.WriteValue(item, null);
            //writer.WriteBase64ElementValue(item);
            writer.WriteEndElement();
        }
    }
}


