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
    static StartTimeZone: PropertyDefinition = new StartTimeZonePropertyDefinition(
        "StartTimeZone",
        XmlElementNames.StartTimeZone,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.StartTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static EndTimeZone: PropertyDefinition = new TimeZonePropertyDefinition(
        "EndTimeZone",
        XmlElementNames.EndTimeZone,
        ExchangeVersion.Exchange2010,
        FieldUris.EndTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static Start: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "Start",
        XmlElementNames.Start,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Start,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        (version: ExchangeVersion) => { return AppointmentSchema.StartTimeZone; }
        );

    static End: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "End",
        XmlElementNames.End,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.End,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        (version: ExchangeVersion) => {
            if (version !== ExchangeVersion.Exchange2007_SP1) {
                return AppointmentSchema.EndTimeZone;
            }
            return AppointmentSchema.StartTimeZone;
        });
    static OriginalStart: PropertyDefinition = new DateTimePropertyDefinition(
        "OriginalStart",
        XmlElementNames.OriginalStart,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.OriginalStart,
        PropertyDefinitionFlags.None
        );

    static IsAllDayEvent: PropertyDefinition = new BoolPropertyDefinition(
        "IsAllDayEvent",
        XmlElementNames.IsAllDayEvent,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsAllDayEvent,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static LegacyFreeBusyStatus: PropertyDefinition = new GenericPropertyDefinition<LegacyFreeBusyStatus>(
        "LegacyFreeBusyStatus",
        XmlElementNames.LegacyFreeBusyStatus,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.LegacyFreeBusyStatus,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static Location: PropertyDefinition = new StringPropertyDefinition(
        "Location",
        XmlElementNames.Location,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Location,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static When: PropertyDefinition = new StringPropertyDefinition(
        "When",
        XmlElementNames.When,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.When,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static IsMeeting: PropertyDefinition = new BoolPropertyDefinition(
        "IsMeeting",
        XmlElementNames.IsMeeting,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsMeeting,
        PropertyDefinitionFlags.CanFind
        );

    static IsCancelled: PropertyDefinition = new BoolPropertyDefinition(
        "IsCancelled",
        XmlElementNames.IsCancelled,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsCancelled,
        PropertyDefinitionFlags.CanFind
        );

    static IsRecurring: PropertyDefinition = new BoolPropertyDefinition(
        "IsRecurring",
        XmlElementNames.IsRecurring,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsRecurring,
        PropertyDefinitionFlags.CanFind
        );

    static MeetingRequestWasSent: PropertyDefinition = new BoolPropertyDefinition(
        "MeetingRequestWasSent",
        XmlElementNames.MeetingRequestWasSent,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingRequestWasSent,
        PropertyDefinitionFlags.CanFind
        );

    static IsResponseRequested: PropertyDefinition = new BoolPropertyDefinition(
        "IsResponseRequested",
        XmlElementNames.IsResponseRequested,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsResponseRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static AppointmentType: PropertyDefinition = new GenericPropertyDefinition<AppointmentType>(
        "CalendarItemType",
        XmlElementNames.CalendarItemType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.CalendarItemType,
        PropertyDefinitionFlags.CanFind
        );

    static MyResponseType: PropertyDefinition = new GenericPropertyDefinition<MeetingResponseType>(
        "MyResponseType",
        XmlElementNames.MyResponseType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MyResponseType,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static Organizer: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "Organizer",
        XmlElementNames.Organizer,
        XmlElementNames.Mailbox,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Organizer,
        PropertyDefinitionFlags.CanFind,
        () => { return new EmailAddress(); }
        );

    static RequiredAttendees: PropertyDefinition = new ComplexPropertyDefinition<AttendeeCollection>(
        "RequiredAttendees",
        XmlElementNames.RequiredAttendees,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.RequiredAttendees,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new AttendeeCollection(); }
        );

    static OptionalAttendees: PropertyDefinition = new ComplexPropertyDefinition<AttendeeCollection>(
        "OptionalAttendees",
        XmlElementNames.OptionalAttendees,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.OptionalAttendees,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new AttendeeCollection(); }
        );

    static Resources: PropertyDefinition = new ComplexPropertyDefinition<AttendeeCollection>(
        "Resources",
        XmlElementNames.Resources,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Resources,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new AttendeeCollection(); }
        );

    static ConflictingMeetingCount: PropertyDefinition = new IntPropertyDefinition(
        "ConflictingMeetingCount",
        XmlElementNames.ConflictingMeetingCount,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConflictingMeetingCount,
        PropertyDefinitionFlags.None
        );

    static AdjacentMeetingCount: PropertyDefinition = new IntPropertyDefinition(
        "AdjacentMeetingCount",
        XmlElementNames.AdjacentMeetingCount,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AdjacentMeetingCount,
        PropertyDefinitionFlags.None
        );

    static ConflictingMeetings: PropertyDefinition = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
        "ConflictingMeetings",
        XmlElementNames.ConflictingMeetings,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConflictingMeetings,
        PropertyDefinitionFlags.None,
        () => { return new ItemCollection<Appointment>(); }
        );

    static AdjacentMeetings: PropertyDefinition = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
        "AdjacentMeetings",
        XmlElementNames.AdjacentMeetings,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AdjacentMeetings,
        PropertyDefinitionFlags.None,
        () => { return new ItemCollection<Appointment>(); }
        );

    static Duration: PropertyDefinition = new TimeSpanPropertyDefinition(
        "Duration",
        XmlElementNames.Duration,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Duration,
        PropertyDefinitionFlags.CanFind
        );

    static TimeZone: PropertyDefinition = new StringPropertyDefinition(
        "TimeZone",
        XmlElementNames.TimeZone,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.TimeZone,
        PropertyDefinitionFlags.CanFind
        );

    static AppointmentReplyTime: PropertyDefinition = new DateTimePropertyDefinition(
        "AppointmentReplyTime",
        XmlElementNames.AppointmentReplyTime,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AppointmentReplyTime,
        PropertyDefinitionFlags.CanFind
        );

    static AppointmentSequenceNumber: PropertyDefinition = new IntPropertyDefinition(
        "AppointmentSequenceNumber",
        XmlElementNames.AppointmentSequenceNumber,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AppointmentSequenceNumber,
        PropertyDefinitionFlags.None
        );

    static AppointmentState: PropertyDefinition = new IntPropertyDefinition(
        "AppointmentState",
        XmlElementNames.AppointmentState,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AppointmentState,
        PropertyDefinitionFlags.CanFind
        );

    static Recurrence: PropertyDefinition = new RecurrencePropertyDefinition(
        "Recurrence",
        XmlElementNames.Recurrence,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Recurrence,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete
        );

    static FirstOccurrence: PropertyDefinition = new ComplexPropertyDefinition<OccurrenceInfo>(
        "FirstOccurrence",
        XmlElementNames.FirstOccurrence,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.FirstOccurrence,
        PropertyDefinitionFlags.None,
        () => { return new OccurrenceInfo(); }
        );

    static LastOccurrence: PropertyDefinition = new ComplexPropertyDefinition<OccurrenceInfo>(
        "LastOccurrence",
        XmlElementNames.LastOccurrence,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.LastOccurrence,
        PropertyDefinitionFlags.None,
        () => { return new OccurrenceInfo(); }
        );

    static ModifiedOccurrences: PropertyDefinition = new ComplexPropertyDefinition<OccurrenceInfoCollection>(
        "ModifiedOccurrences",
        XmlElementNames.ModifiedOccurrences,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ModifiedOccurrences,
        PropertyDefinitionFlags.None,
        () => { return new OccurrenceInfoCollection(); }
        );

    static DeletedOccurrences: PropertyDefinition = new ComplexPropertyDefinition<DeletedOccurrenceInfoCollection>(
        "DeletedOccurrences",
        XmlElementNames.DeletedOccurrences,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DeletedOccurrences,
        PropertyDefinitionFlags.None,
        () => { return new DeletedOccurrenceInfoCollection(); }
        );

    static MeetingTimeZone: PropertyDefinition = new MeetingTimeZonePropertyDefinition(
        "MeetingTimeZone",
        XmlElementNames.MeetingTimeZone,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate
        );

    static ConferenceType: PropertyDefinition = new IntPropertyDefinition(
        "ConferenceType",
        XmlElementNames.ConferenceType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConferenceType,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static AllowNewTimeProposal: PropertyDefinition = new BoolPropertyDefinition(
        "AllowNewTimeProposal",
        XmlElementNames.AllowNewTimeProposal,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AllowNewTimeProposal,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static IsOnlineMeeting: PropertyDefinition = new BoolPropertyDefinition(
        "IsOnlineMeeting",
        XmlElementNames.IsOnlineMeeting,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsOnlineMeeting,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static MeetingWorkspaceUrl: PropertyDefinition = new StringPropertyDefinition(
        "MeetingWorkspaceUrl",
        XmlElementNames.MeetingWorkspaceUrl,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingWorkspaceUrl,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static NetShowUrl: PropertyDefinition = new StringPropertyDefinition(
        "NetShowUrl",
        XmlElementNames.NetShowUrl,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.NetShowUrl,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static ICalUid: PropertyDefinition = new StringPropertyDefinition(
        "ICalUid",
        XmlElementNames.Uid,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Uid,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static ICalRecurrenceId: PropertyDefinition = new DateTimePropertyDefinition(
        "ICalRecurrenceId",
        XmlElementNames.RecurrenceId,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.RecurrenceId,
        PropertyDefinitionFlags.CanFind,
        true
        );

    static ICalDateTimeStamp: PropertyDefinition = new DateTimePropertyDefinition(
        "ICalDateTimeStamp",
        XmlElementNames.DateTimeStamp,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DateTimeStamp,
        PropertyDefinitionFlags.CanFind,
        true
        );

    static EnhancedLocation: PropertyDefinition = new ComplexPropertyDefinition<EnhancedLocation>(
        "EnhancedLocation",
        XmlElementNames.EnhancedLocation,
        ExchangeVersion.Exchange2013,
        FieldUris.EnhancedLocation,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        () => { return new EnhancedLocation(); }
        );

    static JoinOnlineMeetingUrl: PropertyDefinition = new StringPropertyDefinition(
        "JoinOnlineMeetingUrl",
        XmlElementNames.JoinOnlineMeetingUrl,
        ExchangeVersion.Exchange2013,
        FieldUris.JoinOnlineMeetingUrl,
        PropertyDefinitionFlags.CanFind
        );

    static OnlineMeetingSettings: PropertyDefinition = new ComplexPropertyDefinition<OnlineMeetingSettings>(
        "OnlineMeetingSettings",
        XmlElementNames.OnlineMeetingSettings,
        ExchangeVersion.Exchange2013,
        FieldUris.OnlineMeetingSettings,
        PropertyDefinitionFlags.CanFind,
        () => { return new OnlineMeetingSettings(); }
        );

    static Instance: AppointmentSchema = new AppointmentSchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(AppointmentSchema.ICalUid);
        super.RegisterProperty(AppointmentSchema.ICalRecurrenceId);
        super.RegisterProperty(AppointmentSchema.ICalDateTimeStamp);
        super.RegisterProperty(AppointmentSchema.Start);
        super.RegisterProperty(AppointmentSchema.End);
        super.RegisterProperty(AppointmentSchema.OriginalStart);
        super.RegisterProperty(AppointmentSchema.IsAllDayEvent);
        super.RegisterProperty(AppointmentSchema.LegacyFreeBusyStatus);
        super.RegisterProperty(AppointmentSchema.Location);
        super.RegisterProperty(AppointmentSchema.When);
        super.RegisterProperty(AppointmentSchema.IsMeeting);
        super.RegisterProperty(AppointmentSchema.IsCancelled);
        super.RegisterProperty(AppointmentSchema.IsRecurring);
        super.RegisterProperty(AppointmentSchema.MeetingRequestWasSent);
        super.RegisterProperty(AppointmentSchema.IsResponseRequested);
        super.RegisterProperty(AppointmentSchema.AppointmentType);
        super.RegisterProperty(AppointmentSchema.MyResponseType);
        super.RegisterProperty(AppointmentSchema.Organizer);
        super.RegisterProperty(AppointmentSchema.RequiredAttendees);
        super.RegisterProperty(AppointmentSchema.OptionalAttendees);
        super.RegisterProperty(AppointmentSchema.Resources);
        super.RegisterProperty(AppointmentSchema.ConflictingMeetingCount);
        super.RegisterProperty(AppointmentSchema.AdjacentMeetingCount);
        super.RegisterProperty(AppointmentSchema.ConflictingMeetings);
        super.RegisterProperty(AppointmentSchema.AdjacentMeetings);
        super.RegisterProperty(AppointmentSchema.Duration);
        super.RegisterProperty(AppointmentSchema.TimeZone);
        super.RegisterProperty(AppointmentSchema.AppointmentReplyTime);
        super.RegisterProperty(AppointmentSchema.AppointmentSequenceNumber);
        super.RegisterProperty(AppointmentSchema.AppointmentState);
        super.RegisterProperty(AppointmentSchema.Recurrence);
        super.RegisterProperty(AppointmentSchema.FirstOccurrence);
        super.RegisterProperty(AppointmentSchema.LastOccurrence);
        super.RegisterProperty(AppointmentSchema.ModifiedOccurrences);
        super.RegisterProperty(AppointmentSchema.DeletedOccurrences);
        super.RegisterInternalProperty(AppointmentSchema.MeetingTimeZone);
        super.RegisterProperty(AppointmentSchema.StartTimeZone);
        super.RegisterProperty(AppointmentSchema.EndTimeZone);
        super.RegisterProperty(AppointmentSchema.ConferenceType);
        super.RegisterProperty(AppointmentSchema.AllowNewTimeProposal);
        super.RegisterProperty(AppointmentSchema.IsOnlineMeeting);
        super.RegisterProperty(AppointmentSchema.MeetingWorkspaceUrl);
        super.RegisterProperty(AppointmentSchema.NetShowUrl);
        super.RegisterProperty(AppointmentSchema.EnhancedLocation);
        super.RegisterProperty(AppointmentSchema.JoinOnlineMeetingUrl);
        super.RegisterProperty(AppointmentSchema.OnlineMeetingSettings);
    }
}



export = AppointmentSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
