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

module FieldUris {
    export var AssociatedCalendarItemId: string = "meeting:AssociatedCalendarItemId";
    export var IsDelegated: string = "meeting:IsDelegated";
    export var IsOutOfDate: string = "meeting:IsOutOfDate";
    export var HasBeenProcessed: string = "meeting:HasBeenProcessed";
    export var ResponseType: string = "meeting:ResponseType";
    export var IsOrganizer: string = "cal:IsOrganizer";
}

export class MeetingMessageSchema extends EmailMessageSchema {
    public AssociatedAppointmentId: PropertyDefinition;
    public IsDelegated: PropertyDefinition;
    public IsOutOfDate: PropertyDefinition;
    public HasBeenProcessed: PropertyDefinition;
    public ResponseType: PropertyDefinition;
    public ICalUid: PropertyDefinition;
    public ICalRecurrenceId: PropertyDefinition;
    public ICalDateTimeStamp: PropertyDefinition;
    public IsOrganizer: PropertyDefinition;

    static Instance: MeetingMessageSchema = new MeetingMessageSchema();

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
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.AssociatedCalendarItemId,
            PropertyDefinitionFlags.None,
            () => { return new ItemId(); }
        );

        this.IsDelegated = new BoolPropertyDefinition(
            "IsDelegated",
            XmlElementNames.IsDelegated,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsDelegated,
            PropertyDefinitionFlags.CanFind
        );

        this.IsOutOfDate = new BoolPropertyDefinition(
            "IsOutOfDate",
            XmlElementNames.IsOutOfDate,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsOutOfDate
        );

        this.HasBeenProcessed = new BoolPropertyDefinition(
            "HasBeenProcessed",
            XmlElementNames.HasBeenProcessed,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.HasBeenProcessed,
            PropertyDefinitionFlags.CanFind
        );

        this.ResponseType = new GenericPropertyDefinition<MeetingResponseType>(
            "ResponseType",
            XmlElementNames.ResponseType,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ResponseType,
            PropertyDefinitionFlags.CanFind
        );

        this.ICalUid = Schemas.AppointmentSchema.ICalUid;

        this.ICalRecurrenceId = Schemas.AppointmentSchema.ICalRecurrenceId;

        this.ICalDateTimeStamp = Schemas.AppointmentSchema.ICalDateTimeStamp;

        this.IsOrganizer = new GenericPropertyDefinition<boolean>(
            "IsOrganizer",
            XmlElementNames.IsOrganizer,
            ExchangeVersion.Exchange2013,
            "cal:IsOrganizer",
            PropertyDefinitionFlags.CanFind
        );
    }
}