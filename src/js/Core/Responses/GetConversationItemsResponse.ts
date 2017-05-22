import {ConversationResponse} from "../../ComplexProperties/ConversationResponse";
import {ExchangeService} from "../ExchangeService";
import {PropertySet} from "../PropertySet";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * Represents the response to a GetConversationItems operation.
 * 
 * @sealed
 */
export class GetConversationItemsResponse extends ServiceResponse {

    private propertySet: PropertySet;

    /**
     * Gets or sets the conversation.
     * 
     * @value   The conversation.
     */
    Conversation: ConversationResponse;

    /**
     * @internal Initializes a new instance of the **GetConversationItemsResponse** class.
     *
     * @param   {PropertySet}   propertySet   The property set.
     */
    constructor(propertySet: PropertySet) {
        super();
        this.propertySet = propertySet;
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        this.Conversation = new ConversationResponse(this.propertySet);
        this.Conversation.LoadFromXmlJsObject(responseObject[XmlElementNames.Conversation], service);
    }
}