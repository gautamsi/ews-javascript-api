import XmlElementNames = require("../../XmlElementNames");
import AppointmentSchema = require("./AppointmentSchema");
import ScopedDateTimePropertyDefinition = require("../../../PropertyDefinitions/ScopedDateTimePropertyDefinition");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import MeetingMessageSchema = require("./MeetingMessageSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");


//module MeetingResponseSchema {
module FieldUris {
    export var ProposedStart: string = "meeting:ProposedStart";
    export var ProposedEnd: string = "meeting:ProposedEnd";
}
//}


class MeetingResponseSchema extends MeetingMessageSchema {
    static Start: PropertyDefinition = AppointmentSchema.Start;
    static End: PropertyDefinition = AppointmentSchema.End;
    static Location: PropertyDefinition = AppointmentSchema.Location;
    static AppointmentType: PropertyDefinition = AppointmentSchema.AppointmentType;
    static Recurrence: PropertyDefinition = AppointmentSchema.Recurrence;
    static ProposedStart: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "ProposedStart",
        XmlElementNames.ProposedStart,
        ExchangeVersion.Exchange2013,
        FieldUris.ProposedStart,
        PropertyDefinitionFlags.CanFind,
        (version: ExchangeVersion) => { return AppointmentSchema.StartTimeZone; }
        );

    static ProposedEnd: PropertyDefinition = new ScopedDateTimePropertyDefinition(
        "ProposedEnd",
        XmlElementNames.ProposedEnd,
        ExchangeVersion.Exchange2013,
        FieldUris.ProposedEnd,
        PropertyDefinitionFlags.CanFind,
        (version: ExchangeVersion) => { return AppointmentSchema.EndTimeZone; }
        );

    static EnhancedLocation: PropertyDefinition = AppointmentSchema.EnhancedLocation;
    static Instance: MeetingResponseSchema = new MeetingResponseSchema();
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(MeetingResponseSchema.Start);
        super.RegisterProperty(MeetingResponseSchema.End);
        super.RegisterProperty(MeetingResponseSchema.Location);
        super.RegisterProperty(MeetingResponseSchema.Recurrence);
        super.RegisterProperty(MeetingResponseSchema.AppointmentType);
        super.RegisterProperty(MeetingResponseSchema.ProposedStart);
        super.RegisterProperty(MeetingResponseSchema.ProposedEnd);
        super.RegisterProperty(MeetingResponseSchema.EnhancedLocation);
    }
}


export = MeetingResponseSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
