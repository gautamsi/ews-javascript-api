"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BoolPropertyDefinition_1 = require("../../../PropertyDefinitions/BoolPropertyDefinition");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var GenericPropertyDefinition_1 = require("../../../PropertyDefinitions/GenericPropertyDefinition");
var ItemId_1 = require("../../../ComplexProperties/ItemId");
var MeetingResponseType_1 = require("../../../Enumerations/MeetingResponseType");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var Schemas_1 = require("./Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var EmailMessageSchema_1 = require("./EmailMessageSchema");
/**
 * Field URIs for MeetingMessage.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.AssociatedCalendarItemId = "meeting:AssociatedCalendarItemId";
    FieldUris.IsDelegated = "meeting:IsDelegated";
    FieldUris.IsOutOfDate = "meeting:IsOutOfDate";
    FieldUris.HasBeenProcessed = "meeting:HasBeenProcessed";
    FieldUris.ResponseType = "meeting:ResponseType";
    FieldUris.IsOrganizer = "cal:IsOrganizer";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for meeting messages.
 */
var MeetingMessageSchema = /** @class */ (function (_super) {
    __extends(MeetingMessageSchema, _super);
    function MeetingMessageSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    MeetingMessageSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.AssociatedAppointmentId);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.IsDelegated);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.IsOutOfDate);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.HasBeenProcessed);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.ResponseType);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.ICalUid);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.ICalRecurrenceId);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.ICalDateTimeStamp);
        this.RegisterProperty(MeetingMessageSchema, MeetingMessageSchema.IsOrganizer);
    };
    /**
     * Defines the **AssociatedAppointmentId** property.
     */
    MeetingMessageSchema.AssociatedAppointmentId = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("AssociatedCalendarItemId", XmlElementNames_1.XmlElementNames.AssociatedCalendarItemId, FieldUris.AssociatedCalendarItemId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new ItemId_1.ItemId(); });
    /**
     * Defines the **IsDelegated** property.
     */
    MeetingMessageSchema.IsDelegated = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsDelegated", XmlElementNames_1.XmlElementNames.IsDelegated, FieldUris.IsDelegated, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsOutOfDate** property.
     */
    MeetingMessageSchema.IsOutOfDate = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsOutOfDate", XmlElementNames_1.XmlElementNames.IsOutOfDate, FieldUris.IsOutOfDate, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **HasBeenProcessed** property.
     */
    MeetingMessageSchema.HasBeenProcessed = new BoolPropertyDefinition_1.BoolPropertyDefinition("HasBeenProcessed", XmlElementNames_1.XmlElementNames.HasBeenProcessed, FieldUris.HasBeenProcessed, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ResponseType** property.
     */
    MeetingMessageSchema.ResponseType = new GenericPropertyDefinition_1.GenericPropertyDefinition("ResponseType", XmlElementNames_1.XmlElementNames.ResponseType, FieldUris.ResponseType, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, MeetingResponseType_1.MeetingResponseType);
    /**
     * Defines the **ICalUid** property.
     */
    MeetingMessageSchema.ICalUid = Schemas_1.Schemas.AppointmentSchema.ICalUid;
    /**
     * Defines the **ICalRecurrenceId** property.
     */
    MeetingMessageSchema.ICalRecurrenceId = Schemas_1.Schemas.AppointmentSchema.ICalRecurrenceId;
    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    MeetingMessageSchema.ICalDateTimeStamp = Schemas_1.Schemas.AppointmentSchema.ICalDateTimeStamp;
    /**
     * Defines the **IsOrganizer** property.
     */
    MeetingMessageSchema.IsOrganizer = new GenericPropertyDefinition_1.GenericPropertyDefinition("IsOrganizer", XmlElementNames_1.XmlElementNames.IsOrganizer, "cal:IsOrganizer", PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, false //isNullable
    );
    /**
     * @internal Instance of **MeetingMessageSchema**
     */
    MeetingMessageSchema.Instance = new MeetingMessageSchema();
    return MeetingMessageSchema;
}(EmailMessageSchema_1.EmailMessageSchema));
exports.MeetingMessageSchema = MeetingMessageSchema;
