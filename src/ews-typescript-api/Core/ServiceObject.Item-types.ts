module Microsoft.Exchange.WebServices.Data {
    export class Appointment extends Item {
        DefaultSendCancellationsMode: SendCancellationsMode;
        DefaultSendInvitationsMode: SendInvitationsMode;
        DefaultSendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
        Start: Date;
        End: Date;
        OriginalStart: Date;
        IsAllDayEvent: boolean;
        LegacyFreeBusyStatus: LegacyFreeBusyStatus;
        Location: string;
        When: string;
        IsMeeting: boolean;
        IsCancelled: boolean;
        IsRecurring: boolean;
        MeetingRequestWasSent: boolean;
        IsResponseRequested: boolean;
        AppointmentType: AppointmentType;
        MyResponseType: MeetingResponseType;
        Organizer: EmailAddress;
        RequiredAttendees: AttendeeCollection;
        OptionalAttendees: AttendeeCollection;
        Resources: AttendeeCollection;
        ConflictingMeetingCount: number;
        AdjacentMeetingCount: number;
        ConflictingMeetings: ItemCollection<Appointment>;
        AdjacentMeetings: ItemCollection<Appointment>;
        Duration: System.TimeSpan;
        TimeZone: string;
        AppointmentReplyTime: Date;
        AppointmentSequenceNumber: number;
        AppointmentState: number;
        Recurrence: Recurrence;
        FirstOccurrence: OccurrenceInfo;
        LastOccurrence: OccurrenceInfo;
        ModifiedOccurrences: OccurrenceInfoCollection;
        DeletedOccurrences: DeletedOccurrenceInfoCollection;
        StartTimeZone: System.TimeZoneInfo;
        EndTimeZone: System.TimeZoneInfo;
        ConferenceType: number;
        AllowNewTimeProposal: boolean;
        IsOnlineMeeting: boolean;
        MeetingWorkspaceUrl: string;
        NetShowUrl: string;
        ICalUid: string;
        ICalRecurrenceId: Date;
        ICalDateTimeStamp: Date;
        EnhancedLocation: EnhancedLocation;
        JoinOnlineMeetingUrl: string;
        OnlineMeetingSettings: OnlineMeetingSettings;
        Accept(sendResponse: boolean): CalendarActionResults{ throw new Error("Not implemented.");}
        AcceptTentatively(sendResponse: boolean): CalendarActionResults{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Appointment{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): Appointment{ throw new Error("Not implemented.");}
        BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number): Appointment{ throw new Error("Not implemented.");}
        BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number, propertySet: PropertySet): Appointment{ throw new Error("Not implemented.");}
        BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId): Appointment{ throw new Error("Not implemented.");}
        BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId, propertySet: PropertySet): Appointment{ throw new Error("Not implemented.");}
        CancelMeeting(): CalendarActionResults{ throw new Error("Not implemented.");}
        CancelMeeting(cancellationMessageText: string): CalendarActionResults{ throw new Error("Not implemented.");}
        CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage{ throw new Error("Not implemented.");}
        CreateCancelMeetingMessage(): CancelMeetingMessage{ throw new Error("Not implemented.");}
        CreateDeclineMessage(): DeclineMeetingInvitationMessage{ throw new Error("Not implemented.");}
        CreateForward(): ResponseMessage{ throw new Error("Not implemented.");}
        CreateReply(replyAll: boolean): ResponseMessage{ throw new Error("Not implemented.");}
        Decline(sendResponse: boolean): CalendarActionResults{ throw new Error("Not implemented.");}
        Delete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode): any{ throw new Error("Not implemented.");}
        Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): any{ throw new Error("Not implemented.");}
        Forward(bodyPrefix: MessageBody, toRecipients: any): any{ throw new Error("Not implemented.");}
        GetIsCustomDateTimeScopingRequired(): boolean{ throw new Error("Not implemented.");}
        GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
        InternalAccept(tentative: boolean, sendResponse: boolean): CalendarActionResults{ throw new Error("Not implemented.");}
        Reply(bodyPrefix: MessageBody, replyAll: boolean): any{ throw new Error("Not implemented.");}
        Save(destinationFolderName: WellKnownFolderName, sendInvitationsMode: SendInvitationsMode): any{ throw new Error("Not implemented.");}
        Save(destinationFolderId: FolderId, sendInvitationsMode: SendInvitationsMode): any{ throw new Error("Not implemented.");}
        Save(sendInvitationsMode: SendInvitationsMode): any{ throw new Error("Not implemented.");}
        Update(conflictResolutionMode: ConflictResolutionMode, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
    }
    export class Contact extends Item {
        FileAs: string;
        FileAsMapping: FileAsMapping;
        DisplayName: string;
        GivenName: string;
        Initials: string;
        MiddleName: string;
        NickName: string;
        CompleteName: CompleteName;
        CompanyName: string;
        EmailAddresses: EmailAddressDictionary;
        PhysicalAddresses: PhysicalAddressDictionary;
        PhoneNumbers: PhoneNumberDictionary;
        AssistantName: string;
        Birthday: Date;
        BusinessHomePage: string;
        Children: StringList;
        Companies: StringList;
        ContactSource: ContactSource;
        Department: string;
        Generation: string;
        ImAddresses: ImAddressDictionary;
        JobTitle: string;
        Manager: string;
        Mileage: string;
        OfficeLocation: string;
        PostalAddressIndex: PhysicalAddressIndex;
        Profession: string;
        SpouseName: string;
        Surname: string;
        WeddingAnniversary: Date;
        HasPicture: boolean;
        PhoneticFullName: string;
        PhoneticFirstName: string;
        PhoneticLastName: string;
        Alias: string;
        Notes: string;
        DirectoryPhoto: System.Byte[];
        UserSMIMECertificate: System.Byte[][];
        MSExchangeCertificate: System.Byte[][];
        DirectoryId: string;
        ManagerMailbox: EmailAddress;
        DirectReports: EmailAddressCollection;
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Contact{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): Contact{ throw new Error("Not implemented.");}
        GetContactPictureAttachment(): FileAttachment{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
        InternalRemoveContactPicture(): any{ throw new Error("Not implemented.");}
        RemoveContactPicture(): any{ throw new Error("Not implemented.");}
        SetContactPicture(content: System.Byte[]): any{ throw new Error("Not implemented.");}
        SetContactPicture(contentStream: System.IO.Stream): any{ throw new Error("Not implemented.");}
        SetContactPicture(fileName: string): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
    }
    export class ContactGroup extends Item {
        FileAs: string;
        DisplayName: string;
        Members: GroupMemberCollection;
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): ContactGroup{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): ContactGroup{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
        SetSubject(subject: string): any{ throw new Error("Not implemented.");}
    }
    export class EmailMessage extends Item {
        ToRecipients: EmailAddressCollection;
        BccRecipients: EmailAddressCollection;
        CcRecipients: EmailAddressCollection;
        ConversationTopic: string;
        ConversationIndex: System.Byte[];
        From: EmailAddress;
        IsAssociated: boolean;
        IsDeliveryReceiptRequested: boolean;
        IsRead: boolean;
        IsReadReceiptRequested: boolean;
        IsResponseRequested: boolean;
        InternetMessageId: string;
        References: string;
        ReplyTo: EmailAddressCollection;
        Sender: EmailAddress;
        ReceivedBy: EmailAddress;
        ReceivedRepresenting: EmailAddress;
        ApprovalRequestData: ApprovalRequestData;
        VotingInformation: VotingInformation;
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): EmailMessage{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): EmailMessage{ throw new Error("Not implemented.");}
        CreateForward(): ResponseMessage{ throw new Error("Not implemented.");}
        CreateReply(replyAll: boolean): ResponseMessage{ throw new Error("Not implemented.");}
        Forward(bodyPrefix: MessageBody, toRecipients: any): any{ throw new Error("Not implemented.");}
        Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): any{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
        InternalSend(parentFolderId: FolderId, messageDisposition: MessageDisposition): any{ throw new Error("Not implemented.");}
        Reply(bodyPrefix: MessageBody, replyAll: boolean): any{ throw new Error("Not implemented.");}
        Send(): any{ throw new Error("Not implemented.");}
        SendAndSaveCopy(destinationFolderId: FolderId): any{ throw new Error("Not implemented.");}
        SendAndSaveCopy(destinationFolderName: WellKnownFolderName): any{ throw new Error("Not implemented.");}
        SendAndSaveCopy(): any{ throw new Error("Not implemented.");}
        SuppressReadReceipt(): any{ throw new Error("Not implemented.");}
    }
    export class Item extends ServiceObject {
        ParentAttachment: ItemAttachment;
        RootItemId: ItemId;
        IsAttachment: boolean;
        IsNew: boolean;
        Id: ItemId;
        MimeContent: MimeContent;
        ParentFolderId: FolderId;
        Sensitivity: Sensitivity;
        Attachments: AttachmentCollection;
        DateTimeReceived: Date;
        Size: number;
        Categories: StringList;
        Culture: string;
        Importance: Importance;
        InReplyTo: string;
        IsSubmitted: boolean;
        IsAssociated: boolean;
        IsDraft: boolean;
        IsFromMe: boolean;
        IsResend: boolean;
        IsUnmodified: boolean;
        InternetMessageHeaders: InternetMessageHeaderCollection;
        DateTimeSent: Date;
        DateTimeCreated: Date;
        AllowedResponseActions: ResponseActions;
        ReminderDueBy: Date;
        IsReminderSet: boolean;
        ReminderMinutesBeforeStart: number;
        DisplayCc: string;
        DisplayTo: string;
        HasAttachments: boolean;
        Body: MessageBody;
        ItemClass: string;
        Subject: string;
        WebClientReadFormQueryString: string;
        WebClientEditFormQueryString: string;
        ExtendedProperties: ExtendedPropertyCollection;
        EffectiveRights: EffectiveRights;
        LastModifiedName: string;
        LastModifiedTime: Date;
        ConversationId: ConversationId;
        UniqueBody: UniqueBody;
        StoreEntryId: System.Byte[];
        InstanceKey: System.Byte[];
        Flag: Flag;
        NormalizedBody: NormalizedBody;
        EntityExtractionResult: EntityExtractionResult;
        PolicyTag: PolicyTag;
        ArchiveTag: ArchiveTag;
        RetentionDate: Date;
        Preview: string;
        TextBody: TextBody;
        IconIndex: IconIndex;
        DefaultAffectedTaskOccurrences: AffectedTaskOccurrence;
        DefaultSendCancellationsMode: SendCancellationsMode;
        DefaultSendInvitationsMode: SendInvitationsMode;
        DefaultSendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
        private parentAttachment: ItemAttachment;
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Item{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): Item{ throw new Error("Not implemented.");}
        Copy(destinationFolderName: WellKnownFolderName): Item{ throw new Error("Not implemented.");}
        Copy(destinationFolderId: FolderId): Item{ throw new Error("Not implemented.");}
        Delete(deleteMode: DeleteMode): any{ throw new Error("Not implemented.");}
        Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean): any{ throw new Error("Not implemented.");}
        GetExtendedProperties(): ExtendedPropertyCollection{ throw new Error("Not implemented.");}
        GetIdPropertyDefinition(): PropertyDefinition{ throw new Error("Not implemented.");}
        GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
        HasUnprocessedAttachmentChanges(): boolean{ throw new Error("Not implemented.");}
        InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): any{ throw new Error("Not implemented.");}
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): any{ throw new Error("Not implemented.");}
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any;//{ throw new Error("Not implemented.");}
        InternalLoad(propertySet: PropertySet): any{ throw new Error("Not implemented.");}
        InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Item{ throw new Error("Not implemented.");}
        InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Item{ throw new Error("Not implemented.");}
        Move(destinationFolderId: FolderId): Item{ throw new Error("Not implemented.");}
        Move(destinationFolderName: WellKnownFolderName): Item{ throw new Error("Not implemented.");}
        RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean{ throw new Error("Not implemented.");}
        Save(parentFolderId: FolderId): any{ throw new Error("Not implemented.");}
        Save(parentFolderName: WellKnownFolderName): any{ throw new Error("Not implemented.");}
        Save(): any{ throw new Error("Not implemented.");}
        SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): any{ throw new Error("Not implemented.");}
        SetSubject(subject: string): any{ throw new Error("Not implemented.");}
        ThrowIfThisIsAttachment(): any{ throw new Error("Not implemented.");}
        Update(conflictResolutionMode: ConflictResolutionMode, suppressReadReceipts: boolean): any{ throw new Error("Not implemented.");}
        Update(conflictResolutionMode: ConflictResolutionMode): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
    }
    export class Task extends Item {
        ActualWork: number;
        AssignedTime: Date;
        BillingInformation: string;
        ChangeCount: number;
        Companies: StringList;
        CompleteDate: Date;
        Contacts: StringList;
        DelegationState: TaskDelegationState;
        Delegator: string;
        DueDate: Date;
        Mode: TaskMode;
        IsComplete: boolean;
        IsRecurring: boolean;
        IsTeamTask: boolean;
        Mileage: string;
        Owner: string;
        PercentComplete: number;
        Recurrence: Recurrence;
        StartDate: Date;
        Status: TaskStatus;
        StatusDescription: string;
        TotalWork: number;
        DefaultAffectedTaskOccurrences: AffectedTaskOccurrence;
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Task{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): Task{ throw new Error("Not implemented.");}
        DeleteCurrentOccurrence(deleteMode: DeleteMode): any{ throw new Error("Not implemented.");}
        GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
        Update(conflictResolutionMode: ConflictResolutionMode): Task{ throw new Error("Not implemented.");}
    }
    export class PostItem extends Item {
        ConversationIndex: System.Byte[];
        ConversationTopic: string;
        From: EmailAddress;
        InternetMessageId: string;
        IsRead: boolean;
        PostedTime: Date;
        References: string;
        Sender: EmailAddress;
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): PostItem{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): PostItem{ throw new Error("Not implemented.");}
        CreateForward(): ResponseMessage{ throw new Error("Not implemented.");}
        CreatePostReply(): PostReply{ throw new Error("Not implemented.");}
        CreateReply(replyAll: boolean): ResponseMessage{ throw new Error("Not implemented.");}
        Forward(bodyPrefix: MessageBody, toRecipients: any): any{ throw new Error("Not implemented.");}
        Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): any{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
        PostReply(bodyPrefix: MessageBody): any{ throw new Error("Not implemented.");}
        Reply(bodyPrefix: MessageBody, replyAll: boolean): any{ throw new Error("Not implemented.");}
    }


    export class MeetingMessage extends EmailMessage {
        AssociatedAppointmentId: ItemId;
        IsDelegated: boolean;
        IsOutOfDate: boolean;
        HasBeenProcessed: boolean;
        IsOrganizer: boolean;
        ResponseType: MeetingResponseType;
        ICalUid: string;
        ICalRecurrenceId: Date;
        ICalDateTimeStamp: Date;
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): MeetingMessage{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): MeetingMessage{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
    }
    export class MeetingCancellation extends MeetingMessage {
        Start: Date;
        End: Date;
        Location: string;
        Recurrence: Recurrence;
        EnhancedLocation: EnhancedLocation;
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): MeetingCancellation{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): MeetingCancellation{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
        RemoveMeetingFromCalendar(): CalendarActionResults{ throw new Error("Not implemented.");}
    }
    export class MeetingRequest extends MeetingMessage {
        MeetingRequestType: MeetingRequestType;
        IntendedFreeBusyStatus: LegacyFreeBusyStatus;
        ChangeHighlights: ChangeHighlights;
        EnhancedLocation: EnhancedLocation;
        Start: Date;
        End: Date;
        OriginalStart: Date;
        IsAllDayEvent: boolean;
        LegacyFreeBusyStatus: LegacyFreeBusyStatus;
        Location: string;
        When: string;
        IsMeeting: boolean;
        IsCancelled: boolean;
        IsRecurring: boolean;
        MeetingRequestWasSent: boolean;
        AppointmentType: AppointmentType;
        MyResponseType: MeetingResponseType;
        Organizer: EmailAddress;
        RequiredAttendees: AttendeeCollection;
        OptionalAttendees: AttendeeCollection;
        Resources: AttendeeCollection;
        ConflictingMeetingCount: number;
        AdjacentMeetingCount: number;
        ConflictingMeetings: ItemCollection<Appointment>;
        AdjacentMeetings: ItemCollection<Appointment>;
        Duration: System.TimeSpan;
        TimeZone: string;
        AppointmentReplyTime: Date;
        AppointmentSequenceNumber: number;
        AppointmentState: number;
        Recurrence: Recurrence;
        FirstOccurrence: OccurrenceInfo;
        LastOccurrence: OccurrenceInfo;
        ModifiedOccurrences: OccurrenceInfoCollection;
        DeletedOccurrences: DeletedOccurrenceInfoCollection;
        StartTimeZone: System.TimeZoneInfo;
        EndTimeZone: System.TimeZoneInfo;
        ConferenceType: number;
        AllowNewTimeProposal: boolean;
        IsOnlineMeeting: boolean;
        MeetingWorkspaceUrl: string;
        NetShowUrl: string;
        Accept(sendResponse: boolean): CalendarActionResults{ throw new Error("Not implemented.");}
        AcceptTentatively(sendResponse: boolean): CalendarActionResults{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): MeetingRequest{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): MeetingRequest{ throw new Error("Not implemented.");}
        CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage{ throw new Error("Not implemented.");}
        CreateDeclineMessage(): DeclineMeetingInvitationMessage{ throw new Error("Not implemented.");}
        Decline(sendResponse: boolean): CalendarActionResults{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
        InternalAccept(tentative: boolean, sendResponse: boolean): CalendarActionResults{ throw new Error("Not implemented.");}
    }
    export class MeetingResponse extends MeetingMessage {
        Start: Date;
        End: Date;
        Location: string;
        Recurrence: Recurrence;
        ProposedStart: Date;
        ProposedEnd: Date;
        EnhancedLocation: EnhancedLocation;
        Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): MeetingResponse{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, id: ItemId): MeetingResponse{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSchema(): ServiceObjectSchema{ throw new Error("Not implemented.");}
    }

}