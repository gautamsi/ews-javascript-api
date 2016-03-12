import {XmlElementNames} from "../../XmlElementNames";
import {LegacyFreeBusyStatus} from "../../../Enumerations/LegacyFreeBusyStatus";
import {AppointmentType} from "../../../Enumerations/AppointmentType";
import {MeetingResponseType} from "../../../Enumerations/MeetingResponseType";
import {Appointment} from "../Items/Appointment";
import {StartTimeZonePropertyDefinition} from "../../../PropertyDefinitions/StartTimeZonePropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {TimeZonePropertyDefinition} from "../../../PropertyDefinitions/TimeZonePropertyDefinition";
import {ScopedDateTimePropertyDefinition} from "../../../PropertyDefinitions/ScopedDateTimePropertyDefinition";
import {DateTimePropertyDefinition} from "../../../PropertyDefinitions/DateTimePropertyDefinition";
import {BoolPropertyDefinition} from "../../../PropertyDefinitions/BoolPropertyDefinition";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {StringPropertyDefinition} from "../../../PropertyDefinitions/StringPropertyDefinition";
import {ContainedPropertyDefinition} from "../../../PropertyDefinitions/ContainedPropertyDefinition";
import {EmailAddress} from "../../../ComplexProperties/EmailAddress";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {AttendeeCollection} from "../../../ComplexProperties/AttendeeCollection";
import {IntPropertyDefinition} from "../../../PropertyDefinitions/IntPropertyDefinition";
import {ItemCollection} from "../../../ComplexProperties/ItemCollection";
import {TimeSpanPropertyDefinition} from "../../../PropertyDefinitions/TimeSpanPropertyDefinition";
import {RecurrencePropertyDefinition} from "../../../PropertyDefinitions/RecurrencePropertyDefinition";
import {OccurrenceInfo} from "../../../ComplexProperties/OccurrenceInfo";
import {OccurrenceInfoCollection} from "../../../ComplexProperties/OccurrenceInfoCollection";
import {DeletedOccurrenceInfoCollection} from "../../../ComplexProperties/DeletedOccurrenceInfoCollection";
import {MeetingTimeZonePropertyDefinition} from "../../../PropertyDefinitions/MeetingTimeZonePropertyDefinition";
import {EnhancedLocation} from "../../../ComplexProperties/EnhancedLocation";
import {OnlineMeetingSettings} from "../../../ComplexProperties/OnlineMeetingSettings";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {ItemSchema} from "./ItemSchema";

/**
 * Field URIs for Appointment.
 */
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

/**
 * Represents the schema for appointment and meeting requests.
 */
export class AppointmentSchema extends ItemSchema {

    /**
     * Defines the **StartTimeZone** property.
     */
    public static StartTimeZone: PropertyDefinition = new StartTimeZonePropertyDefinition(
        "StartTimeZone",
        XmlElementNames.StartTimeZone,
        FieldUris.StartTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **EndTimeZone** property.
     */
    public static EndTimeZone: PropertyDefinition = new TimeZonePropertyDefinition(
        "EndTimeZone",
        XmlElementNames.EndTimeZone,
        FieldUris.EndTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010
    );

    /**
     * Defines the **Start** property.
     */
    public static Start: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "Start",
        XmlElementNames.Start,
        FieldUris.Start,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        (version: ExchangeVersion) => { return AppointmentSchema.StartTimeZone; }
    );

    /**
     * Defines the **End** property.
     */
    public static End: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "End",
        XmlElementNames.End,
        FieldUris.End,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        (version: ExchangeVersion) => {
            if (version !== ExchangeVersion.Exchange2007_SP1) {
                return AppointmentSchema.EndTimeZone;
            }
            return AppointmentSchema.StartTimeZone;
        });
    /**
     * Defines the **OriginalStart** property.
     */
    public static OriginalStart: PropertyDefinition = new DateTimePropertyDefinition(
        "OriginalStart",
        XmlElementNames.OriginalStart,
        FieldUris.OriginalStart,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsAllDayEvent** property.
     */
    public static IsAllDayEvent: PropertyDefinition = new BoolPropertyDefinition(
        "IsAllDayEvent",
        XmlElementNames.IsAllDayEvent,
        FieldUris.IsAllDayEvent,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    public static LegacyFreeBusyStatus: PropertyDefinition = new GenericPropertyDefinition<LegacyFreeBusyStatus>(
        "LegacyFreeBusyStatus",
        XmlElementNames.LegacyFreeBusyStatus,
        FieldUris.LegacyFreeBusyStatus,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Location** property.
     */
    public static Location: PropertyDefinition = new StringPropertyDefinition(
        "Location",
        XmlElementNames.Location,
        FieldUris.Location,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **When** property.
     */
    public static When: PropertyDefinition = new StringPropertyDefinition(
        "When",
        XmlElementNames.When,
        FieldUris.When,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsMeeting** property.
     */
    public static IsMeeting: PropertyDefinition = new BoolPropertyDefinition(
        "IsMeeting",
        XmlElementNames.IsMeeting,
        FieldUris.IsMeeting,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsCancelled** property.
     */
    public static IsCancelled: PropertyDefinition = new BoolPropertyDefinition(
        "IsCancelled",
        XmlElementNames.IsCancelled,
        FieldUris.IsCancelled,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsRecurring** property.
     */
    public static IsRecurring: PropertyDefinition = new BoolPropertyDefinition(
        "IsRecurring",
        XmlElementNames.IsRecurring,
        FieldUris.IsRecurring,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    public static MeetingRequestWasSent: PropertyDefinition = new BoolPropertyDefinition(
        "MeetingRequestWasSent",
        XmlElementNames.MeetingRequestWasSent,
        FieldUris.MeetingRequestWasSent,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsResponseRequested** property.
     */
    public static IsResponseRequested: PropertyDefinition = new BoolPropertyDefinition(
        "IsResponseRequested",
        XmlElementNames.IsResponseRequested,
        FieldUris.IsResponseRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **AppointmentType** property.
     */
    public static AppointmentType: PropertyDefinition = new GenericPropertyDefinition<AppointmentType>(
        "CalendarItemType",
        XmlElementNames.CalendarItemType,
        FieldUris.CalendarItemType,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **MyResponseType** property.
     */
    public static MyResponseType: PropertyDefinition = new GenericPropertyDefinition<MeetingResponseType>(
        "MyResponseType",
        XmlElementNames.MyResponseType,
        FieldUris.MyResponseType,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Organizer** property.
     */
    public static Organizer: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "Organizer",
        XmlElementNames.Organizer,
        FieldUris.Organizer,
        XmlElementNames.Mailbox,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddress(); }
    );

    /**
     * Defines the **RequiredAttendees** property.
     */
    public static RequiredAttendees: PropertyDefinition = new ComplexPropertyDefinition<AttendeeCollection>(
        "RequiredAttendees",
        XmlElementNames.RequiredAttendees,
        FieldUris.RequiredAttendees,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new AttendeeCollection(); }
    );

    /**
     * Defines the **OptionalAttendees** property.
     */
    public static OptionalAttendees: PropertyDefinition = new ComplexPropertyDefinition<AttendeeCollection>(
        "OptionalAttendees",
        XmlElementNames.OptionalAttendees,
        FieldUris.OptionalAttendees,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new AttendeeCollection(); }
    );

    /**
     * Defines the **Resources** property.
     */
    public static Resources: PropertyDefinition = new ComplexPropertyDefinition<AttendeeCollection>(
        "Resources",
        XmlElementNames.Resources,
        FieldUris.Resources,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new AttendeeCollection(); }
    );

    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    public static ConflictingMeetingCount: PropertyDefinition = new IntPropertyDefinition(
        "ConflictingMeetingCount",
        XmlElementNames.ConflictingMeetingCount,
        FieldUris.ConflictingMeetingCount,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    public static AdjacentMeetingCount: PropertyDefinition = new IntPropertyDefinition(
        "AdjacentMeetingCount",
        XmlElementNames.AdjacentMeetingCount,
        FieldUris.AdjacentMeetingCount,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ConflictingMeetings** property.
     */
    public static ConflictingMeetings: PropertyDefinition = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
        "ConflictingMeetings",
        XmlElementNames.ConflictingMeetings,
        FieldUris.ConflictingMeetings,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new ItemCollection<Appointment>(); }
    );

    /**
     * Defines the **AdjacentMeetings** property.
     */
    public static AdjacentMeetings: PropertyDefinition = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
        "AdjacentMeetings",
        XmlElementNames.AdjacentMeetings,
        FieldUris.AdjacentMeetings,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new ItemCollection<Appointment>(); }
    );

    /**
     * Defines the **Duration** property.
     */
    public static Duration: PropertyDefinition = new TimeSpanPropertyDefinition(
        "Duration",
        XmlElementNames.Duration,
        FieldUris.Duration,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **TimeZone** property.
     */
    public static TimeZone: PropertyDefinition = new StringPropertyDefinition(
        "TimeZone",
        XmlElementNames.TimeZone,
        FieldUris.TimeZone,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **AppointmentReplyTime** property.
     */
    public static AppointmentReplyTime: PropertyDefinition = new DateTimePropertyDefinition(
        "AppointmentReplyTime",
        XmlElementNames.AppointmentReplyTime,
        FieldUris.AppointmentReplyTime,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    public static AppointmentSequenceNumber: PropertyDefinition = new IntPropertyDefinition(
        "AppointmentSequenceNumber",
        XmlElementNames.AppointmentSequenceNumber,
        FieldUris.AppointmentSequenceNumber,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **AppointmentState** property.
     */
    public static AppointmentState: PropertyDefinition = new IntPropertyDefinition(
        "AppointmentState",
        XmlElementNames.AppointmentState,
        FieldUris.AppointmentState,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Recurrence** property.
     */
    public static Recurrence: PropertyDefinition = new RecurrencePropertyDefinition(
        "Recurrence",
        XmlElementNames.Recurrence,
        FieldUris.Recurrence,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **FirstOccurrence** property.
     */
    public static FirstOccurrence: PropertyDefinition = new ComplexPropertyDefinition<OccurrenceInfo>(
        "FirstOccurrence",
        XmlElementNames.FirstOccurrence,
        FieldUris.FirstOccurrence,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new OccurrenceInfo(); }
    );

    /**
     * Defines the **LastOccurrence** property.
     */
    public static LastOccurrence: PropertyDefinition = new ComplexPropertyDefinition<OccurrenceInfo>(
        "LastOccurrence",
        XmlElementNames.LastOccurrence,
        FieldUris.LastOccurrence,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new OccurrenceInfo(); }
    );

    /**
     * Defines the **ModifiedOccurrences** property.
     */
    public static ModifiedOccurrences: PropertyDefinition = new ComplexPropertyDefinition<OccurrenceInfoCollection>(
        "ModifiedOccurrences",
        XmlElementNames.ModifiedOccurrences,
        FieldUris.ModifiedOccurrences,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new OccurrenceInfoCollection(); }
    );

    /**
     * Defines the **DeletedOccurrences** property.
     */
    public static DeletedOccurrences: PropertyDefinition = new ComplexPropertyDefinition<DeletedOccurrenceInfoCollection>(
        "DeletedOccurrences",
        XmlElementNames.DeletedOccurrences,
        FieldUris.DeletedOccurrences,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new DeletedOccurrenceInfoCollection(); }
    );

    /**
     * Defines the **MeetingTimeZone** property.
     */
    public static MeetingTimeZone: PropertyDefinition = new MeetingTimeZonePropertyDefinition(
        "MeetingTimeZone",
        XmlElementNames.MeetingTimeZone,
        FieldUris.MeetingTimeZone,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ConferenceType** property.
     */
    public static ConferenceType: PropertyDefinition = new IntPropertyDefinition(
        "ConferenceType",
        XmlElementNames.ConferenceType,
        FieldUris.ConferenceType,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    public static AllowNewTimeProposal: PropertyDefinition = new BoolPropertyDefinition(
        "AllowNewTimeProposal",
        XmlElementNames.AllowNewTimeProposal,
        FieldUris.AllowNewTimeProposal,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsOnlineMeeting** property.
     */
    public static IsOnlineMeeting: PropertyDefinition = new BoolPropertyDefinition(
        "IsOnlineMeeting",
        XmlElementNames.IsOnlineMeeting,
        FieldUris.IsOnlineMeeting,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    public static MeetingWorkspaceUrl: PropertyDefinition = new StringPropertyDefinition(
        "MeetingWorkspaceUrl",
        XmlElementNames.MeetingWorkspaceUrl,
        FieldUris.MeetingWorkspaceUrl,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **NetShowUrl** property.
     */
    public static NetShowUrl: PropertyDefinition = new StringPropertyDefinition(
        "NetShowUrl",
        XmlElementNames.NetShowUrl,
        FieldUris.NetShowUrl,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ICalUid** property.
     */
    public static ICalUid: PropertyDefinition = new StringPropertyDefinition(
        "ICalUid",
        XmlElementNames.Uid,
        FieldUris.Uid,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ICalRecurrenceId** property.
     */
    public static ICalRecurrenceId: PropertyDefinition = new DateTimePropertyDefinition(
        "ICalRecurrenceId",
        XmlElementNames.RecurrenceId,
        FieldUris.RecurrenceId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        true
    );

    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    public static ICalDateTimeStamp: PropertyDefinition = new DateTimePropertyDefinition(
        "ICalDateTimeStamp",
        XmlElementNames.DateTimeStamp,
        FieldUris.DateTimeStamp,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        true
    );

    /**
     * Defines the **EnhancedLocation** property.
     */
    public static EnhancedLocation: PropertyDefinition = new ComplexPropertyDefinition<EnhancedLocation>(
        "EnhancedLocation",
        XmlElementNames.EnhancedLocation,
        FieldUris.EnhancedLocation,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        () => { return new EnhancedLocation(); }
    );

    /**
     * Defines the **JoinOnlineMeetingUrl** property.
     */
    public static JoinOnlineMeetingUrl: PropertyDefinition = new StringPropertyDefinition(
        "JoinOnlineMeetingUrl",
        XmlElementNames.JoinOnlineMeetingUrl,
        FieldUris.JoinOnlineMeetingUrl,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013
    );

    /**
     * Defines the **OnlineMeetingSettings** property.
     */
    public static OnlineMeetingSettings: PropertyDefinition = new ComplexPropertyDefinition<OnlineMeetingSettings>(
        "OnlineMeetingSettings",
        XmlElementNames.OnlineMeetingSettings,
        FieldUris.OnlineMeetingSettings,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        () => { return new OnlineMeetingSettings(); }
    );


    /**
     * @internal Instance of **AppointmentSchema** 
     */
    static Instance: AppointmentSchema = new AppointmentSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
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
    }
}

/**
 * Represents the schema for appointment and meeting requests.
 */
export interface AppointmentSchema {

    /**
     * Defines the **StartTimeZone** property.
     */
    StartTimeZone: PropertyDefinition;
    /**
     * Defines the **EndTimeZone** property.
     */
    EndTimeZone: PropertyDefinition;
    /**
     * Defines the **Start** property.
     */
    Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    End: PropertyDefinition;
    /**
     * Defines the **OriginalStart** property.
     */
    OriginalStart: PropertyDefinition;
    /**
     * Defines the **IsAllDayEvent** property.
     */
    IsAllDayEvent: PropertyDefinition;
    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    LegacyFreeBusyStatus: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    Location: PropertyDefinition;
    /**
     * Defines the **When** property.
     */
    When: PropertyDefinition;
    /**
     * Defines the **IsMeeting** property.
     */
    IsMeeting: PropertyDefinition;
    /**
     * Defines the **IsCancelled** property.
     */
    IsCancelled: PropertyDefinition;
    /**
     * Defines the **IsRecurring** property.
     */
    IsRecurring: PropertyDefinition;
    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    MeetingRequestWasSent: PropertyDefinition;
    /**
     * Defines the **IsResponseRequested** property.
     */
    IsResponseRequested: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    AppointmentType: PropertyDefinition;
    /**
     * Defines the **MyResponseType** property.
     */
    MyResponseType: PropertyDefinition;
    /**
     * Defines the **Organizer** property.
     */
    Organizer: PropertyDefinition;
    /**
     * Defines the **RequiredAttendees** property.
     */
    RequiredAttendees: PropertyDefinition;
    /**
     * Defines the **OptionalAttendees** property.
     */
    OptionalAttendees: PropertyDefinition;
    /**
     * Defines the **Resources** property.
     */
    Resources: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    ConflictingMeetingCount: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    AdjacentMeetingCount: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetings** property.
     */
    ConflictingMeetings: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetings** property.
     */
    AdjacentMeetings: PropertyDefinition;
    /**
     * Defines the **Duration** property.
     */
    Duration: PropertyDefinition;
    /**
     * Defines the **TimeZone** property.
     */
    TimeZone: PropertyDefinition;
    /**
     * Defines the **AppointmentReplyTime** property.
     */
    AppointmentReplyTime: PropertyDefinition;
    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    AppointmentSequenceNumber: PropertyDefinition;
    /**
     * Defines the **AppointmentState** property.
     */
    AppointmentState: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    Recurrence: PropertyDefinition;
    /**
     * Defines the **FirstOccurrence** property.
     */
    FirstOccurrence: PropertyDefinition;
    /**
     * Defines the **LastOccurrence** property.
     */
    LastOccurrence: PropertyDefinition;
    /**
     * Defines the **ModifiedOccurrences** property.
     */
    ModifiedOccurrences: PropertyDefinition;
    /**
     * Defines the **DeletedOccurrences** property.
     */
    DeletedOccurrences: PropertyDefinition;
    /**
     * Defines the **MeetingTimeZone** property.
     */
    MeetingTimeZone: PropertyDefinition;
    /**
     * Defines the **ConferenceType** property.
     */
    ConferenceType: PropertyDefinition;
    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    AllowNewTimeProposal: PropertyDefinition;
    /**
     * Defines the **IsOnlineMeeting** property.
     */
    IsOnlineMeeting: PropertyDefinition;
    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    MeetingWorkspaceUrl: PropertyDefinition;
    /**
     * Defines the **NetShowUrl** property.
     */
    NetShowUrl: PropertyDefinition;
    /**
     * Defines the **ICalUid** property.
     */
    ICalUid: PropertyDefinition;
    /**
     * Defines the **ICalRecurrenceId** property.
     */
    ICalRecurrenceId: PropertyDefinition;
    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    ICalDateTimeStamp: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    EnhancedLocation: PropertyDefinition;
    /**
     * Defines the **JoinOnlineMeetingUrl** property.
     */
    JoinOnlineMeetingUrl: PropertyDefinition;
    /**
     * Defines the **OnlineMeetingSettings** property.
     */
    OnlineMeetingSettings: PropertyDefinition;
    /**
     * @internal Instance of **AppointmentSchema**
     */
    Instance: AppointmentSchema;

}

/**
 * Represents the schema for appointment and meeting requests.
 */
export interface AppointmentSchemaStatic extends AppointmentSchema{    
}