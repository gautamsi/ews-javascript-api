import ServiceObjectSchema = require("./ServiceObjectSchema");
class CalendarResponseObjectSchema extends ServiceObjectSchema {
    static Instance: CalendarResponseObjectSchema;
    RegisterProperties(): any { throw new Error("CalendarResponseObjectSchema.ts - RegisterProperties : Not implemented."); }
}

export = CalendarResponseObjectSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
