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

export class ConversationSchema extends ServiceObjectSchema {

    public Id: PropertyDefinition;
    public Topic: PropertyDefinition;
    public UniqueRecipients: PropertyDefinition;
    public GlobalUniqueRecipients: PropertyDefinition;
    public UniqueUnreadSenders: PropertyDefinition;
    public GlobalUniqueUnreadSenders: PropertyDefinition;
    public UniqueSenders: PropertyDefinition;
    public GlobalUniqueSenders: PropertyDefinition;
    public LastDeliveryTime: PropertyDefinition;
    public GlobalLastDeliveryTime: PropertyDefinition;
    public Categories: PropertyDefinition;
    public GlobalCategories: PropertyDefinition;
    public FlagStatus: PropertyDefinition;
    public GlobalFlagStatus: PropertyDefinition;
    public HasAttachments: PropertyDefinition;
    public GlobalHasAttachments: PropertyDefinition;
    public MessageCount: PropertyDefinition;
    public GlobalMessageCount: PropertyDefinition;
    public UnreadCount: PropertyDefinition;
    public GlobalUnreadCount: PropertyDefinition;
    public Size: PropertyDefinition;
    public GlobalSize: PropertyDefinition;
    public ItemClasses: PropertyDefinition;
    public GlobalItemClasses: PropertyDefinition;
    public Importance: PropertyDefinition;
    public GlobalImportance: PropertyDefinition;
    public ItemIds: PropertyDefinition;
    public GlobalItemIds: PropertyDefinition;
    public LastModifiedTime: PropertyDefinition;
    public InstanceKey: PropertyDefinition;
    public Preview: PropertyDefinition;
    public IconIndex: PropertyDefinition;
    public GlobalIconIndex: PropertyDefinition;
    public DraftItemIds: PropertyDefinition;
    public HasIrm: PropertyDefinition;
    public GlobalHasIrm: PropertyDefinition;

    static Instance: ConversationSchema = new ConversationSchema();

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
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.ConversationId,
            PropertyDefinitionFlags.CanFind,
            () => { return new ConversationId(); }
        );

        this.Topic = new StringPropertyDefinition(
            "ConversationTopic",
            XmlElementNames.ConversationTopic,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.ConversationTopic,
            PropertyDefinitionFlags.CanFind
        );

        this.UniqueRecipients = new ComplexPropertyDefinition<StringList>(
            "UniqueRecipients",
            XmlElementNames.UniqueRecipients,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.UniqueRecipients,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.GlobalUniqueRecipients = new ComplexPropertyDefinition<StringList>(
            "GlobalUniqueRecipients",
            XmlElementNames.GlobalUniqueRecipients,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalUniqueRecipients,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.UniqueUnreadSenders = new ComplexPropertyDefinition<StringList>(
            "UniqueUnreadSenders",
            XmlElementNames.UniqueUnreadSenders,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.UniqueUnreadSenders,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.GlobalUniqueUnreadSenders = new ComplexPropertyDefinition<StringList>(
            "GlobalUniqueUnreadSenders",
            XmlElementNames.GlobalUniqueUnreadSenders,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalUniqueUnreadSenders,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.UniqueSenders = new ComplexPropertyDefinition<StringList>(
            "UniqueSenders",
            XmlElementNames.UniqueSenders,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.UniqueSenders,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.GlobalUniqueSenders = new ComplexPropertyDefinition<StringList>(
            "GlobalUniqueSenders",
            XmlElementNames.GlobalUniqueSenders,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalUniqueSenders,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.LastDeliveryTime = new DateTimePropertyDefinition(
            "LastDeliveryTime",
            XmlElementNames.LastDeliveryTime,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.LastDeliveryTime,
            PropertyDefinitionFlags.CanFind
        );

        this.GlobalLastDeliveryTime = new DateTimePropertyDefinition(
            "GlobalLastDeliveryTime",
            XmlElementNames.GlobalLastDeliveryTime,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalLastDeliveryTime,
            PropertyDefinitionFlags.CanFind
        );

        this.Categories = new ComplexPropertyDefinition<StringList>(
            "Categories",
            XmlElementNames.Categories,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.Categories,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.GlobalCategories = new ComplexPropertyDefinition<StringList>(
            "GlobalCategories",
            XmlElementNames.GlobalCategories,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalCategories,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.FlagStatus = new GenericPropertyDefinition<ConversationFlagStatus>(
            "FlagStatus",
            XmlElementNames.FlagStatus,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.FlagStatus,
            PropertyDefinitionFlags.CanFind
        );

        this.GlobalFlagStatus = new GenericPropertyDefinition<ConversationFlagStatus>(
            "GlobalFlagStatus",
            XmlElementNames.GlobalFlagStatus,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalFlagStatus,
            PropertyDefinitionFlags.CanFind
        );

        this.HasAttachments = new BoolPropertyDefinition(
            "HasAttachments",
            XmlElementNames.HasAttachments,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.HasAttachments,
            PropertyDefinitionFlags.CanFind
        );

        this.GlobalHasAttachments = new BoolPropertyDefinition(
            "GlobalHasAttachments",
            XmlElementNames.GlobalHasAttachments,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalHasAttachments,
            PropertyDefinitionFlags.CanFind
        );

        this.MessageCount = new IntPropertyDefinition(
            "MessageCount",
            XmlElementNames.MessageCount,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.MessageCount,
            PropertyDefinitionFlags.CanFind
        );

        this.GlobalMessageCount = new IntPropertyDefinition(
            "GlobalMessageCount",
            XmlElementNames.GlobalMessageCount,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalMessageCount,
            PropertyDefinitionFlags.CanFind
        );

        this.UnreadCount = new IntPropertyDefinition(
            "UnreadCount",
            XmlElementNames.UnreadCount,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.UnreadCount,
            PropertyDefinitionFlags.CanFind
        );

        this.GlobalUnreadCount = new IntPropertyDefinition(
            "GlobalUnreadCount",
            XmlElementNames.GlobalUnreadCount,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalUnreadCount,
            PropertyDefinitionFlags.CanFind
        );

        this.Size = new IntPropertyDefinition(
            "Size",
            XmlElementNames.Size,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.Size,
            PropertyDefinitionFlags.CanFind
        );

        this.GlobalSize = new IntPropertyDefinition(
            "GlobalSize",
            XmlElementNames.GlobalSize,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalSize,
            PropertyDefinitionFlags.CanFind
        );

        this.ItemClasses = new ComplexPropertyDefinition<StringList>(
            "ItemClasses",
            XmlElementNames.ItemClasses,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.ItemClasses,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList("ItemClass"); }
        );

        this.GlobalItemClasses = new ComplexPropertyDefinition<StringList>(
            "GlobalItemClasses",
            XmlElementNames.GlobalItemClasses,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalItemClasses,
            PropertyDefinitionFlags.CanFind,
            () => { return new StringList("ItemClass"); }
        );

        this.Importance = new GenericPropertyDefinition<Importance>(
            "Importance",
            XmlElementNames.Importance,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.Importance,
            PropertyDefinitionFlags.CanFind
        );

        this.GlobalImportance = new GenericPropertyDefinition<Importance>(
            "GlobalImportance",
            XmlElementNames.GlobalImportance,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalImportance,
            PropertyDefinitionFlags.CanFind
        );

        this.ItemIds = new ComplexPropertyDefinition<ItemIdCollection>(
            "ItemIds",
            XmlElementNames.ItemIds,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.ItemIds,
            PropertyDefinitionFlags.CanFind,
            () => { return new ItemIdCollection(); }
        );

        this.GlobalItemIds = new ComplexPropertyDefinition<ItemIdCollection>(
            "GlobalItemIds",
            XmlElementNames.GlobalItemIds,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.GlobalItemIds,
            PropertyDefinitionFlags.CanFind,
            () => { return new ItemIdCollection(); }
        );

        this.LastModifiedTime = new DateTimePropertyDefinition(
            "LastModifiedTime",
            XmlElementNames.LastModifiedTime,
            ExchangeVersion.Exchange2013,
            FieldUris.LastModifiedTime,
            PropertyDefinitionFlags.CanFind
        );

        this.InstanceKey = new ByteArrayPropertyDefinition(
            "InstanceKey",
            XmlElementNames.InstanceKey,
            ExchangeVersion.Exchange2013,
            FieldUris.InstanceKey,
            PropertyDefinitionFlags.CanFind
        );

        this.Preview = new StringPropertyDefinition(
            "Preview",
            XmlElementNames.Preview,
            ExchangeVersion.Exchange2013,
            FieldUris.Preview,
            PropertyDefinitionFlags.CanFind
        );

        this.IconIndex = new GenericPropertyDefinition<IconIndex>(
            "IconIndex",
            XmlElementNames.IconIndex,
            ExchangeVersion.Exchange2013,
            FieldUris.IconIndex,
            PropertyDefinitionFlags.CanFind
        );

        this.GlobalIconIndex = new GenericPropertyDefinition<IconIndex>(
            "GlobalIconIndex",
            XmlElementNames.GlobalIconIndex,
            ExchangeVersion.Exchange2013,
            FieldUris.GlobalIconIndex,
            PropertyDefinitionFlags.CanFind
        );

        this.DraftItemIds = new ComplexPropertyDefinition<ItemIdCollection>(
            "DraftItemIds",
            XmlElementNames.DraftItemIds,
            ExchangeVersion.Exchange2013,
            FieldUris.DraftItemIds,
            PropertyDefinitionFlags.CanFind,
            () => { return new ItemIdCollection(); }
        );

        this.HasIrm = new BoolPropertyDefinition(
            "HasIrm",
            XmlElementNames.HasIrm,
            ExchangeVersion.Exchange2013,
            FieldUris.HasIrm,
            PropertyDefinitionFlags.CanFind
        );

        this.GlobalHasIrm = new BoolPropertyDefinition(
            "GlobalHasIrm",
            XmlElementNames.GlobalHasIrm,
            ExchangeVersion.Exchange2013,
            FieldUris.GlobalHasIrm,
            PropertyDefinitionFlags.CanFind
        );
    }
}