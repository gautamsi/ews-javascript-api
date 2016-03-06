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

export class AppointmentSchema extends ItemSchema {
    public StartTimeZone: PropertyDefinition;
    public EndTimeZone: PropertyDefinition;
    public Start: PropertyDefinition;
    public End: PropertyDefinition;
    public OriginalStart: PropertyDefinition;
    public IsAllDayEvent: PropertyDefinition;
    public LegacyFreeBusyStatus: PropertyDefinition;
    public Location: PropertyDefinition;
    public When: PropertyDefinition;
    public IsMeeting: PropertyDefinition;
    public IsCancelled: PropertyDefinition;
    public IsRecurring: PropertyDefinition;
    public MeetingRequestWasSent: PropertyDefinition;
    public IsResponseRequested: PropertyDefinition;
    public AppointmentType: PropertyDefinition;
    public MyResponseType: PropertyDefinition;
    public Organizer: PropertyDefinition;
    public RequiredAttendees: PropertyDefinition;
    public OptionalAttendees: PropertyDefinition;
    public Resources: PropertyDefinition;
    public ConflictingMeetingCount: PropertyDefinition;
    public AdjacentMeetingCount: PropertyDefinition;
    public ConflictingMeetings: PropertyDefinition;
    public AdjacentMeetings: PropertyDefinition;
    public Duration: PropertyDefinition;
    public TimeZone: PropertyDefinition;
    public AppointmentReplyTime: PropertyDefinition;
    public AppointmentSequenceNumber: PropertyDefinition;
    public AppointmentState: PropertyDefinition;
    public Recurrence: PropertyDefinition;
    public FirstOccurrence: PropertyDefinition;
    public LastOccurrence: PropertyDefinition;
    public ModifiedOccurrences: PropertyDefinition;
    public DeletedOccurrences: PropertyDefinition;
    public MeetingTimeZone: PropertyDefinition;
    public ConferenceType: PropertyDefinition;
    public AllowNewTimeProposal: PropertyDefinition;
    public IsOnlineMeeting: PropertyDefinition;
    public MeetingWorkspaceUrl: PropertyDefinition;
    public NetShowUrl: PropertyDefinition;
    public ICalUid: PropertyDefinition;
    public ICalRecurrenceId: PropertyDefinition;
    public ICalDateTimeStamp: PropertyDefinition;
    public EnhancedLocation: PropertyDefinition;
    public JoinOnlineMeetingUrl: PropertyDefinition;
    public OnlineMeetingSettings: PropertyDefinition;

    /**
     * Instance of **AppointmentSchema** 
     */
    static Instance: AppointmentSchema = new AppointmentSchema();

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