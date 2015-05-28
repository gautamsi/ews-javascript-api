import MeetingMessageSchema = require("./MeetingMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");


//module MeetingResponseSchema {
module FieldUris {
    export var ProposedStart: string = "meeting:ProposedStart";
    export var ProposedEnd: string = "meeting:ProposedEnd";
}
//}


class MeetingResponseSchema extends MeetingMessageSchema {
    static Start: PropertyDefinition;
    static End: PropertyDefinition;
    static Location: PropertyDefinition;
    static AppointmentType: PropertyDefinition;
    static Recurrence: PropertyDefinition;
    static ProposedStart: PropertyDefinition;
    static ProposedEnd: PropertyDefinition;
    static EnhancedLocation: PropertyDefinition;
    static Instance: MeetingResponseSchema;
    RegisterProperties(): any { throw new Error("MeetingResponseSchema.ts - RegisterProperties : Not implemented."); }
}


export = MeetingResponseSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
