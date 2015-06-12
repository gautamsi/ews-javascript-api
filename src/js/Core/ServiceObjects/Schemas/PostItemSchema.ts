import {XmlElementNames} from "../../XmlElementNames";
import {EmailMessageSchema} from "./EmailMessageSchema";
import {DateTimePropertyDefinition} from "../../../PropertyDefinitions/DateTimePropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ItemSchema} from "./ItemSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

//module PostItemSchema {
module FieldUris {
    export var PostedTime: string = "postitem:PostedTime";
}
//}
export class PostItemSchema extends ItemSchema {
    static ConversationIndex: PropertyDefinition = EmailMessageSchema.ConversationIndex;
    static ConversationTopic: PropertyDefinition = EmailMessageSchema.ConversationTopic;
    static From: PropertyDefinition = EmailMessageSchema.From;
    static InternetMessageId: PropertyDefinition = EmailMessageSchema.InternetMessageId;
    static IsRead: PropertyDefinition = EmailMessageSchema.IsRead;
    static PostedTime: PropertyDefinition = new DateTimePropertyDefinition(
        "PostedTime",
        XmlElementNames.PostedTime,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.PostedTime,
        PropertyDefinitionFlags.CanFind
        );

    static References: PropertyDefinition = EmailMessageSchema.References;
    static Sender: PropertyDefinition = EmailMessageSchema.Sender;
    static Instance: PostItemSchema = new PostItemSchema();
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(PostItemSchema.ConversationIndex);
        super.RegisterProperty(PostItemSchema.ConversationTopic);
        super.RegisterProperty(PostItemSchema.From);
        super.RegisterProperty(PostItemSchema.InternetMessageId);
        super.RegisterProperty(PostItemSchema.IsRead);
        super.RegisterProperty(PostItemSchema.PostedTime);
        super.RegisterProperty(PostItemSchema.References);
        super.RegisterProperty(PostItemSchema.Sender);
    }
}