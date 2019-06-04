"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of data that can be requested via GetUserAvailability.
 */
var AvailabilityData;
(function (AvailabilityData) {
    /**
     * Only return free/busy data.
     */
    AvailabilityData[AvailabilityData["FreeBusy"] = 0] = "FreeBusy";
    /**
     * Only return suggestions.
     */
    AvailabilityData[AvailabilityData["Suggestions"] = 1] = "Suggestions";
    /**
     * Return both free/busy data and suggestions.
     */
    AvailabilityData[AvailabilityData["FreeBusyAndSuggestions"] = 2] = "FreeBusyAndSuggestions";
})(AvailabilityData = exports.AvailabilityData || (exports.AvailabilityData = {}));
