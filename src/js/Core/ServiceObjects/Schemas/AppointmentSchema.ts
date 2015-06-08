import XmlElementNames = require("../../XmlElementNames");
import LegacyFreeBusyStatus = require("../../../Enumerations/LegacyFreeBusyStatus");
import AppointmentType = require("../../../Enumerations/AppointmentType");
import MeetingResponseType = require("../../../Enumerations/MeetingResponseType");
import Appointment = require("../Items/Appointment");
import StartTimeZonePropertyDefinition = require("../../../PropertyDefinitions/StartTimeZonePropertyDefinition");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import TimeZonePropertyDefinition = require("../../../PropertyDefinitions/TimeZonePropertyDefinition");
import ScopedDateTimePropertyDefinition = require("../../../PropertyDefinitions/ScopedDateTimePropertyDefinition");
import DateTimePropertyDefinition = require("../../../PropertyDefinitions/DateTimePropertyDefinition");
import BoolPropertyDefinition = require("../../../PropertyDefinitions/BoolPropertyDefinition");
import GenericPropertyDefinition = require("../../../PropertyDefinitions/GenericPropertyDefinition");
import StringPropertyDefinition = require("../../../PropertyDefinitions/StringPropertyDefinition");
import ContainedPropertyDefinition = require("../../../PropertyDefinitions/ContainedPropertyDefinition");
import EmailAddress = require("../../../ComplexProperties/EmailAddress");
import ComplexPropertyDefinition = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
import AttendeeCollection = require("../../../ComplexProperties/AttendeeCollection");
import IntPropertyDefinition = require("../../../PropertyDefinitions/IntPropertyDefinition");
import ItemCollection = require("../../../ComplexProperties/ItemCollection");
import TimeSpanPropertyDefinition = require("../../../PropertyDefinitions/TimeSpanPropertyDefinition");
import RecurrencePropertyDefinition = require("../../../PropertyDefinitions/RecurrencePropertyDefinition");
import OccurrenceInfo = require("../../../ComplexProperties/OccurrenceInfo");
import OccurrenceInfoCollection = require("../../../ComplexProperties/OccurrenceInfoCollection");
import DeletedOccurrenceInfoCollection = require("../../../ComplexProperties/DeletedOccurrenceInfoCollection");
import MeetingTimeZonePropertyDefinition = require("../../../PropertyDefinitions/MeetingTimeZonePropertyDefinition");
import EnhancedLocation = require("../../../ComplexProperties/EnhancedLocation");
import OnlineMeetingSettings = require("../../../ComplexProperties/OnlineMeetingSettings");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

import ItemSchema = require("./ItemSchema");

//module AppointmentSchema {
module FieldUris {
    export var Start: string = "calendar:Start";
    export var End: string = "calendar:End";
    export var OriginalStart: string = "calendar:OriginalStart";
    export var IsAllDayEvent: string = "calendar:IsAllDayEvent";
    export var LegacyFreeBusyStatus: string = "calendar:LegacyFreeBusyStatus";
    export var Location: string = "calendar:Location";
    export var When: string = "calendar:When";
    export var IsMeeting: string = "calendar:IsMeeting";
    export var IsCancelled: string = "calendar:IsCancelled";
    export var IsRecurring: string = "calendar:IsRecurring";
    export var MeetingRequestWasSent: string = "calendar:MeetingRequestWasSent";
    export var IsResponseRequested: string = "calendar:IsResponseRequested";
    export var CalendarItemType: string = "calendar:CalendarItemType";
    export var MyResponseType: string = "calendar:MyResponseType";
    export var Organizer: string = "calendar:Organizer";
    export var RequiredAttendees: string = "calendar:RequiredAttendees";
    export var OptionalAttendees: string = "calendar:OptionalAttendees";
    export var Resources: string = "calendar:Resources";
    export var ConflictingMeetingCount: string = "calendar:ConflictingMeetingCount";
    export var AdjacentMeetingCount: string = "calendar:AdjacentMeetingCount";
    export var ConflictingMeetings: string = "calendar:ConflictingMeetings";
    export var AdjacentMeetings: string = "calendar:AdjacentMeetings";
    export var Duration: string = "calendar:Duration";
    export var TimeZone: string = "calendar:TimeZone";
    export var AppointmentReplyTime: string = "calendar:AppointmentReplyTime";
    export var AppointmentSequenceNumber: string = "calendar:AppointmentSequenceNumber";
    export var AppointmentState: string = "calendar:AppointmentState";
    export var Recurrence: string = "calendar:Recurrence";
    export var FirstOccurrence: string = "calendar:FirstOccurrence";
    export var LastOccurrence: string = "calendar:LastOccurrence";
    export var ModifiedOccurrences: string = "calendar:ModifiedOccurrences";
    export var DeletedOccurrences: string = "calendar:DeletedOccurrences";
    export var MeetingTimeZone: string = "calendar:MeetingTimeZone";
    export var StartTimeZone: string = "calendar:StartTimeZone";
    export var EndTimeZone: string = "calendar:EndTimeZone";
    export var ConferenceType: string = "calendar:ConferenceType";
    export var AllowNewTimeProposal: string = "calendar:AllowNewTimeProposal";
    export var IsOnlineMeeting: string = "calendar:IsOnlineMeeting";
    export var MeetingWorkspaceUrl: string = "calendar:MeetingWorkspaceUrl";
    export var NetShowUrl: string = "calendar:NetShowUrl";
    export var Uid: string = "calendar:UID";
    export var RecurrenceId: string = "calendar:RecurrenceId";
    export var DateTimeStamp: string = "calendar:DateTimeStamp";
    export var EnhancedLocation: string = "calendar:EnhancedLocation";
    export var JoinOnlineMeetingUrl: string = "calendar:JoinOnlineMeetingUrl";
    export var OnlineMeetingSettings: string = "calendar:OnlineMeetingSettings";
}
//}

class AppointmentSchema extends ItemSchema {
    StartTimeZone: PropertyDefinition = new StartTimeZonePropertyDefinition(
        "StartTimeZone",
        XmlElementNames.StartTimeZone,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.StartTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    EndTimeZone: PropertyDefinition = new TimeZonePropertyDefinition(
        "EndTimeZone",
        XmlElementNames.EndTimeZone,
        ExchangeVersion.Exchange2010,
        FieldUris.EndTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    Start: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "Start",
        XmlElementNames.Start,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Start,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        (version: ExchangeVersion) => { return this.StartTimeZone; }
        );

    End: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "End",
        XmlElementNames.End,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.End,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        (version: ExchangeVersion) => {
            if (version !== ExchangeVersion.Exchange2007_SP1) {
                return this.EndTimeZone;
            }
            return this.StartTimeZone;
        });
    OriginalStart: PropertyDefinition = new DateTimePropertyDefinition(
        "OriginalStart",
        XmlElementNames.OriginalStart,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.OriginalStart,
        PropertyDefinitionFlags.None
        );

    IsAllDayEvent: PropertyDefinition = new BoolPropertyDefinition(
        "IsAllDayEvent",
        XmlElementNames.IsAllDayEvent,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsAllDayEvent,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    LegacyFreeBusyStatus: PropertyDefinition = new GenericPropertyDefinition<LegacyFreeBusyStatus>(
        "LegacyFreeBusyStatus",
        XmlElementNames.LegacyFreeBusyStatus,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.LegacyFreeBusyStatus,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    Location: PropertyDefinition = new StringPropertyDefinition(
        "Location",
        XmlElementNames.Location,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Location,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    When: PropertyDefinition = new StringPropertyDefinition(
        "When",
        XmlElementNames.When,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.When,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    IsMeeting: PropertyDefinition = new BoolPropertyDefinition(
        "IsMeeting",
        XmlElementNames.IsMeeting,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsMeeting,
        PropertyDefinitionFlags.CanFind
        );

    IsCancelled: PropertyDefinition = new BoolPropertyDefinition(
        "IsCancelled",
        XmlElementNames.IsCancelled,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsCancelled,
        PropertyDefinitionFlags.CanFind
        );

    IsRecurring: PropertyDefinition = new BoolPropertyDefinition(
        "IsRecurring",
        XmlElementNames.IsRecurring,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsRecurring,
        PropertyDefinitionFlags.CanFind
        );

    MeetingRequestWasSent: PropertyDefinition = new BoolPropertyDefinition(
        "MeetingRequestWasSent",
        XmlElementNames.MeetingRequestWasSent,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingRequestWasSent,
        PropertyDefinitionFlags.CanFind
        );

    IsResponseRequested: PropertyDefinition = new BoolPropertyDefinition(
        "IsResponseRequested",
        XmlElementNames.IsResponseRequested,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsResponseRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    AppointmentType: PropertyDefinition = new GenericPropertyDefinition<AppointmentType>(
        "CalendarItemType",
        XmlElementNames.CalendarItemType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.CalendarItemType,
        PropertyDefinitionFlags.CanFind
        );

    MyResponseType: PropertyDefinition = new GenericPropertyDefinition<MeetingResponseType>(
        "MyResponseType",
        XmlElementNames.MyResponseType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MyResponseType,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    Organizer: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "Organizer",
        XmlElementNames.Organizer,
        XmlElementNames.Mailbox,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Organizer,
        PropertyDefinitionFlags.CanFind,
        () => { return new EmailAddress(); }
        );

    RequiredAttendees: PropertyDefinition = new ComplexPropertyDefinition<AttendeeCollection>(
        "RequiredAttendees",
        XmlElementNames.RequiredAttendees,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.RequiredAttendees,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new AttendeeCollection(); }
        );

    OptionalAttendees: PropertyDefinition = new ComplexPropertyDefinition<AttendeeCollection>(
        "OptionalAttendees",
        XmlElementNames.OptionalAttendees,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.OptionalAttendees,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new AttendeeCollection(); }
        );

    Resources: PropertyDefinition = new ComplexPropertyDefinition<AttendeeCollection>(
        "Resources",
        XmlElementNames.Resources,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Resources,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new AttendeeCollection(); }
        );

    ConflictingMeetingCount: PropertyDefinition = new IntPropertyDefinition(
        "ConflictingMeetingCount",
        XmlElementNames.ConflictingMeetingCount,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConflictingMeetingCount,
        PropertyDefinitionFlags.None
        );

    AdjacentMeetingCount: PropertyDefinition = new IntPropertyDefinition(
        "AdjacentMeetingCount",
        XmlElementNames.AdjacentMeetingCount,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AdjacentMeetingCount,
        PropertyDefinitionFlags.None
        );

    ConflictingMeetings: PropertyDefinition = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
        "ConflictingMeetings",
        XmlElementNames.ConflictingMeetings,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConflictingMeetings,
        PropertyDefinitionFlags.None,
        () => { return new ItemCollection<Appointment>(); }
        );

    AdjacentMeetings: PropertyDefinition = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
        "AdjacentMeetings",
        XmlElementNames.AdjacentMeetings,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AdjacentMeetings,
        PropertyDefinitionFlags.None,
        () => { return new ItemCollection<Appointment>(); }
        );

    Duration: PropertyDefinition = new TimeSpanPropertyDefinition(
        "Duration",
        XmlElementNames.Duration,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Duration,
        PropertyDefinitionFlags.CanFind
        );

    TimeZone: PropertyDefinition = new StringPropertyDefinition(
        "TimeZone",
        XmlElementNames.TimeZone,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.TimeZone,
        PropertyDefinitionFlags.CanFind
        );

    AppointmentReplyTime: PropertyDefinition = new DateTimePropertyDefinition(
        "AppointmentReplyTime",
        XmlElementNames.AppointmentReplyTime,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AppointmentReplyTime,
        PropertyDefinitionFlags.CanFind
        );

    AppointmentSequenceNumber: PropertyDefinition = new IntPropertyDefinition(
        "AppointmentSequenceNumber",
        XmlElementNames.AppointmentSequenceNumber,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AppointmentSequenceNumber,
        PropertyDefinitionFlags.None
        );

    AppointmentState: PropertyDefinition = new IntPropertyDefinition(
        "AppointmentState",
        XmlElementNames.AppointmentState,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AppointmentState,
        PropertyDefinitionFlags.CanFind
        );

    Recurrence: PropertyDefinition = new RecurrencePropertyDefinition(
        "Recurrence",
        XmlElementNames.Recurrence,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Recurrence,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete
        );

    FirstOccurrence: PropertyDefinition = new ComplexPropertyDefinition<OccurrenceInfo>(
        "FirstOccurrence",
        XmlElementNames.FirstOccurrence,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.FirstOccurrence,
        PropertyDefinitionFlags.None,
        () => { return new OccurrenceInfo(); }
        );

    LastOccurrence: PropertyDefinition = new ComplexPropertyDefinition<OccurrenceInfo>(
        "LastOccurrence",
        XmlElementNames.LastOccurrence,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.LastOccurrence,
        PropertyDefinitionFlags.None,
        () => { return new OccurrenceInfo(); }
        );

    ModifiedOccurrences: PropertyDefinition = new ComplexPropertyDefinition<OccurrenceInfoCollection>(
        "ModifiedOccurrences",
        XmlElementNames.ModifiedOccurrences,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ModifiedOccurrences,
        PropertyDefinitionFlags.None,
        () => { return new OccurrenceInfoCollection(); }
        );

    DeletedOccurrences: PropertyDefinition = new ComplexPropertyDefinition<DeletedOccurrenceInfoCollection>(
        "DeletedOccurrences",
        XmlElementNames.DeletedOccurrences,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DeletedOccurrences,
        PropertyDefinitionFlags.None,
        () => { return new DeletedOccurrenceInfoCollection(); }
        );

    MeetingTimeZone: PropertyDefinition = new MeetingTimeZonePropertyDefinition(
        "MeetingTimeZone",
        XmlElementNames.MeetingTimeZone,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate
        );

    ConferenceType: PropertyDefinition = new IntPropertyDefinition(
        "ConferenceType",
        XmlElementNames.ConferenceType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConferenceType,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    AllowNewTimeProposal: PropertyDefinition = new BoolPropertyDefinition(
        "AllowNewTimeProposal",
        XmlElementNames.AllowNewTimeProposal,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AllowNewTimeProposal,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    IsOnlineMeeting: PropertyDefinition = new BoolPropertyDefinition(
        "IsOnlineMeeting",
        XmlElementNames.IsOnlineMeeting,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsOnlineMeeting,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    MeetingWorkspaceUrl: PropertyDefinition = new StringPropertyDefinition(
        "MeetingWorkspaceUrl",
        XmlElementNames.MeetingWorkspaceUrl,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingWorkspaceUrl,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    NetShowUrl: PropertyDefinition = new StringPropertyDefinition(
        "NetShowUrl",
        XmlElementNames.NetShowUrl,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.NetShowUrl,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    ICalUid: PropertyDefinition = new StringPropertyDefinition(
        "ICalUid",
        XmlElementNames.Uid,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Uid,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    ICalRecurrenceId: PropertyDefinition = new DateTimePropertyDefinition(
        "ICalRecurrenceId",
        XmlElementNames.RecurrenceId,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.RecurrenceId,
        PropertyDefinitionFlags.CanFind,
        true
        );

    ICalDateTimeStamp: PropertyDefinition = new DateTimePropertyDefinition(
        "ICalDateTimeStamp",
        XmlElementNames.DateTimeStamp,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DateTimeStamp,
        PropertyDefinitionFlags.CanFind,
        true
        );

    EnhancedLocation: PropertyDefinition = new ComplexPropertyDefinition<EnhancedLocation>(
        "EnhancedLocation",
        XmlElementNames.EnhancedLocation,
        ExchangeVersion.Exchange2013,
        FieldUris.EnhancedLocation,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        () => { return new EnhancedLocation(); }
        );

    JoinOnlineMeetingUrl: PropertyDefinition = new StringPropertyDefinition(
        "JoinOnlineMeetingUrl",
        XmlElementNames.JoinOnlineMeetingUrl,
        ExchangeVersion.Exchange2013,
        FieldUris.JoinOnlineMeetingUrl,
        PropertyDefinitionFlags.CanFind
        );

    OnlineMeetingSettings: PropertyDefinition = new ComplexPropertyDefinition<OnlineMeetingSettings>(
        "OnlineMeetingSettings",
        XmlElementNames.OnlineMeetingSettings,
        ExchangeVersion.Exchange2013,
        FieldUris.OnlineMeetingSettings,
        PropertyDefinitionFlags.CanFind,
        () => { return new OnlineMeetingSettings(); }
        );

    static Instance: AppointmentSchema = new AppointmentSchema();
    /**
     *
     */
    constructor() {
        super();
        //if (AppointmentSchema.Instance) throw new Error("can not create another instance");
    }
    RegisterProperties(): void {
        this.init();
        super.RegisterProperties();
        super.RegisterProperty(this.ICalUid);
        super.RegisterProperty(this.ICalRecurrenceId);
        super.RegisterProperty(this.ICalDateTimeStamp);
        super.RegisterProperty(this.Start);
        super.RegisterProperty(this.End);
        super.RegisterProperty(this.OriginalStart);
        super.RegisterProperty(this.IsAllDayEvent);
        super.RegisterProperty(this.LegacyFreeBusyStatus);
        super.RegisterProperty(this.Location);
        super.RegisterProperty(this.When);
        super.RegisterProperty(this.IsMeeting);
        super.RegisterProperty(this.IsCancelled);
        super.RegisterProperty(this.IsRecurring);
        super.RegisterProperty(this.MeetingRequestWasSent);
        super.RegisterProperty(this.IsResponseRequested);
        super.RegisterProperty(this.AppointmentType);
        super.RegisterProperty(this.MyResponseType);
        super.RegisterProperty(this.Organizer);
        super.RegisterProperty(this.RequiredAttendees);
        super.RegisterProperty(this.OptionalAttendees);
        super.RegisterProperty(this.Resources);
        super.RegisterProperty(this.ConflictingMeetingCount);
        super.RegisterProperty(this.AdjacentMeetingCount);
        super.RegisterProperty(this.ConflictingMeetings);
        super.RegisterProperty(this.AdjacentMeetings);
        super.RegisterProperty(this.Duration);
        super.RegisterProperty(this.TimeZone);
        super.RegisterProperty(this.AppointmentReplyTime);
        super.RegisterProperty(this.AppointmentSequenceNumber);
        super.RegisterProperty(this.AppointmentState);
        super.RegisterProperty(this.Recurrence);
        super.RegisterProperty(this.FirstOccurrence);
        super.RegisterProperty(this.LastOccurrence);
        super.RegisterProperty(this.ModifiedOccurrences);
        super.RegisterProperty(this.DeletedOccurrences);
        super.RegisterInternalProperty(this.MeetingTimeZone);
        super.RegisterProperty(this.StartTimeZone);
        super.RegisterProperty(this.EndTimeZone);
        super.RegisterProperty(this.ConferenceType);
        super.RegisterProperty(this.AllowNewTimeProposal);
        super.RegisterProperty(this.IsOnlineMeeting);
        super.RegisterProperty(this.MeetingWorkspaceUrl);
        super.RegisterProperty(this.NetShowUrl);
        super.RegisterProperty(this.EnhancedLocation);
        super.RegisterProperty(this.JoinOnlineMeetingUrl);
        super.RegisterProperty(this.OnlineMeetingSettings);
    }
    init():void{
        this.StartTimeZone = new StartTimeZonePropertyDefinition(
        "StartTimeZone",
        XmlElementNames.StartTimeZone,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.StartTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.EndTimeZone = new TimeZonePropertyDefinition(
        "EndTimeZone",
        XmlElementNames.EndTimeZone,
        ExchangeVersion.Exchange2010,
        FieldUris.EndTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.Start = new ScopedDateTimePropertyDefinition(
        "Start",
        XmlElementNames.Start,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Start,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        (version: ExchangeVersion) => { return this.StartTimeZone; }
        );

    this.End = new ScopedDateTimePropertyDefinition(
        "End",
        XmlElementNames.End,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.End,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        (version: ExchangeVersion) => {
            if (version !== ExchangeVersion.Exchange2007_SP1) {
                return this.EndTimeZone;
            }
            return this.StartTimeZone;
        });
    this.OriginalStart = new DateTimePropertyDefinition(
        "OriginalStart",
        XmlElementNames.OriginalStart,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.OriginalStart,
        PropertyDefinitionFlags.None
        );

    this.IsAllDayEvent = new BoolPropertyDefinition(
        "IsAllDayEvent",
        XmlElementNames.IsAllDayEvent,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsAllDayEvent,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.LegacyFreeBusyStatus = new GenericPropertyDefinition<LegacyFreeBusyStatus>(
        "LegacyFreeBusyStatus",
        XmlElementNames.LegacyFreeBusyStatus,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.LegacyFreeBusyStatus,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.Location = new StringPropertyDefinition(
        "Location",
        XmlElementNames.Location,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Location,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    this.When = new StringPropertyDefinition(
        "When",
        XmlElementNames.When,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.When,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    this.IsMeeting = new BoolPropertyDefinition(
        "IsMeeting",
        XmlElementNames.IsMeeting,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsMeeting,
        PropertyDefinitionFlags.CanFind
        );

    this.IsCancelled = new BoolPropertyDefinition(
        "IsCancelled",
        XmlElementNames.IsCancelled,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsCancelled,
        PropertyDefinitionFlags.CanFind
        );

    this.IsRecurring = new BoolPropertyDefinition(
        "IsRecurring",
        XmlElementNames.IsRecurring,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsRecurring,
        PropertyDefinitionFlags.CanFind
        );

    this.MeetingRequestWasSent = new BoolPropertyDefinition(
        "MeetingRequestWasSent",
        XmlElementNames.MeetingRequestWasSent,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingRequestWasSent,
        PropertyDefinitionFlags.CanFind
        );

    this.IsResponseRequested = new BoolPropertyDefinition(
        "IsResponseRequested",
        XmlElementNames.IsResponseRequested,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsResponseRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.AppointmentType = new GenericPropertyDefinition<AppointmentType>(
        "CalendarItemType",
        XmlElementNames.CalendarItemType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.CalendarItemType,
        PropertyDefinitionFlags.CanFind
        );

    this.MyResponseType = new GenericPropertyDefinition<MeetingResponseType>(
        "MyResponseType",
        XmlElementNames.MyResponseType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MyResponseType,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.Organizer = new ContainedPropertyDefinition<EmailAddress>(
        "Organizer",
        XmlElementNames.Organizer,
        XmlElementNames.Mailbox,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Organizer,
        PropertyDefinitionFlags.CanFind,
        () => { return new EmailAddress(); }
        );

    this.RequiredAttendees = new ComplexPropertyDefinition<AttendeeCollection>(
        "RequiredAttendees",
        XmlElementNames.RequiredAttendees,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.RequiredAttendees,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new AttendeeCollection(); }
        );

    this.OptionalAttendees = new ComplexPropertyDefinition<AttendeeCollection>(
        "OptionalAttendees",
        XmlElementNames.OptionalAttendees,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.OptionalAttendees,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new AttendeeCollection(); }
        );

    this.Resources = new ComplexPropertyDefinition<AttendeeCollection>(
        "Resources",
        XmlElementNames.Resources,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Resources,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new AttendeeCollection(); }
        );

    this.ConflictingMeetingCount = new IntPropertyDefinition(
        "ConflictingMeetingCount",
        XmlElementNames.ConflictingMeetingCount,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConflictingMeetingCount,
        PropertyDefinitionFlags.None
        );

    this.AdjacentMeetingCount = new IntPropertyDefinition(
        "AdjacentMeetingCount",
        XmlElementNames.AdjacentMeetingCount,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AdjacentMeetingCount,
        PropertyDefinitionFlags.None
        );

    this.ConflictingMeetings = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
        "ConflictingMeetings",
        XmlElementNames.ConflictingMeetings,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConflictingMeetings,
        PropertyDefinitionFlags.None,
        () => { return new ItemCollection<Appointment>(); }
        );

    this.AdjacentMeetings = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
        "AdjacentMeetings",
        XmlElementNames.AdjacentMeetings,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AdjacentMeetings,
        PropertyDefinitionFlags.None,
        () => { return new ItemCollection<Appointment>(); }
        );

    this.Duration = new TimeSpanPropertyDefinition(
        "Duration",
        XmlElementNames.Duration,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Duration,
        PropertyDefinitionFlags.CanFind
        );

    this.TimeZone = new StringPropertyDefinition(
        "TimeZone",
        XmlElementNames.TimeZone,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.TimeZone,
        PropertyDefinitionFlags.CanFind
        );

    this.AppointmentReplyTime = new DateTimePropertyDefinition(
        "AppointmentReplyTime",
        XmlElementNames.AppointmentReplyTime,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AppointmentReplyTime,
        PropertyDefinitionFlags.CanFind
        );

    this.AppointmentSequenceNumber = new IntPropertyDefinition(
        "AppointmentSequenceNumber",
        XmlElementNames.AppointmentSequenceNumber,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AppointmentSequenceNumber,
        PropertyDefinitionFlags.None
        );

    this.AppointmentState = new IntPropertyDefinition(
        "AppointmentState",
        XmlElementNames.AppointmentState,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AppointmentState,
        PropertyDefinitionFlags.CanFind
        );

    this.Recurrence = new RecurrencePropertyDefinition(
        "Recurrence",
        XmlElementNames.Recurrence,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Recurrence,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete
        );

    this.FirstOccurrence = new ComplexPropertyDefinition<OccurrenceInfo>(
        "FirstOccurrence",
        XmlElementNames.FirstOccurrence,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.FirstOccurrence,
        PropertyDefinitionFlags.None,
        () => { return new OccurrenceInfo(); }
        );

    this.LastOccurrence = new ComplexPropertyDefinition<OccurrenceInfo>(
        "LastOccurrence",
        XmlElementNames.LastOccurrence,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.LastOccurrence,
        PropertyDefinitionFlags.None,
        () => { return new OccurrenceInfo(); }
        );

    this.ModifiedOccurrences = new ComplexPropertyDefinition<OccurrenceInfoCollection>(
        "ModifiedOccurrences",
        XmlElementNames.ModifiedOccurrences,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ModifiedOccurrences,
        PropertyDefinitionFlags.None,
        () => { return new OccurrenceInfoCollection(); }
        );

    this.DeletedOccurrences = new ComplexPropertyDefinition<DeletedOccurrenceInfoCollection>(
        "DeletedOccurrences",
        XmlElementNames.DeletedOccurrences,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DeletedOccurrences,
        PropertyDefinitionFlags.None,
        () => { return new DeletedOccurrenceInfoCollection(); }
        );

    this.MeetingTimeZone = new MeetingTimeZonePropertyDefinition(
        "MeetingTimeZone",
        XmlElementNames.MeetingTimeZone,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate
        );

    this.ConferenceType = new IntPropertyDefinition(
        "ConferenceType",
        XmlElementNames.ConferenceType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConferenceType,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.AllowNewTimeProposal = new BoolPropertyDefinition(
        "AllowNewTimeProposal",
        XmlElementNames.AllowNewTimeProposal,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AllowNewTimeProposal,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.IsOnlineMeeting = new BoolPropertyDefinition(
        "IsOnlineMeeting",
        XmlElementNames.IsOnlineMeeting,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsOnlineMeeting,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.MeetingWorkspaceUrl = new StringPropertyDefinition(
        "MeetingWorkspaceUrl",
        XmlElementNames.MeetingWorkspaceUrl,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingWorkspaceUrl,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    this.NetShowUrl = new StringPropertyDefinition(
        "NetShowUrl",
        XmlElementNames.NetShowUrl,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.NetShowUrl,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    this.ICalUid = new StringPropertyDefinition(
        "ICalUid",
        XmlElementNames.Uid,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Uid,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    this.ICalRecurrenceId = new DateTimePropertyDefinition(
        "ICalRecurrenceId",
        XmlElementNames.RecurrenceId,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.RecurrenceId,
        PropertyDefinitionFlags.CanFind,
        true
        );

    this.ICalDateTimeStamp = new DateTimePropertyDefinition(
        "ICalDateTimeStamp",
        XmlElementNames.DateTimeStamp,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DateTimeStamp,
        PropertyDefinitionFlags.CanFind,
        true
        );

    this.EnhancedLocation = new ComplexPropertyDefinition<EnhancedLocation>(
        "EnhancedLocation",
        XmlElementNames.EnhancedLocation,
        ExchangeVersion.Exchange2013,
        FieldUris.EnhancedLocation,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        () => { return new EnhancedLocation(); }
        );

    this.JoinOnlineMeetingUrl = new StringPropertyDefinition(
        "JoinOnlineMeetingUrl",
        XmlElementNames.JoinOnlineMeetingUrl,
        ExchangeVersion.Exchange2013,
        FieldUris.JoinOnlineMeetingUrl,
        PropertyDefinitionFlags.CanFind
        );

    this.OnlineMeetingSettings = new ComplexPropertyDefinition<OnlineMeetingSettings>(
        "OnlineMeetingSettings",
        XmlElementNames.OnlineMeetingSettings,
        ExchangeVersion.Exchange2013,
        FieldUris.OnlineMeetingSettings,
        PropertyDefinitionFlags.CanFind,
        () => { return new OnlineMeetingSettings(); }
        );
    }
}



export = AppointmentSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
