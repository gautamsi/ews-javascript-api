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
var TimeZoneDefinition_1 = require("../ComplexProperties/TimeZones/TimeZoneDefinition");
var EwsLogging_1 = require("../Core/EwsLogging");
var PropertyDefinition_1 = require("./PropertyDefinition");
/**
 * @internal Represents a property definition for properties of type TimeZoneInfo.
 */
var TimeZonePropertyDefinition = /** @class */ (function (_super) {
    __extends(TimeZonePropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **TimeZonePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function TimeZonePropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version) || this;
    }
    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    TimeZonePropertyDefinition.prototype.LoadPropertyValueFromXmlJsObject = function (jsObject, service, propertyBag) {
        EwsLogging_1.EwsLogging.Assert(false, "TimeZonePropertyDefinition.LoadPropertyValueFromXmlJsObject", "TimeZone info has been updated, Please report any bugs to github");
        var timeZoneDefinition = new TimeZoneDefinition_1.TimeZoneDefinition();
        if (jsObject) {
            timeZoneDefinition.LoadFromXmlJsObject(jsObject, service);
        }
        propertyBag._setItem(this, timeZoneDefinition.ToTimeZoneInfo(service));
    };
    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    TimeZonePropertyDefinition.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) {
        EwsLogging_1.EwsLogging.Assert(false, "TimeZonePropertyDefinition.WritePropertyValueToXml", "[Info]:  TimeZone info has been updated, Please report any bugs to github", true);
        var value = propertyBag._getItem(this);
        if (value != null) {
            // We emit time zone properties only if we have not emitted the time zone SOAP header
            // or if this time zone is different from that of the service through which the request
            // is being emitted.
            if (!writer.IsTimeZoneHeaderEmitted || value != writer.Service.TimeZone) {
                var timeZoneDefinition = new TimeZoneDefinition_1.TimeZoneDefinition(value);
                //Use the actual xmlElementName of this property definition, as it may have different names depending on the context
                // e.g. StartTimeZone, EndTimeZone
                writer.WriteStartElement(timeZoneDefinition.Namespace, this.XmlElementName);
                timeZoneDefinition.WriteAttributesToXml(writer);
                timeZoneDefinition.WriteElementsToXml(writer);
                writer.WriteEndElement();
            }
        }
    };
    return TimeZonePropertyDefinition;
}(PropertyDefinition_1.PropertyDefinition));
exports.TimeZonePropertyDefinition = TimeZonePropertyDefinition;
