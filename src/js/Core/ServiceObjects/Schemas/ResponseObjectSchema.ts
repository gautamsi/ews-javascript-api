import ServiceObjectSchema = require("./ServiceObjectSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
class ResponseObjectSchema extends ServiceObjectSchema {
    static ReferenceItemId: PropertyDefinition;
    static BodyPrefix: PropertyDefinition;
    static Instance: ResponseObjectSchema;
    RegisterProperties(): any { throw new Error("ResponseObjectSchema.ts - RegisterProperties : Not implemented."); }
}

export = ResponseObjectSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
