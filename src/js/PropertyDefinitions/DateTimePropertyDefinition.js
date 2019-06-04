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
var DateTime_1 = require("../DateTime");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var PropertyException_1 = require("../Exceptions/PropertyException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var TimeZoneInfo_1 = require("../TimeZoneInfo");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var PropertyDefinition_1 = require("./PropertyDefinition");
/**
 * @internal Represents DateTime property definition.
 */
var DateTimePropertyDefinition = /** @class */ (function (_super) {
    __extends(DateTimePropertyDefinition, _super);
    function DateTimePropertyDefinition(propertyName, xmlElementName, uri, versionOrFlags, version, isNullable) {
        var _this = this;
        switch (arguments.length) {
            case 4:
                _this = _super.call(this, propertyName, xmlElementName, uri, versionOrFlags) || this;
                break;
            case 5:
            case 6:
                _this = _super.call(this, propertyName, xmlElementName, uri, versionOrFlags, version) || this;
                break;
            default:
                break;
        }
        _this.isNullable = isNullable || false;
        return _this;
    }
    Object.defineProperty(DateTimePropertyDefinition.prototype, "IsNullable", {
        /**
         * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
         */
        get: function () { return this.isNullable; },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the converted date time.
     *
     * @param   {ExchangeServiceBase}   service             The service.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   if set to true [is update operation].
     * @param   {any}                   value               The value.
     * @return  {DateTime}      Converted DateTime value
     */
    DateTimePropertyDefinition.prototype.GetConvertedDateTime = function (service, propertyBag, isUpdateOperation, value) {
        EwsLogging_1.EwsLogging.Assert(false, "DateTimePropertyDefinition.GetConvertedDateTime", "TimeZone info could be misleading, It should be used as UTC in all cases until fixed");
        var dateTime = DateTime_1.DateTime.Parse(value);
        var convertedDateTime;
        //debug: //todo: find datetimekind
        // If the date/time is unspecified, we may need to scope it to time zone.
        if (dateTime.Kind == DateTime_1.DateTimeKind.Unspecified) {
            convertedDateTime = this.ScopeToTimeZone(service, value, propertyBag, isUpdateOperation);
        }
        else {
            convertedDateTime = dateTime;
        }
        return convertedDateTime;
    };
    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               value         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    DateTimePropertyDefinition.prototype.LoadPropertyValueFromXmlJsObject = function (jsObject, service, propertyBag) {
        var stringValue = jsObject; //.toString();
        //debug: //ref: check for datetime value
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(stringValue)) {
            var value = service.ConvertUniversalDateTimeStringToLocalDateTime(stringValue);
            propertyBag._setItem(this, service.ConvertUniversalDateTimeStringToLocalDateTime(stringValue));
        }
    };
    /**
     * @internal Scopes the date time property to the appropriate time zone, if necessary.
     *
     * @param   {ExchangeServiceBase}   service             The service emitting the request.
     * @param   {DateTime}              dateTime            The date time.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the scoping is to be performed in the context of an update operation.
     * @return  {DateTime}              The converted DateTime.
     */
    DateTimePropertyDefinition.prototype.ScopeToTimeZone = function (service, dateTime, propertyBag, isUpdateOperation) {
        EwsLogging_1.EwsLogging.Assert(false, "DateTimePropertyDefinition.ScopeToTimeZone", "TimeZone info could be misleading, It should be used as UTC in all cases until fixed");
        try {
            var convertedDateTime = EwsUtilities_1.EwsUtilities.ConvertTime(dateTime, service.TimeZone, TimeZoneInfo_1.TimeZoneInfo.Utc);
            return new DateTime_1.DateTime(convertedDateTime.TotalMilliSeconds, DateTime_1.DateTimeKind.Utc);
        }
        catch (e) //TimeZoneConversionException
         {
            throw new PropertyException_1.PropertyException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidDateTime, dateTime), this.Name, e);
        }
    };
    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    DateTimePropertyDefinition.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) {
        var value = propertyBag._getItem(this);
        if (value != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.XmlElementName);
            var convertedDateTime = this.GetConvertedDateTime(writer.Service, propertyBag, isUpdateOperation, value);
            writer.WriteValue(EwsUtilities_1.EwsUtilities.DateTimeToXSDateTime(convertedDateTime), this.Name);
            writer.WriteEndElement();
        }
    };
    return DateTimePropertyDefinition;
}(PropertyDefinition_1.PropertyDefinition));
exports.DateTimePropertyDefinition = DateTimePropertyDefinition;
