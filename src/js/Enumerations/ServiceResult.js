"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the result of a call to an EWS method.
 * Values in this enumeration have to be ordered from lowest to highest severity.
 */
var ServiceResult;
(function (ServiceResult) {
    /**
     * The call was successful
     */
    ServiceResult[ServiceResult["Success"] = 0] = "Success";
    /**
     * The call triggered at least one warning
     */
    ServiceResult[ServiceResult["Warning"] = 1] = "Warning";
    /**
     * The call triggered at least one error
     */
    ServiceResult[ServiceResult["Error"] = 2] = "Error";
})(ServiceResult = exports.ServiceResult || (exports.ServiceResult = {}));
