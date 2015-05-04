import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class MimeContent extends ComplexProperty {
    CharacterSet: string;
    Content: any[];//System.Byte[];
    private characterSet: string;
    private content: any[];//System.Byte[];
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    ToString(): string { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

