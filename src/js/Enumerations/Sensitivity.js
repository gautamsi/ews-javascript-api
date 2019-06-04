"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the sensitivity of an item.
 */
var Sensitivity;
(function (Sensitivity) {
    /**
     * The item has a normal sensitivity.
     */
    Sensitivity[Sensitivity["Normal"] = 0] = "Normal";
    /**
     * The item is personal.
     */
    Sensitivity[Sensitivity["Personal"] = 1] = "Personal";
    /**
     * The item is private.
     */
    Sensitivity[Sensitivity["Private"] = 2] = "Private";
    /**
     * The item is confidential.
     */
    Sensitivity[Sensitivity["Confidential"] = 3] = "Confidential";
})(Sensitivity = exports.Sensitivity || (exports.Sensitivity = {}));
