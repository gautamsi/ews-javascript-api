import {XmlElementNames} from "../../XmlElementNames";
import {ConversationFlagStatus} from "../../../Enumerations/ConversationFlagStatus";
import {Importance} from "../../../Enumerations/Importance";
import {IconIndex} from "../../../Enumerations/IconIndex";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ConversationId} from "../../../ComplexProperties/ConversationId";
import {StringPropertyDefinition} from "../../../PropertyDefinitions/StringPropertyDefinition";
import {StringList} from "../../../ComplexProperties/StringList";
import {DateTimePropertyDefinition} from "../../../PropertyDefinitions/DateTimePropertyDefinition";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {BoolPropertyDefinition} from "../../../PropertyDefinitions/BoolPropertyDefinition";
import {IntPropertyDefinition} from "../../../PropertyDefinitions/IntPropertyDefinition";
import {ItemIdCollection} from "../../../ComplexProperties/ItemIdCollection";
import {ByteArrayPropertyDefinition} from "../../../PropertyDefinitions/ByteArrayPropertyDefinition";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";

/**
 * Field URIs for Conversation.
 */
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

/**
 * Represents the schema for Conversation.
 */
export class ConversationSchema extends ServiceObjectSchema {

    /**
     * Defines the **Id** property.
     */
    public Id: PropertyDefinition;

    /**
     * Defines the **Topic** property.
     */
    public Topic: PropertyDefinition;

    /**
     * Defines the **UniqueRecipients** property.
     */
    public UniqueRecipients: PropertyDefinition;

    /**
     * Defines the **GlobalUniqueRecipients** property.
     */
    public GlobalUniqueRecipients: PropertyDefinition;

    /**
     * Defines the **UniqueUnreadSenders** property.
     */
    public UniqueUnreadSenders: PropertyDefinition;

    /**
     * Defines the **GlobalUniqueUnreadSenders** property.
     */
    public GlobalUniqueUnreadSenders: PropertyDefinition;

    /**
     * Defines the **UniqueSenders** property.
     */
    public UniqueSenders: PropertyDefinition;

    /**
     * Defines the **GlobalUniqueSenders** property.
     */
    public GlobalUniqueSenders: PropertyDefinition;

    /**
     * Defines the **LastDeliveryTime** property.
     */
    public LastDeliveryTime: PropertyDefinition;

    /**
     * Defines the **GlobalLastDeliveryTime** property.
     */
    public GlobalLastDeliveryTime: PropertyDefinition;

    /**
     * Defines the **Categories** property.
     */
    public Categories: PropertyDefinition;

    /**
     * Defines the **GlobalCategories** property.
     */
    public GlobalCategories: PropertyDefinition;

    /**
     * Defines the **FlagStatus** property.
     */
    public FlagStatus: PropertyDefinition;

    /**
     * Defines the **GlobalFlagStatus** property.
     */
    public GlobalFlagStatus: PropertyDefinition;

    /**
     * Defines the **HasAttachments** property.
     */
    public HasAttachments: PropertyDefinition;

    /**
     * Defines the **GlobalHasAttachments** property.
     */
    public GlobalHasAttachments: PropertyDefinition;

    /**
     * Defines the **MessageCount** property.
     */
    public MessageCount: PropertyDefinition;

    /**
     * Defines the **GlobalMessageCount** property.
     */
    public GlobalMessageCount: PropertyDefinition;

    /**
     * Defines the **UnreadCount** property.
     */
    public UnreadCount: PropertyDefinition;

    /**
     * Defines the **GlobalUnreadCount** property.
     */
    public GlobalUnreadCount: PropertyDefinition;

    /**
     * Defines the **Size** property.
     */
    public Size: PropertyDefinition;

    /**
     * Defines the **GlobalSize** property.
     */
    public GlobalSize: PropertyDefinition;

    /**
     * Defines the **ItemClasses** property.
     */
    public ItemClasses: PropertyDefinition;

    /**
     * Defines the **GlobalItemClasses** property.
     */
    public GlobalItemClasses: PropertyDefinition;

    /**
     * Defines the **Importance** property.
     */
    public Importance: PropertyDefinition;

    /**
     * Defines the **GlobalImportance** property.
     */
    public GlobalImportance: PropertyDefinition;

    /**
     * Defines the **ItemIds** property.
     */
    public ItemIds: PropertyDefinition;

    /**
     * Defines the **GlobalItemIds** property.
     */
    public GlobalItemIds: PropertyDefinition;

    /**
     * Defines the **LastModifiedTime** property.
     */
    public LastModifiedTime: PropertyDefinition;

    /**
     * Defines the **InstanceKey** property.
     */
    public InstanceKey: PropertyDefinition;

    /**
     * Defines the **Preview** property.
     */
    public Preview: PropertyDefinition;

    /**
     * Defines the **IconIndex** property.
     */
    public IconIndex: PropertyDefinition;

    /**
     * Defines the **GlobalIconIndex** property.
     */
    public GlobalIconIndex: PropertyDefinition;

    /**
     * Defines the **DraftItemIds** property.
     */
    public DraftItemIds: PropertyDefinition;

    /**
     * Defines the **HasIrm** property.
     */
    public HasIrm: PropertyDefinition;

    /**
     * Defines the **GlobalHasIrm** property.
     */
    public GlobalHasIrm: PropertyDefinition;

    /**
     * @internal Instance of **ConversationSchema** 
     */
    static Instance: ConversationSchema = new ConversationSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(this.Id);
        super.RegisterProperty(this.Topic);
        super.RegisterProperty(this.UniqueRecipients);
        super.RegisterProperty(this.GlobalUniqueRecipients);
        super.RegisterProperty(this.UniqueUnreadSenders);
        super.RegisterProperty(this.GlobalUniqueUnreadSenders);
        super.RegisterProperty(this.UniqueSenders);
        super.RegisterProperty(this.GlobalUniqueSenders);
        super.RegisterProperty(this.LastDeliveryTime);
        super.RegisterProperty(this.GlobalLastDeliveryTime);
        super.RegisterProperty(this.Categories);
        super.RegisterProperty(this.GlobalCategories);
        super.RegisterProperty(this.FlagStatus);
        super.RegisterProperty(this.GlobalFlagStatus);
        super.RegisterProperty(this.HasAttachments);
        super.RegisterProperty(this.GlobalHasAttachments);
        super.RegisterProperty(this.MessageCount);
        super.RegisterProperty(this.GlobalMessageCount);
        super.RegisterProperty(this.UnreadCount);
        super.RegisterProperty(this.GlobalUnreadCount);
        super.RegisterProperty(this.Size);
        super.RegisterProperty(this.GlobalSize);
        super.RegisterProperty(this.ItemClasses);
        super.RegisterProperty(this.GlobalItemClasses);
        super.RegisterProperty(this.Importance);
        super.RegisterProperty(this.GlobalImportance);
        super.RegisterProperty(this.ItemIds);
        super.RegisterProperty(this.GlobalItemIds);
        super.RegisterProperty(this.LastModifiedTime);
        super.RegisterProperty(this.InstanceKey);
        super.RegisterProperty(this.Preview);
        super.RegisterProperty(this.IconIndex);
        super.RegisterProperty(this.GlobalIconIndex);
        super.RegisterProperty(this.DraftItemIds);
        super.RegisterProperty(this.HasIrm);
        super.RegisterProperty(this.GlobalHasIrm);
    }

    protected init() {
        super.init();
        this.Id = new ComplexPropertyDefinition<ConversationId>(
            "ConversationId",
            XmlElementNames.ConversationId,
            FieldUris.ConversationId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new ConversationId(); }
        );

        this.Topic = new StringPropertyDefinition(
            "ConversationTopic",
            XmlElementNames.ConversationTopic,
            FieldUris.ConversationTopic,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.UniqueRecipients = new ComplexPropertyDefinition<StringList>(
            "UniqueRecipients",
            XmlElementNames.UniqueRecipients,
            FieldUris.UniqueRecipients,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList(); }
        );

        this.GlobalUniqueRecipients = new ComplexPropertyDefinition<StringList>(
            "GlobalUniqueRecipients",
            XmlElementNames.GlobalUniqueRecipients,
            FieldUris.GlobalUniqueRecipients,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList(); }
        );

        this.UniqueUnreadSenders = new ComplexPropertyDefinition<StringList>(
            "UniqueUnreadSenders",
            XmlElementNames.UniqueUnreadSenders,
            FieldUris.UniqueUnreadSenders,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList(); }
        );

        this.GlobalUniqueUnreadSenders = new ComplexPropertyDefinition<StringList>(
            "GlobalUniqueUnreadSenders",
            XmlElementNames.GlobalUniqueUnreadSenders,
            FieldUris.GlobalUniqueUnreadSenders,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList(); }
        );

        this.UniqueSenders = new ComplexPropertyDefinition<StringList>(
            "UniqueSenders",
            XmlElementNames.UniqueSenders,
            FieldUris.UniqueSenders,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList(); }
        );

        this.GlobalUniqueSenders = new ComplexPropertyDefinition<StringList>(
            "GlobalUniqueSenders",
            XmlElementNames.GlobalUniqueSenders,
            FieldUris.GlobalUniqueSenders,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList(); }
        );

        this.LastDeliveryTime = new DateTimePropertyDefinition(
            "LastDeliveryTime",
            XmlElementNames.LastDeliveryTime,
            FieldUris.LastDeliveryTime,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.GlobalLastDeliveryTime = new DateTimePropertyDefinition(
            "GlobalLastDeliveryTime",
            XmlElementNames.GlobalLastDeliveryTime,
            FieldUris.GlobalLastDeliveryTime,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.Categories = new ComplexPropertyDefinition<StringList>(
            "Categories",
            XmlElementNames.Categories,
            FieldUris.Categories,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList(); }
        );

        this.GlobalCategories = new ComplexPropertyDefinition<StringList>(
            "GlobalCategories",
            XmlElementNames.GlobalCategories,
            FieldUris.GlobalCategories,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList(); }
        );

        this.FlagStatus = new GenericPropertyDefinition<ConversationFlagStatus>(
            "FlagStatus",
            XmlElementNames.FlagStatus,
            FieldUris.FlagStatus,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.GlobalFlagStatus = new GenericPropertyDefinition<ConversationFlagStatus>(
            "GlobalFlagStatus",
            XmlElementNames.GlobalFlagStatus,
            FieldUris.GlobalFlagStatus,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.HasAttachments = new BoolPropertyDefinition(
            "HasAttachments",
            XmlElementNames.HasAttachments,
            FieldUris.HasAttachments,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.GlobalHasAttachments = new BoolPropertyDefinition(
            "GlobalHasAttachments",
            XmlElementNames.GlobalHasAttachments,
            FieldUris.GlobalHasAttachments,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.MessageCount = new IntPropertyDefinition(
            "MessageCount",
            XmlElementNames.MessageCount,
            FieldUris.MessageCount,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.GlobalMessageCount = new IntPropertyDefinition(
            "GlobalMessageCount",
            XmlElementNames.GlobalMessageCount,
            FieldUris.GlobalMessageCount,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.UnreadCount = new IntPropertyDefinition(
            "UnreadCount",
            XmlElementNames.UnreadCount,
            FieldUris.UnreadCount,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.GlobalUnreadCount = new IntPropertyDefinition(
            "GlobalUnreadCount",
            XmlElementNames.GlobalUnreadCount,
            FieldUris.GlobalUnreadCount,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.Size = new IntPropertyDefinition(
            "Size",
            XmlElementNames.Size,
            FieldUris.Size,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.GlobalSize = new IntPropertyDefinition(
            "GlobalSize",
            XmlElementNames.GlobalSize,
            FieldUris.GlobalSize,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.ItemClasses = new ComplexPropertyDefinition<StringList>(
            "ItemClasses",
            XmlElementNames.ItemClasses,
            FieldUris.ItemClasses,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList("ItemClass"); }
        );

        this.GlobalItemClasses = new ComplexPropertyDefinition<StringList>(
            "GlobalItemClasses",
            XmlElementNames.GlobalItemClasses,
            FieldUris.GlobalItemClasses,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new StringList("ItemClass"); }
        );

        this.Importance = new GenericPropertyDefinition<Importance>(
            "Importance",
            XmlElementNames.Importance,
            FieldUris.Importance,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.GlobalImportance = new GenericPropertyDefinition<Importance>(
            "GlobalImportance",
            XmlElementNames.GlobalImportance,
            FieldUris.GlobalImportance,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.ItemIds = new ComplexPropertyDefinition<ItemIdCollection>(
            "ItemIds",
            XmlElementNames.ItemIds,
            FieldUris.ItemIds,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new ItemIdCollection(); }
        );

        this.GlobalItemIds = new ComplexPropertyDefinition<ItemIdCollection>(
            "GlobalItemIds",
            XmlElementNames.GlobalItemIds,
            FieldUris.GlobalItemIds,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new ItemIdCollection(); }
        );

        this.LastModifiedTime = new DateTimePropertyDefinition(
            "LastModifiedTime",
            XmlElementNames.LastModifiedTime,
            FieldUris.LastModifiedTime,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.InstanceKey = new ByteArrayPropertyDefinition(
            "InstanceKey",
            XmlElementNames.InstanceKey,
            FieldUris.InstanceKey,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.Preview = new StringPropertyDefinition(
            "Preview",
            XmlElementNames.Preview,
            FieldUris.Preview,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.IconIndex = new GenericPropertyDefinition<IconIndex>(
            "IconIndex",
            XmlElementNames.IconIndex,
            FieldUris.IconIndex,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.GlobalIconIndex = new GenericPropertyDefinition<IconIndex>(
            "GlobalIconIndex",
            XmlElementNames.GlobalIconIndex,
            FieldUris.GlobalIconIndex,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.DraftItemIds = new ComplexPropertyDefinition<ItemIdCollection>(
            "DraftItemIds",
            XmlElementNames.DraftItemIds,
            FieldUris.DraftItemIds,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            () => { return new ItemIdCollection(); }
        );

        this.HasIrm = new BoolPropertyDefinition(
            "HasIrm",
            XmlElementNames.HasIrm,
            FieldUris.HasIrm,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.GlobalHasIrm = new BoolPropertyDefinition(
            "GlobalHasIrm",
            XmlElementNames.GlobalHasIrm,
            FieldUris.GlobalHasIrm,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );
    }
}