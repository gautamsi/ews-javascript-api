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
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var RuleErrorCollection_1 = require("./RuleErrorCollection");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an error that occurred while processing a rule operation.
 *
 * @sealed
 */
var RuleOperationError = /** @class */ (function (_super) {
    __extends(RuleOperationError, _super);
    /**
     * @internal Initializes a new instance of the **RuleOperationError** class.
     */
    function RuleOperationError() {
        var _this = _super.call(this) || this;
        /**
         * Index of the operation mapping to the error.
         */
        _this.operationIndex = 0;
        /**
         * RuleOperation object mapping to the error.
         */
        _this.operation = null;
        /**
         * RuleError Collection.
         */
        _this.ruleErrors = null;
        return _this;
    }
    Object.defineProperty(RuleOperationError.prototype, "Operation", {
        /**
         * Gets the operation that resulted in an error.
         */
        get: function () {
            return this.operation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleOperationError.prototype, "Count", {
        /**
         * Gets the number of rule errors in the list.
         */
        get: function () {
            return this.ruleErrors.Count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the rule error at the specified index.
     *
     * @param   {number}   index   The index of the rule error to get.
     * @return  {RuleError}	The rule error at the specified index.
     */
    RuleOperationError.prototype._getItem = function (index) {
        if (index < 0 || index >= this.ruleErrors.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("Index");
        }
        return this.ruleErrors._getItem(index);
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.rules
     */
    RuleOperationError.prototype.GetEnumerator = function () {
        return this.ruleErrors.GetEnumerator();
    };
    /**
     * @internal Set operation property by the index of a given opeation enumerator.
     *
     * @param   {RuleOperation[]}   operations   Operation enumerator.
     */
    RuleOperationError.prototype.SetOperationByIndex = function (operations) {
        this.operation = operations[this.operationIndex];
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    RuleOperationError.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.OperationIndex:
                    this.operationIndex = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.ValidationErrors:
                    this.ruleErrors = new RuleErrorCollection_1.RuleErrorCollection();
                    this.ruleErrors.CreateFromXmlJsObjectCollection(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    return RuleOperationError;
}(ComplexProperty_1.ComplexProperty));
exports.RuleOperationError = RuleOperationError;
