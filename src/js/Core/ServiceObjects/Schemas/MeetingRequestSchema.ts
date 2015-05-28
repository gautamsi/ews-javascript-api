import MeetingMessageSchema = require("./MeetingMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
class MeetingRequestSchema extends MeetingMessageSchema {
    static MeetingRequestType: PropertyDefinition;
    static IntendedFreeBusyStatus: PropertyDefinition;
    static ChangeHighlights: PropertyDefinition;
    static EnhancedLocation: PropertyDefinition;
    static Start: PropertyDefinition;
    static End: PropertyDefinition;
    static OriginalStart: PropertyDefinition;
    static IsAllDayEvent: PropertyDefinition;
    static LegacyFreeBusyStatus: PropertyDefinition;
    static Location: PropertyDefinition;
    static When: PropertyDefinition;
    static IsMeeting: PropertyDefinition;
    static IsCancelled: PropertyDefinition;
    static IsRecurring: PropertyDefinition;
    static MeetingRequestWasSent: PropertyDefinition;
    static AppointmentType: PropertyDefinition;
    static MyResponseType: PropertyDefinition;
    static Organizer: PropertyDefinition;
    static RequiredAttendees: PropertyDefinition;
    static OptionalAttendees: PropertyDefinition;
    static Resources: PropertyDefinition;
    static ConflictingMeetingCount: PropertyDefinition;
    static AdjacentMeetingCount: PropertyDefinition;
    static ConflictingMeetings: PropertyDefinition;
    static AdjacentMeetings: PropertyDefinition;
    static Duration: PropertyDefinition;
    static TimeZone: PropertyDefinition;
    static AppointmentReplyTime: PropertyDefinition;
    static AppointmentSequenceNumber: PropertyDefinition;
    static AppointmentState: PropertyDefinition;
    static Recurrence: PropertyDefinition;
    static FirstOccurrence: PropertyDefinition;
    static LastOccurrence: PropertyDefinition;
    static ModifiedOccurrences: PropertyDefinition;
    static DeletedOccurrences: PropertyDefinition;
    static MeetingTimeZone: PropertyDefinition;
    static StartTimeZone: PropertyDefinition;
    static EndTimeZone: PropertyDefinition;
    static ConferenceType: PropertyDefinition;
    static AllowNewTimeProposal: PropertyDefinition;
    static IsOnlineMeeting: PropertyDefinition;
    static MeetingWorkspaceUrl: PropertyDefinition;
    static NetShowUrl: PropertyDefinition;
    static Instance: MeetingRequestSchema;
    RegisterProperties(): any { throw new Error("MeetingRequestSchema.ts - RegisterProperties : Not implemented."); }
}
module MeetingRequestSchema {
    export module FieldUris {
        export var /* static*/ MeetingRequestType: string = "meetingRequest:MeetingRequestType";
        export var /* static*/ IntendedFreeBusyStatus: string = "meetingRequest:IntendedFreeBusyStatus";
        export var /* static*/ ChangeHighlights: string = "meetingRequest:ChangeHighlights";
    }
}


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

