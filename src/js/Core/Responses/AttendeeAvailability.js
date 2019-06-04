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
var CalendarEvent_1 = require("../../ComplexProperties/Availability/CalendarEvent");
var WorkingHours_1 = require("../../ComplexProperties/Availability/WorkingHours");
var FreeBusyViewType_1 = require("../../Enumerations/FreeBusyViewType");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
var AttendeeAvailability = /** @class */ (function (_super) {
    __extends(AttendeeAvailability, _super);
    function AttendeeAvailability() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.calendarEvents = [];
        _this.mergedFreeBusyStatus = [];
        _this.viewType = FreeBusyViewType_1.FreeBusyViewType.None;
        _this.workingHours = null;
        return _this;
    }
    Object.defineProperty(AttendeeAvailability.prototype, "CalendarEvents", {
        get: function () { return this.calendarEvents; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttendeeAvailability.prototype, "ViewType", {
        get: function () { return this.viewType; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttendeeAvailability.prototype, "MergedFreeBusyStatus", {
        get: function () { return this.mergedFreeBusyStatus; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttendeeAvailability.prototype, "WorkingHours", {
        get: function () { return this.workingHours; },
        enumerable: true,
        configurable: true
    });
    AttendeeAvailability.prototype.LoadFreeBusyViewFromXmlJsObject = function (jsObject, viewType, service) {
        var viewTypeString = jsObject[XmlElementNames_1.XmlElementNames.FreeBusyViewType];
        this.viewType = FreeBusyViewType_1.FreeBusyViewType[viewTypeString];
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.MergedFreeBusy:
                    var mergedFreeBusy = jsObject[key];
                    for (var _i = 0, _a = mergedFreeBusy.split(''); _i < _a.length; _i++) {
                        var status = _a[_i];
                        this.mergedFreeBusyStatus.push(Number(status));
                    }
                    break;
                case XmlElementNames_1.XmlElementNames.CalendarEventArray:
                    var calendarEventArray = jsObject[key];
                    if (!calendarEventArray)
                        break;
                    var calendarEvents = calendarEventArray[XmlElementNames_1.XmlElementNames.CalendarEvent];
                    if (!Array.isArray(calendarEvents)) {
                        calendarEvents = [calendarEvents];
                    }
                    for (var _b = 0, calendarEvents_1 = calendarEvents; _b < calendarEvents_1.length; _b++) {
                        var calendarEventObj = calendarEvents_1[_b];
                        var calendarEvent = new CalendarEvent_1.CalendarEvent();
                        calendarEvent.LoadFromXmlJsObject(calendarEventObj, service);
                        this.calendarEvents.push(calendarEvent);
                    }
                    break;
                case XmlElementNames_1.XmlElementNames.WorkingHours:
                    this.workingHours = new WorkingHours_1.WorkingHours();
                    this.workingHours.LoadFromXmlJsObject(jsObject[key], service);
                    break;
            }
        }
    };
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    AttendeeAvailability.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
    };
    return AttendeeAvailability;
}(ServiceResponse_1.ServiceResponse));
exports.AttendeeAvailability = AttendeeAvailability;
