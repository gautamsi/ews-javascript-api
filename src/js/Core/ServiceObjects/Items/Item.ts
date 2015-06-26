import {XmlElementNames} from "../../XmlElementNames";
import {ServiceErrorHandling} from "../../../Enumerations/ServiceErrorHandling";
import {IPromise} from "../../../Interfaces";
import {Strings} from "../../../Strings";
import {ServiceVersionException} from "../../../Exceptions/ServiceVersionException";
import {ItemAttachment} from "../../../ComplexProperties/ItemAttachment";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {MimeContent} from "../../../ComplexProperties/MimeContent";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {Sensitivity} from "../../../Enumerations/Sensitivity";
import {Attachment} from "../../../ComplexProperties/Attachment";
import {AttachmentCollection} from "../../../ComplexProperties/AttachmentCollection";
import {StringList} from "../../../ComplexProperties/StringList";
import {Importance} from "../../../Enumerations/Importance";
import {InternetMessageHeaderCollection} from "../../../ComplexProperties/InternetMessageHeaderCollection";
import {ResponseActions} from "../../../Enumerations/ResponseActions";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {ExtendedPropertyCollection} from "../../../ComplexProperties/ExtendedPropertyCollection";
import {EffectiveRights} from "../../../Enumerations/EffectiveRights";
import {ConversationId} from "../../../ComplexProperties/ConversationId";
import {UniqueBody} from "../../../ComplexProperties/UniqueBody";
import {Flag} from "../../../ComplexProperties/Flag";
import {NormalizedBody} from "../../../ComplexProperties/NormalizedBody";
import {EntityExtractionResult} from "../../../ComplexProperties/EntityExtractionResult";
import {PolicyTag} from "../../../ComplexProperties/PolicyTag";
import {ArchiveTag} from "../../../ComplexProperties/ArchiveTag";
import {TextBody} from "../../../ComplexProperties/TextBody";
import {IconIndex} from "../../../Enumerations/IconIndex";
import {AffectedTaskOccurrence} from "../../../Enumerations/AffectedTaskOccurrence";
import {SendCancellationsMode} from "../../../Enumerations/SendCancellationsMode";
import {SendInvitationsMode} from "../../../Enumerations/SendInvitationsMode";
import {SendInvitationsOrCancellationsMode} from "../../../Enumerations/SendInvitationsOrCancellationsMode";
import {ExchangeService} from "../../ExchangeService";
import {EwsLogging} from "../../EwsLogging";
import {PropertySet} from "../../PropertySet";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
import {DeleteMode} from "../../../Enumerations/DeleteMode";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {MessageDisposition} from "../../../Enumerations/MessageDisposition";
import {ConflictResolutionMode} from "../../../Enumerations/ConflictResolutionMode";
import {ExtendedPropertyDefinition} from "../../../PropertyDefinitions/ExtendedPropertyDefinition";
import {ItemSchema} from "../Schemas/ItemSchema";
import {IOutParam} from "../../../Interfaces/IOutParam";
import {StringHelper, ArrayHelper} from "../../../ExtensionMethods";
import {PromiseFactory} from "../../../PromiseFactory";

import {ServiceObject} from "../ServiceObject";
export class Item extends ServiceObject {
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

    constructor(svc: ExchangeService);
    constructor(parentAttachment: ItemAttachment);
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

    Bind(service: ExchangeService, id: ItemId): IPromise<Item>;
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Item>;
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Item> {
        return service.BindToItem<Item>(id, propertySet, Item);
    }

    Copy(destinationFolderName: WellKnownFolderName): IPromise<Item>;
    Copy(destinationFolderId: FolderId): IPromise<Item>;
    Copy(destinationFolderIdOrName: FolderId| WellKnownFolderName): IPromise<Item> {
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

    Delete(deleteMode: DeleteMode): IPromise<void>
    Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean): IPromise<void>
    Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean = false): IPromise<void> { return this.InternalDelete(deleteMode, null, null, suppressReadReceipts); }

    GetExtendedProperties(): ExtendedPropertyCollection { return this.ExtendedProperties; }
    GetIdPropertyDefinition(): PropertyDefinition { return ItemSchema.Id; }
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean {
        // Starting E14SP2, attachment will be sent along with CreateItem requests. 
        // if the attachment used to require the Timezone header, CreateItem request should do so too.
        //
        debugger;//filtering of specific type needed.
        if (!isUpdateOperation &&
            (this.Service.RequestedServerVersion >= ExchangeVersion.Exchange2010_SP2)) {
            for (var itemAttachment of ArrayHelper.OfType<ItemAttachment, Attachment>(this.Attachments.Items, (a) => a instanceof ItemAttachment))//.OfType<ItemAttachment>())
            {
                if ((itemAttachment.Item != null) && itemAttachment.Item.GetIsTimeZoneHeaderRequired(false /* isUpdateOperation */)) {
                    return true;
                }
            }
        }

        return super.GetIsTimeZoneHeaderRequired(isUpdateOperation);
    }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetSchema(): ServiceObjectSchema { return ItemSchema.Instance; }
    GetXmlElementName(): string { return XmlElementNames.Item; }
    HasUnprocessedAttachmentChanges(): boolean { return this.Attachments.HasUnprocessedChanges(); }
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): IPromise<void> {
        this.ThrowIfThisIsNotNew();
        this.ThrowIfThisIsAttachment();

        if (this.IsNew || this.IsDirty) {
            return this.Service.CreateItem(
                this,
                parentFolderId,
                messageDisposition,
                sendInvitationsMode !== null ? sendInvitationsMode : this.DefaultSendInvitationsMode)
                .then((response) => {
                    return this.Attachments.Save();
                });
        }
        return;
    }

    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void>;
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): IPromise<void>;
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode = this.DefaultSendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence = this.DefaultAffectedTaskOccurrences, suppressReadReceipts: boolean = false): IPromise<void> {
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

        return this.Service.DeleteItem(
            this.Id,
            deleteMode,
            sendCancellationsMode,
            affectedTaskOccurrences,
            suppressReadReceipts);
    }
    InternalLoad(propertySet: PropertySet): IPromise<void> {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();

        return this.Service.InternalLoadPropertiesForItems(
            [this],//new Item[] { this },
            propertySet,
            ServiceErrorHandling.ThrowOnError).then((response) => {
                return;
            })
    }
    InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<Item>;
    InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): IPromise<Item>;
    InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean = false): IPromise<Item> {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();

        var returnedItem: Item = null;

        // Regardless of whether item is dirty or not, if it has unprocessed
        // attachment changes, validate them and process now.
        if (this.HasUnprocessedAttachmentChanges()) {
            this.Attachments.Validate();
            this.Attachments.Save();
        }

        if (this.IsDirty && this.PropertyBag.GetIsUpdateCallNecessary()) {
            return this.Service.UpdateItem(
                this,
                parentFolderId,
                conflictResolutionMode,
                messageDisposition,
                sendInvitationsOrCancellationsMode !== null ? sendInvitationsOrCancellationsMode : this.DefaultSendInvitationsOrCancellationsMode,
                suppressReadReceipts);
        }

        return PromiseFactory.wrap(returnedItem);
    }
    Move(destinationFolderId: FolderId): IPromise<Item>;
    Move(destinationFolderName: WellKnownFolderName): IPromise<Item>;
    Move(destinationFolderIdOrName: FolderId | WellKnownFolderName): IPromise<Item> {
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
        return this.Service.MoveItem(this.Id, folderId);

    }
    RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean { return this.ExtendedProperties.RemoveExtendedProperty(extendedPropertyDefinition); }
    Save(): IPromise<void>;
    Save(parentFolderName?: WellKnownFolderName): IPromise<void>;
    Save(parentFolderId?: FolderId): IPromise<void>;
    Save(parentFolderIdOrName: FolderId | WellKnownFolderName = null): IPromise<void> {
        var parentFolderId: FolderId = null;
        if (parentFolderIdOrName !== null) {
            parentFolderId = <FolderId> parentFolderIdOrName;
            if (typeof parentFolderIdOrName === 'number') {
                parentFolderId = new FolderId(parentFolderIdOrName);
            }
        }
        return this.InternalCreate(
            parentFolderId,
            MessageDisposition.SaveOnly,
            null);
    }
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): any { throw new Error("Item.ts - SetExtendedProperty : Not implemented."); }
    SetSubject(subject: string): any { throw new Error("Item.ts - SetSubject : Not implemented."); }
    ThrowIfThisIsAttachment(): void {
        if (this.IsAttachment) {
            throw new Error(Strings.OperationDoesNotSupportAttachments);//InvalidOperationException
        }
    }
    Update(conflictResolutionMode: ConflictResolutionMode): IPromise<void>;
    Update(conflictResolutionMode: ConflictResolutionMode, suppressReadReceipts: boolean): IPromise<void>;
    Update(conflictResolutionMode: ConflictResolutionMode, suppressReadReceipts: boolean = false): IPromise<void> {
        return this.InternalUpdate(
            null /* parentFolder */,
            conflictResolutionMode,
            MessageDisposition.SaveOnly,
            null,
            suppressReadReceipts).then((response) => {
                return;
            });
    }
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

    //created this to help find serviceobject type, ServiceObjectInstance instanceof Item fails by creating circular dependency in javascript/typescript
    get InstanceType(): string { return XmlElementNames.Item; }

}