import ServiceObjectSchema = require("./ServiceObjectSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

//module ConversationSchema {
module FieldUris {
    export var ConversationId: string = "conversation:ConversationId";
    export var ConversationTopic: string = "conversation:ConversationTopic";
    export var UniqueRecipients: string = "conversation:UniqueRecipients";
    export var GlobalUniqueRecipients: string = "conversation:GlobalUniqueRecipients";
    export var UniqueUnreadSenders: string = "conversation:UniqueUnreadSenders";
    export var GlobalUniqueUnreadSenders: string = "conversation:GlobalUniqueUnreadSenders";
    export var UniqueSenders: string = "conversation:UniqueSenders";
    export var GlobalUniqueSenders: string = "conversation:GlobalUniqueSenders";
    export var LastDeliveryTime: string = "conversation:LastDeliveryTime";
    export var GlobalLastDeliveryTime: string = "conversation:GlobalLastDeliveryTime";
    export var Categories: string = "conversation:Categories";
    export var GlobalCategories: string = "conversation:GlobalCategories";
    export var FlagStatus: string = "conversation:FlagStatus";
    export var GlobalFlagStatus: string = "conversation:GlobalFlagStatus";
    export var HasAttachments: string = "conversation:HasAttachments";
    export var GlobalHasAttachments: string = "conversation:GlobalHasAttachments";
    export var MessageCount: string = "conversation:MessageCount";
    export var GlobalMessageCount: string = "conversation:GlobalMessageCount";
    export var UnreadCount: string = "conversation:UnreadCount";
    export var GlobalUnreadCount: string = "conversation:GlobalUnreadCount";
    export var Size: string = "conversation:Size";
    export var GlobalSize: string = "conversation:GlobalSize";
    export var ItemClasses: string = "conversation:ItemClasses";
    export var GlobalItemClasses: string = "conversation:GlobalItemClasses";
    export var Importance: string = "conversation:Importance";
    export var GlobalImportance: string = "conversation:GlobalImportance";
    export var ItemIds: string = "conversation:ItemIds";
    export var GlobalItemIds: string = "conversation:GlobalItemIds";
    export var LastModifiedTime: string = "conversation:LastModifiedTime";
    export var InstanceKey: string = "conversation:InstanceKey";
    export var Preview: string = "conversation:Preview";
    export var IconIndex: string = "conversation:IconIndex";
    export var GlobalIconIndex: string = "conversation:GlobalIconIndex";
    export var DraftItemIds: string = "conversation:DraftItemIds";
    export var HasIrm: string = "conversation:HasIrm";
    export var GlobalHasIrm: string = "conversation:GlobalHasIrm";
}
//}

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

export = ConversationSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
