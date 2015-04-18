module Microsoft.Exchange.WebServices.Data {

    export class CalendarResponseObjectSchema extends ServiceObjectSchema {
        static Instance: CalendarResponseObjectSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class CancelMeetingMessageSchema extends ServiceObjectSchema {
        static Body: PropertyDefinition;
        static Instance: CancelMeetingMessageSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class ConversationSchema extends ServiceObjectSchema {
        static Id: PropertyDefinition;
        static Topic: PropertyDefinition;
        static UniqueRecipients: PropertyDefinition;
        static GlobalUniqueRecipients: PropertyDefinition;
        static UniqueUnreadSenders: PropertyDefinition;
        static GlobalUniqueUnreadSenders: PropertyDefinition;
        static UniqueSenders: PropertyDefinition;
        static GlobalUniqueSenders: PropertyDefinition;
        static LastDeliveryTime: PropertyDefinition;
        static GlobalLastDeliveryTime: PropertyDefinition;
        static Categories: PropertyDefinition;
        static GlobalCategories: PropertyDefinition;
        static FlagStatus: PropertyDefinition;
        static GlobalFlagStatus: PropertyDefinition;
        static HasAttachments: PropertyDefinition;
        static GlobalHasAttachments: PropertyDefinition;
        static MessageCount: PropertyDefinition;
        static GlobalMessageCount: PropertyDefinition;
        static UnreadCount: PropertyDefinition;
        static GlobalUnreadCount: PropertyDefinition;
        static Size: PropertyDefinition;
        static GlobalSize: PropertyDefinition;
        static ItemClasses: PropertyDefinition;
        static GlobalItemClasses: PropertyDefinition;
        static Importance: PropertyDefinition;
        static GlobalImportance: PropertyDefinition;
        static ItemIds: PropertyDefinition;
        static GlobalItemIds: PropertyDefinition;
        static LastModifiedTime: PropertyDefinition;
        static InstanceKey: PropertyDefinition;
        static Preview: PropertyDefinition;
        static IconIndex: PropertyDefinition;
        static GlobalIconIndex: PropertyDefinition;
        static DraftItemIds: PropertyDefinition;
        static HasIrm: PropertyDefinition;
        static GlobalHasIrm: PropertyDefinition;
        static Instance: ConversationSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class ItemSchema extends ServiceObjectSchema {
        static Id: PropertyDefinition;
        static Body: PropertyDefinition;
        static ItemClass: PropertyDefinition;
        static Subject: PropertyDefinition;
        static MimeContent: PropertyDefinition;
        static ParentFolderId: PropertyDefinition;
        static Sensitivity: PropertyDefinition;
        static Attachments: PropertyDefinition;
        static DateTimeReceived: PropertyDefinition;
        static Size: PropertyDefinition;
        static Categories: PropertyDefinition;
        static Importance: PropertyDefinition;
        static InReplyTo: PropertyDefinition;
        static IsSubmitted: PropertyDefinition;
        static IsAssociated: PropertyDefinition;
        static IsDraft: PropertyDefinition;
        static IsFromMe: PropertyDefinition;
        static IsResend: PropertyDefinition;
        static IsUnmodified: PropertyDefinition;
        static InternetMessageHeaders: PropertyDefinition;
        static DateTimeSent: PropertyDefinition;
        static DateTimeCreated: PropertyDefinition;
        static AllowedResponseActions: PropertyDefinition;
        static ReminderDueBy: PropertyDefinition;
        static IsReminderSet: PropertyDefinition;
        static ReminderMinutesBeforeStart: PropertyDefinition;
        static DisplayCc: PropertyDefinition;
        static DisplayTo: PropertyDefinition;
        static HasAttachments: PropertyDefinition;
        static Culture: PropertyDefinition;
        static EffectiveRights: PropertyDefinition;
        static LastModifiedName: PropertyDefinition;
        static LastModifiedTime: PropertyDefinition;
        static WebClientReadFormQueryString: PropertyDefinition;
        static WebClientEditFormQueryString: PropertyDefinition;
        static ConversationId: PropertyDefinition;
        static UniqueBody: PropertyDefinition;
        static StoreEntryId: PropertyDefinition;
        static InstanceKey: PropertyDefinition;
        static NormalizedBody: PropertyDefinition;
        static EntityExtractionResult: PropertyDefinition;
        static Flag: PropertyDefinition;
        static PolicyTag: PropertyDefinition;
        static ArchiveTag: PropertyDefinition;
        static RetentionDate: PropertyDefinition;
        static Preview: PropertyDefinition;
        static TextBody: PropertyDefinition;
        static IconIndex: PropertyDefinition;
        static Instance: ItemSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class PostReplySchema extends ServiceObjectSchema {
        static Instance: PostReplySchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class ResponseMessageSchema extends ServiceObjectSchema {
        static Instance: ResponseMessageSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class ResponseObjectSchema extends ServiceObjectSchema {
        static ReferenceItemId: PropertyDefinition;
        static BodyPrefix: PropertyDefinition;
        static Instance: ResponseObjectSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }

    export class SearchFolderSchema extends FolderSchema {
        static SearchParameters: PropertyDefinition;
        static Instance: SearchFolderSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }


    export class AppointmentSchema extends ItemSchema {
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
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class ContactGroupSchema extends ItemSchema {
        static DisplayName: PropertyDefinition;
        static FileAs: PropertyDefinition;
        static Members: PropertyDefinition;
        static Instance: ContactGroupSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class ContactSchema extends ItemSchema {
        static FileAs: PropertyDefinition;
        static FileAsMapping: PropertyDefinition;
        static DisplayName: PropertyDefinition;
        static GivenName: PropertyDefinition;
        static Initials: PropertyDefinition;
        static MiddleName: PropertyDefinition;
        static NickName: PropertyDefinition;
        static CompleteName: PropertyDefinition;
        static CompanyName: PropertyDefinition;
        static EmailAddresses: PropertyDefinition;
        static PhysicalAddresses: PropertyDefinition;
        static PhoneNumbers: PropertyDefinition;
        static AssistantName: PropertyDefinition;
        static Birthday: PropertyDefinition;
        static BusinessHomePage: PropertyDefinition;
        static Children: PropertyDefinition;
        static Companies: PropertyDefinition;
        static ContactSource: PropertyDefinition;
        static Department: PropertyDefinition;
        static Generation: PropertyDefinition;
        static ImAddresses: PropertyDefinition;
        static JobTitle: PropertyDefinition;
        static Manager: PropertyDefinition;
        static Mileage: PropertyDefinition;
        static OfficeLocation: PropertyDefinition;
        static PostalAddressIndex: PropertyDefinition;
        static Profession: PropertyDefinition;
        static SpouseName: PropertyDefinition;
        static Surname: PropertyDefinition;
        static WeddingAnniversary: PropertyDefinition;
        static HasPicture: PropertyDefinition;
        static PhoneticFullName: PropertyDefinition;
        static PhoneticFirstName: PropertyDefinition;
        static PhoneticLastName: PropertyDefinition;
        static Alias: PropertyDefinition;
        static Notes: PropertyDefinition;
        static Photo: PropertyDefinition;
        static UserSMIMECertificate: PropertyDefinition;
        static MSExchangeCertificate: PropertyDefinition;
        static DirectoryId: PropertyDefinition;
        static ManagerMailbox: PropertyDefinition;
        static DirectReports: PropertyDefinition;
        static EmailAddress1: IndexedPropertyDefinition;
        static EmailAddress2: IndexedPropertyDefinition;
        static EmailAddress3: IndexedPropertyDefinition;
        static ImAddress1: IndexedPropertyDefinition;
        static ImAddress2: IndexedPropertyDefinition;
        static ImAddress3: IndexedPropertyDefinition;
        static AssistantPhone: IndexedPropertyDefinition;
        static BusinessFax: IndexedPropertyDefinition;
        static BusinessPhone: IndexedPropertyDefinition;
        static BusinessPhone2: IndexedPropertyDefinition;
        static Callback: IndexedPropertyDefinition;
        static CarPhone: IndexedPropertyDefinition;
        static CompanyMainPhone: IndexedPropertyDefinition;
        static HomeFax: IndexedPropertyDefinition;
        static HomePhone: IndexedPropertyDefinition;
        static HomePhone2: IndexedPropertyDefinition;
        static Isdn: IndexedPropertyDefinition;
        static MobilePhone: IndexedPropertyDefinition;
        static OtherFax: IndexedPropertyDefinition;
        static OtherTelephone: IndexedPropertyDefinition;
        static Pager: IndexedPropertyDefinition;
        static PrimaryPhone: IndexedPropertyDefinition;
        static RadioPhone: IndexedPropertyDefinition;
        static Telex: IndexedPropertyDefinition;
        static TtyTddPhone: IndexedPropertyDefinition;
        static BusinessAddressStreet: IndexedPropertyDefinition;
        static BusinessAddressCity: IndexedPropertyDefinition;
        static BusinessAddressState: IndexedPropertyDefinition;
        static BusinessAddressCountryOrRegion: IndexedPropertyDefinition;
        static BusinessAddressPostalCode: IndexedPropertyDefinition;
        static HomeAddressStreet: IndexedPropertyDefinition;
        static HomeAddressCity: IndexedPropertyDefinition;
        static HomeAddressState: IndexedPropertyDefinition;
        static HomeAddressCountryOrRegion: IndexedPropertyDefinition;
        static HomeAddressPostalCode: IndexedPropertyDefinition;
        static OtherAddressStreet: IndexedPropertyDefinition;
        static OtherAddressCity: IndexedPropertyDefinition;
        static OtherAddressState: IndexedPropertyDefinition;
        static OtherAddressCountryOrRegion: IndexedPropertyDefinition;
        static OtherAddressPostalCode: IndexedPropertyDefinition;
        static Instance: ContactSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class EmailMessageSchema extends ItemSchema {
        static ToRecipients: PropertyDefinition;
        static BccRecipients: PropertyDefinition;
        static CcRecipients: PropertyDefinition;
        static ConversationIndex: PropertyDefinition;
        static ConversationTopic: PropertyDefinition;
        static From: PropertyDefinition;
        static IsDeliveryReceiptRequested: PropertyDefinition;
        static IsRead: PropertyDefinition;
        static IsReadReceiptRequested: PropertyDefinition;
        static IsResponseRequested: PropertyDefinition;
        static InternetMessageId: PropertyDefinition;
        static References: PropertyDefinition;
        static ReplyTo: PropertyDefinition;
        static Sender: PropertyDefinition;
        static ReceivedBy: PropertyDefinition;
        static ReceivedRepresenting: PropertyDefinition;
        static ApprovalRequestData: PropertyDefinition;
        static VotingInformation: PropertyDefinition;
        static Instance: EmailMessageSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class PostItemSchema extends ItemSchema {
        static ConversationIndex: PropertyDefinition;
        static ConversationTopic: PropertyDefinition;
        static From: PropertyDefinition;
        static InternetMessageId: PropertyDefinition;
        static IsRead: PropertyDefinition;
        static PostedTime: PropertyDefinition;
        static References: PropertyDefinition;
        static Sender: PropertyDefinition;
        static Instance: PostItemSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class TaskSchema extends ItemSchema {
        static ActualWork: PropertyDefinition;
        static AssignedTime: PropertyDefinition;
        static BillingInformation: PropertyDefinition;
        static ChangeCount: PropertyDefinition;
        static Companies: PropertyDefinition;
        static CompleteDate: PropertyDefinition;
        static Contacts: PropertyDefinition;
        static DelegationState: PropertyDefinition;
        static Delegator: PropertyDefinition;
        static DueDate: PropertyDefinition;
        static Mode: PropertyDefinition;
        static IsComplete: PropertyDefinition;
        static IsRecurring: PropertyDefinition;
        static IsTeamTask: PropertyDefinition;
        static Mileage: PropertyDefinition;
        static Owner: PropertyDefinition;
        static PercentComplete: PropertyDefinition;
        static Recurrence: PropertyDefinition;
        static StartDate: PropertyDefinition;
        static Status: PropertyDefinition;
        static StatusDescription: PropertyDefinition;
        static TotalWork: PropertyDefinition;
        static Instance: TaskSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }

    export class MeetingMessageSchema extends EmailMessageSchema {
        static AssociatedAppointmentId: PropertyDefinition;
        static IsDelegated: PropertyDefinition;
        static IsOutOfDate: PropertyDefinition;
        static HasBeenProcessed: PropertyDefinition;
        static ResponseType: PropertyDefinition;
        static ICalUid: PropertyDefinition;
        static ICalRecurrenceId: PropertyDefinition;
        static ICalDateTimeStamp: PropertyDefinition;
        static IsOrganizer: PropertyDefinition;
        static Instance: MeetingMessageSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }

    export class MeetingCancellationSchema extends MeetingMessageSchema {
        static Start: PropertyDefinition;
        static End: PropertyDefinition;
        static Location: PropertyDefinition;
        static AppointmentType: PropertyDefinition;
        static Recurrence: PropertyDefinition;
        static EnhancedLocation: PropertyDefinition;
        static Instance: MeetingCancellationSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class MeetingRequestSchema extends MeetingMessageSchema {
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
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }
    export class MeetingResponseSchema extends MeetingMessageSchema {
        static Start: PropertyDefinition;
        static End: PropertyDefinition;
        static Location: PropertyDefinition;
        static AppointmentType: PropertyDefinition;
        static Recurrence: PropertyDefinition;
        static ProposedStart: PropertyDefinition;
        static ProposedEnd: PropertyDefinition;
        static EnhancedLocation: PropertyDefinition;
        static Instance: MeetingResponseSchema;
        RegisterProperties(): any { throw new Error("Not implemented."); }
    }

}

module Microsoft.Exchange.WebServices.Data.AppointmentSchema {
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
module Microsoft.Exchange.WebServices.Data.MeetingResponseSchema {
    export module FieldUris {
        export var /* static*/ ProposedStart: string = "meeting:ProposedStart";
        export var /* static*/ ProposedEnd: string = "meeting:ProposedEnd";
    }
}
module Microsoft.Exchange.WebServices.Data.MeetingMessageSchema {
    export module FieldUris {
        export var /* static*/ AssociatedCalendarItemId: string = "meeting:AssociatedCalendarItemId";
        export var /* static*/ IsDelegated: string = "meeting:IsDelegated";
        export var /* static*/ IsOutOfDate: string = "meeting:IsOutOfDate";
        export var /* static*/ HasBeenProcessed: string = "meeting:HasBeenProcessed";
        export var /* static*/ ResponseType: string = "meeting:ResponseType";
        export var /* static*/ IsOrganizer: string = "cal:IsOrganizer";
    }
}
module Microsoft.Exchange.WebServices.Data.MeetingRequestSchema {
    export module FieldUris {
        export var /* static*/ MeetingRequestType: string = "meetingRequest:MeetingRequestType";
        export var /* static*/ IntendedFreeBusyStatus: string = "meetingRequest:IntendedFreeBusyStatus";
        export var /* static*/ ChangeHighlights: string = "meetingRequest:ChangeHighlights";
    }
}
