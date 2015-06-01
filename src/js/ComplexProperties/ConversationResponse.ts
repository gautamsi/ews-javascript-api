import ConversationId = require("./ConversationId");
import ConversationNodeCollection = require("./ConversationNodeCollection");
import ComplexProperty = require("./ComplexProperty");
import PropertySet = require("../Core/PropertySet");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class ConversationResponse extends ComplexProperty {
    ConversationId: ConversationId;
    SyncState: string;
    ConversationNodes: ConversationNodeCollection;
    private propertySet: PropertySet;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ConversationResponse.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ConversationResponse.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = ConversationResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

