"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the containment mode for Contains search filters.
 */
var ContainmentMode;
(function (ContainmentMode) {
    /**
     * The comparison is between the full string and the constant. The property value and the supplied constant are precisely the same.
     */
    ContainmentMode[ContainmentMode["FullString"] = 0] = "FullString";
    /**
     * The comparison is between the string prefix and the constant.
     */
    ContainmentMode[ContainmentMode["Prefixed"] = 1] = "Prefixed";
    /**
     * The comparison is between a substring of the string and the constant.
     */
    ContainmentMode[ContainmentMode["Substring"] = 2] = "Substring";
    /**
     * The comparison is between a prefix on individual words in the string and the constant.
     */
    ContainmentMode[ContainmentMode["PrefixOnWords"] = 3] = "PrefixOnWords";
    /**
     * The comparison is between an exact phrase in the string and the constant.
     */
    ContainmentMode[ContainmentMode["ExactPhrase"] = 4] = "ExactPhrase";
})(ContainmentMode = exports.ContainmentMode || (exports.ContainmentMode = {}));
