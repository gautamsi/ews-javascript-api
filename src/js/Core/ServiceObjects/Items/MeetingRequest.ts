import XmlElementNames = require("../../XmlElementNames");
import MeetingMessage = require("./MeetingMessage");
class MeetingRequest extends MeetingMessage {
    ////////MeetingRequestType: MeetingRequestType;
    ////////IntendedFreeBusyStatus: LegacyFreeBusyStatus;
    ////////ChangeHighlights: ChangeHighlights;
    ////////EnhancedLocation: EnhancedLocation;
    ////////Start: Date;
    ////////End: Date;
    ////////OriginalStart: Date;
    ////////IsAllDayEvent: boolean;
    ////////LegacyFreeBusyStatus: LegacyFreeBusyStatus;
    ////////Location: string;
    ////////When: string;
    ////////IsMeeting: boolean;
    ////////IsCancelled: boolean;
    ////////IsRecurring: boolean;
    ////////MeetingRequestWasSent: boolean;
    ////////AppointmentType: AppointmentType;
    ////////MyResponseType: MeetingResponseType;
    ////////Organizer: EmailAddress;
    ////////RequiredAttendees: AttendeeCollection;
    ////////OptionalAttendees: AttendeeCollection;
    ////////Resources: AttendeeCollection;
    ////////ConflictingMeetingCount: number;
    ////////AdjacentMeetingCount: number;
    ////////ConflictingMeetings: ItemCollection<Appointment>;
    ////////AdjacentMeetings: ItemCollection<Appointment>;
    ////////Duration: System.TimeSpan;
    ////////TimeZone: string;
    ////////AppointmentReplyTime: Date;
    ////////AppointmentSequenceNumber: number;
    ////////AppointmentState: number;
    ////////Recurrence: Recurrence;
    ////////FirstOccurrence: OccurrenceInfo;
    ////////LastOccurrence: OccurrenceInfo;
    ////////ModifiedOccurrences: OccurrenceInfoCollection;
    ////////DeletedOccurrences: DeletedOccurrenceInfoCollection;
    ////////StartTimeZone: System.TimeZoneInfo;
    ////////EndTimeZone: System.TimeZoneInfo;
    ////////ConferenceType: number;
    ////////AllowNewTimeProposal: boolean;
    ////////IsOnlineMeeting: boolean;
    ////////MeetingWorkspaceUrl: string;
    ////////NetShowUrl: string;
    ////////Accept(sendResponse: boolean): CalendarActionResults { throw new Error("MeetingRequest.ts - Accept : Not implemented."); }
    ////////AcceptTentatively(sendResponse: boolean): CalendarActionResults { throw new Error("MeetingRequest.ts - AcceptTentatively : Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): MeetingRequest { throw new Error("MeetingRequest.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId): MeetingRequest { throw new Error("MeetingRequest.ts - Bind : Not implemented."); }
    ////////CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage { throw new Error("MeetingRequest.ts - CreateAcceptMessage : Not implemented."); }
    ////////CreateDeclineMessage(): DeclineMeetingInvitationMessage { throw new Error("MeetingRequest.ts - CreateDeclineMessage : Not implemented."); }
    ////////Decline(sendResponse: boolean): CalendarActionResults { throw new Error("MeetingRequest.ts - Decline : Not implemented."); }
    ////////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MeetingRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    ////////GetSchema(): ServiceObjectSchema { throw new Error("MeetingRequest.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.MeetingRequest; }
    ////////InternalAccept(tentative: boolean, sendResponse: boolean): CalendarActionResults { throw new Error("MeetingRequest.ts - InternalAccept : Not implemented."); }
}

export = MeetingRequest;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
