
/** 
 * Indicates which occurrence of a recurring task should be deleted
 */
export enum AffectedTaskOccurrence {
    
    /** 
     * All occurrences of the recurring task will be deleted.
     */
    AllOccurrences = 0,
    
    /** 
     * Only the current occurrence of the recurring task will be deleted. 
     */
    SpecifiedOccurrenceOnly = 1
}