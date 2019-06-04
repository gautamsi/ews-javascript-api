"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the error codes that can be returned by the Autodiscover service.
 */
var AutodiscoverErrorCode;
(function (AutodiscoverErrorCode) {
    /**
     * There was no Error.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["NoError"] = 0] = "NoError";
    /**
     * The caller must follow the e-mail address redirection that was returned by Autodiscover.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["RedirectAddress"] = 1] = "RedirectAddress";
    /**
     * The caller must follow the URL redirection that was returned by Autodiscover.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["RedirectUrl"] = 2] = "RedirectUrl";
    /**
     * The user that was passed in the request is invalid.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["InvalidUser"] = 3] = "InvalidUser";
    /**
     * The request is invalid.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["InvalidRequest"] = 4] = "InvalidRequest";
    /**
     * A specified setting is invalid.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["InvalidSetting"] = 5] = "InvalidSetting";
    /**
     * A specified setting is not available.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["SettingIsNotAvailable"] = 6] = "SettingIsNotAvailable";
    /**
     * The server is too busy to process the request.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["ServerBusy"] = 7] = "ServerBusy";
    /**
     * The requested domain is not valid.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["InvalidDomain"] = 8] = "InvalidDomain";
    /**
     * The organization is not federated.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["NotFederated"] = 9] = "NotFederated";
    /**
     * Internal server error.
     */
    AutodiscoverErrorCode[AutodiscoverErrorCode["InternalServerError"] = 10] = "InternalServerError";
})(AutodiscoverErrorCode = exports.AutodiscoverErrorCode || (exports.AutodiscoverErrorCode = {}));
