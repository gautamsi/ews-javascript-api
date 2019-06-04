"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetUserAvailabilityResults = /** @class */ (function () {
    function GetUserAvailabilityResults() {
        this.attendeesAvailability = null;
        this.suggestionsResponse = null;
    }
    Object.defineProperty(GetUserAvailabilityResults.prototype, "SuggestionsResponse", {
        get: function () {
            return this.suggestionsResponse;
        },
        set: function (value) {
            this.suggestionsResponse = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetUserAvailabilityResults.prototype, "AttendeesAvailability", {
        get: function () {
            return this.attendeesAvailability;
        },
        set: function (value) {
            this.attendeesAvailability = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetUserAvailabilityResults.prototype, "Suggestions", {
        get: function () {
            if (this.suggestionsResponse === null) {
                return null;
            }
            this.suggestionsResponse.ThrowIfNecessary();
            return this.suggestionsResponse.Suggestions;
        },
        enumerable: true,
        configurable: true
    });
    return GetUserAvailabilityResults;
}());
exports.GetUserAvailabilityResults = GetUserAvailabilityResults;
