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
    public ConversationIndex: PropertyDefinition;
    
    /**
     * Defines the **ConversationTopic** property.
     */
    public ConversationTopic: PropertyDefinition;
    
    /**
     * Defines the **From** property.
     */
    public From: PropertyDefinition;
    
    /**
     * Defines the **InternetMessageId** property.
     */
    public InternetMessageId: PropertyDefinition;
    
    /**
     * Defines the **IsRead** property.
     */
    public IsRead: PropertyDefinition;
    
    /**
     * Defines the **PostedTime** property.
     */
    public PostedTime: PropertyDefinition;
    
    /**
     * Defines the **References** property.
     */
    public References: PropertyDefinition;
    
    /**
     * Defines the **Sender** property.
     */
    public Sender: PropertyDefinition;

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
        super.RegisterProperty(this.ConversationIndex);
        super.RegisterProperty(this.ConversationTopic);
        super.RegisterProperty(this.From);
        super.RegisterProperty(this.InternetMessageId);
        super.RegisterProperty(this.IsRead);
        super.RegisterProperty(this.PostedTime);
        super.RegisterProperty(this.References);
        super.RegisterProperty(this.Sender);
    }

    protected init() {
        super.init();
        this.ConversationIndex = Schemas.EmailMessageSchema.ConversationIndex;
        this.ConversationTopic = Schemas.EmailMessageSchema.ConversationTopic;
        this.From = Schemas.EmailMessageSchema.From;
        this.InternetMessageId = Schemas.EmailMessageSchema.InternetMessageId;
        this.IsRead = Schemas.EmailMessageSchema.IsRead;
        this.PostedTime = new DateTimePropertyDefinition(
            "PostedTime",
            XmlElementNames.PostedTime,
            FieldUris.PostedTime,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.References = Schemas.EmailMessageSchema.References;
        this.Sender = Schemas.EmailMessageSchema.Sender;
    }
}