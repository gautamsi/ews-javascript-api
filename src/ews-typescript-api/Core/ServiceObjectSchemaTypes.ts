module Microsoft.Exchange.WebServices.Data {
    export class ServiceObjectSchema {
        //todo: fixing difficulties with following c# code.
        //using PropertyDefinitionDictionary = LazyMember < System.Collections.Generic.Dictionary<string, PropertyDefinitionBase>>;
        //using SchemaTypeList = LazyMember < System.Collections.Generic.List < System.Type>>;
        get FirstClassProperties(): PropertyDefinition[] { return this.firstClassProperties; }//System.Collections.Generic.List<PropertyDefinition>;
        get FirstClassSummaryProperties(): PropertyDefinition[] { return this.firstClassSummaryProperties; }//System.Collections.Generic.List<PropertyDefinition>;
        get IndexedProperties(): IndexedPropertyDefinition[] { return this.indexedProperties; }//System.Collections.Generic.List<IndexedPropertyDefinition>;
        private properties: StringPropertyDefinitionBaseDictionary<string, PropertyDefinition> = new StringPropertyDefinitionBaseDictionary<string, PropertyDefinition>();// System.Collections.Generic.Dictionary<TKey, TValue>;
        private visibleProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
        private firstClassProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
        private firstClassSummaryProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
        private indexedProperties: IndexedPropertyDefinition[] = [];//System.Collections.Generic.List<IndexedPropertyDefinition>;
        private static lockObject: any = {};
        private static allSchemaTypes: string[] = function () { //SchemaTypeList - LazyMember<T>; - using typenames[] temporarily 
            var typeList: string[] = [];
            typeList.push("AppointmentSchema");
            typeList.push("CalendarResponseObjectSchema");
            typeList.push("CancelMeetingMessageSchema");
            typeList.push("ContactGroupSchema");
            typeList.push("ContactSchema");
            typeList.push("ConversationSchema");
            typeList.push("EmailMessageSchema");
            typeList.push("FolderSchema");
            typeList.push("ItemSchema");
            typeList.push("MeetingMessageSchema");
            typeList.push("MeetingRequestSchema");
            typeList.push("MeetingCancellationSchema");
            typeList.push("MeetingResponseSchema");
            typeList.push("PostItemSchema");
            typeList.push("PostReplySchema");
            typeList.push("ResponseMessageSchema");
            typeList.push("ResponseObjectSchema");
            typeList.push("ServiceObjectSchema");
            typeList.push("SearchFolderSchema");
            typeList.push("TaskSchema");

            return typeList;
        } ();
        private static allSchemaProperties = function () {// string[] //LazyMember<T>;
            var propDefDictionary: StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase> = new StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase>();
            for (var item in ServiceObjectSchema.allSchemaTypes) {
                var type: string = item;
                ServiceObjectSchema.AddSchemaPropertiesToDictionary(type, propDefDictionary);
            }
            return propDefDictionary;
        } ();
        static ExtendedProperties: PropertyDefinition;

        constructor() {
            this.RegisterProperties();
        }


        static AddSchemaPropertiesToDictionary(type: string /*System.Type*/, propDefDictionary: StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase> /*System.Collections.Generic.Dictionary<TKey, TValue>*/): void {
            ServiceObjectSchema.ForeachPublicStaticPropertyFieldInType(
                type,
                (propertyDefinition: PropertyDefinition, fieldName: string) => {
                    // Some property definitions descend from ServiceObjectPropertyDefinition but don't have
                    // a Uri, like ExtendedProperties. Ignore them.
                    if (!string.IsNullOrEmpty(propertyDefinition.Uri)) {
                        var existingPropertyDefinition: IOutParam<PropertyDefinitionBase> = { value: null };
                        if (propDefDictionary.tryGetValue(propertyDefinition.Uri, existingPropertyDefinition)) {
                            EwsUtilities.Assert(
                                existingPropertyDefinition == propertyDefinition,
                                "Schema.allSchemaProperties.delegate",
                                string.Format("There are at least two distinct property definitions with the following URI: {0}", propertyDefinition.Uri));
                        }
                        else {
                            propDefDictionary.add(propertyDefinition.Uri, propertyDefinition);

                            // The following is a "generic hack" to register properties that are not public and
                            // thus not returned by the above GetFields call. It is currently solely used to register
                            // the MeetingTimeZone property.
                            var associatedInternalProperties: PropertyDefinition[] = propertyDefinition.GetAssociatedInternalProperties();

                            for (var item in associatedInternalProperties) {
                                var associatedInternalProperty: PropertyDefinition = item;
                                propDefDictionary.add(associatedInternalProperty.Uri, associatedInternalProperty);
                            }
                        }
                    }
                });
        }
        private static AddSchemaPropertyNamesToDictionary(type: string /*System.Type*/, propertyNameDictionary: PropDictionary<PropertyDefinition, string>  /*System.Collections.Generic.Dictionary<TKey, TValue>*/): void {
            ServiceObjectSchema.ForeachPublicStaticPropertyFieldInType(
                type,
                (propertyDefinition: PropertyDefinition, fieldName: string) =>
                { propertyNameDictionary.add(propertyDefinition, fieldName); });
        }
        static FindPropertyDefinition(uri: string): PropertyDefinitionBase {
            return ServiceObjectSchema.allSchemaProperties.get(uri);
        }
        static ForeachPublicStaticPropertyFieldInType(type: string /*System.Type*/, propFieldDelegate: (propertyDefinition: PropertyDefinition, fieldInfo: any /*FieldInfo*/) => void /*ServiceObjectSchema.PropertyFieldInfoDelegate*/): void {
            //FieldInfo[]fieldInfos = type.GetFields(BindingFlags.Static | BindingFlags.Public | BindingFlags.DeclaredOnly);
            var obj = TypeSystem.GetObjectByClassName("Microsoft.Exchange.WebServices.Data." + type);
            if (obj || obj !=null)
            { 
                for (var s in obj) {
                    if (typeof (obj[s]) != "function" && obj[s] instanceof (PropertyDefinition)) {
                        var propertyDefinition = <PropertyDefinition> obj[s];
                        propFieldDelegate(propertyDefinition, s);
                    }
                }
            }
            //var staticfields = TypeSystem.GetObjectStaticPropertiesByClassName("Microsoft.Exchange.WebServices.Data." + type);

            //for (var field in staticfields) {
            //    if (fieldInfo.FieldType == typeof (PropertyDefinition) || fieldInfo.FieldType.IsSubclassOf(typeof (PropertyDefinition))) {
            //        PropertyDefinition propertyDefinition = (PropertyDefinition) fieldInfo.GetValue(null);
            //        propFieldDelegate(propertyDefinition, fieldInfo);
            //    }
            //}
        }
        GetEnumerator(): PropertyDefinition[] { return this.visibleProperties; }
        static InitializeSchemaPropertyNames(): void {
            //lock(lockObject)
            //{
            for (var item in ServiceObjectSchema.allSchemaTypes) {
                var type: string = item;
                ServiceObjectSchema.ForeachPublicStaticPropertyFieldInType(
                    type,
                    (propDef: PropertyDefinition, fieldName: string) => { propDef.Name = fieldName; });
            }
            //}
        }
        RegisterIndexedProperty(indexedProperty: IndexedPropertyDefinition): void { this.indexedProperties.push(indexedProperty); }
        RegisterInternalProperty(property: PropertyDefinition): void { this.RegisterProperty(property, true); }
        RegisterProperties(): void { /*virtual void for derived class to implement if needed*/ }
        //RegisterProperty(property: PropertyDefinition): any { throw new Error("Not implemented."); }
        RegisterProperty(property: PropertyDefinition, isInternal: boolean = false): void {
            this.properties.add(property.XmlElementName, property);

            if (!isInternal) {
                this.visibleProperties.push(property);
            }

            // If this property does not have to be requested explicitly, add
            // it to the list of firstClassProperties.
            if (!property.HasFlag(PropertyDefinitionFlags.MustBeExplicitlyLoaded)) {
                this.firstClassProperties.push(property);
            }

            // If this property can be found, add it to the list of firstClassSummaryProperties
            if (property.HasFlag(PropertyDefinitionFlags.CanFind)) {
                this.firstClassSummaryProperties.push(property);
            }
        }
        TryGetPropertyDefinition(xmlElementName: string, propertyDefinition: IOutParam<PropertyDefinition>): boolean {
            return this.properties.tryGetValue(xmlElementName, propertyDefinition);
        }
    }

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
    export class FolderSchema extends ServiceObjectSchema {
        static Id: PropertyDefinition;
        static FolderClass: PropertyDefinition;
        static ParentFolderId: PropertyDefinition;
        static ChildFolderCount: PropertyDefinition;
        static DisplayName: PropertyDefinition;
        static UnreadCount: PropertyDefinition;
        static TotalCount: PropertyDefinition;
        static ManagedFolderInformation: PropertyDefinition;
        static EffectiveRights: PropertyDefinition;
        static Permissions: PropertyDefinition;
        static WellKnownFolderName: PropertyDefinition;
        static PolicyTag: PropertyDefinition;
        static ArchiveTag: PropertyDefinition;
        static Instance: FolderSchema;
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