"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Defines the types of response the Autodiscover service can return.
 */
var AutodiscoverResponseType;
(function (AutodiscoverResponseType) {
    /**
     * The request returned an error.
     */
    AutodiscoverResponseType[AutodiscoverResponseType["Error"] = 0] = "Error";
    /**
     * A URL redirection is necessary.
     */
    AutodiscoverResponseType[AutodiscoverResponseType["RedirectUrl"] = 1] = "RedirectUrl";
    /**
     * An address redirection is necessary.
     */
    AutodiscoverResponseType[AutodiscoverResponseType["RedirectAddress"] = 2] = "RedirectAddress";
    /**
     * The request succeeded.
     */
    AutodiscoverResponseType[AutodiscoverResponseType["Success"] = 3] = "Success";
})(AutodiscoverResponseType = exports.AutodiscoverResponseType || (exports.AutodiscoverResponseType = {}));
