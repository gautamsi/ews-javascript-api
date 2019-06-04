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
var ArgumentException_1 = require("../../../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../../../ExtensionMethods");
var ServiceValidationException_1 = require("../../../Exceptions/ServiceValidationException");
var Strings_1 = require("../../../Strings");
var XmlElementNames_1 = require("../../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../../Enumerations/XmlNamespace");
var Recurrence_IntervalPattern_1 = require("./Recurrence.IntervalPattern");
/**
 * Represents a recurrence pattern where each occurrence happens on a specific day a specific number of months after the previous one.
 */
var MonthlyPattern = /** @class */ (function (_super) {
    __extends(MonthlyPattern, _super);
    function MonthlyPattern(startDate, interval, dayOfMonth) {
        if (dayOfMonth === void 0) { dayOfMonth = null; }
        var _this = this;
        if (arguments.length === 0) {
            _this = _super.call(this) || this;
            _this.dayOfMonth = null;
            return;
        }
        _this = _super.call(this, startDate, interval) || this;
        _this.DayOfMonth = dayOfMonth;
        return _this;
    }
    Object.defineProperty(MonthlyPattern.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.AbsoluteMonthlyRecurrence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonthlyPattern.prototype, "DayOfMonth", {
        /**
         * Gets or sets the day of the month when each occurrence happens. DayOfMonth must be between 1 and 31.
         */
        get: function () {
            return _super.prototype.GetFieldValueOrThrowIfNull.call(this, this.dayOfMonth, "DayOfMonth");
        },
        set: function (value) {
            var _this = this;
            if (value < 1 || value > 31) {
                throw new ArgumentException_1.ArgumentOutOfRangeException("DayOfMonth", Strings_1.Strings.DayOfMonthMustBeBetween1And31);
            }
            this.SetFieldValue({ getValue: function () { return _this.dayOfMonth; }, setValue: function (updateValue) { _this.dayOfMonth = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    MonthlyPattern.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        if (this.dayOfMonth === null) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.DayOfMonthMustBeBetween1And31);
        }
    };
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    MonthlyPattern.prototype.InternalWritePropertiesToXml = function (writer) {
        _super.prototype.InternalWritePropertiesToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DayOfMonth, this.DayOfMonth);
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    MonthlyPattern.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.DayOfMonth:
                    this.dayOfMonth = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    return MonthlyPattern;
}(Recurrence_IntervalPattern_1.IntervalPattern));
exports.MonthlyPattern = MonthlyPattern;
