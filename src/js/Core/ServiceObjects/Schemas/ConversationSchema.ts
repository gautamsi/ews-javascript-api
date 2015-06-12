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
import {ServiceObjectSchema} from "./ServiceObjectSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";



//module ConversationSchema {
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
//}
export class ConversationSchema extends ServiceObjectSchema {
    
    static Id: PropertyDefinition = new ComplexPropertyDefinition<ConversationId>(
        "ConversationId", 
        XmlElementNames.ConversationId, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.ConversationId, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new ConversationId(); }
        );
    
    static Topic: PropertyDefinition = new StringPropertyDefinition(
        "ConversationTopic", 
        XmlElementNames.ConversationTopic, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.ConversationTopic, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static UniqueRecipients: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "UniqueRecipients", 
        XmlElementNames.UniqueRecipients, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.UniqueRecipients, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static GlobalUniqueRecipients: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalUniqueRecipients", 
        XmlElementNames.GlobalUniqueRecipients, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.GlobalUniqueRecipients, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static UniqueUnreadSenders: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "UniqueUnreadSenders", 
        XmlElementNames.UniqueUnreadSenders, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.UniqueUnreadSenders,
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static GlobalUniqueUnreadSenders: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalUniqueUnreadSenders", 
        XmlElementNames.GlobalUniqueUnreadSenders, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.GlobalUniqueUnreadSenders, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static UniqueSenders: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "UniqueSenders", 
        XmlElementNames.UniqueSenders, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.UniqueSenders, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static GlobalUniqueSenders: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalUniqueSenders", 
        XmlElementNames.GlobalUniqueSenders, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.GlobalUniqueSenders, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static LastDeliveryTime: PropertyDefinition = new DateTimePropertyDefinition(
        "LastDeliveryTime", 
        XmlElementNames.LastDeliveryTime, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.LastDeliveryTime, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static GlobalLastDeliveryTime: PropertyDefinition = new DateTimePropertyDefinition(
        "GlobalLastDeliveryTime", 
        XmlElementNames.GlobalLastDeliveryTime, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.GlobalLastDeliveryTime, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static Categories: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Categories", 
        XmlElementNames.Categories, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.Categories, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static GlobalCategories: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalCategories", 
        XmlElementNames.GlobalCategories, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.GlobalCategories, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static FlagStatus: PropertyDefinition = new GenericPropertyDefinition<ConversationFlagStatus>(
        "FlagStatus", 
        XmlElementNames.FlagStatus, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.FlagStatus, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static GlobalFlagStatus: PropertyDefinition = new GenericPropertyDefinition<ConversationFlagStatus>(
        "GlobalFlagStatus", 
        XmlElementNames.GlobalFlagStatus, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.GlobalFlagStatus, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static HasAttachments: PropertyDefinition = new BoolPropertyDefinition(
        "HasAttachments", 
        XmlElementNames.HasAttachments, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.HasAttachments, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static GlobalHasAttachments: PropertyDefinition = new BoolPropertyDefinition(
        "GlobalHasAttachments", 
        XmlElementNames.GlobalHasAttachments, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.GlobalHasAttachments, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static MessageCount: PropertyDefinition = new IntPropertyDefinition(
        "MessageCount", 
        XmlElementNames.MessageCount, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.MessageCount, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static GlobalMessageCount: PropertyDefinition = new IntPropertyDefinition(
        "GlobalMessageCount", 
        XmlElementNames.GlobalMessageCount, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.GlobalMessageCount, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static UnreadCount: PropertyDefinition = new IntPropertyDefinition(
        "UnreadCount", 
        XmlElementNames.UnreadCount, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.UnreadCount, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static GlobalUnreadCount: PropertyDefinition = new IntPropertyDefinition(
        "GlobalUnreadCount", 
        XmlElementNames.GlobalUnreadCount, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.GlobalUnreadCount, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static Size: PropertyDefinition = new IntPropertyDefinition(
        "Size", 
        XmlElementNames.Size, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.Size, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static GlobalSize: PropertyDefinition = new IntPropertyDefinition(
        "GlobalSize", 
        XmlElementNames.GlobalSize, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.GlobalSize, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static ItemClasses: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "ItemClasses", 
        XmlElementNames.ItemClasses, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.ItemClasses, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList("ItemClass"); }
        );
    
    static GlobalItemClasses: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "GlobalItemClasses", 
        XmlElementNames.GlobalItemClasses, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.GlobalItemClasses, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new StringList("ItemClass"); }
        );
    
    static Importance: PropertyDefinition = new GenericPropertyDefinition<Importance>(
        "Importance", 
        XmlElementNames.Importance, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.Importance, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static GlobalImportance: PropertyDefinition = new GenericPropertyDefinition<Importance>(
        "GlobalImportance", 
        XmlElementNames.GlobalImportance, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.GlobalImportance, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static ItemIds: PropertyDefinition = new ComplexPropertyDefinition<ItemIdCollection>(
        "ItemIds", 
        XmlElementNames.ItemIds, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.ItemIds, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new ItemIdCollection(); }
        );
    
    static GlobalItemIds: PropertyDefinition = new ComplexPropertyDefinition<ItemIdCollection>(
        "GlobalItemIds", 
        XmlElementNames.GlobalItemIds, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.GlobalItemIds, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new ItemIdCollection(); }
        );
    
    static LastModifiedTime: PropertyDefinition = new DateTimePropertyDefinition(
        "LastModifiedTime", 
        XmlElementNames.LastModifiedTime, 
        ExchangeVersion.Exchange2013,
        FieldUris.LastModifiedTime, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static InstanceKey: PropertyDefinition = new ByteArrayPropertyDefinition(
        "InstanceKey", 
        XmlElementNames.InstanceKey, 
        ExchangeVersion.Exchange2013,
        FieldUris.InstanceKey, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static Preview: PropertyDefinition = new StringPropertyDefinition(
        "Preview", 
        XmlElementNames.Preview, 
        ExchangeVersion.Exchange2013,
        FieldUris.Preview, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static IconIndex: PropertyDefinition = new GenericPropertyDefinition<IconIndex>(
        "IconIndex", 
        XmlElementNames.IconIndex, 
        ExchangeVersion.Exchange2013,
        FieldUris.IconIndex, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static GlobalIconIndex: PropertyDefinition = new GenericPropertyDefinition<IconIndex>(
        "GlobalIconIndex", 
        XmlElementNames.GlobalIconIndex, 
        ExchangeVersion.Exchange2013,
        FieldUris.GlobalIconIndex, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static DraftItemIds: PropertyDefinition = new ComplexPropertyDefinition<ItemIdCollection>(
        "DraftItemIds", 
        XmlElementNames.DraftItemIds, 
        ExchangeVersion.Exchange2013, 
        FieldUris.DraftItemIds, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new ItemIdCollection(); }
        );
    
    static HasIrm: PropertyDefinition = new BoolPropertyDefinition(
        "HasIrm", 
        XmlElementNames.HasIrm, 
        ExchangeVersion.Exchange2013,
        FieldUris.HasIrm, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static GlobalHasIrm: PropertyDefinition = new BoolPropertyDefinition(
        "GlobalHasIrm", 
        XmlElementNames.GlobalHasIrm, 
        ExchangeVersion.Exchange2013,
        FieldUris.GlobalHasIrm, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static Instance: ConversationSchema = new ConversationSchema();
    
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(ConversationSchema.Id);
        super.RegisterProperty(ConversationSchema.Topic);
        super.RegisterProperty(ConversationSchema.UniqueRecipients);
        super.RegisterProperty(ConversationSchema.GlobalUniqueRecipients);
        super.RegisterProperty(ConversationSchema.UniqueUnreadSenders);
        super.RegisterProperty(ConversationSchema.GlobalUniqueUnreadSenders);
        super.RegisterProperty(ConversationSchema.UniqueSenders);
        super.RegisterProperty(ConversationSchema.GlobalUniqueSenders);
        super.RegisterProperty(ConversationSchema.LastDeliveryTime);
        super.RegisterProperty(ConversationSchema.GlobalLastDeliveryTime);
        super.RegisterProperty(ConversationSchema.Categories);
        super.RegisterProperty(ConversationSchema.GlobalCategories);
        super.RegisterProperty(ConversationSchema.FlagStatus);
        super.RegisterProperty(ConversationSchema.GlobalFlagStatus);
        super.RegisterProperty(ConversationSchema.HasAttachments);
        super.RegisterProperty(ConversationSchema.GlobalHasAttachments);
        super.RegisterProperty(ConversationSchema.MessageCount);
        super.RegisterProperty(ConversationSchema.GlobalMessageCount);
        super.RegisterProperty(ConversationSchema.UnreadCount);
        super.RegisterProperty(ConversationSchema.GlobalUnreadCount);
        super.RegisterProperty(ConversationSchema.Size);
        super.RegisterProperty(ConversationSchema.GlobalSize);
        super.RegisterProperty(ConversationSchema.ItemClasses);
        super.RegisterProperty(ConversationSchema.GlobalItemClasses);
        super.RegisterProperty(ConversationSchema.Importance);
        super.RegisterProperty(ConversationSchema.GlobalImportance);
        super.RegisterProperty(ConversationSchema.ItemIds);
        super.RegisterProperty(ConversationSchema.GlobalItemIds);
        super.RegisterProperty(ConversationSchema.LastModifiedTime);
        super.RegisterProperty(ConversationSchema.InstanceKey);
        super.RegisterProperty(ConversationSchema.Preview);
        super.RegisterProperty(ConversationSchema.IconIndex);
        super.RegisterProperty(ConversationSchema.GlobalIconIndex);
        super.RegisterProperty(ConversationSchema.DraftItemIds);
        super.RegisterProperty(ConversationSchema.HasIrm);
        super.RegisterProperty(ConversationSchema.GlobalHasIrm);
    }
}