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
var MeetingTimeZone_1 = require("../ComplexProperties/MeetingTimeZone");
var Schemas_1 = require("../Core/ServiceObjects/Schemas/Schemas");
var EwsLogging_1 = require("../Core/EwsLogging");
var PropertyDefinition_1 = require("./PropertyDefinition");
/**
 * @internal Represents the definition for the meeting time zone property.
 */
var MeetingTimeZonePropertyDefinition = /** @class */ (function (_super) {
    __extends(MeetingTimeZonePropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **MeetingTimeZonePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function MeetingTimeZonePropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version) || this;
    }
    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    MeetingTimeZonePropertyDefinition.prototype.LoadPropertyValueFromXmlJsObject = function (jsObject, service, propertyBag) {
        EwsLogging_1.EwsLogging.Assert(false, "MeetingTimeZonePropertyDefinition.LoadPropertyValueFromXmlJsObject", "This is not properly validate, need to validate with example");
        if (jsObject != null) {
            var meetingTimeZone = new MeetingTimeZone_1.MeetingTimeZone();
            meetingTimeZone.LoadFromXmlJsObject(jsObject, service);
            propertyBag._setItem(Schemas_1.Schemas.AppointmentSchema.StartTimeZone, meetingTimeZone.ToTimeZoneInfo());
        }
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    MeetingTimeZonePropertyDefinition.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) {
        var value = propertyBag._getItem(this);
        if (value) {
            value.WriteToXml(writer, this.XmlElementName);
        }
    };
    return MeetingTimeZonePropertyDefinition;
}(PropertyDefinition_1.PropertyDefinition));
exports.MeetingTimeZonePropertyDefinition = MeetingTimeZonePropertyDefinition;
