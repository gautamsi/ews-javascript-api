"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines base property sets that are used as the base for custom property sets.
 */
var BasePropertySet;
(function (BasePropertySet) {
    /**
     * Only includes the Id of items and folders.
     */
    BasePropertySet[BasePropertySet["IdOnly"] = 0] = "IdOnly";
    /**
     * Includes all the first class properties of items and folders.
     */
    BasePropertySet[BasePropertySet["FirstClassProperties"] = 1] = "FirstClassProperties";
})(BasePropertySet = exports.BasePropertySet || (exports.BasePropertySet = {}));
