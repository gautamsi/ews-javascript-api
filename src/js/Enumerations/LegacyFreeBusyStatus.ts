
/**
 * Defines the legacy free/busy status associated with an appointment.
 */
export enum LegacyFreeBusyStatus {
    
    /**
     * The time slot associated with the appointment appears as free.
     */
    Free = 0,
    
    /**
     * The time slot associated with the appointment appears as tentative.
     */
    Tentative = 1,
    
    /**
     * The time slot associated with the appointment appears as busy.
     */
    Busy = 2,
    
    /**
     * The time slot associated with the appointment appears as Out of Office.
     */
    OOF = 3,
    
    /**
     * The time slot associated with the appointment appears as working else where.
     */
    WorkingElsewhere = 4,
    
    /**
     * No free/busy status is associated with the appointment.
     */
    NoData = 5
}