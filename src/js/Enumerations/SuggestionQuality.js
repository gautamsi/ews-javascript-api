"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the quality of an availability suggestion.
 */
var SuggestionQuality;
(function (SuggestionQuality) {
    /**
     * The suggestion is excellent.
     */
    SuggestionQuality[SuggestionQuality["Excellent"] = 0] = "Excellent";
    /**
     * The suggestion is good.
     */
    SuggestionQuality[SuggestionQuality["Good"] = 1] = "Good";
    /**
     * The suggestion is fair.
     */
    SuggestionQuality[SuggestionQuality["Fair"] = 2] = "Fair";
    /**
     * The suggestion is poor.
     */
    SuggestionQuality[SuggestionQuality["Poor"] = 3] = "Poor";
})(SuggestionQuality = exports.SuggestionQuality || (exports.SuggestionQuality = {}));
