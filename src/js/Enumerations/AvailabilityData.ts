
/**
 * Defines the type of data that can be requested via GetUserAvailability.
 */
export enum AvailabilityData {
    
    /**
     * Only return free/busy data.
     */
    FreeBusy = 0,
    
    /**
     * Only return suggestions.
     */
    Suggestions = 1,
    
    /**
     * Return both free/busy data and suggestions.
     */
    FreeBusyAndSuggestions = 2
}