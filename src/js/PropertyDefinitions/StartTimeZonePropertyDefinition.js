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
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var MeetingTimeZone_1 = require("../ComplexProperties/MeetingTimeZone");
var Schemas_1 = require("../Core/ServiceObjects/Schemas/Schemas");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var TimeZonePropertyDefinition_1 = require("./TimeZonePropertyDefinition");
/**
 * @internal Represents a property definition for properties of type TimeZoneInfo.
 */
var StartTimeZonePropertyDefinition = /** @class */ (function (_super) {
    __extends(StartTimeZonePropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **StartTimeZonePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function StartTimeZonePropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version) || this;
    }
    /**
     * @internal Determines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag      The flag.
     * @param   {ExchangeVersion}           version   Requested version.
     * @return  {boolean}                   true if the specified flag is set; otherwise, false.
     */
    StartTimeZonePropertyDefinition.prototype.HasFlag = function (flag, version) {
        if (version && (version === ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1)) {
            return Schemas_1.Schemas.AppointmentSchema.MeetingTimeZone.HasFlag(flag, version);
        }
        else {
            return _super.prototype.HasFlag.call(this, flag, version);
        }
    };
    /**
     * @internal Registers associated internal properties.
     *
     * @param   {PropertyDefinition[]}   properties   The list in which to add the associated properties.
     */
    StartTimeZonePropertyDefinition.prototype.RegisterAssociatedInternalProperties = function (properties) {
        _super.prototype.RegisterAssociatedInternalProperties.call(this, properties);
        properties.push(Schemas_1.Schemas.AppointmentSchema.MeetingTimeZone);
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    StartTimeZonePropertyDefinition.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) {
        var value = propertyBag._getItem(this);
        if (value != null) {
            if (writer.Service.RequestedServerVersion == ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
                var service = writer.Service;
                if (service != null && service.Exchange2007CompatibilityMode == false) {
                    var meetingTimeZone = new MeetingTimeZone_1.MeetingTimeZone(value);
                    meetingTimeZone.WriteToXml(writer, XmlElementNames_1.XmlElementNames.MeetingTimeZone);
                }
            }
            else {
                _super.prototype.WritePropertyValueToXml.call(this, writer, propertyBag, isUpdateOperation);
            }
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    StartTimeZonePropertyDefinition.prototype.WriteToXml = function (writer) {
        if (writer.Service.RequestedServerVersion == ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            Schemas_1.Schemas.AppointmentSchema.MeetingTimeZone.WriteToXml(writer);
        }
        else {
            _super.prototype.WriteToXml.call(this, writer);
        }
    };
    return StartTimeZonePropertyDefinition;
}(TimeZonePropertyDefinition_1.TimeZonePropertyDefinition));
exports.StartTimeZonePropertyDefinition = StartTimeZonePropertyDefinition;
