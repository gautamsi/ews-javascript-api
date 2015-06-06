import XmlElementNames = require("../../XmlElementNames");
import EmailMessageSchema = require("./EmailMessageSchema");
import DateTimePropertyDefinition = require("../../../PropertyDefinitions/DateTimePropertyDefinition");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

//module PostItemSchema {
module FieldUris {
    export var PostedTime: string = "postitem:PostedTime";
}
//}

class PostItemSchema extends ItemSchema {
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


export = PostItemSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
