import MeetingMessageSchema = require("./MeetingMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
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
    RegisterProperties(): any { throw new Error("Not implemented."); }
}

module MeetingResponseSchema {
    export module FieldUris {
        export var /* static*/ ProposedStart: string = "meeting:ProposedStart";
        export var /* static*/ ProposedEnd: string = "meeting:ProposedEnd";
    }
}



export = MeetingResponseSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
