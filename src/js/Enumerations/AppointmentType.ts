
/**
 * Defines the type of an appointment.
 */
export enum AppointmentType {
    
    /**
     * The appointment is non-recurring.
     */
    Single = 0,
    
    /**
     * The appointment is an occurrence of a recurring appointment.
     */
    Occurrence = 1,
    
    /**
     * The appointment is an exception of a recurring appointment.
     */
    Exception = 2,
    
    /**
     * The appointment is the recurring master of a series.
     */
    RecurringMaster = 3
}