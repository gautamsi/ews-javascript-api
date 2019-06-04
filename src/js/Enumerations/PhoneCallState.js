"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The PhoneCallState enumeration
 */
var PhoneCallState;
(function (PhoneCallState) {
    /**
     * Idle.
     */
    PhoneCallState[PhoneCallState["Idle"] = 0] = "Idle";
    /**
     * Connecting.
     */
    PhoneCallState[PhoneCallState["Connecting"] = 1] = "Connecting";
    /**
     * Alerted.
     */
    PhoneCallState[PhoneCallState["Alerted"] = 2] = "Alerted";
    /**
     * Connected.
     */
    PhoneCallState[PhoneCallState["Connected"] = 3] = "Connected";
    /**
     * Disconnected.
     */
    PhoneCallState[PhoneCallState["Disconnected"] = 4] = "Disconnected";
    /**
     * Incoming.
     */
    PhoneCallState[PhoneCallState["Incoming"] = 5] = "Incoming";
    /**
     * Transferring.
     */
    PhoneCallState[PhoneCallState["Transferring"] = 6] = "Transferring";
    /**
     * Forwarding.
     */
    PhoneCallState[PhoneCallState["Forwarding"] = 7] = "Forwarding";
})(PhoneCallState = exports.PhoneCallState || (exports.PhoneCallState = {}));
