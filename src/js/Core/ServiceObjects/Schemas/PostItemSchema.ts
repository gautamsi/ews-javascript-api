import {XmlElementNames} from "../../XmlElementNames";
import {Schemas} from "./Schemas";
import {DateTimePropertyDefinition} from "../../../PropertyDefinitions/DateTimePropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {ItemSchema} from "./ItemSchema";

/**
 * Field URIs for PostItem.
 */
module FieldUris {
    export var PostedTime: string = "postitem:PostedTime";
}

/**
 * Represents the schema for post items.
 */
export class PostItemSchema extends ItemSchema {

    /**
     * Defines the **ConversationIndex** property.
     */
    public static ConversationIndex: PropertyDefinition = Schemas.EmailMessageSchema.ConversationIndex;

    /**
     * Defines the **ConversationTopic** property.
     */
    public static ConversationTopic: PropertyDefinition = Schemas.EmailMessageSchema.ConversationTopic;

    /**
     * Defines the **From** property.
     */
    public static From: PropertyDefinition = Schemas.EmailMessageSchema.From;

    /**
     * Defines the **InternetMessageId** property.
     */
    public static InternetMessageId: PropertyDefinition = Schemas.EmailMessageSchema.InternetMessageId;

    /**
     * Defines the **IsRead** property.
     */
    public static IsRead: PropertyDefinition = Schemas.EmailMessageSchema.IsRead;

    /**
     * Defines the **PostedTime** property.
     */
    public static PostedTime: PropertyDefinition = new DateTimePropertyDefinition(
        "PostedTime",
        XmlElementNames.PostedTime,
        FieldUris.PostedTime,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **References** property.
     */
    public static References: PropertyDefinition = Schemas.EmailMessageSchema.References;

    /**
     * Defines the **Sender** property.
     */
    public static Sender: PropertyDefinition = Schemas.EmailMessageSchema.Sender;

    /**
     * @internal Instance of **PostItemSchema** 
     */
    static Instance: PostItemSchema = new PostItemSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(PostItemSchema, PostItemSchema.ConversationIndex);
        this.RegisterProperty(PostItemSchema, PostItemSchema.ConversationTopic);
        this.RegisterProperty(PostItemSchema, PostItemSchema.From);
        this.RegisterProperty(PostItemSchema, PostItemSchema.InternetMessageId);
        this.RegisterProperty(PostItemSchema, PostItemSchema.IsRead);
        this.RegisterProperty(PostItemSchema, PostItemSchema.PostedTime);
        this.RegisterProperty(PostItemSchema, PostItemSchema.References);
        this.RegisterProperty(PostItemSchema, PostItemSchema.Sender);
    }
}

/**
 * Represents the schema for post items.
 */
export interface PostItemSchema {
    /**
     * Defines the **ConversationIndex** property.
     */
    ConversationIndex: PropertyDefinition;
    /**
     * Defines the **ConversationTopic** property.
     */
    ConversationTopic: PropertyDefinition;
    /**
     * Defines the **From** property.
     */
    From: PropertyDefinition;
    /**
     * Defines the **InternetMessageId** property.
     */
    InternetMessageId: PropertyDefinition;
    /**
     * Defines the **IsRead** property.
     */
    IsRead: PropertyDefinition;
    /**
     * Defines the **PostedTime** property.
     */
    PostedTime: PropertyDefinition;
    /**
     * Defines the **References** property.
     */
    References: PropertyDefinition;
    /**
     * Defines the **Sender** property.
     */
    Sender: PropertyDefinition;
    /**
     * @internal Instance of **PostItemSchema**
     */
    Instance: PostItemSchema;
}

/**
 * Represents the schema for post items.
 */
export interface PostItemSchemaStatic extends PostItemSchema {
}