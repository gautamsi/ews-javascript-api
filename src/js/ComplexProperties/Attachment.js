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
var ExtensionMethods_1 = require("../ExtensionMethods");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var Strings_1 = require("../Strings");
var TypeContainer_1 = require("../TypeContainer");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an attachment to an item.
 */
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    function Attachment(ownerOrService) {
        var _this = _super.call(this) || this;
        _this.owner = null;
        _this.id = null;
        _this.name = null;
        _this.contentType = null;
        _this.contentId = null;
        _this.contentLocation = null;
        _this.size = 0;
        _this.lastModifiedTime = null;
        _this.isInline = false;
        _this.service = null;
        if (arguments.length === 1 && (ownerOrService === null || ownerOrService instanceof TypeContainer_1.TypeContainer.Item)) {
            _this.owner = ownerOrService;
            if (ownerOrService !== null) {
                _this.service = _this.owner.Service;
            }
            return _this;
        }
        _this.service = ownerOrService;
        return _this;
    }
    Object.defineProperty(Attachment.prototype, "Id", {
        /**
         * Gets the Id of the attachment.
         */
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "Name", {
        /***
         * Gets or sets the name of the attachment.
         */
        get: function () {
            return this.name;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.name; }, setValue: function (updateValue) { _this.name = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "ContentType", {
        /**
         * Gets or sets the content type of the attachment.
         */
        get: function () {
            return this.contentType;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.contentType; }, setValue: function (updateValue) { _this.contentType = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "ContentId", {
        /**
         * Gets or sets the content Id of the attachment. ContentId can be used as a custom way to identify an attachment in order to reference it from within the body of the item the attachment belongs to.
         */
        get: function () {
            return this.contentId;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.contentId; }, setValue: function (updateValue) { _this.contentId = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "ContentLocation", {
        /**
         * Gets or sets the content location of the attachment. ContentLocation can be used to associate an attachment with a Url defining its location on the Web.
         */
        get: function () {
            return this.contentLocation;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.contentLocation; }, setValue: function (updateValue) { _this.contentLocation = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "Size", {
        /**
         * Gets the size of the attachment.
         */
        get: function () {
            EwsUtilities_1.EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "Size");
            return this.size;
        },
        set: function (value) {
            var _this = this;
            EwsUtilities_1.EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "Size");
            this.SetFieldValue({ getValue: function () { return _this.size; }, setValue: function (updateValue) { _this.size = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "LastModifiedTime", {
        /**
         * Gets the date and time when this attachment was last modified.
         */
        get: function () {
            EwsUtilities_1.EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "LastModifiedTime");
            return this.lastModifiedTime;
        },
        set: function (value) {
            var _this = this;
            EwsUtilities_1.EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "LastModifiedTime");
            this.SetFieldValue({ getValue: function () { return _this.lastModifiedTime; }, setValue: function (updateValue) { _this.lastModifiedTime = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "IsInline", {
        /**
         * Gets or sets a value indicating whether this is an inline attachment. Inline attachments are not visible to end users.
         */
        get: function () {
            EwsUtilities_1.EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "IsInline");
            return this.isInline;
        },
        set: function (value) {
            var _this = this;
            EwsUtilities_1.EwsUtilities.ValidatePropertyVersion(this.service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "IsInline");
            this.SetFieldValue({ getValue: function () { return _this.isInline; }, setValue: function (updateValue) { _this.isInline = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "IsNew", {
        /**
         * @internal True if the attachment has not yet been saved, false otherwise.
         */
        get: function () {
            return ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "Owner", {
        /**
         * @internal Gets the owner of the attachment.
         */
        get: function () {
            return this.owner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "Service", {
        /**
         * @internal Gets the related exchange service.
         */
        get: function () {
            return this.service;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    Attachment.prototype.GetXmlElementName = function () { console.log("Attachment.ts - GetXmlElementName : Abstract - must implement."); return ExtensionMethods_1.StringHelper.Empty; };
    /**
     * @internal Load the attachment.
     *
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     */
    Attachment.prototype.InternalLoad = function (bodyType, additionalProperties) {
        return this.service.GetAttachment(this, bodyType, additionalProperties);
    };
    //InternalToJson(service: ExchangeService): any { throw new Error("Attachment.ts - InternalToJson : Not implemented."); }
    /**
     * Loads the attachment. Calling this method results in a call to EWS.
     */
    Attachment.prototype.Load = function () {
        return this.InternalLoad(null, null);
    };
    /**
     * Loads the attachment id from json.
     *
     * @param   {any}   jsonObject   The json object.
     */
    Attachment.prototype.LoadAttachmentIdFromXMLJsObject = function (jsonObject) {
        this.id = jsonObject[XmlAttributeNames_1.XmlAttributeNames.Id];
        if (this.Owner != null && jsonObject[XmlAttributeNames_1.XmlAttributeNames.RootItemChangeKey]) {
            var rootItemChangeKey = jsonObject[XmlAttributeNames_1.XmlAttributeNames.RootItemChangeKey];
            if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(rootItemChangeKey)) {
                this.Owner.RootItemId.ChangeKey = rootItemChangeKey;
            }
        }
    };
    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsonObject
     * @param   {ExchangeService}   service
     */
    Attachment.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.AttachmentId:
                    this.LoadAttachmentIdFromXMLJsObject(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Name:
                    this.name = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.ContentType:
                    this.contentType = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.ContentId:
                    this.contentId = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.ContentLocation:
                    this.contentLocation = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Size:
                    this.size = ExtensionMethods_1.Convert.toInt(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.LastModifiedTime:
                    this.lastModifiedTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsInline:
                    this.isInline = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Sets value of field.
     *
     * /remarks/    We override the base implementation. Attachments cannot be modified so any attempts the change a property on an existing attachment is an error.
     *
     * @param   {IRefParam<T>}      field   The field.
     * @param   {T}                 value   The value.
     */
    Attachment.prototype.SetFieldValue = function (field, value) {
        this.ThrowIfThisIsNotNew();
        _super.prototype.SetFieldValue.call(this, field, value);
    };
    /**
     * @internal Throws exception if this is not a new service object.
     */
    Attachment.prototype.ThrowIfThisIsNotNew = function () {
        if (!this.IsNew) {
            throw new Error(Strings_1.Strings.AttachmentCannotBeUpdated); //InvalidOperationException
        }
    };
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("Attachment.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    /**
     * @internal Validates this instance.
     *
     * @param   {number}   attachmentIndex   Index of this attachment.
     */
    Attachment.prototype.Validate = function (attachmentIndex) {
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    Attachment.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Name, this.Name);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ContentType, this.ContentType);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ContentId, this.ContentId);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ContentLocation, this.ContentLocation);
        if (writer.Service.RequestedServerVersion > ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsInline, this.IsInline);
        }
    };
    return Attachment;
}(ComplexProperty_1.ComplexProperty));
exports.Attachment = Attachment;
