"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indicates which occurrence of a recurring task should be deleted
 */
var AffectedTaskOccurrence;
(function (AffectedTaskOccurrence) {
    /**
     * All occurrences of the recurring task will be deleted.
     */
    AffectedTaskOccurrence[AffectedTaskOccurrence["AllOccurrences"] = 0] = "AllOccurrences";
    /**
     * Only the current occurrence of the recurring task will be deleted.
     */
    AffectedTaskOccurrence[AffectedTaskOccurrence["SpecifiedOccurrenceOnly"] = 1] = "SpecifiedOccurrenceOnly";
})(AffectedTaskOccurrence = exports.AffectedTaskOccurrence || (exports.AffectedTaskOccurrence = {}));
