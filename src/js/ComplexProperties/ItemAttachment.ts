import Attachment = require("./Attachment");
import Item = require("../Core/ServiceObjects/Items/Item");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");

 class ItemAttachment<TItem extends Item> extends Attachment {
    Item: Item;
    private item: Item;
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    ItemChanged(serviceObject: ServiceObject): any { throw new Error("Not implemented."); }
    //Load(additionalProperties: any): any { throw new Error("Not implemented."); }
    //Load(additionalProperties: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
    //Load(bodyType: BodyType, additionalProperties: any): any { throw new Error("Not implemented."); }
    //Load(bodyType: BodyType, additionalProperties: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    TryReadElementFromXmlToPatch(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    //Validate(attachmentIndex: number): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

 export = ItemAttachment;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;