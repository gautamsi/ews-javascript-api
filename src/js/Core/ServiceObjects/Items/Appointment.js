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
var AppointmentOccurrenceId_1 = require("../../../ComplexProperties/AppointmentOccurrenceId");
var ExtensionMethods_1 = require("../../../ExtensionMethods");
var CancelMeetingMessage_1 = require("../ResponseObjects/CancelMeetingMessage");
var DeclineMeetingInvitationMessage_1 = require("../ResponseObjects/DeclineMeetingInvitationMessage");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var ItemAttachment_1 = require("../../../ComplexProperties/ItemAttachment");
var MessageBody_1 = require("../../../ComplexProperties/MessageBody");
var PropertySet_1 = require("../../PropertySet");
var RecurringAppointmentMasterId_1 = require("../../../ComplexProperties/RecurringAppointmentMasterId");
var ResponseMessage_1 = require("../ResponseObjects/ResponseMessage");
var ResponseMessageType_1 = require("../../../Enumerations/ResponseMessageType");
var Schemas_1 = require("../Schemas/Schemas");
var SendCancellationsMode_1 = require("../../../Enumerations/SendCancellationsMode");
var SendInvitationsMode_1 = require("../../../Enumerations/SendInvitationsMode");
var SendInvitationsOrCancellationsMode_1 = require("../../../Enumerations/SendInvitationsOrCancellationsMode");
var ServiceLocalException_1 = require("../../../Exceptions/ServiceLocalException");
var Strings_1 = require("../../../Strings");
var XmlElementNames_1 = require("../../XmlElementNames");
var Item_1 = require("./Item");
/**
 * Represents an **appointment or a meeting**. Properties available on appointments are defined in the *AppointmentSchema* class.
 */
var Appointment = /** @class */ (function (_super) {
    __extends(Appointment, _super);
    function Appointment(svcOrAttachment, isNew) {
        if (isNew === void 0) { isNew = false; }
        var _this = _super.call(this, svcOrAttachment) || this;
        if (svcOrAttachment instanceof ItemAttachment_1.ItemAttachment) { //todo:fix -can not user instanceof with exchangeservice, creates circular loop with ewsutility
            var parentAttachment = svcOrAttachment;
            // If we're running against Exchange 2007, we need to explicitly preset
            // the StartTimeZone property since Exchange 2007 will otherwise scope
            // start and end to UTC.
            if (parentAttachment.Service.RequestedServerVersion == ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
                if (isNew) {
                    _this.StartTimeZone = parentAttachment.Service.TimeZone;
                }
            }
        }
        return _this;
    }
    Object.defineProperty(Appointment, "Attachable", {
        /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute.*/
        get: function () { return this.name === "Appointment"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Appointment.prototype, "DefaultSendCancellationsMode", {
        /**
         * @internal Gets the default setting for sending cancellations on Delete.
         *
         * @return  {SendCancellationsMode}      If Delete() is called on Appointment, we want to send cancellations and save a copy.
         */
        get: function () {
            return SendCancellationsMode_1.SendCancellationsMode.SendToAllAndSaveCopy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "DefaultSendInvitationsMode", {
        /**
         * @internal Gets the default settings for sending invitations on Save.
         */
        get: function () {
            return SendInvitationsMode_1.SendInvitationsMode.SendToAllAndSaveCopy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "DefaultSendInvitationsOrCancellationsMode", {
        /**
         * @internal Gets the default settings for sending invitations or cancellations on Update.
         */
        get: function () {
            return SendInvitationsOrCancellationsMode_1.SendInvitationsOrCancellationsMode.SendToAllAndSaveCopy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Start", {
        /**
         * Gets or sets the start time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Start);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.Start, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "End", {
        /**
         * Gets or sets the end time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.End);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.End, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "OriginalStart", {
        /**
         * Gets the original start time of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.OriginalStart);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "IsAllDayEvent", {
        /**
         * Gets or sets a value indicating whether this appointment is an all day event.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsAllDayEvent);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.IsAllDayEvent, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "LegacyFreeBusyStatus", {
        /**
         * Gets or sets a value indicating the free/busy status of the owner of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.LegacyFreeBusyStatus);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.LegacyFreeBusyStatus, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Location", {
        /**
         * Gets or sets the location of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Location);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.Location, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "When", {
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
    Object.defineProperty(Appointment.prototype, "IsMeeting", {
        /**
         * Gets a value indicating whether the appointment is a meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsMeeting);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "IsCancelled", {
        /**
         * Gets a value indicating whether the appointment has been cancelled.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsCancelled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "IsRecurring", {
        /**
         * Gets a value indicating whether the appointment is recurring.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsRecurring);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "MeetingRequestWasSent", {
        /**
         * Gets a value indicating whether the meeting request has already been sent.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.MeetingRequestWasSent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "IsResponseRequested", {
        /**
         * Gets or sets a value indicating whether responses are requested when invitations are sent for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsResponseRequested);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.IsResponseRequested, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "AppointmentType", {
        /**
         * Gets a value indicating the type of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AppointmentType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "MyResponseType", {
        /**
         * Gets a value indicating what was the last response of the user that loaded this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.MyResponseType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Organizer", {
        /**
         * Gets the organizer of this meeting. The Organizer property is read-only and is only relevant for attendees.
         * The organizer of a meeting is automatically set to the user that created the meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Organizer);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "RequiredAttendees", {
        /**
         * Gets a list of required attendees for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.RequiredAttendees);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "OptionalAttendees", {
        /**
         * Gets a list of optional attendeed for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.OptionalAttendees);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Resources", {
        /**
         * Gets a list of resources for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Resources);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "ConflictingMeetingCount", {
        /**
         * Gets the number of calendar entries that conflict with this appointment in the authenticated user's calendar.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ConflictingMeetingCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "AdjacentMeetingCount", {
        /**
         * Gets the number of calendar entries that are adjacent to this appointment in the authenticated user's calendar.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AdjacentMeetingCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "ConflictingMeetings", {
        /**
         * Gets a list of meetings that conflict with this appointment in the authenticated user's calendar.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ConflictingMeetings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "AdjacentMeetings", {
        /**
         * Gets a list of meetings that is adjacent to this appointment in the authenticated user's calendar.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AdjacentMeetings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Duration", {
        /**
         * Gets the duration of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Duration);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "TimeZone", {
        /**
         * Gets the name of the time zone this appointment is defined in.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.TimeZone);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "AppointmentReplyTime", {
        /**
         * Gets the time when the attendee replied to the meeting request.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AppointmentReplyTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "AppointmentSequenceNumber", {
        /**
         * Gets the sequence number of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AppointmentSequenceNumber);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "AppointmentState", {
        /**
         * Gets the state of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AppointmentState);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "Recurrence", {
        /**
         * Gets or sets the recurrence pattern for this appointment. Available recurrence pattern classes include
         * Recurrence.DailyPattern, Recurrence.MonthlyPattern and Recurrence.YearlyPattern.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Recurrence);
        },
        set: function (value) {
            if (value !== null && value.IsRegenerationPattern) {
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.RegenerationPatternsOnlyValidForTasks);
            }
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.Recurrence, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "FirstOccurrence", {
        /**
         * Gets an OccurrenceInfo identifying the first occurrence of this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.FirstOccurrence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "LastOccurrence", {
        /**
         * Gets an OccurrenceInfo identifying the last occurrence of this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.LastOccurrence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "ModifiedOccurrences", {
        /**
         * Gets a list of modified occurrences for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ModifiedOccurrences);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "DeletedOccurrences", {
        /**
         * Gets a list of deleted occurrences for this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.DeletedOccurrences);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "StartTimeZone", {
        /**
         * Gets or sets time zone of the start property of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.StartTimeZone);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.StartTimeZone, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "EndTimeZone", {
        /**
         * Gets or sets time zone of the end property of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.EndTimeZone);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.EndTimeZone, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "ConferenceType", {
        /**
         * Gets or sets the type of conferencing that will be used during the meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ConferenceType);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.ConferenceType, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "AllowNewTimeProposal", {
        /**
         * Gets or sets a value indicating whether new time proposals are allowed for attendees of this meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.AllowNewTimeProposal);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.AllowNewTimeProposal, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "IsOnlineMeeting", {
        /**
         * Gets or sets a value indicating whether this is an online meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.IsOnlineMeeting);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.IsOnlineMeeting, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "MeetingWorkspaceUrl", {
        /**
         * Gets or sets the URL of the meeting workspace. A meeting workspace is a shared Web site for planning meetings and tracking results.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.MeetingWorkspaceUrl);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.MeetingWorkspaceUrl, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "NetShowUrl", {
        /**
         * Gets or sets the URL of the Microsoft NetShow online meeting.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.NetShowUrl);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.NetShowUrl, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "ICalUid", {
        /**
         * Gets or sets the ICalendar Uid.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ICalUid);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.ICalUid, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "ICalRecurrenceId", {
        /**
         * Gets the ICalendar RecurrenceId.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ICalRecurrenceId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "ICalDateTimeStamp", {
        /**
         * Gets the ICalendar DateTimeStamp.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.ICalDateTimeStamp);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "EnhancedLocation", {
        /**
         * Gets or sets the Enhanced location object.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.EnhancedLocation);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.EnhancedLocation, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "JoinOnlineMeetingUrl", {
        /**
         * Gets the Url for joining an online meeting
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.JoinOnlineMeetingUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "OnlineMeetingSettings", {
        /**
         * Gets the Online Meeting Settings
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.OnlineMeetingSettings);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    Appointment.prototype.Accept = function (sendResponse) {
        return this.InternalAccept(false, sendResponse);
    };
    /**
     * Tentatively accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    Appointment.prototype.AcceptTentatively = function (sendResponse) {
        return this.InternalAccept(true, sendResponse);
    };
    Appointment.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, Appointment);
    };
    Appointment.BindToOccurrence = function (service, recurringMasterId, occurenceIndex, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        var occurenceId = new AppointmentOccurrenceId_1.AppointmentOccurrenceId(recurringMasterId.UniqueId, occurenceIndex);
        return Appointment.Bind(service, occurenceId, propertySet);
    };
    Appointment.BindToRecurringMaster = function (service, occurrenceId, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        var recurringMasterId = new RecurringAppointmentMasterId_1.RecurringAppointmentMasterId(occurrenceId.UniqueId);
        return Appointment.Bind(service, recurringMasterId, propertySet);
    };
    Appointment.prototype.CancelMeeting = function (cancellationMessageText) {
        if (arguments.length === 0) {
            return this.CreateCancelMeetingMessage().SendAndSaveCopy();
        }
        var cancelMsg = this.CreateCancelMeetingMessage();
        cancelMsg.Body = new MessageBody_1.MessageBody(cancellationMessageText); //todo:fix - cant use implicit operator of c#, using explicit. Assumed HTML body used in c# implicit conversion
        return cancelMsg.SendAndSaveCopy();
    };
    /**
     * Creates a local meeting acceptance message that can be customized and sent.
     *
     * @param   {boolean}   tentative   Specifies whether the meeting will be tentatively accepted.
     * @return  {AcceptMeetingInvitationMessage}  An AcceptMeetingInvitationMessage representing the meeting acceptance message.
     */
    Appointment.prototype.CreateAcceptMessage = function (tentative) {
        return new AcceptMeetingInvitationMessage_1.AcceptMeetingInvitationMessage(this, tentative);
    };
    /**
     * Creates a local meeting cancellation message that can be customized and sent.
     *
     * @return  {CancelMeetingMessage}    A CancelMeetingMessage representing the meeting cancellation message.
     */
    Appointment.prototype.CreateCancelMeetingMessage = function () {
        return new CancelMeetingMessage_1.CancelMeetingMessage(this);
    };
    /**
     * Creates a local meeting declination message that can be customized and sent.
     *
     * @return  {DeclineMeetingInvitationMessage}      A DeclineMeetingInvitation representing the meeting declination message.
     */
    Appointment.prototype.CreateDeclineMessage = function () {
        return new DeclineMeetingInvitationMessage_1.DeclineMeetingInvitationMessage(this);
    };
    /**
     * Creates a forward message from this appointment.
     *
     * @return  {ResponseMessage} A ResponseMessage representing the forward response that can subsequently be modified and sent.
     */
    Appointment.prototype.CreateForward = function () {
        this.ThrowIfThisIsNew();
        return new ResponseMessage_1.ResponseMessage(this, ResponseMessageType_1.ResponseMessageType.Forward);
    };
    /**
     * Creates a reply response to the organizer and/or attendees of the meeting.
     *
     * @param   {boolean}   replyAll   Indicates whether the reply should go to the organizer only or to all the attendees.
     * @return  {ResponseMessage} A ResponseMessage representing the reply response that can subsequently be modified and sent.
     */
    Appointment.prototype.CreateReply = function (replyAll) {
        this.ThrowIfThisIsNew();
        return new ResponseMessage_1.ResponseMessage(this, replyAll ? ResponseMessageType_1.ResponseMessageType.ReplyAll : ResponseMessageType_1.ResponseMessageType.Reply);
    };
    /**
     * Declines the meeting invitation. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as aresults of this operation :Promise.
     */
    Appointment.prototype.Decline = function (sendResponse) {
        var decline = this.CreateDeclineMessage();
        if (sendResponse) {
            return decline.SendAndSaveCopy();
        }
        else {
            return decline.Save();
        }
    };
    Appointment.prototype.Delete = function (deleteMode, sendCancellationsMode) {
        return this.InternalDelete(deleteMode, sendCancellationsMode, null);
    };
    Appointment.prototype.Forward = function (bodyPrefix, _toRecipients) {
        var responseMessage = this.CreateForward();
        var toRecipients = [];
        responseMessage.BodyPrefix = bodyPrefix;
        if (ExtensionMethods_1.ArrayHelper.isArray(_toRecipients)) {
            toRecipients = _toRecipients;
        }
        else {
            for (var _i = 1; _i < arguments.length; _i++) {
                toRecipients[_i - 1] = arguments[_i];
            }
        }
        responseMessage.ToRecipients.AddRange(toRecipients);
        return responseMessage.SendAndSaveCopy();
    };
    /**
     * @internal Determines whether properties defined with ScopedDateTimePropertyDefinition require custom time zone scoping.
     *
     * @return  {boolean}      true if this item type requires custom scoping for scoped date/time properties; otherwise, false.
     */
    Appointment.prototype.GetIsCustomDateTimeScopingRequired = function () {
        return true;
    };
    /**
     * @internal Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}                       true if a time zone SOAP header should be emitted; otherwise, false.
     */
    Appointment.prototype.GetIsTimeZoneHeaderRequired = function (isUpdateOperation) {
        if (isUpdateOperation) {
            return false;
        }
        else {
            var isStartTimeZoneSetOrUpdated = this.PropertyBag.IsPropertyUpdated(Schemas_1.Schemas.AppointmentSchema.StartTimeZone);
            var isEndTimeZoneSetOrUpdated = this.PropertyBag.IsPropertyUpdated(Schemas_1.Schemas.AppointmentSchema.EndTimeZone);
            if (isStartTimeZoneSetOrUpdated && isEndTimeZoneSetOrUpdated) {
                // If both StartTimeZone and EndTimeZone have been set or updated and are the same as the service's
                // time zone, we emit the time zone header and StartTimeZone and EndTimeZone are not emitted.
                var startTimeZone = { outValue: null };
                var endTimeZone = { outValue: null };
                ;
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.AppointmentSchema.StartTimeZone, startTimeZone);
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.AppointmentSchema.EndTimeZone, endTimeZone);
                return startTimeZone.outValue == this.Service.TimeZone || endTimeZone.outValue == this.Service.TimeZone;
            }
            else {
                return true;
            }
        }
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    Appointment.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    Appointment.prototype.GetSchema = function () {
        return Schemas_1.Schemas.AppointmentSchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    Appointment.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.CalendarItem;
    };
    /**
     * @internal Accepts the meeting.
     *
     * @param   {boolean}   tentative      True if tentative accept.
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}    A CalendarActionResults object containing the various items that were created or modified as aresults of this operation :Promise.
     */
    Appointment.prototype.InternalAccept = function (tentative, sendResponse) {
        var accept = this.CreateAcceptMessage(tentative);
        if (sendResponse) {
            return accept.SendAndSaveCopy();
        }
        else {
            return accept.Save();
        }
    };
    /**
     * Replies to the organizer and/or the attendees of the meeting. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}     bodyPrefix   The prefix to prepend to the body of the meeting.
     * @param   {boolean}         replyAll     Indicates whether the reply should go to the organizer only or to all the attendees.
     */
    Appointment.prototype.Reply = function (bodyPrefix, replyAll) {
        var responseMessage = this.CreateReply(replyAll);
        responseMessage.BodyPrefix = bodyPrefix;
        return responseMessage.SendAndSaveCopy();
    };
    Appointment.prototype.Save = function (destinationFolderNameOrIdOrSendInvitationMode, sendInvitationsMode) {
        var argsLength = arguments.length;
        if (argsLength < 1 || argsLength > 2) {
            throw new Error("Appointment.ts - Save : Invalid number of arguments");
        }
        var simode = sendInvitationsMode;
        if (argsLength === 1) {
            simode = destinationFolderNameOrIdOrSendInvitationMode;
            return this.InternalCreate(null, null, simode);
        }
        var destinationFolderId = destinationFolderNameOrIdOrSendInvitationMode;
        if (argsLength === 2) {
            if (typeof destinationFolderNameOrIdOrSendInvitationMode === "number") {
                destinationFolderId = new FolderId_1.FolderId(destinationFolderNameOrIdOrSendInvitationMode);
            }
            return this.InternalCreate(destinationFolderId, null, sendInvitationsMode);
        }
    };
    Appointment.prototype.Update = function (conflictResolutionMode, sendInvitationsOrCancellationsMode) {
        return this.InternalUpdate(null, conflictResolutionMode, null, sendInvitationsOrCancellationsMode);
    };
    /**
     * @internal Validates this instance.
     *
     */
    Appointment.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //  Make sure that if we're on the Exchange2007_SP1 schema version, if any of the following
        //  properties are set or updated:
        //      o   Start
        //      o   End
        //      o   IsAllDayEvent
        //      o   Recurrence
        //  ... then, we must send the MeetingTimeZone element (which is generated from StartTimeZone for
        //  Exchange2007_SP1 requests (see StartTimeZonePropertyDefinition.cs).  If the StartTimeZone isn't
        //  in the property bag, then throw, because clients must supply the proper time zone - either by
        //  loading it from a currently-existing appointment, or by setting it directly.  Otherwise, to dirty
        //  the StartTimeZone property, we just set it to its current value.
        if ((this.Service.RequestedServerVersion == ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) &&
            !this.Service.Exchange2007CompatibilityMode) {
            if (this.PropertyBag.IsPropertyUpdated(Schemas_1.Schemas.AppointmentSchema.Start) ||
                this.PropertyBag.IsPropertyUpdated(Schemas_1.Schemas.AppointmentSchema.End) ||
                this.PropertyBag.IsPropertyUpdated(Schemas_1.Schemas.AppointmentSchema.IsAllDayEvent) ||
                this.PropertyBag.IsPropertyUpdated(Schemas_1.Schemas.AppointmentSchema.Recurrence)) {
                //  If the property isn't in the property bag, throw....
                if (!this.PropertyBag.Contains(Schemas_1.Schemas.AppointmentSchema.StartTimeZone)) {
                    throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.StartTimeZoneRequired);
                }
                //  Otherwise, set the time zone to its current value to force it to be sent with the request.
                this.StartTimeZone = this.StartTimeZone;
            }
        }
    };
    return Appointment;
}(Item_1.Item));
exports.Appointment = Appointment;
