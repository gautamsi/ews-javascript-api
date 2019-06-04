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
var ExtensionMethods_1 = require("../ExtensionMethods");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the minimum and maximum size of a message.
 *
 * @sealed
 */
var RulePredicateSizeRange = /** @class */ (function (_super) {
    __extends(RulePredicateSizeRange, _super);
    /**
     * @internal Initializes a new instance of the **RulePredicateSizeRange** class.
     */
    function RulePredicateSizeRange() {
        var _this = _super.call(this) || this;
        /**
         * Minimum Size.
         */
        _this.minimumSize = null; //Nullable
        /**
         * Mamixmum Size.
         */
        _this.maximumSize = null; //Nullable
        return _this;
    }
    Object.defineProperty(RulePredicateSizeRange.prototype, "MinimumSize", {
        /**
         * @Nullable Gets or sets the minimum size, in kilobytes.
         * If MinimumSize is set to null, no minimum size applies.
         */
        get: function () {
            return this.minimumSize;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.minimumSize; }, setValue: function (updateValue) { _this.minimumSize = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicateSizeRange.prototype, "MaximumSize", {
        /**
         * @Nullable Gets or sets the maximum size, in kilobytes.
         * If MaximumSize is set to null, no maximum size applies.
         */
        get: function () {
            return this.maximumSize;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.maximumSize; }, setValue: function (updateValue) { _this.maximumSize = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    RulePredicateSizeRange.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        if (this.minimumSize &&
            this.maximumSize &&
            this.minimumSize > this.maximumSize) {
            throw new ServiceValidationException_1.ServiceValidationException("MinimumSize cannot be larger than MaximumSize.");
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    RulePredicateSizeRange.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.MinimumSize:
                    this.minimumSize = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.MaximumSize:
                    this.maximumSize = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
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
    RulePredicateSizeRange.prototype.WriteElementsToXml = function (writer) {
        if (this.MinimumSize) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MinimumSize, this.MinimumSize);
        }
        if (this.MaximumSize) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MaximumSize, this.MaximumSize);
        }
    };
    return RulePredicateSizeRange;
}(ComplexProperty_1.ComplexProperty));
exports.RulePredicateSizeRange = RulePredicateSizeRange;
