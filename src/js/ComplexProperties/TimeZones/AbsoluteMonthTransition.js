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
var EwsLogging_1 = require("../../Core/EwsLogging");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var TimeZoneTransition_1 = require("./TimeZoneTransition");
/**
 * @internal Represents the base class for all recurring time zone period transitions.
 */
var AbsoluteMonthTransition = /** @class */ (function (_super) {
    __extends(AbsoluteMonthTransition, _super);
    function AbsoluteMonthTransition(timeZoneDefinition, targetPeriod) {
        var _this = _super.call(this, timeZoneDefinition, targetPeriod) || this;
        _this.timeOffset = null;
        _this.month = null;
        return _this;
    }
    Object.defineProperty(AbsoluteMonthTransition.prototype, "TimeOffset", {
        /**
         * @internal Gets the time offset from midnight when the transition occurs.
         */
        get: function () {
            return this.timeOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbsoluteMonthTransition.prototype, "Month", {
        /**
         * @internal Gets the month when the transition occurs.
         */
        get: function () {
            return this.month;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Initializes this transition based on the specified transition time.
     * @virtual
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
    AbsoluteMonthTransition.prototype.InitializeFromTransitionTime = function (transitionTime) {
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    AbsoluteMonthTransition.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.TimeOffset]) {
            this.timeOffset = EwsUtilities_1.EwsUtilities.XSDurationToTimeSpan(jsObject[XmlElementNames_1.XmlElementNames.TimeOffset]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.Month]) {
            this.month = ExtensionMethods_1.Convert.toInt(jsObject[XmlElementNames_1.XmlElementNames.Month]);
            EwsLogging_1.EwsLogging.Assert(this.month > 0 && this.month <= 12, "AbsoluteMonthTransition.TryReadElementFromXml", "month is not in the valid 1 - 12 range.");
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    AbsoluteMonthTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.TimeOffset, EwsUtilities_1.EwsUtilities.TimeSpanToXSDuration(this.timeOffset));
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Month, this.month);
    };
    return AbsoluteMonthTransition;
}(TimeZoneTransition_1.TimeZoneTransition));
exports.AbsoluteMonthTransition = AbsoluteMonthTransition;
