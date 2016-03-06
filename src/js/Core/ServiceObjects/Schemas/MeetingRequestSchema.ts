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

module FieldUris {
    export var MeetingRequestType: string = "meetingRequest:MeetingRequestType";
    export var IntendedFreeBusyStatus: string = "meetingRequest:IntendedFreeBusyStatus";
    export var ChangeHighlights: string = "meetingRequest:ChangeHighlights";
}

export class MeetingRequestSchema extends MeetingMessageSchema {
public MeetingRequestType: PropertyDefinition;
    public IntendedFreeBusyStatus: PropertyDefinition;
    public ChangeHighlights: PropertyDefinition;
    public EnhancedLocation: PropertyDefinition;
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
    public StartTimeZone: PropertyDefinition;
    public EndTimeZone: PropertyDefinition;
    public ConferenceType: PropertyDefinition;
    public AllowNewTimeProposal: PropertyDefinition;
    public IsOnlineMeeting: PropertyDefinition;
    public MeetingWorkspaceUrl: PropertyDefinition;
    public NetShowUrl: PropertyDefinition;

    static Instance: MeetingRequestSchema = new MeetingRequestSchema();

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
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.MeetingRequestType
        );

        this.IntendedFreeBusyStatus = new GenericPropertyDefinition<LegacyFreeBusyStatus>(
            "IntendedFreeBusyStatus",
            XmlElementNames.IntendedFreeBusyStatus,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IntendedFreeBusyStatus,
            PropertyDefinitionFlags.CanFind
        );

        this.ChangeHighlights = new ComplexPropertyDefinition<ChangeHighlights>(
            "ChangeHighlights",
            XmlElementNames.ChangeHighlights,
            ExchangeVersion.Exchange2013,
            FieldUris.ChangeHighlights,
            PropertyDefinitionFlags.None,
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