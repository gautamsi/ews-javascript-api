import Attachment = require("./Attachment");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class FileAttachment extends Attachment {
    FileName: string;
    ContentStream: any;//System.IO.Stream;
    Content: any[];//System.Byte[];
    IsContactPhoto: boolean;
    private fileName: string;
    private contentStream: any;//System.IO.Stream;
    private content: any[];//System.Byte[];
    private loadToStream: any;//System.IO.Stream;
    private isContactPhoto: boolean;
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    //Load(stream: System.IO.Stream): any { throw new Error("Not implemented."); }
    //Load(fileName: string): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    TryReadElementFromXmlToPatch(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    //Validate(attachmentIndex: number): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
