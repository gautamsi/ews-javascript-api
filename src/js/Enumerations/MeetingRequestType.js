"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of a meeting request.
 */
var MeetingRequestType;
(function (MeetingRequestType) {
    /**
     * Undefined meeting request type.
     */
    MeetingRequestType[MeetingRequestType["None"] = 0] = "None";
    /**
     * The meeting request is an update to the original meeting.
     */
    MeetingRequestType[MeetingRequestType["FullUpdate"] = 1] = "FullUpdate";
    /**
     * The meeting request is an information update.
     */
    MeetingRequestType[MeetingRequestType["InformationalUpdate"] = 2] = "InformationalUpdate";
    /**
     * The meeting request is for a new meeting.
     */
    MeetingRequestType[MeetingRequestType["NewMeetingRequest"] = 3] = "NewMeetingRequest";
    /**
     * The meeting request is outdated.
     */
    MeetingRequestType[MeetingRequestType["Outdated"] = 4] = "Outdated";
    /**
     * The meeting update is a silent update to an existing meeting.
     */
    MeetingRequestType[MeetingRequestType["SilentUpdate"] = 5] = "SilentUpdate";
    /**
     * The meeting update was forwarded to a delegate, and this copy is informational.
     */
    MeetingRequestType[MeetingRequestType["PrincipalWantsCopy"] = 6] = "PrincipalWantsCopy";
})(MeetingRequestType = exports.MeetingRequestType || (exports.MeetingRequestType = {}));
