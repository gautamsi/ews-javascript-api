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
var DeleteAttachmentResponse_1 = require("../Responses/DeleteAttachmentResponse");
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
/**
 * @internal Represents a DeleteAttachment request.
 * @sealed
 */
var DeleteAttachmentRequest = /** @class */ (function (_super) {
    __extends(DeleteAttachmentRequest, _super);
    /**
     * @internal Initializes a new instance of the **DeleteAttachmentRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    function DeleteAttachmentRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.attachments = [];
        return _this;
    }
    Object.defineProperty(DeleteAttachmentRequest.prototype, "Attachments", {
        /**
         * Gets the attachments.
         * @value   The attachments.
         */
        get: function () {
            return this.attachments;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {DeleteAttachmentResponse}     Service response.
     */
    DeleteAttachmentRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new DeleteAttachmentResponse_1.DeleteAttachmentResponse(this.Attachments[responseIndex]);
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    DeleteAttachmentRequest.prototype.GetExpectedResponseMessageCount = function () {
        return this.Attachments.length;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    DeleteAttachmentRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    DeleteAttachmentRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.DeleteAttachmentResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    DeleteAttachmentRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.DeleteAttachmentResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    DeleteAttachmentRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.DeleteAttachment;
    };
    /**
     * @internal Validate request.
     */
    DeleteAttachmentRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.Attachments, "Attachments");
        for (var i = 0; i < this.Attachments.length; i++) {
            EwsUtilities_1.EwsUtilities.ValidateParam(this.Attachments[i].Id, ExtensionMethods_1.StringHelper.Format("Attachment[{0}].Id", i));
        }
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    DeleteAttachmentRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.AttachmentIds);
        for (var _i = 0, _a = this.Attachments; _i < _a.length; _i++) {
            var attachment = _a[_i];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AttachmentId);
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, attachment.Id);
            writer.WriteEndElement();
        }
        writer.WriteEndElement();
    };
    return DeleteAttachmentRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.DeleteAttachmentRequest = DeleteAttachmentRequest;
