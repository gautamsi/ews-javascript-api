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
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var EwsLogging_1 = require("../EwsLogging");
var ServiceResponse_1 = require("./ServiceResponse");
var XmlElementNames_1 = require("../XmlElementNames");
/**
 * Represents the response to an individual attachment creation operation.
 * @sealed
 */
var CreateAttachmentResponse = /** @class */ (function (_super) {
    __extends(CreateAttachmentResponse, _super);
    /**
     * Initializes a new instance of the **CreateAttachmentResponse** class.
     *
     * @param   {Attachment}   attachment   The attachment.
     */
    function CreateAttachmentResponse(attachment) {
        var _this = _super.call(this) || this;
        _this.attachment = null;
        EwsLogging_1.EwsLogging.Assert(attachment != null, "CreateAttachmentResponse.ctor", "attachment is null");
        _this.attachment = attachment;
        return _this;
    }
    Object.defineProperty(CreateAttachmentResponse.prototype, "Attachment", {
        /**
         * Gets the attachment that was created.
         */
        get: function () {
            return this.attachment;
        },
        enumerable: true,
        configurable: true
    });
    /**
      * @internal Reads response elements from Xml JsObject.
      *
      * @param   {any}               jsObject   The response object.
      * @param   {ExchangeService}   service    The service.
      */
    CreateAttachmentResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        var attachmentArray = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(responseObject, XmlElementNames_1.XmlElementNames.Attachments);
        if (attachmentArray != null && attachmentArray.length > 0) {
            var attachmenTypetArray = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(attachmentArray[0], XmlElementNames_1.XmlElementNames.ItemAttachment);
            if (attachmenTypetArray.length > 0) {
                this.attachment.LoadFromXmlJsObject(attachmenTypetArray[0], service);
                return;
            }
            attachmenTypetArray = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(attachmentArray[0], XmlElementNames_1.XmlElementNames.FileAttachment);
            if (attachmenTypetArray.length > 0) {
                this.attachment.LoadFromXmlJsObject(attachmenTypetArray[0], service);
            }
        }
    };
    return CreateAttachmentResponse;
}(ServiceResponse_1.ServiceResponse));
exports.CreateAttachmentResponse = CreateAttachmentResponse;
