import {Item} from "../Core/ServiceObjects/Items/Item";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {EwsLogging} from "../Core/EwsLogging";
import {XmlElementNames} from "../Core/XmlElementNames";
import { StringHelper, Convert } from '../ExtensionMethods';
import {Strings} from "../Strings";
import {ServiceValidationException} from "../Exceptions/ServiceValidationException";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {Attachment} from "./Attachment";
/**
 * Represents a file attachment.
 */
export class FileAttachment extends Attachment {
    private fileName: string = null;
    //private contentStream: Stream = null;
    //private content: number[] = null;
    private base64Content: string = null;
    //private loadToStream: Stream = null;
    private isContactPhoto: boolean = false;

    /**
     * Gets the name of the file the attachment is linked to.
     */
    get FileName(): string {
        return this.fileName;
    }
    set FileName(value: string) {
        super.ThrowIfThisIsNotNew();
        this.fileName = value;
        //this.content = null;
        this.base64Content = null;
        //this.contentStream = null;
    }
    // /**
    //  * Gets or sets the content stream.
    //  */
    // get ContentStream(): Stream {
    //     return this.contentStream;
    // }
    // set ContentStream(value: Stream) {
    //     super.ThrowIfThisIsNotNew();
    //     this.contentStream = value;
    //     this.content = null;
    //     this.fileName = null;
    // }
    // /**
    //  * Gets the content of the attachment into memory. Content is set only when Load() is called.
    //  */
    // get Content(): number[] {
    //     return this.content;
    // }
    // set Content(value: number[]) {
    //     super.ThrowIfThisIsNotNew();
    //     this.content = value;
    //     this.fileName = null;
    //     this.contentStream = null;
    // }
    
    /**
     * Gets the base64 content of the attachment into memory. Content is set only when Load() is called.
     */
    get Base64Content(): string {
        return this.base64Content;
    }
    set Base64Content(value: string) {
        super.ThrowIfThisIsNotNew();
        this.base64Content = value;
        this.fileName = null;
    }

    /**
     * Gets or sets a value indicating whether this attachment is a contact photo.
     */
    get IsContactPhoto(): boolean {
        EwsUtilities.ValidatePropertyVersion(this.Service, ExchangeVersion.Exchange2010, "IsContactPhoto");
        return this.isContactPhoto;
    }
    set IsContactPhoto(value: boolean) {
        EwsUtilities.ValidatePropertyVersion(this.Service, ExchangeVersion.Exchange2010, "IsContactPhoto");
        super.ThrowIfThisIsNotNew();
        this.isContactPhoto = value;
    }
    
    /**
     * @internal Initializes a new instance of the **FileAttachment** class.
     *
     * @param   {Item}   owner   The owner of the attachment.
     */
    constructor(owner: Item);
    /**
     * @internal Initializes a new instance of the **FileAttachment** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService);
    constructor(ownerOrService: Item | ExchangeService) {
        super(ownerOrService);
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string { return XmlElementNames.FileAttachment; }
    
    // /**
    //  * Loads the content of the file attachment into the specified stream. Calling this method results in a call to EWS.
    //  *
    //  * @param   {any}   stream   The stream to load the content of the attachment into.
    //  */    
    // Load(stream: any /* System.IO.Stream */): void;
    // /**
    //  * Loads the content of the file attachment into the specified file. Calling this method results in a call to EWS.
    //  *
    //  * @param   {string}   fileName   The name of the file to load the content of the attachment into. If the file already exists, it is overwritten.
    //  */        
    // Load(fileName?: string): void;
    // Load(fileName?: string | any): Promise<void> {
    //     return  super.Load();
    // }
    //ref: //info: - skipped, this can be loaded from base class
    
    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsonProperty   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    LoadFromXmlJsObject(jsObject: any/*JsonObject*/, service: ExchangeService): void {
        super.LoadFromXmlJsObject(jsObject, service);

        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames.IsContactPhoto:
                    this.isContactPhoto = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.Content:
                    this.base64Content = jsObject[key];
                    // if (this.loadToStream != null)
                    // {
                    //     jsObject.ReadAsBase64Content(key, this.loadToStream);
                    // }
                    // else
                    // {
                    //     // If there's a file attachment content handler, use it. Otherwise
                    //     // load the content into a byte array.
                    //     // TODO: Should we mark the attachment to indicate that content is stored elsewhere?
                    //     if (service.FileAttachmentContentHandler != null)
                    //     {
                    //         Stream outputStream = service.FileAttachmentContentHandler.GetOutputStream(this.Id);

                    //         if (outputStream != null)
                    //         {
                    //             jsObject.ReadAsBase64Content(key, outputStream);
                    //         }
                    //         else
                    //         {
                    //             this.content = jsObject.ReadAsBase64Content(key);
                    //         }
                    //     }
                    //     else
                    //     {
                    //         this.content = jsObject.ReadAsBase64Content(key);
                    //     }
                    // }
                    break;
                default:
                    break;
            }
        }
    }
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("FileAttachment.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    ReadElementsFromXmlJsObjectToPatch(reader: any): boolean { throw new Error("FileAttachment.ts - ReadElementsFromXmlJsObjectToPatch : Not implemented."); }
    
    /**
     * @internal Validates this instance.
     *
     * @param   {number}   attachmentIndex   Index of this attachment.
     */
    Validate(attachmentIndex?: number): void {
        if (StringHelper.IsNullOrEmpty(this.Name) && (this.base64Content == null)) {
            throw new ServiceValidationException(StringHelper.Format(Strings.FileAttachmentContentIsNotSet, attachmentIndex));
        }
    }
    
    /**
     * @internal Writes elements and content to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        if (writer.Service.RequestedServerVersion > ExchangeVersion.Exchange2007_SP1) {
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.IsContactPhoto, this.isContactPhoto);
        }

        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Content);

        if (!StringHelper.IsNullOrEmpty(this.FileName)) {
            throw new Error("FileAttachment.ts - File reading from disk is not implemented. Always use Base64Content property ")
                
            // using (FileStream fileStream = new FileStream(this.FileName, FileMode.Open, FileAccess.Read))
            // {
            //     writer.WriteBase64ElementValue(fileStream);
            // }
        }
        // else if (this.ContentStream != null)
        // {
        //     writer.WriteBase64ElementValue(this.ContentStream);
        // }
        // else if (this.Content != null)
        // {
        //     writer.WriteBase64ElementValue(this.Content);
        // }
        else if (!StringHelper.IsNullOrEmpty(this.base64Content)) {
            writer.WriteValue(this.base64Content, null);
        }
        else {
            EwsLogging.Assert(
                false,
                "FileAttachment.WriteElementsToXml",
                "The attachment's content is not set.");
        }

        writer.WriteEndElement();
    }
}