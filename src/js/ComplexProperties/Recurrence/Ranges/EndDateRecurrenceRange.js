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
var EwsUtilities_1 = require("../../../Core/EwsUtilities");
var XmlElementNames_1 = require("../../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../../Enumerations/XmlNamespace");
var RecurrenceRange_1 = require("./RecurrenceRange");
/**
 * @internal Represents recurrent range with an end date.
 */
var EndDateRecurrenceRange = /** @class */ (function (_super) {
    __extends(EndDateRecurrenceRange, _super);
    function EndDateRecurrenceRange(startDate, endDate) {
        if (endDate === void 0) { endDate = null; }
        var _this = this;
        if (arguments.length === 0) {
            _this = _super.call(this) || this;
        }
        else {
            _this = _super.call(this, startDate) || this;
        }
        _this.endDate = endDate;
        return _this;
    }
    Object.defineProperty(EndDateRecurrenceRange.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.EndDateRecurrence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EndDateRecurrenceRange.prototype, "EndDate", {
        /**
         * Gets or sets the end date.
         *
         * @value   The end date.
         */
        get: function () {
            return this.endDate;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.endDate; }, setValue: function (updateValue) { _this.endDate = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    EndDateRecurrenceRange.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.EndDate:
                    this.endDate = service.ConvertStartDateToUnspecifiedDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Setups the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    EndDateRecurrenceRange.prototype.SetupRecurrence = function (recurrence) {
        _super.prototype.SetupRecurrence.call(this, recurrence);
        recurrence.EndDate = this.EndDate;
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    EndDateRecurrenceRange.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EndDate, EwsUtilities_1.EwsUtilities.DateTimeToXSDate(this.EndDate));
    };
    return EndDateRecurrenceRange;
}(RecurrenceRange_1.RecurrenceRange));
exports.EndDateRecurrenceRange = EndDateRecurrenceRange;
