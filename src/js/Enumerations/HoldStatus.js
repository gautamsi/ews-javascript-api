"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the hold status.
 */
var HoldStatus;
(function (HoldStatus) {
    /**
     * Not on hold
     */
    HoldStatus[HoldStatus["NotOnHold"] = 0] = "NotOnHold";
    /**
     * Placing/removing hold is in-progress
     */
    HoldStatus[HoldStatus["Pending"] = 1] = "Pending";
    /**
     * On hold
     */
    HoldStatus[HoldStatus["OnHold"] = 2] = "OnHold";
    /**
     * Some mailboxes are on hold and some are not
     */
    HoldStatus[HoldStatus["PartialHold"] = 3] = "PartialHold";
    /**
     * The hold operation failed
     */
    HoldStatus[HoldStatus["Failed"] = 4] = "Failed";
})(HoldStatus = exports.HoldStatus || (exports.HoldStatus = {}));
