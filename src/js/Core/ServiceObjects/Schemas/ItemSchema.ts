import {XmlElementNames} from "../../XmlElementNames";
import {Sensitivity} from "../../../Enumerations/Sensitivity";
import {Importance} from "../../../Enumerations/Importance";
import {IconIndex} from "../../../Enumerations/IconIndex";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {StringPropertyDefinition} from "../../../PropertyDefinitions/StringPropertyDefinition";
import {MimeContent} from "../../../ComplexProperties/MimeContent";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {AttachmentsPropertyDefinition} from "../../../PropertyDefinitions/AttachmentsPropertyDefinition";
import {DateTimePropertyDefinition} from "../../../PropertyDefinitions/DateTimePropertyDefinition";
import {IntPropertyDefinition} from "../../../PropertyDefinitions/IntPropertyDefinition";
import {StringList} from "../../../ComplexProperties/StringList";
import {BoolPropertyDefinition} from "../../../PropertyDefinitions/BoolPropertyDefinition";
import {InternetMessageHeaderCollection} from "../../../ComplexProperties/InternetMessageHeaderCollection";
import {ResponseObjectsPropertyDefinition} from "../../../PropertyDefinitions/ResponseObjectsPropertyDefinition";
import {ScopedDateTimePropertyDefinition} from "../../../PropertyDefinitions/ScopedDateTimePropertyDefinition";
//import AppointmentSchema = require("./AppointmentSchema");
import {EffectiveRightsPropertyDefinition} from "../../../PropertyDefinitions/EffectiveRightsPropertyDefinition";
import {ConversationId} from "../../../ComplexProperties/ConversationId";
import {UniqueBody} from "../../../ComplexProperties/UniqueBody";
import {ByteArrayPropertyDefinition} from "../../../PropertyDefinitions/ByteArrayPropertyDefinition";
import {NormalizedBody} from "../../../ComplexProperties/NormalizedBody";
import {EntityExtractionResult} from "../../../ComplexProperties/EntityExtractionResult";
import {Flag} from "../../../ComplexProperties/Flag";
import {PolicyTag} from "../../../ComplexProperties/PolicyTag";
import {ArchiveTag} from "../../../ComplexProperties/ArchiveTag";
import {TextBody} from "../../../ComplexProperties/TextBody";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";

/**
 * Field URIs for Item.
 */
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

/**
 * Represents the schema for generic items.
 */
export class ItemSchema extends ServiceObjectSchema {

    /**
     * Defines the **Id** property.
     */
    public static Id: PropertyDefinition = new ComplexPropertyDefinition<ItemId>(
        "Id",
        XmlElementNames.ItemId,
        FieldUris.ItemId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new ItemId(); }
    );

    /**
     * Defines the **Body** property.
     */
    public static Body: PropertyDefinition = new ComplexPropertyDefinition<MessageBody>(
        "Body",
        XmlElementNames.Body,
        FieldUris.Body,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new MessageBody(); }
    );

    /**
     * Defines the **ItemClass** property.
     */
    public static ItemClass: PropertyDefinition = new StringPropertyDefinition(
        "ItemClass",
        XmlElementNames.ItemClass,
        FieldUris.ItemClass,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Subject** property.
     */
    public static Subject: PropertyDefinition = new StringPropertyDefinition(
        "Subject",
        XmlElementNames.Subject,
        FieldUris.Subject,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **MimeContent** property.
     */
    public static MimeContent: PropertyDefinition = new ComplexPropertyDefinition<MimeContent>(
        "MimeContent",
        XmlElementNames.MimeContent,
        FieldUris.MimeContent,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new MimeContent(); }
    );

    /**
     * Defines the **ParentFolderId** property.
     */
    public static ParentFolderId: PropertyDefinition = new ComplexPropertyDefinition<FolderId>(
        "ParentFolderId",
        XmlElementNames.ParentFolderId,
        FieldUris.ParentFolderId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new FolderId(); }
    );

    /**
     * Defines the **Sensitivity** property.
     */
    public static Sensitivity: PropertyDefinition = new GenericPropertyDefinition<Sensitivity>(
        "Sensitivity",
        XmlElementNames.Sensitivity,
        FieldUris.Sensitivity,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Attachments** property.
     */
    public static Attachments: PropertyDefinition = new AttachmentsPropertyDefinition("Attachments");

    /**
     * Defines the **DateTimeReceived** property.
     */
    public static DateTimeReceived: PropertyDefinition = new DateTimePropertyDefinition(
        "DateTimeReceived",
        XmlElementNames.DateTimeReceived,
        FieldUris.DateTimeReceived,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Size** property.
     */
    public static Size: PropertyDefinition = new IntPropertyDefinition(
        "Size",
        XmlElementNames.Size,
        FieldUris.Size,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Categories** property.
     */
    public static Categories: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Categories",
        XmlElementNames.Categories,
        FieldUris.Categories,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **Importance** property.
     */
    public static Importance: PropertyDefinition = new GenericPropertyDefinition<Importance>(
        "Importance",
        XmlElementNames.Importance,
        FieldUris.Importance,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **InReplyTo** property.
     */
    public static InReplyTo: PropertyDefinition = new StringPropertyDefinition(
        "InReplyTo",
        XmlElementNames.InReplyTo,
        FieldUris.InReplyTo,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsSubmitted** property.
     */
    public static IsSubmitted: PropertyDefinition = new BoolPropertyDefinition(
        "IsSubmitted",
        XmlElementNames.IsSubmitted,
        FieldUris.IsSubmitted,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsAssociated** property.
     */
    public static IsAssociated: PropertyDefinition = new BoolPropertyDefinition(
        "IsAssociated",
        XmlElementNames.IsAssociated,
        FieldUris.IsAssociated,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010
    );

    /**
     * Defines the **IsDraft** property.
     */
    public static IsDraft: PropertyDefinition = new BoolPropertyDefinition(
        "IsDraft",
        XmlElementNames.IsDraft,
        FieldUris.IsDraft,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsFromMe** property.
     */
    public static IsFromMe: PropertyDefinition = new BoolPropertyDefinition(
        "IsFromMe",
        XmlElementNames.IsFromMe,
        FieldUris.IsFromMe,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsResend** property.
     */
    public static IsResend: PropertyDefinition = new BoolPropertyDefinition(
        "IsResend",
        XmlElementNames.IsResend,
        FieldUris.IsResend,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsUnmodified** property.
     */
    public static IsUnmodified: PropertyDefinition = new BoolPropertyDefinition(
        "IsUnmodified",
        XmlElementNames.IsUnmodified,
        FieldUris.IsUnmodified,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **InternetMessageHeaders** property.
     */
    public static InternetMessageHeaders: PropertyDefinition = new ComplexPropertyDefinition<InternetMessageHeaderCollection>(
        "InternetMessageHeaders",
        XmlElementNames.InternetMessageHeaders,
        FieldUris.InternetMessageHeaders,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new InternetMessageHeaderCollection(); }
    );

    /**
     * Defines the **DateTimeSent** property.
     */
    public static DateTimeSent: PropertyDefinition = new DateTimePropertyDefinition(
        "DateTimeSent",
        XmlElementNames.DateTimeSent,
        FieldUris.DateTimeSent,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **DateTimeCreated** property.
     */
    public static DateTimeCreated: PropertyDefinition = new DateTimePropertyDefinition(
        "DateTimeCreated",
        XmlElementNames.DateTimeCreated,
        FieldUris.DateTimeCreated,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **AllowedResponseActions** property.
     */
    public static AllowedResponseActions: PropertyDefinition = new ResponseObjectsPropertyDefinition(
        "ResponseObjects",
        XmlElementNames.ResponseObjects,
        FieldUris.ResponseObjects,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ReminderDueBy** property.
     */
    public static ReminderDueBy: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "ReminderDueBy",
        XmlElementNames.ReminderDueBy,
        FieldUris.ReminderDueBy,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        (version: ExchangeVersion) => { debugger; return Schemas.AppointmentSchema.StartTimeZone; }
    );

    /**
     * Defines the **IsReminderSet** property.
     */
    public static IsReminderSet: PropertyDefinition = new BoolPropertyDefinition(
        "ReminderIsSet",
        XmlElementNames.ReminderIsSet,
        FieldUris.ReminderIsSet,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ReminderMinutesBeforeStart** property.
     */
    public static ReminderMinutesBeforeStart: PropertyDefinition = new IntPropertyDefinition(
        "ReminderMinutesBeforeStart",
        XmlElementNames.ReminderMinutesBeforeStart,
        FieldUris.ReminderMinutesBeforeStart,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **DisplayCc** property.
     */
    public static DisplayCc: PropertyDefinition = new StringPropertyDefinition(
        "DisplayCc",
        XmlElementNames.DisplayCc,
        FieldUris.DisplayCc,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **DisplayTo** property.
     */
    public static DisplayTo: PropertyDefinition = new StringPropertyDefinition(
        "DisplayTo",
        XmlElementNames.DisplayTo,
        FieldUris.DisplayTo,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **HasAttachments** property.
     */
    public static HasAttachments: PropertyDefinition = new BoolPropertyDefinition(
        "HasAttachments",
        XmlElementNames.HasAttachments,
        FieldUris.HasAttachments,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Culture** property.
     */
    public static Culture: PropertyDefinition = new StringPropertyDefinition(
        "Culture",
        XmlElementNames.Culture,
        FieldUris.Culture,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **EffectiveRights** property.
     */
    public static EffectiveRights: PropertyDefinition = new EffectiveRightsPropertyDefinition(
        "EffectiveRights",
        XmlElementNames.EffectiveRights,
        FieldUris.EffectiveRights,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **LastModifiedName** property.
     */
    public static LastModifiedName: PropertyDefinition = new StringPropertyDefinition(
        "LastModifiedName",
        XmlElementNames.LastModifiedName,
        FieldUris.LastModifiedName,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **LastModifiedTime** property.
     */
    public static LastModifiedTime: PropertyDefinition = new DateTimePropertyDefinition(
        "LastModifiedTime",
        XmlElementNames.LastModifiedTime,
        FieldUris.LastModifiedTime,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **WebClientReadFormQueryString** property.
     */
    public static WebClientReadFormQueryString: PropertyDefinition = new StringPropertyDefinition(
        "WebClientReadFormQueryString",
        XmlElementNames.WebClientReadFormQueryString,
        FieldUris.WebClientReadFormQueryString,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010
    );

    /**
     * Defines the **WebClientEditFormQueryString** property.
     */
    public static WebClientEditFormQueryString: PropertyDefinition = new StringPropertyDefinition(
        "WebClientEditFormQueryString",
        XmlElementNames.WebClientEditFormQueryString,
        FieldUris.WebClientEditFormQueryString,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010
    );

    /**
     * Defines the **ConversationId** property.
     */
    public static ConversationId: PropertyDefinition = new ComplexPropertyDefinition<ConversationId>(
        "ConversationId",
        XmlElementNames.ConversationId,
        FieldUris.ConversationId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010,
        () => { return new ConversationId(); }
    );

    /**
     * Defines the **UniqueBody** property.
     */
    public static UniqueBody: PropertyDefinition = new ComplexPropertyDefinition<UniqueBody>(
        "UniqueBody",
        XmlElementNames.UniqueBody,
        FieldUris.UniqueBody,
        PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        ExchangeVersion.Exchange2010,
        () => { return new UniqueBody(); }
    );

    /**
     * Defines the **StoreEntryId** property.
     */
    public static StoreEntryId: PropertyDefinition = new ByteArrayPropertyDefinition(
        "StoreEntryId",
        XmlElementNames.StoreEntryId,
        FieldUris.StoreEntryId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP2
    );

    /**
     * Defines the **InstanceKey** property.
     */
    public static InstanceKey: PropertyDefinition = new ByteArrayPropertyDefinition(
        "InstanceKey",
        XmlElementNames.InstanceKey,
        FieldUris.InstanceKey,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013
    );

    /**
     * Defines the **NormalizedBody** property.
     */
    public static NormalizedBody: PropertyDefinition = new ComplexPropertyDefinition<NormalizedBody>(
        "NormalizedBody",
        XmlElementNames.NormalizedBody,
        FieldUris.NormalizedBody,
        PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        ExchangeVersion.Exchange2013,
        () => { return new NormalizedBody(); }
    );

    /**
     * Defines the **EntityExtractionResult** property.
     */
    public static EntityExtractionResult: PropertyDefinition = new ComplexPropertyDefinition<EntityExtractionResult>(
        "EntityExtractionResult",
        XmlElementNames.NlgEntityExtractionResult,
        FieldUris.EntityExtractionResult,
        PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        ExchangeVersion.Exchange2013,
        () => { return new EntityExtractionResult(); }
    );

    /**
     * Defines the **Flag** property.
     */
    public static Flag: PropertyDefinition = new ComplexPropertyDefinition<Flag>(
        "Flag",
        XmlElementNames.Flag,
        FieldUris.Flag,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        () => { return new Flag(); }
    );

    /**
     * Defines the **PolicyTag** property.
     */
    public static PolicyTag: PropertyDefinition = new ComplexPropertyDefinition<PolicyTag>(
        "PolicyTag",
        XmlElementNames.PolicyTag,
        FieldUris.PolicyTag,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        () => { return new PolicyTag(); }
    );

    /**
     * Defines the **ArchiveTag** property.
     */
    public static ArchiveTag: PropertyDefinition = new ComplexPropertyDefinition<ArchiveTag>(
        "ArchiveTag",
        XmlElementNames.ArchiveTag,
        FieldUris.ArchiveTag,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        () => { return new ArchiveTag(); }
    );

    /**
     * Defines the **RetentionDate** property.
     */
    public static RetentionDate: PropertyDefinition = new DateTimePropertyDefinition(
        "RetentionDate",
        XmlElementNames.RetentionDate,
        FieldUris.RetentionDate,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        true
    );

    /**
     * Defines the **Preview** property.
     */
    public static Preview: PropertyDefinition = new StringPropertyDefinition(
        "Preview",
        XmlElementNames.Preview,
        FieldUris.Preview,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013
    );

    /**
     * Defines the **TextBody** property.
     */
    public static TextBody: PropertyDefinition = new ComplexPropertyDefinition<TextBody>(
        "TextBody",
        XmlElementNames.TextBody,
        FieldUris.TextBody,
        PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        ExchangeVersion.Exchange2013,
        () => { return new TextBody(); }
    );

    /**
     * Defines the **IconIndex** property.
     */
    public static IconIndex: PropertyDefinition = new GenericPropertyDefinition<IconIndex>(
        "IconIndex",
        XmlElementNames.IconIndex,
        FieldUris.IconIndex,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013
    );

    /**
     * @internal Instance of **ItemSchema** 
     */
    static Instance: ItemSchema = new ItemSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(ItemSchema, ItemSchema.MimeContent);
        this.RegisterProperty(ItemSchema, ItemSchema.Id);
        this.RegisterProperty(ItemSchema, ItemSchema.ParentFolderId);
        this.RegisterProperty(ItemSchema, ItemSchema.ItemClass);
        this.RegisterProperty(ItemSchema, ItemSchema.Subject);
        this.RegisterProperty(ItemSchema, ItemSchema.Sensitivity);
        this.RegisterProperty(ItemSchema, ItemSchema.Body);
        this.RegisterProperty(ItemSchema, ItemSchema.Attachments);
        this.RegisterProperty(ItemSchema, ItemSchema.DateTimeReceived);
        this.RegisterProperty(ItemSchema, ItemSchema.Size);
        this.RegisterProperty(ItemSchema, ItemSchema.Categories);
        this.RegisterProperty(ItemSchema, ItemSchema.Importance);
        this.RegisterProperty(ItemSchema, ItemSchema.InReplyTo);
        this.RegisterProperty(ItemSchema, ItemSchema.IsSubmitted);
        this.RegisterProperty(ItemSchema, ItemSchema.IsDraft);
        this.RegisterProperty(ItemSchema, ItemSchema.IsFromMe);
        this.RegisterProperty(ItemSchema, ItemSchema.IsResend);
        this.RegisterProperty(ItemSchema, ItemSchema.IsUnmodified);
        this.RegisterProperty(ItemSchema, ItemSchema.InternetMessageHeaders);
        this.RegisterProperty(ItemSchema, ItemSchema.DateTimeSent);
        this.RegisterProperty(ItemSchema, ItemSchema.DateTimeCreated);
        this.RegisterProperty(ItemSchema, ItemSchema.AllowedResponseActions);
        this.RegisterProperty(ItemSchema, ItemSchema.ReminderDueBy);
        this.RegisterProperty(ItemSchema, ItemSchema.IsReminderSet);
        this.RegisterProperty(ItemSchema, ItemSchema.ReminderMinutesBeforeStart);
        this.RegisterProperty(ItemSchema, ItemSchema.DisplayCc);
        this.RegisterProperty(ItemSchema, ItemSchema.DisplayTo);
        this.RegisterProperty(ItemSchema, ItemSchema.HasAttachments);
        this.RegisterProperty(ItemSchema, ServiceObjectSchema.ExtendedProperties);
        this.RegisterProperty(ItemSchema, ItemSchema.Culture);
        this.RegisterProperty(ItemSchema, ItemSchema.EffectiveRights);
        this.RegisterProperty(ItemSchema, ItemSchema.LastModifiedName);
        this.RegisterProperty(ItemSchema, ItemSchema.LastModifiedTime);
        this.RegisterProperty(ItemSchema, ItemSchema.IsAssociated);
        this.RegisterProperty(ItemSchema, ItemSchema.WebClientReadFormQueryString);
        this.RegisterProperty(ItemSchema, ItemSchema.WebClientEditFormQueryString);
        this.RegisterProperty(ItemSchema, ItemSchema.ConversationId);
        this.RegisterProperty(ItemSchema, ItemSchema.UniqueBody);
        this.RegisterProperty(ItemSchema, ItemSchema.Flag);
        this.RegisterProperty(ItemSchema, ItemSchema.StoreEntryId);
        this.RegisterProperty(ItemSchema, ItemSchema.InstanceKey);
        this.RegisterProperty(ItemSchema, ItemSchema.NormalizedBody);
        this.RegisterProperty(ItemSchema, ItemSchema.EntityExtractionResult);
        this.RegisterProperty(ItemSchema, ItemSchema.PolicyTag);
        this.RegisterProperty(ItemSchema, ItemSchema.ArchiveTag);
        this.RegisterProperty(ItemSchema, ItemSchema.RetentionDate);
        this.RegisterProperty(ItemSchema, ItemSchema.Preview);
        this.RegisterProperty(ItemSchema, ItemSchema.TextBody);
        this.RegisterProperty(ItemSchema, ItemSchema.IconIndex);
    }
}

/**
 * Represents the schema for generic items.
 */
export interface ItemSchema {
    /**
     * Defines the **Id** property.
     */
    Id: PropertyDefinition;
    /**
     * Defines the **Body** property.
     */
    Body: PropertyDefinition;
    /**
     * Defines the **ItemClass** property.
     */
    ItemClass: PropertyDefinition;
    /**
     * Defines the **Subject** property.
     */
    Subject: PropertyDefinition;
    /**
     * Defines the **MimeContent** property.
     */
    MimeContent: PropertyDefinition;
    /**
     * Defines the **ParentFolderId** property.
     */
    ParentFolderId: PropertyDefinition;
    /**
     * Defines the **Sensitivity** property.
     */
    Sensitivity: PropertyDefinition;
    /**
     * Defines the **Attachments** property.
     */
    Attachments: PropertyDefinition;
    /**
     * Defines the **DateTimeReceived** property.
     */
    DateTimeReceived: PropertyDefinition;
    /**
     * Defines the **Size** property.
     */
    Size: PropertyDefinition;
    /**
     * Defines the **Categories** property.
     */
    Categories: PropertyDefinition;
    /**
     * Defines the **Importance** property.
     */
    Importance: PropertyDefinition;
    /**
     * Defines the **InReplyTo** property.
     */
    InReplyTo: PropertyDefinition;
    /**
     * Defines the **IsSubmitted** property.
     */
    IsSubmitted: PropertyDefinition;
    /**
     * Defines the **IsAssociated** property.
     */
    IsAssociated: PropertyDefinition;
    /**
     * Defines the **IsDraft** property.
     */
    IsDraft: PropertyDefinition;
    /**
     * Defines the **IsFromMe** property.
     */
    IsFromMe: PropertyDefinition;
    /**
     * Defines the **IsResend** property.
     */
    IsResend: PropertyDefinition;
    /**
     * Defines the **IsUnmodified** property.
     */
    IsUnmodified: PropertyDefinition;
    /**
     * Defines the **InternetMessageHeaders** property.
     */
    InternetMessageHeaders: PropertyDefinition;
    /**
     * Defines the **DateTimeSent** property.
     */
    DateTimeSent: PropertyDefinition;
    /**
     * Defines the **DateTimeCreated** property.
     */
    DateTimeCreated: PropertyDefinition;
    /**
     * Defines the **AllowedResponseActions** property.
     */
    AllowedResponseActions: PropertyDefinition;
    /**
     * Defines the **ReminderDueBy** property.
     */
    ReminderDueBy: PropertyDefinition;
    /**
     * Defines the **IsReminderSet** property.
     */
    IsReminderSet: PropertyDefinition;
    /**
     * Defines the **ReminderMinutesBeforeStart** property.
     */
    ReminderMinutesBeforeStart: PropertyDefinition;
    /**
     * Defines the **DisplayCc** property.
     */
    DisplayCc: PropertyDefinition;
    /**
     * Defines the **DisplayTo** property.
     */
    DisplayTo: PropertyDefinition;
    /**
     * Defines the **HasAttachments** property.
     */
    HasAttachments: PropertyDefinition;
    /**
     * Defines the **Culture** property.
     */
    Culture: PropertyDefinition;
    /**
     * Defines the **EffectiveRights** property.
     */
    EffectiveRights: PropertyDefinition;
    /**
     * Defines the **LastModifiedName** property.
     */
    LastModifiedName: PropertyDefinition;
    /**
     * Defines the **LastModifiedTime** property.
     */
    LastModifiedTime: PropertyDefinition;
    /**
     * Defines the **WebClientReadFormQueryString** property.
     */
    WebClientReadFormQueryString: PropertyDefinition;
    /**
     * Defines the **WebClientEditFormQueryString** property.
     */
    WebClientEditFormQueryString: PropertyDefinition;
    /**
     * Defines the **ConversationId** property.
     */
    ConversationId: PropertyDefinition;
    /**
     * Defines the **UniqueBody** property.
     */
    UniqueBody: PropertyDefinition;
    /**
     * Defines the **StoreEntryId** property.
     */
    StoreEntryId: PropertyDefinition;
    /**
     * Defines the **InstanceKey** property.
     */
    InstanceKey: PropertyDefinition;
    /**
     * Defines the **NormalizedBody** property.
     */
    NormalizedBody: PropertyDefinition;
    /**
     * Defines the **EntityExtractionResult** property.
     */
    EntityExtractionResult: PropertyDefinition;
    /**
     * Defines the **Flag** property.
     */
    Flag: PropertyDefinition;
    /**
     * Defines the **PolicyTag** property.
     */
    PolicyTag: PropertyDefinition;
    /**
     * Defines the **ArchiveTag** property.
     */
    ArchiveTag: PropertyDefinition;
    /**
     * Defines the **RetentionDate** property.
     */
    RetentionDate: PropertyDefinition;
    /**
     * Defines the **Preview** property.
     */
    Preview: PropertyDefinition;
    /**
     * Defines the **TextBody** property.
     */
    TextBody: PropertyDefinition;
    /**
     * Defines the **IconIndex** property.
     */
    IconIndex: PropertyDefinition;
    /**
     * @internal Instance of **ItemSchema**
     */
    Instance: ItemSchema;
}

/**
 * Represents the schema for generic items.
 */
export interface ItemSchemaStatic extends ItemSchema {
}