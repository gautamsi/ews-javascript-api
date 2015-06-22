import {Attachment} from "./Attachment";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class FileAttachment extends Attachment {
    FileName: string;
    ContentStream: any;//System.IO.Stream;
    Content: any[];//System.Byte[];
    IsContactPhoto: boolean;
    private fileName: string;
    private contentStream: any;//System.IO.Stream;
    private content: any[];//System.Byte[];
    private loadToStream: any;//System.IO.Stream;
    private isContactPhoto: boolean;
    GetXmlElementName(): string { throw new Error("FileAttachment.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("FileAttachment.ts - InternalToJson : Not implemented."); }
    //Load(stream: System.IO.Stream): any { throw new Error("FileAttachment.ts - Load : Not implemented."); }
    //Load(fileName: string): any { throw new Error("FileAttachment.ts - Load : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("FileAttachment.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("FileAttachment.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    ReadElementsFromXmlJsObjectToPatch(reader: EwsServiceXmlReader): boolean { throw new Error("FileAttachment.ts - TryReadElementFromXmlToPatch : Not implemented."); }
    //Validate(attachmentIndex: number): any { throw new Error("FileAttachment.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("FileAttachment.ts - WriteElementsToXml : Not implemented."); }
}


//}



