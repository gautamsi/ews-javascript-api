import { BoolPropertyDefinition } from "../../../PropertyDefinitions/BoolPropertyDefinition";
import { ComplexPropertyDefinition } from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { GenericPropertyDefinition } from "../../../PropertyDefinitions/GenericPropertyDefinition";
import { ItemId } from "../../../ComplexProperties/ItemId";
import { MeetingResponseType } from "../../../Enumerations/MeetingResponseType";
import { PropertyDefinition } from "../../../PropertyDefinitions/PropertyDefinition";
import { PropertyDefinitionFlags } from "../../../Enumerations/PropertyDefinitionFlags";
import { Schemas } from "./Schemas";
import { XmlElementNames } from "../../XmlElementNames";

import { EmailMessageSchema } from "./EmailMessageSchema";

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
    public static AssociatedAppointmentId: PropertyDefinition = new ComplexPropertyDefinition<ItemId>(
        "AssociatedCalendarItemId",
        XmlElementNames.AssociatedCalendarItemId,
        FieldUris.AssociatedCalendarItemId,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new ItemId(); }
    );

    /**
     * Defines the **IsDelegated** property.
     */
    public static IsDelegated: PropertyDefinition = new BoolPropertyDefinition(
        "IsDelegated",
        XmlElementNames.IsDelegated,
        FieldUris.IsDelegated,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsOutOfDate** property.
     */
    public static IsOutOfDate: PropertyDefinition = new BoolPropertyDefinition(
        "IsOutOfDate",
        XmlElementNames.IsOutOfDate,
        FieldUris.IsOutOfDate,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **HasBeenProcessed** property.
     */
    public static HasBeenProcessed: PropertyDefinition = new BoolPropertyDefinition(
        "HasBeenProcessed",
        XmlElementNames.HasBeenProcessed,
        FieldUris.HasBeenProcessed,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ResponseType** property.
     */
    public static ResponseType: PropertyDefinition = new GenericPropertyDefinition<MeetingResponseType>(
        "ResponseType",
        XmlElementNames.ResponseType,
        FieldUris.ResponseType,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        MeetingResponseType
    );

    /**
     * Defines the **ICalUid** property.
     */
    public static ICalUid: PropertyDefinition = Schemas.AppointmentSchema.ICalUid;

    /**
     * Defines the **ICalRecurrenceId** property.
     */
    public static ICalRecurrenceId: PropertyDefinition = Schemas.AppointmentSchema.ICalRecurrenceId;

    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    public static ICalDateTimeStamp: PropertyDefinition = Schemas.AppointmentSchema.ICalDateTimeStamp;

    /**
     * Defines the **IsOrganizer** property.
     */
    public static IsOrganizer: PropertyDefinition = new GenericPropertyDefinition<boolean>(
        "IsOrganizer",
        XmlElementNames.IsOrganizer,
        "cal:IsOrganizer",
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        false //isNullable
    );

    /**
     * @internal Instance of **MeetingMessageSchema** 
     */
    static Instance: MeetingMessageSchema = new MeetingMessageSchema();

    /**
     * Registers properties.
     * 
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.AssociatedAppointmentId);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.IsDelegated);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.IsOutOfDate);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.HasBeenProcessed);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.ResponseType);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.ICalUid);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.ICalRecurrenceId);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.ICalDateTimeStamp);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.IsOrganizer);
    }
}

/**
 * Represents the schema for meeting messages.
 */
export interface MeetingMessageSchema {
    /**
     * Defines the **AssociatedAppointmentId** property.
     */
    AssociatedAppointmentId: PropertyDefinition;
    /**
     * Defines the **IsDelegated** property.
     */
    IsDelegated: PropertyDefinition;
    /**
     * Defines the **IsOutOfDate** property.
     */
    IsOutOfDate: PropertyDefinition;
    /**
     * Defines the **HasBeenProcessed** property.
     */
    HasBeenProcessed: PropertyDefinition;
    /**
     * Defines the **ResponseType** property.
     */
    ResponseType: PropertyDefinition;
    /**
     * Defines the **ICalUid** property.
     */
    ICalUid: PropertyDefinition;
    /**
     * Defines the **ICalRecurrenceId** property.
     */
    ICalRecurrenceId: PropertyDefinition;
    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    ICalDateTimeStamp: PropertyDefinition;
    /**
     * Defines the **IsOrganizer** property.
     */
    IsOrganizer: PropertyDefinition;
    /**
     * @internal Instance of **MeetingMessageSchema**
     */
    Instance: MeetingMessageSchema;
}

/**
 * Represents the schema for meeting messages.
 */
export interface MeetingMessageSchemaStatic extends MeetingMessageSchema {
}