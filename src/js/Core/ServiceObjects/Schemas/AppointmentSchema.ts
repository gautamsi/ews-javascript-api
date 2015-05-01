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
    RegisterProperties(): any { throw new Error("Not implemented.");  }
}

module AppointmentSchema {
    export module FieldUris {
        export var /*static*/ Start: string = "calendar:Start";
        export var /*static*/ End: string = "calendar:End";
        export var /*static*/ OriginalStart: string = "calendar:OriginalStart";
        export var /*static*/ IsAllDayEvent: string = "calendar:IsAllDayEvent";
        export var /*static*/ LegacyFreeBusyStatus: string = "calendar:LegacyFreeBusyStatus";
        export var /*static*/ Location: string = "calendar:Location";
        export var /*static*/ When: string = "calendar:When";
        export var /*static*/ IsMeeting: string = "calendar:IsMeeting";
        export var /*static*/ IsCancelled: string = "calendar:IsCancelled";
        export var /*static*/ IsRecurring: string = "calendar:IsRecurring";
        export var /*static*/ MeetingRequestWasSent: string = "calendar:MeetingRequestWasSent";
        export var /*static*/ IsResponseRequested: string = "calendar:IsResponseRequested";
        export var /*static*/ CalendarItemType: string = "calendar:CalendarItemType";
        export var /*static*/ MyResponseType: string = "calendar:MyResponseType";
        export var /*static*/ Organizer: string = "calendar:Organizer";
        export var /*static*/ RequiredAttendees: string = "calendar:RequiredAttendees";
        export var /*static*/ OptionalAttendees: string = "calendar:OptionalAttendees";
        export var /*static*/ Resources: string = "calendar:Resources";
        export var /*static*/ ConflictingMeetingCount: string = "calendar:ConflictingMeetingCount";
        export var /*static*/ AdjacentMeetingCount: string = "calendar:AdjacentMeetingCount";
        export var /*static*/ ConflictingMeetings: string = "calendar:ConflictingMeetings";
        export var /*static*/ AdjacentMeetings: string = "calendar:AdjacentMeetings";
        export var /*static*/ Duration: string = "calendar:Duration";
        export var /*static*/ TimeZone: string = "calendar:TimeZone";
        export var /*static*/ AppointmentReplyTime: string = "calendar:AppointmentReplyTime";
        export var /*static*/ AppointmentSequenceNumber: string = "calendar:AppointmentSequenceNumber";
        export var /*static*/ AppointmentState: string = "calendar:AppointmentState";
        export var /*static*/ Recurrence: string = "calendar:Recurrence";
        export var /*static*/ FirstOccurrence: string = "calendar:FirstOccurrence";
        export var /*static*/ LastOccurrence: string = "calendar:LastOccurrence";
        export var /*static*/ ModifiedOccurrences: string = "calendar:ModifiedOccurrences";
        export var /*static*/ DeletedOccurrences: string = "calendar:DeletedOccurrences";
        export var /*static*/ MeetingTimeZone: string = "calendar:MeetingTimeZone";
        export var /*static*/ StartTimeZone: string = "calendar:StartTimeZone";
        export var /*static*/ EndTimeZone: string = "calendar:EndTimeZone";
        export var /*static*/ ConferenceType: string = "calendar:ConferenceType";
        export var /*static*/ AllowNewTimeProposal: string = "calendar:AllowNewTimeProposal";
        export var /*static*/ IsOnlineMeeting: string = "calendar:IsOnlineMeeting";
        export var /*static*/ MeetingWorkspaceUrl: string = "calendar:MeetingWorkspaceUrl";
        export var /*static*/ NetShowUrl: string = "calendar:NetShowUrl";
        export var /*static*/ Uid: string = "calendar:UID";
        export var /*static*/ RecurrenceId: string = "calendar:RecurrenceId";
        export var /*static*/ DateTimeStamp: string = "calendar:DateTimeStamp";
        export var /*static*/ EnhancedLocation: string = "calendar:EnhancedLocation";
        export var /*static*/ JoinOnlineMeetingUrl: string = "calendar:JoinOnlineMeetingUrl";
        export var /*static*/ OnlineMeetingSettings: string = "calendar:OnlineMeetingSettings";
    }
}
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;



export = AppointmentSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
