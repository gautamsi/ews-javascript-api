"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of an appointment.
 */
var AppointmentType;
(function (AppointmentType) {
    /**
     * The appointment is non-recurring.
     */
    AppointmentType[AppointmentType["Single"] = 0] = "Single";
    /**
     * The appointment is an occurrence of a recurring appointment.
     */
    AppointmentType[AppointmentType["Occurrence"] = 1] = "Occurrence";
    /**
     * The appointment is an exception of a recurring appointment.
     */
    AppointmentType[AppointmentType["Exception"] = 2] = "Exception";
    /**
     * The appointment is the recurring master of a series.
     */
    AppointmentType[AppointmentType["RecurringMaster"] = 3] = "RecurringMaster";
})(AppointmentType = exports.AppointmentType || (exports.AppointmentType = {}));
