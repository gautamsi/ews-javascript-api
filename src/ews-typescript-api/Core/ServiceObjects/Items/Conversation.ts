import ServiceObject = require("../ServiceObject");
class Conversation extends ServiceObject {
    //////Id: ConversationId;
    //////Topic: string;
    //////UniqueRecipients: StringList;
    //////GlobalUniqueRecipients: StringList;
    //////UniqueUnreadSenders: StringList;
    //////GlobalUniqueUnreadSenders: StringList;
    //////UniqueSenders: StringList;
    //////GlobalUniqueSenders: StringList;
    //////LastDeliveryTime: Date;
    //////GlobalLastDeliveryTime: Date;
    //////Categories: StringList;
    //////GlobalCategories: StringList;
    //////FlagStatus: ConversationFlagStatus;
    //////GlobalFlagStatus: ConversationFlagStatus;
    //////HasAttachments: boolean;
    //////GlobalHasAttachments: boolean;
    //////MessageCount: number;
    //////GlobalMessageCount: number;
    //////UnreadCount: number;
    //////GlobalUnreadCount: number;
    //////Size: number;
    //////GlobalSize: number;
    //////ItemClasses: StringList;
    //////GlobalItemClasses: StringList;
    //////Importance: Importance;
    //////GlobalImportance: Importance;
    //////ItemIds: ItemIdCollection;
    //////GlobalItemIds: ItemIdCollection;
    //////LastModifiedTime: Date;
    //////InstanceKey: any[];// System.Byte[];
    //////Preview: string;
    //////IconIndex: IconIndex;
    //////GlobalIconIndex: IconIndex;
    //////DraftItemIds: ItemIdCollection;
    //////HasIrm: boolean;
    //////GlobalHasIrm: boolean;
    //////ClearItemFlags(contextFolderId: FolderId): any { throw new Error("Not implemented."); }
    //////CopyItemsInConversation(contextFolderId: FolderId, destinationFolderId: FolderId): any { throw new Error("Not implemented."); }
    //////DeleteItems(contextFolderId: FolderId, deleteMode: DeleteMode): any { throw new Error("Not implemented."); }
    //////DisableAlwaysCategorizeItems(processSynchronously: boolean): any { throw new Error("Not implemented."); }
    //////DisableAlwaysDeleteItems(processSynchronously: boolean): any { throw new Error("Not implemented."); }
    //////DisableAlwaysMoveItemsInConversation(processSynchronously: boolean): any { throw new Error("Not implemented."); }
    //////EnableAlwaysCategorizeItems(categories: string[]/*System.Collections.Generic.IEnumerable<string>*/, processSynchronously: boolean): any { throw new Error("Not implemented."); }
    //////EnableAlwaysDeleteItems(processSynchronously: boolean): any { throw new Error("Not implemented."); }
    //////EnableAlwaysMoveItems(destinationFolderId: FolderId, processSynchronously: boolean): any { throw new Error("Not implemented."); }
    //////FlagItems(contextFolderId: FolderId, startDate: Date, dueDate: Date): any { throw new Error("Not implemented."); }
    //////FlagItemsComplete(contextFolderId: FolderId, completeDate: Date): any { throw new Error("Not implemented."); }
    //////GetChangeXmlElementName(): string { throw new Error("Not implemented."); }
    //////GetDeleteFieldXmlElementName(): string { throw new Error("Not implemented."); }
    //////GetExtendedProperties(): ExtendedPropertyCollection { throw new Error("Not implemented."); }
    //////GetIdPropertyDefinition(): PropertyDefinition { throw new Error("Not implemented."); }
    //////GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { throw new Error("Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    //////GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    //////GetSetFieldXmlElementName(): string { throw new Error("Not implemented."); }
    //////GetXmlElementName(): string {

    //////    return XmlElementNames.Conversation;
    //////}
    //////InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
    //////InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
    //////MoveItemsInConversation(contextFolderId: FolderId, destinationFolderId: FolderId): any { throw new Error("Not implemented."); }
    ////////SetReadStateForItemsInConversation(contextFolderId: FolderId, isRead: boolean): any { throw new Error("Not implemented."); }
    //////SetReadStateForItemsInConversation(contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): any { throw new Error("Not implemented."); }
    //////SetRetentionPolicyForItemsInConversation(contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: any /*System.Guid*/): any { throw new Error("Not implemented."); }
}

export = Conversation;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;