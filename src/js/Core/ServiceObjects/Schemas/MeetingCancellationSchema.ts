import {Schemas} from "./Schemas";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {MeetingMessageSchema} from "./MeetingMessageSchema";
/**
 * Represents the schema for meeting cancellation.
 */
export class MeetingCancellationSchema extends MeetingMessageSchema {
    
    /**
     * Defines the **Start** property.
     */
    public Start: PropertyDefinition;
    
    /**
     * Defines the **End** property.
     */
    public End: PropertyDefinition;
    
    /**
     * Defines the **Location** property.
     */
    public Location: PropertyDefinition;
    
    /**
     * Defines the **AppointmentType** property.
     */
    public AppointmentType: PropertyDefinition;
    
    /**
     * Defines the **Recurrence** property.
     */
    public Recurrence: PropertyDefinition;
    
    /**
     * Defines the **EnhancedLocation** property.
     */
    public EnhancedLocation: PropertyDefinition;

    /**
     * @internal Instance of **MeetingCancellationSchema** 
     */
    static Instance: MeetingCancellationSchema = new MeetingCancellationSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
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