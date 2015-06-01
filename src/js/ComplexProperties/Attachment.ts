import Item = require("../Core/ServiceObjects/Items/Item");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

import BodyType = require("../Enumerations/BodyType");

import ComplexProperty = require("./ComplexProperty");
class Attachment extends ComplexProperty {
    Id: string;
    Name: string;
    ContentType: string;
    ContentId: string;
    ContentLocation: string;
    Size: number;
    LastModifiedTime: Date;
    IsInline: boolean;
    IsNew: boolean;
    Owner: Item;
    Service: ExchangeService;
    private owner: Item;
    private id: string;
    private name: string;
    private contentType: string;
    private contentId: string;
    private contentLocation: string;
    private size: number;
    private lastModifiedTime: Date;
    private isInline: boolean;
    private service: ExchangeService;
    GetXmlElementName(): string { throw new Error("Attachment.ts - GetXmlElementName : Not implemented."); }
    InternalLoad(bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Attachment.ts - InternalLoad : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Attachment.ts - InternalToJson : Not implemented."); }
    Load(): any { throw new Error("Attachment.ts - Load : Not implemented."); }
    LoadAttachmentIdFromJson(jsonObject: any/*JsonObject*/): any { throw new Error("Attachment.ts - LoadAttachmentIdFromJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Attachment.ts - LoadFromJson : Not implemented."); }
    SetFieldValue(field: any, value: any): any { throw new Error("Attachment.ts - SetFieldValue : Not implemented."); }
    ThrowIfThisIsNotNew(): any { throw new Error("Attachment.ts - ThrowIfThisIsNotNew : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Attachment.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    //Validate(attachmentIndex: number): any { throw new Error("Attachment.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Attachment.ts - WriteElementsToXml : Not implemented."); }
}
export = Attachment;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
