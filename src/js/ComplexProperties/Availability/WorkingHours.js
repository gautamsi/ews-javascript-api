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
var LegacyAvailabilityTimeZone_1 = require("../../Misc/Availability/LegacyAvailabilityTimeZone");
var WorkingPeriod_1 = require("./WorkingPeriod");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var ComplexProperty_1 = require("../ComplexProperty");
var WorkingHours = /** @class */ (function (_super) {
    __extends(WorkingHours, _super);
    function WorkingHours() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LegacyTimeZone = new LegacyAvailabilityTimeZone_1.LegacyAvailabilityTimeZone();
        _this.daysOfTheWeek = [] /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
        return _this;
        //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("WorkingHours.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    }
    Object.defineProperty(WorkingHours.prototype, "TimeZone", {
        get: function () {
            return this.timeZone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingHours.prototype, "DaysOfTheWeek", {
        get: function () { return this.daysOfTheWeek; } /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingHours.prototype, "StartTime", {
        get: function () { return this.startTime; } /*System.TimeSpan*/,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingHours.prototype, "EndTime", {
        get: function () { return this.endTime; } /*System.TimeSpan*/,
        enumerable: true,
        configurable: true
    });
    WorkingHours.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("WorkingHours.ts - LoadFromJson : Not implemented."); };
    WorkingHours.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.TimeZone:
                    var legacyTimeZone = new LegacyAvailabilityTimeZone_1.LegacyAvailabilityTimeZone();
                    legacyTimeZone.LoadFromXmlJsObject(jsonProperty[key], service);
                    this.LegacyTimeZone = legacyTimeZone;
                    //this.timeZone = legacyTimeZone.ToTimeZoneInfo();
                    break;
                case XmlElementNames_1.XmlElementNames.WorkingPeriodArray:
                    var workingPeriods = []; // new List<WorkingPeriod>();
                    var workingPeriodsArrayObject = jsonProperty[key];
                    var workingPeriodsArray = workingPeriodsArrayObject[XmlElementNames_1.XmlElementNames.WorkingPeriod];
                    if (!Array.isArray(workingPeriodsArray)) {
                        workingPeriodsArray = [workingPeriodsArray];
                    }
                    for (var _i = 0, workingPeriodsArray_1 = workingPeriodsArray; _i < workingPeriodsArray_1.length; _i++) {
                        var workingPeriodEntry = workingPeriodsArray_1[_i];
                        var workingPeriod = new WorkingPeriod_1.WorkingPeriod();
                        workingPeriod.LoadFromXmlJsObject(workingPeriodEntry, service);
                        workingPeriods.push(workingPeriod);
                    }
                    // Availability supports a structure that can technically represent different working
                    // times for each day of the week. This is apparently how the information is stored in
                    // Exchange. However, no client (Outlook, OWA) either will let you specify different
                    // working times for each day of the week, and Outlook won't either honor that complex
                    // structure if it happens to be in Exchange.
                    // So here we'll do what Outlook and OWA do: we'll use the start and end times of the
                    // first working period, but we'll use the week days of all the periods.
                    this.startTime = workingPeriods[0].StartTime;
                    this.endTime = workingPeriods[0].EndTime;
                    for (var _a = 0, workingPeriods_1 = workingPeriods; _a < workingPeriods_1.length; _a++) {
                        var workingPeriod = workingPeriods_1[_a];
                        for (var _b = 0, _c = workingPeriods[0].DaysOfWeek; _b < _c.length; _b++) {
                            var dayOfWeek = _c[_b];
                            if (this.daysOfTheWeek.indexOf(dayOfWeek) < 0) {
                                this.daysOfTheWeek.push(dayOfWeek);
                            }
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    };
    return WorkingHours;
}(ComplexProperty_1.ComplexProperty));
exports.WorkingHours = WorkingHours;
