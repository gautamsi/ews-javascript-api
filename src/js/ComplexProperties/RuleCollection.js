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
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var Rule_1 = require("./Rule");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a collection of rules.
 *
 * @sealed
 */
var RuleCollection = /** @class */ (function (_super) {
    __extends(RuleCollection, _super);
    /**
     * @internal Initializes a new instance of the **RuleCollection** class.
     */
    function RuleCollection() {
        var _this = _super.call(this) || this;
        /**
         * The OutlookRuleBlobExists flag.
         */
        _this.outlookRuleBlobExists = false;
        /**
         * The rules in the rule collection.
         */
        _this.rules = null;
        _this.rules = [];
        return _this;
    }
    Object.defineProperty(RuleCollection.prototype, "OutlookRuleBlobExists", {
        /**
         * Gets a value indicating whether an Outlook rule blob exists in the user's mailbox. To update rules with EWS when the Outlook rule blob exists, call SetInboxRules passing true as the value of the removeOutlookBlob parameter.
         */
        get: function () {
            return this.outlookRuleBlobExists;
        },
        set: function (value) {
            this.outlookRuleBlobExists = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleCollection.prototype, "Count", {
        /**
         * Gets the number of rules in this collection.
         */
        get: function () {
            return this.rules.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the rule at the specified index in the collection.
     *
     * @param   {number}   index   The index of the rule to get.
     * @return  {Rule}	The rule at the specified index.
     */
    RuleCollection.prototype._getItem = function (index) {
        if (index < 0 || index >= this.rules.length) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("Index");
        }
        return this.rules[index];
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.rules
     */
    RuleCollection.prototype.GetEnumerator = function () {
        return this.rules;
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    RuleCollection.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        var jsRules = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames_1.XmlElementNames.Rule);
        for (var _i = 0, jsRules_1 = jsRules; _i < jsRules_1.length; _i++) {
            var jsRule = jsRules_1[_i];
            var rule = new Rule_1.Rule();
            rule.LoadFromXmlJsObject(jsRule, service);
            this.rules.push(rule);
        }
    };
    return RuleCollection;
}(ComplexProperty_1.ComplexProperty));
exports.RuleCollection = RuleCollection;
