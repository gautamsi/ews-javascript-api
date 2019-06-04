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
var DayOfTheWeek_1 = require("../Enumerations/DayOfTheWeek");
var DayOfTheWeekIndex_1 = require("../Enumerations/DayOfTheWeekIndex");
var Month_1 = require("../Enumerations/Month");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * @internal Represents a recurrence pattern for a time change in a time zone.
 * @sealed
 */
var TimeChangeRecurrence = /** @class */ (function (_super) {
    __extends(TimeChangeRecurrence, _super);
    function TimeChangeRecurrence(dayOfTheWeekIndex, dayOfTheWeek, month) {
        if (dayOfTheWeekIndex === void 0) { dayOfTheWeekIndex = null; }
        if (dayOfTheWeek === void 0) { dayOfTheWeek = null; }
        if (month === void 0) { month = null; }
        var _this = _super.call(this) || this;
        _this.dayOfTheWeekIndex = dayOfTheWeekIndex;
        _this.dayOfTheWeek = dayOfTheWeek;
        _this.month = month;
        return _this;
    }
    Object.defineProperty(TimeChangeRecurrence.prototype, "DayOfTheWeekIndex", {
        /**
         * Gets or sets the index of the day in the month at which the time change occurs.
         */
        get: function () {
            return this.dayOfTheWeekIndex;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeChangeRecurrence.prototype, "DayOfTheWeek", {
        /**
         * Gets or sets the day of the week the time change occurs.
         */
        get: function () {
            return this.dayOfTheWeek;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeChangeRecurrence.prototype, "Month", {
        /**
         * Gets or sets the month the time change occurs.
         */
        get: function () {
            return this.month;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    TimeChangeRecurrence.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.DaysOfWeek:
                    this.dayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek[jsonProperty[key]];
                case XmlElementNames_1.XmlElementNames.DayOfWeekIndex:
                    this.dayOfTheWeekIndex = DayOfTheWeekIndex_1.DayOfTheWeekIndex[jsonProperty[key]];
                case XmlElementNames_1.XmlElementNames.Month:
                    this.month = Month_1.Month[jsonProperty[key]];
                default:
            }
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeChangeRecurrence.prototype.WriteElementsToXml = function (writer) {
        if (this.DayOfTheWeek) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DaysOfWeek, this.DayOfTheWeek);
        }
        if (this.dayOfTheWeekIndex) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DayOfWeekIndex, this.DayOfTheWeekIndex);
        }
        if (this.Month) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Month, this.Month);
        }
    };
    return TimeChangeRecurrence;
}(ComplexProperty_1.ComplexProperty));
exports.TimeChangeRecurrence = TimeChangeRecurrence;
