"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the legacy free/busy status associated with an appointment.
 */
var LegacyFreeBusyStatus;
(function (LegacyFreeBusyStatus) {
    /**
     * The time slot associated with the appointment appears as free.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["Free"] = 0] = "Free";
    /**
     * The time slot associated with the appointment appears as tentative.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["Tentative"] = 1] = "Tentative";
    /**
     * The time slot associated with the appointment appears as busy.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["Busy"] = 2] = "Busy";
    /**
     * The time slot associated with the appointment appears as Out of Office.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["OOF"] = 3] = "OOF";
    /**
     * The time slot associated with the appointment appears as working else where.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["WorkingElsewhere"] = 4] = "WorkingElsewhere";
    /**
     * No free/busy status is associated with the appointment.
     */
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["NoData"] = 5] = "NoData";
})(LegacyFreeBusyStatus = exports.LegacyFreeBusyStatus || (exports.LegacyFreeBusyStatus = {}));
