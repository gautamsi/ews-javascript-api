import MeetingMessageSchema = require("./MeetingMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
class MeetingCancellationSchema extends MeetingMessageSchema {
    static Start: PropertyDefinition;
    static End: PropertyDefinition;
    static Location: PropertyDefinition;
    static AppointmentType: PropertyDefinition;
    static Recurrence: PropertyDefinition;
    static EnhancedLocation: PropertyDefinition;
    static Instance: MeetingCancellationSchema;
    RegisterProperties(): any { throw new Error("Not implemented."); }
}


export = MeetingCancellationSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


