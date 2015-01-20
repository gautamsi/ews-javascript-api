module Microsoft.Exchange.WebServices.Data {
    export class ComplexProperty {
        Namespace: XmlNamespace = XmlNamespace.Types;
        //private xmlNamespace: XmlNamespace; ^ no need for pivate property
        OnChange: ComplexPropertyChangedDelegate[];

        constructor() {
            this.OnChange = [];
        }


        Changed(): void {
            if (this.OnChange && this.OnChange.length > 0) {
                this.OnChange.forEach((delegateInstance, index, array) => {
                    if (delegateInstance)
                        delegateInstance(this);
                });
            }
        }
        ClearChangeLog(): void { /*virtual method for derived class to implement if needed*/ }
        InternalLoadFromXml(reader: EwsServiceXmlReader, xmlNamespace: XmlNamespace, xmlElementName: string,
            readAction: (reader: EwsServiceXmlReader) => boolean /*System.Func<T, TResult>*/): void {
            //reader.EnsureCurrentNodeIsStartElement(xmlNamespace, xmlElementName);

            this.ReadAttributesFromXml(reader);

            if (!reader.IsEmptyElement) {
                do {
                    reader.Read();

                    switch (reader.NodeType) {
                        case Node.ELEMENT_NODE:
                            if (!readAction(reader)) {
                                reader.SkipCurrentElement();
                            }
                            break;
                        case Node.TEXT_NODE:
                            this.ReadTextValueFromXml(reader);
                            break;
                    }
                }
                while (!reader.HasRecursiveParent(xmlElementName));
                reader.SeekLast(); // go back for next process to read.
            }
        }
        //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): void { /*virtual method for derived class to implement if needed*/ }
        //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        //LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): void {
            this.InternalLoadFromXml(
                reader,
                xmlNamespace || this.Namespace,
                xmlElementName,
                this.TryReadElementFromXml);
        }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): void { /*virtual method for derived class to implement if needed*/ }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): void { /*virtual method for derived class to implement if needed*/ }
        SetFieldValue<T>(field: IRefParam<T>, value: T): void {  //irefparam to workaround ref parameters irefparam.value is actual value;
            var applyChange: boolean = false;

            if (field.value == null) {
                applyChange = value != null;
            }
            else {
                var fieldAny = <any>field.value;
                if (fieldAny.CompareTo) //todo: fix this if find new ways to check if it implements certain interface - if( field is IComparable)
                {
                    applyChange = fieldAny.CompareTo(value) != 0; //todo: until fix the interface check (field as IComparable).CompareTo(value) != 0;
                }
                else {
                    applyChange = true;
                }
            }

            if (applyChange) {
                field.value = value;
                this.Changed();
            }
        }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { return false; }
        TryReadElementFromXmlToPatch(reader: EwsServiceXmlReader): boolean { return false; }
        //UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("Not implemented."); }
        UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): void {

            this.InternalLoadFromXml(
                reader,
                xmlNamespace || this.Namespace,
                xmlElementName,
                this.TryReadElementFromXmlToPatch);
        }
        /// <summary>
        /// Implements ISelfValidate.Validate. Validates this instance.
        /// </summary>
        Validate(): void //ISelfValidate interface
        {
            this.InternalValidate();
        }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): void { /*virtual method for derived class to implement if needed*/ }
        WriteElementsToXml(writer: EwsServiceXmlWriter): void { /*virtual method for derived class to implement if needed*/ }
        //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void {

            writer.WriteStartElement(xmlNamespace, xmlElementName);
            this.WriteAttributesToXml(writer);
            this.WriteElementsToXml(writer);
            writer.WriteEndElement();
        }
    }
    export class ApprovalRequestData extends ComplexProperty {
        IsUndecidedApprovalRequest: boolean;
        ApprovalDecision: number;
        ApprovalDecisionMaker: string;
        ApprovalDecisionTime: Date;
        private isUndecidedApprovalRequest: boolean;
        private approvalDecision: number;
        private approvalDecisionMaker: string;
        private approvalDecisionTime: Date;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class Attachment extends ComplexProperty {
        Id: string;
        Name: string;
        ContentType: string;
        ContentId: string;
        ContentLocation: string;
        Size: number;
        LastModifiedTime: Date;
        IsInline: boolean;
        IsNew: boolean;
        Owner: Item;
        Service: ExchangeService;
        private owner: Item;
        private id: string;
        private name: string;
        private contentType: string;
        private contentId: string;
        private contentLocation: string;
        private size: number;
        private lastModifiedTime: Date;
        private isInline: boolean;
        private service: ExchangeService;
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalLoad(bodyType: BodyType, additionalProperties: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        Load(): any { throw new Error("Not implemented."); }
        LoadAttachmentIdFromJson(jsonObject: JsonObject): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetFieldValue(field: any, value: any): any { throw new Error("Not implemented."); }
        ThrowIfThisIsNotNew(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(attachmentIndex: number): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ByteArrayArray extends ComplexProperty {
        private static ItemXmlElementName: string = "Base64Binary";
        Content: System.Byte[][];
        private content: System.Byte[][];//System.Collections.Generic.List<T>;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class CalendarEvent extends ComplexProperty {
        StartTime: Date;
        EndTime: Date;
        FreeBusyStatus: LegacyFreeBusyStatus;
        Details: CalendarEventDetails;
        private startTime: Date;
        private endTime: Date;
        private freeBusyStatus: LegacyFreeBusyStatus;
        private details: CalendarEventDetails;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class CalendarEventDetails extends ComplexProperty {
        StoreId: string;
        Subject: string;
        Location: string;
        IsMeeting: boolean;
        IsRecurring: boolean;
        IsException: boolean;
        IsReminderSet: boolean;
        IsPrivate: boolean;
        private storeId: string;
        private subject: string;
        private location: string;
        private isMeeting: boolean;
        private isRecurring: boolean;
        private isException: boolean;
        private isReminderSet: boolean;
        private isPrivate: boolean;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ChangeHighlights extends ComplexProperty {
        HasLocationChanged: boolean;
        Location: string;
        HasStartTimeChanged: boolean;
        Start: Date;
        HasEndTimeChanged: boolean;
        End: Date;
        private hasLocationChanged: boolean;
        private location: string;
        private hasStartTimeChanged: boolean;
        private start: Date;
        private hasEndTimeChanged: boolean;
        private end: Date;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ClientAccessTokenRequest extends ComplexProperty {
        Id: string;
        TokenType: ClientAccessTokenType;
        Scope: string;
        private id: string;
        private tokenType: ClientAccessTokenType;
        private scope: string;
    }
    export class ClientApp extends ComplexProperty {
        Manifest: System.Xml.XmlDocument;
        Metadata: ClientAppMetadata;
        ReadToXmlDocument(reader: EwsServiceXmlReader): SafeXmlDocument { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ClientAppMetadata extends ComplexProperty {
        EndNodeUrl: string;
        ActionUrl: string;
        AppStatus: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ClientExtension extends ComplexProperty {
        Type: ExtensionType;
        Scope: ExtensionInstallScope;
        ManifestStream: System.IO.Stream;
        MarketplaceAssetID: string;
        MarketplaceContentMarket: string;
        AppStatus: string;
        Etoken: string;
        IsAvailable: boolean;
        IsMandatory: boolean;
        IsEnabledByDefault: boolean;
        ProvidedTo: ClientExtensionProvidedTo;
        SpecificUsers: StringList;
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class CompleteName extends ComplexProperty {
        Title: string;
        GivenName: string;
        MiddleName: string;
        Surname: string;
        Suffix: string;
        Initials: string;
        FullName: string;
        NickName: string;
        YomiGivenName: string;
        YomiSurname: string;
        private title: string;
        private givenName: string;
        private middleName: string;
        private surname: string;
        private suffix: string;
        private initials: string;
        private fullName: string;
        private nickname: string;
        private yomiGivenName: string;
        private yomiSurname: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class Conflict extends ComplexProperty {
        ConflictType: ConflictType;
        NumberOfMembers: number;
        NumberOfMembersAvailable: number;
        NumberOfMembersWithConflict: number;
        NumberOfMembersWithNoData: number;
        FreeBusyStatus: LegacyFreeBusyStatus;
        private conflictType: ConflictType;
        private numberOfMembers: number;
        private numberOfMembersAvailable: number;
        private numberOfMembersWithConflict: number;
        private numberOfMembersWithNoData: number;
        private freeBusyStatus: LegacyFreeBusyStatus;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ContactPhoneEntity extends ComplexProperty {
        OriginalPhoneString: string;
        PhoneString: string;
        Type: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ConversationNode extends ComplexProperty {
        InternetMessageId: string;
        ParentInternetMessageId: string;
        Items: System.Collections.Generic.List<Item>;
        private propertySet: PropertySet;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ConversationRequest extends ComplexProperty {
        ConversationId: ConversationId;
        SyncState: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
    }
    export class ConversationResponse extends ComplexProperty {
        ConversationId: ConversationId;
        SyncState: string;
        ConversationNodes: ConversationNodeCollection;
        private propertySet: PropertySet;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class DayOfTheWeekCollection extends ComplexProperty {
        Item: DayOfTheWeek;
        Count: number;
        private items: System.Collections.Generic.List<T>;
        Add(dayOfTheWeek: DayOfTheWeek): any { throw new Error("Not implemented."); }
        AddRange(daysOfTheWeek: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJsonValue(jsonValue: string): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("Not implemented."); }
        Remove(dayOfTheWeek: DayOfTheWeek): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        ToString(separator: string): string { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
    }
    export class DelegatePermissions extends ComplexProperty {
        CalendarFolderPermissionLevel: DelegateFolderPermissionLevel;
        TasksFolderPermissionLevel: DelegateFolderPermissionLevel;
        InboxFolderPermissionLevel: DelegateFolderPermissionLevel;
        ContactsFolderPermissionLevel: DelegateFolderPermissionLevel;
        NotesFolderPermissionLevel: DelegateFolderPermissionLevel;
        JournalFolderPermissionLevel: DelegateFolderPermissionLevel;
        private delegateFolderPermissions: System.Collections.Generic.Dictionary<TKey, TValue>;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Reset(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        ValidateAddDelegate(): any { throw new Error("Not implemented."); }
        ValidateUpdateDelegate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WritePermissionToJson(jsonProperty: JsonObject, elementName: string): any { throw new Error("Not implemented."); }
        WritePermissionToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
    }
    export class DelegateUser extends ComplexProperty {
        UserId: UserId;
        Permissions: DelegatePermissions;
        ReceiveCopiesOfMeetingMessages: boolean;
        ViewPrivateItems: boolean;
        private userId: UserId;
        private permissions: DelegatePermissions;
        private receiveCopiesOfMeetingMessages: boolean;
        private viewPrivateItems: boolean;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        ValidateAddDelegate(): any { throw new Error("Not implemented."); }
        ValidateUpdateDelegate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class DeletedOccurrenceInfo extends ComplexProperty {
        OriginalStart: Date;
        private originalStart: Date;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class DictionaryEntryProperty<TKey> extends ComplexProperty {
        Key: TKey;
        private key: TKey;
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: System.Collections.Generic.List<T>): boolean { throw new Error("Not implemented."); }
        WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean { throw new Error("Not implemented."); }
        WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: System.Collections.Generic.List<T>): boolean { throw new Error("Not implemented."); }
        WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean { throw new Error("Not implemented."); }
    }
    export class DictionaryProperty<TKey, TEntry> extends ComplexProperty {
        Entries: System.Collections.Generic.Dictionary<TKey, TEntry>;
        private entries: System.Collections.Generic.Dictionary<TKey, TEntry>;
        private removedEntries: System.Collections.Generic.Dictionary<TKey, TEntry>;
        private addedEntries: System.Collections.Generic.List<T>;
        private modifiedEntries: System.Collections.Generic.List<T>;
        ClearChangeLog(): any { throw new Error("Not implemented."); }
        Contains(key: TKey): boolean { throw new Error("Not implemented."); }
        CreateEntry(reader: EwsServiceXmlReader): TEntry { throw new Error("Not implemented."); }
        CreateEntryInstance(): TEntry { throw new Error("Not implemented."); }
        EntryChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        GetEntryXmlElementName(entry: TEntry): string { throw new Error("Not implemented."); }
        GetFieldIndex(key: TKey): string { throw new Error("Not implemented."); }
        GetFieldURI(): string { throw new Error("Not implemented."); }
        InternalAdd(entry: TEntry): any { throw new Error("Not implemented."); }
        InternalAddOrReplace(entry: TEntry): any { throw new Error("Not implemented."); }
        InternalRemove(key: TKey): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): any { throw new Error("Not implemented."); }
        WriteUriToJson(key: TKey): JsonObject { throw new Error("Not implemented."); }
        WriteUriToXml(writer: EwsServiceXmlWriter, key: TKey): any { throw new Error("Not implemented."); }
    }
    export class EmailAddress extends ComplexProperty {
        static SmtpRoutingType: string = "SMTP";
        Name: string;
        Address: string;
        RoutingType: string;
        MailboxType: MailboxType;
        Id: ItemId;
        private name: string;
        private address: string;
        private routingType: string;
        private mailboxType: MailboxType;
        private id: ItemId;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class EmailUserEntity extends ComplexProperty {
        Name: string;
        UserId: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class EnhancedLocation extends ComplexProperty {
        DisplayName: string;
        Annotation: string;
        PersonaPostalAddress: PersonaPostalAddress;
        private displayName: string;
        private annotation: string;
        private personaPostalAddress: PersonaPostalAddress;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        PersonaPostalAddress_OnChange(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class EntityExtractionResult extends ComplexProperty {
        Addresses: AddressEntityCollection;
        MeetingSuggestions: MeetingSuggestionCollection;
        TaskSuggestions: TaskSuggestionCollection;
        EmailAddresses: EmailAddressEntityCollection;
        Contacts: ContactEntityCollection;
        Urls: UrlEntityCollection;
        PhoneNumbers: PhoneEntityCollection;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ExtendedProperty extends ComplexProperty {
        PropertyDefinition: ExtendedPropertyDefinition;
        Value: any;
        private propertyDefinition: ExtendedPropertyDefinition;
        private value: any;
        Equals(obj: any): boolean { throw new Error("Not implemented."); }
        GetHashCode(): number { throw new Error("Not implemented."); }
        GetStringValue(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ExtractedEntity extends ComplexProperty {
        Position: EmailPosition;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class Flag extends ComplexProperty {
        FlagStatus: ItemFlagStatus;
        StartDate: Date;
        DueDate: Date;
        CompleteDate: Date;
        private flagStatus: ItemFlagStatus;
        private startDate: Date;
        private dueDate: Date;
        private completeDate: Date;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class FolderPermission extends ComplexProperty {
        UserId: UserId;
        CanCreateItems: boolean;
        CanCreateSubFolders: boolean;
        IsFolderOwner: boolean;
        IsFolderVisible: boolean;
        IsFolderContact: boolean;
        EditItems: PermissionScope;
        DeleteItems: PermissionScope;
        ReadItems: FolderPermissionReadAccess;
        PermissionLevel: FolderPermissionLevel;
        DisplayPermissionLevel: FolderPermissionLevel;
        private userId: UserId;
        private canCreateItems: boolean;
        private canCreateSubFolders: boolean;
        private isFolderOwner: boolean;
        private isFolderVisible: boolean;
        private isFolderContact: boolean;
        private editItems: PermissionScope;
        private deleteItems: PermissionScope;
        private readItems: FolderPermissionReadAccess;
        private permissionLevel: FolderPermissionLevel;
        private static defaultPermissions: LazyMember<T>;
        private static levelVariants: LazyMember<T>;
        AdjustPermissionLevel(): any { throw new Error("Not implemented."); }
        AssignIndividualPermissions(permission: FolderPermission): any { throw new Error("Not implemented."); }
        Clone(): FolderPermission { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService, isCalendarFolder: boolean): any { throw new Error("Not implemented."); }
        IsEqualTo(permission: FolderPermission): boolean { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, xmlNamespace: XmlNamespace, xmlElementName: string): any { throw new Error("Not implemented."); }
        PropertyChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(isCalendarFolder: boolean, permissionIndex: number): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter, isCalendarFolder: boolean): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, isCalendarFolder: boolean): any { throw new Error("Not implemented."); }
    }
    export class GroupMember extends ComplexProperty {
        Key: string;
        AddressInformation: EmailAddress;
        Status: MemberStatus;
        private addressInformation: EmailAddress;
        private status: MemberStatus;
        private key: string;
        AddressInformationChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class HighlightTerm extends ComplexProperty {
        Scope: string;
        Value: string;
        private scope: string;
        private value: string;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class InternetMessageHeader extends ComplexProperty {
        Name: string;
        Value: string;
        private name: string;
        private value: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ItemCollection<TItem> extends ComplexProperty {
        Count: number;
        Item: TItem;
        private items: System.Collections.Generic.List<T>;
        GetEnumerator(): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
    }
    export class LegacyAvailabilityTimeZone extends ComplexProperty {
        private bias: System.TimeSpan;
        private standardTime: LegacyAvailabilityTimeZoneTime;
        private daylightTime: LegacyAvailabilityTimeZoneTime;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ToTimeZoneInfo(): System.TimeZoneInfo { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class LegacyAvailabilityTimeZoneTime extends ComplexProperty {
        HasTransitionTime: boolean;
        Delta: System.TimeSpan;
        TimeOfDay: System.TimeSpan;
        DayOrder: number;
        Month: number;
        DayOfTheWeek: DayOfTheWeek;
        Year: number;
        private delta: System.TimeSpan;
        private year: number;
        private month: number;
        private dayOrder: number;
        private dayOfTheWeek: DayOfTheWeek;
        private timeOfDay: System.TimeSpan;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ToTransitionTime(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class Mailbox extends ComplexProperty {
        get IsValid(): boolean { return !string.IsNullOrEmpty(this.Address); }
        Address: string;
        RoutingType: string;

        constructor( address:string, routingType:string) {
            super();

            this.Address = address;
            this.RoutingType = routingType;
        }

        Equals(obj: any): boolean {
            if (this === obj) {
                return true;
            }
            else {
                var other: Mailbox = obj;

                if (!(other instanceof Mailbox)) {
                    return false;
                }
                else if (((this.Address == null) && (other.Address == null)) ||
                    ((this.Address != null) && this.Address === other.Address)) {
                    return ((this.RoutingType == null) && (other.RoutingType == null)) ||
                        ((this.RoutingType != null) && this.RoutingType === other.RoutingType);
                }
                else {
                    return false;
                }
            }
        }
        //GetHashCode(): number { throw new Error("Not implemented."); }
        //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any {
            super.InternalValidate();

            debugger; //check for validity implement next line of codes
            //EwsUtilities.ValidateNonBlankStringParamAllowNull(this.Address, "address");
            //EwsUtilities.ValidateNonBlankStringParamAllowNull(this.RoutingType, "routingType");
        }
        //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ToString(): string {
            if (!this.IsValid) {
                return string.Empty;
            }
            else if (!string.IsNullOrEmpty(this.RoutingType)) {
                return this.RoutingType + ":" + this.Address;
            }
            else {
                return this.Address;
            }
        }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean {
            switch (reader.LocalName) {
                case XmlElementNames.EmailAddress:
                    this.Address = reader.ReadElementValue();
                    return true;
                case XmlElementNames.RoutingType:
                    this.RoutingType = reader.ReadElementValue();
                    return true;
                default:
                    return false;
            }
        }
        WriteElementsToXml(writer: EwsServiceXmlWriter): void {
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.EmailAddress, XmlElementNames.EmailAddress, this.Address);
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.RoutingType, XmlElementNames.RoutingType, this.RoutingType);
        }

        GetSearchString(): string //ISearchStringProvider.GetSearchString
        {
            return this.Address;
        }
    }
    export class ManagedFolderInformation extends ComplexProperty {
        CanDelete: boolean;
        CanRenameOrMove: boolean;
        MustDisplayComment: boolean;
        HasQuota: boolean;
        IsManagedFoldersRoot: boolean;
        ManagedFolderId: string;
        Comment: string;
        StorageQuota: number;
        FolderSize: number;
        HomePage: string;
        private canDelete: boolean;
        private canRenameOrMove: boolean;
        private mustDisplayComment: boolean;
        private hasQuota: boolean;
        private isManagedFoldersRoot: boolean;
        private managedFolderId: string;
        private comment: string;
        private storageQuota: number;
        private folderSize: number;
        private homePage: string;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class MeetingTimeZone extends ComplexProperty {
        Name: string;
        BaseOffset: System.TimeSpan;
        Standard: TimeChange;
        Daylight: TimeChange;
        private name: string;
        private baseOffset: System.TimeSpan;
        private standard: TimeChange;
        private daylight: TimeChange;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToTimeZoneInfo(): System.TimeZoneInfo { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class MessageBody extends ComplexProperty {
        BodyType: BodyType;
        Text: string;
        private bodyType: BodyType;
        private text: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class MimeContent extends ComplexProperty {
        CharacterSet: string;
        Content: System.Byte[];
        private characterSet: string;
        private content: System.Byte[];
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class NormalizedBody extends ComplexProperty {
        BodyType: BodyType;
        Text: string;
        IsTruncated: boolean;
        private bodyType: BodyType;
        private text: string;
        private isTruncated: boolean;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class OccurrenceInfo extends ComplexProperty {
        ItemId: ItemId;
        Start: Date;
        End: Date;
        OriginalStart: Date;
        private itemId: ItemId;
        private start: Date;
        private end: Date;
        private originalStart: Date;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class OnlineMeetingSettings extends ComplexProperty {
        LobbyBypass: LobbyBypass;
        AccessLevel: OnlineMeetingAccessLevel;
        Presenters: Presenters;
        private lobbyBypass: LobbyBypass;
        private accessLevel: OnlineMeetingAccessLevel;
        private presenters: Presenters;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class PersonaPostalAddress extends ComplexProperty {
        Street: string;
        City: string;
        State: string;
        Country: string;
        PostalCode: string;
        PostOfficeBox: string;
        Type: string;
        Source: LocationSource;
        Uri: string;
        Latitude: number;
        Longitude: number;
        Accuracy: number;
        Altitude: number;
        AltitudeAccuracy: number;
        FormattedAddress: string;
        private street: string;
        private city: string;
        private state: string;
        private country: string;
        private postalCode: string;
        private postOfficeBox: string;
        private type: string;
        private latitude: number;
        private longitude: number;
        private accuracy: number;
        private altitude: number;
        private altitudeAccuracy: number;
        private formattedAddress: string;
        private uri: string;
        private source: LocationSource;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class PhoneCall extends ComplexProperty {
        private static SuccessfulResponseText: string = "OK";
        private static SuccessfulResponseCode: number = 200;
        State: PhoneCallState;
        ConnectionFailureCause: ConnectionFailureCause;
        SIPResponseText: string;
        SIPResponseCode: number;
        private service: ExchangeService;
        private state: PhoneCallState;
        private connectionFailureCause: ConnectionFailureCause;
        private sipResponseText: string;
        private sipResponseCode: number;
        private id: PhoneCallId;
        Disconnect(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Refresh(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class PhoneCallId extends ComplexProperty {
        Id: string;
        private id: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class OofSettings extends ComplexProperty {
        State: OofState;
        ExternalAudience: OofExternalAudience;
        Duration: TimeWindow;
        InternalReply: OofReply;
        ExternalReply: OofReply;
        AllowExternalOof: OofExternalAudience;
        private state: OofState;
        private externalAudience: OofExternalAudience;
        private allowExternalOof: OofExternalAudience;
        private duration: TimeWindow;
        private internalReply: OofReply;
        private externalReply: OofReply;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SerializeOofReply(oofReply: OofReply, writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class Recurrence extends ComplexProperty {
        XmlElementName: string;
        IsRegenerationPattern: boolean;
        StartDate: Date;
        HasEnd: boolean;
        NumberOfOccurrences: number;
        EndDate: Date;
        private startDate: Date;
        private numberOfOccurrences: number;
        private endDate: Date;
        GetFieldValueOrThrowIfNull(value: any, name: string): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        IsSame(otherRecurrence: Recurrence): boolean { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        NeverEnds(): any { throw new Error("Not implemented."); }
        PatternToJson(service: ExchangeService): JsonObject { throw new Error("Not implemented."); }
        RangeToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RecurrenceRange extends ComplexProperty {
        XmlElementName: string;
        Recurrence: Recurrence;
        StartDate: Date;
        private startDate: Date;
        private recurrence: Recurrence;
        AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Changed(): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RetentionTagBase extends ComplexProperty {
        IsExplicit: boolean;
        RetentionId: System.Guid;
        private xmlElementName: string;
        private isExplicit: boolean;
        private retentionId: System.Guid;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class Rule extends ComplexProperty {
        Id: string;
        DisplayName: string;
        Priority: number;
        IsEnabled: boolean;
        IsNotSupported: boolean;
        IsInError: boolean;
        Conditions: RulePredicates;
        Actions: RuleActions;
        Exceptions: RulePredicates;
        private ruleId: string;
        private displayName: string;
        private priority: number;
        private isEnabled: boolean;
        private isNotSupported: boolean;
        private isInError: boolean;
        private conditions: RulePredicates;
        private actions: RuleActions;
        private exceptions: RulePredicates;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RuleActions extends ComplexProperty {
        private static MobileType: string = "MOBILE";
        AssignCategories: StringList;
        CopyToFolder: FolderId;
        Delete: boolean;
        ForwardAsAttachmentToRecipients: EmailAddressCollection;
        ForwardToRecipients: EmailAddressCollection;
        MarkImportance: Importance;
        MarkAsRead: boolean;
        MoveToFolder: FolderId;
        PermanentDelete: boolean;
        RedirectToRecipients: EmailAddressCollection;
        SendSMSAlertToRecipients: System.Collections.ObjectModel.Collection<MobilePhone>;
        ServerReplyWithMessage: ItemId;
        StopProcessingRules: boolean;
        private assignCategories: StringList;
        private copyToFolder: FolderId;
        private delete: boolean;
        private forwardAsAttachmentToRecipients: EmailAddressCollection;
        private forwardToRecipients: EmailAddressCollection;
        private markImportance: Importance;
        private markAsRead: boolean;
        private moveToFolder: FolderId;
        private permanentDelete: boolean;
        private redirectToRecipients: EmailAddressCollection;
        private sendSMSAlertToRecipients: System.Collections.ObjectModel.Collection<MobilePhone>;
        private serverReplyWithMessage: ItemId;
        private stopProcessingRules: boolean;
        ConvertSMSRecipientsFromEmailAddressCollectionToMobilePhoneCollection(emailCollection: EmailAddressCollection): System.Collections.ObjectModel.Collection<MobilePhone> { throw new Error("Not implemented."); }
        ConvertSMSRecipientsFromMobilePhoneCollectionToEmailAddressCollection(recipientCollection: System.Collections.ObjectModel.Collection<MobilePhone>): EmailAddressCollection { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RuleCollection extends ComplexProperty {
        OutlookRuleBlobExists: boolean;
        Count: number;
        Item: Rule;
        private outlookRuleBlobExists: boolean;
        private rules: System.Collections.Generic.List<T>;
        GetEnumerator(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class RuleError extends ComplexProperty {
        RuleProperty: RuleProperty;
        ErrorCode: RuleErrorCode;
        ErrorMessage: string;
        Value: string;
        private ruleProperty: RuleProperty;
        private errorCode: RuleErrorCode;
        private errorMessage: string;
        private value: string;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class RuleOperation extends ComplexProperty {
        XmlElementName: string;
    }
    export class RuleOperationError extends ComplexProperty {
        Operation: RuleOperation;
        Count: number;
        Item: RuleError;
        private operationIndex: number;
        private operation: RuleOperation;
        private ruleErrors: RuleErrorCollection;
        GetEnumerator(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetOperationByIndex(operations: any): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class RulePredicateDateRange extends ComplexProperty {
        Start: Date;
        End: Date;
        private start: Date;
        private end: Date;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RulePredicates extends ComplexProperty {
        Categories: StringList;
        ContainsBodyStrings: StringList;
        ContainsHeaderStrings: StringList;
        ContainsRecipientStrings: StringList;
        ContainsSenderStrings: StringList;
        ContainsSubjectOrBodyStrings: StringList;
        ContainsSubjectStrings: StringList;
        FlaggedForAction: FlaggedForAction;
        FromAddresses: EmailAddressCollection;
        HasAttachments: boolean;
        Importance: Importance;
        IsApprovalRequest: boolean;
        IsAutomaticForward: boolean;
        IsAutomaticReply: boolean;
        IsEncrypted: boolean;
        IsMeetingRequest: boolean;
        IsMeetingResponse: boolean;
        IsNonDeliveryReport: boolean;
        IsPermissionControlled: boolean;
        IsSigned: boolean;
        IsVoicemail: boolean;
        IsReadReceipt: boolean;
        FromConnectedAccounts: StringList;
        ItemClasses: StringList;
        MessageClassifications: StringList;
        NotSentToMe: boolean;
        SentCcMe: boolean;
        SentOnlyToMe: boolean;
        SentToAddresses: EmailAddressCollection;
        SentToMe: boolean;
        SentToOrCcMe: boolean;
        Sensitivity: Sensitivity;
        WithinDateRange: RulePredicateDateRange;
        WithinSizeRange: RulePredicateSizeRange;
        private categories: StringList;
        private containsBodyStrings: StringList;
        private containsHeaderStrings: StringList;
        private containsRecipientStrings: StringList;
        private containsSenderStrings: StringList;
        private containsSubjectOrBodyStrings: StringList;
        private containsSubjectStrings: StringList;
        private flaggedForAction: FlaggedForAction;
        private fromAddresses: EmailAddressCollection;
        private fromConnectedAccounts: StringList;
        private hasAttachments: boolean;
        private importance: Importance;
        private isApprovalRequest: boolean;
        private isAutomaticForward: boolean;
        private isAutomaticReply: boolean;
        private isEncrypted: boolean;
        private isMeetingRequest: boolean;
        private isMeetingResponse: boolean;
        private isNonDeliveryReport: boolean;
        private isPermissionControlled: boolean;
        private isSigned: boolean;
        private isVoicemail: boolean;
        private isReadReceipt: boolean;
        private itemClasses: StringList;
        private messageClassifications: StringList;
        private notSentToMe: boolean;
        private sentCcMe: boolean;
        private sentOnlyToMe: boolean;
        private sentToAddresses: EmailAddressCollection;
        private sentToMe: boolean;
        private sentToOrCcMe: boolean;
        private sensitivity: Sensitivity;
        private withinDateRange: RulePredicateDateRange;
        private withinSizeRange: RulePredicateSizeRange;
        InternalValidate(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RulePredicateSizeRange extends ComplexProperty {
        MinimumSize: number;
        MaximumSize: number;
        private minimumSize: number;
        private maximumSize: number;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SearchFilter extends ComplexProperty {
        GetSearchFilterInstance(localName: string): SearchFilter { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): SearchFilter { throw new Error("Not implemented."); }
        LoadSearchFilterFromJson(jsonObject: JsonObject, service: ExchangeService): SearchFilter { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SearchFolderParameters extends ComplexProperty {
        Traversal: SearchFolderTraversal;
        RootFolderIds: FolderIdCollection;
        SearchFilter: SearchFilter;
        private traversal: SearchFolderTraversal;
        private rootFolderIds: FolderIdCollection;
        private searchFilter: SearchFilter;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        PropertyChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ServiceId extends ComplexProperty {
        public get IsValid(): boolean { return !string.IsNullOrEmpty(this.UniqueId); }
        UniqueId: string;
        ChangeKey: string;
        //private changeKey: string; not needed for proxy
        //private uniqueId: string; - not needed for proxy

        constructor(uniqueId?: string) {
            super();
            if (!string.IsNullOrEmpty(uniqueId)) {
                EwsUtilities.ValidateParam(uniqueId, "uniqueId");
                this.UniqueId = uniqueId;
            }
        }

        Assign(source: ServiceId): void {
            this.UniqueId = source.UniqueId;
            this.ChangeKey = source.ChangeKey;
        }
        Equals(obj: any): boolean {
            if (this === obj) {//object.ReferenceEquals(this, obj)) {
                return true;
            }
            else {
                var other: ServiceId = obj;

                if (!(other instanceof ServiceId)) {// == null) {
                    return false;
                }
                else if (!(this.IsValid && other.IsValid)) {
                    return false;
                }
                else {
                    return this.UniqueId === other.UniqueId;//.Equals(other.UniqueId);
                }
            }
        }
        //GetHashCode(): number { return this.IsValid ? this.UniqueId.GetHashCode() : super.GetHashCode();}
        //GetJsonTypeName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("abstract method must implement."); }
        //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): void {
            this.UniqueId = reader.ReadAttributeValue(null, XmlAttributeNames.Id);
            this.ChangeKey = reader.ReadAttributeValue(null, XmlAttributeNames.ChangeKey);
        }
        SameIdAndChangeKey(other: ServiceId): boolean {
            if (this.Equals(other)) {
                return ((this.ChangeKey == null) && (other.ChangeKey == null)) ||
                    this.ChangeKey === other.ChangeKey;
            }
            else {
                return false;
            }
        }
        ToString(): string { return (this.UniqueId == null) ? "" : this.UniqueId; }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
            writer.WriteAttributeValue("", XmlAttributeNames.Id, this.UniqueId);
            writer.WriteAttributeValue("", XmlAttributeNames.ChangeKey, this.ChangeKey);
        }
        WriteToXml(writer: EwsServiceXmlWriter): void {
            super.WriteToXml(writer, this.GetXmlElementName());
        }
    }
    export class SetClientExtensionAction extends ComplexProperty {
        private setClientExtensionActionId: SetClientExtensionActionId;
        private extensionId: string;
        private clientExtension: ClientExtension;
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class StringList extends ComplexProperty {
        Count: number;
        Item: string;
        private items: System.Collections.Generic.List<string>;
        private itemXmlElementName: string;
        Add(s: string): any { throw new Error("Not implemented."); }
        AddRange(strings: System.Collections.Generic.IEnumerable<string>): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        Contains(s: string): boolean { throw new Error("Not implemented."); }
        Equals(obj: any): boolean { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        GetHashCode(): number { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        Remove(s: string): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class Suggestion extends ComplexProperty {
        Date: Date;
        Quality: SuggestionQuality;
        TimeSuggestions: System.Collections.ObjectModel.Collection<TimeSuggestion>;
        private date: Date;
        private quality: SuggestionQuality;
        private timeSuggestions: System.Collections.ObjectModel.Collection<TimeSuggestion>;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class TimeChange extends ComplexProperty {
        TimeZoneName: string;
        Offset: System.TimeSpan;
        Time: Time;
        AbsoluteDate: Date;
        Recurrence: TimeChangeRecurrence;
        private timeZoneName: string;
        private offset: System.TimeSpan;
        private time: Time;
        private absoluteDate: Date;
        private recurrence: TimeChangeRecurrence;
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TimeChangeRecurrence extends ComplexProperty {
        DayOfTheWeekIndex: DayOfTheWeekIndex;
        DayOfTheWeek: DayOfTheWeek;
        Month: Month;
        private dayOfTheWeek: DayOfTheWeek;
        private dayOfTheWeekIndex: DayOfTheWeekIndex;
        private month: Month;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TimeSuggestion extends ComplexProperty {
        MeetingTime: Date;
        IsWorkTime: boolean;
        Quality: SuggestionQuality;
        Conflicts: System.Collections.ObjectModel.Collection<Conflict>;
        private meetingTime: Date;
        private isWorkTime: boolean;
        private quality: SuggestionQuality;
        private conflicts: System.Collections.ObjectModel.Collection<Conflict>;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class TimeZoneDefinition extends ComplexProperty {
        private static NoIdPrefix: string = "NoId_";
        Name: string;
        Id: string;
        Periods: System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
        TransitionGroups: System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
        private name: string;
        private id: string;
        private periods: System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
        private transitionGroups: System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
        private transitions: System.Collections.Generic.List<TimeZoneTransition>;
        CompareTransitions(x: TimeZoneTransition, y: TimeZoneTransition): number { throw new Error("Not implemented."); }
        CreateTransitionGroupToPeriod(timeZonePeriod: TimeZonePeriod): TimeZoneTransitionGroup { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToTimeZoneInfo(): System.TimeZoneInfo { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): void {
            super.WriteToXml(writer, XmlElementNames.TimeZoneDefinition, this.Namespace);
        }
    }
    export class TimeZonePeriod extends ComplexProperty {
        static StandardPeriodId: string = "Std";
        static StandardPeriodName: string = "Standard";
        static DaylightPeriodId: string = "Dlt";
        static DaylightPeriodName: string = "Daylight";
        IsStandardPeriod: boolean;
        Bias: System.TimeSpan;
        Name: string;
        Id: string;
        private bias: System.TimeSpan;
        private name: string;
        private id: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TimeZoneTransition extends ComplexProperty {
        private static PeriodTarget: string = "Period";
        private static GroupTarget: string = "Group";

        TargetPeriod: TimeZonePeriod;
        TargetGroup: TimeZoneTransitionGroup;
        private timeZoneDefinition: TimeZoneDefinition;
        private targetPeriod: TimeZonePeriod;
        private targetGroup: TimeZoneTransitionGroup;
        Create(timeZoneDefinition: TimeZoneDefinition, xmlElementName: string): TimeZoneTransition { throw new Error("Not implemented."); }
        CreateTimeZoneTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod, transitionTime: any): TimeZoneTransition { throw new Error("Not implemented."); }
        CreateTransitionTime(): any { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TimeZoneTransitionGroup extends ComplexProperty {
        SupportsDaylight: boolean;
        private TransitionToDaylight: TimeZoneTransition;
        private TransitionToStandard: TimeZoneTransition;
        Id: string;
        Transitions: System.Collections.Generic.List<TimeZoneTransition>;
        private timeZoneDefinition: TimeZoneDefinition;
        private id: string;
        private transitions: System.Collections.Generic.List<TimeZoneTransition>;
        private transitionToStandard: TimeZoneTransition;
        private transitionToDaylight: TimeZoneTransition;
        CreateAdjustmentRule(startDate: Date, endDate: Date): any { throw new Error("Not implemented."); }
        GetCustomTimeZoneCreationParams(): TimeZoneTransitionGroup.CustomTimeZoneCreateParams { throw new Error("Not implemented."); }
        GetDaylightDelta(): System.TimeSpan { throw new Error("Not implemented."); }
        InitializeFromAdjustmentRule(adjustmentRule: any, standardPeriod: TimeZonePeriod): any { throw new Error("Not implemented."); }
        InitializeTransitions(): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UniqueBody extends ComplexProperty {
        BodyType: BodyType;
        Text: string;
        IsTruncated: boolean;
        private bodyType: BodyType;
        private text: string;
        private isTruncated: boolean;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UserConfigurationDictionary extends ComplexProperty {
        Item: any;
        Count: number;
        IsDirty: boolean;
        private dictionary: System.Collections.Generic.Dictionary<TKey, TValue>;
        private isDirty: boolean;
        Add(key: any, value: any): any { throw new Error("Not implemented."); }
        Changed(): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        ConstructObject(type: UserConfigurationDictionaryObjectType, value: System.Collections.Generic.List<string>, service: ExchangeService): any { throw new Error("Not implemented."); }
        ContainsKey(key: any): boolean { throw new Error("Not implemented."); }
        CreateFromJsonCollection(jsonCollection: any, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetDictionaryObject(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetDictionaryObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        GetJsonObject(dictionaryObject: any, service: ExchangeService): JsonObject { throw new Error("Not implemented."); }
        GetObjectType(reader: EwsServiceXmlReader): UserConfigurationDictionaryObjectType { throw new Error("Not implemented."); }
        GetObjectType(type: string): UserConfigurationDictionaryObjectType { throw new Error("Not implemented."); }
        GetObjectValue(valueArray: any): System.Collections.Generic.List<string> { throw new Error("Not implemented."); }
        GetObjectValue(reader: EwsServiceXmlReader, type: UserConfigurationDictionaryObjectType): System.Collections.Generic.List<string> { throw new Error("Not implemented."); }
        GetTypeCode(service: ExchangeServiceBase, dictionaryObject: any, dictionaryObjectType: any, valueAsString: any): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadEntry(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, xmlNamespace: XmlNamespace, xmlElementName: string): any { throw new Error("Not implemented."); }
        Remove(key: any): boolean { throw new Error("Not implemented."); }
        TryGetValue(key: any, value: any): boolean { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        UpdateFromJsonCollection(jsonCollection: any, service: ExchangeService): any { throw new Error("Not implemented."); }
        ValidateArrayObject(dictionaryObjectAsArray: System.Array): any { throw new Error("Not implemented."); }
        ValidateEntry(key: any, value: any): any { throw new Error("Not implemented."); }
        ValidateObject(dictionaryObject: any): any { throw new Error("Not implemented."); }
        ValidateObjectType(type: System.Type): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteEntryTypeToXml(writer: EwsServiceXmlWriter, dictionaryObjectType: UserConfigurationDictionaryObjectType): any { throw new Error("Not implemented."); }
        WriteEntryValueToXml(writer: EwsServiceXmlWriter, value: string): any { throw new Error("Not implemented."); }
        WriteObjectToXml(writer: EwsServiceXmlWriter, xmlElementName: string, dictionaryObject: any): any { throw new Error("Not implemented."); }
        WriteObjectValueToXml(writer: EwsServiceXmlWriter, dictionaryObject: any): any { throw new Error("Not implemented."); }
    }
    export class UserId extends ComplexProperty {
        SID: string;
        PrimarySmtpAddress: string;
        DisplayName: string;
        StandardUser: StandardUser;
        private sID: string;
        private primarySmtpAddress: string;
        private displayName: string;
        private standardUser: StandardUser;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        IsValid(): boolean { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class VotingInformation extends ComplexProperty {
        UserOptions: System.Collections.ObjectModel.Collection<VotingOptionData>;
        VotingResponse: string;
        private userOptions: System.Collections.ObjectModel.Collection<VotingOptionData>;
        private votingResponse: string;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class VotingOptionData extends ComplexProperty {
        DisplayName: string;
        SendPrompt: SendPrompt;
        private displayName: string;
        private sendPrompt: SendPrompt;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class WorkingHours extends ComplexProperty {
        TimeZone: System.TimeZoneInfo;
        DaysOfTheWeek: System.Collections.ObjectModel.Collection<DayOfTheWeek>;
        StartTime: System.TimeSpan;
        EndTime: System.TimeSpan;
        private timeZone: System.TimeZoneInfo;
        private daysOfTheWeek: System.Collections.ObjectModel.Collection<DayOfTheWeek>;
        private startTime: System.TimeSpan;
        private endTime: System.TimeSpan;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class WorkingPeriod extends ComplexProperty {
        DaysOfWeek: System.Collections.ObjectModel.Collection<DayOfTheWeek>;
        StartTime: System.TimeSpan;
        EndTime: System.TimeSpan;
        private daysOfWeek: System.Collections.ObjectModel.Collection<DayOfTheWeek>;
        private startTime: System.TimeSpan;
        private endTime: System.TimeSpan;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
}

