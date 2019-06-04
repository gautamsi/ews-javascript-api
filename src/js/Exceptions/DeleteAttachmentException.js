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
var BatchServiceResponseException_1 = require("./BatchServiceResponseException");
/**
 * Represents an error that occurs when a call to the DeleteAttachment web method fails.
 */
var DeleteAttachmentException = /** @class */ (function (_super) {
    __extends(DeleteAttachmentException, _super);
    function DeleteAttachmentException(serviceResponses, message, innerException) {
        var _this = this;
        if (arguments.length == 2)
            _this = _super.call(this, serviceResponses, message) || this;
        else
            _this = _super.call(this, serviceResponses, message, innerException) || this;
        return _this;
    }
    return DeleteAttachmentException;
}(BatchServiceResponseException_1.BatchServiceResponseException));
exports.DeleteAttachmentException = DeleteAttachmentException;
