"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Defines the type of error handling used for service method calls.
 */
var ServiceErrorHandling;
(function (ServiceErrorHandling) {
    /**
     * Service method should return the error(s).
     */
    ServiceErrorHandling[ServiceErrorHandling["ReturnErrors"] = 0] = "ReturnErrors";
    /**
     * Service method should throw exception when error occurs.
     */
    ServiceErrorHandling[ServiceErrorHandling["ThrowOnError"] = 1] = "ThrowOnError";
})(ServiceErrorHandling = exports.ServiceErrorHandling || (exports.ServiceErrorHandling = {}));
