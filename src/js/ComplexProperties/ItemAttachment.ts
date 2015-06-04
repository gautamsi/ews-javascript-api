import Attachment = require("./Attachment");
import Item = require("../Core/ServiceObjects/Items/Item");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");

 class ItemAttachment extends Attachment {
    Item: Item;
    private item: Item;
    GetXmlElementName(): string { throw new Error("ItemAttachment.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("ItemAttachment.ts - InternalToJson : Not implemented."); }
    ItemChanged(serviceObject: ServiceObject): any { throw new Error("ItemAttachment.ts - ItemChanged : Not implemented."); }
    //Load(additionalProperties: any): any { throw new Error("ItemAttachment.ts - Load : Not implemented."); }
    //Load(additionalProperties: System.Collections.Generic.IEnumerable<T>): any { throw new Error("ItemAttachment.ts - Load : Not implemented."); }
    //Load(bodyType: BodyType, additionalProperties: any): any { throw new Error("ItemAttachment.ts - Load : Not implemented."); }
    //Load(bodyType: BodyType, additionalProperties: System.Collections.Generic.IEnumerable<T>): any { throw new Error("ItemAttachment.ts - Load : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ItemAttachment.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ItemAttachment.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    ReadElementsFromXmlJsObjectToPatch(reader: EwsServiceXmlReader): boolean { throw new Error("ItemAttachment.ts - TryReadElementFromXmlToPatch : Not implemented."); }
    //Validate(attachmentIndex: number): any { throw new Error("ItemAttachment.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ItemAttachment.ts - WriteElementsToXml : Not implemented."); }
}

 export = ItemAttachment;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
