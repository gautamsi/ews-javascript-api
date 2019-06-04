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
var ChangeHighlights_1 = require("../../../ComplexProperties/ChangeHighlights");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var GenericPropertyDefinition_1 = require("../../../PropertyDefinitions/GenericPropertyDefinition");
var LegacyFreeBusyStatus_1 = require("../../../Enumerations/LegacyFreeBusyStatus");
var MeetingRequestType_1 = require("../../../Enumerations/MeetingRequestType");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var Schemas_1 = require("./Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var MeetingMessageSchema_1 = require("./MeetingMessageSchema");
/**
 * Field URIs for meeting request.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.MeetingRequestType = "meetingRequest:MeetingRequestType";
    FieldUris.IntendedFreeBusyStatus = "meetingRequest:IntendedFreeBusyStatus";
    FieldUris.ChangeHighlights = "meetingRequest:ChangeHighlights";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for meeting requests.
 */
var MeetingRequestSchema = /** @class */ (function (_super) {
    __extends(MeetingRequestSchema, _super);
    function MeetingRequestSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    MeetingRequestSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.MeetingRequestType);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.IntendedFreeBusyStatus);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.ChangeHighlights);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.Start);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.End);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.OriginalStart);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.IsAllDayEvent);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.LegacyFreeBusyStatus);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.Location);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.When);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.IsMeeting);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.IsCancelled);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.IsRecurring);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.MeetingRequestWasSent);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.AppointmentType);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.MyResponseType);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.Organizer);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.RequiredAttendees);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.OptionalAttendees);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.Resources);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.ConflictingMeetingCount);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.AdjacentMeetingCount);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.ConflictingMeetings);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.AdjacentMeetings);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.Duration);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.TimeZone);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.AppointmentReplyTime);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.AppointmentSequenceNumber);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.AppointmentState);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.Recurrence);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.FirstOccurrence);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.LastOccurrence);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.ModifiedOccurrences);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.DeletedOccurrences);
        this.RegisterInternalProperty(MeetingRequestSchema, MeetingRequestSchema.MeetingTimeZone);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.StartTimeZone);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.EndTimeZone);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.ConferenceType);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.AllowNewTimeProposal);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.IsOnlineMeeting);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.MeetingWorkspaceUrl);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.NetShowUrl);
        this.RegisterProperty(MeetingRequestSchema, MeetingRequestSchema.EnhancedLocation);
    };
    /**
     * Defines the **MeetingRequestType** property.
     */
    MeetingRequestSchema.MeetingRequestType = new GenericPropertyDefinition_1.GenericPropertyDefinition("MeetingRequestType", XmlElementNames_1.XmlElementNames.MeetingRequestType, FieldUris.MeetingRequestType, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, MeetingRequestType_1.MeetingRequestType);
    /**
     * Defines the **IntendedFreeBusyStatus** property.
     */
    MeetingRequestSchema.IntendedFreeBusyStatus = new GenericPropertyDefinition_1.GenericPropertyDefinition("IntendedFreeBusyStatus", XmlElementNames_1.XmlElementNames.IntendedFreeBusyStatus, FieldUris.IntendedFreeBusyStatus, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, LegacyFreeBusyStatus_1.LegacyFreeBusyStatus);
    /**
     * Defines the **ChangeHighlights** property.
     */
    MeetingRequestSchema.ChangeHighlights = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ChangeHighlights", XmlElementNames_1.XmlElementNames.ChangeHighlights, FieldUris.ChangeHighlights, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new ChangeHighlights_1.ChangeHighlights(); });
    /**
     * Defines the **EnhancedLocation** property.
     */
    MeetingRequestSchema.EnhancedLocation = Schemas_1.Schemas.AppointmentSchema.EnhancedLocation;
    /**
     * Defines the **Start** property.
     */
    MeetingRequestSchema.Start = Schemas_1.Schemas.AppointmentSchema.Start;
    /**
     * Defines the **End** property.
     */
    MeetingRequestSchema.End = Schemas_1.Schemas.AppointmentSchema.End;
    /**
     * Defines the **OriginalStart** property.
     */
    MeetingRequestSchema.OriginalStart = Schemas_1.Schemas.AppointmentSchema.OriginalStart;
    /**
     * Defines the **IsAllDayEvent** property.
     */
    MeetingRequestSchema.IsAllDayEvent = Schemas_1.Schemas.AppointmentSchema.IsAllDayEvent;
    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    MeetingRequestSchema.LegacyFreeBusyStatus = Schemas_1.Schemas.AppointmentSchema.LegacyFreeBusyStatus;
    /**
     * Defines the **Location** property.
     */
    MeetingRequestSchema.Location = Schemas_1.Schemas.AppointmentSchema.Location;
    /**
     * Defines the **When** property.
     */
    MeetingRequestSchema.When = Schemas_1.Schemas.AppointmentSchema.When;
    /**
     * Defines the **IsMeeting** property.
     */
    MeetingRequestSchema.IsMeeting = Schemas_1.Schemas.AppointmentSchema.IsMeeting;
    /**
     * Defines the **IsCancelled** property.
     */
    MeetingRequestSchema.IsCancelled = Schemas_1.Schemas.AppointmentSchema.IsCancelled;
    /**
     * Defines the **IsRecurring** property.
     */
    MeetingRequestSchema.IsRecurring = Schemas_1.Schemas.AppointmentSchema.IsRecurring;
    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    MeetingRequestSchema.MeetingRequestWasSent = Schemas_1.Schemas.AppointmentSchema.MeetingRequestWasSent;
    /**
     * Defines the **AppointmentType** property.
     */
    MeetingRequestSchema.AppointmentType = Schemas_1.Schemas.AppointmentSchema.AppointmentType;
    /**
     * Defines the **MyResponseType** property.
     */
    MeetingRequestSchema.MyResponseType = Schemas_1.Schemas.AppointmentSchema.MyResponseType;
    /**
     * Defines the **Organizer** property.
     */
    MeetingRequestSchema.Organizer = Schemas_1.Schemas.AppointmentSchema.Organizer;
    /**
     * Defines the **RequiredAttendees** property.
     */
    MeetingRequestSchema.RequiredAttendees = Schemas_1.Schemas.AppointmentSchema.RequiredAttendees;
    /**
     * Defines the **OptionalAttendees** property.
     */
    MeetingRequestSchema.OptionalAttendees = Schemas_1.Schemas.AppointmentSchema.OptionalAttendees;
    /**
     * Defines the **Resources** property.
     */
    MeetingRequestSchema.Resources = Schemas_1.Schemas.AppointmentSchema.Resources;
    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    MeetingRequestSchema.ConflictingMeetingCount = Schemas_1.Schemas.AppointmentSchema.ConflictingMeetingCount;
    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    MeetingRequestSchema.AdjacentMeetingCount = Schemas_1.Schemas.AppointmentSchema.AdjacentMeetingCount;
    /**
     * Defines the **ConflictingMeetings** property.
     */
    MeetingRequestSchema.ConflictingMeetings = Schemas_1.Schemas.AppointmentSchema.ConflictingMeetings;
    /**
     * Defines the **AdjacentMeetings** property.
     */
    MeetingRequestSchema.AdjacentMeetings = Schemas_1.Schemas.AppointmentSchema.AdjacentMeetings;
    /**
     * Defines the **Duration** property.
     */
    MeetingRequestSchema.Duration = Schemas_1.Schemas.AppointmentSchema.Duration;
    /**
     * Defines the **TimeZone** property.
     */
    MeetingRequestSchema.TimeZone = Schemas_1.Schemas.AppointmentSchema.TimeZone;
    /**
     * Defines the **AppointmentReplyTime** property.
     */
    MeetingRequestSchema.AppointmentReplyTime = Schemas_1.Schemas.AppointmentSchema.AppointmentReplyTime;
    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    MeetingRequestSchema.AppointmentSequenceNumber = Schemas_1.Schemas.AppointmentSchema.AppointmentSequenceNumber;
    /**
     * Defines the **AppointmentState** property.
     */
    MeetingRequestSchema.AppointmentState = Schemas_1.Schemas.AppointmentSchema.AppointmentState;
    /**
     * Defines the **Recurrence** property.
     */
    MeetingRequestSchema.Recurrence = Schemas_1.Schemas.AppointmentSchema.Recurrence;
    /**
     * Defines the **FirstOccurrence** property.
     */
    MeetingRequestSchema.FirstOccurrence = Schemas_1.Schemas.AppointmentSchema.FirstOccurrence;
    /**
     * Defines the **LastOccurrence** property.
     */
    MeetingRequestSchema.LastOccurrence = Schemas_1.Schemas.AppointmentSchema.LastOccurrence;
    /**
     * Defines the **ModifiedOccurrences** property.
     */
    MeetingRequestSchema.ModifiedOccurrences = Schemas_1.Schemas.AppointmentSchema.ModifiedOccurrences;
    /**
     * Defines the **DeletedOccurrences** property.
     */
    MeetingRequestSchema.DeletedOccurrences = Schemas_1.Schemas.AppointmentSchema.DeletedOccurrences;
    /**
     * Defines the **MeetingTimeZone** property.
     */
    MeetingRequestSchema.MeetingTimeZone = Schemas_1.Schemas.AppointmentSchema.MeetingTimeZone;
    /**
     * Defines the **StartTimeZone** property.
     */
    MeetingRequestSchema.StartTimeZone = Schemas_1.Schemas.AppointmentSchema.StartTimeZone;
    /**
     * Defines the **EndTimeZone** property.
     */
    MeetingRequestSchema.EndTimeZone = Schemas_1.Schemas.AppointmentSchema.EndTimeZone;
    /**
     * Defines the **ConferenceType** property.
     */
    MeetingRequestSchema.ConferenceType = Schemas_1.Schemas.AppointmentSchema.ConferenceType;
    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    MeetingRequestSchema.AllowNewTimeProposal = Schemas_1.Schemas.AppointmentSchema.AllowNewTimeProposal;
    /**
     * Defines the **IsOnlineMeeting** property.
     */
    MeetingRequestSchema.IsOnlineMeeting = Schemas_1.Schemas.AppointmentSchema.IsOnlineMeeting;
    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    MeetingRequestSchema.MeetingWorkspaceUrl = Schemas_1.Schemas.AppointmentSchema.MeetingWorkspaceUrl;
    /**
     * Defines the **NetShowUrl** property.
     */
    MeetingRequestSchema.NetShowUrl = Schemas_1.Schemas.AppointmentSchema.NetShowUrl;
    /**
     * @internal Instance of **MeetingRequestSchema**
     */
    MeetingRequestSchema.Instance = new MeetingRequestSchema();
    return MeetingRequestSchema;
}(MeetingMessageSchema_1.MeetingMessageSchema));
exports.MeetingRequestSchema = MeetingRequestSchema;
