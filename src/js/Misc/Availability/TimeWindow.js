"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
/**
 * Represents a time period.
 *
 * @sealed
 */
var TimeWindow = /** @class */ (function () {
    function TimeWindow(startTime, endTime) {
        if (startTime === void 0) { startTime = null; }
        if (endTime === void 0) { endTime = null; }
        this.StartTime = startTime;
        this.EndTime = endTime;
    }
    Object.defineProperty(TimeWindow.prototype, "Duration", {
        /**
         * @internal Gets the duration.
         */
        get: function () {
            return this.StartTime.Difference(this.EndTime);
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
    TimeWindow.prototype.LoadFromXmlJsObject = function (jsonObject, service) {
        this.StartTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsonObject[XmlElementNames_1.XmlElementNames.StartTime]);
        this.EndTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsonObject[XmlElementNames_1.XmlElementNames.EndTime]);
    };
    /**
     * Validates this instance.
     *
     * ISelfValidate.Validate
     */
    TimeWindow.prototype.Validate = function () {
        if (this.StartTime.CompareTo(this.EndTime) >= 0) {
            throw new ArgumentException_1.ArgumentException(Strings_1.Strings.TimeWindowStartTimeMustBeGreaterThanEndTime);
        }
    };
    /**
     * Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     * @param   {any}                   startTime        The start time.
     * @param   {any}                   endTime          The end time.
     */
    TimeWindow.WriteToXml = function (writer, xmlElementName, startTime, endTime) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, xmlElementName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.StartTime, startTime);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EndTime, endTime);
        writer.WriteEndElement(); // xmlElementName
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    TimeWindow.prototype.WriteToXml = function (writer, xmlElementName) {
        TimeWindow.WriteToXml(writer, xmlElementName, this.StartTime, this.EndTime);
    };
    /**
     * @internal Writes to XML without scoping the dates and without emitting times.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    TimeWindow.prototype.WriteToXmlUnscopedDatesOnly = function (writer, xmlElementName) {
        var DateOnlyFormat = "YYYY-MM-DDT00:00:00";
        TimeWindow.WriteToXml(writer, xmlElementName, this.StartTime.Format(DateOnlyFormat), // CultureInfo.InvariantCulture),
        this.EndTime.Format(DateOnlyFormat) // CultureInfo.InvariantCulture));
        );
    };
    return TimeWindow;
}());
exports.TimeWindow = TimeWindow;
