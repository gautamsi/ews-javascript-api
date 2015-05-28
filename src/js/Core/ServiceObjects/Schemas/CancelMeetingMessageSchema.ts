import ServiceObjectSchema = require("./ServiceObjectSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
class CancelMeetingMessageSchema extends ServiceObjectSchema {
    static Body: PropertyDefinition;
    static Instance: CancelMeetingMessageSchema;
    RegisterProperties(): any { throw new Error("CancelMeetingMessageSchema.ts - RegisterProperties : Not implemented."); }
}
export = CancelMeetingMessageSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
