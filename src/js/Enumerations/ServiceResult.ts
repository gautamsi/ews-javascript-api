
/**
 * Defines the result of a call to an EWS method. 
 * Values in this enumeration have to be ordered from lowest to highest severity.
 */
export enum ServiceResult {
    
    /**
     * The call was successful
     */
    Success = 0,
    
    /**
     * The call triggered at least one warning
     */
    Warning = 1,
    
    /**
     * The call triggered at least one error
     */
    Error = 2
}