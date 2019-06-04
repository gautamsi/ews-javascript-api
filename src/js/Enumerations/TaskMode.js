"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the modes of a Task.
 */
var TaskMode;
(function (TaskMode) {
    /**
     * The task is normal
     */
    TaskMode[TaskMode["Normal"] = 0] = "Normal";
    /**
     * The task is a task assignment request
     */
    TaskMode[TaskMode["Request"] = 1] = "Request";
    /**
     * The task assignment request was accepted
     */
    TaskMode[TaskMode["RequestAccepted"] = 2] = "RequestAccepted";
    /**
     * The task assignment request was declined
     */
    TaskMode[TaskMode["RequestDeclined"] = 3] = "RequestDeclined";
    /**
     * The task has been updated
     */
    TaskMode[TaskMode["Update"] = 4] = "Update";
    /**
     * The task is self delegated
     */
    TaskMode[TaskMode["SelfDelegated"] = 5] = "SelfDelegated";
})(TaskMode = exports.TaskMode || (exports.TaskMode = {}));
