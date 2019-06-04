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
var DayOfTheWeekIndex_1 = require("../../../Enumerations/DayOfTheWeekIndex");
var DayOfTheWeek_1 = require("../../../Enumerations/DayOfTheWeek");
var ServiceValidationException_1 = require("../../../Exceptions/ServiceValidationException");
var Strings_1 = require("../../../Strings");
var XmlElementNames_1 = require("../../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../../Enumerations/XmlNamespace");
var Recurrence_IntervalPattern_1 = require("./Recurrence.IntervalPattern");
/**
 * Represents a recurrence pattern where each occurrence happens on a relative day a specific number of months after the previous one.
*/
var RelativeMonthlyPattern = /** @class */ (function (_super) {
    __extends(RelativeMonthlyPattern, _super);
    function RelativeMonthlyPattern(startDate, interval, dayOfTheWeek, dayOfTheWeekIndex) {
        if (dayOfTheWeek === void 0) { dayOfTheWeek = null; }
        if (dayOfTheWeekIndex === void 0) { dayOfTheWeekIndex = null; }
        var _this = this;
        if (arguments.length === 0) {
            _this = _super.call(this) || this;
            _this.dayOfTheWeek = null;
            _this.dayOfTheWeekIndex = null;
            return;
        }
        _this = _super.call(this, startDate, interval) || this;
        _this.DayOfTheWeek = dayOfTheWeek;
        _this.DayOfTheWeekIndex = dayOfTheWeekIndex;
        return _this;
    }
    Object.defineProperty(RelativeMonthlyPattern.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.RelativeMonthlyRecurrence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeMonthlyPattern.prototype, "DayOfTheWeekIndex", {
        /**
         * Gets or sets the relative position of the day specified in DayOfTheWeek within the month.
         */
        get: function () {
            return _super.prototype.GetFieldValueOrThrowIfNull.call(this, this.dayOfTheWeekIndex, "DayOfTheWeekIndex");
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.dayOfTheWeekIndex; }, setValue: function (updateValue) { _this.dayOfTheWeekIndex = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeMonthlyPattern.prototype, "DayOfTheWeek", {
        /**
         * The day of the week when each occurrence happens.
         */
        get: function () {
            return _super.prototype.GetFieldValueOrThrowIfNull.call(this, this.dayOfTheWeek, "DayOfTheWeek");
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.dayOfTheWeek; }, setValue: function (updateValue) { _this.dayOfTheWeek = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    RelativeMonthlyPattern.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        if (this.dayOfTheWeek === null) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.DayOfTheWeekMustBeSpecifiedForRecurrencePattern);
        }
        if (this.dayOfTheWeekIndex === null) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.DayOfWeekIndexMustBeSpecifiedForRecurrencePattern);
        }
    };
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    RelativeMonthlyPattern.prototype.InternalWritePropertiesToXml = function (writer) {
        _super.prototype.InternalWritePropertiesToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DaysOfWeek, DayOfTheWeek_1.DayOfTheWeek[this.DayOfTheWeek]);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DayOfWeekIndex, DayOfTheWeekIndex_1.DayOfTheWeekIndex[this.DayOfTheWeekIndex]);
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    RelativeMonthlyPattern.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.DaysOfWeek:
                    this.dayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.DayOfWeekIndex:
                    this.dayOfTheWeekIndex = DayOfTheWeekIndex_1.DayOfTheWeekIndex[jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    };
    return RelativeMonthlyPattern;
}(Recurrence_IntervalPattern_1.IntervalPattern));
exports.RelativeMonthlyPattern = RelativeMonthlyPattern;
