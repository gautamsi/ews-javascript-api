"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Defines the types of Autodiscover endpoints that are available.
 *
 * [Flags]
 */
var AutodiscoverEndpoints;
(function (AutodiscoverEndpoints) {
    /**
     * No endpoints available.
     */
    AutodiscoverEndpoints[AutodiscoverEndpoints["None"] = 0] = "None";
    /**
     * The "legacy" Autodiscover endpoint.
     */
    AutodiscoverEndpoints[AutodiscoverEndpoints["Legacy"] = 1] = "Legacy";
    /**
     * The SOAP endpoint.
     */
    AutodiscoverEndpoints[AutodiscoverEndpoints["Soap"] = 2] = "Soap";
    /**
     * The WS-Security endpoint.
     */
    AutodiscoverEndpoints[AutodiscoverEndpoints["WsSecurity"] = 4] = "WsSecurity";
    /**
     * The WS-Security/SymmetricKey endpoint.
     */
    AutodiscoverEndpoints[AutodiscoverEndpoints["WSSecuritySymmetricKey"] = 8] = "WSSecuritySymmetricKey";
    /**
     * The WS-Security/X509Cert endpoint.
     */
    AutodiscoverEndpoints[AutodiscoverEndpoints["WSSecurityX509Cert"] = 16] = "WSSecurityX509Cert";
    /**
     * The OAuth endpoint
     */
    AutodiscoverEndpoints[AutodiscoverEndpoints["OAuth"] = 32] = "OAuth";
})(AutodiscoverEndpoints = exports.AutodiscoverEndpoints || (exports.AutodiscoverEndpoints = {}));
