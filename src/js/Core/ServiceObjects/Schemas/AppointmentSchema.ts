import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

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
    static StartTimeZone: PropertyDefinition;
    static EndTimeZone: PropertyDefinition;
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
    static IsResponseRequested: PropertyDefinition;
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
    static ConferenceType: PropertyDefinition;
    static AllowNewTimeProposal: PropertyDefinition;
    static IsOnlineMeeting: PropertyDefinition;
    static MeetingWorkspaceUrl: PropertyDefinition;
    static NetShowUrl: PropertyDefinition;
    static ICalUid: PropertyDefinition;
    static ICalRecurrenceId: PropertyDefinition;
    static ICalDateTimeStamp: PropertyDefinition;
    static EnhancedLocation: PropertyDefinition;
    static JoinOnlineMeetingUrl: PropertyDefinition;
    static OnlineMeetingSettings: PropertyDefinition;
    static Instance: AppointmentSchema;
    RegisterProperties(): any { throw new Error("AppointmentSchema.ts - RegisterProperties : Not implemented."); }
}



export = AppointmentSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
