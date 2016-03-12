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
     * Defines the **ProposedStart** property.
     */
    public ProposedStart: PropertyDefinition;

    /**
     * Defines the **ProposedEnd** property.
     */
    public ProposedEnd: PropertyDefinition;

    /**
     * Defines the **EnhancedLocation** property.
     */
    public EnhancedLocation: PropertyDefinition;

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
        super.RegisterProperty(this.Start);
        super.RegisterProperty(this.End);
        super.RegisterProperty(this.Location);
        super.RegisterProperty(this.Recurrence);
        super.RegisterProperty(this.AppointmentType);
        super.RegisterProperty(this.ProposedStart);
        super.RegisterProperty(this.ProposedEnd);
        super.RegisterProperty(this.EnhancedLocation);
    }

    protected init() {
        super.init();
        this.Start = Schemas.AppointmentSchema.Start;
        this.End = Schemas.AppointmentSchema.End;
        this.Location = Schemas.AppointmentSchema.Location;
        this.AppointmentType = Schemas.AppointmentSchema.AppointmentType;
        this.Recurrence = Schemas.AppointmentSchema.Recurrence;
        this.ProposedStart = new ScopedDateTimePropertyDefinition(
            "ProposedStart",
            XmlElementNames.ProposedStart,
            FieldUris.ProposedStart,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            (version: ExchangeVersion) => { return Schemas.AppointmentSchema.StartTimeZone; }
        );

        this.ProposedEnd = new ScopedDateTimePropertyDefinition(
            "ProposedEnd",
            XmlElementNames.ProposedEnd,
            FieldUris.ProposedEnd,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            (version: ExchangeVersion) => { return Schemas.AppointmentSchema.EndTimeZone; }
        );

        this.EnhancedLocation = Schemas.AppointmentSchema.EnhancedLocation;
    }
}