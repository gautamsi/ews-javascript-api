
/**
 * This maps to the bogus TaskDelegationState in the EWS schema.
 * The schema enum has 6 values, but EWS should never return anything but values between 0 and 3, so we should be safe without mappings for EWS's Declined and Max values
 */
export enum TaskDelegationState {

    /**
     * The task is not delegated
     */
    NoDelegation = 0, // Maps to NoMatch

    /**
     * The task's delegation state is unknown.
     */
    Unknown = 1,      // Maps to OwnNew

    /**
     * The task was delegated and the delegation was accepted.
     */
    Accepted = 2,     // Maps to Owned

    /**
     * The task was delegated but the delegation was declined.
     */
    Declined = 3      // Maps to Accepted

    // The original Declined value has no mapping
    // The original Max value has no mapping
}