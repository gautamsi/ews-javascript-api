module Microsoft.Exchange.WebServices.Data {
    export class ComplexPropertyCollection<TComplexProperty> extends ComplexProperty {
        Items: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
        AddedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
        ModifiedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
        RemovedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
        Count: number;
        Item: TComplexProperty;
        private items: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
        private addedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
        private modifiedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
        private removedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
        ClearChangeLog(): any{ throw new Error("Not implemented.");}
        Contains(complexProperty: TComplexProperty): boolean{ throw new Error("Not implemented.");}
        CreateComplexProperty(xmlElementName: string): TComplexProperty{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): TComplexProperty{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: TComplexProperty): string{ throw new Error("Not implemented.");}
        GetEnumerator(): any{ throw new Error("Not implemented.");}
        IndexOf(complexProperty: TComplexProperty): number{ throw new Error("Not implemented.");}
        InternalAdd(complexProperty: TComplexProperty): any{ throw new Error("Not implemented.");}
        InternalAdd(complexProperty: TComplexProperty, loading: boolean): any{ throw new Error("Not implemented.");}
        InternalClear(): any{ throw new Error("Not implemented.");}
        InternalRemove(complexProperty: TComplexProperty): boolean{ throw new Error("Not implemented.");}
        InternalRemoveAt(index: number): any{ throw new Error("Not implemented.");}
        InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
        ItemChanged(complexProperty: ComplexProperty): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader, xmlNamespace: XmlNamespace, localElementName: string): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any{ throw new Error("Not implemented.");}
        RemoveFromChangeLog(complexProperty: TComplexProperty): any{ throw new Error("Not implemented.");}
        ShouldWriteToRequest(): boolean{ throw new Error("Not implemented.");}
        UpdateFromXml(reader: EwsServiceXmlReader, xmlNamespace: XmlNamespace, xmlElementName: string): any{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): any{ throw new Error("Not implemented.");}
    }
    export class AddressEntityCollection extends ComplexPropertyCollection<AddressEntity> {
        CreateComplexProperty(xmlElementName: string): AddressEntity{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): AddressEntity{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: AddressEntity): string{ throw new Error("Not implemented.");}
    }
    export class AttachmentCollection extends ComplexPropertyCollection<Attachment> {
		//private IOwnedProperty.Owner: ServiceObject;
        private owner: Item;
        AddFileAttachment(fileName: string): FileAttachment{ throw new Error("Not implemented.");}
        AddFileAttachment(name: string, fileName: string): FileAttachment{ throw new Error("Not implemented.");}
        AddFileAttachment(name: string, contentStream: System.IO.Stream): FileAttachment{ throw new Error("Not implemented.");}
        AddFileAttachment(name: string, content: System.Byte[]): FileAttachment{ throw new Error("Not implemented.");}
        AddItemAttachment(): ItemAttachment<TItem>{ throw new Error("Not implemented.");}
        Clear(): any{ throw new Error("Not implemented.");}
        ClearChangeLog(): any{ throw new Error("Not implemented.");}
        CreateComplexProperty(xmlElementName: string): Attachment{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): Attachment{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: Attachment): string{ throw new Error("Not implemented.");}
        HasUnprocessedChanges(): boolean{ throw new Error("Not implemented.");}
        InternalCreateAttachments(parentItemId: string, attachments: System.Collections.Generic.IEnumerable<T>): any{ throw new Error("Not implemented.");}
        InternalDeleteAttachments(attachments: System.Collections.Generic.IEnumerable<T>): any{ throw new Error("Not implemented.");}
        Remove(attachment: Attachment): boolean{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any{ throw new Error("Not implemented.");}
        Save(): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
    }
    export class AttendeeCollection extends ComplexPropertyCollection<Attendee> {
        Add(attendee: Attendee): any{ throw new Error("Not implemented.");}
        Add(smtpAddress: string): Attendee{ throw new Error("Not implemented.");}
        Add(name: string, smtpAddress: string): Attendee{ throw new Error("Not implemented.");}
        Clear(): any{ throw new Error("Not implemented.");}
        CreateComplexProperty(xmlElementName: string): Attendee{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): Attendee{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(attendee: Attendee): string{ throw new Error("Not implemented.");}
        Remove(attendee: Attendee): boolean{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any{ throw new Error("Not implemented.");}
    }
    export class ContactEntityCollection extends ComplexPropertyCollection<ContactEntity> {
        CreateComplexProperty(xmlElementName: string): ContactEntity{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): ContactEntity{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: ContactEntity): string{ throw new Error("Not implemented.");}
    }
    export class ContactPhoneEntityCollection extends ComplexPropertyCollection<ContactPhoneEntity> {
        CreateComplexProperty(xmlElementName: string): ContactPhoneEntity{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): ContactPhoneEntity{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: ContactPhoneEntity): string{ throw new Error("Not implemented.");}
    }
    export class ConversationNodeCollection extends ComplexPropertyCollection<ConversationNode> {
        private propertySet: PropertySet;
        CreateComplexProperty(xmlElementName: string): ConversationNode{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): ConversationNode{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: ConversationNode): string{ throw new Error("Not implemented.");}
    }
    export class DeletedOccurrenceInfoCollection extends ComplexPropertyCollection<DeletedOccurrenceInfo> {
        CreateComplexProperty(xmlElementName: string): DeletedOccurrenceInfo{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): DeletedOccurrenceInfo{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: DeletedOccurrenceInfo): string{ throw new Error("Not implemented.");}
    }
    export class EmailAddressCollection extends ComplexPropertyCollection<EmailAddress> {
        private collectionItemXmlElementName: string;
        Add(emailAddress: EmailAddress): any{ throw new Error("Not implemented.");}
        Add(smtpAddress: string): EmailAddress{ throw new Error("Not implemented.");}
        Add(name: string, smtpAddress: string): EmailAddress{ throw new Error("Not implemented.");}
        AddRange(emailAddresses: System.Collections.Generic.IEnumerable<T>): any{ throw new Error("Not implemented.");}
        AddRange(smtpAddresses: System.Collections.Generic.IEnumerable<string>): any{ throw new Error("Not implemented.");}
        Clear(): any{ throw new Error("Not implemented.");}
        CreateComplexProperty(xmlElementName: string): EmailAddress{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): EmailAddress{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(emailAddress: EmailAddress): string{ throw new Error("Not implemented.");}
        Remove(emailAddress: EmailAddress): boolean{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any{ throw new Error("Not implemented.");}
        ShouldWriteToRequest(): boolean{ throw new Error("Not implemented.");}
    }
    export class EmailAddressEntityCollection extends ComplexPropertyCollection<EmailAddressEntity> {
        CreateComplexProperty(xmlElementName: string): EmailAddressEntity{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): EmailAddressEntity{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: EmailAddressEntity): string{ throw new Error("Not implemented.");}
    }
    export class EmailUserEntityCollection extends ComplexPropertyCollection<EmailUserEntity> {
        CreateComplexProperty(xmlElementName: string): EmailUserEntity{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): EmailUserEntity{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: EmailUserEntity): string{ throw new Error("Not implemented.");}
    }
    export class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> {
        CreateComplexProperty(xmlElementName: string): ExtendedProperty{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): ExtendedProperty{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: ExtendedProperty): string{ throw new Error("Not implemented.");}
        GetOrAddExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): ExtendedProperty{ throw new Error("Not implemented.");}
        InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any{ throw new Error("Not implemented.");}
        RemoveExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): boolean{ throw new Error("Not implemented.");}
        SetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, value: any): any{ throw new Error("Not implemented.");}
        TryGetProperty(propertyDefinition: ExtendedPropertyDefinition, extendedProperty: any): boolean{ throw new Error("Not implemented.");}
        TryGetValue(propertyDefinition: ExtendedPropertyDefinition, propertyValue: any): boolean{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any{ throw new Error("Not implemented.");}
    }
    export class FolderIdCollection extends ComplexPropertyCollection<FolderId> {
        Add(folderId: FolderId): any{ throw new Error("Not implemented.");}
        Add(folderName: WellKnownFolderName): FolderId{ throw new Error("Not implemented.");}
        Clear(): any{ throw new Error("Not implemented.");}
        CreateComplexProperty(xmlElementName: string): FolderId{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): FolderId{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: FolderId): string{ throw new Error("Not implemented.");}
        Remove(folderId: FolderId): boolean{ throw new Error("Not implemented.");}
        Remove(folderName: WellKnownFolderName): boolean{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any{ throw new Error("Not implemented.");}
    }
    export class FolderPermissionCollection extends ComplexPropertyCollection<FolderPermission> {
        private InnerCollectionXmlElementName: string;
        private CollectionItemXmlElementName: string;
        UnknownEntries: System.Collections.ObjectModel.Collection<string>;
        private isCalendarFolder: boolean;
        private unknownEntries: System.Collections.ObjectModel.Collection<string>;
        Add(permission: FolderPermission): any{ throw new Error("Not implemented.");}
        AddRange(permissions: System.Collections.Generic.IEnumerable<T>): any{ throw new Error("Not implemented.");}
        Clear(): any{ throw new Error("Not implemented.");}
        CreateComplexProperty(xmlElementName: string): FolderPermission{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): FolderPermission{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: FolderPermission): string{ throw new Error("Not implemented.");}
        InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any{ throw new Error("Not implemented.");}
        Remove(permission: FolderPermission): boolean{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class GroupMemberCollection extends ComplexPropertyCollection<GroupMember> {
        private collectionIsCleared: boolean;
        Add(member: GroupMember): any{ throw new Error("Not implemented.");}
        AddContactEmailAddress(contact: Contact, emailAddressKey: EmailAddressKey): any{ throw new Error("Not implemented.");}
        AddContactGroup(contactGroupId: ItemId): any{ throw new Error("Not implemented.");}
        AddDirectoryContact(address: string, routingType: string): any{ throw new Error("Not implemented.");}
        AddDirectoryContact(smtpAddress: string): any{ throw new Error("Not implemented.");}
        AddDirectoryPublicFolder(smtpAddress: string): any{ throw new Error("Not implemented.");}
        AddDirectoryUser(address: string, routingType: string): any{ throw new Error("Not implemented.");}
        AddDirectoryUser(smtpAddress: string): any{ throw new Error("Not implemented.");}
        AddOneOff(displayName: string, address: string, routingType: string): any{ throw new Error("Not implemented.");}
        AddOneOff(displayName: string, smtpAddress: string): any{ throw new Error("Not implemented.");}
        AddPersonalContact(contactId: ItemId): any{ throw new Error("Not implemented.");}
        AddPersonalContact(contactId: ItemId, addressToLink: string): any{ throw new Error("Not implemented.");}
        AddPublicGroup(smtpAddress: string): any{ throw new Error("Not implemented.");}
        AddRange(members: System.Collections.Generic.IEnumerable<T>): any{ throw new Error("Not implemented.");}
        Clear(): any{ throw new Error("Not implemented.");}
        ClearChangeLog(): any{ throw new Error("Not implemented.");}
        CreateComplexProperty(xmlElementName: string): GroupMember{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): GroupMember{ throw new Error("Not implemented.");}
        Find(key: string): GroupMember{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(member: GroupMember): string{ throw new Error("Not implemented.");}
        InternalValidate(): any{ throw new Error("Not implemented.");}
        Remove(member: GroupMember): boolean{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any{ throw new Error("Not implemented.");}
        WriteDeleteMembersCollectionToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
        WriteDeleteMembersToXml(writer: EwsServiceXmlWriter, members: System.Collections.Generic.List<GroupMember>): any{ throw new Error("Not implemented.");}
        WriteSetOrAppendMembersToXml(writer: EwsServiceXmlWriter, members: System.Collections.Generic.List<GroupMember>, setMode: boolean): any{ throw new Error("Not implemented.");}
    }
    export class InternetMessageHeaderCollection extends ComplexPropertyCollection<InternetMessageHeader> {
        CreateComplexProperty(xmlElementName: string): InternetMessageHeader{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): InternetMessageHeader{ throw new Error("Not implemented.");}
        Find(name: string): InternetMessageHeader{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: InternetMessageHeader): string{ throw new Error("Not implemented.");}
    }
    export class ItemIdCollection extends ComplexPropertyCollection<ItemId> {
        CreateComplexProperty(xmlElementName: string): ItemId{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): ItemId{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: ItemId): string{ throw new Error("Not implemented.");}
    }
    export class MeetingSuggestionCollection extends ComplexPropertyCollection<MeetingSuggestion> {
        CreateComplexProperty(xmlElementName: string): MeetingSuggestion{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): MeetingSuggestion{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: MeetingSuggestion): string{ throw new Error("Not implemented.");}
    }
    export class OccurrenceInfoCollection extends ComplexPropertyCollection<OccurrenceInfo> {
        CreateComplexProperty(xmlElementName: string): OccurrenceInfo{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): OccurrenceInfo{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: OccurrenceInfo): string{ throw new Error("Not implemented.");}
    }
    export class PhoneEntityCollection extends ComplexPropertyCollection<PhoneEntity> {
        CreateComplexProperty(xmlElementName: string): PhoneEntity{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): PhoneEntity{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: PhoneEntity): string{ throw new Error("Not implemented.");}
    }
    export class RuleErrorCollection extends ComplexPropertyCollection<RuleError> {
        CreateComplexProperty(xmlElementName: string): RuleError{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): RuleError{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(ruleValidationError: RuleError): string{ throw new Error("Not implemented.");}
    }
    export class RuleOperationErrorCollection extends ComplexPropertyCollection<RuleOperationError> {
        CreateComplexProperty(xmlElementName: string): RuleOperationError{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): RuleOperationError{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(operationError: RuleOperationError): string{ throw new Error("Not implemented.");}
    }
    export class TaskSuggestionCollection extends ComplexPropertyCollection<TaskSuggestion> {
        CreateComplexProperty(xmlElementName: string): TaskSuggestion{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): TaskSuggestion{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: TaskSuggestion): string{ throw new Error("Not implemented.");}
    }
    export class UrlEntityCollection extends ComplexPropertyCollection<UrlEntity> {
        CreateComplexProperty(xmlElementName: string): UrlEntity{ throw new Error("Not implemented.");}
        CreateDefaultComplexProperty(): UrlEntity{ throw new Error("Not implemented.");}
        GetCollectionItemXmlElementName(complexProperty: UrlEntity): string{ throw new Error("Not implemented.");}
    }

}