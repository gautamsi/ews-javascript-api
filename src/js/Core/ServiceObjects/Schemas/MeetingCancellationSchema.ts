import {AppointmentSchema} from "./AppointmentSchema";
import {MeetingMessageSchema} from "./MeetingMessageSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
export class MeetingCancellationSchema extends MeetingMessageSchema {
    static Start: PropertyDefinition = AppointmentSchema.Instance.Start;
    static End: PropertyDefinition = AppointmentSchema.Instance.End;
    static Location: PropertyDefinition = AppointmentSchema.Instance.Location;
    static AppointmentType: PropertyDefinition = AppointmentSchema.Instance.AppointmentType;
    static Recurrence: PropertyDefinition = AppointmentSchema.Instance.Recurrence;
    static EnhancedLocation: PropertyDefinition = AppointmentSchema.Instance.EnhancedLocation;
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

