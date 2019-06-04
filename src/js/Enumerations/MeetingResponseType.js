"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the types of response given to a meeting request.
 */
var MeetingResponseType;
(function (MeetingResponseType) {
    /**
     * The response type is unknown.
     */
    MeetingResponseType[MeetingResponseType["Unknown"] = 0] = "Unknown";
    /**
     * There was no response. The authenticated is the organizer of the meeting.
     */
    MeetingResponseType[MeetingResponseType["Organizer"] = 1] = "Organizer";
    /**
     * The meeting was tentatively accepted.
     */
    MeetingResponseType[MeetingResponseType["Tentative"] = 2] = "Tentative";
    /**
     * The meeting was accepted.
     */
    MeetingResponseType[MeetingResponseType["Accept"] = 3] = "Accept";
    /**
     * The meeting was declined.
     */
    MeetingResponseType[MeetingResponseType["Decline"] = 4] = "Decline";
    /**
     * No response was received for the meeting.
     */
    MeetingResponseType[MeetingResponseType["NoResponseReceived"] = 5] = "NoResponseReceived";
})(MeetingResponseType = exports.MeetingResponseType || (exports.MeetingResponseType = {}));
