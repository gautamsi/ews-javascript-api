import XmlElementNames = require("../../XmlElementNames");
import Sensitivity = require("../../../Enumerations/Sensitivity");
import Importance = require("../../../Enumerations/Importance");
import IconIndex = require("../../../Enumerations/IconIndex");
import ComplexPropertyDefinition = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import ItemId = require("../../../ComplexProperties/ItemId");
import MessageBody = require("../../../ComplexProperties/MessageBody");
import StringPropertyDefinition = require("../../../PropertyDefinitions/StringPropertyDefinition");
import MimeContent = require("../../../ComplexProperties/MimeContent");
import FolderId = require("../../../ComplexProperties/FolderId");
import GenericPropertyDefinition = require("../../../PropertyDefinitions/GenericPropertyDefinition");
import AttachmentsPropertyDefinition = require("../../../PropertyDefinitions/AttachmentsPropertyDefinition");
import DateTimePropertyDefinition = require("../../../PropertyDefinitions/DateTimePropertyDefinition");
import IntPropertyDefinition = require("../../../PropertyDefinitions/IntPropertyDefinition");
import StringList = require("../../../ComplexProperties/StringList");
import BoolPropertyDefinition = require("../../../PropertyDefinitions/BoolPropertyDefinition");
import InternetMessageHeaderCollection = require("../../../ComplexProperties/InternetMessageHeaderCollection");
import ResponseObjectsPropertyDefinition = require("../../../PropertyDefinitions/ResponseObjectsPropertyDefinition");
import ScopedDateTimePropertyDefinition = require("../../../PropertyDefinitions/ScopedDateTimePropertyDefinition");
//import AppointmentSchema = require("./AppointmentSchema");
import EffectiveRightsPropertyDefinition = require("../../../PropertyDefinitions/EffectiveRightsPropertyDefinition");
import ConversationId = require("../../../ComplexProperties/ConversationId");
import UniqueBody = require("../../../ComplexProperties/UniqueBody");
import ByteArrayPropertyDefinition = require("../../../PropertyDefinitions/ByteArrayPropertyDefinition");
import NormalizedBody = require("../../../ComplexProperties/NormalizedBody");
import EntityExtractionResult = require("../../../ComplexProperties/EntityExtractionResult");
import Flag = require("../../../ComplexProperties/Flag");
import PolicyTag = require("../../../ComplexProperties/PolicyTag");
import ArchiveTag = require("../../../ComplexProperties/ArchiveTag");
import TextBody = require("../../../ComplexProperties/TextBody");
import ServiceObjectSchema = require("./ServiceObjectSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");



//module ItemSchema {
module FieldUris {
    export var ArchiveTag: string = "item:ArchiveTag";
    export var Attachments: string = "item:Attachments";
    export var Body: string = "item:Body";
    export var Categories: string = "item:Categories";
    export var ConversationId: string = "item:ConversationId";
    export var Culture: string = "item:Culture";
    export var DateTimeCreated: string = "item:DateTimeCreated";
    export var DateTimeReceived: string = "item:DateTimeReceived";
    export var DateTimeSent: string = "item:DateTimeSent";
    export var DisplayCc: string = "item:DisplayCc";
    export var DisplayTo: string = "item:DisplayTo";
    export var EffectiveRights: string = "item:EffectiveRights";
    export var EntityExtractionResult: string = "item:EntityExtractionResult";
    export var Flag: string = "item:Flag";
    export var HasAttachments: string = "item:HasAttachments";
    export var IconIndex: string = "item:IconIndex";
    export var Importance: string = "item:Importance";
    export var InReplyTo: string = "item:InReplyTo";
    export var InstanceKey: string = "item:InstanceKey";
    export var InternetMessageHeaders: string = "item:InternetMessageHeaders";
    export var IsAssociated: string = "item:IsAssociated";
    export var IsDraft: string = "item:IsDraft";
    export var IsFromMe: string = "item:IsFromMe";
    export var IsResend: string = "item:IsResend";
    export var IsSubmitted: string = "item:IsSubmitted";
    export var IsUnmodified: string = "item:IsUnmodified";
    export var ItemClass: string = "item:ItemClass";
    export var ItemId: string = "item:ItemId";
    export var LastModifiedName: string = "item:LastModifiedName";
    export var LastModifiedTime: string = "item:LastModifiedTime";
    export var MimeContent: string = "item:MimeContent";
    export var NormalizedBody: string = "item:NormalizedBody";
    export var ParentFolderId: string = "item:ParentFolderId";
    export var PolicyTag: string = "item:PolicyTag";
    export var Preview: string = "item:Preview";
    export var ReminderDueBy: string = "item:ReminderDueBy";
    export var ReminderIsSet: string = "item:ReminderIsSet";
    export var ReminderMinutesBeforeStart: string = "item:ReminderMinutesBeforeStart";
    export var ResponseObjects: string = "item:ResponseObjects";
    export var RetentionDate: string = "item:RetentionDate";
    export var Sensitivity: string = "item:Sensitivity";
    export var Size: string = "item:Size";
    export var StoreEntryId: string = "item:StoreEntryId";
    export var Subject: string = "item:Subject";
    export var TextBody: string = "item:TextBody";
    export var UniqueBody: string = "item:UniqueBody";
    export var WebClientEditFormQueryString: string = "item:WebClientEditFormQueryString";
    export var WebClientReadFormQueryString: string = "item:WebClientReadFormQueryString";
}
//}



class ItemSchema extends ServiceObjectSchema {
    static Id: PropertyDefinition = new ComplexPropertyDefinition<ItemId>(
        "Id",
        XmlElementNames.ItemId,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ItemId,
        PropertyDefinitionFlags.CanFind,
        () => { return new ItemId(); }
        );

    static Body: PropertyDefinition = new ComplexPropertyDefinition<MessageBody>(
        "Body",
        XmlElementNames.Body,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Body,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new MessageBody(); }
        );

    static ItemClass: PropertyDefinition = new StringPropertyDefinition(
        "ItemClass",
        XmlElementNames.ItemClass,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ItemClass,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static Subject: PropertyDefinition = new StringPropertyDefinition(
        "Subject",
        XmlElementNames.Subject,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Subject,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static MimeContent: PropertyDefinition = new ComplexPropertyDefinition<MimeContent>(
        "MimeContent",
        XmlElementNames.MimeContent,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MimeContent,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        () => { return new MimeContent(); }
        );

    static ParentFolderId: PropertyDefinition = new ComplexPropertyDefinition<FolderId>(
        "ParentFolderId",
        XmlElementNames.ParentFolderId,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ParentFolderId,
        PropertyDefinitionFlags.CanFind,
        () => { return new FolderId(); }
        );

    static Sensitivity: PropertyDefinition = new GenericPropertyDefinition<Sensitivity>(
        "Sensitivity",
        XmlElementNames.Sensitivity,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Sensitivity,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static Attachments: PropertyDefinition = new AttachmentsPropertyDefinition("Attachments");

    static DateTimeReceived: PropertyDefinition = new DateTimePropertyDefinition(
        "DateTimeReceived",
        XmlElementNames.DateTimeReceived,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DateTimeReceived,
        PropertyDefinitionFlags.CanFind
        );

    static Size: PropertyDefinition = new IntPropertyDefinition(
        "Size",
        XmlElementNames.Size,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Size,
        PropertyDefinitionFlags.CanFind
        );

    static Categories: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Categories",
        XmlElementNames.Categories,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Categories,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        () => { return new StringList(); }
        );

    static Importance: PropertyDefinition = new GenericPropertyDefinition<Importance>(
        "Importance",
        XmlElementNames.Importance,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Importance,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static InReplyTo: PropertyDefinition = new StringPropertyDefinition(
        "InReplyTo",
        XmlElementNames.InReplyTo,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.InReplyTo,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static IsSubmitted: PropertyDefinition = new BoolPropertyDefinition(
        "IsSubmitted",
        XmlElementNames.IsSubmitted,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsSubmitted,
        PropertyDefinitionFlags.CanFind
        );

    static IsAssociated: PropertyDefinition = new BoolPropertyDefinition(
        "IsAssociated",
        XmlElementNames.IsAssociated,
        ExchangeVersion.Exchange2010,
        FieldUris.IsAssociated,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanFind
        );

    static IsDraft: PropertyDefinition = new BoolPropertyDefinition(
        "IsDraft",
        XmlElementNames.IsDraft,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsDraft,
        PropertyDefinitionFlags.CanFind
        );

    static IsFromMe: PropertyDefinition = new BoolPropertyDefinition(
        "IsFromMe",
        XmlElementNames.IsFromMe,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsFromMe,
        PropertyDefinitionFlags.CanFind
        );

    static IsResend: PropertyDefinition = new BoolPropertyDefinition(
        "IsResend",
        XmlElementNames.IsResend,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsResend,
        PropertyDefinitionFlags.CanFind
        );

    static IsUnmodified: PropertyDefinition = new BoolPropertyDefinition(
        "IsUnmodified",
        XmlElementNames.IsUnmodified,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsUnmodified,
        PropertyDefinitionFlags.CanFind
        );

    static InternetMessageHeaders: PropertyDefinition = new ComplexPropertyDefinition<InternetMessageHeaderCollection>(
        "InternetMessageHeaders",
        XmlElementNames.InternetMessageHeaders,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.InternetMessageHeaders,
        PropertyDefinitionFlags.None,
        () => { return new InternetMessageHeaderCollection(); }
        );

    static DateTimeSent: PropertyDefinition = new DateTimePropertyDefinition(
        "DateTimeSent",
        XmlElementNames.DateTimeSent,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DateTimeSent,
        PropertyDefinitionFlags.CanFind
        );

    static DateTimeCreated: PropertyDefinition = new DateTimePropertyDefinition(
        "DateTimeCreated",
        XmlElementNames.DateTimeCreated,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DateTimeCreated,
        PropertyDefinitionFlags.CanFind
        );

    static AllowedResponseActions: PropertyDefinition = new ResponseObjectsPropertyDefinition(
        "ResponseObjects",
        XmlElementNames.ResponseObjects,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ResponseObjects,
        PropertyDefinitionFlags.None
        );

    static ReminderDueBy: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "ReminderDueBy",
        XmlElementNames.ReminderDueBy,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ReminderDueBy,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        (version: ExchangeVersion) => { debugger;return ServiceObjectSchema.AppointmentSchema.StartTimeZone; }
        );

    static IsReminderSet: PropertyDefinition = new BoolPropertyDefinition(
        "ReminderIsSet",
        XmlElementNames.ReminderIsSet,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ReminderIsSet,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static ReminderMinutesBeforeStart: PropertyDefinition = new IntPropertyDefinition(
        "ReminderMinutesBeforeStart",
        XmlElementNames.ReminderMinutesBeforeStart,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ReminderMinutesBeforeStart,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static DisplayCc: PropertyDefinition = new StringPropertyDefinition(
        "DisplayCc",
        XmlElementNames.DisplayCc,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DisplayCc,
        PropertyDefinitionFlags.CanFind
        );

    static DisplayTo: PropertyDefinition = new StringPropertyDefinition(
        "DisplayTo",
        XmlElementNames.DisplayTo,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DisplayTo,
        PropertyDefinitionFlags.CanFind
        );

    static HasAttachments: PropertyDefinition = new BoolPropertyDefinition(
        "HasAttachments",
        XmlElementNames.HasAttachments,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.HasAttachments,
        PropertyDefinitionFlags.CanFind
        );

    static Culture: PropertyDefinition = new StringPropertyDefinition(
        "Culture",
        XmlElementNames.Culture,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Culture,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static EffectiveRights: PropertyDefinition = new EffectiveRightsPropertyDefinition(
        "EffectiveRights",
        XmlElementNames.EffectiveRights,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.EffectiveRights,
        PropertyDefinitionFlags.CanFind
        );

    static LastModifiedName: PropertyDefinition = new StringPropertyDefinition(
        "LastModifiedName",
        XmlElementNames.LastModifiedName,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.LastModifiedName,
        PropertyDefinitionFlags.CanFind
        );

    static LastModifiedTime: PropertyDefinition = new DateTimePropertyDefinition(
        "LastModifiedTime",
        XmlElementNames.LastModifiedTime,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.LastModifiedTime,
        PropertyDefinitionFlags.CanFind
        );

    static WebClientReadFormQueryString: PropertyDefinition = new StringPropertyDefinition(
        "WebClientReadFormQueryString",
        XmlElementNames.WebClientReadFormQueryString,
        ExchangeVersion.Exchange2010,
        FieldUris.WebClientReadFormQueryString,
        PropertyDefinitionFlags.CanFind
        );

    static WebClientEditFormQueryString: PropertyDefinition = new StringPropertyDefinition(
        "WebClientEditFormQueryString",
        XmlElementNames.WebClientEditFormQueryString,
        ExchangeVersion.Exchange2010,
        FieldUris.WebClientEditFormQueryString,
        PropertyDefinitionFlags.CanFind
        );

    static ConversationId: PropertyDefinition = new ComplexPropertyDefinition<ConversationId>(
        "ConversationId",
        XmlElementNames.ConversationId,
        ExchangeVersion.Exchange2010,
        FieldUris.ConversationId,
        PropertyDefinitionFlags.CanFind,
        () => { return new ConversationId(); }
        );

    static UniqueBody: PropertyDefinition = new ComplexPropertyDefinition<UniqueBody>(
        "UniqueBody",
        XmlElementNames.UniqueBody,
        ExchangeVersion.Exchange2010,
        FieldUris.UniqueBody,
        PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        () => { return new UniqueBody(); }
        );

    static StoreEntryId: PropertyDefinition = new ByteArrayPropertyDefinition(
        "StoreEntryId",
        XmlElementNames.StoreEntryId,
        ExchangeVersion.Exchange2010_SP2,
        FieldUris.StoreEntryId,
        PropertyDefinitionFlags.CanFind
        );

    static InstanceKey: PropertyDefinition = new ByteArrayPropertyDefinition(
        "InstanceKey",
        XmlElementNames.InstanceKey,
        ExchangeVersion.Exchange2013,
        FieldUris.InstanceKey,
        PropertyDefinitionFlags.CanFind
        );

    static NormalizedBody: PropertyDefinition = new ComplexPropertyDefinition<NormalizedBody>(
        "NormalizedBody",
        XmlElementNames.NormalizedBody,
        ExchangeVersion.Exchange2013,
        FieldUris.NormalizedBody,
        PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        () => { return new NormalizedBody(); }
        );

    static EntityExtractionResult: PropertyDefinition = new ComplexPropertyDefinition<EntityExtractionResult>(
        "EntityExtractionResult",
        XmlElementNames.NlgEntityExtractionResult,
        ExchangeVersion.Exchange2013,
        FieldUris.EntityExtractionResult,
        PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        () => { return new EntityExtractionResult(); }
        );

    static Flag: PropertyDefinition = new ComplexPropertyDefinition<Flag>(
        "Flag",
        XmlElementNames.Flag,
        ExchangeVersion.Exchange2013,
        FieldUris.Flag,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        () => { return new Flag(); }
        );

    static PolicyTag: PropertyDefinition = new ComplexPropertyDefinition<PolicyTag>(
        "PolicyTag",
        XmlElementNames.PolicyTag,
        ExchangeVersion.Exchange2013,
        FieldUris.PolicyTag,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        () => { return new PolicyTag(); }
        );

    static ArchiveTag: PropertyDefinition = new ComplexPropertyDefinition<ArchiveTag>(
        "ArchiveTag",
        XmlElementNames.ArchiveTag,
        ExchangeVersion.Exchange2013,
        FieldUris.ArchiveTag,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        () => { return new ArchiveTag(); }
        );

    static RetentionDate: PropertyDefinition = new DateTimePropertyDefinition(
        "RetentionDate",
        XmlElementNames.RetentionDate,
        ExchangeVersion.Exchange2013,
        FieldUris.RetentionDate,
        PropertyDefinitionFlags.CanFind,
        true
        );

    static Preview: PropertyDefinition = new StringPropertyDefinition(
        "Preview",
        XmlElementNames.Preview,
        ExchangeVersion.Exchange2013,
        FieldUris.Preview,
        PropertyDefinitionFlags.CanFind
        );

    static TextBody: PropertyDefinition = new ComplexPropertyDefinition<TextBody>(
        "TextBody",
        XmlElementNames.TextBody,
        ExchangeVersion.Exchange2013,
        FieldUris.TextBody,
        PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        () => { return new TextBody(); }
        );

    static IconIndex: PropertyDefinition = new GenericPropertyDefinition<IconIndex>(
        "IconIndex",
        XmlElementNames.IconIndex,
        ExchangeVersion.Exchange2013,
        FieldUris.IconIndex,
        PropertyDefinitionFlags.CanFind
        );

    static Instance: ItemSchema = new ItemSchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(ItemSchema.MimeContent);
        super.RegisterProperty(ItemSchema.Id);
        super.RegisterProperty(ItemSchema.ParentFolderId);
        super.RegisterProperty(ItemSchema.ItemClass);
        super.RegisterProperty(ItemSchema.Subject);
        super.RegisterProperty(ItemSchema.Sensitivity);
        super.RegisterProperty(ItemSchema.Body);
        super.RegisterProperty(ItemSchema.Attachments);
        super.RegisterProperty(ItemSchema.DateTimeReceived);
        super.RegisterProperty(ItemSchema.Size);
        super.RegisterProperty(ItemSchema.Categories);
        super.RegisterProperty(ItemSchema.Importance);
        super.RegisterProperty(ItemSchema.InReplyTo);
        super.RegisterProperty(ItemSchema.IsSubmitted);
        super.RegisterProperty(ItemSchema.IsDraft);
        super.RegisterProperty(ItemSchema.IsFromMe);
        super.RegisterProperty(ItemSchema.IsResend);
        super.RegisterProperty(ItemSchema.IsUnmodified);
        super.RegisterProperty(ItemSchema.InternetMessageHeaders);
        super.RegisterProperty(ItemSchema.DateTimeSent);
        super.RegisterProperty(ItemSchema.DateTimeCreated);
        super.RegisterProperty(ItemSchema.AllowedResponseActions);
        super.RegisterProperty(ItemSchema.ReminderDueBy);
        super.RegisterProperty(ItemSchema.IsReminderSet);
        super.RegisterProperty(ItemSchema.ReminderMinutesBeforeStart);
        super.RegisterProperty(ItemSchema.DisplayCc);
        super.RegisterProperty(ItemSchema.DisplayTo);
        super.RegisterProperty(ItemSchema.HasAttachments);
        super.RegisterProperty(ServiceObjectSchema.ExtendedProperties);
        super.RegisterProperty(ItemSchema.Culture);
        super.RegisterProperty(ItemSchema.EffectiveRights);
        super.RegisterProperty(ItemSchema.LastModifiedName);
        super.RegisterProperty(ItemSchema.LastModifiedTime);
        super.RegisterProperty(ItemSchema.IsAssociated);
        super.RegisterProperty(ItemSchema.WebClientReadFormQueryString);
        super.RegisterProperty(ItemSchema.WebClientEditFormQueryString);
        super.RegisterProperty(ItemSchema.ConversationId);
        super.RegisterProperty(ItemSchema.UniqueBody);
        super.RegisterProperty(ItemSchema.Flag);
        super.RegisterProperty(ItemSchema.StoreEntryId);
        super.RegisterProperty(ItemSchema.InstanceKey);
        super.RegisterProperty(ItemSchema.NormalizedBody);
        super.RegisterProperty(ItemSchema.EntityExtractionResult);
        super.RegisterProperty(ItemSchema.PolicyTag);
        super.RegisterProperty(ItemSchema.ArchiveTag);
        super.RegisterProperty(ItemSchema.RetentionDate);
        super.RegisterProperty(ItemSchema.Preview);
        super.RegisterProperty(ItemSchema.TextBody);
        super.RegisterProperty(ItemSchema.IconIndex);
    }
}



export = ItemSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
