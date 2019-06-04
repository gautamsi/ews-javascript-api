"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines a user's Out of Office Assistant status.
 */
var OofState;
(function (OofState) {
    /**
     * The assistant is diabled.
     */
    OofState[OofState["Disabled"] = 0] = "Disabled";
    /**
     * The assistant is enabled.
     */
    OofState[OofState["Enabled"] = 1] = "Enabled";
    /**
     * The assistant is scheduled.
     */
    OofState[OofState["Scheduled"] = 2] = "Scheduled";
})(OofState = exports.OofState || (exports.OofState = {}));
