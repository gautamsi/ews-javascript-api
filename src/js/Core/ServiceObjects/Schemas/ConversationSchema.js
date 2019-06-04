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
var BoolPropertyDefinition_1 = require("../../../PropertyDefinitions/BoolPropertyDefinition");
var ByteArrayPropertyDefinition_1 = require("../../../PropertyDefinitions/ByteArrayPropertyDefinition");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var ConversationFlagStatus_1 = require("../../../Enumerations/ConversationFlagStatus");
var ConversationId_1 = require("../../../ComplexProperties/ConversationId");
var DateTimePropertyDefinition_1 = require("../../../PropertyDefinitions/DateTimePropertyDefinition");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var GenericPropertyDefinition_1 = require("../../../PropertyDefinitions/GenericPropertyDefinition");
var IconIndex_1 = require("../../../Enumerations/IconIndex");
var Importance_1 = require("../../../Enumerations/Importance");
var IntPropertyDefinition_1 = require("../../../PropertyDefinitions/IntPropertyDefinition");
var ItemIdCollection_1 = require("../../../ComplexProperties/ItemIdCollection");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var StringList_1 = require("../../../ComplexProperties/StringList");
var StringPropertyDefinition_1 = require("../../../PropertyDefinitions/StringPropertyDefinition");
var XmlElementNames_1 = require("../../XmlElementNames");
var ServiceObjectSchema_1 = require("./ServiceObjectSchema");
/**
 * Field URIs for Conversation.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.ConversationId = "conversation:ConversationId";
    FieldUris.ConversationTopic = "conversation:ConversationTopic";
    FieldUris.UniqueRecipients = "conversation:UniqueRecipients";
    FieldUris.GlobalUniqueRecipients = "conversation:GlobalUniqueRecipients";
    FieldUris.UniqueUnreadSenders = "conversation:UniqueUnreadSenders";
    FieldUris.GlobalUniqueUnreadSenders = "conversation:GlobalUniqueUnreadSenders";
    FieldUris.UniqueSenders = "conversation:UniqueSenders";
    FieldUris.GlobalUniqueSenders = "conversation:GlobalUniqueSenders";
    FieldUris.LastDeliveryTime = "conversation:LastDeliveryTime";
    FieldUris.GlobalLastDeliveryTime = "conversation:GlobalLastDeliveryTime";
    FieldUris.Categories = "conversation:Categories";
    FieldUris.GlobalCategories = "conversation:GlobalCategories";
    FieldUris.FlagStatus = "conversation:FlagStatus";
    FieldUris.GlobalFlagStatus = "conversation:GlobalFlagStatus";
    FieldUris.HasAttachments = "conversation:HasAttachments";
    FieldUris.GlobalHasAttachments = "conversation:GlobalHasAttachments";
    FieldUris.MessageCount = "conversation:MessageCount";
    FieldUris.GlobalMessageCount = "conversation:GlobalMessageCount";
    FieldUris.UnreadCount = "conversation:UnreadCount";
    FieldUris.GlobalUnreadCount = "conversation:GlobalUnreadCount";
    FieldUris.Size = "conversation:Size";
    FieldUris.GlobalSize = "conversation:GlobalSize";
    FieldUris.ItemClasses = "conversation:ItemClasses";
    FieldUris.GlobalItemClasses = "conversation:GlobalItemClasses";
    FieldUris.Importance = "conversation:Importance";
    FieldUris.GlobalImportance = "conversation:GlobalImportance";
    FieldUris.ItemIds = "conversation:ItemIds";
    FieldUris.GlobalItemIds = "conversation:GlobalItemIds";
    FieldUris.LastModifiedTime = "conversation:LastModifiedTime";
    FieldUris.InstanceKey = "conversation:InstanceKey";
    FieldUris.Preview = "conversation:Preview";
    FieldUris.IconIndex = "conversation:IconIndex";
    FieldUris.GlobalIconIndex = "conversation:GlobalIconIndex";
    FieldUris.DraftItemIds = "conversation:DraftItemIds";
    FieldUris.HasIrm = "conversation:HasIrm";
    FieldUris.GlobalHasIrm = "conversation:GlobalHasIrm";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for Conversation.
 */
var ConversationSchema = /** @class */ (function (_super) {
    __extends(ConversationSchema, _super);
    function ConversationSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    ConversationSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(ConversationSchema, ConversationSchema.Id);
        this.RegisterProperty(ConversationSchema, ConversationSchema.Topic);
        this.RegisterProperty(ConversationSchema, ConversationSchema.UniqueRecipients);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalUniqueRecipients);
        this.RegisterProperty(ConversationSchema, ConversationSchema.UniqueUnreadSenders);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalUniqueUnreadSenders);
        this.RegisterProperty(ConversationSchema, ConversationSchema.UniqueSenders);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalUniqueSenders);
        this.RegisterProperty(ConversationSchema, ConversationSchema.LastDeliveryTime);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalLastDeliveryTime);
        this.RegisterProperty(ConversationSchema, ConversationSchema.Categories);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalCategories);
        this.RegisterProperty(ConversationSchema, ConversationSchema.FlagStatus);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalFlagStatus);
        this.RegisterProperty(ConversationSchema, ConversationSchema.HasAttachments);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalHasAttachments);
        this.RegisterProperty(ConversationSchema, ConversationSchema.MessageCount);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalMessageCount);
        this.RegisterProperty(ConversationSchema, ConversationSchema.UnreadCount);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalUnreadCount);
        this.RegisterProperty(ConversationSchema, ConversationSchema.Size);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalSize);
        this.RegisterProperty(ConversationSchema, ConversationSchema.ItemClasses);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalItemClasses);
        this.RegisterProperty(ConversationSchema, ConversationSchema.Importance);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalImportance);
        this.RegisterProperty(ConversationSchema, ConversationSchema.ItemIds);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalItemIds);
        this.RegisterProperty(ConversationSchema, ConversationSchema.LastModifiedTime);
        this.RegisterProperty(ConversationSchema, ConversationSchema.InstanceKey);
        this.RegisterProperty(ConversationSchema, ConversationSchema.Preview);
        this.RegisterProperty(ConversationSchema, ConversationSchema.IconIndex);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalIconIndex);
        this.RegisterProperty(ConversationSchema, ConversationSchema.DraftItemIds);
        this.RegisterProperty(ConversationSchema, ConversationSchema.HasIrm);
        this.RegisterProperty(ConversationSchema, ConversationSchema.GlobalHasIrm);
    };
    /**
     * Defines the **Id** property.
     */
    ConversationSchema.Id = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ConversationId", XmlElementNames_1.XmlElementNames.ConversationId, FieldUris.ConversationId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new ConversationId_1.ConversationId(); });
    /**
     * Defines the **Topic** property.
     */
    ConversationSchema.Topic = new StringPropertyDefinition_1.StringPropertyDefinition("ConversationTopic", XmlElementNames_1.XmlElementNames.ConversationTopic, FieldUris.ConversationTopic, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **UniqueRecipients** property.
     */
    ConversationSchema.UniqueRecipients = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("UniqueRecipients", XmlElementNames_1.XmlElementNames.UniqueRecipients, FieldUris.UniqueRecipients, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **GlobalUniqueRecipients** property.
     */
    ConversationSchema.GlobalUniqueRecipients = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("GlobalUniqueRecipients", XmlElementNames_1.XmlElementNames.GlobalUniqueRecipients, FieldUris.GlobalUniqueRecipients, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **UniqueUnreadSenders** property.
     */
    ConversationSchema.UniqueUnreadSenders = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("UniqueUnreadSenders", XmlElementNames_1.XmlElementNames.UniqueUnreadSenders, FieldUris.UniqueUnreadSenders, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **GlobalUniqueUnreadSenders** property.
     */
    ConversationSchema.GlobalUniqueUnreadSenders = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("GlobalUniqueUnreadSenders", XmlElementNames_1.XmlElementNames.GlobalUniqueUnreadSenders, FieldUris.GlobalUniqueUnreadSenders, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **UniqueSenders** property.
     */
    ConversationSchema.UniqueSenders = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("UniqueSenders", XmlElementNames_1.XmlElementNames.UniqueSenders, FieldUris.UniqueSenders, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **GlobalUniqueSenders** property.
     */
    ConversationSchema.GlobalUniqueSenders = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("GlobalUniqueSenders", XmlElementNames_1.XmlElementNames.GlobalUniqueSenders, FieldUris.GlobalUniqueSenders, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **LastDeliveryTime** property.
     */
    ConversationSchema.LastDeliveryTime = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("LastDeliveryTime", XmlElementNames_1.XmlElementNames.LastDeliveryTime, FieldUris.LastDeliveryTime, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **GlobalLastDeliveryTime** property.
     */
    ConversationSchema.GlobalLastDeliveryTime = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("GlobalLastDeliveryTime", XmlElementNames_1.XmlElementNames.GlobalLastDeliveryTime, FieldUris.GlobalLastDeliveryTime, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **Categories** property.
     */
    ConversationSchema.Categories = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Categories", XmlElementNames_1.XmlElementNames.Categories, FieldUris.Categories, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **GlobalCategories** property.
     */
    ConversationSchema.GlobalCategories = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("GlobalCategories", XmlElementNames_1.XmlElementNames.GlobalCategories, FieldUris.GlobalCategories, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **FlagStatus** property.
     */
    ConversationSchema.FlagStatus = new GenericPropertyDefinition_1.GenericPropertyDefinition("FlagStatus", XmlElementNames_1.XmlElementNames.FlagStatus, FieldUris.FlagStatus, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, ConversationFlagStatus_1.ConversationFlagStatus);
    /**
     * Defines the **GlobalFlagStatus** property.
     */
    ConversationSchema.GlobalFlagStatus = new GenericPropertyDefinition_1.GenericPropertyDefinition("GlobalFlagStatus", XmlElementNames_1.XmlElementNames.GlobalFlagStatus, FieldUris.GlobalFlagStatus, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, ConversationFlagStatus_1.ConversationFlagStatus);
    /**
     * Defines the **HasAttachments** property.
     */
    ConversationSchema.HasAttachments = new BoolPropertyDefinition_1.BoolPropertyDefinition("HasAttachments", XmlElementNames_1.XmlElementNames.HasAttachments, FieldUris.HasAttachments, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **GlobalHasAttachments** property.
     */
    ConversationSchema.GlobalHasAttachments = new BoolPropertyDefinition_1.BoolPropertyDefinition("GlobalHasAttachments", XmlElementNames_1.XmlElementNames.GlobalHasAttachments, FieldUris.GlobalHasAttachments, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **MessageCount** property.
     */
    ConversationSchema.MessageCount = new IntPropertyDefinition_1.IntPropertyDefinition("MessageCount", XmlElementNames_1.XmlElementNames.MessageCount, FieldUris.MessageCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **GlobalMessageCount** property.
     */
    ConversationSchema.GlobalMessageCount = new IntPropertyDefinition_1.IntPropertyDefinition("GlobalMessageCount", XmlElementNames_1.XmlElementNames.GlobalMessageCount, FieldUris.GlobalMessageCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **UnreadCount** property.
     */
    ConversationSchema.UnreadCount = new IntPropertyDefinition_1.IntPropertyDefinition("UnreadCount", XmlElementNames_1.XmlElementNames.UnreadCount, FieldUris.UnreadCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **GlobalUnreadCount** property.
     */
    ConversationSchema.GlobalUnreadCount = new IntPropertyDefinition_1.IntPropertyDefinition("GlobalUnreadCount", XmlElementNames_1.XmlElementNames.GlobalUnreadCount, FieldUris.GlobalUnreadCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **Size** property.
     */
    ConversationSchema.Size = new IntPropertyDefinition_1.IntPropertyDefinition("Size", XmlElementNames_1.XmlElementNames.Size, FieldUris.Size, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **GlobalSize** property.
     */
    ConversationSchema.GlobalSize = new IntPropertyDefinition_1.IntPropertyDefinition("GlobalSize", XmlElementNames_1.XmlElementNames.GlobalSize, FieldUris.GlobalSize, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **ItemClasses** property.
     */
    ConversationSchema.ItemClasses = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ItemClasses", XmlElementNames_1.XmlElementNames.ItemClasses, FieldUris.ItemClasses, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList("ItemClass"); });
    /**
     * Defines the **GlobalItemClasses** property.
     */
    ConversationSchema.GlobalItemClasses = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("GlobalItemClasses", XmlElementNames_1.XmlElementNames.GlobalItemClasses, FieldUris.GlobalItemClasses, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new StringList_1.StringList("ItemClass"); });
    /**
     * Defines the **Importance** property.
     */
    ConversationSchema.Importance = new GenericPropertyDefinition_1.GenericPropertyDefinition("Importance", XmlElementNames_1.XmlElementNames.Importance, FieldUris.Importance, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, Importance_1.Importance);
    /**
     * Defines the **GlobalImportance** property.
     */
    ConversationSchema.GlobalImportance = new GenericPropertyDefinition_1.GenericPropertyDefinition("GlobalImportance", XmlElementNames_1.XmlElementNames.GlobalImportance, FieldUris.GlobalImportance, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, Importance_1.Importance);
    /**
     * Defines the **ItemIds** property.
     */
    ConversationSchema.ItemIds = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ItemIds", XmlElementNames_1.XmlElementNames.ItemIds, FieldUris.ItemIds, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new ItemIdCollection_1.ItemIdCollection(); });
    /**
     * Defines the **GlobalItemIds** property.
     */
    ConversationSchema.GlobalItemIds = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("GlobalItemIds", XmlElementNames_1.XmlElementNames.GlobalItemIds, FieldUris.GlobalItemIds, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new ItemIdCollection_1.ItemIdCollection(); });
    /**
     * Defines the **LastModifiedTime** property.
     */
    ConversationSchema.LastModifiedTime = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("LastModifiedTime", XmlElementNames_1.XmlElementNames.LastModifiedTime, FieldUris.LastModifiedTime, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013);
    /**
     * Defines the **InstanceKey** property.
     */
    ConversationSchema.InstanceKey = new ByteArrayPropertyDefinition_1.ByteArrayPropertyDefinition("InstanceKey", XmlElementNames_1.XmlElementNames.InstanceKey, FieldUris.InstanceKey, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013);
    /**
     * Defines the **Preview** property.
     */
    ConversationSchema.Preview = new StringPropertyDefinition_1.StringPropertyDefinition("Preview", XmlElementNames_1.XmlElementNames.Preview, FieldUris.Preview, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013);
    /**
     * Defines the **IconIndex** property.
     */
    ConversationSchema.IconIndex = new GenericPropertyDefinition_1.GenericPropertyDefinition("IconIndex", XmlElementNames_1.XmlElementNames.IconIndex, FieldUris.IconIndex, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, IconIndex_1.IconIndex);
    /**
     * Defines the **GlobalIconIndex** property.
     */
    ConversationSchema.GlobalIconIndex = new GenericPropertyDefinition_1.GenericPropertyDefinition("GlobalIconIndex", XmlElementNames_1.XmlElementNames.GlobalIconIndex, FieldUris.GlobalIconIndex, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, IconIndex_1.IconIndex);
    /**
     * Defines the **DraftItemIds** property.
     */
    ConversationSchema.DraftItemIds = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("DraftItemIds", XmlElementNames_1.XmlElementNames.DraftItemIds, FieldUris.DraftItemIds, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new ItemIdCollection_1.ItemIdCollection(); });
    /**
     * Defines the **HasIrm** property.
     */
    ConversationSchema.HasIrm = new BoolPropertyDefinition_1.BoolPropertyDefinition("HasIrm", XmlElementNames_1.XmlElementNames.HasIrm, FieldUris.HasIrm, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013);
    /**
     * Defines the **GlobalHasIrm** property.
     */
    ConversationSchema.GlobalHasIrm = new BoolPropertyDefinition_1.BoolPropertyDefinition("GlobalHasIrm", XmlElementNames_1.XmlElementNames.GlobalHasIrm, FieldUris.GlobalHasIrm, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013);
    /**
     * @internal Instance of **ConversationSchema**
     */
    ConversationSchema.Instance = new ConversationSchema();
    return ConversationSchema;
}(ServiceObjectSchema_1.ServiceObjectSchema));
exports.ConversationSchema = ConversationSchema;
