import ServiceObject = require("../ServiceObject");
class Item extends ServiceObject {
    constructor(obj: any) { super(obj); }

    ////////ParentAttachment: ItemAttachment;
    ////////RootItemId: ItemId;
    ////////IsAttachment: boolean;
    ////////IsNew: boolean;
    ////////Id: ItemId;
    ////////MimeContent: MimeContent;
    ////////ParentFolderId: FolderId;
    ////////Sensitivity: Sensitivity;
    ////////Attachments: AttachmentCollection;
    ////////DateTimeReceived: Date;
    ////////Size: number;
    ////////Categories: StringList;
    ////////Culture: string;
    ////////Importance: Importance;
    ////////InReplyTo: string;
    ////////IsSubmitted: boolean;
    ////////IsAssociated: boolean;
    ////////IsDraft: boolean;
    ////////IsFromMe: boolean;
    ////////IsResend: boolean;
    ////////IsUnmodified: boolean;
    ////////InternetMessageHeaders: InternetMessageHeaderCollection;
    ////////DateTimeSent: Date;
    ////////DateTimeCreated: Date;
    ////////AllowedResponseActions: ResponseActions;
    ////////ReminderDueBy: Date;
    ////////IsReminderSet: boolean;
    ////////ReminderMinutesBeforeStart: number;
    ////////DisplayCc: string;
    ////////DisplayTo: string;
    ////////HasAttachments: boolean;
    ////////Body: MessageBody;
    ////////ItemClass: string;
    ////////Subject: string;
    ////////WebClientReadFormQueryString: string;
    ////////WebClientEditFormQueryString: string;
    ////////ExtendedProperties: ExtendedPropertyCollection;
    ////////EffectiveRights: EffectiveRights;
    ////////LastModifiedName: string;
    ////////LastModifiedTime: Date;
    ////////ConversationId: ConversationId;
    ////////UniqueBody: UniqueBody;
    ////////StoreEntryId: any[];// System.Byte[];
    ////////InstanceKey: any[];// System.Byte[];
    ////////Flag: Flag;
    ////////NormalizedBody: NormalizedBody;
    ////////EntityExtractionResult: EntityExtractionResult;
    ////////PolicyTag: PolicyTag;
    ////////ArchiveTag: ArchiveTag;
    ////////RetentionDate: Date;
    ////////Preview: string;
    ////////TextBody: TextBody;
    ////////IconIndex: IconIndex;
    ////////DefaultAffectedTaskOccurrences: AffectedTaskOccurrence;
    ////////DefaultSendCancellationsMode: SendCancellationsMode;
    ////////DefaultSendInvitationsMode: SendInvitationsMode;
    ////////DefaultSendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
    ////////private parentAttachment: ItemAttachment;

    //////////constructor(svc: ExchangeService);
    //////////constructor(parentAttachment: ItemAttachment);
    ////////constructor(obj: ExchangeService | ItemAttachment) {
    ////////    //constructor(obj: any) {
    ////////    super(obj instanceof ExchangeService ? obj : (obj instanceof ItemAttachment ? obj.Service : null));

    ////////    if (obj instanceof ItemAttachment) {
    ////////        var parentAttachment = obj;
    ////////        EwsUtilities.Assert(
    ////////            parentAttachment != null,
    ////////            "Item.ctor",
    ////////            "parentAttachment is null");

    ////////        this.parentAttachment = parentAttachment;
    ////////    }
    ////////}

    //////////Bind(service: ExchangeService, id: ItemId): Item { throw new Error("Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Item { throw new Error("Not implemented."); }
    ////////Copy(destinationFolderName: WellKnownFolderName): Item { throw new Error("Not implemented."); }
    //////////Copy(destinationFolderId: FolderId): Item { throw new Error("Not implemented."); }
    ////////Delete(deleteMode: DeleteMode): any { throw new Error("Not implemented."); }
    //////////Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean): any { throw new Error("Not implemented."); }
    ////////GetExtendedProperties(): ExtendedPropertyCollection { throw new Error("Not implemented."); }
    ////////GetIdPropertyDefinition(): PropertyDefinition { throw new Error("Not implemented."); }
    ////////GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { throw new Error("Not implemented."); }
    ////////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    ////////GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    ////////HasUnprocessedAttachmentChanges(): boolean { throw new Error("Not implemented."); }
    ////////InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): any { throw new Error("Not implemented."); }
    //////////InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): any { throw new Error("Not implemented."); }
    //////////InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any;//{ throw new Error("Not implemented.");}
    ////////InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
    ////////InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Item { throw new Error("Not implemented."); }
    //////////InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Item { throw new Error("Not implemented."); }
    ////////Move(destinationFolderId: FolderId): Item { throw new Error("Not implemented."); }
    //////////Move(destinationFolderName: WellKnownFolderName): Item { throw new Error("Not implemented."); }
    ////////RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean { throw new Error("Not implemented."); }
    ////////Save(parentFolderId: FolderId): any { throw new Error("Not implemented."); }
    //////////Save(parentFolderName: WellKnownFolderName): any { throw new Error("Not implemented."); }
    //////////Save(): any { throw new Error("Not implemented."); }
    ////////SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): any { throw new Error("Not implemented."); }
    ////////SetSubject(subject: string): any { throw new Error("Not implemented."); }
    ////////ThrowIfThisIsAttachment(): any { throw new Error("Not implemented."); }
    ////////Update(conflictResolutionMode: ConflictResolutionMode, suppressReadReceipts: boolean): any { throw new Error("Not implemented."); }
    //////////Update(conflictResolutionMode: ConflictResolutionMode): any { throw new Error("Not implemented."); }
    ////////Validate(): any { throw new Error("Not implemented."); }

    //////////created this to keep item and folder object away frmo here. modularization would fail and create a larger file
    ////////IsItemInstance(): boolean { return true; }//only item instance would return true.

}

export = Item;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;