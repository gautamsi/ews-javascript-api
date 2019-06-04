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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var Rule_1 = require("./Rule");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var RuleOperation_1 = require("./RuleOperation");
/**
 * Represents an operation to update an existing rule.
 *
 * @sealed
 */
var SetRuleOperation = /** @class */ (function (_super) {
    __extends(SetRuleOperation, _super);
    function SetRuleOperation(rule) {
        if (rule === void 0) { rule = null; }
        var _this = _super.call(this) || this;
        _this.rule = rule;
        return _this;
    }
    Object.defineProperty(SetRuleOperation.prototype, "Rule", {
        /**
         * Gets or sets the rule to be updated.
         */
        get: function () {
            return this.rule;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.rule; }, setValue: function (updateValue) { _this.rule = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SetRuleOperation.prototype, "XmlElementName", {
        /**
         * @internal Gets the Xml element name of the SetRuleOperation object.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.SetRuleOperation;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    SetRuleOperation.prototype.InternalValidate = function () {
        EwsUtilities_1.EwsUtilities.ValidateParam(this.rule, "Rule");
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    SetRuleOperation.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Rule:
                    this.rule = new Rule_1.Rule();
                    this.rule.LoadFromXmlJsObject(jsObject[key], service);
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
    SetRuleOperation.prototype.WriteElementsToXml = function (writer) {
        this.Rule.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Rule);
    };
    return SetRuleOperation;
}(RuleOperation_1.RuleOperation));
exports.SetRuleOperation = SetRuleOperation;
