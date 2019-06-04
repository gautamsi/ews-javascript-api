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
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
var EwsLogging_1 = require("../EwsLogging");
var ExtensionMethods_1 = require("../../ExtensionMethods");
/**
 * Represents the response to an individual attachment deletion operation.
 * @sealed
 */
var DeleteAttachmentResponse = /** @class */ (function (_super) {
    __extends(DeleteAttachmentResponse, _super);
    /**
     * Initializes a new instance of the **DeleteAttachmentResponse** class.
     *
     * @param   {Attachment}   attachment   The attachment.
     */
    function DeleteAttachmentResponse(attachment) {
        var _this = _super.call(this) || this;
        _this.attachment = null;
        EwsLogging_1.EwsLogging.Assert(attachment != null, "CreateAttachmentResponse.ctor", "attachment is null");
        _this.attachment = attachment;
        return _this;
    }
    Object.defineProperty(DeleteAttachmentResponse.prototype, "Attachment", {
        /**
         * Gets the attachment that was deleted.
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
    DeleteAttachmentResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.RootItemId]) {
            var jsRootItemId = responseObject[XmlElementNames_1.XmlElementNames.RootItemId];
            var changeKey = void 0;
            if (jsRootItemId[XmlAttributeNames_1.XmlAttributeNames.RootItemChangeKey] &&
                !ExtensionMethods_1.StringHelper.IsNullOrEmpty(changeKey = jsRootItemId[XmlAttributeNames_1.XmlAttributeNames.RootItemChangeKey]) &&
                this.attachment.Owner != null) {
                this.attachment.Owner.RootItemId.ChangeKey = changeKey;
            }
        }
    };
    return DeleteAttachmentResponse;
}(ServiceResponse_1.ServiceResponse));
exports.DeleteAttachmentResponse = DeleteAttachmentResponse;
