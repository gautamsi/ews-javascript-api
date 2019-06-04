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
var BodyType_1 = require("../../Enumerations/BodyType");
var Strings_1 = require("../../Strings");
var EwsUtilities_1 = require("../EwsUtilities");
var PropertySet_1 = require("../PropertySet");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var Schemas_1 = require("../ServiceObjects/Schemas/Schemas");
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var GetAttachmentResponse_1 = require("../Responses/GetAttachmentResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a GetAttachment request.
 */
var GetAttachmentRequest = /** @class */ (function (_super) {
    __extends(GetAttachmentRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetAttachmentRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    function GetAttachmentRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.attachments = [];
        _this.attachmentIds = [];
        _this.additionalProperties = [];
        _this.bodyType = null;
        return _this;
    }
    Object.defineProperty(GetAttachmentRequest.prototype, "Attachments", {
        /**
         * Gets the attachments.
         *
         * @value The attachments.
         */
        get: function () {
            return this.attachments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetAttachmentRequest.prototype, "AttachmentIds", {
        /**
         * Gets the attachment ids.
         *
         * @value The attachment ids.
         */
        get: function () {
            return this.attachmentIds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetAttachmentRequest.prototype, "AdditionalProperties", {
        /**
         * Gets the additional properties.
         *
         * @value The additional properties.
         */
        get: function () {
            return this.additionalProperties;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetAttachmentRequest.prototype, "BodyType", {
        /**
         * Gets or sets the type of the body.
         *
         * @value The type of the body.
         */
        get: function () {
            return this.bodyType;
        },
        set: function (value) {
            this.bodyType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetAttachmentRequest.prototype, "EmitTimeZoneHeader", {
        /**
         * @internal Gets a value indicating whether the TimeZoneContext SOAP header should be emitted.
         *
         * @value *true* if the time zone should be emitted; otherwise, *false*.
         */
        get: function () {
            return this.additionalProperties.indexOf(Schemas_1.Schemas.ItemSchema.MimeContent) >= 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {GetAttachmentResponse}             Service response.
     */
    GetAttachmentRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new GetAttachmentResponse_1.GetAttachmentResponse(this.Attachments.length > 0 ? this.Attachments[responseIndex] : null);
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    GetAttachmentRequest.prototype.GetExpectedResponseMessageCount = function () { return this.Attachments.length + this.AttachmentIds.length; };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetAttachmentRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    GetAttachmentRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetAttachmentResponseMessage; };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetAttachmentRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetAttachmentResponse; };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetAttachmentRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetAttachment; };
    /**
     * @internal Validate request.
     */
    GetAttachmentRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (this.Attachments.length > 0) {
            EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.Attachments, "Attachments");
        }
        if (this.AttachmentIds.length > 0) {
            EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.AttachmentIds, "AttachmentIds");
        }
        if (this.AttachmentIds.length == 0 && this.Attachments.length == 0) {
            throw new ArgumentException_1.ArgumentException(Strings_1.Strings.CollectionIsEmpty, "Attachments/AttachmentIds");
        }
        for (var i = 0; i < this.AdditionalProperties.length; i++) {
            EwsUtilities_1.EwsUtilities.ValidateParam(this.AdditionalProperties[i], ExtensionMethods_1.StringHelper.Format("AdditionalProperties[{0}]", i));
        }
    };
    /**
     * @internal Writes attachment id elements.
     *
     * @param   {EwsServiceXmlWriter}   writer         The writer.
     * @param   {string}                attachmentId   The attachment id.
     */
    GetAttachmentRequest.prototype.WriteAttachmentIdXml = function (writer, attachmentId) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AttachmentId);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, attachmentId);
        writer.WriteEndElement();
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetAttachmentRequest.prototype.WriteElementsToXml = function (writer) {
        if (this.BodyType || this.AdditionalProperties.length > 0) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.AttachmentShape);
            if (this.BodyType) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.BodyType, BodyType_1.BodyType[this.BodyType]);
            }
            if (this.AdditionalProperties.length > 0) {
                PropertySet_1.PropertySet.WriteAdditionalPropertiesToXml(writer, this.AdditionalProperties);
            }
            writer.WriteEndElement(); // AttachmentShape
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.AttachmentIds);
        for (var _i = 0, _a = this.Attachments; _i < _a.length; _i++) {
            var attachment = _a[_i];
            this.WriteAttachmentIdXml(writer, attachment.Id);
        }
        for (var _b = 0, _c = this.AttachmentIds; _b < _c.length; _b++) {
            var attachmentId = _c[_b];
            this.WriteAttachmentIdXml(writer, attachmentId);
        }
        writer.WriteEndElement();
    };
    return GetAttachmentRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetAttachmentRequest = GetAttachmentRequest;
