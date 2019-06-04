"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsUtilities_1 = require("../Core/EwsUtilities");
var TypeContainer_1 = require("../TypeContainer");
/**
 * Represents the results of an action performed on a calendar item or meeting message, such as accepting, tentatively accepting or declining a meeting request.
 *
 * @sealed
 */
var CalendarActionResults = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **CalendarActionResults** class.
     *
     * @param   {Item[]}   items   Collection of items that were created or modified as a result of a calendar action.
     */
    function CalendarActionResults(items) {
        this.appointment = EwsUtilities_1.EwsUtilities.FindFirstItemOfType(items, TypeContainer_1.TypeContainer.Appointment);
        this.meetingRequest = EwsUtilities_1.EwsUtilities.FindFirstItemOfType(items, TypeContainer_1.TypeContainer.MeetingRequest);
        this.meetingResponse = EwsUtilities_1.EwsUtilities.FindFirstItemOfType(items, TypeContainer_1.TypeContainer.MeetingResponse);
        this.meetingCancellation = EwsUtilities_1.EwsUtilities.FindFirstItemOfType(items, TypeContainer_1.TypeContainer.MeetingCancellation);
    }
    Object.defineProperty(CalendarActionResults.prototype, "Appointment", {
        /**
         * Gets the meeting that was accepted, tentatively accepted or declined.
         *
         * Remark - When a meeting is accepted or tentatively accepted via an Appointment object,
         * EWS recreates the meeting, and Appointment represents that new version.
         * When a meeting is accepted or tentatively accepted via a MeetingRequest object,
         * EWS creates an associated meeting in the attendee's calendar and Appointment
         * represents that meeting.
         * When declining a meeting via an Appointment object, EWS moves the appointment to
         * the attendee's Deleted Items folder and Appointment represents that moved copy.
         * When declining a meeting via a MeetingRequest object, EWS creates an associated
         * meeting in the attendee's Deleted Items folder, and Appointment represents that
         * meeting.
         * When a meeting is declined via either an Appointment or a MeetingRequest object
         * from the Deleted Items folder, Appointment is null.
         */
        get: function () { return this.appointment; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarActionResults.prototype, "MeetingRequest", {
        /**
         * Gets the meeting request that was moved to the Deleted Items folder as a result of an attendee accepting, tentatively accepting or declining a meeting request. If the meeting request is accepted, tentatively accepted or declined from the Deleted Items folder, it is permanently deleted and MeetingRequest is null.
         *
         */
        get: function () { return this.meetingRequest; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarActionResults.prototype, "MeetingResponse", {
        /**
         * Gets the copy of the response that is sent to the organizer of a meeting when the meeting is accepted, tentatively accepted or declined by an attendee. MeetingResponse is null if the attendee chose not to send a response.
         *
         */
        get: function () { return this.meetingResponse; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarActionResults.prototype, "MeetingCancellation", {
        /**
         * Gets the copy of the meeting cancellation message sent by the organizer to the attendees of a meeting when the meeting is cancelled.
         *
         */
        get: function () { return this.meetingCancellation; },
        enumerable: true,
        configurable: true
    });
    return CalendarActionResults;
}());
exports.CalendarActionResults = CalendarActionResults;
