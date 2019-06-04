"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TeamMailbox lifecycle state
 */
var TeamMailboxLifecycleState;
(function (TeamMailboxLifecycleState) {
    /**
     * Active
     */
    TeamMailboxLifecycleState[TeamMailboxLifecycleState["Active"] = 0] = "Active";
    /**
     * Closed
     */
    TeamMailboxLifecycleState[TeamMailboxLifecycleState["Closed"] = 1] = "Closed";
    /**
     * Unlinked
     */
    TeamMailboxLifecycleState[TeamMailboxLifecycleState["Unlinked"] = 2] = "Unlinked";
    /**
     * PendingDelete
     */
    TeamMailboxLifecycleState[TeamMailboxLifecycleState["PendingDelete"] = 3] = "PendingDelete";
})(TeamMailboxLifecycleState = exports.TeamMailboxLifecycleState || (exports.TeamMailboxLifecycleState = {}));
(function (TeamMailboxLifecycleState) {
    /**EwsEnumAttribute */
    function FromEwsEnumString(value) {
        return TeamMailboxLifecycleState[value];
    }
    TeamMailboxLifecycleState.FromEwsEnumString = FromEwsEnumString;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value) {
        return TeamMailboxLifecycleState[value];
    }
    TeamMailboxLifecycleState.ToEwsEnumString = ToEwsEnumString;
})(TeamMailboxLifecycleState = exports.TeamMailboxLifecycleState || (exports.TeamMailboxLifecycleState = {}));
