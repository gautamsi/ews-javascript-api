import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
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

module PostItemSchema {
    export module FieldUris {
        export var /* static*/ PostedTime: string = "postitem:PostedTime";
    }
}

export = PostItemSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
