import EmailMessageSchema = require("./EmailMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");


//module MeetingMessageSchema {
module FieldUris {
    export var AssociatedCalendarItemId: string = "meeting:AssociatedCalendarItemId";
    export var IsDelegated: string = "meeting:IsDelegated";
    export var IsOutOfDate: string = "meeting:IsOutOfDate";
    export var HasBeenProcessed: string = "meeting:HasBeenProcessed";
    export var ResponseType: string = "meeting:ResponseType";
    export var IsOrganizer: string = "cal:IsOrganizer";
}
//}

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

export = MeetingMessageSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

