import {XmlElementNames} from "../../XmlElementNames";
import {Schemas} from "./Schemas";
import {DateTimePropertyDefinition} from "../../../PropertyDefinitions/DateTimePropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {ItemSchema} from "./ItemSchema";

module FieldUris {
    export var PostedTime: string = "postitem:PostedTime";
}

export class PostItemSchema extends ItemSchema {
    public ConversationIndex: PropertyDefinition;
    public ConversationTopic: PropertyDefinition;
    public From: PropertyDefinition;
    public InternetMessageId: PropertyDefinition;
    public IsRead: PropertyDefinition;
    public PostedTime: PropertyDefinition;
    public References: PropertyDefinition;
    public Sender: PropertyDefinition;

    static Instance: PostItemSchema = new PostItemSchema();

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
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.PostedTime,
            PropertyDefinitionFlags.CanFind
        );

        this.References = Schemas.EmailMessageSchema.References;
        this.Sender = Schemas.EmailMessageSchema.Sender;
    }
}