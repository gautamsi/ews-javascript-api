import ItemSchema = require("./ItemSchema");
import ResponseObjectSchema = require("./ResponseObjectSchema");
import ServiceObjectSchema = require("./ServiceObjectSchema");
class PostReplySchema extends ServiceObjectSchema {
    static Instance: PostReplySchema = new PostReplySchema();
        RegisterProperties(): void {
            super.RegisterProperties();
            super.RegisterProperty(ItemSchema.Subject);
            super.RegisterProperty(ItemSchema.Body);
            super.RegisterProperty(ResponseObjectSchema.ReferenceItemId);
            super.RegisterProperty(ResponseObjectSchema.BodyPrefix);
        }
}

export = PostReplySchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
