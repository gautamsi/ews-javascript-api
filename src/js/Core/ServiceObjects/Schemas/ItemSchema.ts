import ServiceObjectSchema = require("./ServiceObjectSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");



//module ItemSchema {
module FieldUris {
    export var ItemId: string = "item:ItemId";
    export var ParentFolderId: string = "item:ParentFolderId";
    export var ItemClass: string = "item:ItemClass";
    export var MimeContent: string = "item:MimeContent";
    export var Attachments: string = "item:Attachments";
    export var Subject: string = "item:Subject";
    export var DateTimeReceived: string = "item:DateTimeReceived";
    export var Size: string = "item:Size";
    export var Categories: string = "item:Categories";
    export var HasAttachments: string = "item:HasAttachments";
    export var Importance: string = "item:Importance";
    export var InReplyTo: string = "item:InReplyTo";
    export var InternetMessageHeaders: string = "item:InternetMessageHeaders";
    export var IsAssociated: string = "item:IsAssociated";
    export var IsDraft: string = "item:IsDraft";
    export var IsFromMe: string = "item:IsFromMe";
    export var IsResend: string = "item:IsResend";
    export var IsSubmitted: string = "item:IsSubmitted";
    export var IsUnmodified: string = "item:IsUnmodified";
    export var DateTimeSent: string = "item:DateTimeSent";
    export var DateTimeCreated: string = "item:DateTimeCreated";
    export var Body: string = "item:Body";
    export var ResponseObjects: string = "item:ResponseObjects";
    export var Sensitivity: string = "item:Sensitivity";
    export var ReminderDueBy: string = "item:ReminderDueBy";
    export var ReminderIsSet: string = "item:ReminderIsSet";
    export var ReminderMinutesBeforeStart: string = "item:ReminderMinutesBeforeStart";
    export var DisplayTo: string = "item:DisplayTo";
    export var DisplayCc: string = "item:DisplayCc";
    export var Culture: string = "item:Culture";
    export var EffectiveRights: string = "item:EffectiveRights";
    export var LastModifiedName: string = "item:LastModifiedName";
    export var LastModifiedTime: string = "item:LastModifiedTime";
    export var WebClientReadFormQueryString: string = "item:WebClientReadFormQueryString";
    export var WebClientEditFormQueryString: string = "item:WebClientEditFormQueryString";
    export var ConversationId: string = "item:ConversationId";
    export var UniqueBody: string = "item:UniqueBody";
    export var StoreEntryId: string = "item:StoreEntryId";
    export var InstanceKey: string = "item:InstanceKey";
    export var NormalizedBody: string = "item:NormalizedBody";
    export var EntityExtractionResult: string = "item:EntityExtractionResult";
    export var Flag: string = "item:Flag";
    export var PolicyTag: string = "item:PolicyTag";
    export var ArchiveTag: string = "item:ArchiveTag";
    export var RetentionDate: string = "item:RetentionDate";
    export var Preview: string = "item:Preview";
    export var TextBody: string = "item:TextBody";
    export var IconIndex: string = "item:IconIndex";
}
//}



class ItemSchema extends ServiceObjectSchema {
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
    RegisterProperties(): any { throw new Error("ItemSchema.ts - RegisterProperties : Not implemented."); }
}



export = ItemSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
