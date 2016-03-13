import {XmlElementNames} from "../../XmlElementNames";
import {Schemas} from "./Schemas";
import {ScopedDateTimePropertyDefinition} from "../../../PropertyDefinitions/ScopedDateTimePropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {MeetingMessageSchema} from "./MeetingMessageSchema";

/**
 * Field URIs for meeting response.
 */
module FieldUris {
    export var ProposedStart: string = "meeting:ProposedStart";
    export var ProposedEnd: string = "meeting:ProposedEnd";
}

/**
 * Represents the schema for meeting response
 */
export class MeetingResponseSchema extends MeetingMessageSchema {

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
     * Defines the **ProposedStart** property.
     */
    public static ProposedStart: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "ProposedStart",
        XmlElementNames.ProposedStart,
        FieldUris.ProposedStart,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        (version: ExchangeVersion) => { return Schemas.AppointmentSchema.StartTimeZone; }
    );

    /**
     * Defines the **ProposedEnd** property.
     */
    public static ProposedEnd: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "ProposedEnd",
        XmlElementNames.ProposedEnd,
        FieldUris.ProposedEnd,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        (version: ExchangeVersion) => { return Schemas.AppointmentSchema.EndTimeZone; }
    );

    /**
     * Defines the **EnhancedLocation** property.
     */
    public static EnhancedLocation: PropertyDefinition = Schemas.AppointmentSchema.EnhancedLocation;

    /**
     * @internal Instance of **MeetingResponseSchema** 
     */
    static Instance: MeetingResponseSchema = new MeetingResponseSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.Start);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.End);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.Location);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.Recurrence);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.AppointmentType);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.ProposedStart);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.ProposedEnd);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.EnhancedLocation);
    }
}

/**
 * Represents the schema for meeting response
 */
export interface MeetingResponseSchema {
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
     * Defines the **ProposedStart** property.
     */
    ProposedStart: PropertyDefinition;
    /**
     * Defines the **ProposedEnd** property.
     */
    ProposedEnd: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    EnhancedLocation: PropertyDefinition;
    /**
     * @internal Instance of **MeetingResponseSchema**
     */
    Instance: MeetingResponseSchema;
}

/**
 * Represents the schema for meeting response
 */
export interface MeetingResponseSchemaStatic extends MeetingResponseSchema {
}