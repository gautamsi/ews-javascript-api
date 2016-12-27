
/**
 * Defines the execution status of a task.
 */
export enum TaskStatus {
    
    /**
     * The execution of the task is not started.
     */
    NotStarted = 0,
    
    /**
     * The execution of the task is in progress.
     */
    InProgress = 1,
    
    /**
     * The execution of the task is completed.
     */
    Completed = 2,
    
    /**
     * The execution of the task is waiting on others.
     */
    WaitingOnOthers = 3,
    
    /**
     * The execution of the task is deferred.
     */
    Deferred = 4
}