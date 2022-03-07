﻿import { BodyType } from "../Enumerations/BodyType";
import { Convert, StringHelper } from '../ExtensionMethods';
import { DateTime } from "../DateTime";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { IRefParam } from "../Interfaces/IRefParam";
import { Item } from "../Core/ServiceObjects/Items/Item";
import { PropertyDefinitionBase } from '../PropertyDefinitions/PropertyDefinitionBase';
import { Strings } from '../Strings';
import { TypeContainer } from "../TypeContainer";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents an attachment to an item.
 */
export class Attachment extends ComplexProperty {

    private owner: Item = null;
    private id: string = null;
    private name: string = null;
    private contentType: string = null;
    private contentId: string = null;
    private contentLocation: string = null;
    private size: number = 0;
    private lastModifiedTime: DateTime = null;
    private isInline: boolean = false;
    private service: ExchangeService = null;

    /**
     * Gets the Id of the attachment.
     */
    get Id(): string {
        return this.id;
    }
    set Id(value: string) {
        this.id = value;
    }

    /***
     * Gets or sets the name of the attachment.
     */
    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.name, setValue: (updateValue) => { this.name = updateValue } }, value);
    }

    /**
     * Gets or sets the content type of the attachment.
     */
    get ContentType(): string {
        return this.contentType;
    }
    set ContentType(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.contentType, setValue: (updateValue) => { this.contentType = updateValue } }, value);
    }

    /**
     * Gets or sets the content Id of the attachment. ContentId can be used as a custom way to identify an attachment in order to reference it from within the body of the item the attachment belongs to.
     */
    get ContentId(): string {
        return this.contentId;
    }
    set ContentId(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.contentId, setValue: (updateValue) => { this.contentId = updateValue } }, value);
    }

    /**
     * Gets or sets the content location of the attachment. ContentLocation can be used to associate an attachment with a Url defining its location on the Web.
     */
    get ContentLocation(): string {
        return this.contentLocation;
    }
    set ContentLocation(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.contentLocation, setValue: (updateValue) => { this.contentLocation = updateValue } }, value);
    }

    /**
     * Gets the size of the attachment.
     */
    get Size(): number {
        EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion.Exchange2010, "Size");
        return this.size;
    }
    set Size(value: number) {
        EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion.Exchange2010, "Size");
        this.SetFieldValue<number>({ getValue: () => this.size, setValue: (updateValue) => { this.size = updateValue } }, value);
    }

    /**
     * Gets the date and time when this attachment was last modified.
     */
    get LastModifiedTime(): DateTime {
        EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion.Exchange2010, "LastModifiedTime");
        return this.lastModifiedTime;
    }
    set LastModifiedTime(value: DateTime) {
        EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion.Exchange2010, "LastModifiedTime");
        this.SetFieldValue<DateTime>({ getValue: () => this.lastModifiedTime, setValue: (updateValue) => { this.lastModifiedTime = updateValue } }, value);
    }

    /**
     * Gets or sets a value indicating whether this is an inline attachment. Inline attachments are not visible to end users.
     */
    get IsInline(): boolean {
        EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion.Exchange2010, "IsInline");
        return this.isInline;
    }
    set IsInline(value: boolean) {
        EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion.Exchange2010, "IsInline");
        this.SetFieldValue<boolean>({ getValue: () => this.isInline, setValue: (updateValue) => { this.isInline = updateValue } }, value);
    }

    /**
     * @internal True if the attachment has not yet been saved, false otherwise.
     */
    get IsNew(): boolean {
        return StringHelper.IsNullOrEmpty(this.Id);
    }

    /**
     * @internal Gets the owner of the attachment.
     */
    get Owner(): Item {
        return this.owner;
    }

    /**
     * @internal Gets the related exchange service.
     */
    get Service(): ExchangeService {
        return this.service;
    }

    /**
     * @internal Initializes a new instance of the Attachment class.
     *
     * @param   {Item}   owner   The owner.
     */
    constructor(owner: Item);
    /**
     * @internal Initializes a new instance of the Attachment class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService);
    /**
     * @internal  @protected unused - only for derived class call
     */
    constructor(ownerOrService: Item | ExchangeService)
    constructor(ownerOrService: Item | ExchangeService) {
        super();
        if (arguments.length === 1 && (ownerOrService === null || ownerOrService instanceof TypeContainer.Item)) {
            this.owner = <Item>ownerOrService;
            if (ownerOrService !== null) {
                this.service = this.owner.Service;
            }
            return;
        }
        this.service = <ExchangeService>ownerOrService;
    }

    /**
     * Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string { console.log("Attachment.ts - GetXmlElementName : Abstract - must implement."); return StringHelper.Empty; }

    /**
     * @internal Load the attachment.
     *
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     */
    InternalLoad(bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): Promise<void> {
        return this.service.GetAttachment(
            this,
            bodyType,
            additionalProperties);
    }

    //InternalToJson(service: ExchangeService): any { throw new Error("Attachment.ts - InternalToJson : Not implemented."); }

    /**
     * Loads the attachment. Calling this method results in a call to EWS.
     */
    Load(): Promise<void> {
        return this.InternalLoad(null, null);
    }

    /**
     * Loads the attachment id from json.
     *
     * @param   {any}   jsonObject   The json object.
     */
    private LoadAttachmentIdFromXMLJsObject(jsonObject: any): void {
        this.id = jsonObject[XmlAttributeNames.Id];

        if (this.Owner != null && jsonObject[XmlAttributeNames.RootItemChangeKey]) {
            var rootItemChangeKey: string = jsonObject[XmlAttributeNames.RootItemChangeKey];

            if (!StringHelper.IsNullOrEmpty(rootItemChangeKey)) {
                this.Owner.RootItemId.ChangeKey = rootItemChangeKey;
            }
        }
    }

    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsonObject
     * @param   {ExchangeService}   service        
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.AttachmentId:
                    this.LoadAttachmentIdFromXMLJsObject(jsObject[key]);
                    break;
                case XmlElementNames.Name:
                    this.name = jsObject[key];
                    break;
                case XmlElementNames.ContentType:
                    this.contentType = jsObject[key];
                    break;
                case XmlElementNames.ContentId:
                    this.contentId = jsObject[key];
                    break;
                case XmlElementNames.ContentLocation:
                    this.contentLocation = jsObject[key];
                    break;
                case XmlElementNames.Size:
                    this.size = Convert.toInt(jsObject[key]);
                    break;
                case XmlElementNames.LastModifiedTime:
                    this.lastModifiedTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames.IsInline:
                    this.isInline = Convert.toBool(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Sets value of field.
     * 
     * /remarks/    We override the base implementation. Attachments cannot be modified so any attempts the change a property on an existing attachment is an error.
     * 
     * @param   {IRefParam<T>}      field   The field.
     * @param   {T}                 value   The value.
     */
    SetFieldValue<T>(field: IRefParam<T>, value: T): void {
        this.ThrowIfThisIsNotNew();
        super.SetFieldValue(field, value);
    }

    /**
     * @internal Throws exception if this is not a new service object.
     */
    ThrowIfThisIsNotNew(): void {
        if (!this.IsNew) {
            throw new Error(Strings.AttachmentCannotBeUpdated);//InvalidOperationException
        }
    }

    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("Attachment.ts - TryReadElementFromXmlJsObject : Not implemented."); }

    /**
     * @internal Validates this instance.
     *
     * @param   {number}   attachmentIndex   Index of this attachment.
     */
    Validate(attachmentIndex?: number): void {
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Name, this.Name);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.ContentType, this.ContentType);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.ContentId, this.ContentId);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.ContentLocation, this.ContentLocation);
        if (writer.Service.RequestedServerVersion > ExchangeVersion.Exchange2007_SP1) {
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.IsInline, this.IsInline);
        }
    }
}

