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
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    InternalLoad(bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    Load(): any { throw new Error("Not implemented."); }
    LoadAttachmentIdFromJson(jsonObject: any/*JsonObject*/): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    SetFieldValue(field: any, value: any): any { throw new Error("Not implemented."); }
    ThrowIfThisIsNotNew(): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    //Validate(attachmentIndex: number): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = Attachment;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;