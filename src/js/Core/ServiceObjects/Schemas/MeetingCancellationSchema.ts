import AppointmentSchema = require("./AppointmentSchema");
import MeetingMessageSchema = require("./MeetingMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
class MeetingCancellationSchema extends MeetingMessageSchema {
    static Start: PropertyDefinition = AppointmentSchema.Start;
        static End: PropertyDefinition = AppointmentSchema.End;
        static Location: PropertyDefinition = AppointmentSchema.Location;
        static AppointmentType: PropertyDefinition = AppointmentSchema.AppointmentType;
        static Recurrence: PropertyDefinition = AppointmentSchema.Recurrence;
        static EnhancedLocation: PropertyDefinition = AppointmentSchema.EnhancedLocation;
        static Instance: MeetingCancellationSchema = new MeetingCancellationSchema();
        RegisterProperties(): void {
            super.RegisterProperties();
            super.RegisterProperty(MeetingCancellationSchema.Start);
            super.RegisterProperty(MeetingCancellationSchema.End);
            super.RegisterProperty(MeetingCancellationSchema.Location);
            super.RegisterProperty(MeetingCancellationSchema.Recurrence);
            super.RegisterProperty(MeetingCancellationSchema.AppointmentType);
            super.RegisterProperty(MeetingCancellationSchema.EnhancedLocation);
        }
}


export = MeetingCancellationSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


