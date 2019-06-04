"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The consent states enumeration
 */
var ConsentState;
(function (ConsentState) {
    /**
     * User has closed the consent page or has not responded yet.
     */
    ConsentState[ConsentState["NotResponded"] = 0] = "NotResponded";
    /**
     * User has requested to disable the extension.
     */
    ConsentState[ConsentState["NotConsented"] = 1] = "NotConsented";
    /**
     * User has requested to enable the extension.
     */
    ConsentState[ConsentState["Consented"] = 2] = "Consented";
})(ConsentState = exports.ConsentState || (exports.ConsentState = {}));
