import ServiceObjectSchema = require("./ServiceObjectSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
class ConversationSchema extends ServiceObjectSchema {
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
    RegisterProperties(): any { throw new Error("ConversationSchema.ts - RegisterProperties : Not implemented."); }
}

module ConversationSchema {
    export module FieldUris {
        export var /* static*/ ConversationId: string = "conversation:ConversationId";
        export var /* static*/ ConversationTopic: string = "conversation:ConversationTopic";
        export var /* static*/ UniqueRecipients: string = "conversation:UniqueRecipients";
        export var /* static*/ GlobalUniqueRecipients: string = "conversation:GlobalUniqueRecipients";
        export var /* static*/ UniqueUnreadSenders: string = "conversation:UniqueUnreadSenders";
        export var /* static*/ GlobalUniqueUnreadSenders: string = "conversation:GlobalUniqueUnreadSenders";
        export var /* static*/ UniqueSenders: string = "conversation:UniqueSenders";
        export var /* static*/ GlobalUniqueSenders: string = "conversation:GlobalUniqueSenders";
        export var /* static*/ LastDeliveryTime: string = "conversation:LastDeliveryTime";
        export var /* static*/ GlobalLastDeliveryTime: string = "conversation:GlobalLastDeliveryTime";
        export var /* static*/ Categories: string = "conversation:Categories";
        export var /* static*/ GlobalCategories: string = "conversation:GlobalCategories";
        export var /* static*/ FlagStatus: string = "conversation:FlagStatus";
        export var /* static*/ GlobalFlagStatus: string = "conversation:GlobalFlagStatus";
        export var /* static*/ HasAttachments: string = "conversation:HasAttachments";
        export var /* static*/ GlobalHasAttachments: string = "conversation:GlobalHasAttachments";
        export var /* static*/ MessageCount: string = "conversation:MessageCount";
        export var /* static*/ GlobalMessageCount: string = "conversation:GlobalMessageCount";
        export var /* static*/ UnreadCount: string = "conversation:UnreadCount";
        export var /* static*/ GlobalUnreadCount: string = "conversation:GlobalUnreadCount";
        export var /* static*/ Size: string = "conversation:Size";
        export var /* static*/ GlobalSize: string = "conversation:GlobalSize";
        export var /* static*/ ItemClasses: string = "conversation:ItemClasses";
        export var /* static*/ GlobalItemClasses: string = "conversation:GlobalItemClasses";
        export var /* static*/ Importance: string = "conversation:Importance";
        export var /* static*/ GlobalImportance: string = "conversation:GlobalImportance";
        export var /* static*/ ItemIds: string = "conversation:ItemIds";
        export var /* static*/ GlobalItemIds: string = "conversation:GlobalItemIds";
        export var /* static*/ LastModifiedTime: string = "conversation:LastModifiedTime";
        export var /* static*/ InstanceKey: string = "conversation:InstanceKey";
        export var /* static*/ Preview: string = "conversation:Preview";
        export var /* static*/ IconIndex: string = "conversation:IconIndex";
        export var /* static*/ GlobalIconIndex: string = "conversation:GlobalIconIndex";
        export var /* static*/ DraftItemIds: string = "conversation:DraftItemIds";
        export var /* static*/ HasIrm: string = "conversation:HasIrm";
        export var /* static*/ GlobalHasIrm: string = "conversation:GlobalHasIrm";
    }
}

export = ConversationSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
