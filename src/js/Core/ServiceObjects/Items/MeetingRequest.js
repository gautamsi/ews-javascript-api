"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AcceptMeetingInvitationMessage_1 = require("../ResponseObjects/AcceptMeetingInvitationMessage");
var DeclineMeetingInvitationMessage_1 = require("../ResponseObjects/DeclineMeetingInvitationMessage");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var PropertySet_1 = require("../../PropertySet");
var Schemas_1 = require("../Schemas/Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var MeetingMessage_1 = require("./MeetingMessage");
/**
 * Represents a meeting request that an attendee can accept or decline. Properties available on meeting requests are defined in the MeetingRequestSchema class.
 */
var MeetingRequest = /** @class */ (function (_super) {
    __extends(MeetingRequest, _super);
    function MeetingRequest(parentAttachmentOrService) {
        return _super.call(this, parentAttachmentOrService) || this;
    }
    Object.defineProperty(MeetingRequest.prototype, "MeetingRequestType", {
        /**
         * Gets the type of this meeting request.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingRequestSchema.MeetingRequestType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "IntendedFreeBusyStatus", {
        /**
         * Gets the a value representing the intended free/busy status of the meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingRequestSchema.IntendedFreeBusyStatus);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "ChangeHighlights", {
        /**
         * Gets the change highlights of the meeting request.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingRequestSchema.ChangeHighlights);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "EnhancedLocation", {
        /**
         * Gets the Enhanced location object.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingRequestSchema.EnhancedLocation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "Start", {
        /**
         * Gets the start time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "End", {
        /**
         * Gets the end time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.End);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "OriginalStart", {
        /**
         * Gets the original start time of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.OriginalStart);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "IsAllDayEvent", {
        /**
         * Gets a value indicating whether this appointment is an all day event.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsAllDayEvent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "LegacyFreeBusyStatus", {
        /**
         * Gets a value indicating the free/busy status of the owner of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.LegacyFreeBusyStatus);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "Location", {
        /**
         * Gets the location of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "When", {
        /**
         * Gets a text indicating when this appointment occurs.
         * The text returned by When is localized using the Exchange Server culture or using the culture specified in the PreferredCulture property of the ExchangeService object this appointment is bound to.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.When);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "IsMeeting", {
        /**
         * Gets a value indicating whether the appointment is a meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsMeeting);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "IsCancelled", {
        /**
         * Gets a value indicating whether the appointment has been cancelled.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsCancelled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "IsRecurring", {
        /**
         * Gets a value indicating whether the appointment is recurring.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsRecurring);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "MeetingRequestWasSent", {
        /**
         * Gets a value indicating whether the meeting request has already been sent.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.MeetingRequestWasSent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "AppointmentType", {
        /**
         * Gets a value indicating the type of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AppointmentType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "MyResponseType", {
        /**
         * Gets a value indicating what was the last response of the user that loaded this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.MyResponseType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "Organizer", {
        /**
         * Gets the organizer of this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Organizer);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "RequiredAttendees", {
        /**
         * Gets a list of required attendees for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.RequiredAttendees);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "OptionalAttendees", {
        /**
         * Gets a list of optional attendeed for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.OptionalAttendees);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "Resources", {
        /**
         * Gets a list of resources for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Resources);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "ConflictingMeetingCount", {
        /**
         * Gets the number of calendar entries that conflict with this appointment in the authenticated user's calendar.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ConflictingMeetingCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "AdjacentMeetingCount", {
        /**
         * Gets the number of calendar entries that are adjacent to this appointment in the authenticated user's calendar.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AdjacentMeetingCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "ConflictingMeetings", {
        /**
         * Gets a list of meetings that conflict with this appointment in the authenticated user's calendar.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ConflictingMeetings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "AdjacentMeetings", {
        /**
         * Gets a list of meetings that are adjucent to this appointment in the authenticated user's calendar.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AdjacentMeetings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "Duration", {
        /**
         * Gets the duration of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Duration);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "TimeZone", {
        /**
         * Gets the name of the time zone this appointment is defined in.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.TimeZone);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "AppointmentReplyTime", {
        /**
         * Gets the time when the attendee replied to the meeting request.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AppointmentReplyTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "AppointmentSequenceNumber", {
        /**
         * Gets the sequence number of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AppointmentSequenceNumber);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "AppointmentState", {
        /**
         * Gets the state of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AppointmentState);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "Recurrence", {
        /**
         * Gets the recurrence pattern for this meeting request.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Recurrence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "FirstOccurrence", {
        /**
         * Gets an OccurrenceInfo identifying the first occurrence of this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.FirstOccurrence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "LastOccurrence", {
        /**
         * Gets an OccurrenceInfo identifying the last occurrence of this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.LastOccurrence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "ModifiedOccurrences", {
        /**
         * Gets a list of modified occurrences for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ModifiedOccurrences);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "DeletedOccurrences", {
        /**
         * Gets a list of deleted occurrences for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.DeletedOccurrences);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "StartTimeZone", {
        /**
         * Gets time zone of the start property of this meeting request.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.StartTimeZone);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "EndTimeZone", {
        /**
         * Gets time zone of the end property of this meeting request.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.EndTimeZone);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "ConferenceType", {
        /**
         * Gets the type of conferencing that will be used during the meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ConferenceType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "AllowNewTimeProposal", {
        /**
         * Gets a value indicating whether new time proposals are allowed for attendees of this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AllowNewTimeProposal);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "IsOnlineMeeting", {
        /**
         * Gets a value indicating whether this is an online meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsOnlineMeeting);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "MeetingWorkspaceUrl", {
        /**
         * Gets the URL of the meeting workspace. A meeting workspace is a shared Web site for planning meetings and tracking results.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.MeetingWorkspaceUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingRequest.prototype, "NetShowUrl", {
        /**
         * Gets the URL of the Microsoft NetShow online meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.NetShowUrl);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    MeetingRequest.prototype.Accept = function (sendResponse) {
        return this.InternalAccept(false, sendResponse);
    };
    /**
     * Tentatively accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}       A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    MeetingRequest.prototype.AcceptTentatively = function (sendResponse) {
        return this.InternalAccept(true, sendResponse);
    };
    MeetingRequest.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, MeetingRequest);
    };
    /**
     * Creates a local meeting acceptance message that can be customized and sent.
     *
     * @param   {boolean}   tentative   Specifies whether the meeting will be tentatively accepted.
     * @return  {AcceptMeetingInvitationMessage}        An AcceptMeetingInvitationMessage representing the meeting acceptance message.
     */
    MeetingRequest.prototype.CreateAcceptMessage = function (tentative) {
        return new AcceptMeetingInvitationMessage_1.AcceptMeetingInvitationMessage(this, tentative);
    };
    /**
     * Creates a local meeting declination message that can be customized and sent.
     *
     * @return  {DeclineMeetingInvitationMessage}      A DeclineMeetingInvitation representing the meeting declination message.
     */
    MeetingRequest.prototype.CreateDeclineMessage = function () {
        return new DeclineMeetingInvitationMessage_1.DeclineMeetingInvitationMessage(this);
    };
    /**
     * Declines the meeting invitation. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}       A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    MeetingRequest.prototype.Decline = function (sendResponse) {
        var decline = this.CreateDeclineMessage();
        if (sendResponse) {
            return decline.SendAndSaveCopy();
        }
        else {
            return decline.Save();
        }
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    MeetingRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    MeetingRequest.prototype.GetSchema = function () {
        return Schemas_1.Schemas.MeetingRequestSchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    MeetingRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.MeetingRequest;
    };
    /**
     * @internal Accepts the meeting.
     *
     * @param   {boolean}   tentative      True if tentative accept.
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}       A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    MeetingRequest.prototype.InternalAccept = function (tentative, sendResponse) {
        var accept = this.CreateAcceptMessage(tentative);
        if (sendResponse) {
            return accept.SendAndSaveCopy();
        }
        else {
            return accept.Save();
        }
    };
    return MeetingRequest;
}(MeetingMessage_1.MeetingMessage));
exports.MeetingRequest = MeetingRequest;
