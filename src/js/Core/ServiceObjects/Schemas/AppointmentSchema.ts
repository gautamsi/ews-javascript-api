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
    public StartTimeZone: PropertyDefinition;

    /**
     * Defines the **EndTimeZone** property.
     */
    public EndTimeZone: PropertyDefinition;

    /**
     * Defines the **Start** property.
     */
    public Start: PropertyDefinition;

    /**
     * Defines the **End** property.
     */
    public End: PropertyDefinition;

    /**
     * Defines the **OriginalStart** property.
     */
    public OriginalStart: PropertyDefinition;

    /**
     * Defines the **IsAllDayEvent** property.
     */
    public IsAllDayEvent: PropertyDefinition;

    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    public LegacyFreeBusyStatus: PropertyDefinition;

    /**
     * Defines the **Location** property.
     */
    public Location: PropertyDefinition;

    /**
     * Defines the **When** property.
     */
    public When: PropertyDefinition;

    /**
     * Defines the **IsMeeting** property.
     */
    public IsMeeting: PropertyDefinition;

    /**
     * Defines the **IsCancelled** property.
     */
    public IsCancelled: PropertyDefinition;

    /**
     * Defines the **IsRecurring** property.
     */
    public IsRecurring: PropertyDefinition;

    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    public MeetingRequestWasSent: PropertyDefinition;

    /**
     * Defines the **IsResponseRequested** property.
     */
    public IsResponseRequested: PropertyDefinition;

    /**
     * Defines the **AppointmentType** property.
     */
    public AppointmentType: PropertyDefinition;

    /**
     * Defines the **MyResponseType** property.
     */
    public MyResponseType: PropertyDefinition;

    /**
     * Defines the **Organizer** property.
     */
    public Organizer: PropertyDefinition;

    /**
     * Defines the **RequiredAttendees** property.
     */
    public RequiredAttendees: PropertyDefinition;

    /**
     * Defines the **OptionalAttendees** property.
     */
    public OptionalAttendees: PropertyDefinition;

    /**
     * Defines the **Resources** property.
     */
    public Resources: PropertyDefinition;

    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    public ConflictingMeetingCount: PropertyDefinition;

    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    public AdjacentMeetingCount: PropertyDefinition;

    /**
     * Defines the **ConflictingMeetings** property.
     */
    public ConflictingMeetings: PropertyDefinition;

    /**
     * Defines the **AdjacentMeetings** property.
     */
    public AdjacentMeetings: PropertyDefinition;

    /**
     * Defines the **Duration** property.
     */
    public Duration: PropertyDefinition;

    /**
     * Defines the **TimeZone** property.
     */
    public TimeZone: PropertyDefinition;

    /**
     * Defines the **AppointmentReplyTime** property.
     */
    public AppointmentReplyTime: PropertyDefinition;

    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    public AppointmentSequenceNumber: PropertyDefinition;

    /**
     * Defines the **AppointmentState** property.
     */
    public AppointmentState: PropertyDefinition;

    /**
     * Defines the **Recurrence** property.
     */
    public Recurrence: PropertyDefinition;

    /**
     * Defines the **FirstOccurrence** property.
     */
    public FirstOccurrence: PropertyDefinition;

    /**
     * Defines the **LastOccurrence** property.
     */
    public LastOccurrence: PropertyDefinition;

    /**
     * Defines the **ModifiedOccurrences** property.
     */
    public ModifiedOccurrences: PropertyDefinition;

    /**
     * Defines the **DeletedOccurrences** property.
     */
    public DeletedOccurrences: PropertyDefinition;

    /**
     * Defines the **MeetingTimeZone** property.
     */
    public MeetingTimeZone: PropertyDefinition;

    /**
     * Defines the **ConferenceType** property.
     */
    public ConferenceType: PropertyDefinition;

    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    public AllowNewTimeProposal: PropertyDefinition;

    /**
     * Defines the **IsOnlineMeeting** property.
     */
    public IsOnlineMeeting: PropertyDefinition;

    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    public MeetingWorkspaceUrl: PropertyDefinition;

    /**
     * Defines the **NetShowUrl** property.
     */
    public NetShowUrl: PropertyDefinition;

    /**
     * Defines the **ICalUid** property.
     */
    public ICalUid: PropertyDefinition;

    /**
     * Defines the **ICalRecurrenceId** property.
     */
    public ICalRecurrenceId: PropertyDefinition;

    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    public ICalDateTimeStamp: PropertyDefinition;

    /**
     * Defines the **EnhancedLocation** property.
     */
    public EnhancedLocation: PropertyDefinition;

    /**
     * Defines the **JoinOnlineMeetingUrl** property.
     */
    public JoinOnlineMeetingUrl: PropertyDefinition;

    /**
     * Defines the **OnlineMeetingSettings** property.
     */
    public OnlineMeetingSettings: PropertyDefinition;

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

    protected init() {
        super.init();
        this.StartTimeZone = new StartTimeZonePropertyDefinition(
            "StartTimeZone",
            XmlElementNames.StartTimeZone,
            FieldUris.StartTimeZone,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.EndTimeZone = new TimeZonePropertyDefinition(
            "EndTimeZone",
            XmlElementNames.EndTimeZone,
            FieldUris.EndTimeZone,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010
        );

        this.Start = new ScopedDateTimePropertyDefinition(
            "Start",
            XmlElementNames.Start,
            FieldUris.Start,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            (version: ExchangeVersion) => { return this.StartTimeZone; }
        );

        this.End = new ScopedDateTimePropertyDefinition(
            "End",
            XmlElementNames.End,
            FieldUris.End,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            (version: ExchangeVersion) => {
                if (version !== ExchangeVersion.Exchange2007_SP1) {
                    return this.EndTimeZone;
                }
                return this.StartTimeZone;
            });
        this.OriginalStart = new DateTimePropertyDefinition(
            "OriginalStart",
            XmlElementNames.OriginalStart,
            FieldUris.OriginalStart,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsAllDayEvent = new BoolPropertyDefinition(
            "IsAllDayEvent",
            XmlElementNames.IsAllDayEvent,
            FieldUris.IsAllDayEvent,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.LegacyFreeBusyStatus = new GenericPropertyDefinition<LegacyFreeBusyStatus>(
            "LegacyFreeBusyStatus",
            XmlElementNames.LegacyFreeBusyStatus,
            FieldUris.LegacyFreeBusyStatus,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Location = new StringPropertyDefinition(
            "Location",
            XmlElementNames.Location,
            FieldUris.Location,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.When = new StringPropertyDefinition(
            "When",
            XmlElementNames.When,
            FieldUris.When,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsMeeting = new BoolPropertyDefinition(
            "IsMeeting",
            XmlElementNames.IsMeeting,
            FieldUris.IsMeeting,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsCancelled = new BoolPropertyDefinition(
            "IsCancelled",
            XmlElementNames.IsCancelled,
            FieldUris.IsCancelled,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsRecurring = new BoolPropertyDefinition(
            "IsRecurring",
            XmlElementNames.IsRecurring,
            FieldUris.IsRecurring,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.MeetingRequestWasSent = new BoolPropertyDefinition(
            "MeetingRequestWasSent",
            XmlElementNames.MeetingRequestWasSent,
            FieldUris.MeetingRequestWasSent,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsResponseRequested = new BoolPropertyDefinition(
            "IsResponseRequested",
            XmlElementNames.IsResponseRequested,
            FieldUris.IsResponseRequested,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.AppointmentType = new GenericPropertyDefinition<AppointmentType>(
            "CalendarItemType",
            XmlElementNames.CalendarItemType,
            FieldUris.CalendarItemType,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.MyResponseType = new GenericPropertyDefinition<MeetingResponseType>(
            "MyResponseType",
            XmlElementNames.MyResponseType,
            FieldUris.MyResponseType,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Organizer = new ContainedPropertyDefinition<EmailAddress>(
            "Organizer",
            XmlElementNames.Organizer,
            XmlElementNames.Mailbox,
            FieldUris.Organizer,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddress(); }
        );

        this.RequiredAttendees = new ComplexPropertyDefinition<AttendeeCollection>(
            "RequiredAttendees",
            XmlElementNames.RequiredAttendees,
            FieldUris.RequiredAttendees,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new AttendeeCollection(); }
        );

        this.OptionalAttendees = new ComplexPropertyDefinition<AttendeeCollection>(
            "OptionalAttendees",
            XmlElementNames.OptionalAttendees,
            FieldUris.OptionalAttendees,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new AttendeeCollection(); }
        );

        this.Resources = new ComplexPropertyDefinition<AttendeeCollection>(
            "Resources",
            XmlElementNames.Resources,
            FieldUris.Resources,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new AttendeeCollection(); }
        );

        this.ConflictingMeetingCount = new IntPropertyDefinition(
            "ConflictingMeetingCount",
            XmlElementNames.ConflictingMeetingCount,
            FieldUris.ConflictingMeetingCount,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1
        );

        this.AdjacentMeetingCount = new IntPropertyDefinition(
            "AdjacentMeetingCount",
            XmlElementNames.AdjacentMeetingCount,
            FieldUris.AdjacentMeetingCount,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ConflictingMeetings = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
            "ConflictingMeetings",
            XmlElementNames.ConflictingMeetings,
            FieldUris.ConflictingMeetings,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new ItemCollection<Appointment>(); }
        );

        this.AdjacentMeetings = new ComplexPropertyDefinition<ItemCollection<Appointment>>(
            "AdjacentMeetings",
            XmlElementNames.AdjacentMeetings,
            FieldUris.AdjacentMeetings,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new ItemCollection<Appointment>(); }
        );

        this.Duration = new TimeSpanPropertyDefinition(
            "Duration",
            XmlElementNames.Duration,
            FieldUris.Duration,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.TimeZone = new StringPropertyDefinition(
            "TimeZone",
            XmlElementNames.TimeZone,
            FieldUris.TimeZone,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.AppointmentReplyTime = new DateTimePropertyDefinition(
            "AppointmentReplyTime",
            XmlElementNames.AppointmentReplyTime,
            FieldUris.AppointmentReplyTime,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.AppointmentSequenceNumber = new IntPropertyDefinition(
            "AppointmentSequenceNumber",
            XmlElementNames.AppointmentSequenceNumber,
            FieldUris.AppointmentSequenceNumber,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1
        );

        this.AppointmentState = new IntPropertyDefinition(
            "AppointmentState",
            XmlElementNames.AppointmentState,
            FieldUris.AppointmentState,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Recurrence = new RecurrencePropertyDefinition(
            "Recurrence",
            XmlElementNames.Recurrence,
            FieldUris.Recurrence,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1
        );

        this.FirstOccurrence = new ComplexPropertyDefinition<OccurrenceInfo>(
            "FirstOccurrence",
            XmlElementNames.FirstOccurrence,
            FieldUris.FirstOccurrence,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new OccurrenceInfo(); }
        );

        this.LastOccurrence = new ComplexPropertyDefinition<OccurrenceInfo>(
            "LastOccurrence",
            XmlElementNames.LastOccurrence,
            FieldUris.LastOccurrence,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new OccurrenceInfo(); }
        );

        this.ModifiedOccurrences = new ComplexPropertyDefinition<OccurrenceInfoCollection>(
            "ModifiedOccurrences",
            XmlElementNames.ModifiedOccurrences,
            FieldUris.ModifiedOccurrences,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new OccurrenceInfoCollection(); }
        );

        this.DeletedOccurrences = new ComplexPropertyDefinition<DeletedOccurrenceInfoCollection>(
            "DeletedOccurrences",
            XmlElementNames.DeletedOccurrences,
            FieldUris.DeletedOccurrences,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new DeletedOccurrenceInfoCollection(); }
        );

        this.MeetingTimeZone = new MeetingTimeZonePropertyDefinition(
            "MeetingTimeZone",
            XmlElementNames.MeetingTimeZone,
            FieldUris.MeetingTimeZone,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ConferenceType = new IntPropertyDefinition(
            "ConferenceType",
            XmlElementNames.ConferenceType,
            FieldUris.ConferenceType,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.AllowNewTimeProposal = new BoolPropertyDefinition(
            "AllowNewTimeProposal",
            XmlElementNames.AllowNewTimeProposal,
            FieldUris.AllowNewTimeProposal,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsOnlineMeeting = new BoolPropertyDefinition(
            "IsOnlineMeeting",
            XmlElementNames.IsOnlineMeeting,
            FieldUris.IsOnlineMeeting,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.MeetingWorkspaceUrl = new StringPropertyDefinition(
            "MeetingWorkspaceUrl",
            XmlElementNames.MeetingWorkspaceUrl,
            FieldUris.MeetingWorkspaceUrl,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.NetShowUrl = new StringPropertyDefinition(
            "NetShowUrl",
            XmlElementNames.NetShowUrl,
            FieldUris.NetShowUrl,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ICalUid = new StringPropertyDefinition(
            "ICalUid",
            XmlElementNames.Uid,
            FieldUris.Uid,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ICalRecurrenceId = new DateTimePropertyDefinition(
            "ICalRecurrenceId",
            XmlElementNames.RecurrenceId,
            FieldUris.RecurrenceId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            true
        );

        this.ICalDateTimeStamp = new DateTimePropertyDefinition(
            "ICalDateTimeStamp",
            XmlElementNames.DateTimeStamp,
            FieldUris.DateTimeStamp,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            true
        );

        this.EnhancedLocation = new ComplexPropertyDefinition<EnhancedLocation>(
            "EnhancedLocation",
            XmlElementNames.EnhancedLocation,
            FieldUris.EnhancedLocation,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            () => { return new EnhancedLocation(); }
        );

        this.JoinOnlineMeetingUrl = new StringPropertyDefinition(
            "JoinOnlineMeetingUrl",
            XmlElementNames.JoinOnlineMeetingUrl,
            FieldUris.JoinOnlineMeetingUrl,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.OnlineMeetingSettings = new ComplexPropertyDefinition<OnlineMeetingSettings>(
            "OnlineMeetingSettings",
            XmlElementNames.OnlineMeetingSettings,
            FieldUris.OnlineMeetingSettings,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            () => { return new OnlineMeetingSettings(); }
        );
    }
}