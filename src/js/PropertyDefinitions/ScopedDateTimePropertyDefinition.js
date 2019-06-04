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
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var PropertyException_1 = require("../Exceptions/PropertyException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var TimeZoneInfo_1 = require("../TimeZoneInfo");
var DateTimePropertyDefinition_1 = require("./DateTimePropertyDefinition");
/**
 * @internal Represents a property definition for DateTime values scoped to a specific time zone property.
 */
var ScopedDateTimePropertyDefinition = /** @class */ (function (_super) {
    __extends(ScopedDateTimePropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **ScopedDateTimePropertyDefinition** class.
     *
     * @param   {string}                            propertyName                    Name of the property.
     * @param   {string}                            xmlElementName                  Name of the XML element.
     * @param   {ExchangeVersion}                   version                         The version.
     * @param   {string}                            uri                             The URI.
     * @param   {PropertyDefinitionFlags}           flags                           The flags.
     * @param   {GetPropertyDefinitionCallback}     getPropertyDefinitionCallback   The callback that will be used to retrieve the time zone property.
     */
    function ScopedDateTimePropertyDefinition(propertyName, xmlElementName, uri, flags, version, getPropertyDefinitionCallback) {
        var _this = _super.call(this, propertyName, xmlElementName, uri, flags, version) || this;
        EwsLogging_1.EwsLogging.Assert(getPropertyDefinitionCallback != null, "ScopedDateTimePropertyDefinition.ctor", "getPropertyDefinitionCallback is null.");
        _this.getPropertyDefinitionCallback = getPropertyDefinitionCallback;
        return _this;
    }
    /**
     * Gets the time zone property to which to scope times.
     *
     * @param   {ExchangeVersion}   version   The EWS version for which the property is to be retrieved.
     * @return  {PropertyDefinition}             The PropertyDefinition of the scoping time zone property.
     */
    ScopedDateTimePropertyDefinition.prototype.GetTimeZoneProperty = function (version) {
        var timeZoneProperty = this.getPropertyDefinitionCallback(version);
        EwsLogging_1.EwsLogging.Assert(timeZoneProperty != null, "ScopedDateTimePropertyDefinition.GetTimeZoneProperty", "timeZoneProperty is null.");
        return timeZoneProperty;
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
    ScopedDateTimePropertyDefinition.prototype.ScopeToTimeZone = function (service, dateTime, propertyBag, isUpdateOperation) {
        EwsLogging_1.EwsLogging.Assert(false, "ScopedDateTimePropertyDefinition.ScopeToTimeZone", "[Info]:  TimeZone info has been updated, Please report any bugs to github", true);
        if (!propertyBag.Owner.GetIsCustomDateTimeScopingRequired()) {
            // Most item types do not require a custom scoping mechanism. For those item types,
            // use the default scoping mechanism.
            return _super.prototype.ScopeToTimeZone.call(this, service, dateTime, propertyBag, isUpdateOperation);
        }
        else {
            // Appointment, however, requires a custom scoping mechanism which is based on an
            // associated time zone property.
            var timeZoneProperty = this.GetTimeZoneProperty(service.RequestedServerVersion);
            var timeZonePropertyValue = { outValue: null };
            var timeZonePropertyIsSet = propertyBag.TryGetProperty(timeZoneProperty, timeZonePropertyValue);
            if (timeZonePropertyValue.outValue != null && propertyBag.IsPropertyUpdated(timeZoneProperty)) {
                // If we have the associated time zone property handy and if it has been updated locally,
                // then we scope the date time to that time zone.
                try {
                    var convertedDateTime = EwsUtilities_1.EwsUtilities.ConvertTime(dateTime, timeZonePropertyValue.outValue, TimeZoneInfo_1.TimeZoneInfo.Utc);
                    // This is necessary to stamp the date/time with the Local kind.
                    return new DateTime_1.DateTime(convertedDateTime.TotalMilliSeconds, DateTime_1.DateTimeKind.Utc);
                }
                catch (e) {
                    throw new PropertyException_1.PropertyException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidDateTime, dateTime), this.Name, e);
                }
            }
            else {
                if (isUpdateOperation) {
                    // In an update operation, what we do depends on what version of EWS
                    // we are targeting.
                    if (service.RequestedServerVersion == ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
                        // For Exchange 2007 SP1, we still need to scope to the service's time zone.
                        return _super.prototype.ScopeToTimeZone.call(this, service, dateTime, propertyBag, isUpdateOperation);
                    }
                    else {
                        // Otherwise, we let the server scope to the appropriate time zone.
                        return dateTime;
                    }
                }
                else {
                    // In a Create operation, always scope to the service's time zone.
                    return _super.prototype.ScopeToTimeZone.call(this, service, dateTime, propertyBag, isUpdateOperation);
                }
            }
        }
    };
    return ScopedDateTimePropertyDefinition;
}(DateTimePropertyDefinition_1.DateTimePropertyDefinition));
exports.ScopedDateTimePropertyDefinition = ScopedDateTimePropertyDefinition;
