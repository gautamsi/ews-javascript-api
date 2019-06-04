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
var ArgumentException_1 = require("../../../Exceptions/ArgumentException");
var Strings_1 = require("../../../Strings");
var XmlElementNames_1 = require("../../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../../Enumerations/XmlNamespace");
var Recurrence_1 = require("./Recurrence");
/**
 * Represents a recurrence pattern where each occurrence happens at a specific interval after the previous one.
 */
var IntervalPattern = /** @class */ (function (_super) {
    __extends(IntervalPattern, _super);
    function IntervalPattern(startDate, interval) {
        if (interval === void 0) { interval = 1; }
        var _this = this;
        if (arguments.length === 0) {
            _this = _super.call(this) || this;
            _this.interval = 1;
            return;
        }
        _this = _super.call(this, startDate) || this;
        if (interval < 1) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("interval", Strings_1.Strings.IntervalMustBeGreaterOrEqualToOne);
        }
        _this.Interval = interval;
        return _this;
    }
    Object.defineProperty(IntervalPattern.prototype, "Interval", {
        /**
         * Gets or sets the interval between occurrences.
         */
        get: function () {
            return this.interval;
        },
        set: function (value) {
            var _this = this;
            if (value < 1) {
                throw new ArgumentException_1.ArgumentOutOfRangeException("value", Strings_1.Strings.IntervalMustBeGreaterOrEqualToOne);
            }
            this.SetFieldValue({ getValue: function () { return _this.interval; }, setValue: function (updateValue) { _this.interval = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    IntervalPattern.prototype.InternalWritePropertiesToXml = function (writer) {
        _super.prototype.InternalWritePropertiesToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Interval, this.Interval);
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    IntervalPattern.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Interval:
                    this.interval = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    return IntervalPattern;
}(Recurrence_1.Recurrence));
exports.IntervalPattern = IntervalPattern;
