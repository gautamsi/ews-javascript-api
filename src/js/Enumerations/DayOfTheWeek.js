"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Specifies the day of the week.
 *
 * /remarks/    For the standard days of the week (Sunday, Monday...) the DayOfTheWeek enum value is the same as the System.DayOfWeek enum type.
 * These values can be safely cast between the two enum types. The special days of the week (Day, Weekday and WeekendDay) are used for monthly and yearly recurrences and cannot be cast to System.DayOfWeek values.
 */
var DayOfTheWeek;
(function (DayOfTheWeek) {
    /**
     * Sunday
     */
    DayOfTheWeek[DayOfTheWeek["Sunday"] = 0] = "Sunday";
    /**
     * Monday
     */
    DayOfTheWeek[DayOfTheWeek["Monday"] = 1] = "Monday";
    /**
     * Tuesday
     */
    DayOfTheWeek[DayOfTheWeek["Tuesday"] = 2] = "Tuesday";
    /**
     * Wednesday
     */
    DayOfTheWeek[DayOfTheWeek["Wednesday"] = 3] = "Wednesday";
    /**
     * Thursday
     */
    DayOfTheWeek[DayOfTheWeek["Thursday"] = 4] = "Thursday";
    /**
     * Friday
     */
    DayOfTheWeek[DayOfTheWeek["Friday"] = 5] = "Friday";
    /**
     * Saturday
     */
    DayOfTheWeek[DayOfTheWeek["Saturday"] = 6] = "Saturday";
    /**
     * Any day of the week
     */
    DayOfTheWeek[DayOfTheWeek["Day"] = 7] = "Day";
    /**
     * Any day of the usual business week (Monday-Friday)
     */
    DayOfTheWeek[DayOfTheWeek["Weekday"] = 8] = "Weekday";
    /**
     * Any weekend day (Saturday or Sunday)
     */
    DayOfTheWeek[DayOfTheWeek["WeekendDay"] = 9] = "WeekendDay";
})(DayOfTheWeek = exports.DayOfTheWeek || (exports.DayOfTheWeek = {}));
