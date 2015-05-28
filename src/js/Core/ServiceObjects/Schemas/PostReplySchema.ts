import ServiceObjectSchema = require("./ServiceObjectSchema");
class PostReplySchema extends ServiceObjectSchema {
    static Instance: PostReplySchema;
    RegisterProperties(): any { throw new Error("PostReplySchema.ts - RegisterProperties : Not implemented."); }
}

export = PostReplySchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
