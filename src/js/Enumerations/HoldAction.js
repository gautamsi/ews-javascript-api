"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the hold action.
 */
var HoldAction;
(function (HoldAction) {
    /**
     * Create new hold
     */
    HoldAction[HoldAction["Create"] = 0] = "Create";
    /**
     * Update query associated with a hold
     */
    HoldAction[HoldAction["Update"] = 1] = "Update";
    /**
     * Release the hold
     */
    HoldAction[HoldAction["Remove"] = 2] = "Remove";
})(HoldAction = exports.HoldAction || (exports.HoldAction = {}));
