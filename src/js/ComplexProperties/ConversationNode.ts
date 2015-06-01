import ComplexProperty = require("./ComplexProperty");
import Item = require("../Core/ServiceObjects/Items/Item");
import PropertySet = require("../Core/PropertySet");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class ConversationNode extends ComplexProperty {
    InternetMessageId: string;
    ParentInternetMessageId: string;
    Items: Item[];// System.Collections.Generic.List<Item>;
    private propertySet: PropertySet;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("ConversationNode.ts - GetObjectInstance : Not implemented."); }
    GetXmlElementName(): string { throw new Error("ConversationNode.ts - GetXmlElementName : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ConversationNode.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ConversationNode.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = ConversationNode;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
