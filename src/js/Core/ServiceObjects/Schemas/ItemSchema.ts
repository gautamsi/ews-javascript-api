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
    public Id: PropertyDefinition;

    /**
     * Defines the **Body** property.
     */
    public Body: PropertyDefinition;

    /**
     * Defines the **ItemClass** property.
     */
    public ItemClass: PropertyDefinition;

    /**
     * Defines the **Subject** property.
     */
    public Subject: PropertyDefinition;

    /**
     * Defines the **MimeContent** property.
     */
    public MimeContent: PropertyDefinition;

    /**
     * Defines the **ParentFolderId** property.
     */
    public ParentFolderId: PropertyDefinition;

    /**
     * Defines the **Sensitivity** property.
     */
    public Sensitivity: PropertyDefinition;

    /**
     * Defines the **Attachments** property.
     */
    public Attachments: PropertyDefinition;

    /**
     * Defines the **DateTimeReceived** property.
     */
    public DateTimeReceived: PropertyDefinition;

    /**
     * Defines the **Size** property.
     */
    public Size: PropertyDefinition;

    /**
     * Defines the **Categories** property.
     */
    public Categories: PropertyDefinition;

    /**
     * Defines the **Importance** property.
     */
    public Importance: PropertyDefinition;

    /**
     * Defines the **InReplyTo** property.
     */
    public InReplyTo: PropertyDefinition;

    /**
     * Defines the **IsSubmitted** property.
     */
    public IsSubmitted: PropertyDefinition;

    /**
     * Defines the **IsAssociated** property.
     */
    public IsAssociated: PropertyDefinition;

    /**
     * Defines the **IsDraft** property.
     */
    public IsDraft: PropertyDefinition;

    /**
     * Defines the **IsFromMe** property.
     */
    public IsFromMe: PropertyDefinition;

    /**
     * Defines the **IsResend** property.
     */
    public IsResend: PropertyDefinition;

    /**
     * Defines the **IsUnmodified** property.
     */
    public IsUnmodified: PropertyDefinition;

    /**
     * Defines the **InternetMessageHeaders** property.
     */
    public InternetMessageHeaders: PropertyDefinition;

    /**
     * Defines the **DateTimeSent** property.
     */
    public DateTimeSent: PropertyDefinition;

    /**
     * Defines the **DateTimeCreated** property.
     */
    public DateTimeCreated: PropertyDefinition;

    /**
     * Defines the **AllowedResponseActions** property.
     */
    public AllowedResponseActions: PropertyDefinition;

    /**
     * Defines the **ReminderDueBy** property.
     */
    public ReminderDueBy: PropertyDefinition;

    /**
     * Defines the **IsReminderSet** property.
     */
    public IsReminderSet: PropertyDefinition;

    /**
     * Defines the **ReminderMinutesBeforeStart** property.
     */
    public ReminderMinutesBeforeStart: PropertyDefinition;

    /**
     * Defines the **DisplayCc** property.
     */
    public DisplayCc: PropertyDefinition;

    /**
     * Defines the **DisplayTo** property.
     */
    public DisplayTo: PropertyDefinition;

    /**
     * Defines the **HasAttachments** property.
     */
    public HasAttachments: PropertyDefinition;

    /**
     * Defines the **Culture** property.
     */
    public Culture: PropertyDefinition;

    /**
     * Defines the **EffectiveRights** property.
     */
    public EffectiveRights: PropertyDefinition;

    /**
     * Defines the **LastModifiedName** property.
     */
    public LastModifiedName: PropertyDefinition;

    /**
     * Defines the **LastModifiedTime** property.
     */
    public LastModifiedTime: PropertyDefinition;

    /**
     * Defines the **WebClientReadFormQueryString** property.
     */
    public WebClientReadFormQueryString: PropertyDefinition;

    /**
     * Defines the **WebClientEditFormQueryString** property.
     */
    public WebClientEditFormQueryString: PropertyDefinition;

    /**
     * Defines the **ConversationId** property.
     */
    public ConversationId: PropertyDefinition;

    /**
     * Defines the **UniqueBody** property.
     */
    public UniqueBody: PropertyDefinition;

    /**
     * Defines the **StoreEntryId** property.
     */
    public StoreEntryId: PropertyDefinition;

    /**
     * Defines the **InstanceKey** property.
     */
    public InstanceKey: PropertyDefinition;

    /**
     * Defines the **NormalizedBody** property.
     */
    public NormalizedBody: PropertyDefinition;

    /**
     * Defines the **EntityExtractionResult** property.
     */
    public EntityExtractionResult: PropertyDefinition;

    /**
     * Defines the **Flag** property.
     */
    public Flag: PropertyDefinition;

    /**
     * Defines the **PolicyTag** property.
     */
    public PolicyTag: PropertyDefinition;

    /**
     * Defines the **ArchiveTag** property.
     */
    public ArchiveTag: PropertyDefinition;

    /**
     * Defines the **RetentionDate** property.
     */
    public RetentionDate: PropertyDefinition;

    /**
     * Defines the **Preview** property.
     */
    public Preview: PropertyDefinition;

    /**
     * Defines the **TextBody** property.
     */
    public TextBody: PropertyDefinition;

    /**
     * Defines the **IconIndex** property.
     */
    public IconIndex: PropertyDefinition;

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
        super.RegisterProperty(this.MimeContent);
        super.RegisterProperty(this.Id);
        super.RegisterProperty(this.ParentFolderId);
        super.RegisterProperty(this.ItemClass);
        super.RegisterProperty(this.Subject);
        super.RegisterProperty(this.Sensitivity);
        super.RegisterProperty(this.Body);
        super.RegisterProperty(this.Attachments);
        super.RegisterProperty(this.DateTimeReceived);
        super.RegisterProperty(this.Size);
        super.RegisterProperty(this.Categories);
        super.RegisterProperty(this.Importance);
        super.RegisterProperty(this.InReplyTo);
        super.RegisterProperty(this.IsSubmitted);
        super.RegisterProperty(this.IsDraft);
        super.RegisterProperty(this.IsFromMe);
        super.RegisterProperty(this.IsResend);
        super.RegisterProperty(this.IsUnmodified);
        super.RegisterProperty(this.InternetMessageHeaders);
        super.RegisterProperty(this.DateTimeSent);
        super.RegisterProperty(this.DateTimeCreated);
        super.RegisterProperty(this.AllowedResponseActions);
        super.RegisterProperty(this.ReminderDueBy);
        super.RegisterProperty(this.IsReminderSet);
        super.RegisterProperty(this.ReminderMinutesBeforeStart);
        super.RegisterProperty(this.DisplayCc);
        super.RegisterProperty(this.DisplayTo);
        super.RegisterProperty(this.HasAttachments);
        super.RegisterProperty(ServiceObjectSchema.ExtendedProperties);
        super.RegisterProperty(this.Culture);
        super.RegisterProperty(this.EffectiveRights);
        super.RegisterProperty(this.LastModifiedName);
        super.RegisterProperty(this.LastModifiedTime);
        super.RegisterProperty(this.IsAssociated);
        super.RegisterProperty(this.WebClientReadFormQueryString);
        super.RegisterProperty(this.WebClientEditFormQueryString);
        super.RegisterProperty(this.ConversationId);
        super.RegisterProperty(this.UniqueBody);
        super.RegisterProperty(this.Flag);
        super.RegisterProperty(this.StoreEntryId);
        super.RegisterProperty(this.InstanceKey);
        super.RegisterProperty(this.NormalizedBody);
        super.RegisterProperty(this.EntityExtractionResult);
        super.RegisterProperty(this.PolicyTag);
        super.RegisterProperty(this.ArchiveTag);
        super.RegisterProperty(this.RetentionDate);
        super.RegisterProperty(this.Preview);
        super.RegisterProperty(this.TextBody);
        super.RegisterProperty(this.IconIndex);
    }
    protected init() {
        super.init();
        this.Id = new ComplexPropertyDefinition<ItemId>(
            "Id",
            XmlElementNames.ItemId,
            FieldUris.ItemId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new ItemId(); }
        );

        this.Body = new ComplexPropertyDefinition<MessageBody>(
            "Body",
            XmlElementNames.Body,
            FieldUris.Body,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new MessageBody(); }
        );

        this.ItemClass = new StringPropertyDefinition(
            "ItemClass",
            XmlElementNames.ItemClass,
            FieldUris.ItemClass,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Subject = new StringPropertyDefinition(
            "Subject",
            XmlElementNames.Subject,
            FieldUris.Subject,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.MimeContent = new ComplexPropertyDefinition<MimeContent>(
            "MimeContent",
            XmlElementNames.MimeContent,
            FieldUris.MimeContent,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new MimeContent(); }
        );

        this.ParentFolderId = new ComplexPropertyDefinition<FolderId>(
            "ParentFolderId",
            XmlElementNames.ParentFolderId,
            FieldUris.ParentFolderId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new FolderId(); }
        );

        this.Sensitivity = new GenericPropertyDefinition<Sensitivity>(
            "Sensitivity",
            XmlElementNames.Sensitivity,
            FieldUris.Sensitivity,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Attachments = new AttachmentsPropertyDefinition("Attachments");

        this.DateTimeReceived = new DateTimePropertyDefinition(
            "DateTimeReceived",
            XmlElementNames.DateTimeReceived,
            FieldUris.DateTimeReceived,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Size = new IntPropertyDefinition(
            "Size",
            XmlElementNames.Size,
            FieldUris.Size,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Categories = new ComplexPropertyDefinition<StringList>(
            "Categories",
            XmlElementNames.Categories,
            FieldUris.Categories,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new StringList(); }
        );

        this.Importance = new GenericPropertyDefinition<Importance>(
            "Importance",
            XmlElementNames.Importance,
            FieldUris.Importance,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.InReplyTo = new StringPropertyDefinition(
            "InReplyTo",
            XmlElementNames.InReplyTo,
            FieldUris.InReplyTo,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsSubmitted = new BoolPropertyDefinition(
            "IsSubmitted",
            XmlElementNames.IsSubmitted,
            FieldUris.IsSubmitted,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsAssociated = new BoolPropertyDefinition(
            "IsAssociated",
            XmlElementNames.IsAssociated,
            FieldUris.IsAssociated,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010
        );

        this.IsDraft = new BoolPropertyDefinition(
            "IsDraft",
            XmlElementNames.IsDraft,
            FieldUris.IsDraft,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsFromMe = new BoolPropertyDefinition(
            "IsFromMe",
            XmlElementNames.IsFromMe,
            FieldUris.IsFromMe,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsResend = new BoolPropertyDefinition(
            "IsResend",
            XmlElementNames.IsResend,
            FieldUris.IsResend,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsUnmodified = new BoolPropertyDefinition(
            "IsUnmodified",
            XmlElementNames.IsUnmodified,
            FieldUris.IsUnmodified,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.InternetMessageHeaders = new ComplexPropertyDefinition<InternetMessageHeaderCollection>(
            "InternetMessageHeaders",
            XmlElementNames.InternetMessageHeaders,
            FieldUris.InternetMessageHeaders,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new InternetMessageHeaderCollection(); }
        );

        this.DateTimeSent = new DateTimePropertyDefinition(
            "DateTimeSent",
            XmlElementNames.DateTimeSent,
            FieldUris.DateTimeSent,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.DateTimeCreated = new DateTimePropertyDefinition(
            "DateTimeCreated",
            XmlElementNames.DateTimeCreated,
            FieldUris.DateTimeCreated,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.AllowedResponseActions = new ResponseObjectsPropertyDefinition(
            "ResponseObjects",
            XmlElementNames.ResponseObjects,
            FieldUris.ResponseObjects,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ReminderDueBy = new ScopedDateTimePropertyDefinition(
            "ReminderDueBy",
            XmlElementNames.ReminderDueBy,
            FieldUris.ReminderDueBy,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            (version: ExchangeVersion) => { debugger; return Schemas.AppointmentSchema.StartTimeZone; }
        );

        this.IsReminderSet = new BoolPropertyDefinition(
            "ReminderIsSet",
            XmlElementNames.ReminderIsSet,
            FieldUris.ReminderIsSet,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ReminderMinutesBeforeStart = new IntPropertyDefinition(
            "ReminderMinutesBeforeStart",
            XmlElementNames.ReminderMinutesBeforeStart,
            FieldUris.ReminderMinutesBeforeStart,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.DisplayCc = new StringPropertyDefinition(
            "DisplayCc",
            XmlElementNames.DisplayCc,
            FieldUris.DisplayCc,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.DisplayTo = new StringPropertyDefinition(
            "DisplayTo",
            XmlElementNames.DisplayTo,
            FieldUris.DisplayTo,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.HasAttachments = new BoolPropertyDefinition(
            "HasAttachments",
            XmlElementNames.HasAttachments,
            FieldUris.HasAttachments,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Culture = new StringPropertyDefinition(
            "Culture",
            XmlElementNames.Culture,
            FieldUris.Culture,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.EffectiveRights = new EffectiveRightsPropertyDefinition(
            "EffectiveRights",
            XmlElementNames.EffectiveRights,
            FieldUris.EffectiveRights,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.LastModifiedName = new StringPropertyDefinition(
            "LastModifiedName",
            XmlElementNames.LastModifiedName,
            FieldUris.LastModifiedName,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.LastModifiedTime = new DateTimePropertyDefinition(
            "LastModifiedTime",
            XmlElementNames.LastModifiedTime,
            FieldUris.LastModifiedTime,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.WebClientReadFormQueryString = new StringPropertyDefinition(
            "WebClientReadFormQueryString",
            XmlElementNames.WebClientReadFormQueryString,
            FieldUris.WebClientReadFormQueryString,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010
        );

        this.WebClientEditFormQueryString = new StringPropertyDefinition(
            "WebClientEditFormQueryString",
            XmlElementNames.WebClientEditFormQueryString,
            FieldUris.WebClientEditFormQueryString,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010
        );

        this.ConversationId = new ComplexPropertyDefinition<ConversationId>(
            "ConversationId",
            XmlElementNames.ConversationId,
            FieldUris.ConversationId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010,
            () => { return new ConversationId(); }
        );

        this.UniqueBody = new ComplexPropertyDefinition<UniqueBody>(
            "UniqueBody",
            XmlElementNames.UniqueBody,
            FieldUris.UniqueBody,
            PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            ExchangeVersion.Exchange2010,
            () => { return new UniqueBody(); }
        );

        this.StoreEntryId = new ByteArrayPropertyDefinition(
            "StoreEntryId",
            XmlElementNames.StoreEntryId,
            FieldUris.StoreEntryId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP2
        );

        this.InstanceKey = new ByteArrayPropertyDefinition(
            "InstanceKey",
            XmlElementNames.InstanceKey,
            FieldUris.InstanceKey,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.NormalizedBody = new ComplexPropertyDefinition<NormalizedBody>(
            "NormalizedBody",
            XmlElementNames.NormalizedBody,
            FieldUris.NormalizedBody,
            PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            ExchangeVersion.Exchange2013,
            () => { return new NormalizedBody(); }
        );

        this.EntityExtractionResult = new ComplexPropertyDefinition<EntityExtractionResult>(
            "EntityExtractionResult",
            XmlElementNames.NlgEntityExtractionResult,
            FieldUris.EntityExtractionResult,
            PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            ExchangeVersion.Exchange2013,
            () => { return new EntityExtractionResult(); }
        );

        this.Flag = new ComplexPropertyDefinition<Flag>(
            "Flag",
            XmlElementNames.Flag,
            FieldUris.Flag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            () => { return new Flag(); }
        );

        this.PolicyTag = new ComplexPropertyDefinition<PolicyTag>(
            "PolicyTag",
            XmlElementNames.PolicyTag,
            FieldUris.PolicyTag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            () => { return new PolicyTag(); }
        );

        this.ArchiveTag = new ComplexPropertyDefinition<ArchiveTag>(
            "ArchiveTag",
            XmlElementNames.ArchiveTag,
            FieldUris.ArchiveTag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            () => { return new ArchiveTag(); }
        );

        this.RetentionDate = new DateTimePropertyDefinition(
            "RetentionDate",
            XmlElementNames.RetentionDate,
            FieldUris.RetentionDate,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            true
        );

        this.Preview = new StringPropertyDefinition(
            "Preview",
            XmlElementNames.Preview,
            FieldUris.Preview,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.TextBody = new ComplexPropertyDefinition<TextBody>(
            "TextBody",
            XmlElementNames.TextBody,
            FieldUris.TextBody,
            PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            ExchangeVersion.Exchange2013,
            () => { return new TextBody(); }
        );

        this.IconIndex = new GenericPropertyDefinition<IconIndex>(
            "IconIndex",
            XmlElementNames.IconIndex,
            FieldUris.IconIndex,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );
    }
}