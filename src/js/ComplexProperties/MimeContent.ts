import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class MimeContent extends ComplexProperty {
    CharacterSet: string;
    Content: any[];//System.Byte[];
    private characterSet: string;
    private content: any[];//System.Byte[];
    InternalToJson(service: ExchangeService): any { throw new Error("MimeContent.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("MimeContent.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("MimeContent.ts - ReadAttributesFromXml : Not implemented."); }
    ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("MimeContent.ts - ReadTextValueFromXml : Not implemented."); }
    ToString(): string { throw new Error("MimeContent.ts - ToString : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("MimeContent.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MimeContent.ts - WriteElementsToXml : Not implemented."); }
}
export = MimeContent;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

