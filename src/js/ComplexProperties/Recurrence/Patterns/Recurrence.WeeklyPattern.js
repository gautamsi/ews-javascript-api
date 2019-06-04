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
var DayOfTheWeekCollection_1 = require("../DayOfTheWeekCollection");
var DayOfWeek_1 = require("../../../Enumerations/DayOfWeek");
var EwsUtilities_1 = require("../../../Core/EwsUtilities");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var ServiceValidationException_1 = require("../../../Exceptions/ServiceValidationException");
var Strings_1 = require("../../../Strings");
var XmlElementNames_1 = require("../../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../../Enumerations/XmlNamespace");
var Recurrence_IntervalPattern_1 = require("./Recurrence.IntervalPattern");
/**
 * Represents a recurrence pattern where each occurrence happens on specific days a specific number of weeks after the previous one.
 */
var WeeklyPattern = /** @class */ (function (_super) {
    __extends(WeeklyPattern, _super);
    function WeeklyPattern(startDate, interval, daysOfTheWeek) {
        if (daysOfTheWeek === void 0) { daysOfTheWeek = []; }
        var _this = this;
        if (arguments.length === 0) {
            _this = _super.call(this) || this;
            _this.daysOfTheWeek = new DayOfTheWeekCollection_1.DayOfTheWeekCollection();
            _this.daysOfTheWeek.OnChange.push(_this.DaysOfTheWeekChanged.bind(_this));
        }
        else {
            _this = _super.call(this, startDate, interval) || this;
            _this.daysOfTheWeek = new DayOfTheWeekCollection_1.DayOfTheWeekCollection();
        }
        _this.firstDayOfWeek = null;
        _this.daysOfTheWeek.AddRange(daysOfTheWeek);
        return _this;
    }
    Object.defineProperty(WeeklyPattern.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.WeeklyRecurrence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeeklyPattern.prototype, "DaysOfTheWeek", {
        /**
         * Gets the list of the days of the week when occurrences happen.
         */
        get: function () {
            return this.daysOfTheWeek;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeeklyPattern.prototype, "FirstDayOfWeek", {
        /**
         * Gets or sets the first day of the week for this recurrence.
         */
        get: function () {
            return _super.prototype.GetFieldValueOrThrowIfNull.call(this, this.firstDayOfWeek, "FirstDayOfWeek");
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.firstDayOfWeek; }, setValue: function (updateValue) { _this.firstDayOfWeek = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Change event handler.
     *
     * @param   {ComplexProperty}   complexProperty   The complex property.
     */
    WeeklyPattern.prototype.DaysOfTheWeekChanged = function (complexProperty) { this.Changed(); };
    /**
     * @internal Validates this instance.
     */
    WeeklyPattern.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        if (this.DaysOfTheWeek.Count == 0) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.DaysOfTheWeekNotSpecified);
        }
    };
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WeeklyPattern.prototype.InternalWritePropertiesToXml = function (writer) {
        _super.prototype.InternalWritePropertiesToXml.call(this, writer);
        this.DaysOfTheWeek.WriteToXml(writer, XmlElementNames_1.XmlElementNames.DaysOfWeek);
        if (this.firstDayOfWeek) {
            //  We only allow the "FirstDayOfWeek" parameter for the Exchange2010_SP1 schema
            //  version.
            //
            EwsUtilities_1.EwsUtilities.ValidatePropertyVersion(writer.Service, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, "FirstDayOfWeek");
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FirstDayOfWeek, DayOfWeek_1.DayOfWeek[this.firstDayOfWeek]);
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    WeeklyPattern.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.DaysOfWeek:
                    this.DaysOfTheWeek.LoadFromXmlJsObjectValue(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.FirstDayOfWeek:
                    this.FirstDayOfWeek = DayOfWeek_1.DayOfWeek[jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    };
    return WeeklyPattern;
}(Recurrence_IntervalPattern_1.IntervalPattern));
exports.WeeklyPattern = WeeklyPattern;
