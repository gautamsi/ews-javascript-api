
import Item = require("./Item");
class Appointment extends Item {
     //fix constructor
    constructor(x:any,y?:any) { super(null); }
    ////////DefaultSendCancellationsMode: SendCancellationsMode;
    ////////DefaultSendInvitationsMode: SendInvitationsMode;
    ////////DefaultSendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
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
    ////////IsResponseRequested: boolean;
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
    ////////ICalUid: string;
    ////////ICalRecurrenceId: Date;
    ////////ICalDateTimeStamp: Date;
    ////////EnhancedLocation: EnhancedLocation;
    ////////JoinOnlineMeetingUrl: string;
    ////////OnlineMeetingSettings: OnlineMeetingSettings;

    ////////constructor(svc: ExchangeService);
    ////////constructor(parentAttachment: ItemAttachment, isNew: boolean);
    ////////constructor(obj: any, isNew: boolean = false) {
    ////////    super(obj);

    ////////    if (obj instanceof ItemAttachment) {
    ////////        var parentAttachment = <ItemAttachment>obj;
    ////////        if (parentAttachment.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
    ////////            if (isNew) {
    ////////                this.StartTimeZone = parentAttachment.Service.TimeZone;
    ////////            }
    ////////        }
    ////////    }
    ////////}

    ////////Accept(sendResponse: boolean): CalendarActionResults { throw new Error("Appointment.ts - Accept : Not implemented."); }
    ////////AcceptTentatively(sendResponse: boolean): CalendarActionResults { throw new Error("Appointment.ts - AcceptTentatively : Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Appointment { throw new Error("Appointment.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId): Appointment { throw new Error("Appointment.ts - Bind : Not implemented."); }
    ////////BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number): Appointment { throw new Error("Appointment.ts - BindToOccurrence : Not implemented."); }
    ////////BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number, propertySet: PropertySet): Appointment { throw new Error("Appointment.ts - BindToOccurrence : Not implemented."); }
    ////////BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId): Appointment { throw new Error("Appointment.ts - BindToRecurringMaster : Not implemented."); }
    ////////BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId, propertySet: PropertySet): Appointment { throw new Error("Appointment.ts - BindToRecurringMaster : Not implemented."); }
    ////////CancelMeeting(): CalendarActionResults { throw new Error("Appointment.ts - CancelMeeting : Not implemented."); }
    ////////CancelMeeting(cancellationMessageText: string): CalendarActionResults { throw new Error("Appointment.ts - CancelMeeting : Not implemented."); }
    ////////CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage { throw new Error("Appointment.ts - CreateAcceptMessage : Not implemented."); }
    ////////CreateCancelMeetingMessage(): CancelMeetingMessage { throw new Error("Appointment.ts - CreateCancelMeetingMessage : Not implemented."); }
    ////////CreateDeclineMessage(): DeclineMeetingInvitationMessage { throw new Error("Appointment.ts - CreateDeclineMessage : Not implemented."); }
    ////////CreateForward(): ResponseMessage { throw new Error("Appointment.ts - CreateForward : Not implemented."); }
    ////////CreateReply(replyAll: boolean): ResponseMessage { throw new Error("Appointment.ts - CreateReply : Not implemented."); }
    ////////Decline(sendResponse: boolean): CalendarActionResults { throw new Error("Appointment.ts - Decline : Not implemented."); }
    ////////Delete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode): any { throw new Error("Appointment.ts - Delete : Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Appointment.ts - Forward : Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: any): any { throw new Error("Appointment.ts - Forward : Not implemented."); }
    ////////GetIsCustomDateTimeScopingRequired(): boolean { throw new Error("Appointment.ts - GetIsCustomDateTimeScopingRequired : Not implemented."); }
    ////////GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { throw new Error("Appointment.ts - GetIsTimeZoneHeaderRequired : Not implemented."); }
    ////////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Appointment.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    ////////GetSchema(): ServiceObjectSchema { throw new Error("Appointment.ts - GetSchema : Not implemented."); }
    ////////InternalAccept(tentative: boolean, sendResponse: boolean): CalendarActionResults { throw new Error("Appointment.ts - InternalAccept : Not implemented."); }
    ////////Reply(bodyPrefix: MessageBody, replyAll: boolean): any { throw new Error("Appointment.ts - Reply : Not implemented."); }
    ////////Save(destinationFolderName: WellKnownFolderName, sendInvitationsMode: SendInvitationsMode): any { throw new Error("Appointment.ts - Save : Not implemented."); }
    ////////Save(destinationFolderId: FolderId, sendInvitationsMode: SendInvitationsMode): any { throw new Error("Appointment.ts - Save : Not implemented."); }
    ////////Save(sendInvitationsMode: SendInvitationsMode): any { throw new Error("Appointment.ts - Save : Not implemented."); }
    ////////Update(conflictResolutionMode: ConflictResolutionMode, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): any { throw new Error("Appointment.ts - Update : Not implemented."); }
    ////////Validate(): any { throw new Error("Appointment.ts - Validate : Not implemented."); }
}
 export = Appointment;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export
