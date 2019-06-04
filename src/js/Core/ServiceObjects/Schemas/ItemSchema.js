"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ArchiveTag_1 = require("../../../ComplexProperties/ArchiveTag");
var AttachmentsPropertyDefinition_1 = require("../../../PropertyDefinitions/AttachmentsPropertyDefinition");
var BoolPropertyDefinition_1 = require("../../../PropertyDefinitions/BoolPropertyDefinition");
var ByteArrayPropertyDefinition_1 = require("../../../PropertyDefinitions/ByteArrayPropertyDefinition");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var ConversationId_1 = require("../../../ComplexProperties/ConversationId");
var DateTimePropertyDefinition_1 = require("../../../PropertyDefinitions/DateTimePropertyDefinition");
var EffectiveRightsPropertyDefinition_1 = require("../../../PropertyDefinitions/EffectiveRightsPropertyDefinition");
var EntityExtractionResult_1 = require("../../../ComplexProperties/EntityExtractionResult");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var Flag_1 = require("../../../ComplexProperties/Flag");
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var GenericPropertyDefinition_1 = require("../../../PropertyDefinitions/GenericPropertyDefinition");
var IconIndex_1 = require("../../../Enumerations/IconIndex");
var Importance_1 = require("../../../Enumerations/Importance");
var IntPropertyDefinition_1 = require("../../../PropertyDefinitions/IntPropertyDefinition");
var InternetMessageHeaderCollection_1 = require("../../../ComplexProperties/InternetMessageHeaderCollection");
var ItemId_1 = require("../../../ComplexProperties/ItemId");
var MessageBody_1 = require("../../../ComplexProperties/MessageBody");
var MimeContent_1 = require("../../../ComplexProperties/MimeContent");
var NormalizedBody_1 = require("../../../ComplexProperties/NormalizedBody");
var PolicyTag_1 = require("../../../ComplexProperties/PolicyTag");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var ResponseObjectsPropertyDefinition_1 = require("../../../PropertyDefinitions/ResponseObjectsPropertyDefinition");
var Schemas_1 = require("./Schemas");
var ScopedDateTimePropertyDefinition_1 = require("../../../PropertyDefinitions/ScopedDateTimePropertyDefinition");
var Sensitivity_1 = require("../../../Enumerations/Sensitivity");
var StringList_1 = require("../../../ComplexProperties/StringList");
var StringPropertyDefinition_1 = require("../../../PropertyDefinitions/StringPropertyDefinition");
var TextBody_1 = require("../../../ComplexProperties/TextBody");
var UniqueBody_1 = require("../../../ComplexProperties/UniqueBody");
var XmlElementNames_1 = require("../../XmlElementNames");
var ServiceObjectSchema_1 = require("./ServiceObjectSchema");
/**
 * Field URIs for Item.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.ArchiveTag = "item:ArchiveTag";
    FieldUris.Attachments = "item:Attachments";
    FieldUris.Body = "item:Body";
    FieldUris.Categories = "item:Categories";
    FieldUris.ConversationId = "item:ConversationId";
    FieldUris.Culture = "item:Culture";
    FieldUris.DateTimeCreated = "item:DateTimeCreated";
    FieldUris.DateTimeReceived = "item:DateTimeReceived";
    FieldUris.DateTimeSent = "item:DateTimeSent";
    FieldUris.DisplayCc = "item:DisplayCc";
    FieldUris.DisplayTo = "item:DisplayTo";
    FieldUris.EffectiveRights = "item:EffectiveRights";
    FieldUris.EntityExtractionResult = "item:EntityExtractionResult";
    FieldUris.Flag = "item:Flag";
    FieldUris.HasAttachments = "item:HasAttachments";
    FieldUris.IconIndex = "item:IconIndex";
    FieldUris.Importance = "item:Importance";
    FieldUris.InReplyTo = "item:InReplyTo";
    FieldUris.InstanceKey = "item:InstanceKey";
    FieldUris.InternetMessageHeaders = "item:InternetMessageHeaders";
    FieldUris.IsAssociated = "item:IsAssociated";
    FieldUris.IsDraft = "item:IsDraft";
    FieldUris.IsFromMe = "item:IsFromMe";
    FieldUris.IsResend = "item:IsResend";
    FieldUris.IsSubmitted = "item:IsSubmitted";
    FieldUris.IsUnmodified = "item:IsUnmodified";
    FieldUris.ItemClass = "item:ItemClass";
    FieldUris.ItemId = "item:ItemId";
    FieldUris.LastModifiedName = "item:LastModifiedName";
    FieldUris.LastModifiedTime = "item:LastModifiedTime";
    FieldUris.MimeContent = "item:MimeContent";
    FieldUris.NormalizedBody = "item:NormalizedBody";
    FieldUris.ParentFolderId = "item:ParentFolderId";
    FieldUris.PolicyTag = "item:PolicyTag";
    FieldUris.Preview = "item:Preview";
    FieldUris.ReminderDueBy = "item:ReminderDueBy";
    FieldUris.ReminderIsSet = "item:ReminderIsSet";
    FieldUris.ReminderMinutesBeforeStart = "item:ReminderMinutesBeforeStart";
    FieldUris.ResponseObjects = "item:ResponseObjects";
    FieldUris.RetentionDate = "item:RetentionDate";
    FieldUris.Sensitivity = "item:Sensitivity";
    FieldUris.Size = "item:Size";
    FieldUris.StoreEntryId = "item:StoreEntryId";
    FieldUris.Subject = "item:Subject";
    FieldUris.TextBody = "item:TextBody";
    FieldUris.UniqueBody = "item:UniqueBody";
    FieldUris.WebClientEditFormQueryString = "item:WebClientEditFormQueryString";
    FieldUris.WebClientReadFormQueryString = "item:WebClientReadFormQueryString";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for generic items.
 */
var ItemSchema = /** @class */ (function (_super) {
    __extends(ItemSchema, _super);
    function ItemSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    ItemSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
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
        this.RegisterProperty(ItemSchema, ServiceObjectSchema_1.ServiceObjectSchema.ExtendedProperties);
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
    };
    /**
     * Defines the **Id** property.
     */
    ItemSchema.Id = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Id", XmlElementNames_1.XmlElementNames.ItemId, FieldUris.ItemId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new ItemId_1.ItemId(); });
    /**
     * Defines the **Body** property.
     */
    ItemSchema.Body = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Body", XmlElementNames_1.XmlElementNames.Body, FieldUris.Body, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new MessageBody_1.MessageBody(); });
    /**
     * Defines the **ItemClass** property.
     */
    ItemSchema.ItemClass = new StringPropertyDefinition_1.StringPropertyDefinition("ItemClass", XmlElementNames_1.XmlElementNames.ItemClass, FieldUris.ItemClass, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Subject** property.
     */
    ItemSchema.Subject = new StringPropertyDefinition_1.StringPropertyDefinition("Subject", XmlElementNames_1.XmlElementNames.Subject, FieldUris.Subject, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **MimeContent** property.
     */
    ItemSchema.MimeContent = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("MimeContent", XmlElementNames_1.XmlElementNames.MimeContent, FieldUris.MimeContent, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.MustBeExplicitlyLoaded, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new MimeContent_1.MimeContent(); });
    /**
     * Defines the **ParentFolderId** property.
     */
    ItemSchema.ParentFolderId = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ParentFolderId", XmlElementNames_1.XmlElementNames.ParentFolderId, FieldUris.ParentFolderId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new FolderId_1.FolderId(); });
    /**
     * Defines the **Sensitivity** property.
     */
    ItemSchema.Sensitivity = new GenericPropertyDefinition_1.GenericPropertyDefinition("Sensitivity", XmlElementNames_1.XmlElementNames.Sensitivity, FieldUris.Sensitivity, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, Sensitivity_1.Sensitivity);
    /**
     * Defines the **Attachments** property.
     */
    ItemSchema.Attachments = new AttachmentsPropertyDefinition_1.AttachmentsPropertyDefinition("Attachments");
    /**
     * Defines the **DateTimeReceived** property.
     */
    ItemSchema.DateTimeReceived = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("DateTimeReceived", XmlElementNames_1.XmlElementNames.DateTimeReceived, FieldUris.DateTimeReceived, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Size** property.
     */
    ItemSchema.Size = new IntPropertyDefinition_1.IntPropertyDefinition("Size", XmlElementNames_1.XmlElementNames.Size, FieldUris.Size, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Categories** property.
     */
    ItemSchema.Categories = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Categories", XmlElementNames_1.XmlElementNames.Categories, FieldUris.Categories, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **Importance** property.
     */
    ItemSchema.Importance = new GenericPropertyDefinition_1.GenericPropertyDefinition("Importance", XmlElementNames_1.XmlElementNames.Importance, FieldUris.Importance, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, Importance_1.Importance);
    /**
     * Defines the **InReplyTo** property.
     */
    ItemSchema.InReplyTo = new StringPropertyDefinition_1.StringPropertyDefinition("InReplyTo", XmlElementNames_1.XmlElementNames.InReplyTo, FieldUris.InReplyTo, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsSubmitted** property.
     */
    ItemSchema.IsSubmitted = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsSubmitted", XmlElementNames_1.XmlElementNames.IsSubmitted, FieldUris.IsSubmitted, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsAssociated** property.
     */
    ItemSchema.IsAssociated = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsAssociated", XmlElementNames_1.XmlElementNames.IsAssociated, FieldUris.IsAssociated, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010);
    /**
     * Defines the **IsDraft** property.
     */
    ItemSchema.IsDraft = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsDraft", XmlElementNames_1.XmlElementNames.IsDraft, FieldUris.IsDraft, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsFromMe** property.
     */
    ItemSchema.IsFromMe = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsFromMe", XmlElementNames_1.XmlElementNames.IsFromMe, FieldUris.IsFromMe, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsResend** property.
     */
    ItemSchema.IsResend = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsResend", XmlElementNames_1.XmlElementNames.IsResend, FieldUris.IsResend, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsUnmodified** property.
     */
    ItemSchema.IsUnmodified = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsUnmodified", XmlElementNames_1.XmlElementNames.IsUnmodified, FieldUris.IsUnmodified, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **InternetMessageHeaders** property.
     */
    ItemSchema.InternetMessageHeaders = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("InternetMessageHeaders", XmlElementNames_1.XmlElementNames.InternetMessageHeaders, FieldUris.InternetMessageHeaders, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new InternetMessageHeaderCollection_1.InternetMessageHeaderCollection(); });
    /**
     * Defines the **DateTimeSent** property.
     */
    ItemSchema.DateTimeSent = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("DateTimeSent", XmlElementNames_1.XmlElementNames.DateTimeSent, FieldUris.DateTimeSent, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **DateTimeCreated** property.
     */
    ItemSchema.DateTimeCreated = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("DateTimeCreated", XmlElementNames_1.XmlElementNames.DateTimeCreated, FieldUris.DateTimeCreated, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **AllowedResponseActions** property.
     */
    ItemSchema.AllowedResponseActions = new ResponseObjectsPropertyDefinition_1.ResponseObjectsPropertyDefinition("ResponseObjects", XmlElementNames_1.XmlElementNames.ResponseObjects, FieldUris.ResponseObjects, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ReminderDueBy** property.
     */
    ItemSchema.ReminderDueBy = new ScopedDateTimePropertyDefinition_1.ScopedDateTimePropertyDefinition("ReminderDueBy", XmlElementNames_1.XmlElementNames.ReminderDueBy, FieldUris.ReminderDueBy, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function (version) { debugger; return Schemas_1.Schemas.AppointmentSchema.StartTimeZone; });
    /**
     * Defines the **IsReminderSet** property.
     */
    ItemSchema.IsReminderSet = new BoolPropertyDefinition_1.BoolPropertyDefinition("ReminderIsSet", XmlElementNames_1.XmlElementNames.ReminderIsSet, FieldUris.ReminderIsSet, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ReminderMinutesBeforeStart** property.
     */
    ItemSchema.ReminderMinutesBeforeStart = new IntPropertyDefinition_1.IntPropertyDefinition("ReminderMinutesBeforeStart", XmlElementNames_1.XmlElementNames.ReminderMinutesBeforeStart, FieldUris.ReminderMinutesBeforeStart, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **DisplayCc** property.
     */
    ItemSchema.DisplayCc = new StringPropertyDefinition_1.StringPropertyDefinition("DisplayCc", XmlElementNames_1.XmlElementNames.DisplayCc, FieldUris.DisplayCc, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **DisplayTo** property.
     */
    ItemSchema.DisplayTo = new StringPropertyDefinition_1.StringPropertyDefinition("DisplayTo", XmlElementNames_1.XmlElementNames.DisplayTo, FieldUris.DisplayTo, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **HasAttachments** property.
     */
    ItemSchema.HasAttachments = new BoolPropertyDefinition_1.BoolPropertyDefinition("HasAttachments", XmlElementNames_1.XmlElementNames.HasAttachments, FieldUris.HasAttachments, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Culture** property.
     */
    ItemSchema.Culture = new StringPropertyDefinition_1.StringPropertyDefinition("Culture", XmlElementNames_1.XmlElementNames.Culture, FieldUris.Culture, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **EffectiveRights** property.
     */
    ItemSchema.EffectiveRights = new EffectiveRightsPropertyDefinition_1.EffectiveRightsPropertyDefinition("EffectiveRights", XmlElementNames_1.XmlElementNames.EffectiveRights, FieldUris.EffectiveRights, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **LastModifiedName** property.
     */
    ItemSchema.LastModifiedName = new StringPropertyDefinition_1.StringPropertyDefinition("LastModifiedName", XmlElementNames_1.XmlElementNames.LastModifiedName, FieldUris.LastModifiedName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **LastModifiedTime** property.
     */
    ItemSchema.LastModifiedTime = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("LastModifiedTime", XmlElementNames_1.XmlElementNames.LastModifiedTime, FieldUris.LastModifiedTime, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **WebClientReadFormQueryString** property.
     */
    ItemSchema.WebClientReadFormQueryString = new StringPropertyDefinition_1.StringPropertyDefinition("WebClientReadFormQueryString", XmlElementNames_1.XmlElementNames.WebClientReadFormQueryString, FieldUris.WebClientReadFormQueryString, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010);
    /**
     * Defines the **WebClientEditFormQueryString** property.
     */
    ItemSchema.WebClientEditFormQueryString = new StringPropertyDefinition_1.StringPropertyDefinition("WebClientEditFormQueryString", XmlElementNames_1.XmlElementNames.WebClientEditFormQueryString, FieldUris.WebClientEditFormQueryString, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010);
    /**
     * Defines the **ConversationId** property.
     */
    ItemSchema.ConversationId = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ConversationId", XmlElementNames_1.XmlElementNames.ConversationId, FieldUris.ConversationId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010, function () { return new ConversationId_1.ConversationId(); });
    /**
     * Defines the **UniqueBody** property.
     */
    ItemSchema.UniqueBody = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("UniqueBody", XmlElementNames_1.XmlElementNames.UniqueBody, FieldUris.UniqueBody, PropertyDefinitionFlags_1.PropertyDefinitionFlags.MustBeExplicitlyLoaded, ExchangeVersion_1.ExchangeVersion.Exchange2010, function () { return new UniqueBody_1.UniqueBody(); });
    /**
     * Defines the **StoreEntryId** property.
     */
    ItemSchema.StoreEntryId = new ByteArrayPropertyDefinition_1.ByteArrayPropertyDefinition("StoreEntryId", XmlElementNames_1.XmlElementNames.StoreEntryId, FieldUris.StoreEntryId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP2);
    /**
     * Defines the **InstanceKey** property.
     */
    ItemSchema.InstanceKey = new ByteArrayPropertyDefinition_1.ByteArrayPropertyDefinition("InstanceKey", XmlElementNames_1.XmlElementNames.InstanceKey, FieldUris.InstanceKey, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013);
    /**
     * Defines the **NormalizedBody** property.
     */
    ItemSchema.NormalizedBody = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("NormalizedBody", XmlElementNames_1.XmlElementNames.NormalizedBody, FieldUris.NormalizedBody, PropertyDefinitionFlags_1.PropertyDefinitionFlags.MustBeExplicitlyLoaded, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new NormalizedBody_1.NormalizedBody(); });
    /**
     * Defines the **EntityExtractionResult** property.
     */
    ItemSchema.EntityExtractionResult = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("EntityExtractionResult", XmlElementNames_1.XmlElementNames.NlgEntityExtractionResult, FieldUris.EntityExtractionResult, PropertyDefinitionFlags_1.PropertyDefinitionFlags.MustBeExplicitlyLoaded, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new EntityExtractionResult_1.EntityExtractionResult(); });
    /**
     * Defines the **Flag** property.
     */
    ItemSchema.Flag = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Flag", XmlElementNames_1.XmlElementNames.Flag, FieldUris.Flag, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new Flag_1.Flag(); });
    /**
     * Defines the **PolicyTag** property.
     */
    ItemSchema.PolicyTag = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("PolicyTag", XmlElementNames_1.XmlElementNames.PolicyTag, FieldUris.PolicyTag, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new PolicyTag_1.PolicyTag(); });
    /**
     * Defines the **ArchiveTag** property.
     */
    ItemSchema.ArchiveTag = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ArchiveTag", XmlElementNames_1.XmlElementNames.ArchiveTag, FieldUris.ArchiveTag, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new ArchiveTag_1.ArchiveTag(); });
    /**
     * Defines the **RetentionDate** property.
     */
    ItemSchema.RetentionDate = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("RetentionDate", XmlElementNames_1.XmlElementNames.RetentionDate, FieldUris.RetentionDate, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, true);
    /**
     * Defines the **Preview** property.
     */
    ItemSchema.Preview = new StringPropertyDefinition_1.StringPropertyDefinition("Preview", XmlElementNames_1.XmlElementNames.Preview, FieldUris.Preview, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013);
    /**
     * Defines the **TextBody** property.
     */
    ItemSchema.TextBody = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("TextBody", XmlElementNames_1.XmlElementNames.TextBody, FieldUris.TextBody, PropertyDefinitionFlags_1.PropertyDefinitionFlags.MustBeExplicitlyLoaded, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new TextBody_1.TextBody(); });
    /**
     * Defines the **IconIndex** property.
     */
    ItemSchema.IconIndex = new GenericPropertyDefinition_1.GenericPropertyDefinition("IconIndex", XmlElementNames_1.XmlElementNames.IconIndex, FieldUris.IconIndex, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, IconIndex_1.IconIndex);
    /**
     * @internal Instance of **ItemSchema**
     */
    ItemSchema.Instance = new ItemSchema();
    return ItemSchema;
}(ServiceObjectSchema_1.ServiceObjectSchema));
exports.ItemSchema = ItemSchema;
