import { XmlElementNames } from "../Core/XmlElementNames";

import { ServiceId } from "./ServiceId";
/**
 * Represents the Id of a Conversation.
 */
export class ConversationId extends ServiceId {

    /**
     * Initializes a new instance of **ConversationId**.
     */
    constructor();
    /**
     * Initializes a new instance of **ConversationId**.
     *
     * @param   {string}   uniqueId   The unique Id used to initialize the **ConversationId**.
     */
    constructor(uniqueId: string);
    constructor(uniqueId?: string) {
        arguments.length === 0 ? super() : super(uniqueId);
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.ConversationId;
    }

    /**
     * Gets a string representation of the Conversation Id.
     *
     * @return  {string}      The string representation of the conversation id.
     */
    ToString(): string {
        // We have ignored the change key portion
        return this.UniqueId;
    }
    toString(): string {
        return this.ToString();
    }
}