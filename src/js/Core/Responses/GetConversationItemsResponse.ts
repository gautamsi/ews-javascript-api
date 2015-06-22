import {ServiceResponse} from "./ServiceResponse";
import {ConversationResponse} from "../../ComplexProperties/ConversationResponse";
import {PropertySet} from "../PropertySet";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetConversationItemsResponse extends ServiceResponse {
    Conversation: ConversationResponse;
    private propertySet: PropertySet;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetConversationItemsResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetConversationItemsResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



