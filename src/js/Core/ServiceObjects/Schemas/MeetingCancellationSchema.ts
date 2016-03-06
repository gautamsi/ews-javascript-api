import {Schemas} from "./Schemas";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {MeetingMessageSchema} from "./MeetingMessageSchema";
export class MeetingCancellationSchema extends MeetingMessageSchema {
    public Start: PropertyDefinition;
    public End: PropertyDefinition;
    public Location: PropertyDefinition;
    public AppointmentType: PropertyDefinition;
    public Recurrence: PropertyDefinition;
    public EnhancedLocation: PropertyDefinition;

    static Instance: MeetingCancellationSchema = new MeetingCancellationSchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(this.Start);
        super.RegisterProperty(this.End);
        super.RegisterProperty(this.Location);
        super.RegisterProperty(this.Recurrence);
        super.RegisterProperty(this.AppointmentType);
        super.RegisterProperty(this.EnhancedLocation);
    }

    protected init() {
        super.init();
        this.Start = Schemas.AppointmentSchema.Start;
        this.End = Schemas.AppointmentSchema.End;
        this.Location = Schemas.AppointmentSchema.Location;
        this.AppointmentType = Schemas.AppointmentSchema.AppointmentType;
        this.Recurrence = Schemas.AppointmentSchema.Recurrence;
        this.EnhancedLocation = Schemas.AppointmentSchema.EnhancedLocation;
    }
}