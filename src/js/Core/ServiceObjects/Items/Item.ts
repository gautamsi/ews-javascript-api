import XmlElementNames = require("../../XmlElementNames");
import ServiceErrorHandling = require("../../../Enumerations/ServiceErrorHandling");
import Strings = require("../../../Strings");
import ServiceVersionException = require("../../../Exceptions/ServiceVersionException");
import ItemAttachment = require("../../../ComplexProperties/ItemAttachment");
import ItemId = require("../../../ComplexProperties/ItemId");
import MimeContent = require("../../../ComplexProperties/MimeContent");
import FolderId = require("../../../ComplexProperties/FolderId");
import Sensitivity = require("../../../Enumerations/Sensitivity");
import AttachmentCollection = require("../../../ComplexProperties/AttachmentCollection");
import StringList = require("../../../ComplexProperties/StringList");
import Importance = require("../../../Enumerations/Importance");
import InternetMessageHeaderCollection = require("../../../ComplexProperties/InternetMessageHeaderCollection");
import ResponseActions = require("../../../Enumerations/ResponseActions");
import MessageBody = require("../../../ComplexProperties/MessageBody");
import ExtendedPropertyCollection = require("../../../ComplexProperties/ExtendedPropertyCollection");
import EffectiveRights = require("../../../Enumerations/EffectiveRights");
import ConversationId = require("../../../ComplexProperties/ConversationId");
import UniqueBody = require("../../../ComplexProperties/UniqueBody");
import Flag = require("../../../ComplexProperties/Flag");
import NormalizedBody = require("../../../ComplexProperties/NormalizedBody");
import EntityExtractionResult = require("../../../ComplexProperties/EntityExtractionResult");
import PolicyTag = require("../../../ComplexProperties/PolicyTag");
import ArchiveTag = require("../../../ComplexProperties/ArchiveTag");
import TextBody = require("../../../ComplexProperties/TextBody");
import IconIndex = require("../../../Enumerations/IconIndex");
import AffectedTaskOccurrence = require("../../../Enumerations/AffectedTaskOccurrence");
import SendCancellationsMode = require("../../../Enumerations/SendCancellationsMode");
import SendInvitationsMode = require("../../../Enumerations/SendInvitationsMode");
import SendInvitationsOrCancellationsMode = require("../../../Enumerations/SendInvitationsOrCancellationsMode");
import ExchangeService = require("../../ExchangeService");
import {EwsLogging} from "../../EwsLogging";
import PropertySet = require("../../PropertySet");
import WellKnownFolderName = require("../../../Enumerations/WellKnownFolderName");
import DeleteMode = require("../../../Enumerations/DeleteMode");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import ServiceObjectSchema = require("../Schemas/ServiceObjectSchema");
import MessageDisposition = require("../../../Enumerations/MessageDisposition");
import ConflictResolutionMode = require("../../../Enumerations/ConflictResolutionMode");
import ExtendedPropertyDefinition = require("../../../PropertyDefinitions/ExtendedPropertyDefinition");
import ItemSchema = require("../Schemas/ItemSchema");
import IOutParam = require("../../../Interfaces/IOutParam");
import {StringHelper} from "../../../ExtensionMethods";

import ServiceObject = require("../ServiceObject");
class Item extends ServiceObject {
    //    constructor(obj: any) { super(obj); }


    private parentAttachment: ItemAttachment = null;
    get ParentAttachment(): ItemAttachment {
        return this.parentAttachment;
    }
    get RootItemId(): ItemId {
        if (this.IsAttachment && this.ParentAttachment.Owner !== null) {
            return this.ParentAttachment.Owner.RootItemId;
        }
        return this.Id;
    }
    get IsAttachment(): boolean { return this.parentAttachment != null && typeof this.parentAttachment !== 'undefined' }
    get IsNew(): boolean {
        // Item attachments don't have an Id, need to check whether the
        // parentAttachment is new or not.
        if (this.IsAttachment) {
            return this.ParentAttachment.IsNew;
        }
        else {
            return super.IsNewProxy();
        }
    }
    get Id(): ItemId { return this.PropertyBag._getItem(this.GetIdPropertyDefinition()); }

    get MimeContent(): MimeContent {
        return <MimeContent>this.PropertyBag._getItem(ItemSchema.MimeContent);
    }
    set MimeContent(value: MimeContent) {
        this.PropertyBag._setItem(ItemSchema.MimeContent, value);
    }
    get ParentFolderId(): FolderId {
        return <FolderId>this.PropertyBag._getItem(ItemSchema.ParentFolderId);
    }
    get Sensitivity(): Sensitivity {
        return <Sensitivity>this.PropertyBag._getItem(ItemSchema.Sensitivity);
    }
    set Sensitivity(value: Sensitivity) {
        this.PropertyBag._setItem(ItemSchema.Sensitivity, value);
    }
    get Attachments(): AttachmentCollection {
        return <AttachmentCollection>this.PropertyBag._getItem(ItemSchema.Attachments);
    }
    get DateTimeReceived(): Date {
        return <Date>this.PropertyBag._getItem(ItemSchema.DateTimeReceived);
    }
    get Size(): number {
        return <number>this.PropertyBag._getItem(ItemSchema.Size);
    }
    get Categories(): StringList {
        return <StringList>this.PropertyBag._getItem(ItemSchema.Categories);
    }
    set Categories(value: StringList) {
        this.PropertyBag._setItem(ItemSchema.Categories, value);
    }
    get Culture(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.Culture);
    }
    set Culture(value: string) {
        this.PropertyBag._setItem(ItemSchema.Culture, value);
    }
    get Importance(): Importance {
        return <Importance>this.PropertyBag._getItem(ItemSchema.Importance);
    }
    set Importance(value: Importance) {
        this.PropertyBag._setItem(ItemSchema.Importance, value);
    }
    get InReplyTo(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.InReplyTo);
    }
    set InReplyTo(value: string) {
        this.PropertyBag._setItem(ItemSchema.InReplyTo, value);
    }
    get IsSubmitted(): boolean {
        return <boolean>this.PropertyBag._getItem(ItemSchema.IsSubmitted);
    }
    get IsAssociated(): boolean {
        return <boolean>this.PropertyBag._getItem(ItemSchema.IsAssociated);
    }
    get IsDraft(): boolean {
        return <boolean>this.PropertyBag._getItem(ItemSchema.IsDraft);
    }
    get IsFromMe(): boolean {
        return <boolean>this.PropertyBag._getItem(ItemSchema.IsFromMe);
    }
    get IsResend(): boolean {
        return <boolean>this.PropertyBag._getItem(ItemSchema.IsResend);
    }
    get IsUnmodified(): boolean {
        return <boolean>this.PropertyBag._getItem(ItemSchema.IsUnmodified);
    }
    get InternetMessageHeaders(): InternetMessageHeaderCollection {
        return <InternetMessageHeaderCollection>this.PropertyBag._getItem(ItemSchema.InternetMessageHeaders);
    }
    get DateTimeSent(): Date {
        return <Date>this.PropertyBag._getItem(ItemSchema.DateTimeSent);
    }
    get DateTimeCreated(): Date {
        return <Date>this.PropertyBag._getItem(ItemSchema.DateTimeCreated);
    }
    get AllowedResponseActions(): ResponseActions {
        return <ResponseActions>this.PropertyBag._getItem(ItemSchema.AllowedResponseActions);
    }
    get ReminderDueBy(): Date {
        return <Date>this.PropertyBag._getItem(ItemSchema.ReminderDueBy);
    }
    set ReminderDueBy(value: Date) {
        this.PropertyBag._setItem(ItemSchema.ReminderDueBy, value);
    }
    get IsReminderSet(): boolean {
        return <boolean>this.PropertyBag._getItem(ItemSchema.IsReminderSet);
    }
    set IsReminderSet(value: boolean) {
        this.PropertyBag._setItem(ItemSchema.IsReminderSet, value);
    }
    get ReminderMinutesBeforeStart(): number {
        return <number>this.PropertyBag._getItem(ItemSchema.ReminderMinutesBeforeStart);
    }
    set ReminderMinutesBeforeStart(value: number) {
        this.PropertyBag._setItem(ItemSchema.ReminderMinutesBeforeStart, value);
    }
    get DisplayCc(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.DisplayCc);
    }
    get DisplayTo(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.DisplayTo);
    }
    get HasAttachments(): boolean {
        return <boolean>this.PropertyBag._getItem(ItemSchema.HasAttachments);
    }
    get Body(): MessageBody {
        return <MessageBody>this.PropertyBag._getItem(ItemSchema.Body);
    }
    set Body(value: MessageBody) {
        this.PropertyBag._setItem(ItemSchema.Body, value);
    }
    get ItemClass(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.ItemClass);
    }
    set ItemClass(value: string) {
        this.PropertyBag._setItem(ItemSchema.ItemClass, value);
    }
    get Subject(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.Subject);
    }
    set Subject(value: string) {
        this.SetSubject(value);
    }
    get WebClientReadFormQueryString(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.WebClientReadFormQueryString);
    }
    get WebClientEditFormQueryString(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.WebClientEditFormQueryString);
    }
    get ExtendedProperties(): ExtendedPropertyCollection {
        return <ExtendedPropertyCollection>this.PropertyBag._getItem(ServiceObjectSchema.ExtendedProperties);
    }
    get EffectiveRights(): EffectiveRights {
        return <EffectiveRights>this.PropertyBag._getItem(ItemSchema.EffectiveRights);
    }
    get LastModifiedName(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.LastModifiedName);
    }
    get LastModifiedTime(): Date {
        return <Date>this.PropertyBag._getItem(ItemSchema.LastModifiedTime);
    }
    get ConversationId(): ConversationId {
        return <ConversationId>this.PropertyBag._getItem(ItemSchema.ConversationId);
    }
    get UniqueBody(): UniqueBody {
        return <UniqueBody>this.PropertyBag._getItem(ItemSchema.UniqueBody);
    }
    get StoreEntryId(): number[] {
        return <number[]>this.PropertyBag._getItem(ItemSchema.StoreEntryId);
    }
    get InstanceKey(): number[] {
        return <number[]>this.PropertyBag._getItem(ItemSchema.InstanceKey);
    }
    get Flag(): Flag {
        return <Flag>this.PropertyBag._getItem(ItemSchema.Flag);
    }
    set Flag(value: Flag) {
        this.PropertyBag._setItem(ItemSchema.Flag, value);
    }
    get NormalizedBody(): NormalizedBody {
        return <NormalizedBody>this.PropertyBag._getItem(ItemSchema.NormalizedBody);
    }
    get EntityExtractionResult(): EntityExtractionResult {
        return <EntityExtractionResult>this.PropertyBag._getItem(ItemSchema.EntityExtractionResult);
    }
    get PolicyTag(): PolicyTag {
        return <PolicyTag>this.PropertyBag._getItem(ItemSchema.PolicyTag);
    }
    set PolicyTag(value: PolicyTag) {
        this.PropertyBag._setItem(ItemSchema.PolicyTag, value);
    }
    get ArchiveTag(): ArchiveTag {
        return <ArchiveTag>this.PropertyBag._getItem(ItemSchema.ArchiveTag);
    }
    set ArchiveTag(value: ArchiveTag) {
        this.PropertyBag._setItem(ItemSchema.ArchiveTag, value);
    }
    get RetentionDate(): Date { //Nullable
        return <Date>this.PropertyBag._getItem(ItemSchema.RetentionDate);
    }
    get Preview(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.Preview);
    }
    get TextBody(): TextBody {
        return <TextBody>this.PropertyBag._getItem(ItemSchema.TextBody);
    }
    get IconIndex(): IconIndex {
        return <IconIndex>this.PropertyBag._getItem(ItemSchema.IconIndex);
    }
    get DefaultAffectedTaskOccurrences(): AffectedTaskOccurrence { //nullable
        return null;
    }
    get DefaultSendCancellationsMode(): SendCancellationsMode {//nullable
        return null;
    }
    get DefaultSendInvitationsMode(): SendInvitationsMode {//nullable
        return null;
    }
    get DefaultSendInvitationsOrCancellationsMode(): SendInvitationsOrCancellationsMode {//nullable
        return null;
    }
    // MimeContent: MimeContent;
    // ParentFolderId: FolderId;
    // Sensitivity: Sensitivity;
    // Attachments: AttachmentCollection;
    // DateReceived: Date;
    // Size: number;
    // Categories: StringList;
    // Culture: string;
    // Importance: Importance;
    // InReplyTo: string;
    // IsSubmitted: boolean;
    // IsAssociated: boolean;
    // IsDraft: boolean;
    // IsFromMe: boolean;
    // IsResend: boolean;
    // IsUnmodified: boolean;
    // InternetMessageHeaders: InternetMessageHeaderCollection;
    // DateSent: Date;
    // DateCreated: Date;
    // AllowedResponseActions: ResponseActions;
    // ReminderDueBy: Date;
    // IsReminderSet: boolean;
    // ReminderMinutesBeforeStart: number;
    // DisplayCc: string;
    // DisplayTo: string;
    // HasAttachments: boolean;
    // Body: MessageBody;
    // ItemClass: string;
    // Subject: string;
    // WebClientReadFormQueryString: string;
    // WebClientEditFormQueryString: string;
    // ExtendedProperties: ExtendedPropertyCollection;
    // EffectiveRights: EffectiveRights;
    // LastModifiedName: string;
    // LastModifiedTime: Date;
    // ConversationId: ConversationId;
    // UniqueBody: UniqueBody;
    // StoreEntryId: any[];// System.Byte[];
    // InstanceKey: any[];// System.Byte[];
    // Flag: Flag;
    // NormalizedBody: NormalizedBody;
    // EntityExtractionResult: EntityExtractionResult;
    // PolicyTag: PolicyTag;
    // ArchiveTag: ArchiveTag;
    // RetentionDate: Date;
    // Preview: string;
    // TextBody: TextBody;
    // IconIndex: IconIndex;
    // DefaultAffectedTaskOccurrences: AffectedTaskOccurrence;
    // DefaultSendCancellationsMode: SendCancellationsMode;
    // DefaultSendInvitationsMode: SendInvitationsMode;
    // DefaultSendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
    // private parentAttachment: ItemAttachment;

    //constructor(svc: ExchangeService);
    //constructor(parentAttachment: ItemAttachment);
    constructor(obj: ExchangeService | ItemAttachment) {
        //constructor(obj: any) {
        //super(obj instanceof ExchangeService ? obj : (obj instanceof ItemAttachment ? obj.Service : null));
        super(obj instanceof ItemAttachment ? obj.Service : <ExchangeService>obj);//todo:fix -can not user instanceof with exchangeservice, creates circular loop with ewsutility 

        if (obj instanceof ItemAttachment) {
            var parentAttachment = obj;
            EwsLogging.Assert(
                parentAttachment != null,
                "Item.ctor",
                "parentAttachment is null");

            this.parentAttachment = parentAttachment;
        }
    }

    //Bind(service: ExchangeService, id: ItemId): Item { throw new Error("Item.ts - Bind : Not implemented."); }
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): Item {
        return service.BindToItem<Item>(id, propertySet);
    }
    // Copy(destinationFolderName: WellKnownFolderName): Item { throw new Error("Item.ts - Copy : Not implemented."); }
    // Copy(destinationFolderId: FolderId): Item { throw new Error("Item.ts - Copy : Not implemented."); }
    Copy(destinationFolderIdOrName: FolderId| WellKnownFolderName): Item {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();

        var folderId: FolderId = null;
        if (destinationFolderIdOrName instanceof FolderId) {
            folderId = destinationFolderIdOrName;
        }
        else {
            folderId = new FolderId(<WellKnownFolderName>destinationFolderIdOrName);
        }
        //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");

        return this.Service.CopyItem(this.Id, folderId);
    }
    //Delete(deleteMode: DeleteMode): void { throw new Error("Item.ts - Delete : Not implemented."); }
    //Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean): any { throw new Error("Item.ts - Delete : Not implemented."); }
    Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean = false): void { this.InternalDelete(deleteMode, null, null, suppressReadReceipts); }
    GetExtendedProperties(): ExtendedPropertyCollection { return this.ExtendedProperties; }
    GetIdPropertyDefinition(): PropertyDefinition { return ItemSchema.Id; }
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean {
        // Starting E14SP2, attachment will be sent along with CreateItem requests. 
        // if the attachment used to require the Timezone header, CreateItem request should do so too.
        //
        debugger;//filtering of specific type needed.
        if (!isUpdateOperation &&
            (this.Service.RequestedServerVersion >= ExchangeVersion.Exchange2010_SP2)) {
            for (var itemAttachment of this.Attachments.Items);//.OfType<ItemAttachment>())
            {
                if ((itemAttachment.Item != null) && itemAttachment.Item.GetIsTimeZoneHeaderRequired(false /* isUpdateOperation */)) {
                    return true;
                }
            }
        }

        return super.GetIsTimeZoneHeaderRequired(isUpdateOperation);
    }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetSchema(): ServiceObjectSchema {return ItemSchema.Instance;}
    GetXmlElementName(): string { return XmlElementNames.Item; }
    HasUnprocessedAttachmentChanges(): boolean { return this.Attachments.HasUnprocessedChanges(); }
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): void {
        this.ThrowIfThisIsNotNew();
        this.ThrowIfThisIsAttachment();

        if (this.IsNew || this.IsDirty) {
            this.Service.CreateItem(
                this,
                parentFolderId,
                messageDisposition,
                sendInvitationsMode !== null ? sendInvitationsMode : this.DefaultSendInvitationsMode);

            this.Attachments.Save();
        }
    }
    //InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): any { throw new Error("Item.ts - InternalDelete : Not implemented."); }
    //InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any;//{ throw new Error("Item.ts - InternalDelete : Not implemented.");}
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode = this.DefaultSendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence = this.DefaultAffectedTaskOccurrences, suppressReadReceipts: boolean = false): void {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();

        // If sendCancellationsMode is null, use the default value that's appropriate for item type.
        // if (!sendCancellationsMode)
        // {
        //     sendCancellationsMode = this.DefaultSendCancellationsMode;
        // }

        // If affectedTaskOccurrences is null, use the default value that's appropriate for item type.
        // if (!affectedTaskOccurrences)
        // {
        //     affectedTaskOccurrences = this.DefaultAffectedTaskOccurrences;
        // }

        this.Service.DeleteItem(
            this.Id,
            deleteMode,
            sendCancellationsMode,
            affectedTaskOccurrences,
            suppressReadReceipts);
    }
    InternalLoad(propertySet: PropertySet): void {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();

        this.Service.InternalLoadPropertiesForItems(
            [this],//new Item[] { this },
            propertySet,
            ServiceErrorHandling.ThrowOnError);
    }
    //InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Item { throw new Error("Item.ts - InternalUpdate : Not implemented."); }
    //InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Item { throw new Error("Item.ts - InternalUpdate : Not implemented."); }
    InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean = false): Item {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();

        var returnedItem: Item = null;

        if (this.IsDirty && this.PropertyBag.GetIsUpdateCallNecessary()) {
            returnedItem = this.Service.UpdateItem(
                this,
                parentFolderId,
                conflictResolutionMode,
                messageDisposition,
                sendInvitationsOrCancellationsMode !== null ? sendInvitationsOrCancellationsMode : this.DefaultSendInvitationsOrCancellationsMode,
                suppressReadReceipts);
        }

        // Regardless of whether item is dirty or not, if it has unprocessed
        // attachment changes, validate them and process now.
        if (this.HasUnprocessedAttachmentChanges()) {
            this.Attachments.Validate();
            this.Attachments.Save();
        }

        return returnedItem;
    }
    //Move(destinationFolderId: FolderId): Item { throw new Error("Item.ts - Move : Not implemented."); }
    //Move(destinationFolderName: WellKnownFolderName): Item { throw new Error("Item.ts - Move : Not implemented."); }
    Move(destinationFolderIdOrName: FolderId | WellKnownFolderName): Item {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();

        var folderId: FolderId = null;
        if (destinationFolderIdOrName instanceof FolderId) {
            folderId = destinationFolderIdOrName;
        }
        else {
            folderId = new FolderId(<WellKnownFolderName> destinationFolderIdOrName);
        }
        //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        return this.Service.MoveItem(this.Id, destinationFolderIdOrName);

    }
    RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean { return this.ExtendedProperties.RemoveExtendedProperty(extendedPropertyDefinition); }
    Save(parentFolderId: FolderId): any { throw new Error("Item.ts - Save : Not implemented."); }
    //Save(parentFolderName: WellKnownFolderName): any { throw new Error("Item.ts - Save : Not implemented."); }
    //Save(): any { throw new Error("Item.ts - Save : Not implemented."); }
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): any { throw new Error("Item.ts - SetExtendedProperty : Not implemented."); }
    SetSubject(subject: string): any { throw new Error("Item.ts - SetSubject : Not implemented."); }
    ThrowIfThisIsAttachment(): void {
        if (this.IsAttachment) {
            throw new Error(Strings.OperationDoesNotSupportAttachments);//InvalidOperationException
        }
    }
    Update(conflictResolutionMode: ConflictResolutionMode, suppressReadReceipts: boolean): any { throw new Error("Item.ts - Update : Not implemented."); }
    //Update(conflictResolutionMode: ConflictResolutionMode): any { throw new Error("Item.ts - Update : Not implemented."); }
    Validate(): void {
        super.Validate();

        this.Attachments.Validate();

        // Flag parameter is only valid for Exchange2013 or higher
        //
        var flag: IOutParam<Flag> = { outValue: null };
        if (this.TryGetProperty<Flag>(ItemSchema.Flag, flag) && flag.outValue != null) {
            if (this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException(
                    StringHelper.Format(
                        Strings.ParameterIncompatibleWithRequestVersion,
                        "Flag",
                        ExchangeVersion.Exchange2013));
            }

            flag.outValue.Validate();
        }
    }

    //created this to keep item and folder object away frmo here. modularization would fail and create a larger file
    IsItemInstance(): boolean { return true; }//only item instance would return true.

}

export = Item;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
