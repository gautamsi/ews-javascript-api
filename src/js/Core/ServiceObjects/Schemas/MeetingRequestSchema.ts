import XmlElementNames = require("../../XmlElementNames");
import MeetingRequestType = require("../../../Enumerations/MeetingRequestType");
import LegacyFreeBusyStatus = require("../../../Enumerations/LegacyFreeBusyStatus");
import GenericPropertyDefinition = require("../../../PropertyDefinitions/GenericPropertyDefinition");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import ComplexPropertyDefinition = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
import ChangeHighlights = require("../../../ComplexProperties/ChangeHighlights");
import AppointmentSchema = require("./AppointmentSchema");
import MeetingMessageSchema = require("./MeetingMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

//module MeetingRequestSchema {
module FieldUris {
    export var MeetingRequestType: string = "meetingRequest:MeetingRequestType";
    export var IntendedFreeBusyStatus: string = "meetingRequest:IntendedFreeBusyStatus";
    export var ChangeHighlights: string = "meetingRequest:ChangeHighlights";
}
//}

class MeetingRequestSchema extends MeetingMessageSchema {
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

    static EnhancedLocation: PropertyDefinition = AppointmentSchema.EnhancedLocation;
    static Start: PropertyDefinition = AppointmentSchema.Start;
    static End: PropertyDefinition = AppointmentSchema.End;
    static OriginalStart: PropertyDefinition = AppointmentSchema.OriginalStart;
    static IsAllDayEvent: PropertyDefinition = AppointmentSchema.IsAllDayEvent;
    static LegacyFreeBusyStatus: PropertyDefinition = AppointmentSchema.LegacyFreeBusyStatus;
    static Location: PropertyDefinition = AppointmentSchema.Location;
    static When: PropertyDefinition = AppointmentSchema.When;
    static IsMeeting: PropertyDefinition = AppointmentSchema.IsMeeting;
    static IsCancelled: PropertyDefinition = AppointmentSchema.IsCancelled;
    static IsRecurring: PropertyDefinition = AppointmentSchema.IsRecurring;
    static MeetingRequestWasSent: PropertyDefinition = AppointmentSchema.MeetingRequestWasSent;
    static AppointmentType: PropertyDefinition = AppointmentSchema.AppointmentType;
    static MyResponseType: PropertyDefinition = AppointmentSchema.MyResponseType;
    static Organizer: PropertyDefinition = AppointmentSchema.Organizer;
    static RequiredAttendees: PropertyDefinition = AppointmentSchema.RequiredAttendees;
    static OptionalAttendees: PropertyDefinition = AppointmentSchema.OptionalAttendees;
    static Resources: PropertyDefinition = AppointmentSchema.Resources;
    static ConflictingMeetingCount: PropertyDefinition = AppointmentSchema.ConflictingMeetingCount;
    static AdjacentMeetingCount: PropertyDefinition = AppointmentSchema.AdjacentMeetingCount;
    static ConflictingMeetings: PropertyDefinition = AppointmentSchema.ConflictingMeetings;
    static AdjacentMeetings: PropertyDefinition = AppointmentSchema.AdjacentMeetings;
    static Duration: PropertyDefinition = AppointmentSchema.Duration;
    static TimeZone: PropertyDefinition = AppointmentSchema.TimeZone;
    static AppointmentReplyTime: PropertyDefinition = AppointmentSchema.AppointmentReplyTime;
    static AppointmentSequenceNumber: PropertyDefinition = AppointmentSchema.AppointmentSequenceNumber;
    static AppointmentState: PropertyDefinition = AppointmentSchema.AppointmentState;
    static Recurrence: PropertyDefinition = AppointmentSchema.Recurrence;
    static FirstOccurrence: PropertyDefinition = AppointmentSchema.FirstOccurrence;
    static LastOccurrence: PropertyDefinition = AppointmentSchema.LastOccurrence;
    static ModifiedOccurrences: PropertyDefinition = AppointmentSchema.ModifiedOccurrences;
    static DeletedOccurrences: PropertyDefinition = AppointmentSchema.DeletedOccurrences;
    static MeetingTimeZone: PropertyDefinition = AppointmentSchema.MeetingTimeZone;
    static StartTimeZone: PropertyDefinition = AppointmentSchema.StartTimeZone;
    static EndTimeZone: PropertyDefinition = AppointmentSchema.EndTimeZone;
    static ConferenceType: PropertyDefinition = AppointmentSchema.ConferenceType;
    static AllowNewTimeProposal: PropertyDefinition = AppointmentSchema.AllowNewTimeProposal;
    static IsOnlineMeeting: PropertyDefinition = AppointmentSchema.IsOnlineMeeting;
    static MeetingWorkspaceUrl: PropertyDefinition = AppointmentSchema.MeetingWorkspaceUrl;
    static NetShowUrl: PropertyDefinition = AppointmentSchema.NetShowUrl;
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

export = MeetingRequestSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

