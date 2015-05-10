import ServiceResponse = require("./ServiceResponse");
import Conversation = require("../ServiceObjects/Items/Conversation");
import FindConversationResults = require("../../Search/FindConversationResults");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class FindConversationResponse extends ServiceResponse {
    Conversations: Conversation[];//System.Collections.ObjectModel.Collection<Conversation>;
    Results: FindConversationResults;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = FindConversationResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
