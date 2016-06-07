import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {ExchangeService} from "../Core/ExchangeService";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {ItemInfo} from "../Core/ServiceObjects/Items/ItemInfo";
import {PropertySet} from "../Core/PropertySet";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the response to a GetConversationItems operation.
 * 
 * @sealed
 */
export class ConversationNode extends ComplexProperty {

    private propertySet: PropertySet = null;

    /**
     * Gets or sets the Internet message id of the node.
     */
    InternetMessageId: string = null;

    /**
     * Gets or sets the Internet message id of the parent node.
     */
    ParentInternetMessageId: string = null;

    /**
     * Gets or sets the items.
     */
    Items: Item[];

    /**
     * @internal Initializes a new instance of the **ConversationNode** class.
     *
     * @param   {PropertySet}   propertySet   The property set.
     */
    constructor(propertySet: PropertySet) {
        super();
        this.propertySet = propertySet;
    }

    /**
     * Gets the item instance.
     *
     * @param   {ExchangeService}   service          The service.
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {Item}              Item.
     */
    private GetObjectInstance(service: ExchangeService, xmlElementName: string): Item {
        return (new ItemInfo()).CreateEwsObjectFromXmlElementName<Item>(service, xmlElementName);
    }

    /**
     * @internal Obtains EWS XML element name for this object.
     *
     * @return  {string}      The XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.ConversationNode;
    }

    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsObject   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        this.InternetMessageId = jsObject[XmlElementNames.ConversationIndex];

        if (jsObject[XmlElementNames.ParentInternetMessageId]) {
            this.ParentInternetMessageId = jsObject[XmlElementNames.ParentInternetMessageId];
        }

        if (jsObject[XmlElementNames.Items]) {

            this.Items = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Item>(
                jsObject,
                service,
                XmlElementNames.Items,
                this.GetObjectInstance,
                false,              /* clearPropertyBag */
                this.propertySet,   /* requestedPropertySet */
                false);             /* summaryPropertiesOnly */
        }
    }
}