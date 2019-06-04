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
var AppointmentType_1 = require("../../../Enumerations/AppointmentType");
var AttendeeCollection_1 = require("../../../ComplexProperties/AttendeeCollection");
var BoolPropertyDefinition_1 = require("../../../PropertyDefinitions/BoolPropertyDefinition");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var ContainedPropertyDefinition_1 = require("../../../PropertyDefinitions/ContainedPropertyDefinition");
var DateTimePropertyDefinition_1 = require("../../../PropertyDefinitions/DateTimePropertyDefinition");
var DeletedOccurrenceInfoCollection_1 = require("../../../ComplexProperties/DeletedOccurrenceInfoCollection");
var EmailAddress_1 = require("../../../ComplexProperties/EmailAddress");
var EnhancedLocation_1 = require("../../../ComplexProperties/EnhancedLocation");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var GenericPropertyDefinition_1 = require("../../../PropertyDefinitions/GenericPropertyDefinition");
var IntPropertyDefinition_1 = require("../../../PropertyDefinitions/IntPropertyDefinition");
var ItemCollection_1 = require("../../../ComplexProperties/ItemCollection");
var LegacyFreeBusyStatus_1 = require("../../../Enumerations/LegacyFreeBusyStatus");
var MeetingResponseType_1 = require("../../../Enumerations/MeetingResponseType");
var MeetingTimeZonePropertyDefinition_1 = require("../../../PropertyDefinitions/MeetingTimeZonePropertyDefinition");
var OccurrenceInfo_1 = require("../../../ComplexProperties/OccurrenceInfo");
var OccurrenceInfoCollection_1 = require("../../../ComplexProperties/OccurrenceInfoCollection");
var OnlineMeetingSettings_1 = require("../../../ComplexProperties/OnlineMeetingSettings");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var RecurrencePropertyDefinition_1 = require("../../../PropertyDefinitions/RecurrencePropertyDefinition");
var ScopedDateTimePropertyDefinition_1 = require("../../../PropertyDefinitions/ScopedDateTimePropertyDefinition");
var StartTimeZonePropertyDefinition_1 = require("../../../PropertyDefinitions/StartTimeZonePropertyDefinition");
var StringPropertyDefinition_1 = require("../../../PropertyDefinitions/StringPropertyDefinition");
var TimeSpanPropertyDefinition_1 = require("../../../PropertyDefinitions/TimeSpanPropertyDefinition");
var TimeZonePropertyDefinition_1 = require("../../../PropertyDefinitions/TimeZonePropertyDefinition");
var XmlElementNames_1 = require("../../XmlElementNames");
var ItemSchema_1 = require("./ItemSchema");
/**
 * Field URIs for Appointment.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.Start = "calendar:Start";
    FieldUris.End = "calendar:End";
    FieldUris.OriginalStart = "calendar:OriginalStart";
    FieldUris.IsAllDayEvent = "calendar:IsAllDayEvent";
    FieldUris.LegacyFreeBusyStatus = "calendar:LegacyFreeBusyStatus";
    FieldUris.Location = "calendar:Location";
    FieldUris.When = "calendar:When";
    FieldUris.IsMeeting = "calendar:IsMeeting";
    FieldUris.IsCancelled = "calendar:IsCancelled";
    FieldUris.IsRecurring = "calendar:IsRecurring";
    FieldUris.MeetingRequestWasSent = "calendar:MeetingRequestWasSent";
    FieldUris.IsResponseRequested = "calendar:IsResponseRequested";
    FieldUris.CalendarItemType = "calendar:CalendarItemType";
    FieldUris.MyResponseType = "calendar:MyResponseType";
    FieldUris.Organizer = "calendar:Organizer";
    FieldUris.RequiredAttendees = "calendar:RequiredAttendees";
    FieldUris.OptionalAttendees = "calendar:OptionalAttendees";
    FieldUris.Resources = "calendar:Resources";
    FieldUris.ConflictingMeetingCount = "calendar:ConflictingMeetingCount";
    FieldUris.AdjacentMeetingCount = "calendar:AdjacentMeetingCount";
    FieldUris.ConflictingMeetings = "calendar:ConflictingMeetings";
    FieldUris.AdjacentMeetings = "calendar:AdjacentMeetings";
    FieldUris.Duration = "calendar:Duration";
    FieldUris.TimeZone = "calendar:TimeZone";
    FieldUris.AppointmentReplyTime = "calendar:AppointmentReplyTime";
    FieldUris.AppointmentSequenceNumber = "calendar:AppointmentSequenceNumber";
    FieldUris.AppointmentState = "calendar:AppointmentState";
    FieldUris.Recurrence = "calendar:Recurrence";
    FieldUris.FirstOccurrence = "calendar:FirstOccurrence";
    FieldUris.LastOccurrence = "calendar:LastOccurrence";
    FieldUris.ModifiedOccurrences = "calendar:ModifiedOccurrences";
    FieldUris.DeletedOccurrences = "calendar:DeletedOccurrences";
    FieldUris.MeetingTimeZone = "calendar:MeetingTimeZone";
    FieldUris.StartTimeZone = "calendar:StartTimeZone";
    FieldUris.EndTimeZone = "calendar:EndTimeZone";
    FieldUris.ConferenceType = "calendar:ConferenceType";
    FieldUris.AllowNewTimeProposal = "calendar:AllowNewTimeProposal";
    FieldUris.IsOnlineMeeting = "calendar:IsOnlineMeeting";
    FieldUris.MeetingWorkspaceUrl = "calendar:MeetingWorkspaceUrl";
    FieldUris.NetShowUrl = "calendar:NetShowUrl";
    FieldUris.Uid = "calendar:UID";
    FieldUris.RecurrenceId = "calendar:RecurrenceId";
    FieldUris.DateTimeStamp = "calendar:DateTimeStamp";
    FieldUris.EnhancedLocation = "calendar:EnhancedLocation";
    FieldUris.JoinOnlineMeetingUrl = "calendar:JoinOnlineMeetingUrl";
    FieldUris.OnlineMeetingSettings = "calendar:OnlineMeetingSettings";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for appointment and meeting requests.
 */
var AppointmentSchema = /** @class */ (function (_super) {
    __extends(AppointmentSchema, _super);
    function AppointmentSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    AppointmentSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.ICalUid);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.ICalRecurrenceId);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.ICalDateTimeStamp);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.Start);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.End);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.OriginalStart);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.IsAllDayEvent);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.LegacyFreeBusyStatus);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.Location);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.When);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.IsMeeting);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.IsCancelled);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.IsRecurring);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.MeetingRequestWasSent);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.IsResponseRequested);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.AppointmentType);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.MyResponseType);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.Organizer);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.RequiredAttendees);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.OptionalAttendees);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.Resources);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.ConflictingMeetingCount);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.AdjacentMeetingCount);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.ConflictingMeetings);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.AdjacentMeetings);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.Duration);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.TimeZone);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.AppointmentReplyTime);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.AppointmentSequenceNumber);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.AppointmentState);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.Recurrence);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.FirstOccurrence);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.LastOccurrence);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.ModifiedOccurrences);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.DeletedOccurrences);
        this.RegisterInternalProperty(AppointmentSchema, AppointmentSchema.MeetingTimeZone);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.StartTimeZone);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.EndTimeZone);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.ConferenceType);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.AllowNewTimeProposal);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.IsOnlineMeeting);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.MeetingWorkspaceUrl);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.NetShowUrl);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.EnhancedLocation);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.JoinOnlineMeetingUrl);
        this.RegisterProperty(AppointmentSchema, AppointmentSchema.OnlineMeetingSettings);
    };
    /**
     * Defines the **StartTimeZone** property.
     */
    AppointmentSchema.StartTimeZone = new StartTimeZonePropertyDefinition_1.StartTimeZonePropertyDefinition("StartTimeZone", XmlElementNames_1.XmlElementNames.StartTimeZone, FieldUris.StartTimeZone, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **EndTimeZone** property.
     */
    AppointmentSchema.EndTimeZone = new TimeZonePropertyDefinition_1.TimeZonePropertyDefinition("EndTimeZone", XmlElementNames_1.XmlElementNames.EndTimeZone, FieldUris.EndTimeZone, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010);
    /**
     * Defines the **Start** property.
     */
    AppointmentSchema.Start = new ScopedDateTimePropertyDefinition_1.ScopedDateTimePropertyDefinition("Start", XmlElementNames_1.XmlElementNames.Start, FieldUris.Start, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function (version) { return AppointmentSchema.StartTimeZone; });
    /**
     * Defines the **End** property.
     */
    AppointmentSchema.End = new ScopedDateTimePropertyDefinition_1.ScopedDateTimePropertyDefinition("End", XmlElementNames_1.XmlElementNames.End, FieldUris.End, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function (version) {
        if (version !== ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            return AppointmentSchema.EndTimeZone;
        }
        return AppointmentSchema.StartTimeZone;
    });
    /**
     * Defines the **OriginalStart** property.
     */
    AppointmentSchema.OriginalStart = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("OriginalStart", XmlElementNames_1.XmlElementNames.OriginalStart, FieldUris.OriginalStart, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsAllDayEvent** property.
     */
    AppointmentSchema.IsAllDayEvent = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsAllDayEvent", XmlElementNames_1.XmlElementNames.IsAllDayEvent, FieldUris.IsAllDayEvent, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    AppointmentSchema.LegacyFreeBusyStatus = new GenericPropertyDefinition_1.GenericPropertyDefinition("LegacyFreeBusyStatus", XmlElementNames_1.XmlElementNames.LegacyFreeBusyStatus, FieldUris.LegacyFreeBusyStatus, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, LegacyFreeBusyStatus_1.LegacyFreeBusyStatus);
    /**
     * Defines the **Location** property.
     */
    AppointmentSchema.Location = new StringPropertyDefinition_1.StringPropertyDefinition("Location", XmlElementNames_1.XmlElementNames.Location, FieldUris.Location, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **When** property.
     */
    AppointmentSchema.When = new StringPropertyDefinition_1.StringPropertyDefinition("When", XmlElementNames_1.XmlElementNames.When, FieldUris.When, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsMeeting** property.
     */
    AppointmentSchema.IsMeeting = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsMeeting", XmlElementNames_1.XmlElementNames.IsMeeting, FieldUris.IsMeeting, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsCancelled** property.
     */
    AppointmentSchema.IsCancelled = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsCancelled", XmlElementNames_1.XmlElementNames.IsCancelled, FieldUris.IsCancelled, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsRecurring** property.
     */
    AppointmentSchema.IsRecurring = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsRecurring", XmlElementNames_1.XmlElementNames.IsRecurring, FieldUris.IsRecurring, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    AppointmentSchema.MeetingRequestWasSent = new BoolPropertyDefinition_1.BoolPropertyDefinition("MeetingRequestWasSent", XmlElementNames_1.XmlElementNames.MeetingRequestWasSent, FieldUris.MeetingRequestWasSent, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsResponseRequested** property.
     */
    AppointmentSchema.IsResponseRequested = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsResponseRequested", XmlElementNames_1.XmlElementNames.IsResponseRequested, FieldUris.IsResponseRequested, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **AppointmentType** property.
     */
    AppointmentSchema.AppointmentType = new GenericPropertyDefinition_1.GenericPropertyDefinition("CalendarItemType", XmlElementNames_1.XmlElementNames.CalendarItemType, FieldUris.CalendarItemType, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, AppointmentType_1.AppointmentType);
    /**
     * Defines the **MyResponseType** property.
     */
    AppointmentSchema.MyResponseType = new GenericPropertyDefinition_1.GenericPropertyDefinition("MyResponseType", XmlElementNames_1.XmlElementNames.MyResponseType, FieldUris.MyResponseType, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, MeetingResponseType_1.MeetingResponseType);
    /**
     * Defines the **Organizer** property.
     */
    AppointmentSchema.Organizer = new ContainedPropertyDefinition_1.ContainedPropertyDefinition("Organizer", XmlElementNames_1.XmlElementNames.Organizer, FieldUris.Organizer, XmlElementNames_1.XmlElementNames.Mailbox, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddress_1.EmailAddress(); });
    /**
     * Defines the **RequiredAttendees** property.
     */
    AppointmentSchema.RequiredAttendees = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("RequiredAttendees", XmlElementNames_1.XmlElementNames.RequiredAttendees, FieldUris.RequiredAttendees, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new AttendeeCollection_1.AttendeeCollection(); });
    /**
     * Defines the **OptionalAttendees** property.
     */
    AppointmentSchema.OptionalAttendees = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("OptionalAttendees", XmlElementNames_1.XmlElementNames.OptionalAttendees, FieldUris.OptionalAttendees, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new AttendeeCollection_1.AttendeeCollection(); });
    /**
     * Defines the **Resources** property.
     */
    AppointmentSchema.Resources = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Resources", XmlElementNames_1.XmlElementNames.Resources, FieldUris.Resources, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new AttendeeCollection_1.AttendeeCollection(); });
    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    AppointmentSchema.ConflictingMeetingCount = new IntPropertyDefinition_1.IntPropertyDefinition("ConflictingMeetingCount", XmlElementNames_1.XmlElementNames.ConflictingMeetingCount, FieldUris.ConflictingMeetingCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    AppointmentSchema.AdjacentMeetingCount = new IntPropertyDefinition_1.IntPropertyDefinition("AdjacentMeetingCount", XmlElementNames_1.XmlElementNames.AdjacentMeetingCount, FieldUris.AdjacentMeetingCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ConflictingMeetings** property.
     */
    AppointmentSchema.ConflictingMeetings = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ConflictingMeetings", XmlElementNames_1.XmlElementNames.ConflictingMeetings, FieldUris.ConflictingMeetings, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new ItemCollection_1.ItemCollection(); });
    /**
     * Defines the **AdjacentMeetings** property.
     */
    AppointmentSchema.AdjacentMeetings = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("AdjacentMeetings", XmlElementNames_1.XmlElementNames.AdjacentMeetings, FieldUris.AdjacentMeetings, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new ItemCollection_1.ItemCollection(); });
    /**
     * Defines the **Duration** property.
     */
    AppointmentSchema.Duration = new TimeSpanPropertyDefinition_1.TimeSpanPropertyDefinition("Duration", XmlElementNames_1.XmlElementNames.Duration, FieldUris.Duration, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **TimeZone** property.
     */
    AppointmentSchema.TimeZone = new StringPropertyDefinition_1.StringPropertyDefinition("TimeZone", XmlElementNames_1.XmlElementNames.TimeZone, FieldUris.TimeZone, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **AppointmentReplyTime** property.
     */
    AppointmentSchema.AppointmentReplyTime = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("AppointmentReplyTime", XmlElementNames_1.XmlElementNames.AppointmentReplyTime, FieldUris.AppointmentReplyTime, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    AppointmentSchema.AppointmentSequenceNumber = new IntPropertyDefinition_1.IntPropertyDefinition("AppointmentSequenceNumber", XmlElementNames_1.XmlElementNames.AppointmentSequenceNumber, FieldUris.AppointmentSequenceNumber, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **AppointmentState** property.
     */
    AppointmentSchema.AppointmentState = new IntPropertyDefinition_1.IntPropertyDefinition("AppointmentState", XmlElementNames_1.XmlElementNames.AppointmentState, FieldUris.AppointmentState, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Recurrence** property.
     */
    AppointmentSchema.Recurrence = new RecurrencePropertyDefinition_1.RecurrencePropertyDefinition("Recurrence", XmlElementNames_1.XmlElementNames.Recurrence, FieldUris.Recurrence, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **FirstOccurrence** property.
     */
    AppointmentSchema.FirstOccurrence = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("FirstOccurrence", XmlElementNames_1.XmlElementNames.FirstOccurrence, FieldUris.FirstOccurrence, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new OccurrenceInfo_1.OccurrenceInfo(); });
    /**
     * Defines the **LastOccurrence** property.
     */
    AppointmentSchema.LastOccurrence = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("LastOccurrence", XmlElementNames_1.XmlElementNames.LastOccurrence, FieldUris.LastOccurrence, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new OccurrenceInfo_1.OccurrenceInfo(); });
    /**
     * Defines the **ModifiedOccurrences** property.
     */
    AppointmentSchema.ModifiedOccurrences = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ModifiedOccurrences", XmlElementNames_1.XmlElementNames.ModifiedOccurrences, FieldUris.ModifiedOccurrences, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new OccurrenceInfoCollection_1.OccurrenceInfoCollection(); });
    /**
     * Defines the **DeletedOccurrences** property.
     */
    AppointmentSchema.DeletedOccurrences = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("DeletedOccurrences", XmlElementNames_1.XmlElementNames.DeletedOccurrences, FieldUris.DeletedOccurrences, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new DeletedOccurrenceInfoCollection_1.DeletedOccurrenceInfoCollection(); });
    /**
     * Defines the **MeetingTimeZone** property.
     */
    AppointmentSchema.MeetingTimeZone = new MeetingTimeZonePropertyDefinition_1.MeetingTimeZonePropertyDefinition("MeetingTimeZone", XmlElementNames_1.XmlElementNames.MeetingTimeZone, FieldUris.MeetingTimeZone, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ConferenceType** property.
     */
    AppointmentSchema.ConferenceType = new IntPropertyDefinition_1.IntPropertyDefinition("ConferenceType", XmlElementNames_1.XmlElementNames.ConferenceType, FieldUris.ConferenceType, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    AppointmentSchema.AllowNewTimeProposal = new BoolPropertyDefinition_1.BoolPropertyDefinition("AllowNewTimeProposal", XmlElementNames_1.XmlElementNames.AllowNewTimeProposal, FieldUris.AllowNewTimeProposal, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsOnlineMeeting** property.
     */
    AppointmentSchema.IsOnlineMeeting = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsOnlineMeeting", XmlElementNames_1.XmlElementNames.IsOnlineMeeting, FieldUris.IsOnlineMeeting, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    AppointmentSchema.MeetingWorkspaceUrl = new StringPropertyDefinition_1.StringPropertyDefinition("MeetingWorkspaceUrl", XmlElementNames_1.XmlElementNames.MeetingWorkspaceUrl, FieldUris.MeetingWorkspaceUrl, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **NetShowUrl** property.
     */
    AppointmentSchema.NetShowUrl = new StringPropertyDefinition_1.StringPropertyDefinition("NetShowUrl", XmlElementNames_1.XmlElementNames.NetShowUrl, FieldUris.NetShowUrl, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ICalUid** property.
     */
    AppointmentSchema.ICalUid = new StringPropertyDefinition_1.StringPropertyDefinition("ICalUid", XmlElementNames_1.XmlElementNames.Uid, FieldUris.Uid, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ICalRecurrenceId** property.
     */
    AppointmentSchema.ICalRecurrenceId = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("ICalRecurrenceId", XmlElementNames_1.XmlElementNames.RecurrenceId, FieldUris.RecurrenceId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, true);
    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    AppointmentSchema.ICalDateTimeStamp = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("ICalDateTimeStamp", XmlElementNames_1.XmlElementNames.DateTimeStamp, FieldUris.DateTimeStamp, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, true);
    /**
     * Defines the **EnhancedLocation** property.
     */
    AppointmentSchema.EnhancedLocation = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("EnhancedLocation", XmlElementNames_1.XmlElementNames.EnhancedLocation, FieldUris.EnhancedLocation, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new EnhancedLocation_1.EnhancedLocation(); });
    /**
     * Defines the **JoinOnlineMeetingUrl** property.
     */
    AppointmentSchema.JoinOnlineMeetingUrl = new StringPropertyDefinition_1.StringPropertyDefinition("JoinOnlineMeetingUrl", XmlElementNames_1.XmlElementNames.JoinOnlineMeetingUrl, FieldUris.JoinOnlineMeetingUrl, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013);
    /**
     * Defines the **OnlineMeetingSettings** property.
     */
    AppointmentSchema.OnlineMeetingSettings = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("OnlineMeetingSettings", XmlElementNames_1.XmlElementNames.OnlineMeetingSettings, FieldUris.OnlineMeetingSettings, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new OnlineMeetingSettings_1.OnlineMeetingSettings(); });
    /**
     * @internal Instance of **AppointmentSchema**
     */
    AppointmentSchema.Instance = new AppointmentSchema();
    return AppointmentSchema;
}(ItemSchema_1.ItemSchema));
exports.AppointmentSchema = AppointmentSchema;
