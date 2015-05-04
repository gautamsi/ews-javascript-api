import ServiceObjectSchema = require("./ServiceObjectSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
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
    RegisterProperties(): any { throw new Error("Not implemented."); }
}


module ItemSchema {
    export module FieldUris {
        export var /* static*/ ItemId: string = "item:ItemId";
        export var /* static*/ ParentFolderId: string = "item:ParentFolderId";
        export var /* static*/ ItemClass: string = "item:ItemClass";
        export var /* static*/ MimeContent: string = "item:MimeContent";
        export var /* static*/ Attachments: string = "item:Attachments";
        export var /* static*/ Subject: string = "item:Subject";
        export var /* static*/ DateTimeReceived: string = "item:DateTimeReceived";
        export var /* static*/ Size: string = "item:Size";
        export var /* static*/ Categories: string = "item:Categories";
        export var /* static*/ HasAttachments: string = "item:HasAttachments";
        export var /* static*/ Importance: string = "item:Importance";
        export var /* static*/ InReplyTo: string = "item:InReplyTo";
        export var /* static*/ InternetMessageHeaders: string = "item:InternetMessageHeaders";
        export var /* static*/ IsAssociated: string = "item:IsAssociated";
        export var /* static*/ IsDraft: string = "item:IsDraft";
        export var /* static*/ IsFromMe: string = "item:IsFromMe";
        export var /* static*/ IsResend: string = "item:IsResend";
        export var /* static*/ IsSubmitted: string = "item:IsSubmitted";
        export var /* static*/ IsUnmodified: string = "item:IsUnmodified";
        export var /* static*/ DateTimeSent: string = "item:DateTimeSent";
        export var /* static*/ DateTimeCreated: string = "item:DateTimeCreated";
        export var /* static*/ Body: string = "item:Body";
        export var /* static*/ ResponseObjects: string = "item:ResponseObjects";
        export var /* static*/ Sensitivity: string = "item:Sensitivity";
        export var /* static*/ ReminderDueBy: string = "item:ReminderDueBy";
        export var /* static*/ ReminderIsSet: string = "item:ReminderIsSet";
        export var /* static*/ ReminderMinutesBeforeStart: string = "item:ReminderMinutesBeforeStart";
        export var /* static*/ DisplayTo: string = "item:DisplayTo";
        export var /* static*/ DisplayCc: string = "item:DisplayCc";
        export var /* static*/ Culture: string = "item:Culture";
        export var /* static*/ EffectiveRights: string = "item:EffectiveRights";
        export var /* static*/ LastModifiedName: string = "item:LastModifiedName";
        export var /* static*/ LastModifiedTime: string = "item:LastModifiedTime";
        export var /* static*/ WebClientReadFormQueryString: string = "item:WebClientReadFormQueryString";
        export var /* static*/ WebClientEditFormQueryString: string = "item:WebClientEditFormQueryString";
        export var /* static*/ ConversationId: string = "item:ConversationId";
        export var /* static*/ UniqueBody: string = "item:UniqueBody";
        export var /* static*/ StoreEntryId: string = "item:StoreEntryId";
        export var /* static*/ InstanceKey: string = "item:InstanceKey";
        export var /* static*/ NormalizedBody: string = "item:NormalizedBody";
        export var /* static*/ EntityExtractionResult: string = "item:EntityExtractionResult";
        export var /* static*/ Flag: string = "item:Flag";
        export var /* static*/ PolicyTag: string = "item:PolicyTag";
        export var /* static*/ ArchiveTag: string = "item:ArchiveTag";
        export var /* static*/ RetentionDate: string = "item:RetentionDate";
        export var /* static*/ Preview: string = "item:Preview";
        export var /* static*/ TextBody: string = "item:TextBody";
        export var /* static*/ IconIndex: string = "item:IconIndex";
    }
}



export = ItemSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
