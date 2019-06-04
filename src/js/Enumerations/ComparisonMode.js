"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the way values are compared in search filters.
 */
var ComparisonMode;
(function (ComparisonMode) {
    /**
     * The comparison is exact.
     */
    ComparisonMode[ComparisonMode["Exact"] = 0] = "Exact";
    /**
     * The comparison ignores casing.
     */
    ComparisonMode[ComparisonMode["IgnoreCase"] = 1] = "IgnoreCase";
    /**
     * The comparison ignores spacing characters.
     */
    ComparisonMode[ComparisonMode["IgnoreNonSpacingCharacters"] = 2] = "IgnoreNonSpacingCharacters";
    /**
     * The comparison ignores casing and spacing characters.
     */
    ComparisonMode[ComparisonMode["IgnoreCaseAndNonSpacingCharacters"] = 3] = "IgnoreCaseAndNonSpacingCharacters";
    // Although the following four values are defined in the EWS schema, they are useless
    // as they are all technically equivalent to Loose. We are not exposing those values
    // in this API. When we encounter one of these values on an existing search folder
    // restriction, we map it to IgnoreCaseAndNonSpacingCharacters.
    //
    // Loose,
    // LooseAndIgnoreCase,
    // LooseAndIgnoreNonSpace,
    // LooseAndIgnoreCaseAndIgnoreNonSpace
})(ComparisonMode = exports.ComparisonMode || (exports.ComparisonMode = {}));
