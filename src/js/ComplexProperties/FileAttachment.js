"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EwsUtilities_1 = require("../Core/EwsUtilities");
var EwsLogging_1 = require("../Core/EwsLogging");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var Attachment_1 = require("./Attachment");
/**
 * Represents a file attachment.
 */
var FileAttachment = /** @class */ (function (_super) {
    __extends(FileAttachment, _super);
    function FileAttachment(ownerOrService) {
        var _this = _super.call(this, ownerOrService) || this;
        _this.fileName = null;
        //private contentStream: Stream = null;
        //private content: number[] = null;
        _this.base64Content = null;
        //private loadToStream: Stream = null;
        _this.isContactPhoto = false;
        return _this;
    }
    Object.defineProperty(FileAttachment.prototype, "FileName", {
        /**
         * Gets the name of the file the attachment is linked to.
         */
        get: function () {
            return this.fileName;
        },
        set: function (value) {
            _super.prototype.ThrowIfThisIsNotNew.call(this);
            this.fileName = value;
            //this.content = null;
            this.base64Content = null;
            //this.contentStream = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileAttachment.prototype, "Base64Content", {
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
        get: function () {
            return this.base64Content;
        },
        set: function (value) {
            _super.prototype.ThrowIfThisIsNotNew.call(this);
            this.base64Content = value;
            this.fileName = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileAttachment.prototype, "IsContactPhoto", {
        /**
         * Gets or sets a value indicating whether this attachment is a contact photo.
         */
        get: function () {
            EwsUtilities_1.EwsUtilities.ValidatePropertyVersion(this.Service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "IsContactPhoto");
            return this.isContactPhoto;
        },
        set: function (value) {
            EwsUtilities_1.EwsUtilities.ValidatePropertyVersion(this.Service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "IsContactPhoto");
            _super.prototype.ThrowIfThisIsNotNew.call(this);
            this.isContactPhoto = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    FileAttachment.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FileAttachment; };
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
    FileAttachment.prototype.LoadFromXmlJsObject = function (jsObject /*JsonObject*/, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.IsContactPhoto:
                    this.isContactPhoto = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Content:
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
    };
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("FileAttachment.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    FileAttachment.prototype.ReadElementsFromXmlJsObjectToPatch = function (reader) { throw new Error("FileAttachment.ts - ReadElementsFromXmlJsObjectToPatch : Not implemented."); };
    /**
     * @internal Validates this instance.
     *
     * @param   {number}   attachmentIndex   Index of this attachment.
     */
    FileAttachment.prototype.Validate = function (attachmentIndex) {
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Name) && (this.base64Content == null)) {
            throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.FileAttachmentContentIsNotSet, attachmentIndex));
        }
    };
    /**
     * @internal Writes elements and content to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    FileAttachment.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        if (writer.Service.RequestedServerVersion > ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsContactPhoto, this.isContactPhoto);
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Content);
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.FileName)) {
            throw new Error("FileAttachment.ts - File reading from disk is not implemented. Always use Base64Content property ");
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
        else if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.base64Content)) {
            writer.WriteValue(this.base64Content, null);
        }
        else {
            EwsLogging_1.EwsLogging.Assert(false, "FileAttachment.WriteElementsToXml", "The attachment's content is not set.");
        }
        writer.WriteEndElement();
    };
    return FileAttachment;
}(Attachment_1.Attachment));
exports.FileAttachment = FileAttachment;
