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
var RuleErrorCode_1 = require("../Enumerations/RuleErrorCode");
var RuleProperty_1 = require("../Enumerations/RuleProperty");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an error that occurred as a result of executing a rule operation.
 *
 * @sealed
 */
var RuleError = /** @class */ (function (_super) {
    __extends(RuleError, _super);
    /**
     * @internal Initializes a new instance of the **RuleError** class.
     */
    function RuleError() {
        var _this = _super.call(this) || this;
        /**
         * Rule property.
         */
        _this.ruleProperty = RuleProperty_1.RuleProperty.RuleId;
        /**
         * Rule validation error code.
         */
        _this.errorCode = RuleErrorCode_1.RuleErrorCode.ADOperationFailure;
        /**
         * Error message.
         */
        _this.errorMessage = null;
        /**
         * Field value.
         */
        _this.value = null;
        return _this;
    }
    Object.defineProperty(RuleError.prototype, "RuleProperty", {
        /**
         * Gets the property which failed validation.
         */
        get: function () {
            return this.ruleProperty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleError.prototype, "ErrorCode", {
        /**
         * Gets the validation error code.
         */
        get: function () {
            return this.errorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleError.prototype, "ErrorMessage", {
        /**
         * Gets the error message.
         */
        get: function () {
            return this.errorMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleError.prototype, "Value", {
        /**
         * Gets the value that failed validation.
         */
        get: function () {
            return this.value;
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
    RuleError.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.FieldURI:
                    this.ruleProperty = RuleProperty_1.RuleProperty[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.ErrorCode:
                    this.errorCode = RuleErrorCode_1.RuleErrorCode[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.ErrorMessage:
                    this.errorMessage = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.FieldValue:
                    this.value = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    return RuleError;
}(ComplexProperty_1.ComplexProperty));
exports.RuleError = RuleError;
