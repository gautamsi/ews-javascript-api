import {ServiceResponse} from "./ServiceResponse";
import {Conversation} from "../ServiceObjects/Items/Conversation";
import {FindConversationResults} from "../../Search/FindConversationResults";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class FindConversationResponse extends ServiceResponse {
    Conversations: Conversation[];//System.Collections.ObjectModel.Collection<Conversation>;
    Results: FindConversationResults;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("FindConversationResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("FindConversationResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}