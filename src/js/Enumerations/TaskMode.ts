
/**
 * Defines the modes of a Task.
 */
export enum TaskMode {
    
    /**
     * The task is normal
     */
    Normal = 0,
    
    /**
     * The task is a task assignment request
     */
    Request = 1,
    
    /**
     * The task assignment request was accepted
     */
    RequestAccepted = 2,
    
    /**
     * The task assignment request was declined
     */
    RequestDeclined = 3,
    
    /**
     * The task has been updated
     */
    Update = 4,
    
    /**
     * The task is self delegated
     */
    SelfDelegated = 5
}