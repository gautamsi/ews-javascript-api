"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This maps to the bogus TaskDelegationState in the EWS schema.
 * The schema enum has 6 values, but EWS should never return anything but values between 0 and 3, so we should be safe without mappings for EWS's Declined and Max values
 */
var TaskDelegationState;
(function (TaskDelegationState) {
    /**
     * The task is not delegated
     */
    TaskDelegationState[TaskDelegationState["NoDelegation"] = 0] = "NoDelegation";
    /**
     * The task's delegation state is unknown.
     */
    TaskDelegationState[TaskDelegationState["Unknown"] = 1] = "Unknown";
    /**
     * The task was delegated and the delegation was accepted.
     */
    TaskDelegationState[TaskDelegationState["Accepted"] = 2] = "Accepted";
    /**
     * The task was delegated but the delegation was declined.
     */
    TaskDelegationState[TaskDelegationState["Declined"] = 3] = "Declined"; // Maps to Accepted
    // The original Declined value has no mapping
    // The original Max value has no mapping
})(TaskDelegationState = exports.TaskDelegationState || (exports.TaskDelegationState = {}));
