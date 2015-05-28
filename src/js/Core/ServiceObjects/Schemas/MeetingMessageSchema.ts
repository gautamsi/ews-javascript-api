import EmailMessageSchema = require("./EmailMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
class MeetingMessageSchema extends EmailMessageSchema {
    static AssociatedAppointmentId: PropertyDefinition;
    static IsDelegated: PropertyDefinition;
    static IsOutOfDate: PropertyDefinition;
    static HasBeenProcessed: PropertyDefinition;
    static ResponseType: PropertyDefinition;
    static ICalUid: PropertyDefinition;
    static ICalRecurrenceId: PropertyDefinition;
    static ICalDateTimeStamp: PropertyDefinition;
    static IsOrganizer: PropertyDefinition;
    static Instance: MeetingMessageSchema;
    RegisterProperties(): any { throw new Error("MeetingMessageSchema.ts - RegisterProperties : Not implemented."); }
}
module MeetingMessageSchema {
    export module FieldUris {
        export var /* static*/ AssociatedCalendarItemId: string = "meeting:AssociatedCalendarItemId";
        export var /* static*/ IsDelegated: string = "meeting:IsDelegated";
        export var /* static*/ IsOutOfDate: string = "meeting:IsOutOfDate";
        export var /* static*/ HasBeenProcessed: string = "meeting:HasBeenProcessed";
        export var /* static*/ ResponseType: string = "meeting:ResponseType";
        export var /* static*/ IsOrganizer: string = "cal:IsOrganizer";
    }
}

export = MeetingMessageSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

