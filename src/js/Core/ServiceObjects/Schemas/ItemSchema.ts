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

export class ItemSchema extends ServiceObjectSchema {
    public Id: PropertyDefinition;
    public Body: PropertyDefinition;
    public ItemClass: PropertyDefinition;
    public Subject: PropertyDefinition;
    public MimeContent: PropertyDefinition;
    public ParentFolderId: PropertyDefinition;
    public Sensitivity: PropertyDefinition;
    public Attachments: PropertyDefinition;
    public DateTimeReceived: PropertyDefinition;
    public Size: PropertyDefinition;
    public Categories: PropertyDefinition;
    public Importance: PropertyDefinition;
    public InReplyTo: PropertyDefinition;
    public IsSubmitted: PropertyDefinition;
    public IsAssociated: PropertyDefinition;
    public IsDraft: PropertyDefinition;
    public IsFromMe: PropertyDefinition;
    public IsResend: PropertyDefinition;
    public IsUnmodified: PropertyDefinition;
    public InternetMessageHeaders: PropertyDefinition;
    public DateTimeSent: PropertyDefinition;
    public DateTimeCreated: PropertyDefinition;
    public AllowedResponseActions: PropertyDefinition;
    public ReminderDueBy: PropertyDefinition;
    public IsReminderSet: PropertyDefinition;
    public ReminderMinutesBeforeStart: PropertyDefinition;
    public DisplayCc: PropertyDefinition;
    public DisplayTo: PropertyDefinition;
    public HasAttachments: PropertyDefinition;
    public Culture: PropertyDefinition;
    public EffectiveRights: PropertyDefinition;
    public LastModifiedName: PropertyDefinition;
    public LastModifiedTime: PropertyDefinition;
    public WebClientReadFormQueryString: PropertyDefinition;
    public WebClientEditFormQueryString: PropertyDefinition;
    public ConversationId: PropertyDefinition;
    public UniqueBody: PropertyDefinition;
    public StoreEntryId: PropertyDefinition;
    public InstanceKey: PropertyDefinition;
    public NormalizedBody: PropertyDefinition;
    public EntityExtractionResult: PropertyDefinition;
    public Flag: PropertyDefinition;
    public PolicyTag: PropertyDefinition;
    public ArchiveTag: PropertyDefinition;
    public RetentionDate: PropertyDefinition;
    public Preview: PropertyDefinition;
    public TextBody: PropertyDefinition;
    public IconIndex: PropertyDefinition;

    static Instance: ItemSchema = new ItemSchema();

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
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ItemId,
            PropertyDefinitionFlags.CanFind,
            () => { return new ItemId(); }
        );

        this.Body = new ComplexPropertyDefinition<MessageBody>(
            "Body",
            XmlElementNames.Body,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Body,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            () => { return new MessageBody(); }
        );

        this.ItemClass = new StringPropertyDefinition(
            "ItemClass",
            XmlElementNames.ItemClass,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ItemClass,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

        this.Subject = new StringPropertyDefinition(
            "Subject",
            XmlElementNames.Subject,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Subject,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.MimeContent = new ComplexPropertyDefinition<MimeContent>(
            "MimeContent",
            XmlElementNames.MimeContent,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.MimeContent,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            () => { return new MimeContent(); }
        );

        this.ParentFolderId = new ComplexPropertyDefinition<FolderId>(
            "ParentFolderId",
            XmlElementNames.ParentFolderId,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ParentFolderId,
            PropertyDefinitionFlags.CanFind,
            () => { return new FolderId(); }
        );

        this.Sensitivity = new GenericPropertyDefinition<Sensitivity>(
            "Sensitivity",
            XmlElementNames.Sensitivity,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Sensitivity,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

        this.Attachments = new AttachmentsPropertyDefinition("Attachments");

        this.DateTimeReceived = new DateTimePropertyDefinition(
            "DateTimeReceived",
            XmlElementNames.DateTimeReceived,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.DateTimeReceived,
            PropertyDefinitionFlags.CanFind
        );

        this.Size = new IntPropertyDefinition(
            "Size",
            XmlElementNames.Size,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Size,
            PropertyDefinitionFlags.CanFind
        );

        this.Categories = new ComplexPropertyDefinition<StringList>(
            "Categories",
            XmlElementNames.Categories,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Categories,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.Importance = new GenericPropertyDefinition<Importance>(
            "Importance",
            XmlElementNames.Importance,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Importance,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

        this.InReplyTo = new StringPropertyDefinition(
            "InReplyTo",
            XmlElementNames.InReplyTo,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.InReplyTo,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.IsSubmitted = new BoolPropertyDefinition(
            "IsSubmitted",
            XmlElementNames.IsSubmitted,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsSubmitted,
            PropertyDefinitionFlags.CanFind
        );

        this.IsAssociated = new BoolPropertyDefinition(
            "IsAssociated",
            XmlElementNames.IsAssociated,
            ExchangeVersion.Exchange2010,
            FieldUris.IsAssociated,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanFind
        );

        this.IsDraft = new BoolPropertyDefinition(
            "IsDraft",
            XmlElementNames.IsDraft,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsDraft,
            PropertyDefinitionFlags.CanFind
        );

        this.IsFromMe = new BoolPropertyDefinition(
            "IsFromMe",
            XmlElementNames.IsFromMe,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsFromMe,
            PropertyDefinitionFlags.CanFind
        );

        this.IsResend = new BoolPropertyDefinition(
            "IsResend",
            XmlElementNames.IsResend,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsResend,
            PropertyDefinitionFlags.CanFind
        );

        this.IsUnmodified = new BoolPropertyDefinition(
            "IsUnmodified",
            XmlElementNames.IsUnmodified,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsUnmodified,
            PropertyDefinitionFlags.CanFind
        );

        this.InternetMessageHeaders = new ComplexPropertyDefinition<InternetMessageHeaderCollection>(
            "InternetMessageHeaders",
            XmlElementNames.InternetMessageHeaders,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.InternetMessageHeaders,
            PropertyDefinitionFlags.None,
            () => { return new InternetMessageHeaderCollection(); }
        );

        this.DateTimeSent = new DateTimePropertyDefinition(
            "DateTimeSent",
            XmlElementNames.DateTimeSent,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.DateTimeSent,
            PropertyDefinitionFlags.CanFind
        );

        this.DateTimeCreated = new DateTimePropertyDefinition(
            "DateTimeCreated",
            XmlElementNames.DateTimeCreated,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.DateTimeCreated,
            PropertyDefinitionFlags.CanFind
        );

        this.AllowedResponseActions = new ResponseObjectsPropertyDefinition(
            "ResponseObjects",
            XmlElementNames.ResponseObjects,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ResponseObjects,
            PropertyDefinitionFlags.None
        );

        this.ReminderDueBy = new ScopedDateTimePropertyDefinition(
            "ReminderDueBy",
            XmlElementNames.ReminderDueBy,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ReminderDueBy,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            (version: ExchangeVersion) => { debugger; return Schemas.AppointmentSchema.StartTimeZone; }
        );

        this.IsReminderSet = new BoolPropertyDefinition(
            "ReminderIsSet",
            XmlElementNames.ReminderIsSet,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ReminderIsSet,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

        this.ReminderMinutesBeforeStart = new IntPropertyDefinition(
            "ReminderMinutesBeforeStart",
            XmlElementNames.ReminderMinutesBeforeStart,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ReminderMinutesBeforeStart,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

        this.DisplayCc = new StringPropertyDefinition(
            "DisplayCc",
            XmlElementNames.DisplayCc,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.DisplayCc,
            PropertyDefinitionFlags.CanFind
        );

        this.DisplayTo = new StringPropertyDefinition(
            "DisplayTo",
            XmlElementNames.DisplayTo,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.DisplayTo,
            PropertyDefinitionFlags.CanFind
        );

        this.HasAttachments = new BoolPropertyDefinition(
            "HasAttachments",
            XmlElementNames.HasAttachments,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.HasAttachments,
            PropertyDefinitionFlags.CanFind
        );

        this.Culture = new StringPropertyDefinition(
            "Culture",
            XmlElementNames.Culture,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Culture,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.EffectiveRights = new EffectiveRightsPropertyDefinition(
            "EffectiveRights",
            XmlElementNames.EffectiveRights,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.EffectiveRights,
            PropertyDefinitionFlags.CanFind
        );

        this.LastModifiedName = new StringPropertyDefinition(
            "LastModifiedName",
            XmlElementNames.LastModifiedName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.LastModifiedName,
            PropertyDefinitionFlags.CanFind
        );

        this.LastModifiedTime = new DateTimePropertyDefinition(
            "LastModifiedTime",
            XmlElementNames.LastModifiedTime,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.LastModifiedTime,
            PropertyDefinitionFlags.CanFind
        );

        this.WebClientReadFormQueryString = new StringPropertyDefinition(
            "WebClientReadFormQueryString",
            XmlElementNames.WebClientReadFormQueryString,
            ExchangeVersion.Exchange2010,
            FieldUris.WebClientReadFormQueryString,
            PropertyDefinitionFlags.CanFind
        );

        this.WebClientEditFormQueryString = new StringPropertyDefinition(
            "WebClientEditFormQueryString",
            XmlElementNames.WebClientEditFormQueryString,
            ExchangeVersion.Exchange2010,
            FieldUris.WebClientEditFormQueryString,
            PropertyDefinitionFlags.CanFind
        );

        this.ConversationId = new ComplexPropertyDefinition<ConversationId>(
            "ConversationId",
            XmlElementNames.ConversationId,
            ExchangeVersion.Exchange2010,
            FieldUris.ConversationId,
            PropertyDefinitionFlags.CanFind,
            () => { return new ConversationId(); }
        );

        this.UniqueBody = new ComplexPropertyDefinition<UniqueBody>(
            "UniqueBody",
            XmlElementNames.UniqueBody,
            ExchangeVersion.Exchange2010,
            FieldUris.UniqueBody,
            PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            () => { return new UniqueBody(); }
        );

        this.StoreEntryId = new ByteArrayPropertyDefinition(
            "StoreEntryId",
            XmlElementNames.StoreEntryId,
            ExchangeVersion.Exchange2010_SP2,
            FieldUris.StoreEntryId,
            PropertyDefinitionFlags.CanFind
        );

        this.InstanceKey = new ByteArrayPropertyDefinition(
            "InstanceKey",
            XmlElementNames.InstanceKey,
            ExchangeVersion.Exchange2013,
            FieldUris.InstanceKey,
            PropertyDefinitionFlags.CanFind
        );

        this.NormalizedBody = new ComplexPropertyDefinition<NormalizedBody>(
            "NormalizedBody",
            XmlElementNames.NormalizedBody,
            ExchangeVersion.Exchange2013,
            FieldUris.NormalizedBody,
            PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            () => { return new NormalizedBody(); }
        );

        this.EntityExtractionResult = new ComplexPropertyDefinition<EntityExtractionResult>(
            "EntityExtractionResult",
            XmlElementNames.NlgEntityExtractionResult,
            ExchangeVersion.Exchange2013,
            FieldUris.EntityExtractionResult,
            PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            () => { return new EntityExtractionResult(); }
        );

        this.Flag = new ComplexPropertyDefinition<Flag>(
            "Flag",
            XmlElementNames.Flag,
            ExchangeVersion.Exchange2013,
            FieldUris.Flag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            () => { return new Flag(); }
        );

        this.PolicyTag = new ComplexPropertyDefinition<PolicyTag>(
            "PolicyTag",
            XmlElementNames.PolicyTag,
            ExchangeVersion.Exchange2013,
            FieldUris.PolicyTag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new PolicyTag(); }
        );

        this.ArchiveTag = new ComplexPropertyDefinition<ArchiveTag>(
            "ArchiveTag",
            XmlElementNames.ArchiveTag,
            ExchangeVersion.Exchange2013,
            FieldUris.ArchiveTag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new ArchiveTag(); }
        );

        this.RetentionDate = new DateTimePropertyDefinition(
            "RetentionDate",
            XmlElementNames.RetentionDate,
            ExchangeVersion.Exchange2013,
            FieldUris.RetentionDate,
            PropertyDefinitionFlags.CanFind,
            true
        );

        this.Preview = new StringPropertyDefinition(
            "Preview",
            XmlElementNames.Preview,
            ExchangeVersion.Exchange2013,
            FieldUris.Preview,
            PropertyDefinitionFlags.CanFind
        );

        this.TextBody = new ComplexPropertyDefinition<TextBody>(
            "TextBody",
            XmlElementNames.TextBody,
            ExchangeVersion.Exchange2013,
            FieldUris.TextBody,
            PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            () => { return new TextBody(); }
        );

        this.IconIndex = new GenericPropertyDefinition<IconIndex>(
            "IconIndex",
            XmlElementNames.IconIndex,
            ExchangeVersion.Exchange2013,
            FieldUris.IconIndex,
            PropertyDefinitionFlags.CanFind
        );
    }
}