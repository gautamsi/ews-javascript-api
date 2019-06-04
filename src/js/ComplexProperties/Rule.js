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
var RuleActions_1 = require("./RuleActions");
var RulePredicates_1 = require("./RulePredicates");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a rule that automatically handles incoming messages.
 * A rule consists of a set of conditions and exceptions that determine whether or not a set of actions should be executed on incoming messages.
 *
 * @sealed
 */
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    /**
     * Initializes a new instance of the **Rule** class.
     */
    function Rule() {
        var _this = _super.call(this) || this;
        /**
         * The rule ID.
         */
        _this.ruleId = null;
        /**
         * The rule display name.
         */
        _this.displayName = null;
        /**
         * The rule priority.
         */
        _this.priority = 0;
        /**
         * The rule status of enabled or not.
         */
        _this.isEnabled = false;
        /**
         * The rule status of is supported or not.
         */
        _this.isNotSupported = false;
        /**
         * The rule status of in error or not.
         */
        _this.isInError = false;
        /**
         * The rule conditions.
         */
        _this.conditions = null;
        /**
         * The rule actions.
         */
        _this.actions = null;
        /**
         * The rule exceptions.
         */
        _this.exceptions = null;
        //// New rule has priority as 0 by default //todo: fix 0 or 1 when it it changes in offical repo
        _this.priority = 1;
        //// New rule is enabled by default
        _this.isEnabled = true;
        _this.conditions = new RulePredicates_1.RulePredicates();
        _this.actions = new RuleActions_1.RuleActions();
        _this.exceptions = new RulePredicates_1.RulePredicates();
        return _this;
    }
    Object.defineProperty(Rule.prototype, "Id", {
        /**
         * Gets or sets the Id of this rule.
         */
        get: function () {
            return this.ruleId;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.Id; }, setValue: function (updateValue) { _this.Id = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "DisplayName", {
        /**
         * Gets or sets the name of this rule as it should be displayed to the user.
         */
        get: function () {
            return this.displayName;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.displayName; }, setValue: function (updateValue) { _this.displayName = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "Priority", {
        /**
         * Gets or sets the priority of this rule, which determines its execution order.
         */
        get: function () {
            return this.priority;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.priority; }, setValue: function (updateValue) { _this.priority = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "IsEnabled", {
        /**
         * Gets or sets a value indicating whether this rule is enabled.
         */
        get: function () {
            return this.isEnabled;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isEnabled; }, setValue: function (updateValue) { _this.isEnabled = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "IsNotSupported", {
        /**
         * Gets a value indicating whether this rule can be modified via EWS. If IsNotSupported is true, the rule cannot be modified via EWS.
         */
        get: function () {
            return this.isNotSupported;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "IsInError", {
        /**
         * Gets or sets a value indicating whether this rule has errors. A rule that is in error cannot be processed unless it is updated and the error is corrected.
         */
        get: function () {
            return this.isInError;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isInError; }, setValue: function (updateValue) { _this.isInError = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "Conditions", {
        /**
         * Gets the conditions that determine whether or not this rule should be executed against incoming messages.
         */
        get: function () {
            return this.conditions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "Actions", {
        /**
         * Gets the actions that should be executed against incoming messages if the conditions evaluate as true.
         */
        get: function () {
            return this.actions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "Exceptions", {
        /**
         * Gets the exceptions that determine if this rule should be skipped even if its conditions evaluate to true.
         */
        get: function () {
            return this.exceptions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    Rule.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.displayName, "DisplayName");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.conditions, "Conditions");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.exceptions, "Exceptions");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.actions, "Actions");
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    Rule.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.DisplayName:
                    this.displayName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.RuleId:
                    this.ruleId = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Priority:
                    this.priority = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsEnabled:
                    this.isEnabled = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsNotSupported:
                    this.isNotSupported = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsInError:
                    this.isInError = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Conditions:
                    this.conditions.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.Actions:
                    this.actions.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.Exceptions:
                    this.exceptions.LoadFromXmlJsObject(jsObject[key], service);
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
    Rule.prototype.WriteElementsToXml = function (writer) {
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Id)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.RuleId, this.Id);
        }
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DisplayName, this.DisplayName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Priority, this.Priority);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsEnabled, this.IsEnabled);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsInError, this.IsInError);
        this.Conditions.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Conditions);
        this.Exceptions.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Exceptions);
        this.Actions.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Actions);
    };
    return Rule;
}(ComplexProperty_1.ComplexProperty));
exports.Rule = Rule;
