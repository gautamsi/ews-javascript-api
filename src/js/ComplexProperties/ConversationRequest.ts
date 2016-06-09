import {ConversationId} from "./ConversationId";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * 
 * 
 * @sealed
 */
export class ConversationRequest extends ComplexProperty {
    /** @internal */
    ___implementsInterface: string[] = ["ISelfValidate", "IJsonSerializable"];

    /**
     * Gets or sets the conversation id.
     */
    ConversationId: ConversationId;

    /**
     * Gets or sets the sync state representing the current state of the conversation for synchronization purposes.
     */
    SyncState: string;

    /**
     * Initializes a new instance of the **ConversationRequest** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ConversationRequest** class.
     *
     * @param   {ConversationId}    conversationId   The conversation id.
     * @param   {string}            syncState        State of the sync.
     */
    constructor(conversationId: ConversationId, syncState: string);
    constructor(conversationId: ConversationId = null, syncState: string = null) {
        super();
        this.ConversationId = conversationId;
        this.SyncState = syncState;
    }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        EwsUtilities.ValidateParam(this.ConversationId, "ConversationId");
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        writer.WriteStartElement(XmlNamespace.Types, xmlElementName);

        this.ConversationId.WriteToXml(writer);

        if (this.SyncState != null) {
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.SyncState, this.SyncState);
        }

        writer.WriteEndElement();
    }
}