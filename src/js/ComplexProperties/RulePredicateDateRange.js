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
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the date and time range within which messages have been received.
 *
 * @sealed
 */
var RulePredicateDateRange = /** @class */ (function (_super) {
    __extends(RulePredicateDateRange, _super);
    /**
     * @internal Initializes a new instance of the **RulePredicateDateRange** class.
     */
    function RulePredicateDateRange() {
        var _this = _super.call(this) || this;
        /**
         * The start DateTime.
         */
        _this.start = null; //Nullable
        /**
         * The end DateTime.
         */
        _this.end = null; //Nullable
        return _this;
    }
    Object.defineProperty(RulePredicateDateRange.prototype, "Start", {
        /**
         * @Nullable Gets or sets the range start date and time.
         * If Start is set to null, no start date applies.
         */
        get: function () {
            return this.start;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.start; }, setValue: function (updateValue) { _this.start = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicateDateRange.prototype, "End", {
        /**
         * @Nullable Gets or sets the range end date and time.
         * If End is set to null, no end date applies.
         */
        get: function () {
            return this.end;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.end; }, setValue: function (updateValue) { _this.end = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    RulePredicateDateRange.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        if (this.start &&
            this.end &&
            this.start.TotalMilliSeconds > this.end.TotalMilliSeconds) {
            throw new ServiceValidationException_1.ServiceValidationException("Start date time cannot be bigger than end date time.");
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    RulePredicateDateRange.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.StartDateTime:
                    this.start = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.EndDateTime:
                    this.end = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    RulePredicateDateRange.prototype.WriteElementsToXml = function (writer) {
        if (this.Start) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.StartDateTime, this.Start);
        }
        if (this.End) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EndDateTime, this.End);
        }
    };
    return RulePredicateDateRange;
}(ComplexProperty_1.ComplexProperty));
exports.RulePredicateDateRange = RulePredicateDateRange;
