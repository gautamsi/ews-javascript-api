import ServiceResponse = require("./ServiceResponse");
import ConversationResponse = require("../../ComplexProperties/ConversationResponse");
import PropertySet = require("../PropertySet");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetConversationItemsResponse extends ServiceResponse {
    Conversation: ConversationResponse;
    private propertySet: PropertySet;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetConversationItemsResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetConversationItemsResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = GetConversationItemsResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
