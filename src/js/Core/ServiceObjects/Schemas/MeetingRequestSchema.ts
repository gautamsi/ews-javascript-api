import {XmlElementNames} from "../../XmlElementNames";
import {MeetingRequestType} from "../../../Enumerations/MeetingRequestType";
import {LegacyFreeBusyStatus} from "../../../Enumerations/LegacyFreeBusyStatus";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {ChangeHighlights} from "../../../ComplexProperties/ChangeHighlights";
import {Schemas} from "./Schemas";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {MeetingMessageSchema} from "./MeetingMessageSchema";

/**
 * Field URIs for meeting request.
 */
module FieldUris {
    export var MeetingRequestType: string = "meetingRequest:MeetingRequestType";
    export var IntendedFreeBusyStatus: string = "meetingRequest:IntendedFreeBusyStatus";
    export var ChangeHighlights: string = "meetingRequest:ChangeHighlights";
}

/**
 * Represents the schema for meeting requests.
 */
export class MeetingRequestSchema extends MeetingMessageSchema {

    /**
     * Defines the **MeetingRequestType** property.
     */
    public static MeetingRequestType: PropertyDefinition = new GenericPropertyDefinition<MeetingRequestType>(
        "MeetingRequestType",
        XmlElementNames.MeetingRequestType,
        FieldUris.MeetingRequestType,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IntendedFreeBusyStatus** property.
     */
    public static IntendedFreeBusyStatus: PropertyDefinition = new GenericPropertyDefinition<LegacyFreeBusyStatus>(
        "IntendedFreeBusyStatus",
        XmlElementNames.IntendedFreeBusyStatus,
        FieldUris.IntendedFreeBusyStatus,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ChangeHighlights** property.
     */
    public static ChangeHighlights: PropertyDefinition = new ComplexPropertyDefinition<ChangeHighlights>(
        "ChangeHighlights",
        XmlElementNames.ChangeHighlights,
        FieldUris.ChangeHighlights,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2013,
        () => { return new ChangeHighlights(); }
    );

    /**
     * Defines the **EnhancedLocation** property.
     */
    public static EnhancedLocation: PropertyDefinition = Schemas.AppointmentSchema.EnhancedLocation;

    /**
     * Defines the **Start** property.
     */
    public static Start: PropertyDefinition = Schemas.AppointmentSchema.Start;

    /**
     * Defines the **End** property.
     */
    public static End: PropertyDefinition = Schemas.AppointmentSchema.End;

    /**
     * Defines the **OriginalStart** property.
     */
    public static OriginalStart: PropertyDefinition = Schemas.AppointmentSchema.OriginalStart;

    /**
     * Defines the **IsAllDayEvent** property.
     */
    public static IsAllDayEvent: PropertyDefinition = Schemas.AppointmentSchema.IsAllDayEvent;

    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    public static LegacyFreeBusyStatus: PropertyDefinition = Schemas.AppointmentSchema.LegacyFreeBusyStatus;

    /**
     * Defines the **Location** property.
     */
    public static Location: PropertyDefinition = Schemas.AppointmentSchema.Location;

    /**
     * Defines the **When** property.
     */
    public static When: PropertyDefinition = Schemas.AppointmentSchema.When;

    /**
     * Defines the **IsMeeting** property.
     */
    public static IsMeeting: PropertyDefinition = Schemas.AppointmentSchema.IsMeeting;

    /**
     * Defines the **IsCancelled** property.
     */
    public static IsCancelled: PropertyDefinition = Schemas.AppointmentSchema.IsCancelled;

    /**
     * Defines the **IsRecurring** property.
     */
    public static IsRecurring: PropertyDefinition = Schemas.AppointmentSchema.IsRecurring;

    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    public static MeetingRequestWasSent: PropertyDefinition = Schemas.AppointmentSchema.MeetingRequestWasSent;

    /**
     * Defines the **AppointmentType** property.
     */
    public static AppointmentType: PropertyDefinition = Schemas.AppointmentSchema.AppointmentType;

    /**
     * Defines the **MyResponseType** property.
     */
    public static MyResponseType: PropertyDefinition = Schemas.AppointmentSchema.MyResponseType;

    /**
     * Defines the **Organizer** property.
     */
    public static Organizer: PropertyDefinition = Schemas.AppointmentSchema.Organizer;

    /**
     * Defines the **RequiredAttendees** property.
     */
    public static RequiredAttendees: PropertyDefinition = Schemas.AppointmentSchema.RequiredAttendees;

    /**
     * Defines the **OptionalAttendees** property.
     */
    public static OptionalAttendees: PropertyDefinition = Schemas.AppointmentSchema.OptionalAttendees;

    /**
     * Defines the **Resources** property.
     */
    public static Resources: PropertyDefinition = Schemas.AppointmentSchema.Resources;

    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    public static ConflictingMeetingCount: PropertyDefinition = Schemas.AppointmentSchema.ConflictingMeetingCount;

    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    public static AdjacentMeetingCount: PropertyDefinition = Schemas.AppointmentSchema.AdjacentMeetingCount;

    /**
     * Defines the **ConflictingMeetings** property.
     */
    public static ConflictingMeetings: PropertyDefinition = Schemas.AppointmentSchema.ConflictingMeetings;

    /**
     * Defines the **AdjacentMeetings** property.
     */
    public static AdjacentMeetings: PropertyDefinition = Schemas.AppointmentSchema.AdjacentMeetings;

    /**
     * Defines the **Duration** property.
     */
    public static Duration: PropertyDefinition = Schemas.AppointmentSchema.Duration;

    /**
     * Defines the **TimeZone** property.
     */
    public static TimeZone: PropertyDefinition = Schemas.AppointmentSchema.TimeZone;

    /**
     * Defines the **AppointmentReplyTime** property.
     */
    public static AppointmentReplyTime: PropertyDefinition = Schemas.AppointmentSchema.AppointmentReplyTime;

    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    public static AppointmentSequenceNumber: PropertyDefinition = Schemas.AppointmentSchema.AppointmentSequenceNumber;

    /**
     * Defines the **AppointmentState** property.
     */
    public static AppointmentState: PropertyDefinition = Schemas.AppointmentSchema.AppointmentState;

    /**
     * Defines the **Recurrence** property.
     */
    public static Recurrence: PropertyDefinition = Schemas.AppointmentSchema.Recurrence;

    /**
     * Defines the **FirstOccurrence** property.
     */
    public static FirstOccurrence: PropertyDefinition = Schemas.AppointmentSchema.FirstOccurrence;

    /**
     * Defines the **LastOccurrence** property.
     */
    public static LastOccurrence: PropertyDefinition = Schemas.AppointmentSchema.LastOccurrence;

    /**
     * Defines the **ModifiedOccurrences** property.
     */
    public static ModifiedOccurrences: PropertyDefinition = Schemas.AppointmentSchema.ModifiedOccurrences;

    /**
     * Defines the **DeletedOccurrences** property.
     */
    public static DeletedOccurrences: PropertyDefinition = Schemas.AppointmentSchema.DeletedOccurrences;

    /**
     * Defines the **MeetingTimeZone** property.
     */
    public static MeetingTimeZone: PropertyDefinition = Schemas.AppointmentSchema.MeetingTimeZone;

    /**
     * Defines the **StartTimeZone** property.
     */
    public static StartTimeZone: PropertyDefinition = Schemas.AppointmentSchema.StartTimeZone;

    /**
     * Defines the **EndTimeZone** property.
     */
    public static EndTimeZone: PropertyDefinition = Schemas.AppointmentSchema.EndTimeZone;

    /**
     * Defines the **ConferenceType** property.
     */
    public static ConferenceType: PropertyDefinition = Schemas.AppointmentSchema.ConferenceType;

    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    public static AllowNewTimeProposal: PropertyDefinition = Schemas.AppointmentSchema.AllowNewTimeProposal;

    /**
     * Defines the **IsOnlineMeeting** property.
     */
    public static IsOnlineMeeting: PropertyDefinition = Schemas.AppointmentSchema.IsOnlineMeeting;

    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    public static MeetingWorkspaceUrl: PropertyDefinition = Schemas.AppointmentSchema.MeetingWorkspaceUrl;

    /**
     * Defines the **NetShowUrl** property.
     */
    public static NetShowUrl: PropertyDefinition = Schemas.AppointmentSchema.NetShowUrl;

    /**
     * @internal Instance of **MeetingRequestSchema** 
     */
    static Instance: MeetingRequestSchema = new MeetingRequestSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
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
    }
}

/**
 * Represents the schema for meeting requests.
 */
export interface MeetingRequestSchema {
    /**
     * Defines the **MeetingRequestType** property.
     */
    MeetingRequestType: PropertyDefinition;
    /**
     * Defines the **IntendedFreeBusyStatus** property.
     */
    IntendedFreeBusyStatus: PropertyDefinition;
    /**
     * Defines the **ChangeHighlights** property.
     */
    ChangeHighlights: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    EnhancedLocation: PropertyDefinition;
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
     * Defines the **StartTimeZone** property.
     */
    StartTimeZone: PropertyDefinition;
    /**
     * Defines the **EndTimeZone** property.
     */
    EndTimeZone: PropertyDefinition;
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
     * @internal Instance of **MeetingRequestSchema**
     */
    Instance: MeetingRequestSchema;
}

/**
 * Represents the schema for meeting requests.
 */
export interface MeetingRequestSchemaStatic extends MeetingRequestSchema {
}