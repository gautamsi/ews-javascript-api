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
    public MeetingRequestType: PropertyDefinition;

    /**
     * Defines the **IntendedFreeBusyStatus** property.
     */
    public IntendedFreeBusyStatus: PropertyDefinition;

    /**
     * Defines the **ChangeHighlights** property.
     */
    public ChangeHighlights: PropertyDefinition;

    /**
     * Defines the **EnhancedLocation** property.
     */
    public EnhancedLocation: PropertyDefinition;

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
     * Defines the **StartTimeZone** property.
     */
    public StartTimeZone: PropertyDefinition;

    /**
     * Defines the **EndTimeZone** property.
     */
    public EndTimeZone: PropertyDefinition;

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
        super.RegisterProperty(this.MeetingRequestType);
        super.RegisterProperty(this.IntendedFreeBusyStatus);
        super.RegisterProperty(this.ChangeHighlights);
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
    }

    protected init() {
        super.init();
        this.MeetingRequestType = new GenericPropertyDefinition<MeetingRequestType>(
            "MeetingRequestType",
            XmlElementNames.MeetingRequestType,
            FieldUris.MeetingRequestType,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IntendedFreeBusyStatus = new GenericPropertyDefinition<LegacyFreeBusyStatus>(
            "IntendedFreeBusyStatus",
            XmlElementNames.IntendedFreeBusyStatus,
            FieldUris.IntendedFreeBusyStatus,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ChangeHighlights = new ComplexPropertyDefinition<ChangeHighlights>(
            "ChangeHighlights",
            XmlElementNames.ChangeHighlights,
            FieldUris.ChangeHighlights,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2013,
            () => { return new ChangeHighlights(); }
        );

        this.EnhancedLocation = Schemas.AppointmentSchema.EnhancedLocation;
        this.Start = Schemas.AppointmentSchema.Start;
        this.End = Schemas.AppointmentSchema.End;
        this.OriginalStart = Schemas.AppointmentSchema.OriginalStart;
        this.IsAllDayEvent = Schemas.AppointmentSchema.IsAllDayEvent;
        this.LegacyFreeBusyStatus = Schemas.AppointmentSchema.LegacyFreeBusyStatus;
        this.Location = Schemas.AppointmentSchema.Location;
        this.When = Schemas.AppointmentSchema.When;
        this.IsMeeting = Schemas.AppointmentSchema.IsMeeting;
        this.IsCancelled = Schemas.AppointmentSchema.IsCancelled;
        this.IsRecurring = Schemas.AppointmentSchema.IsRecurring;
        this.MeetingRequestWasSent = Schemas.AppointmentSchema.MeetingRequestWasSent;
        this.AppointmentType = Schemas.AppointmentSchema.AppointmentType;
        this.MyResponseType = Schemas.AppointmentSchema.MyResponseType;
        this.Organizer = Schemas.AppointmentSchema.Organizer;
        this.RequiredAttendees = Schemas.AppointmentSchema.RequiredAttendees;
        this.OptionalAttendees = Schemas.AppointmentSchema.OptionalAttendees;
        this.Resources = Schemas.AppointmentSchema.Resources;
        this.ConflictingMeetingCount = Schemas.AppointmentSchema.ConflictingMeetingCount;
        this.AdjacentMeetingCount = Schemas.AppointmentSchema.AdjacentMeetingCount;
        this.ConflictingMeetings = Schemas.AppointmentSchema.ConflictingMeetings;
        this.AdjacentMeetings = Schemas.AppointmentSchema.AdjacentMeetings;
        this.Duration = Schemas.AppointmentSchema.Duration;
        this.TimeZone = Schemas.AppointmentSchema.TimeZone;
        this.AppointmentReplyTime = Schemas.AppointmentSchema.AppointmentReplyTime;
        this.AppointmentSequenceNumber = Schemas.AppointmentSchema.AppointmentSequenceNumber;
        this.AppointmentState = Schemas.AppointmentSchema.AppointmentState;
        this.Recurrence = Schemas.AppointmentSchema.Recurrence;
        this.FirstOccurrence = Schemas.AppointmentSchema.FirstOccurrence;
        this.LastOccurrence = Schemas.AppointmentSchema.LastOccurrence;
        this.ModifiedOccurrences = Schemas.AppointmentSchema.ModifiedOccurrences;
        this.DeletedOccurrences = Schemas.AppointmentSchema.DeletedOccurrences;
        this.MeetingTimeZone = Schemas.AppointmentSchema.MeetingTimeZone;
        this.StartTimeZone = Schemas.AppointmentSchema.StartTimeZone;
        this.EndTimeZone = Schemas.AppointmentSchema.EndTimeZone;
        this.ConferenceType = Schemas.AppointmentSchema.ConferenceType;
        this.AllowNewTimeProposal = Schemas.AppointmentSchema.AllowNewTimeProposal;
        this.IsOnlineMeeting = Schemas.AppointmentSchema.IsOnlineMeeting;
        this.MeetingWorkspaceUrl = Schemas.AppointmentSchema.MeetingWorkspaceUrl;
        this.NetShowUrl = Schemas.AppointmentSchema.NetShowUrl;
    }
}