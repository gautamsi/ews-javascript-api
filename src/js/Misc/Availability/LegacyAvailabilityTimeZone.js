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
var DateTime_1 = require("../../DateTime");
var Guid_1 = require("../../Guid");
var LegacyAvailabilityTimeZoneTime_1 = require("./LegacyAvailabilityTimeZoneTime");
var TimeSpan_1 = require("../../TimeSpan");
var TimeZoneInfo_1 = require("../../TimeZoneInfo");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("../../ComplexProperties/ComplexProperty");
var LegacyAvailabilityTimeZone = /** @class */ (function (_super) {
    __extends(LegacyAvailabilityTimeZone, _super);
    function LegacyAvailabilityTimeZone(timeZoneInfo) {
        if (timeZoneInfo === void 0) { timeZoneInfo = null; }
        var _this = _super.call(this) || this;
        _this.bias = TimeSpan_1.TimeSpan.Zero;
        return _this;
        //ref: skipping due to only called when server is 2007 sp1, 10 years later, may be not many cases to handle. 
        // if (timeZoneInfo && arguments.length === 1) {
        //     // Availability uses the opposite sign for the bias, e.g. if TimeZoneInfo.BaseUtcOffset = 480 than
        //     // SerializedTimeZone.Bias must be -480.
        //     this.bias = TimeSpan.FromMilliseconds(-timeZoneInfo.BaseUtcOffset.TotalMilliseconds);
        //     // To convert TimeZoneInfo into SerializableTimeZone, we need two time changes: one to Standard
        //     // time, the other to Daylight time. TimeZoneInfo holds a list of adjustment rules that represent
        //     // the different rules that govern time changes over the years. We need to grab one of those rules
        //     // to initialize this instance.
        //     let adjustmentRules: TimeZoneInfo.AdjustmentRule[] = timeZoneInfo.GetAdjustmentRules();
        //     if (adjustmentRules.length == 0) {
        //         // If there are no adjustment rules (which is the case for UTC), we have to come up with two
        //         // dummy time changes which both have a delta of zero and happen at two hard coded dates. This
        //         // simulates a time zone in which there are no time changes.
        //         this.daylightTime = new LegacyAvailabilityTimeZoneTime();
        //         this.daylightTime.Delta = TimeSpan.Zero;
        //         this.daylightTime.DayOrder = 1;
        //         this.daylightTime.DayOfTheWeek = DayOfTheWeek.Sunday;
        //         this.daylightTime.Month = 10;
        //         this.daylightTime.TimeOfDay = TimeSpan.FromHours(2);
        //         this.daylightTime.Year = 0;
        //         this.standardTime = new LegacyAvailabilityTimeZoneTime();
        //         this.standardTime.Delta = TimeSpan.Zero;
        //         this.standardTime.DayOrder = 1;
        //         this.standardTime.DayOfTheWeek = DayOfTheWeek.Sunday;
        //         this.standardTime.Month = 3;
        //         this.standardTime.TimeOfDay = TimeSpan.FromHours(2);
        //         this.daylightTime.Year = 0;
        //     }
        //     else {
        //         // When there is at least one adjustment rule, we need to grab the last one which is the
        //         // one that currently applies (TimeZoneInfo stores adjustment rules sorted from oldest to
        //         // most recent).
        //         let currentRule: TimeZoneInfo.AdjustmentRule = adjustmentRules[adjustmentRules.length - 1];
        //         this.standardTime = new LegacyAvailabilityTimeZoneTime(currentRule.DaylightTransitionEnd, TimeSpan.Zero);
        //         // Again, TimeZoneInfo and SerializableTime use opposite signs for bias.
        //         this.daylightTime = new LegacyAvailabilityTimeZoneTime(currentRule.DaylightTransitionStart, TimeSpan.FromMilliseconds(-currentRule.DaylightDelta.TotalMilliseconds));
        //     }
        // }
    }
    LegacyAvailabilityTimeZone.prototype.ToTimeZoneInfo = function () {
        if (this.daylightTime.HasTransitionTime &&
            this.standardTime.HasTransitionTime) {
            var adjustmentRule = TimeZoneInfo_1.TimeZoneInfo.AdjustmentRule.CreateAdjustmentRule(DateTime_1.DateTime.MinValue.Date, DateTime_1.DateTime.MaxValue.Date, TimeSpan_1.TimeSpan.FromMilliseconds(-this.daylightTime.Delta.TotalMilliseconds), this.daylightTime.ToTransitionTime(), this.standardTime.ToTransitionTime());
            return TimeZoneInfo_1.TimeZoneInfo.CreateCustomTimeZone(Guid_1.Guid.NewGuid().ToString(), TimeSpan_1.TimeSpan.FromMilliseconds(-this.bias.TotalMilliseconds), "Custom time zone", "Standard time", "Daylight time", [adjustmentRule]);
        }
        else {
            // Create no DST time zone
            return TimeZoneInfo_1.TimeZoneInfo.CreateCustomTimeZone(Guid_1.Guid.NewGuid().ToString(), TimeSpan_1.TimeSpan.FromMilliseconds(-this.bias.TotalMilliseconds), "Custom time zone", "Standard time");
        }
    };
    LegacyAvailabilityTimeZone.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Bias:
                    this.bias = TimeSpan_1.TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                case XmlElementNames_1.XmlElementNames.StandardTime:
                    this.standardTime = new LegacyAvailabilityTimeZoneTime_1.LegacyAvailabilityTimeZoneTime();
                    this.standardTime.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.DaylightTime:
                    this.daylightTime = new LegacyAvailabilityTimeZoneTime_1.LegacyAvailabilityTimeZoneTime();
                    this.daylightTime.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    /**@internal */
    LegacyAvailabilityTimeZone.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Bias, this.bias.TotalMinutes);
        this.standardTime.WriteToXml(writer, XmlElementNames_1.XmlElementNames.StandardTime);
        this.daylightTime.WriteToXml(writer, XmlElementNames_1.XmlElementNames.DaylightTime);
    };
    return LegacyAvailabilityTimeZone;
}(ComplexProperty_1.ComplexProperty));
exports.LegacyAvailabilityTimeZone = LegacyAvailabilityTimeZone;
