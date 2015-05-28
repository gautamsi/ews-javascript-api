import ServiceObjectSchema = require("./ServiceObjectSchema");
class ResponseMessageSchema extends ServiceObjectSchema {
    static Instance: ResponseMessageSchema;
    RegisterProperties(): any { throw new Error("ResponseMessageSchema.ts - RegisterProperties : Not implemented."); }
}

export = ResponseMessageSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
