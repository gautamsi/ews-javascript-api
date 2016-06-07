import {ConversationId} from "./ConversationId";
import {ConversationNodeCollection} from "./ConversationNodeCollection";
import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {ExchangeService} from "../Core/ExchangeService";
import {PropertySet} from "../Core/PropertySet";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * 
 * 
 * @sealed
 */
export class ConversationResponse extends ComplexProperty {

    /**
     * Property set used to fetch items in the conversation.
     */
    private propertySet: PropertySet = null;

    /**
     * Gets the conversation id.
     * 
     * @internal set()
     */
    ConversationId: ConversationId = null;

    /**
     * Gets the sync state.
     * 
     * @internal set()
     */
    SyncState: string = null;

    /**
     * Gets the conversation nodes.
     * 
     * @internal set()
     */
    ConversationNodes: ConversationNodeCollection = null;

    /**
     * @internal Initializes a new instance of the **ConversationResponse** class.
     *
     * @param   {PropertySet}   propertySet   The property set.
     */
    constructor(propertySet: PropertySet) {
        super();
        this.propertySet = propertySet;
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {

        this.ConversationId = new ConversationId();
        this.ConversationId.LoadFromXmlJsObject(jsObject[XmlElementNames.ConversationId], service);

        if (jsObject[XmlElementNames.SyncState]) {
            this.SyncState = jsObject[XmlElementNames.SyncState];
        }

        this.ConversationNodes = new ConversationNodeCollection(this.propertySet);
        this.ConversationNodes.CreateFromXmlJsObjectCollection(
            EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames.ConversationNodes),
            service);
    }
}