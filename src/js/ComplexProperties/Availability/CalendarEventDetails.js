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
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var ComplexProperty_1 = require("../ComplexProperty");
var CalendarEventDetails = /** @class */ (function (_super) {
    __extends(CalendarEventDetails, _super);
    function CalendarEventDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.storeId = null;
        _this.subject = null;
        _this.location = null;
        _this.isMeeting = false;
        _this.isRecurring = false;
        _this.isException = false;
        _this.isReminderSet = false;
        _this.isPrivate = false;
        return _this;
    }
    Object.defineProperty(CalendarEventDetails.prototype, "StoreId", {
        get: function () {
            return this.storeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetails.prototype, "Subject", {
        get: function () {
            return this.subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetails.prototype, "Location", {
        get: function () {
            return this.location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetails.prototype, "IsMeeting", {
        get: function () {
            return this.isMeeting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetails.prototype, "IsRecurring", {
        get: function () {
            return this.isRecurring;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetails.prototype, "IsException", {
        get: function () {
            return this.isException;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetails.prototype, "IsReminderSet", {
        get: function () {
            return this.isReminderSet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetails.prototype, "IsPrivate", {
        get: function () {
            return this.isPrivate;
        },
        enumerable: true,
        configurable: true
    });
    CalendarEventDetails.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("CalendarEventDetails.ts - LoadFromJson : Not implemented."); };
    CalendarEventDetails.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.ID:
                    this.storeId = jsonProperty[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Subject:
                    this.subject = jsonProperty[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Location:
                    this.location = jsonProperty[key];
                    break;
                case XmlElementNames_1.XmlElementNames.IsMeeting:
                    this.isMeeting = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsRecurring:
                    this.isRecurring = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsException:
                    this.isException = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsReminderSet:
                    this.isReminderSet = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsPrivate:
                    this.isPrivate = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                default:
                    break;
            }
        }
    };
    return CalendarEventDetails;
}(ComplexProperty_1.ComplexProperty));
exports.CalendarEventDetails = CalendarEventDetails;
