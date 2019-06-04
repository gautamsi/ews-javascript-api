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
var ServiceRemoteException_1 = require("./ServiceRemoteException");
/**
 * Represents an exception thrown when an error occurs as a result of calling the UpdateInboxRules operation.
 *
 * @sealed
 */
var UpdateInboxRulesException = /** @class */ (function (_super) {
    __extends(UpdateInboxRulesException, _super);
    /**
     * @internal Initializes a new instance of the **UpdateInboxRulesException** class.
     *
     * @param   {UpdateInboxRulesResponse}  serviceResponse   The rule operation service response.
     * @param   {RuleOperation[]}           ruleOperations    The original operations.
     */
    function UpdateInboxRulesException(serviceResponse, ruleOperations) {
        var _this = _super.call(this, serviceResponse && serviceResponse.ErrorMessage ? serviceResponse.ErrorMessage : "" || "") || this;
        /**
         * ServiceResponse when service operation failed remotely.
         */
        _this.serviceResponse = null;
        /**
         * Rule operation error collection.
         */
        _this.errors = null;
        _this.serviceResponse = serviceResponse;
        _this.errors = serviceResponse.Errors;
        for (var _i = 0, _a = _this.errors.Items; _i < _a.length; _i++) {
            var error = _a[_i];
            error.SetOperationByIndex(ruleOperations);
        }
        return _this;
    }
    Object.defineProperty(UpdateInboxRulesException.prototype, "ServiceResponse", {
        /**
         * Gets the ServiceResponse for the exception.
         */
        get: function () {
            return this.serviceResponse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateInboxRulesException.prototype, "Errors", {
        /**
         * Gets the rule operation error collection.
         */
        get: function () {
            return this.errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateInboxRulesException.prototype, "ErrorCode", {
        /**
         * Gets the rule operation error code.
         */
        get: function () {
            return this.serviceResponse.ErrorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateInboxRulesException.prototype, "ErrorMessage", {
        /**
         * Gets the rule operation error message.
         */
        get: function () {
            return this.serviceResponse.ErrorMessage;
        },
        enumerable: true,
        configurable: true
    });
    return UpdateInboxRulesException;
}(ServiceRemoteException_1.ServiceRemoteException));
exports.UpdateInboxRulesException = UpdateInboxRulesException;
