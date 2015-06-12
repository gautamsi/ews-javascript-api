import {ConversationId} from "./ConversationId";
import {ConversationNodeCollection} from "./ConversationNodeCollection";
import {ComplexProperty} from "./ComplexProperty";
import {PropertySet} from "../Core/PropertySet";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class ConversationResponse extends ComplexProperty {
    ConversationId: ConversationId;
    SyncState: string;
    ConversationNodes: ConversationNodeCollection;
    private propertySet: PropertySet;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ConversationResponse.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ConversationResponse.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}



