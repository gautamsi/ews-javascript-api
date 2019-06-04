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
var EwsLogging_1 = require("../Core/EwsLogging");
var ServiceRemoteException_1 = require("./ServiceRemoteException");
/**
 * Represents a remote service exception that can have multiple service responses.
 *
 * @type {TResponse}       The type of the response.
 */
var BatchServiceResponseException = /** @class */ (function (_super) {
    __extends(BatchServiceResponseException, _super);
    function BatchServiceResponseException(serviceResponses, message, innerException) {
        var _this = this;
        if (arguments.length == 2) {
            _this = _super.call(this, message) || this;
        }
        else {
            _this = _super.call(this, message, innerException) || this;
        }
        EwsLogging_1.EwsLogging.Assert(serviceResponses != null, "BatchServiceResponseException.ctor", "serviceResponses is null");
        _this.responses = serviceResponses;
        return _this;
    }
    Object.defineProperty(BatchServiceResponseException.prototype, "ServiceResponses", {
        /**
         * Gets a list of responses returned by the web method.
         */
        get: function () { return this.ServiceResponses; },
        enumerable: true,
        configurable: true
    });
    return BatchServiceResponseException;
}(ServiceRemoteException_1.ServiceRemoteException));
exports.BatchServiceResponseException = BatchServiceResponseException;
