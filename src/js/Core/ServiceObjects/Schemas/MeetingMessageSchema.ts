import {XmlElementNames} from "../../XmlElementNames";
import {MeetingResponseType} from "../../../Enumerations/MeetingResponseType";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {BoolPropertyDefinition} from "../../../PropertyDefinitions/BoolPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {Schemas} from "./Schemas";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {EmailMessageSchema} from "./EmailMessageSchema";

/**
 * Field URIs for MeetingMessage.
 */
module FieldUris {
    export var AssociatedCalendarItemId: string = "meeting:AssociatedCalendarItemId";
    export var IsDelegated: string = "meeting:IsDelegated";
    export var IsOutOfDate: string = "meeting:IsOutOfDate";
    export var HasBeenProcessed: string = "meeting:HasBeenProcessed";
    export var ResponseType: string = "meeting:ResponseType";
    export var IsOrganizer: string = "cal:IsOrganizer";
}

/**
 * Represents the schema for meeting messages.
 */
export class MeetingMessageSchema extends EmailMessageSchema {

    /**
     * Defines the **AssociatedAppointmentId** property.
     */
    public AssociatedAppointmentId: PropertyDefinition;

    /**
     * Defines the **IsDelegated** property.
     */
    public IsDelegated: PropertyDefinition;

    /**
     * Defines the **IsOutOfDate** property.
     */
    public IsOutOfDate: PropertyDefinition;

    /**
     * Defines the **HasBeenProcessed** property.
     */
    public HasBeenProcessed: PropertyDefinition;

    /**
     * Defines the **ResponseType** property.
     */
    public ResponseType: PropertyDefinition;

    /**
     * Defines the **ICalUid** property.
     */
    public ICalUid: PropertyDefinition;

    /**
     * Defines the **ICalRecurrenceId** property.
     */
    public ICalRecurrenceId: PropertyDefinition;

    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    public ICalDateTimeStamp: PropertyDefinition;

    /**
     * Defines the **IsOrganizer** property.
     */
    public IsOrganizer: PropertyDefinition;

    /**
     * @internal Instance of **MeetingMessageSchema** 
     */
    static Instance: MeetingMessageSchema = new MeetingMessageSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(this.AssociatedAppointmentId);
        super.RegisterProperty(this.IsDelegated);
        super.RegisterProperty(this.IsOutOfDate);
        super.RegisterProperty(this.HasBeenProcessed);
        super.RegisterProperty(this.ResponseType);
        super.RegisterProperty(this.ICalUid);
        super.RegisterProperty(this.ICalRecurrenceId);
        super.RegisterProperty(this.ICalDateTimeStamp);
        super.RegisterProperty(this.IsOrganizer);
    }

    protected init() {
        super.init();
        this.AssociatedAppointmentId = new ComplexPropertyDefinition<ItemId>(
            "AssociatedCalendarItemId",
            XmlElementNames.AssociatedCalendarItemId,
            FieldUris.AssociatedCalendarItemId,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new ItemId(); }
        );

        this.IsDelegated = new BoolPropertyDefinition(
            "IsDelegated",
            XmlElementNames.IsDelegated,
            FieldUris.IsDelegated,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsOutOfDate = new BoolPropertyDefinition(
            "IsOutOfDate",
            XmlElementNames.IsOutOfDate,
            FieldUris.IsOutOfDate,
            ExchangeVersion.Exchange2007_SP1
        );

        this.HasBeenProcessed = new BoolPropertyDefinition(
            "HasBeenProcessed",
            XmlElementNames.HasBeenProcessed,
            FieldUris.HasBeenProcessed,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ResponseType = new GenericPropertyDefinition<MeetingResponseType>(
            "ResponseType",
            XmlElementNames.ResponseType,
            FieldUris.ResponseType,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ICalUid = Schemas.AppointmentSchema.ICalUid;

        this.ICalRecurrenceId = Schemas.AppointmentSchema.ICalRecurrenceId;

        this.ICalDateTimeStamp = Schemas.AppointmentSchema.ICalDateTimeStamp;

        this.IsOrganizer = new GenericPropertyDefinition<boolean>(
            "IsOrganizer",
            XmlElementNames.IsOrganizer,
            "cal:IsOrganizer",
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );
    }
}