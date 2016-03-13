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
    public static Id: PropertyDefinition = new ComplexPropertyDefinition<ConversationId>(
        "ConversationId",
        XmlElementNames.ConversationId,
        FieldUris.ConversationId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new ConversationId(); }
    );

    /**
     * Defines the **Topic** property.
     */
    public static Topic: PropertyDefinition = new StringPropertyDefinition(
        "ConversationTopic",
        XmlElementNames.ConversationTopic,
        FieldUris.ConversationTopic,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **UniqueRecipients** property.
     */
    public static UniqueRecipients: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "UniqueRecipients",
        XmlElementNames.UniqueRecipients,
        FieldUris.UniqueRecipients,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **GlobalUniqueRecipients** property.
     */
    public static GlobalUniqueRecipients: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalUniqueRecipients",
        XmlElementNames.GlobalUniqueRecipients,
        FieldUris.GlobalUniqueRecipients,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **UniqueUnreadSenders** property.
     */
    public static UniqueUnreadSenders: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "UniqueUnreadSenders",
        XmlElementNames.UniqueUnreadSenders,
        FieldUris.UniqueUnreadSenders,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **GlobalUniqueUnreadSenders** property.
     */
    public static GlobalUniqueUnreadSenders: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalUniqueUnreadSenders",
        XmlElementNames.GlobalUniqueUnreadSenders,
        FieldUris.GlobalUniqueUnreadSenders,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **UniqueSenders** property.
     */
    public static UniqueSenders: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "UniqueSenders",
        XmlElementNames.UniqueSenders,
        FieldUris.UniqueSenders,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **GlobalUniqueSenders** property.
     */
    public static GlobalUniqueSenders: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalUniqueSenders",
        XmlElementNames.GlobalUniqueSenders,
        FieldUris.GlobalUniqueSenders,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **LastDeliveryTime** property.
     */
    public static LastDeliveryTime: PropertyDefinition = new DateTimePropertyDefinition(
        "LastDeliveryTime",
        XmlElementNames.LastDeliveryTime,
        FieldUris.LastDeliveryTime,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **GlobalLastDeliveryTime** property.
     */
    public static GlobalLastDeliveryTime: PropertyDefinition = new DateTimePropertyDefinition(
        "GlobalLastDeliveryTime",
        XmlElementNames.GlobalLastDeliveryTime,
        FieldUris.GlobalLastDeliveryTime,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **Categories** property.
     */
    public static Categories: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Categories",
        XmlElementNames.Categories,
        FieldUris.Categories,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **GlobalCategories** property.
     */
    public static GlobalCategories: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalCategories",
        XmlElementNames.GlobalCategories,
        FieldUris.GlobalCategories,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **FlagStatus** property.
     */
    public static FlagStatus: PropertyDefinition = new GenericPropertyDefinition<ConversationFlagStatus>(
        "FlagStatus",
        XmlElementNames.FlagStatus,
        FieldUris.FlagStatus,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **GlobalFlagStatus** property.
     */
    public static GlobalFlagStatus: PropertyDefinition = new GenericPropertyDefinition<ConversationFlagStatus>(
        "GlobalFlagStatus",
        XmlElementNames.GlobalFlagStatus,
        FieldUris.GlobalFlagStatus,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **HasAttachments** property.
     */
    public static HasAttachments: PropertyDefinition = new BoolPropertyDefinition(
        "HasAttachments",
        XmlElementNames.HasAttachments,
        FieldUris.HasAttachments,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **GlobalHasAttachments** property.
     */
    public static GlobalHasAttachments: PropertyDefinition = new BoolPropertyDefinition(
        "GlobalHasAttachments",
        XmlElementNames.GlobalHasAttachments,
        FieldUris.GlobalHasAttachments,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **MessageCount** property.
     */
    public static MessageCount: PropertyDefinition = new IntPropertyDefinition(
        "MessageCount",
        XmlElementNames.MessageCount,
        FieldUris.MessageCount,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **GlobalMessageCount** property.
     */
    public static GlobalMessageCount: PropertyDefinition = new IntPropertyDefinition(
        "GlobalMessageCount",
        XmlElementNames.GlobalMessageCount,
        FieldUris.GlobalMessageCount,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **UnreadCount** property.
     */
    public static UnreadCount: PropertyDefinition = new IntPropertyDefinition(
        "UnreadCount",
        XmlElementNames.UnreadCount,
        FieldUris.UnreadCount,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **GlobalUnreadCount** property.
     */
    public static GlobalUnreadCount: PropertyDefinition = new IntPropertyDefinition(
        "GlobalUnreadCount",
        XmlElementNames.GlobalUnreadCount,
        FieldUris.GlobalUnreadCount,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **Size** property.
     */
    public static Size: PropertyDefinition = new IntPropertyDefinition(
        "Size",
        XmlElementNames.Size,
        FieldUris.Size,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **GlobalSize** property.
     */
    public static GlobalSize: PropertyDefinition = new IntPropertyDefinition(
        "GlobalSize",
        XmlElementNames.GlobalSize,
        FieldUris.GlobalSize,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **ItemClasses** property.
     */
    public static ItemClasses: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "ItemClasses",
        XmlElementNames.ItemClasses,
        FieldUris.ItemClasses,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList("ItemClass"); }
    );

    /**
     * Defines the **GlobalItemClasses** property.
     */
    public static GlobalItemClasses: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalItemClasses",
        XmlElementNames.GlobalItemClasses,
        FieldUris.GlobalItemClasses,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new StringList("ItemClass"); }
    );

    /**
     * Defines the **Importance** property.
     */
    public static Importance: PropertyDefinition = new GenericPropertyDefinition<Importance>(
        "Importance",
        XmlElementNames.Importance,
        FieldUris.Importance,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **GlobalImportance** property.
     */
    public static GlobalImportance: PropertyDefinition = new GenericPropertyDefinition<Importance>(
        "GlobalImportance",
        XmlElementNames.GlobalImportance,
        FieldUris.GlobalImportance,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **ItemIds** property.
     */
    public static ItemIds: PropertyDefinition = new ComplexPropertyDefinition<ItemIdCollection>(
        "ItemIds",
        XmlElementNames.ItemIds,
        FieldUris.ItemIds,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new ItemIdCollection(); }
    );

    /**
     * Defines the **GlobalItemIds** property.
     */
    public static GlobalItemIds: PropertyDefinition = new ComplexPropertyDefinition<ItemIdCollection>(
        "GlobalItemIds",
        XmlElementNames.GlobalItemIds,
        FieldUris.GlobalItemIds,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new ItemIdCollection(); }
    );

    /**
     * Defines the **LastModifiedTime** property.
     */
    public static LastModifiedTime: PropertyDefinition = new DateTimePropertyDefinition(
        "LastModifiedTime",
        XmlElementNames.LastModifiedTime,
        FieldUris.LastModifiedTime,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013
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
     * Defines the **GlobalIconIndex** property.
     */
    public static GlobalIconIndex: PropertyDefinition = new GenericPropertyDefinition<IconIndex>(
        "GlobalIconIndex",
        XmlElementNames.GlobalIconIndex,
        FieldUris.GlobalIconIndex,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013
    );

    /**
     * Defines the **DraftItemIds** property.
     */
    public static DraftItemIds: PropertyDefinition = new ComplexPropertyDefinition<ItemIdCollection>(
        "DraftItemIds",
        XmlElementNames.DraftItemIds,
        FieldUris.DraftItemIds,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        () => { return new ItemIdCollection(); }
    );

    /**
     * Defines the **HasIrm** property.
     */
    public static HasIrm: PropertyDefinition = new BoolPropertyDefinition(
        "HasIrm",
        XmlElementNames.HasIrm,
        FieldUris.HasIrm,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013
    );

    /**
     * Defines the **GlobalHasIrm** property.
     */
    public static GlobalHasIrm: PropertyDefinition = new BoolPropertyDefinition(
        "GlobalHasIrm",
        XmlElementNames.GlobalHasIrm,
        FieldUris.GlobalHasIrm,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013
    );

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
    }
}

/**
 * Represents the schema for Conversation.
 */
export interface ConversationSchema {
    /**
     * Defines the **Id** property.
     */
    Id: PropertyDefinition;
    /**
     * Defines the **Topic** property.
     */
    Topic: PropertyDefinition;
    /**
     * Defines the **UniqueRecipients** property.
     */
    UniqueRecipients: PropertyDefinition;
    /**
     * Defines the **GlobalUniqueRecipients** property.
     */
    GlobalUniqueRecipients: PropertyDefinition;
    /**
     * Defines the **UniqueUnreadSenders** property.
     */
    UniqueUnreadSenders: PropertyDefinition;
    /**
     * Defines the **GlobalUniqueUnreadSenders** property.
     */
    GlobalUniqueUnreadSenders: PropertyDefinition;
    /**
     * Defines the **UniqueSenders** property.
     */
    UniqueSenders: PropertyDefinition;
    /**
     * Defines the **GlobalUniqueSenders** property.
     */
    GlobalUniqueSenders: PropertyDefinition;
    /**
     * Defines the **LastDeliveryTime** property.
     */
    LastDeliveryTime: PropertyDefinition;
    /**
     * Defines the **GlobalLastDeliveryTime** property.
     */
    GlobalLastDeliveryTime: PropertyDefinition;
    /**
     * Defines the **Categories** property.
     */
    Categories: PropertyDefinition;
    /**
     * Defines the **GlobalCategories** property.
     */
    GlobalCategories: PropertyDefinition;
    /**
     * Defines the **FlagStatus** property.
     */
    FlagStatus: PropertyDefinition;
    /**
     * Defines the **GlobalFlagStatus** property.
     */
    GlobalFlagStatus: PropertyDefinition;
    /**
     * Defines the **HasAttachments** property.
     */
    HasAttachments: PropertyDefinition;
    /**
     * Defines the **GlobalHasAttachments** property.
     */
    GlobalHasAttachments: PropertyDefinition;
    /**
     * Defines the **MessageCount** property.
     */
    MessageCount: PropertyDefinition;
    /**
     * Defines the **GlobalMessageCount** property.
     */
    GlobalMessageCount: PropertyDefinition;
    /**
     * Defines the **UnreadCount** property.
     */
    UnreadCount: PropertyDefinition;
    /**
     * Defines the **GlobalUnreadCount** property.
     */
    GlobalUnreadCount: PropertyDefinition;
    /**
     * Defines the **Size** property.
     */
    Size: PropertyDefinition;
    /**
     * Defines the **GlobalSize** property.
     */
    GlobalSize: PropertyDefinition;
    /**
     * Defines the **ItemClasses** property.
     */
    ItemClasses: PropertyDefinition;
    /**
     * Defines the **GlobalItemClasses** property.
     */
    GlobalItemClasses: PropertyDefinition;
    /**
     * Defines the **Importance** property.
     */
    Importance: PropertyDefinition;
    /**
     * Defines the **GlobalImportance** property.
     */
    GlobalImportance: PropertyDefinition;
    /**
     * Defines the **ItemIds** property.
     */
    ItemIds: PropertyDefinition;
    /**
     * Defines the **GlobalItemIds** property.
     */
    GlobalItemIds: PropertyDefinition;
    /**
     * Defines the **LastModifiedTime** property.
     */
    LastModifiedTime: PropertyDefinition;
    /**
     * Defines the **InstanceKey** property.
     */
    InstanceKey: PropertyDefinition;
    /**
     * Defines the **Preview** property.
     */
    Preview: PropertyDefinition;
    /**
     * Defines the **IconIndex** property.
     */
    IconIndex: PropertyDefinition;
    /**
     * Defines the **GlobalIconIndex** property.
     */
    GlobalIconIndex: PropertyDefinition;
    /**
     * Defines the **DraftItemIds** property.
     */
    DraftItemIds: PropertyDefinition;
    /**
     * Defines the **HasIrm** property.
     */
    HasIrm: PropertyDefinition;
    /**
     * Defines the **GlobalHasIrm** property.
     */
    GlobalHasIrm: PropertyDefinition;
    /**
     * @internal Instance of **ConversationSchema**
     */
    Instance: ConversationSchema;
}

/**
 * Represents the schema for Conversation.
 */
export interface ConversationSchemaStatic extends ConversationSchema {
}