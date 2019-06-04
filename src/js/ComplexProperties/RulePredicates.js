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
var EmailAddressCollection_1 = require("./EmailAddressCollection");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var FlaggedForAction_1 = require("../Enumerations/FlaggedForAction");
var Importance_1 = require("../Enumerations/Importance");
var RulePredicateDateRange_1 = require("./RulePredicateDateRange");
var RulePredicateSizeRange_1 = require("./RulePredicateSizeRange");
var Sensitivity_1 = require("../Enumerations/Sensitivity");
var StringList_1 = require("./StringList");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the set of conditions and exceptions available for a rule.
 *
 * @sealed
 */
var RulePredicates = /** @class */ (function (_super) {
    __extends(RulePredicates, _super);
    /**
     * @internal Initializes a new instance of the **RulePredicates** class.
     */
    function RulePredicates() {
        var _this = _super.call(this) || this;
        /**
         * The HasCategories predicate.
         */
        _this.categories = null;
        /**
         * The ContainsBodyStrings predicate.
         */
        _this.containsBodyStrings = null;
        /**
         * The ContainsHeaderStrings predicate.
         */
        _this.containsHeaderStrings = null;
        /**
         * The ContainsRecipientStrings predicate.
         */
        _this.containsRecipientStrings = null;
        /**
         * The ContainsSenderStrings predicate.
         */
        _this.containsSenderStrings = null;
        /**
         * The ContainsSubjectOrBodyStrings predicate.
         */
        _this.containsSubjectOrBodyStrings = null;
        /**
         * The ContainsSubjectStrings predicate.
         */
        _this.containsSubjectStrings = null;
        /**
         * The FlaggedForAction predicate.
         */
        _this.flaggedForAction = null; //Nullable
        /**
         * The FromAddresses predicate.
         */
        _this.fromAddresses = null;
        /**
         * The FromConnectedAccounts predicate.
         */
        _this.fromConnectedAccounts = null;
        /**
         * The HasAttachments predicate.
         */
        _this.hasAttachments = false;
        /**
         * The Importance predicate.
         */
        _this.importance = null; //Nullable
        /**
         * The IsApprovalRequest predicate.
         */
        _this.isApprovalRequest = false;
        /**
         * The IsAutomaticForward predicate.
         */
        _this.isAutomaticForward = false;
        /**
         * The IsAutomaticReply predicate.
         */
        _this.isAutomaticReply = false;
        /**
         * The IsEncrypted predicate.
         */
        _this.isEncrypted = false;
        /**
         * The IsMeetingRequest predicate.
         */
        _this.isMeetingRequest = false;
        /**
         * The IsMeetingResponse predicate.
         */
        _this.isMeetingResponse = false;
        /**
         * The IsNDR predicate.
         */
        _this.isNonDeliveryReport = false;
        /**
         * The IsPermissionControlled predicate.
         */
        _this.isPermissionControlled = false;
        /**
         * The IsSigned predicate.
         */
        _this.isSigned = false;
        /**
         * The IsVoicemail predicate.
         */
        _this.isVoicemail = false;
        /**
         * The IsReadReceipt predicate.
         */
        _this.isReadReceipt = false;
        /**
         * The ItemClasses predicate.
         */
        _this.itemClasses = null;
        /**
         * The MessageClassifications predicate.
         */
        _this.messageClassifications = null;
        /**
         * The NotSentToMe predicate.
         */
        _this.notSentToMe = false;
        /**
         * The SentCcMe predicate.
         */
        _this.sentCcMe = false;
        /**
         * The SentOnlyToMe predicate.
         */
        _this.sentOnlyToMe = false;
        /**
         * The SentToAddresses predicate.
         */
        _this.sentToAddresses = null;
        /**
         * The SentToMe predicate.
         */
        _this.sentToMe = false;
        /**
         * The SentToOrCcMe predicate.
         */
        _this.sentToOrCcMe = false;
        /**
         * The Sensitivity predicate.
         */
        _this.sensitivity = null; //Nullable
        /**
         * The WithinDateRange predicate.
         */
        _this.withinDateRange = null;
        /**
         * The WithinSizeRange predicate.
         */
        _this.withinSizeRange = null;
        _this.categories = new StringList_1.StringList();
        _this.containsBodyStrings = new StringList_1.StringList();
        _this.containsHeaderStrings = new StringList_1.StringList();
        _this.containsRecipientStrings = new StringList_1.StringList();
        _this.containsSenderStrings = new StringList_1.StringList();
        _this.containsSubjectOrBodyStrings = new StringList_1.StringList();
        _this.containsSubjectStrings = new StringList_1.StringList();
        _this.fromAddresses = new EmailAddressCollection_1.EmailAddressCollection(XmlElementNames_1.XmlElementNames.Address);
        _this.fromConnectedAccounts = new StringList_1.StringList();
        _this.itemClasses = new StringList_1.StringList();
        _this.messageClassifications = new StringList_1.StringList();
        _this.sentToAddresses = new EmailAddressCollection_1.EmailAddressCollection(XmlElementNames_1.XmlElementNames.Address);
        _this.withinDateRange = new RulePredicateDateRange_1.RulePredicateDateRange();
        _this.withinSizeRange = new RulePredicateSizeRange_1.RulePredicateSizeRange();
        return _this;
    }
    Object.defineProperty(RulePredicates.prototype, "Categories", {
        /**
         * Gets the categories that an incoming message should be stamped with for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.categories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "ContainsBodyStrings", {
        /**
         * Gets the strings that should appear in the body of incoming messages for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.containsBodyStrings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "ContainsHeaderStrings", {
        /**
         * Gets the strings that should appear in the headers of incoming messages for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.containsHeaderStrings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "ContainsRecipientStrings", {
        /**
         * Gets the strings that should appear in either the To or Cc fields of incoming messages for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.containsRecipientStrings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "ContainsSenderStrings", {
        /**
         * Gets the strings that should appear in the From field of incoming messages for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.containsSenderStrings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "ContainsSubjectOrBodyStrings", {
        /**
         * Gets the strings that should appear in either the body or the subject of incoming messages for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.containsSubjectOrBodyStrings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "ContainsSubjectStrings", {
        /**
         * Gets the strings that should appear in the subject of incoming messages for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.containsSubjectStrings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "FlaggedForAction", {
        /**
         * @Nullable Gets or sets the flag for action value that should appear on incoming messages for the condition or execption to apply.
         * To disable this predicate, set it to null.
         */
        get: function () {
            return this.flaggedForAction;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.flaggedForAction; }, setValue: function (updateValue) { _this.flaggedForAction = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "FromAddresses", {
        /**
         * Gets the e-mail addresses of the senders of incoming messages for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.fromAddresses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "HasAttachments", {
        /**
         * Gets or sets a value indicating whether incoming messages must have attachments for the condition or exception to apply.
         */
        get: function () {
            return this.hasAttachments;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.hasAttachments; }, setValue: function (updateValue) { _this.hasAttachments = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "Importance", {
        /**
         * @Nullable Gets or sets the importance that should be stamped on incoming messages for the condition or exception to apply.
         * To disable this predicate, set it to null.
         */
        get: function () {
            return this.importance;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.importance; }, setValue: function (updateValue) { _this.importance = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsApprovalRequest", {
        /**
         * Gets or sets a value indicating whether incoming messages must be approval requests for the condition or exception to apply.
         */
        get: function () {
            return this.isApprovalRequest;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isApprovalRequest; }, setValue: function (updateValue) { _this.isApprovalRequest = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsAutomaticForward", {
        /**
         * Gets or sets a value indicating whether incoming messages must be automatic forwards for the condition or exception to apply.
         */
        get: function () {
            return this.isAutomaticForward;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isAutomaticForward; }, setValue: function (updateValue) { _this.isAutomaticForward = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsAutomaticReply", {
        /**
         * Gets or sets a value indicating whether incoming messages must be automatic replies for the condition or exception to apply.
         */
        get: function () {
            return this.isAutomaticReply;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isAutomaticReply; }, setValue: function (updateValue) { _this.isAutomaticReply = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsEncrypted", {
        /**
         * Gets or sets a value indicating whether incoming messages must be S/MIME encrypted for the condition or exception to apply.
         */
        get: function () {
            return this.isEncrypted;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isEncrypted; }, setValue: function (updateValue) { _this.isEncrypted = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsMeetingRequest", {
        /**
         * Gets or sets a value indicating whether incoming messages must be meeting requests for the condition or exception to apply.
         */
        get: function () {
            return this.isMeetingRequest;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isMeetingRequest; }, setValue: function (updateValue) { _this.isMeetingRequest = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsMeetingResponse", {
        /**
         * Gets or sets a value indicating whether incoming messages must be meeting responses for the condition or exception to apply.
         */
        get: function () {
            return this.isMeetingResponse;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isMeetingResponse; }, setValue: function (updateValue) { _this.isMeetingResponse = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsNonDeliveryReport", {
        /**
         * Gets or sets a value indicating whether incoming messages must be non-delivery reports (NDR) for the condition or exception to apply.
         */
        get: function () {
            return this.isNonDeliveryReport;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isNonDeliveryReport; }, setValue: function (updateValue) { _this.isNonDeliveryReport = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsPermissionControlled", {
        /**
         * Gets or sets a value indicating whether incoming messages must be permission controlled (RMS protected) for the condition or exception to apply.
         */
        get: function () {
            return this.isPermissionControlled;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isPermissionControlled; }, setValue: function (updateValue) { _this.isPermissionControlled = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsSigned", {
        /**
         * Gets or sets a value indicating whether incoming messages must be S/MIME signed for the condition or exception to apply.
         */
        get: function () {
            return this.isSigned;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isSigned; }, setValue: function (updateValue) { _this.isSigned = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsVoicemail", {
        /**
         * Gets or sets a value indicating whether incoming messages must be voice mails for the condition or exception to apply.
         */
        get: function () {
            return this.isVoicemail;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isVoicemail; }, setValue: function (updateValue) { _this.isVoicemail = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "IsReadReceipt", {
        /**
         * Gets or sets a value indicating whether incoming messages must be read receipts for the condition or exception to apply.
         */
        get: function () {
            return this.isReadReceipt;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isReadReceipt; }, setValue: function (updateValue) { _this.isReadReceipt = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "FromConnectedAccounts", {
        /**
         * Gets the e-mail account names from which incoming messages must have been aggregated for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.fromConnectedAccounts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "ItemClasses", {
        /**
         * Gets the item classes that must be stamped on incoming messages for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.itemClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "MessageClassifications", {
        /**
         * Gets the message classifications that must be stamped on incoming messages for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.messageClassifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "NotSentToMe", {
        /**
         * Gets or sets a value indicating whether the owner of the mailbox must NOT be a To recipient of the incoming messages for the condition or exception to apply.
         */
        get: function () {
            return this.notSentToMe;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.notSentToMe; }, setValue: function (updateValue) { _this.notSentToMe = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "SentCcMe", {
        /**
         * Gets or sets a value indicating whether the owner of the mailbox must be a Cc recipient of incoming messages for the condition or exception to apply.
         */
        get: function () {
            return this.sentCcMe;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.sentCcMe; }, setValue: function (updateValue) { _this.sentCcMe = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "SentOnlyToMe", {
        /**
         * Gets or sets a value indicating whether the owner of the mailbox must be the only To recipient of incoming messages for the condition or exception to apply.
         */
        get: function () {
            return this.sentOnlyToMe;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.sentOnlyToMe; }, setValue: function (updateValue) { _this.sentOnlyToMe = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "SentToAddresses", {
        /**
         * Gets the e-mail addresses incoming messages must have been sent to for the condition or exception to apply.
         * To disable this predicate, empty the list.
         */
        get: function () {
            return this.sentToAddresses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "SentToMe", {
        /**
         * Gets or sets a value indicating whether the owner of the mailbox must be a To recipient of incoming messages for the condition or exception to apply.
         */
        get: function () {
            return this.sentToMe;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.sentToMe; }, setValue: function (updateValue) { _this.sentToMe = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "SentToOrCcMe", {
        /**
         * Gets or sets a value indicating whether the owner of the mailbox must be either a To or Cc recipient of incoming messages for the condition or exception to apply.
         */
        get: function () {
            return this.sentToOrCcMe;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.sentToOrCcMe; }, setValue: function (updateValue) { _this.sentToOrCcMe = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "Sensitivity", {
        /**
         * @Nullable Gets or sets the sensitivity that must be stamped on incoming messages for the condition or exception to apply.
         * To disable this predicate, set it to null.
         */
        get: function () {
            return this.sensitivity;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.sensitivity; }, setValue: function (updateValue) { _this.sensitivity = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "WithinDateRange", {
        /**
         * Gets the date range within which incoming messages must have been received for the condition or exception to apply.
         * To disable this predicate, set both its Start and End properties to null.
         */
        get: function () {
            return this.withinDateRange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulePredicates.prototype, "WithinSizeRange", {
        /**
         * Gets the minimum and maximum sizes incoming messages must have for the condition or exception to apply.
         * To disable this predicate, set both its MinimumSize and MaximumSize properties to null.
         */
        get: function () {
            return this.withinSizeRange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    RulePredicates.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.fromAddresses, "FromAddresses");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.sentToAddresses, "SentToAddresses");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.withinDateRange, "WithinDateRange");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.withinSizeRange, "WithinSizeRange");
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    RulePredicates.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Categories:
                    this.categories.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ContainsBodyStrings:
                    this.containsBodyStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ContainsHeaderStrings:
                    this.containsHeaderStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ContainsRecipientStrings:
                    this.containsRecipientStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ContainsSenderStrings:
                    this.containsSenderStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ContainsSubjectOrBodyStrings:
                    this.containsSubjectOrBodyStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ContainsSubjectStrings:
                    this.containsSubjectStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.FlaggedForAction:
                    this.flaggedForAction = FlaggedForAction_1.FlaggedForAction[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.FromAddresses:
                    this.fromAddresses.CreateFromXmlJsObjectCollection(jsObject[key][XmlElementNames_1.XmlElementNames.Address], service);
                    break;
                case XmlElementNames_1.XmlElementNames.FromConnectedAccounts:
                    this.fromConnectedAccounts.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.HasAttachments:
                    this.hasAttachments = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Importance:
                    this.importance = Importance_1.Importance[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.IsApprovalRequest:
                    this.isApprovalRequest = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsAutomaticForward:
                    this.isAutomaticForward = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsAutomaticReply:
                    this.isAutomaticReply = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsEncrypted:
                    this.isEncrypted = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsMeetingRequest:
                    this.isMeetingRequest = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsMeetingResponse:
                    this.isMeetingResponse = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsNDR:
                    this.isNonDeliveryReport = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsPermissionControlled:
                    this.isPermissionControlled = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsSigned:
                    this.isSigned = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsVoicemail:
                    this.isVoicemail = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsReadReceipt:
                    this.isReadReceipt = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.ItemClasses:
                    this.itemClasses.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.MessageClassifications:
                    this.messageClassifications.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.NotSentToMe:
                    this.notSentToMe = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.SentCcMe:
                    this.sentCcMe = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.SentOnlyToMe:
                    this.sentOnlyToMe = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.SentToAddresses:
                    this.sentToAddresses.CreateFromXmlJsObjectCollection(jsObject[key][XmlElementNames_1.XmlElementNames.Address], service);
                    break;
                case XmlElementNames_1.XmlElementNames.SentToMe:
                    this.sentToMe = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.SentToOrCcMe:
                    this.sentToOrCcMe = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Sensitivity:
                    this.sensitivity = Sensitivity_1.Sensitivity[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.WithinDateRange:
                    this.withinDateRange.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.WithinSizeRange:
                    this.withinSizeRange.LoadFromXmlJsObject(jsObject[key], service);
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
    RulePredicates.prototype.WriteElementsToXml = function (writer) {
        if (this.Categories.Count > 0) {
            this.Categories.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Categories);
        }
        if (this.ContainsBodyStrings.Count > 0) {
            this.ContainsBodyStrings.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ContainsBodyStrings);
        }
        if (this.ContainsHeaderStrings.Count > 0) {
            this.ContainsHeaderStrings.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ContainsHeaderStrings);
        }
        if (this.ContainsRecipientStrings.Count > 0) {
            this.ContainsRecipientStrings.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ContainsRecipientStrings);
        }
        if (this.ContainsSenderStrings.Count > 0) {
            this.ContainsSenderStrings.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ContainsSenderStrings);
        }
        if (this.ContainsSubjectOrBodyStrings.Count > 0) {
            this.ContainsSubjectOrBodyStrings.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ContainsSubjectOrBodyStrings);
        }
        if (this.ContainsSubjectStrings.Count > 0) {
            this.ContainsSubjectStrings.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ContainsSubjectStrings);
        }
        if (this.FlaggedForAction) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FlaggedForAction, FlaggedForAction_1.FlaggedForAction[this.FlaggedForAction]);
        }
        if (this.FromAddresses.Count > 0) {
            this.FromAddresses.WriteToXml(writer, XmlElementNames_1.XmlElementNames.FromAddresses);
        }
        if (this.FromConnectedAccounts.Count > 0) {
            this.FromConnectedAccounts.WriteToXml(writer, XmlElementNames_1.XmlElementNames.FromConnectedAccounts);
        }
        if (this.HasAttachments != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.HasAttachments, this.HasAttachments);
        }
        if (this.Importance) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Importance, Importance_1.Importance[this.Importance]);
        }
        if (this.IsApprovalRequest != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsApprovalRequest, this.IsApprovalRequest);
        }
        if (this.IsAutomaticForward != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsAutomaticForward, this.IsAutomaticForward);
        }
        if (this.IsAutomaticReply != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsAutomaticReply, this.IsAutomaticReply);
        }
        if (this.IsEncrypted != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsEncrypted, this.IsEncrypted);
        }
        if (this.IsMeetingRequest != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsMeetingRequest, this.IsMeetingRequest);
        }
        if (this.IsMeetingResponse != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsMeetingResponse, this.IsMeetingResponse);
        }
        if (this.IsNonDeliveryReport != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsNDR, this.IsNonDeliveryReport);
        }
        if (this.IsPermissionControlled != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsPermissionControlled, this.IsPermissionControlled);
        }
        if (this.isReadReceipt != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsReadReceipt, this.IsReadReceipt);
        }
        if (this.IsSigned != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsSigned, this.IsSigned);
        }
        if (this.IsVoicemail != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsVoicemail, this.IsVoicemail);
        }
        if (this.ItemClasses.Count > 0) {
            this.ItemClasses.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ItemClasses);
        }
        if (this.MessageClassifications.Count > 0) {
            this.MessageClassifications.WriteToXml(writer, XmlElementNames_1.XmlElementNames.MessageClassifications);
        }
        if (this.NotSentToMe != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.NotSentToMe, this.NotSentToMe);
        }
        if (this.SentCcMe != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SentCcMe, this.SentCcMe);
        }
        if (this.SentOnlyToMe != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SentOnlyToMe, this.SentOnlyToMe);
        }
        if (this.SentToAddresses.Count > 0) {
            this.SentToAddresses.WriteToXml(writer, XmlElementNames_1.XmlElementNames.SentToAddresses);
        }
        if (this.SentToMe != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SentToMe, this.SentToMe);
        }
        if (this.SentToOrCcMe != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SentToOrCcMe, this.SentToOrCcMe);
        }
        if (this.Sensitivity) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Sensitivity, Sensitivity_1.Sensitivity[this.Sensitivity]);
        }
        if (this.WithinDateRange.Start || this.WithinDateRange.End) {
            this.WithinDateRange.WriteToXml(writer, XmlElementNames_1.XmlElementNames.WithinDateRange);
        }
        if (this.WithinSizeRange.MaximumSize || this.WithinSizeRange.MinimumSize) {
            this.WithinSizeRange.WriteToXml(writer, XmlElementNames_1.XmlElementNames.WithinSizeRange);
        }
    };
    return RulePredicates;
}(ComplexProperty_1.ComplexProperty));
exports.RulePredicates = RulePredicates;
