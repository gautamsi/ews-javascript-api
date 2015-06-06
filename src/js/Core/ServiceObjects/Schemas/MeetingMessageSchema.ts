import XmlElementNames = require("../../XmlElementNames");
import MeetingResponseType = require("../../../Enumerations/MeetingResponseType");
import ComplexPropertyDefinition = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import ItemId = require("../../../ComplexProperties/ItemId");
import BoolPropertyDefinition = require("../../../PropertyDefinitions/BoolPropertyDefinition");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import GenericPropertyDefinition = require("../../../PropertyDefinitions/GenericPropertyDefinition");
import AppointmentSchema = require("./AppointmentSchema");
import EmailMessageSchema = require("./EmailMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");


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

class MeetingMessageSchema extends EmailMessageSchema {
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

    static ICalUid: PropertyDefinition = AppointmentSchema.ICalUid;

    static ICalRecurrenceId: PropertyDefinition = AppointmentSchema.ICalRecurrenceId;

    static ICalDateTimeStamp: PropertyDefinition = AppointmentSchema.ICalDateTimeStamp;

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

export = MeetingMessageSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

