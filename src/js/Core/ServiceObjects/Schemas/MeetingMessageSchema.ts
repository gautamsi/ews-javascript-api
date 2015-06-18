import {XmlElementNames} from "../../XmlElementNames";
import {MeetingResponseType} from "../../../Enumerations/MeetingResponseType";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {BoolPropertyDefinition} from "../../../PropertyDefinitions/BoolPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {AppointmentSchema} from "./AppointmentSchema";
import {EmailMessageSchema} from "./EmailMessageSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";


//module MeetingMessageSchema {
module FieldUris {
    export var AssociatedCalendarItemId: string = "meeting:AssociatedCalendarItemId";
    export var IsDelegated: string = "meeting:IsDelegated";
    export var IsOutOfDate: string = "meeting:IsOutOfDate";
    export var HasBeenProcessed: string = "meeting:HasBeenProcessed";
    export var ResponseType: string = "meeting:ResponseType";
    export var IsOrganizer: string = "cal:IsOrganizer";
}
//}
export class MeetingMessageSchema extends EmailMessageSchema {
    static AssociatedAppointmentId: PropertyDefinition = new ComplexPropertyDefinition<ItemId>(
        "AssociatedCalendarItemId",
        XmlElementNames.AssociatedCalendarItemId,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AssociatedCalendarItemId,
        PropertyDefinitionFlags.None,
        () => { return new ItemId(); }
        );

    static IsDelegated: PropertyDefinition = new BoolPropertyDefinition(
        "IsDelegated",
        XmlElementNames.IsDelegated,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsDelegated,
        PropertyDefinitionFlags.CanFind
        );

    static IsOutOfDate: PropertyDefinition = new BoolPropertyDefinition(
        "IsOutOfDate",
        XmlElementNames.IsOutOfDate,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsOutOfDate
        );

    static HasBeenProcessed: PropertyDefinition = new BoolPropertyDefinition(
        "HasBeenProcessed",
        XmlElementNames.HasBeenProcessed,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.HasBeenProcessed,
        PropertyDefinitionFlags.CanFind
        );

    static ResponseType: PropertyDefinition = new GenericPropertyDefinition<MeetingResponseType>(
        "ResponseType",
        XmlElementNames.ResponseType,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ResponseType,
        PropertyDefinitionFlags.CanFind
        );

    static ICalUid: PropertyDefinition = AppointmentSchema.Instance.ICalUid;

    static ICalRecurrenceId: PropertyDefinition = AppointmentSchema.Instance.ICalRecurrenceId;

    static ICalDateTimeStamp: PropertyDefinition = AppointmentSchema.Instance.ICalDateTimeStamp;

    static IsOrganizer: PropertyDefinition = new GenericPropertyDefinition<boolean>(
        "IsOrganizer",
        XmlElementNames.IsOrganizer,
        ExchangeVersion.Exchange2013,
        "cal:IsOrganizer",
        PropertyDefinitionFlags.CanFind
        );

    static Instance: MeetingMessageSchema = new MeetingMessageSchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(MeetingMessageSchema.AssociatedAppointmentId);
        super.RegisterProperty(MeetingMessageSchema.IsDelegated);
        super.RegisterProperty(MeetingMessageSchema.IsOutOfDate);
        super.RegisterProperty(MeetingMessageSchema.HasBeenProcessed);
        super.RegisterProperty(MeetingMessageSchema.ResponseType);
        super.RegisterProperty(MeetingMessageSchema.ICalUid);
        super.RegisterProperty(MeetingMessageSchema.ICalRecurrenceId);
        super.RegisterProperty(MeetingMessageSchema.ICalDateTimeStamp);
        super.RegisterProperty(MeetingMessageSchema.IsOrganizer);
    }
}