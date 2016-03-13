import {Item} from "../Core/ServiceObjects/Items/Item";
import {ItemInfo} from "../Core/ServiceObjects/Items/ItemInfo";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {XmlElementNames} from "../Core/XmlElementNames";
import { StringHelper, Convert } from '../ExtensionMethods';
import {Strings} from "../Strings";
import {ServiceValidationException} from "../Exceptions/ServiceValidationException";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {BodyType} from "../Enumerations/BodyType";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {PropertyDefinitionBase} from "../PropertyDefinitions/PropertyDefinitionBase";
import {IPromise} from "../Interfaces";

import {Attachment} from "./Attachment";
/**
 * Represents an item attachment.
 */
export class ItemAttachment extends Attachment {
    /**
     * The item associated with the attachment.
     */
    protected item: Item = null;
    /**
     * Gets the item associated with the attachment.
     */
    get Item(): Item {
        return this.item;
    }
    set Item(value: Item) {
        super.ThrowIfThisIsNotNew();
        //todo: implement logic for onchange
        if (this.item !== null) {
            //this.item.OnChange.Remove(this.ItemChanged);
        }
        this.item = value;
        if (this.item !== null) {
            //this.item.OnChange.Add(this.ItemChanged);
        }
    }
    /** to workaround base.Item property accessor of c# //ref: //info: */
    protected _setItem(value: Item): void {
        this.item = value;
    }
    /**
    * @internal Initializes a new instance of the **ItemAttachment** class.
    *
    * @param   {Item}   owner   The owner of the attachment.
    */
    constructor(owner: Item);
    /**
     * @internal Initializes a new instance of the **ItemAttachment** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService);
    constructor(ownerOrService: Item | ExchangeService) {
        super(ownerOrService);
    }

    /**
     * @internal Obtains EWS XML element name for this object.
     *
     * @return  {string}      The XML element name.
     */
    GetXmlElementName(): string { return XmlElementNames.ItemAttachment; }

    //InternalToJson(service: ExchangeService): any { throw new Error("ItemAttachment.ts - InternalToJson : Not implemented."); }

    /**
     * Implements the OnChange event handler for the item associated with the attachment.
     *
     * @param   {ServiceObject}   serviceObject   The service object that triggered the OnChange event.
     */
    private ItemChanged(serviceObject: ServiceObject): void {
        if (this.Owner != null) {
            this.Owner.PropertyBag.Changed();
        }
    }

    //Load(...additionalProperties: PropertyDefinitionBase[]): IPromise<void>;
    /**
     * Loads this attachment.
     *
     * @param   {PropertyDefinitionBase[]}   additionalProperties   The optional additional properties to load.
     */
    Load(additionalProperties: PropertyDefinitionBase[] /** System.Collections.Generic.IEnumerable<PropertyDefinitionBase> */): IPromise<void>;
    //Load(bodyType: BodyType, ...additionalProperties: PropertyDefinitionBase[]): IPromise<void>;
    /**
     * Loads this attachment.
     *
     * @param   {BodyType}   bodyType               The body type to load.
     * @param   {PropertyDefinitionBase[]}   additionalProperties   The optional additional properties to load.
     */
    Load(bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]  /** System.Collections.Generic.IEnumerable<PropertyDefinitionBase> */): IPromise<void>;
    Load(bodyTypeOrPeoperties: BodyType | PropertyDefinitionBase[], additionalProperties?: PropertyDefinitionBase[]): IPromise<void> {
        let argsLength = arguments.length;
        let props: PropertyDefinitionBase[] = null;
        let bodyType: BodyType = null;
        if (argsLength === 1) {
            props = <PropertyDefinitionBase[]>bodyTypeOrPeoperties;
        }
        if (argsLength === 2) {
            bodyType = <BodyType>bodyTypeOrPeoperties;
        }
        if (argsLength > 2) {
            throw new Error("ItemAttachment.ts - Load with " + argsLength + " parameters, invalid number of arguments, check documentation and try again.");
        }
        return this.InternalLoad(bodyType, props);
    }

    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsObject   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        super.LoadFromXmlJsObject(jsObject, service);
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.Item:
                case XmlElementNames.CalendarItem:
                case XmlElementNames.Contact:
                case XmlElementNames.DistributionList:
                case XmlElementNames.Conversation:
                case XmlElementNames.Message:
                case XmlElementNames.MeetingCancellation:
                case XmlElementNames.MeetingMessage:
                case XmlElementNames.MeetingRequest:
                case XmlElementNames.MeetingResponse:
                case XmlElementNames.Persona:
                case XmlElementNames.PostItem:
                case XmlElementNames.Task:
                    let itemObj = jsObject[key];
                    if (itemObj != null) {
                        this.item = (new ItemInfo()).CreateEwsObjectFromXmlElementName<Item>(this.Service, key);
                        if (this.item != null) {
                            this.item.LoadFromXmlJsObject(itemObj, this.Service, true);
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }

    //ReadElementsFromXmlJsObject(reader: any): void { throw new Error("ItemAttachment.ts - TryReadElementFromXmlJsObject : Not implemented."); }    
    ReadElementsFromXmlJsObjectToPatch(reader: any): boolean { throw new Error("ItemAttachment.ts - TryReadElementFromXmlToPatch : Not implemented."); }

    /**
     * @internal Validates this instance.
     *
     * @param   {number}   attachmentIndex   Index of this attachment.
     */
    Validate(attachmentIndex: number): void {
        if (StringHelper.IsNullOrEmpty(this.Name)) {
            throw new ServiceValidationException(StringHelper.Format(Strings.ItemAttachmentMustBeNamed, attachmentIndex));
        }

        // Recurse through any items attached to item attachment.
        this.Item.Attachments.Validate();
    }

    /**
     * @internal Writes the properties of this object as XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer to write the elements to.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);
        this.Item.WriteToXml(writer);
    }
}