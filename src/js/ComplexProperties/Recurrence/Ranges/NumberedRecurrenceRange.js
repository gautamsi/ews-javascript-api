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
var ExtensionMethods_1 = require("../../../ExtensionMethods");
var XmlElementNames_1 = require("../../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../../Enumerations/XmlNamespace");
var RecurrenceRange_1 = require("./RecurrenceRange");
/**
 * @internal Represents recurrence range with start and number of occurance.
 */
var NumberedRecurrenceRange = /** @class */ (function (_super) {
    __extends(NumberedRecurrenceRange, _super);
    function NumberedRecurrenceRange(startDate, numberOfOccurrences) {
        if (startDate === void 0) { startDate = null; }
        if (numberOfOccurrences === void 0) { numberOfOccurrences = null; }
        var _this = this;
        if (arguments.length === 0) {
            _this = _super.call(this) || this;
            return;
        }
        _this = _super.call(this, startDate) || this;
        _this.numberOfOccurrences = numberOfOccurrences;
        return _this;
    }
    Object.defineProperty(NumberedRecurrenceRange.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.NumberedRecurrence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberedRecurrenceRange.prototype, "NumberOfOccurrences", {
        /**
         * Gets or sets the number of occurrences.
         *
         * @value   The number of occurrences.
         */
        get: function () {
            return this.numberOfOccurrences;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.numberOfOccurrences; }, setValue: function (updateValue) { _this.numberOfOccurrences = updateValue; } }, value);
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
    NumberedRecurrenceRange.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NumberOfOccurrences:
                    this.numberOfOccurrences = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Setups the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    NumberedRecurrenceRange.prototype.SetupRecurrence = function (recurrence) {
        _super.prototype.SetupRecurrence.call(this, recurrence);
        recurrence.NumberOfOccurrences = this.NumberOfOccurrences;
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    NumberedRecurrenceRange.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        if (this.NumberOfOccurrences) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.NumberOfOccurrences, this.NumberOfOccurrences);
        }
    };
    return NumberedRecurrenceRange;
}(RecurrenceRange_1.RecurrenceRange));
exports.NumberedRecurrenceRange = NumberedRecurrenceRange;
