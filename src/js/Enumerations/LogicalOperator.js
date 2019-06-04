"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines a logical operator as used by search filter collections.
 */
var LogicalOperator;
(function (LogicalOperator) {
    /**
     * The AND operator.
     */
    LogicalOperator[LogicalOperator["And"] = 0] = "And";
    /**
     * The OR operator.
     */
    LogicalOperator[LogicalOperator["Or"] = 1] = "Or";
})(LogicalOperator = exports.LogicalOperator || (exports.LogicalOperator = {}));
