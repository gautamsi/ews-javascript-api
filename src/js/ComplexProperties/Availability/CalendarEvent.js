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
var CalendarEventDetails_1 = require("./CalendarEventDetails");
var LegacyFreeBusyStatus_1 = require("../../Enumerations/LegacyFreeBusyStatus");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var ComplexProperty_1 = require("../ComplexProperty");
var CalendarEvent = /** @class */ (function (_super) {
    __extends(CalendarEvent, _super);
    function CalendarEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startTime = null;
        _this.endTime = null;
        _this.freeBusyStatus = 0;
        _this.details = null;
        return _this;
    }
    Object.defineProperty(CalendarEvent.prototype, "StartTime", {
        get: function () {
            return this.startTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "EndTime", {
        get: function () {
            return this.endTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "FreeBusyStatus", {
        get: function () {
            return this.freeBusyStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "Details", {
        get: function () {
            return this.details;
        },
        enumerable: true,
        configurable: true
    });
    CalendarEvent.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("CalendarEvent.ts - LoadFromJson : Not implemented."); };
    CalendarEvent.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.StartTime:
                    this.startTime = EwsUtilities_1.EwsUtilities.ParseAsUnbiasedDatetimescopedToServicetimeZone(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.EndTime:
                    this.endTime = EwsUtilities_1.EwsUtilities.ParseAsUnbiasedDatetimescopedToServicetimeZone(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.BusyType:
                    this.freeBusyStatus = LegacyFreeBusyStatus_1.LegacyFreeBusyStatus[jsonProperty[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.CalendarEventDetails:
                    this.details = new CalendarEventDetails_1.CalendarEventDetails();
                    this.details.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    return CalendarEvent;
}(ComplexProperty_1.ComplexProperty));
exports.CalendarEvent = CalendarEvent;
