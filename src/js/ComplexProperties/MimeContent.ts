import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class MimeContent extends ComplexProperty {
    CharacterSet: string;
    Content: any[];//System.Byte[];
    private characterSet: string;
    private content: any[];//System.Byte[];
    InternalToJson(service: ExchangeService): any { throw new Error("MimeContent.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("MimeContent.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MimeContent.ts - ReadAttributesFromXml : Not implemented."); }
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MimeContent.ts - ReadTextValueFromXml : Not implemented."); }
    ToString(): string { throw new Error("MimeContent.ts - ToString : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("MimeContent.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MimeContent.ts - WriteElementsToXml : Not implemented."); }
}


//}




