import {XmlElementNames} from "../../XmlElementNames";
import {Schemas} from "./Schemas";
import {ScopedDateTimePropertyDefinition} from "../../../PropertyDefinitions/ScopedDateTimePropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {MeetingMessageSchema} from "./MeetingMessageSchema";

module FieldUris {
    export var ProposedStart: string = "meeting:ProposedStart";
    export var ProposedEnd: string = "meeting:ProposedEnd";
}

export class MeetingResponseSchema extends MeetingMessageSchema {
    public Start: PropertyDefinition;
    public End: PropertyDefinition;
    public Location: PropertyDefinition;
    public AppointmentType: PropertyDefinition;
    public Recurrence: PropertyDefinition;
    public ProposedStart: PropertyDefinition;
    public ProposedEnd: PropertyDefinition;
    public EnhancedLocation: PropertyDefinition;

    static Instance: MeetingResponseSchema = new MeetingResponseSchema();

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
            ExchangeVersion.Exchange2013,
            FieldUris.ProposedStart,
            PropertyDefinitionFlags.CanFind,
            (version: ExchangeVersion) => { return Schemas.AppointmentSchema.StartTimeZone; }
        );

        this.ProposedEnd = new ScopedDateTimePropertyDefinition(
            "ProposedEnd",
            XmlElementNames.ProposedEnd,
            ExchangeVersion.Exchange2013,
            FieldUris.ProposedEnd,
            PropertyDefinitionFlags.CanFind,
            (version: ExchangeVersion) => { return Schemas.AppointmentSchema.EndTimeZone; }
        );

        this.EnhancedLocation = Schemas.AppointmentSchema.EnhancedLocation;
    }
}