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
var ServiceError_1 = require("../Enumerations/ServiceError");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var ServiceRemoteException_1 = require("./ServiceRemoteException");
/**
 * Represents a remote service exception that has a single response.
 */
var ServiceResponseException = /** @class */ (function (_super) {
    __extends(ServiceResponseException, _super);
    /**
     * @internal Initializes a new instance of the **ServiceResponseException** class.
     *
     * @param   {ServiceResponse}   response   The ServiceResponse when service operation failed remotely.
     */
    function ServiceResponseException(response) {
        var _this = _super.call(this, response && response.ErrorMessage ? response.ErrorMessage : "") || this;
        _this.response = response;
        return _this;
    }
    Object.defineProperty(ServiceResponseException.prototype, "Response", {
        /**
         * Gets the ServiceResponse for the exception.
         */
        get: function () {
            return this.response;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponseException.prototype, "ErrorCode", {
        /**
         * Gets the service error code.
         */
        get: function () {
            return this.response ? this.response.ErrorCode : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponseException.prototype, "Message", {
        /**
         * Gets a message that describes the current exception.
         *
         * @returns The error message that explains the reason for the exception.
         */
        get: function () {
            // Special case for Internal Server Error. If the server returned
            // stack trace information, include it in the exception message.
            if (this.Response.ErrorCode == ServiceError_1.ServiceError.ErrorInternalServerError) {
                var exceptionClass = this.Response.ErrorDetails.get(ServiceResponseException.ExceptionClassKey);
                var exceptionMessage = this.Response.ErrorDetails.get(ServiceResponseException.ExceptionMessageKey);
                var stackTrace = this.Response.ErrorDetails.get(ServiceResponseException.StackTraceKey);
                if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(exceptionClass) && !ExtensionMethods_1.StringHelper.IsNullOrEmpty(exceptionMessage) && !ExtensionMethods_1.StringHelper.IsNullOrEmpty(stackTrace)) {
                    return ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ServerErrorAndStackTraceDetails, this.Response.ErrorMessage, exceptionClass, exceptionMessage, stackTrace);
                }
            }
            return this.Response.ErrorMessage;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Error details Value keys
     */
    ServiceResponseException.ExceptionClassKey = "ExceptionClass";
    ServiceResponseException.ExceptionMessageKey = "ExceptionMessage";
    ServiceResponseException.StackTraceKey = "StackTrace";
    return ServiceResponseException;
}(ServiceRemoteException_1.ServiceRemoteException));
exports.ServiceResponseException = ServiceResponseException;
