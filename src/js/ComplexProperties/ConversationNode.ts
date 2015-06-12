import {ComplexProperty} from "./ComplexProperty";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {PropertySet} from "../Core/PropertySet";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class ConversationNode extends ComplexProperty {
    InternetMessageId: string;
    ParentInternetMessageId: string;
    Items: Item[];// System.Collections.Generic.List<Item>;
    private propertySet: PropertySet;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("ConversationNode.ts - GetObjectInstance : Not implemented."); }
    GetXmlElementName(): string { throw new Error("ConversationNode.ts - GetXmlElementName : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ConversationNode.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ConversationNode.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


