"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The attendee is the organizer of the meeting.
 */
var MeetingAttendeeType;
(function (MeetingAttendeeType) {
    /**
     * The attendee is the organizer of the meeting.
     */
    MeetingAttendeeType[MeetingAttendeeType["Organizer"] = 0] = "Organizer";
    /**
     * The attendee is required.
     */
    MeetingAttendeeType[MeetingAttendeeType["Required"] = 1] = "Required";
    /**
     * The attendee is optional.
     */
    MeetingAttendeeType[MeetingAttendeeType["Optional"] = 2] = "Optional";
    /**
     * The attendee is a room.
     */
    MeetingAttendeeType[MeetingAttendeeType["Room"] = 3] = "Room";
    /**
     * The attendee is a resource.
     */
    MeetingAttendeeType[MeetingAttendeeType["Resource"] = 4] = "Resource";
})(MeetingAttendeeType = exports.MeetingAttendeeType || (exports.MeetingAttendeeType = {}));
