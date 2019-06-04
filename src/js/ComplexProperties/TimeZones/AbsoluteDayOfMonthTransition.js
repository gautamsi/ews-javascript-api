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
var EwsLogging_1 = require("../../Core/EwsLogging");
var TimeZoneInfo_1 = require("../../TimeZoneInfo");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var AbsoluteMonthTransition_1 = require("./AbsoluteMonthTransition");
/**
 * @internal Represents a time zone period transition that occurs on a specific day of a specific month.
 */
var AbsoluteDayOfMonthTransition = /** @class */ (function (_super) {
    __extends(AbsoluteDayOfMonthTransition, _super);
    function AbsoluteDayOfMonthTransition(timeZoneDefinition, targetPeriod) {
        var _this = _super.call(this, timeZoneDefinition, targetPeriod) || this;
        _this.dayOfMonth = null;
        return _this;
    }
    Object.defineProperty(AbsoluteDayOfMonthTransition.prototype, "DayOfMonth", {
        /**
         * @internal Gets the day of then month when this transition occurs.
         */
        get: function () {
            return this.dayOfMonth;
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
    AbsoluteDayOfMonthTransition.prototype.CreateTransitionTime = function () {
        return TimeZoneInfo_1.TimeZoneInfo.TransitionTime.CreateFixedDateRule(new DateTime_1.DateTime(this.TimeOffset.Milliseconds), this.Month, this.DayOfMonth);
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    AbsoluteDayOfMonthTransition.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.RecurringDateTransition;
    };
    /**
     * @internal Initializes this transition based on the specified transition time.
     * @virtual
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
    AbsoluteDayOfMonthTransition.prototype.InitializeFromTransitionTime = function (transitionTime) {
        _super.prototype.InitializeFromTransitionTime.call(this, transitionTime);
        this.dayOfMonth = transitionTime.Day;
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    AbsoluteDayOfMonthTransition.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.Day]) {
            this.dayOfMonth = ExtensionMethods_1.Convert.toInt(jsObject[XmlElementNames_1.XmlElementNames.Day]);
            EwsLogging_1.EwsLogging.Assert(this.dayOfMonth > 0 && this.dayOfMonth <= 31, "AbsoluteDayOfMonthTransition.TryReadElementFromXml", "dayOfMonth is not in the valid 1 - 31 range.");
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    AbsoluteDayOfMonthTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Day, this.dayOfMonth);
    };
    return AbsoluteDayOfMonthTransition;
}(AbsoluteMonthTransition_1.AbsoluteMonthTransition));
exports.AbsoluteDayOfMonthTransition = AbsoluteDayOfMonthTransition;
