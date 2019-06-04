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
var DayOfTheWeek_1 = require("../../Enumerations/DayOfTheWeek");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var TimeSpan_1 = require("../../TimeSpan");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var ComplexProperty_1 = require("../ComplexProperty");
var WorkingPeriod = /** @class */ (function (_super) {
    __extends(WorkingPeriod, _super);
    function WorkingPeriod() {
        var _this = _super.call(this) || this;
        _this.daysOfWeek = [] /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
        _this.startTime = null /*System.TimeSpan*/;
        _this.endTime = null /*System.TimeSpan*/;
        return _this;
    }
    Object.defineProperty(WorkingPeriod.prototype, "DaysOfWeek", {
        get: function () { return this.daysOfWeek; } /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingPeriod.prototype, "StartTime", {
        get: function () { return this.startTime; } /*System.TimeSpan*/,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingPeriod.prototype, "EndTime", {
        get: function () { return this.endTime; } /*System.TimeSpan*/,
        enumerable: true,
        configurable: true
    });
    WorkingPeriod.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("WorkingPeriod.ts - LoadFromJson : Not implemented."); };
    WorkingPeriod.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("WorkingPeriod.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    WorkingPeriod.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.DayOfWeek:
                    EwsUtilities_1.EwsUtilities.ParseEnumValueList(this.daysOfWeek, jsonProperty[key], ' ', DayOfTheWeek_1.DayOfTheWeek);
                    break;
                case XmlElementNames_1.XmlElementNames.StartTimeInMinutes:
                    this.startTime = TimeSpan_1.TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                case XmlElementNames_1.XmlElementNames.EndTimeInMinutes:
                    this.endTime = TimeSpan_1.TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                default:
                    break;
            }
        }
    };
    return WorkingPeriod;
}(ComplexProperty_1.ComplexProperty));
exports.WorkingPeriod = WorkingPeriod;
