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
var ExtensionMethods_1 = require("../../ExtensionMethods");
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ItemAttachment_1 = require("../../ComplexProperties/ItemAttachment");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var CreateAttachmentResponse_1 = require("../Responses/CreateAttachmentResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a CreateAttachment request.
 * @sealed
 */
var CreateAttachmentRequest = /** @class */ (function (_super) {
    __extends(CreateAttachmentRequest, _super);
    /**
     * @internal Initializes a new instance of the **CreateAttachmentRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    function CreateAttachmentRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.parentItemId = null;
        _this.attachments = [];
        return _this;
    }
    Object.defineProperty(CreateAttachmentRequest.prototype, "EmitTimeZoneHeader", {
        /**
         * @internal Gets a value indicating whether the TimeZoneContext SOAP header should be emitted.
         */
        get: function () {
            for (var _i = 0, _a = ExtensionMethods_1.ArrayHelper.OfType(this.attachments, function (item) { return item instanceof ItemAttachment_1.ItemAttachment; }); _i < _a.length; _i++) {
                var itemAttachment = _a[_i];
                if ((itemAttachment.Item != null) && itemAttachment.Item.GetIsTimeZoneHeaderRequired(false /* isUpdateOperation */)) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAttachmentRequest.prototype, "Attachments", {
        /**
         * Gets the attachments.
         */
        get: function () {
            return this.attachments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAttachmentRequest.prototype, "ParentItemId", {
        /**
         * Gets or sets the parent item id.
         * @value   The parent item id.
         */
        get: function () {
            return this.parentItemId;
        },
        set: function (value) {
            this.parentItemId = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {CreateAttachmentResponse}     Service response.
     */
    CreateAttachmentRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new CreateAttachmentResponse_1.CreateAttachmentResponse(this.Attachments[responseIndex]);
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    CreateAttachmentRequest.prototype.GetExpectedResponseMessageCount = function () {
        return this.Attachments.length;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    CreateAttachmentRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    CreateAttachmentRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.CreateAttachmentResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    CreateAttachmentRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.CreateAttachmentResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    CreateAttachmentRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.CreateAttachment;
    };
    /**
     * @internal Validate request.
     */
    CreateAttachmentRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.ParentItemId, "ParentItemId");
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    CreateAttachmentRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ParentItemId);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, this.ParentItemId);
        writer.WriteEndElement();
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Attachments);
        for (var _i = 0, _a = this.Attachments; _i < _a.length; _i++) {
            var attachment = _a[_i];
            attachment.WriteToXml(writer, attachment.GetXmlElementName());
        }
        writer.WriteEndElement();
    };
    return CreateAttachmentRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.CreateAttachmentRequest = CreateAttachmentRequest;
