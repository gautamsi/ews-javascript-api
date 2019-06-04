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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var Time_1 = require("../Misc/Time");
var TimeChangeRecurrence_1 = require("./TimeChangeRecurrence");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * @internal Represents a change of time for a time zone.
 * @sealed
 */
var TimeChange = /** @class */ (function (_super) {
    __extends(TimeChange, _super);
    function TimeChange(offset, time) {
        if (offset === void 0) { offset = null; }
        if (time === void 0) { time = null; }
        var _this = _super.call(this) || this;
        _this.timeZoneName = null;
        _this.offset = null;
        _this.time = null;
        _this.absoluteDate = null;
        _this.recurrence = null;
        if (offset) {
            _this.offset = offset;
        }
        if (time) {
            _this.time = time;
        }
        return _this;
    }
    Object.defineProperty(TimeChange.prototype, "TimeZoneName", {
        /**
         * Gets or sets the name of the associated time zone.
         */
        get: function () {
            return this.timeZoneName;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.timeZoneName; }, setValue: function (fieldValue) { _this.timeZoneName = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeChange.prototype, "Offset", {
        /**
         * Gets or sets the offset since the beginning of the year when the change occurs.
         */
        get: function () {
            return this.offset;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.offset; }, setValue: function (fieldValue) { _this.offset = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeChange.prototype, "Time", {
        /**
         * Gets or sets the time at which the change occurs.
         */
        get: function () {
            return this.time;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.time; }, setValue: function (fieldValue) { _this.time = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeChange.prototype, "AbsoluteDate", {
        /**
         * Gets or sets the absolute date at which the change occurs. AbsoluteDate and Recurrence are mutually exclusive; setting one resets the other.
         */
        get: function () {
            return this.absoluteDate;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.absoluteDate; }, setValue: function (fieldValue) { _this.absoluteDate = fieldValue; } }, value);
            if (this.absoluteDate != null) {
                this.recurrence = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeChange.prototype, "Recurrence", {
        /**
         * Gets or sets the recurrence pattern defining when the change occurs. Recurrence and AbsoluteDate are mutually exclusive; setting one resets the other.
         */
        get: function () {
            return this.recurrence;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.recurrence; }, setValue: function (fieldValue) { _this.recurrence = fieldValue; } }, value);
            if (this.recurrence != null) {
                this.absoluteDate = null;
            }
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
    TimeChange.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Offset:
                    this.offset = EwsUtilities_1.EwsUtilities.XSDurationToTimeSpan(jsonProperty[key]);
                case XmlElementNames_1.XmlElementNames.RelativeYearlyRecurrence:
                    this.Recurrence = new TimeChangeRecurrence_1.TimeChangeRecurrence();
                    this.Recurrence.LoadFromXmlJsObject(jsonProperty[key], service);
                case XmlElementNames_1.XmlElementNames.AbsoluteDate:
                    var dateTime = DateTime_1.DateTime.Parse(jsonProperty[key]);
                    // TODO: BUG
                    this.absoluteDate = new DateTime_1.DateTime(dateTime.ToUniversalTime().TotalMilliSeconds, DateTime_1.DateTimeKind.Unspecified);
                case XmlElementNames_1.XmlElementNames.Time:
                    this.time = new Time_1.Time(DateTime_1.DateTime.Parse(jsonProperty[key]));
                default:
            }
        }
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeChange.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.TimeZoneName, this.TimeZoneName);
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeChange.prototype.WriteElementsToXml = function (writer) {
        if (this.Offset) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Offset, EwsUtilities_1.EwsUtilities.TimeSpanToXSDuration(this.Offset));
        }
        if (this.Recurrence != null) {
            this.Recurrence.WriteToXml(writer, XmlElementNames_1.XmlElementNames.RelativeYearlyRecurrence);
        }
        if (this.AbsoluteDate) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AbsoluteDate, EwsUtilities_1.EwsUtilities.DateTimeToXSDate(new DateTime_1.DateTime(this.AbsoluteDate.TotalMilliSeconds, DateTime_1.DateTimeKind.Unspecified)));
        }
        if (this.Time != null) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Time, this.Time.ToXSTime());
        }
    };
    return TimeChange;
}(ComplexProperty_1.ComplexProperty));
exports.TimeChange = TimeChange;
