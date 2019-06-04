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
var ComplexProperty_1 = require("../../ComplexProperty");
/**
 * @internal Represents recurrence range with start and end dates.
 */
var RecurrenceRange = /** @class */ (function (_super) {
    __extends(RecurrenceRange, _super);
    function RecurrenceRange(startDate) {
        if (startDate === void 0) { startDate = null; }
        var _this = _super.call(this) || this;
        _this.startDate = null;
        _this.recurrence = null;
        _this.startDate = startDate;
        return _this;
    }
    Object.defineProperty(RecurrenceRange.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RecurrenceRange.prototype, "Recurrence", {
        /**
         * @internal Gets or sets the recurrence.
         *
         * @value   The recurrence.
         */
        get: function () {
            return this.recurrence;
        },
        set: function (value) {
            this.recurrence = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecurrenceRange.prototype, "StartDate", {
        /**
         * @internal Gets or sets the start date.
         *
         * @value   The start date.
         */
        get: function () {
            return this.startDate;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.startDate; }, setValue: function (updateValue) { _this.startDate = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Changes handler.
     */
    RecurrenceRange.prototype.Changed = function () {
        if (this.Recurrence != null) {
            this.Recurrence.Changed();
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    RecurrenceRange.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.StartDate:
                    var startDate = service.ConvertStartDateToUnspecifiedDateTime(jsObject[key]);
                    if (startDate) {
                        this.startDate = startDate;
                    }
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Setup the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    RecurrenceRange.prototype.SetupRecurrence = function (recurrence) { recurrence.StartDate = this.StartDate; };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    RecurrenceRange.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.StartDate, EwsUtilities_1.EwsUtilities.DateTimeToXSDate(this.StartDate));
    };
    return RecurrenceRange;
}(ComplexProperty_1.ComplexProperty));
exports.RecurrenceRange = RecurrenceRange;
