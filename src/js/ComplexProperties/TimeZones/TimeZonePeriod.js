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
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var ComplexProperty_1 = require("../ComplexProperty");
/**
 * @internal Represents a time zone period as defined in the EWS schema.
 */
var TimeZonePeriod = /** @class */ (function (_super) {
    __extends(TimeZonePeriod, _super);
    /**
     * @internal Initializes a new instance of the **TimeZonePeriod** class.
     */
    function TimeZonePeriod() {
        return _super.call(this) || this;
    }
    Object.defineProperty(TimeZonePeriod.prototype, "IsStandardPeriod", {
        /**
         * Gets a value indicating whether this period represents the Standard period.
         *
         * @value   <c>true</c> if this instance is standard period; otherwise, <c>false</c>.
         */
        get: function () {
            return this.Name.toUpperCase() === TimeZonePeriod.StandardPeriodName.toUpperCase();
            // return string.Compare(
            //     this.name,
            //     TimeZonePeriod.StandardPeriodName,
            //     StringComparison.OrdinalIgnoreCase) == 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    TimeZonePeriod.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.Id:
                    this.Id = jsObject[key];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.Name:
                    this.Name = jsObject[key];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.Bias:
                    this.Bias = EwsUtilities_1.EwsUtilities.XSDurationToTimeSpan(jsObject[key]);
                    break;
            }
        }
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZonePeriod.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Bias, EwsUtilities_1.EwsUtilities.TimeSpanToXSDuration(this.Bias));
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Name, this.Name);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, this.Id);
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZonePeriod.prototype.WriteToXml = function (writer) { _super.prototype.WriteToXml.call(this, writer, XmlElementNames_1.XmlElementNames.Period); };
    /** @internal */
    TimeZonePeriod.StandardPeriodId = "Std";
    /** @internal */
    TimeZonePeriod.StandardPeriodName = "Standard";
    /** @internal */
    TimeZonePeriod.DaylightPeriodId = "Dlt";
    /** @internal */
    TimeZonePeriod.DaylightPeriodName = "Daylight";
    return TimeZonePeriod;
}(ComplexProperty_1.ComplexProperty));
exports.TimeZonePeriod = TimeZonePeriod;
