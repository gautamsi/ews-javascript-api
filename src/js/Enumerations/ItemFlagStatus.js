"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the flag status of an Item.
 */
var ItemFlagStatus;
(function (ItemFlagStatus) {
    /**
     * Not Flagged.
     */
    ItemFlagStatus[ItemFlagStatus["NotFlagged"] = 0] = "NotFlagged";
    /**
     * Flagged.
     */
    ItemFlagStatus[ItemFlagStatus["Flagged"] = 1] = "Flagged";
    /**
     * Complete.
     */
    ItemFlagStatus[ItemFlagStatus["Complete"] = 2] = "Complete";
})(ItemFlagStatus = exports.ItemFlagStatus || (exports.ItemFlagStatus = {}));
