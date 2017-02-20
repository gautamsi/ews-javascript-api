
/**
 * Specifies the day of the week.
 * 
 * /remarks/    For the standard days of the week (Sunday, Monday...) the DayOfTheWeek enum value is the same as the System.DayOfWeek enum type. 
 * These values can be safely cast between the two enum types. The special days of the week (Day, Weekday and WeekendDay) are used for monthly and yearly recurrences and cannot be cast to System.DayOfWeek values.
 */
export enum DayOfTheWeek {
    
    /**
     * Sunday
     */
    Sunday = 0,
    
    /**
     * Monday
     */
    Monday = 1,
    
    /**
     * Tuesday
     */
    Tuesday = 2,
    
    /**
     * Wednesday
     */
    Wednesday = 3,
    
    /**
     * Thursday
     */
    Thursday = 4,
    
    /**
     * Friday
     */
    Friday = 5,
    
    /**
     * Saturday
     */
    Saturday = 6,
    
    /**
     * Any day of the week
     */
    Day = 7,
    
    /**
     * Any day of the usual business week (Monday-Friday)
     */
    Weekday = 8,
    
    /**
     * Any weekend day (Saturday or Sunday)
     */
    WeekendDay = 9
}