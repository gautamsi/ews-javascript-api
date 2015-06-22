import {XmlElementNames} from "../../XmlElementNames";
import {MeetingRequestType} from "../../../Enumerations/MeetingRequestType";
import {LegacyFreeBusyStatus} from "../../../Enumerations/LegacyFreeBusyStatus";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {ChangeHighlights} from "../../../ComplexProperties/ChangeHighlights";
import {AppointmentSchema} from "./AppointmentSchema";
import {MeetingMessageSchema} from "./MeetingMessageSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

//module MeetingRequestSchema {
module FieldUris {
    export var MeetingRequestType: string = "meetingRequest:MeetingRequestType";
    export var IntendedFreeBusyStatus: string = "meetingRequest:IntendedFreeBusyStatus";
    export var ChangeHighlights: string = "meetingRequest:ChangeHighlights";
}
//}
export class MeetingRequestSchema extends MeetingMessageSchema {
    static MeetingRequestType: PropertyDefinition = new GenericPropertyDefinition<MeetingRequestType>(
        "MeetingRequestType",
        XmlElementNames.MeetingRequestType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MeetingRequestType
        );

    static IntendedFreeBusyStatus: PropertyDefinition = new GenericPropertyDefinition<LegacyFreeBusyStatus>(
        "IntendedFreeBusyStatus",
        XmlElementNames.IntendedFreeBusyStatus,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IntendedFreeBusyStatus,
        PropertyDefinitionFlags.CanFind
        );

    static ChangeHighlights: PropertyDefinition = new ComplexPropertyDefinition<ChangeHighlights>(
        "ChangeHighlights",
        XmlElementNames.ChangeHighlights,
        ExchangeVersion.Exchange2013,
        FieldUris.ChangeHighlights,
        PropertyDefinitionFlags.None,
        () => { return new ChangeHighlights(); }
        );

    static EnhancedLocation: PropertyDefinition = AppointmentSchema.Instance.EnhancedLocation;
    static Start: PropertyDefinition = AppointmentSchema.Instance.Start;
    static End: PropertyDefinition = AppointmentSchema.Instance.End;
    static OriginalStart: PropertyDefinition = AppointmentSchema.Instance.OriginalStart;
    static IsAllDayEvent: PropertyDefinition = AppointmentSchema.Instance.IsAllDayEvent;
    static LegacyFreeBusyStatus: PropertyDefinition = AppointmentSchema.Instance.LegacyFreeBusyStatus;
    static Location: PropertyDefinition = AppointmentSchema.Instance.Location;
    static When: PropertyDefinition = AppointmentSchema.Instance.When;
    static IsMeeting: PropertyDefinition = AppointmentSchema.Instance.IsMeeting;
    static IsCancelled: PropertyDefinition = AppointmentSchema.Instance.IsCancelled;
    static IsRecurring: PropertyDefinition = AppointmentSchema.Instance.IsRecurring;
    static MeetingRequestWasSent: PropertyDefinition = AppointmentSchema.Instance.MeetingRequestWasSent;
    static AppointmentType: PropertyDefinition = AppointmentSchema.Instance.AppointmentType;
    static MyResponseType: PropertyDefinition = AppointmentSchema.Instance.MyResponseType;
    static Organizer: PropertyDefinition = AppointmentSchema.Instance.Organizer;
    static RequiredAttendees: PropertyDefinition = AppointmentSchema.Instance.RequiredAttendees;
    static OptionalAttendees: PropertyDefinition = AppointmentSchema.Instance.OptionalAttendees;
    static Resources: PropertyDefinition = AppointmentSchema.Instance.Resources;
    static ConflictingMeetingCount: PropertyDefinition = AppointmentSchema.Instance.ConflictingMeetingCount;
    static AdjacentMeetingCount: PropertyDefinition = AppointmentSchema.Instance.AdjacentMeetingCount;
    static ConflictingMeetings: PropertyDefinition = AppointmentSchema.Instance.ConflictingMeetings;
    static AdjacentMeetings: PropertyDefinition = AppointmentSchema.Instance.AdjacentMeetings;
    static Duration: PropertyDefinition = AppointmentSchema.Instance.Duration;
    static TimeZone: PropertyDefinition = AppointmentSchema.Instance.TimeZone;
    static AppointmentReplyTime: PropertyDefinition = AppointmentSchema.Instance.AppointmentReplyTime;
    static AppointmentSequenceNumber: PropertyDefinition = AppointmentSchema.Instance.AppointmentSequenceNumber;
    static AppointmentState: PropertyDefinition = AppointmentSchema.Instance.AppointmentState;
    static Recurrence: PropertyDefinition = AppointmentSchema.Instance.Recurrence;
    static FirstOccurrence: PropertyDefinition = AppointmentSchema.Instance.FirstOccurrence;
    static LastOccurrence: PropertyDefinition = AppointmentSchema.Instance.LastOccurrence;
    static ModifiedOccurrences: PropertyDefinition = AppointmentSchema.Instance.ModifiedOccurrences;
    static DeletedOccurrences: PropertyDefinition = AppointmentSchema.Instance.DeletedOccurrences;
    static MeetingTimeZone: PropertyDefinition = AppointmentSchema.Instance.MeetingTimeZone;
    static StartTimeZone: PropertyDefinition = AppointmentSchema.Instance.StartTimeZone;
    static EndTimeZone: PropertyDefinition = AppointmentSchema.Instance.EndTimeZone;
    static ConferenceType: PropertyDefinition = AppointmentSchema.Instance.ConferenceType;
    static AllowNewTimeProposal: PropertyDefinition = AppointmentSchema.Instance.AllowNewTimeProposal;
    static IsOnlineMeeting: PropertyDefinition = AppointmentSchema.Instance.IsOnlineMeeting;
    static MeetingWorkspaceUrl: PropertyDefinition = AppointmentSchema.Instance.MeetingWorkspaceUrl;
    static NetShowUrl: PropertyDefinition = AppointmentSchema.Instance.NetShowUrl;
    static Instance: MeetingRequestSchema = new MeetingRequestSchema();
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(MeetingRequestSchema.MeetingRequestType);
        super.RegisterProperty(MeetingRequestSchema.IntendedFreeBusyStatus);
        super.RegisterProperty(MeetingRequestSchema.ChangeHighlights);
        super.RegisterProperty(MeetingRequestSchema.Start);
        super.RegisterProperty(MeetingRequestSchema.End);
        super.RegisterProperty(MeetingRequestSchema.OriginalStart);
        super.RegisterProperty(MeetingRequestSchema.IsAllDayEvent);
        super.RegisterProperty(MeetingRequestSchema.LegacyFreeBusyStatus);
        super.RegisterProperty(MeetingRequestSchema.Location);
        super.RegisterProperty(MeetingRequestSchema.When);
        super.RegisterProperty(MeetingRequestSchema.IsMeeting);
        super.RegisterProperty(MeetingRequestSchema.IsCancelled);
        super.RegisterProperty(MeetingRequestSchema.IsRecurring);
        super.RegisterProperty(MeetingRequestSchema.MeetingRequestWasSent);
        super.RegisterProperty(MeetingRequestSchema.AppointmentType);
        super.RegisterProperty(MeetingRequestSchema.MyResponseType);
        super.RegisterProperty(MeetingRequestSchema.Organizer);
        super.RegisterProperty(MeetingRequestSchema.RequiredAttendees);
        super.RegisterProperty(MeetingRequestSchema.OptionalAttendees);
        super.RegisterProperty(MeetingRequestSchema.Resources);
        super.RegisterProperty(MeetingRequestSchema.ConflictingMeetingCount);
        super.RegisterProperty(MeetingRequestSchema.AdjacentMeetingCount);
        super.RegisterProperty(MeetingRequestSchema.ConflictingMeetings);
        super.RegisterProperty(MeetingRequestSchema.AdjacentMeetings);
        super.RegisterProperty(MeetingRequestSchema.Duration);
        super.RegisterProperty(MeetingRequestSchema.TimeZone);
        super.RegisterProperty(MeetingRequestSchema.AppointmentReplyTime);
        super.RegisterProperty(MeetingRequestSchema.AppointmentSequenceNumber);
        super.RegisterProperty(MeetingRequestSchema.AppointmentState);
        super.RegisterProperty(MeetingRequestSchema.Recurrence);
        super.RegisterProperty(MeetingRequestSchema.FirstOccurrence);
        super.RegisterProperty(MeetingRequestSchema.LastOccurrence);
        super.RegisterProperty(MeetingRequestSchema.ModifiedOccurrences);
        super.RegisterProperty(MeetingRequestSchema.DeletedOccurrences);
        super.RegisterInternalProperty(MeetingRequestSchema.MeetingTimeZone);
        super.RegisterProperty(MeetingRequestSchema.StartTimeZone);
        super.RegisterProperty(MeetingRequestSchema.EndTimeZone);
        super.RegisterProperty(MeetingRequestSchema.ConferenceType);
        super.RegisterProperty(MeetingRequestSchema.AllowNewTimeProposal);
        super.RegisterProperty(MeetingRequestSchema.IsOnlineMeeting);
        super.RegisterProperty(MeetingRequestSchema.MeetingWorkspaceUrl);
        super.RegisterProperty(MeetingRequestSchema.NetShowUrl);
        super.RegisterProperty(MeetingRequestSchema.EnhancedLocation);
    }
}