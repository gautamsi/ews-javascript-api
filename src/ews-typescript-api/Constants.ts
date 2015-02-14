module Microsoft.Exchange.WebServices.Autodiscover {
    export module AutodiscoverDnsClient {
        export var private static AutoDiscoverSrvPrefix: string = "_autodiscover._tcp.";
        export var private static SslPort: number = 443;
    }
    export module DirectoryHelper {
        export var private static AutodiscoverMaxScpHops: number = 10;
        export var private static ScpUrlGuidString: string = "77378F46-2C66-4aa9-A6A6-3E7A48B19596";
        export var private static ScpPtrGuidString: string = "67661d7F-8FC4-4fa7-BFAC-E1D7794C1F68";
        export var private static ScpFilterString: string = "(&(objectClass=serviceConnectionPoint)(|(keywords=67661d7F-8FC4-4fa7-BFAC-E1D7794C1F68)(keywords=77378F46-2C66-4aa9-A6A6-3E7A48B19596)))";
    }
    export module OutlookAccount {
        export var private static Settings: string = "settings";
        export var private static RedirectAddr: string = "redirectAddr";
        export var private static RedirectUrl: string = "redirectUrl";
    }
    export module OutlookProtocol {
        export var private static EXCH: string = "EXCH";
        export var private static EXPR: string = "EXPR";
        export var private static WEB: string = "WEB";
    }
}

module Microsoft.Exchange.WebServices.Data {
    export module AlternateId {
        export var static SchemaTypeName: string = "AlternateIdType";
    }
    export module AlternatePublicFolderId {
        export var static SchemaTypeName: string = "AlternatePublicFolderIdType";
    }
    export module AlternatePublicFolderItemId {
        export var static SchemaTypeName: string = "AlternatePublicFolderItemIdType";
    }
    export module Contact {
        export var private static ContactPictureName: string = "ContactPicture.jpg";
    }
    export module GetStreamingEventsRequest {
        export var static HeartbeatFrequencyDefault: number = 45000;
    }
    export module GetUserConfigurationRequest {
        export var private static EnumDelimiter: string = ",";
    }
    export module HangingServiceRequestBase {
        export var private static BufferSize: number = 4096;
    }
    export module JsonNames {
        export var static Events: string = "Events";
        export var static NotificationType: string = "NotificationType";
        export var static OldFolderId: string = "OldFolderId";
        export var static OldItemId: string = "OldItemId";
        export var static PathToExtendedFieldType: string = "ExtendedPropertyUri";
        export var static PathToIndexedFieldType: string = "DictionaryPropertyUri";
        export var static PathToUnindexedFieldType: string = "PropertyUri";
        export var static Path: string = "Path";
        export var static RecurrencePattern: string = "RecurrencePattern";
        export var static RecurrenceRange: string = "RecurrenceRange";
    }
    export module JsonObject {
        export var private static TypeAttribute: string = "__type";
        export var private static JsonTypeNamespace: string = "Exchange";
        export var static JsonValueString: string = "Value";
    }
    export module JsonTokenizer {
        export var private static JsonStringRegExCode: string = ""([^\\"]|\\"|\\\\|\\/|\\b|\\f|\\n|\\r|\\t|\\u[\da - fA - F]{4 }) * "";
        export var private static JsonNumberRegExCode: string = "-?\d+(.\d+)?([eE][+-]?\d+)?";
        export var private static JsonBooleanRegExCode: string = "(true|false)";
        export var private static JsonNullRegExCode: string = "null";
        export var private static JsonOpenObjectRegExCode: string = "\{";
        export var private static JsonCloseObjectRegExCode: string = "\}";
        export var private static JsonOpenArrayRegExCode: string = "\[";
        export var private static JsonCloseArrayRegExCode: string = "\]";
        export var private static JsonColonRegExCode: string = "\:";
        export var private static JsonCommaRegExCode: string = "\,";
    }
    export module JsonWriter {
        export var private static Indentation: string = "  ";
    }
    export module MapiTypeConverter {
        export var private static UtcDataTimeStyles: System.Globalization.DateTimeStyles = AdjustToUniversal, AssumeUniversal;
    }
    export module OAuthCredentials {
        export var private static BearerAuthenticationType: string = "Bearer";
    }
    export module PartnerTokenCredentials {
        export var private static WsSecuritySymmetricKeyPathSuffix: string = "/wssecurity/symmetrickey";
    }
    export module SecurityTimestamp {
        export var static DefaultTimestampValidityDurationString: string = "00:05:00";
        export var static DefaultFormat: string = "yyyy-MM-ddTHH:mm:ss.fffZ";
    }
    export module UserConfiguration {
        export var private static ObjectVersion: Microsoft.Exchange.WebServices.Data.ExchangeVersion = Exchange2010;
        export var private static PropertiesAvailableForNewObject: Microsoft.Exchange.WebServices.Data.UserConfigurationProperties = Dictionary, XmlData, BinaryData;
        export var private static NoProperties: Microsoft.Exchange.WebServices.Data.UserConfigurationProperties = 0;
    }
    export module WindowsLiveCredentials {
        export var static XmlEncNamespace: string = "http://www.w3.org/2001/04/xmlenc#";
        export var static WindowsLiveSoapNamespacePrefix: string = "S";
        export var static RequestSecurityTokenResponseCollectionElementName: string = "RequestSecurityTokenResponseCollection";
        export var static RequestSecurityTokenResponseElementName: string = "RequestSecurityTokenResponse";
        export var static EncryptedDataElementName: string = "EncryptedData";
        export var static PpElementName: string = "pp";
        export var static ReqstatusElementName: string = "reqstatus";
        export var static SuccessfulReqstatus: string = "0x0";
        export var static XmlSignatureReference: string = "_EWSTKREF";
    }
    export module X509CertificateCredentials {
        export var private static BinarySecurityTokenFormat: string = "<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="{0}">{1}</wsse:BinarySecurityToken>";
		export var private static KeyInfoClauseFormat: string = "<wsse:SecurityTokenReference xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" ><wsse:Reference URI="#{0}" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" /></wsse:SecurityTokenReference>";
		export var private static WsSecurityX509CertPathSuffix: string = "/wssecurity/x509cert";
    }
}
module Microsoft.Exchange.WebServices.Data.AppointmentSchema {
    export module FieldUris {
        export var static Start: string = "calendar:Start";
        export var static End: string = "calendar:End";
        export var static OriginalStart: string = "calendar:OriginalStart";
        export var static IsAllDayEvent: string = "calendar:IsAllDayEvent";
        export var static LegacyFreeBusyStatus: string = "calendar:LegacyFreeBusyStatus";
        export var static Location: string = "calendar:Location";
        export var static When: string = "calendar:When";
        export var static IsMeeting: string = "calendar:IsMeeting";
        export var static IsCancelled: string = "calendar:IsCancelled";
        export var static IsRecurring: string = "calendar:IsRecurring";
        export var static MeetingRequestWasSent: string = "calendar:MeetingRequestWasSent";
        export var static IsResponseRequested: string = "calendar:IsResponseRequested";
        export var static CalendarItemType: string = "calendar:CalendarItemType";
        export var static MyResponseType: string = "calendar:MyResponseType";
        export var static Organizer: string = "calendar:Organizer";
        export var static RequiredAttendees: string = "calendar:RequiredAttendees";
        export var static OptionalAttendees: string = "calendar:OptionalAttendees";
        export var static Resources: string = "calendar:Resources";
        export var static ConflictingMeetingCount: string = "calendar:ConflictingMeetingCount";
        export var static AdjacentMeetingCount: string = "calendar:AdjacentMeetingCount";
        export var static ConflictingMeetings: string = "calendar:ConflictingMeetings";
        export var static AdjacentMeetings: string = "calendar:AdjacentMeetings";
        export var static Duration: string = "calendar:Duration";
        export var static TimeZone: string = "calendar:TimeZone";
        export var static AppointmentReplyTime: string = "calendar:AppointmentReplyTime";
        export var static AppointmentSequenceNumber: string = "calendar:AppointmentSequenceNumber";
        export var static AppointmentState: string = "calendar:AppointmentState";
        export var static Recurrence: string = "calendar:Recurrence";
        export var static FirstOccurrence: string = "calendar:FirstOccurrence";
        export var static LastOccurrence: string = "calendar:LastOccurrence";
        export var static ModifiedOccurrences: string = "calendar:ModifiedOccurrences";
        export var static DeletedOccurrences: string = "calendar:DeletedOccurrences";
        export var static MeetingTimeZone: string = "calendar:MeetingTimeZone";
        export var static StartTimeZone: string = "calendar:StartTimeZone";
        export var static EndTimeZone: string = "calendar:EndTimeZone";
        export var static ConferenceType: string = "calendar:ConferenceType";
        export var static AllowNewTimeProposal: string = "calendar:AllowNewTimeProposal";
        export var static IsOnlineMeeting: string = "calendar:IsOnlineMeeting";
        export var static MeetingWorkspaceUrl: string = "calendar:MeetingWorkspaceUrl";
        export var static NetShowUrl: string = "calendar:NetShowUrl";
        export var static Uid: string = "calendar:UID";
        export var static RecurrenceId: string = "calendar:RecurrenceId";
        export var static DateTimeStamp: string = "calendar:DateTimeStamp";
        export var static EnhancedLocation: string = "calendar:EnhancedLocation";
        export var static JoinOnlineMeetingUrl: string = "calendar:JoinOnlineMeetingUrl";
        export var static OnlineMeetingSettings: string = "calendar:OnlineMeetingSettings";
    }
}
module Microsoft.Exchange.WebServices.Data.ContactGroupSchema {
    export module FieldUris {
        export var static Members: string = "distributionlist:Members";
    }
}
module Microsoft.Exchange.WebServices.Data.ContactSchema {
    export module FieldUris {
        export var static FileAs: string = "contacts:FileAs";
        export var static FileAsMapping: string = "contacts:FileAsMapping";
        export var static DisplayName: string = "contacts:DisplayName";
        export var static GivenName: string = "contacts:GivenName";
        export var static Initials: string = "contacts:Initials";
        export var static MiddleName: string = "contacts:MiddleName";
        export var static NickName: string = "contacts:Nickname";
        export var static CompleteName: string = "contacts:CompleteName";
        export var static CompanyName: string = "contacts:CompanyName";
        export var static EmailAddress: string = "contacts:EmailAddress";
        export var static EmailAddresses: string = "contacts:EmailAddresses";
        export var static PhysicalAddresses: string = "contacts:PhysicalAddresses";
        export var static PhoneNumber: string = "contacts:PhoneNumber";
        export var static PhoneNumbers: string = "contacts:PhoneNumbers";
        export var static AssistantName: string = "contacts:AssistantName";
        export var static Birthday: string = "contacts:Birthday";
        export var static BusinessHomePage: string = "contacts:BusinessHomePage";
        export var static Children: string = "contacts:Children";
        export var static Companies: string = "contacts:Companies";
        export var static ContactSource: string = "contacts:ContactSource";
        export var static Department: string = "contacts:Department";
        export var static Generation: string = "contacts:Generation";
        export var static ImAddress: string = "contacts:ImAddress";
        export var static ImAddresses: string = "contacts:ImAddresses";
        export var static JobTitle: string = "contacts:JobTitle";
        export var static Manager: string = "contacts:Manager";
        export var static Mileage: string = "contacts:Mileage";
        export var static OfficeLocation: string = "contacts:OfficeLocation";
        export var static PhysicalAddressCity: string = "contacts:PhysicalAddress:City";
        export var static PhysicalAddressCountryOrRegion: string = "contacts:PhysicalAddress:CountryOrRegion";
        export var static PhysicalAddressState: string = "contacts:PhysicalAddress:State";
        export var static PhysicalAddressStreet: string = "contacts:PhysicalAddress:Street";
        export var static PhysicalAddressPostalCode: string = "contacts:PhysicalAddress:PostalCode";
        export var static PostalAddressIndex: string = "contacts:PostalAddressIndex";
        export var static Profession: string = "contacts:Profession";
        export var static SpouseName: string = "contacts:SpouseName";
        export var static Surname: string = "contacts:Surname";
        export var static WeddingAnniversary: string = "contacts:WeddingAnniversary";
        export var static HasPicture: string = "contacts:HasPicture";
        export var static PhoneticFullName: string = "contacts:PhoneticFullName";
        export var static PhoneticFirstName: string = "contacts:PhoneticFirstName";
        export var static PhoneticLastName: string = "contacts:PhoneticLastName";
        export var static Alias: string = "contacts:Alias";
        export var static Notes: string = "contacts:Notes";
        export var static Photo: string = "contacts:Photo";
        export var static UserSMIMECertificate: string = "contacts:UserSMIMECertificate";
        export var static MSExchangeCertificate: string = "contacts:MSExchangeCertificate";
        export var static DirectoryId: string = "contacts:DirectoryId";
        export var static ManagerMailbox: string = "contacts:ManagerMailbox";
        export var static DirectReports: string = "contacts:DirectReports";
    }
}
module Microsoft.Exchange.WebServices.Data.ConversationSchema {
    export module FieldUris {
        export var static ConversationId: string = "conversation:ConversationId";
        export var static ConversationTopic: string = "conversation:ConversationTopic";
        export var static UniqueRecipients: string = "conversation:UniqueRecipients";
        export var static GlobalUniqueRecipients: string = "conversation:GlobalUniqueRecipients";
        export var static UniqueUnreadSenders: string = "conversation:UniqueUnreadSenders";
        export var static GlobalUniqueUnreadSenders: string = "conversation:GlobalUniqueUnreadSenders";
        export var static UniqueSenders: string = "conversation:UniqueSenders";
        export var static GlobalUniqueSenders: string = "conversation:GlobalUniqueSenders";
        export var static LastDeliveryTime: string = "conversation:LastDeliveryTime";
        export var static GlobalLastDeliveryTime: string = "conversation:GlobalLastDeliveryTime";
        export var static Categories: string = "conversation:Categories";
        export var static GlobalCategories: string = "conversation:GlobalCategories";
        export var static FlagStatus: string = "conversation:FlagStatus";
        export var static GlobalFlagStatus: string = "conversation:GlobalFlagStatus";
        export var static HasAttachments: string = "conversation:HasAttachments";
        export var static GlobalHasAttachments: string = "conversation:GlobalHasAttachments";
        export var static MessageCount: string = "conversation:MessageCount";
        export var static GlobalMessageCount: string = "conversation:GlobalMessageCount";
        export var static UnreadCount: string = "conversation:UnreadCount";
        export var static GlobalUnreadCount: string = "conversation:GlobalUnreadCount";
        export var static Size: string = "conversation:Size";
        export var static GlobalSize: string = "conversation:GlobalSize";
        export var static ItemClasses: string = "conversation:ItemClasses";
        export var static GlobalItemClasses: string = "conversation:GlobalItemClasses";
        export var static Importance: string = "conversation:Importance";
        export var static GlobalImportance: string = "conversation:GlobalImportance";
        export var static ItemIds: string = "conversation:ItemIds";
        export var static GlobalItemIds: string = "conversation:GlobalItemIds";
        export var static LastModifiedTime: string = "conversation:LastModifiedTime";
        export var static InstanceKey: string = "conversation:InstanceKey";
        export var static Preview: string = "conversation:Preview";
        export var static IconIndex: string = "conversation:IconIndex";
        export var static GlobalIconIndex: string = "conversation:GlobalIconIndex";
        export var static DraftItemIds: string = "conversation:DraftItemIds";
        export var static HasIrm: string = "conversation:HasIrm";
        export var static GlobalHasIrm: string = "conversation:GlobalHasIrm";
    }
}
module Microsoft.Exchange.WebServices.Data.EmailMessageSchema {
    export module FieldUris {
        export var static ConversationIndex: string = "message:ConversationIndex";
        export var static ConversationTopic: string = "message:ConversationTopic";
        export var static InternetMessageId: string = "message:InternetMessageId";
        export var static IsRead: string = "message:IsRead";
        export var static IsResponseRequested: string = "message:IsResponseRequested";
        export var static IsReadReceiptRequested: string = "message:IsReadReceiptRequested";
        export var static IsDeliveryReceiptRequested: string = "message:IsDeliveryReceiptRequested";
        export var static References: string = "message:References";
        export var static ReplyTo: string = "message:ReplyTo";
        export var static From: string = "message:From";
        export var static Sender: string = "message:Sender";
        export var static ToRecipients: string = "message:ToRecipients";
        export var static CcRecipients: string = "message:CcRecipients";
        export var static BccRecipients: string = "message:BccRecipients";
        export var static ReceivedBy: string = "message:ReceivedBy";
        export var static ReceivedRepresenting: string = "message:ReceivedRepresenting";
        export var static ApprovalRequestData: string = "message:ApprovalRequestData";
        export var static VotingInformation: string = "message:VotingInformation";
    }
}
module Microsoft.Exchange.WebServices.Data.FolderSchema {
    export module FieldUris {
        export var static FolderId: string = "folder:FolderId";
        export var static ParentFolderId: string = "folder:ParentFolderId";
        export var static DisplayName: string = "folder:DisplayName";
        export var static UnreadCount: string = "folder:UnreadCount";
        export var static TotalCount: string = "folder:TotalCount";
        export var static ChildFolderCount: string = "folder:ChildFolderCount";
        export var static FolderClass: string = "folder:FolderClass";
        export var static ManagedFolderInformation: string = "folder:ManagedFolderInformation";
        export var static EffectiveRights: string = "folder:EffectiveRights";
        export var static PermissionSet: string = "folder:PermissionSet";
        export var static PolicyTag: string = "folder:PolicyTag";
        export var static ArchiveTag: string = "folder:ArchiveTag";
        export var static DistinguishedFolderId: string = "folder:DistinguishedFolderId";
    }
}
module Microsoft.Exchange.WebServices.Data.ItemSchema {
    export module FieldUris {
        export var static ItemId: string = "item:ItemId";
        export var static ParentFolderId: string = "item:ParentFolderId";
        export var static ItemClass: string = "item:ItemClass";
        export var static MimeContent: string = "item:MimeContent";
        export var static Attachments: string = "item:Attachments";
        export var static Subject: string = "item:Subject";
        export var static DateTimeReceived: string = "item:DateTimeReceived";
        export var static Size: string = "item:Size";
        export var static Categories: string = "item:Categories";
        export var static HasAttachments: string = "item:HasAttachments";
        export var static Importance: string = "item:Importance";
        export var static InReplyTo: string = "item:InReplyTo";
        export var static InternetMessageHeaders: string = "item:InternetMessageHeaders";
        export var static IsAssociated: string = "item:IsAssociated";
        export var static IsDraft: string = "item:IsDraft";
        export var static IsFromMe: string = "item:IsFromMe";
        export var static IsResend: string = "item:IsResend";
        export var static IsSubmitted: string = "item:IsSubmitted";
        export var static IsUnmodified: string = "item:IsUnmodified";
        export var static DateTimeSent: string = "item:DateTimeSent";
        export var static DateTimeCreated: string = "item:DateTimeCreated";
        export var static Body: string = "item:Body";
        export var static ResponseObjects: string = "item:ResponseObjects";
        export var static Sensitivity: string = "item:Sensitivity";
        export var static ReminderDueBy: string = "item:ReminderDueBy";
        export var static ReminderIsSet: string = "item:ReminderIsSet";
        export var static ReminderMinutesBeforeStart: string = "item:ReminderMinutesBeforeStart";
        export var static DisplayTo: string = "item:DisplayTo";
        export var static DisplayCc: string = "item:DisplayCc";
        export var static Culture: string = "item:Culture";
        export var static EffectiveRights: string = "item:EffectiveRights";
        export var static LastModifiedName: string = "item:LastModifiedName";
        export var static LastModifiedTime: string = "item:LastModifiedTime";
        export var static WebClientReadFormQueryString: string = "item:WebClientReadFormQueryString";
        export var static WebClientEditFormQueryString: string = "item:WebClientEditFormQueryString";
        export var static ConversationId: string = "item:ConversationId";
        export var static UniqueBody: string = "item:UniqueBody";
        export var static StoreEntryId: string = "item:StoreEntryId";
        export var static InstanceKey: string = "item:InstanceKey";
        export var static NormalizedBody: string = "item:NormalizedBody";
        export var static EntityExtractionResult: string = "item:EntityExtractionResult";
        export var static Flag: string = "item:Flag";
        export var static PolicyTag: string = "item:PolicyTag";
        export var static ArchiveTag: string = "item:ArchiveTag";
        export var static RetentionDate: string = "item:RetentionDate";
        export var static Preview: string = "item:Preview";
        export var static TextBody: string = "item:TextBody";
        export var static IconIndex: string = "item:IconIndex";
    }
}
module Microsoft.Exchange.WebServices.Data.MeetingMessageSchema {
    export module FieldUris {
        export var static AssociatedCalendarItemId: string = "meeting:AssociatedCalendarItemId";
        export var static IsDelegated: string = "meeting:IsDelegated";
        export var static IsOutOfDate: string = "meeting:IsOutOfDate";
        export var static HasBeenProcessed: string = "meeting:HasBeenProcessed";
        export var static ResponseType: string = "meeting:ResponseType";
        export var static IsOrganizer: string = "cal:IsOrganizer";
    }
}
module Microsoft.Exchange.WebServices.Data.MeetingRequestSchema {
    export module FieldUris {
        export var static MeetingRequestType: string = "meetingRequest:MeetingRequestType";
        export var static IntendedFreeBusyStatus: string = "meetingRequest:IntendedFreeBusyStatus";
        export var static ChangeHighlights: string = "meetingRequest:ChangeHighlights";
    }
}
module Microsoft.Exchange.WebServices.Data.MeetingResponseSchema {
    export module FieldUris {
        export var static ProposedStart: string = "meeting:ProposedStart";
        export var static ProposedEnd: string = "meeting:ProposedEnd";
    }
}
module Microsoft.Exchange.WebServices.Data.PhysicalAddressEntry {
    export module PhysicalAddressSchema {
        export var static Street: string = "Street";
        export var static City: string = "City";
        export var static State: string = "State";
        export var static CountryOrRegion: string = "CountryOrRegion";
        export var static PostalCode: string = "PostalCode";
    }
}
module Microsoft.Exchange.WebServices.Data.PostItemSchema {
    export module FieldUris {
        export var static PostedTime: string = "postitem:PostedTime";
    }
}
module Microsoft.Exchange.WebServices.Data.SearchFolderSchema {
    export module FieldUris {
        export var static SearchParameters: string = "folder:SearchParameters";
    }
}
module Microsoft.Exchange.WebServices.Data.TaskSchema {
    export module FieldUris {
        export var static ActualWork: string = "task:ActualWork";
        export var static AssignedTime: string = "task:AssignedTime";
        export var static BillingInformation: string = "task:BillingInformation";
        export var static ChangeCount: string = "task:ChangeCount";
        export var static Companies: string = "task:Companies";
        export var static CompleteDate: string = "task:CompleteDate";
        export var static Contacts: string = "task:Contacts";
        export var static DelegationState: string = "task:DelegationState";
        export var static Delegator: string = "task:Delegator";
        export var static DueDate: string = "task:DueDate";
        export var static IsAssignmentEditable: string = "task:IsAssignmentEditable";
        export var static IsComplete: string = "task:IsComplete";
        export var static IsRecurring: string = "task:IsRecurring";
        export var static IsTeamTask: string = "task:IsTeamTask";
        export var static Mileage: string = "task:Mileage";
        export var static Owner: string = "task:Owner";
        export var static PercentComplete: string = "task:PercentComplete";
        export var static Recurrence: string = "task:Recurrence";
        export var static StartDate: string = "task:StartDate";
        export var static Status: string = "task:Status";
        export var static StatusDescription: string = "task:StatusDescription";
        export var static TotalWork: string = "task:TotalWork";
    }
}
module Microsoft.Exchange.WebServices.Dns {
    export module DnsClient {
        export var private static Win32Success: number = 0;
    }
    export module DnsNativeMethods {
        export var private static DNSAPI: string = "dnsapi.dll";
    }
}





