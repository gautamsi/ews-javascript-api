"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the execution status of a task.
 */
var TaskStatus;
(function (TaskStatus) {
    /**
     * The execution of the task is not started.
     */
    TaskStatus[TaskStatus["NotStarted"] = 0] = "NotStarted";
    /**
     * The execution of the task is in progress.
     */
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    /**
     * The execution of the task is completed.
     */
    TaskStatus[TaskStatus["Completed"] = 2] = "Completed";
    /**
     * The execution of the task is waiting on others.
     */
    TaskStatus[TaskStatus["WaitingOnOthers"] = 3] = "WaitingOnOthers";
    /**
     * The execution of the task is deferred.
     */
    TaskStatus[TaskStatus["Deferred"] = 4] = "Deferred";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
