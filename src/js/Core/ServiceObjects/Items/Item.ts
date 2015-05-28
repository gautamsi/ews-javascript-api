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
import ServiceObject = require("../ServiceObject");
class Item extends ServiceObject {
//    constructor(obj: any) { super(obj); }

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
    StoreEntryId: any[];// System.Byte[];
    InstanceKey: any[];// System.Byte[];
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
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Item { throw new Error("Item.ts - Bind : Not implemented."); }
    Copy(destinationFolderName: WellKnownFolderName): Item { throw new Error("Item.ts - Copy : Not implemented."); }
    //Copy(destinationFolderId: FolderId): Item { throw new Error("Item.ts - Copy : Not implemented."); }
    Delete(deleteMode: DeleteMode): any { throw new Error("Item.ts - Delete : Not implemented."); }
    //Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean): any { throw new Error("Item.ts - Delete : Not implemented."); }
    GetExtendedProperties(): ExtendedPropertyCollection { throw new Error("Item.ts - GetExtendedProperties : Not implemented."); }
    GetIdPropertyDefinition(): PropertyDefinition { throw new Error("Item.ts - GetIdPropertyDefinition : Not implemented."); }
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { throw new Error("Item.ts - GetIsTimeZoneHeaderRequired : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Item.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetSchema(): ServiceObjectSchema { throw new Error("Item.ts - GetSchema : Not implemented."); }
    HasUnprocessedAttachmentChanges(): boolean { throw new Error("Item.ts - HasUnprocessedAttachmentChanges : Not implemented."); }
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): any { throw new Error("Item.ts - InternalCreate : Not implemented."); }
    //InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): any { throw new Error("Item.ts - InternalDelete : Not implemented."); }
    //InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any;//{ throw new Error("Item.ts - InternalDelete : Not implemented.");}
    InternalLoad(propertySet: PropertySet): any { throw new Error("Item.ts - InternalLoad : Not implemented."); }
    InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Item { throw new Error("Item.ts - InternalUpdate : Not implemented."); }
    //InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Item { throw new Error("Item.ts - InternalUpdate : Not implemented."); }
    Move(destinationFolderId: FolderId): Item { throw new Error("Item.ts - Move : Not implemented."); }
    //Move(destinationFolderName: WellKnownFolderName): Item { throw new Error("Item.ts - Move : Not implemented."); }
    RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean { throw new Error("Item.ts - RemoveExtendedProperty : Not implemented."); }
    Save(parentFolderId: FolderId): any { throw new Error("Item.ts - Save : Not implemented."); }
    //Save(parentFolderName: WellKnownFolderName): any { throw new Error("Item.ts - Save : Not implemented."); }
    //Save(): any { throw new Error("Item.ts - Save : Not implemented."); }
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): any { throw new Error("Item.ts - SetExtendedProperty : Not implemented."); }
    SetSubject(subject: string): any { throw new Error("Item.ts - SetSubject : Not implemented."); }
    ThrowIfThisIsAttachment(): any { throw new Error("Item.ts - ThrowIfThisIsAttachment : Not implemented."); }
    Update(conflictResolutionMode: ConflictResolutionMode, suppressReadReceipts: boolean): any { throw new Error("Item.ts - Update : Not implemented."); }
    //Update(conflictResolutionMode: ConflictResolutionMode): any { throw new Error("Item.ts - Update : Not implemented."); }
    Validate(): any { throw new Error("Item.ts - Validate : Not implemented."); }

    //created this to keep item and folder object away frmo here. modularization would fail and create a larger file
    IsItemInstance(): boolean { return true; }//only item instance would return true.

}

export = Item;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
