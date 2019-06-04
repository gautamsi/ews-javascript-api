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
var ExtensionMethods_1 = require("../../ExtensionMethods");
var DateTime_1 = require("../../DateTime");
var DayOfTheWeek_1 = require("../../Enumerations/DayOfTheWeek");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var TimeZoneInfo_1 = require("../../TimeZoneInfo");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var AbsoluteMonthTransition_1 = require("./AbsoluteMonthTransition");
/**
 * @internal Represents a time zone period transition that occurs on a relative day of a specific month.
 */
var RelativeDayOfMonthTransition = /** @class */ (function (_super) {
    __extends(RelativeDayOfMonthTransition, _super);
    function RelativeDayOfMonthTransition(timeZoneDefinition, targetPeriod) {
        var _this = _super.call(this, timeZoneDefinition, targetPeriod) || this;
        _this.dayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek.Sunday;
        _this.weekIndex = null;
        return _this;
    }
    Object.defineProperty(RelativeDayOfMonthTransition.prototype, "DayOfTheWeek", {
        /**
         * @internal Gets the day of the week when the transition occurs.
         */
        get: function () {
            return this.dayOfTheWeek;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDayOfMonthTransition.prototype, "WeekIndex", {
        /**
         * @internal Gets the index of the week in the month when the transition occurs.
         */
        get: function () {
            return this.weekIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates a time zone transition time.
     * @virtual
     *
     * @return  {TimeZoneInfo.TransitionTime}      A TimeZoneInfo.TransitionTime.
     */
    RelativeDayOfMonthTransition.prototype.CreateTransitionTime = function () {
        return TimeZoneInfo_1.TimeZoneInfo.TransitionTime.CreateFloatingDateRule(new DateTime_1.DateTime(this.TimeOffset.Milliseconds - DateTime_1.msToEpoch), this.Month, this.WeekIndex == -1 ? 5 : this.WeekIndex, EwsUtilities_1.EwsUtilities.EwsToSystemDayOfWeek(this.DayOfTheWeek));
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    RelativeDayOfMonthTransition.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.RecurringDayTransition;
    };
    /**
     * @internal Initializes this transition based on the specified transition time.
     * @virtual
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
    RelativeDayOfMonthTransition.prototype.InitializeFromTransitionTime = function (transitionTime) {
        _super.prototype.InitializeFromTransitionTime.call(this, transitionTime);
        this.dayOfTheWeek = EwsUtilities_1.EwsUtilities.SystemToEwsDayOfTheWeek(transitionTime.DayOfWeek);
        // TimeZoneInfo uses week indices from 1 to 5, 5 being the last week of the month.
        // EWS uses -1 to denote the last week of the month.
        this.weekIndex = transitionTime.Week == 5 ? -1 : transitionTime.Week;
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    RelativeDayOfMonthTransition.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.DayOfWeek]) {
            this.dayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek[jsObject[XmlElementNames_1.XmlElementNames.DayOfWeek]];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.Occurrence]) {
            this.weekIndex = ExtensionMethods_1.Convert.toInt(jsObject[XmlElementNames_1.XmlElementNames.Occurrence]);
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    RelativeDayOfMonthTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DayOfWeek, DayOfTheWeek_1.DayOfTheWeek[this.dayOfTheWeek]);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Occurrence, this.weekIndex);
    };
    return RelativeDayOfMonthTransition;
}(AbsoluteMonthTransition_1.AbsoluteMonthTransition));
exports.RelativeDayOfMonthTransition = RelativeDayOfMonthTransition;
