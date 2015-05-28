import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

//module PostItemSchema {
module FieldUris {
    export var PostedTime: string = "postitem:PostedTime";
}
//}

class PostItemSchema extends ItemSchema {
    static ConversationIndex: PropertyDefinition;
    static ConversationTopic: PropertyDefinition;
    static From: PropertyDefinition;
    static InternetMessageId: PropertyDefinition;
    static IsRead: PropertyDefinition;
    static PostedTime: PropertyDefinition;
    static References: PropertyDefinition;
    static Sender: PropertyDefinition;
    static Instance: PostItemSchema;
    RegisterProperties(): any { throw new Error("PostItemSchema.ts - RegisterProperties : Not implemented."); }
}


export = PostItemSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
