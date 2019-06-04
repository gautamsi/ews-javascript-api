"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the precision for returned DateTime values
 */
var DateTimePrecision;
(function (DateTimePrecision) {
    /**
     * Default value.  No SOAP header emitted.
     */
    DateTimePrecision[DateTimePrecision["Default"] = 0] = "Default";
    /**
     * Seconds
     */
    DateTimePrecision[DateTimePrecision["Seconds"] = 1] = "Seconds";
    /**
     * Milliseconds
     */
    DateTimePrecision[DateTimePrecision["Milliseconds"] = 2] = "Milliseconds";
})(DateTimePrecision = exports.DateTimePrecision || (exports.DateTimePrecision = {}));
