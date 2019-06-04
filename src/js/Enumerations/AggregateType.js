"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of aggregation to perform.
 */
var AggregateType;
(function (AggregateType) {
    /**
     * The maximum value is calculated.
     */
    AggregateType[AggregateType["Minimum"] = 0] = "Minimum";
    /**
     * The minimum value is calculated.
     */
    AggregateType[AggregateType["Maximum"] = 1] = "Maximum";
})(AggregateType = exports.AggregateType || (exports.AggregateType = {}));
