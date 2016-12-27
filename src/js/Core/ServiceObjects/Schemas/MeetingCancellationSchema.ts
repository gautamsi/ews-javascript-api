import { PropertyDefinition } from "../../../PropertyDefinitions/PropertyDefinition";
import { Schemas } from "./Schemas";

import { MeetingMessageSchema } from "./MeetingMessageSchema";
/**
 * Represents the schema for meeting cancellation.
 */
export class MeetingCancellationSchema extends MeetingMessageSchema {

    /**
     * Defines the **Start** property.
     */
    public static Start: PropertyDefinition = Schemas.AppointmentSchema.Start;

    /**
     * Defines the **End** property.
     */
    public static End: PropertyDefinition = Schemas.AppointmentSchema.End;

    /**
     * Defines the **Location** property.
     */
    public static Location: PropertyDefinition = Schemas.AppointmentSchema.Location;

    /**
     * Defines the **AppointmentType** property.
     */
    public static AppointmentType: PropertyDefinition = Schemas.AppointmentSchema.AppointmentType;

    /**
     * Defines the **Recurrence** property.
     */
    public static Recurrence: PropertyDefinition = Schemas.AppointmentSchema.Recurrence;

    /**
     * Defines the **EnhancedLocation** property.
     */
    public static EnhancedLocation: PropertyDefinition = Schemas.AppointmentSchema.EnhancedLocation;

    /**
     * @internal Instance of **MeetingCancellationSchema** 
     */
    static Instance: MeetingCancellationSchema = new MeetingCancellationSchema();

    /**
     * Registers properties.
     * 
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.Start);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.End);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.Location);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.Recurrence);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.AppointmentType);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.EnhancedLocation);
    }
}

/**
 * Represents the schema for meeting cancellation.
 */
export interface MeetingCancellationSchema {
    /**
     * Defines the **Start** property.
     */
    Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    End: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    Location: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    AppointmentType: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    Recurrence: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    EnhancedLocation: PropertyDefinition;
    /**
     * @internal Instance of **MeetingCancellationSchema**
     */
    Instance: MeetingCancellationSchema;
}

/**
 * Represents the schema for meeting cancellation.
 */
export interface MeetingCancellationSchemaStatic extends MeetingCancellationSchema {
}