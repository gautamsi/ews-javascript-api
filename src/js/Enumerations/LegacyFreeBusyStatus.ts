
/**
 * Defines the legacy free/busy status associated with an appointment.
 */
export enum LegacyFreeBusyStatus {
    
    /**
     * The time slot associated with the appointment appears as free.
     */
    Free = 'Free',
    
    /**
     * The time slot associated with the appointment appears as tentative.
     */
    Tentative = 'Tentative',
    
    /**
     * The time slot associated with the appointment appears as busy.
     */
    Busy = 'Busy',
    
    /**
     * The time slot associated with the appointment appears as Out of Office.
     */
    OOF = 'OOF',
    
    /**
     * The time slot associated with the appointment appears as working else where.
     */
    WorkingElsewhere = 'WorkingElsewhere',
    
    /**
     * No free/busy status is associated with the appointment.
     */
    NoData = 'NoData'
}