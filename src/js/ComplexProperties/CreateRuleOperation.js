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
var XmlElementNames_1 = require("../Core/XmlElementNames");
var RuleOperation_1 = require("./RuleOperation");
/**
 * Represents an operation to create a new rule.
 *
 * @sealed
 */
var CreateRuleOperation = /** @class */ (function (_super) {
    __extends(CreateRuleOperation, _super);
    function CreateRuleOperation(rule) {
        if (rule === void 0) { rule = null; }
        var _this = _super.call(this) || this;
        _this.rule = rule;
        return _this;
    }
    Object.defineProperty(CreateRuleOperation.prototype, "Rule", {
        /**
         * Gets or sets the rule to be created.
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
    Object.defineProperty(CreateRuleOperation.prototype, "XmlElementName", {
        /**
         * @internal Gets the Xml element name of the CreateRuleOperation object.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.CreateRuleOperation;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    CreateRuleOperation.prototype.InternalValidate = function () {
        EwsUtilities_1.EwsUtilities.ValidateParam(this.rule, "Rule");
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    CreateRuleOperation.prototype.WriteElementsToXml = function (writer) {
        this.Rule.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Rule);
    };
    return CreateRuleOperation;
}(RuleOperation_1.RuleOperation));
exports.CreateRuleOperation = CreateRuleOperation;
