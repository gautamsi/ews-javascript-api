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
var DayOfTheWeek_1 = require("../../Enumerations/DayOfTheWeek");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var TimeSpan_1 = require("../../TimeSpan");
var TimeZoneInfo_1 = require("../../TimeZoneInfo");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("../../ComplexProperties/ComplexProperty");
var LegacyAvailabilityTimeZoneTime = /** @class */ (function (_super) {
    __extends(LegacyAvailabilityTimeZoneTime, _super);
    // private delta: TimeSpan /*System.TimeSpan*/; //backing property not needed
    // private year: number;
    // private month: number;
    // private dayOrder: number;
    // private dayOfTheWeek: DayOfTheWeek;
    // private timeOfDay: TimeSpan /*System.TimeSpan*/;
    function LegacyAvailabilityTimeZoneTime() {
        var _this = _super.call(this) || this;
        _this.Delta = TimeSpan_1.TimeSpan.Zero /*System.TimeSpan*/;
        _this.TimeOfDay = TimeSpan_1.TimeSpan.Zero /*System.TimeSpan*/;
        _this.DayOrder = 0;
        _this.Month = 0;
        _this.DayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek.Sunday;
        _this.Year = 0;
        return _this;
    }
    Object.defineProperty(LegacyAvailabilityTimeZoneTime.prototype, "HasTransitionTime", {
        get: function () { return this.Month >= 1 && this.Month <= 12; },
        enumerable: true,
        configurable: true
    });
    LegacyAvailabilityTimeZoneTime.prototype.ToTransitionTime = function () {
        if (this.Year == 0) {
            return TimeZoneInfo_1.TimeZoneInfo.TransitionTime.CreateFloatingDateRule(new DateTime_1.DateTime(DateTime_1.DateTime.MinValue.Year, DateTime_1.DateTime.MinValue.Month, DateTime_1.DateTime.MinValue.Day, this.TimeOfDay.Hours, this.TimeOfDay.Minutes, this.TimeOfDay.Seconds), this.Month, this.DayOrder, EwsUtilities_1.EwsUtilities.EwsToSystemDayOfWeek(this.DayOfTheWeek));
        }
        else {
            return TimeZoneInfo_1.TimeZoneInfo.TransitionTime.CreateFixedDateRule(new DateTime_1.DateTime(this.TimeOfDay.TotalMilliseconds), this.Month, this.DayOrder);
        }
    };
    LegacyAvailabilityTimeZoneTime.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Bias:
                    this.Delta = TimeSpan_1.TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                case XmlElementNames_1.XmlElementNames.Time:
                    this.TimeOfDay = new TimeSpan_1.TimeSpan(jsonProperty[key]); // momentjs taks care of parsing TimeSpan.Parse(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.DayOrder:
                    this.DayOrder = Number(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.DayOfWeek:
                    this.DayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek[jsonProperty[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.Month:
                    this.Month = Number(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Year:
                    this.Year = Number(jsonProperty[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**@internal */
    LegacyAvailabilityTimeZoneTime.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Bias, this.Delta.TotalMinutes);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Time, EwsUtilities_1.EwsUtilities.TimeSpanToXSTime(this.TimeOfDay));
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DayOrder, this.DayOrder);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Month, this.Month);
        // Only write DayOfWeek if this is a recurring time change
        if (this.Year == 0) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DayOfWeek, DayOfTheWeek_1.DayOfTheWeek[this.DayOfTheWeek]); // needs to be string
        }
        // Only emit year if it's non zero, otherwise AS returns "Request is invalid"
        if (this.Year != 0) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Year, this.Year);
        }
    };
    return LegacyAvailabilityTimeZoneTime;
}(ComplexProperty_1.ComplexProperty));
exports.LegacyAvailabilityTimeZoneTime = LegacyAvailabilityTimeZoneTime;
