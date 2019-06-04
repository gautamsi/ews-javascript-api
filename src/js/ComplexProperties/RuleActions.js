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
var EmailAddress_1 = require("./EmailAddress");
var EmailAddressCollection_1 = require("./EmailAddressCollection");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var FolderId_1 = require("./FolderId");
var Importance_1 = require("../Enumerations/Importance");
var ItemId_1 = require("./ItemId");
var MobilePhone_1 = require("../Misc/MobilePhone");
var StringList_1 = require("./StringList");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the set of actions available for a rule.
 *
 * @sealed
 */
var RuleActions = /** @class */ (function (_super) {
    __extends(RuleActions, _super);
    /**
     * @internal Initializes a new instance of the **RuleActions** class.
     */
    function RuleActions() {
        var _this = _super.call(this) || this;
        /**
         * The AssignCategories action.
         */
        _this.assignCategories = null;
        /**
         * The CopyToFolder action.
         */
        _this.copyToFolder = null;
        /**
         * The Delete action.
         */
        _this.delete = false;
        /**
         * The ForwardAsAttachmentToRecipients action.
         */
        _this.forwardAsAttachmentToRecipients = null;
        /**
         * The ForwardToRecipients action.
         */
        _this.forwardToRecipients = null;
        /**
         * The MarkImportance action.
         */
        _this.markImportance = null; //Nullable
        /**
         * The MarkAsRead action.
         */
        _this.markAsRead = false;
        /**
         * The MoveToFolder action.
         */
        _this.moveToFolder = null;
        /**
         * The PermanentDelete action.
         */
        _this.permanentDelete = false;
        /**
         * The RedirectToRecipients action.
         */
        _this.redirectToRecipients = null;
        /**
         * The SendSMSAlertToRecipients action.
         */
        _this.sendSMSAlertToRecipients = null;
        /**
         * The ServerReplyWithMessage action.
         */
        _this.serverReplyWithMessage = null;
        /**
         * The StopProcessingRules action.
         */
        _this.stopProcessingRules = false;
        _this.assignCategories = new StringList_1.StringList();
        _this.forwardAsAttachmentToRecipients = new EmailAddressCollection_1.EmailAddressCollection(XmlElementNames_1.XmlElementNames.Address);
        _this.forwardToRecipients = new EmailAddressCollection_1.EmailAddressCollection(XmlElementNames_1.XmlElementNames.Address);
        _this.redirectToRecipients = new EmailAddressCollection_1.EmailAddressCollection(XmlElementNames_1.XmlElementNames.Address);
        _this.sendSMSAlertToRecipients = [];
        return _this;
    }
    Object.defineProperty(RuleActions.prototype, "AssignCategories", {
        /**
         * Gets the categories that should be stamped on incoming messages.
         * To disable stamping incoming messages with categories, set AssignCategories to null.
         */
        get: function () {
            return this.assignCategories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "CopyToFolder", {
        /**
         * Gets or sets the Id of the folder incoming messages should be copied to.
         * To disable copying incoming messages to a folder, set CopyToFolder to null.
         */
        get: function () {
            return this.copyToFolder;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.copyToFolder; }, setValue: function (updateValue) { _this.copyToFolder = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "Delete", {
        /**
         * Gets or sets a value indicating whether incoming messages should be automatically moved to the Deleted Items folder.
         */
        get: function () {
            return this.delete;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.delete; }, setValue: function (updateValue) { _this.delete = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "ForwardAsAttachmentToRecipients", {
        /**
         * Gets the e-mail addresses to which incoming messages should be forwarded as attachments.
         * To disable forwarding incoming messages as attachments, empty the ForwardAsAttachmentToRecipients list.
         */
        get: function () {
            return this.forwardAsAttachmentToRecipients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "ForwardToRecipients", {
        /**
         * Gets the e-mail addresses to which incoming messages should be forwarded.
         * To disable forwarding incoming messages, empty the ForwardToRecipients list.
         */
        get: function () {
            return this.forwardToRecipients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "MarkImportance", {
        /**
         * @Nullable Gets or sets the importance that should be stamped on incoming messages.
         * To disable the stamping of incoming messages with an importance, set MarkImportance to null.
         */
        get: function () {
            return this.markImportance;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.markImportance; }, setValue: function (updateValue) { _this.markImportance = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "MarkAsRead", {
        /**
         * Gets or sets a value indicating whether incoming messages should be marked as read.
         */
        get: function () {
            return this.markAsRead;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.markAsRead; }, setValue: function (updateValue) { _this.markAsRead = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "MoveToFolder", {
        /**
         * Gets or sets the Id of the folder to which incoming messages should be moved.
         * To disable the moving of incoming messages to a folder, set CopyToFolder to null.
         */
        get: function () {
            return this.moveToFolder;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.moveToFolder; }, setValue: function (updateValue) { _this.moveToFolder = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "PermanentDelete", {
        /**
         * Gets or sets a value indicating whether incoming messages should be permanently deleted. When a message is permanently deleted, it is never saved into the recipient's mailbox. To delete a message after it has been saved into the recipient's mailbox, use the Delete action.
         */
        get: function () {
            return this.permanentDelete;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.permanentDelete; }, setValue: function (updateValue) { _this.permanentDelete = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "RedirectToRecipients", {
        /**
         * Gets the e-mail addresses to which incoming messages should be redirecteded.
         * To disable redirection of incoming messages, empty the RedirectToRecipients list. Unlike forwarded mail, redirected mail maintains the original sender and recipients.
         */
        get: function () {
            return this.redirectToRecipients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "SendSMSAlertToRecipients", {
        /**
         * Gets the phone numbers to which an SMS alert should be sent.
         * To disable sending SMS alerts for incoming messages, empty the SendSMSAlertToRecipients list.
         */
        get: function () {
            return this.sendSMSAlertToRecipients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "ServerReplyWithMessage", {
        /**
         * Gets or sets the Id of the template message that should be sent as a reply to incoming messages.
         * To disable automatic replies, set ServerReplyWithMessage to null.
         */
        get: function () {
            return this.serverReplyWithMessage;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.serverReplyWithMessage; }, setValue: function (updateValue) { _this.serverReplyWithMessage = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleActions.prototype, "StopProcessingRules", {
        /**
         * Gets or sets a value indicating whether subsequent rules should be evaluated.
         */
        get: function () {
            return this.stopProcessingRules;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.stopProcessingRules; }, setValue: function (updateValue) { _this.stopProcessingRules = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Convert the SMS recipient list from EmailAddressCollection type to MobilePhone collection type.
     *
     * @param   {EmailAddressCollection}   emailCollection   Recipient list in EmailAddressCollection type.
     * @return  {MobilePhone[]}		A MobilePhone collection object containing all SMS recipient in MobilePhone type.
     */
    RuleActions.ConvertSMSRecipientsFromEmailAddressCollectionToMobilePhoneCollection = function (emailCollection) {
        var mobilePhoneCollection = [];
        for (var _i = 0, _a = emailCollection.Items; _i < _a.length; _i++) {
            var emailAddress = _a[_i];
            mobilePhoneCollection.push(new MobilePhone_1.MobilePhone(emailAddress.Name, emailAddress.Address));
        }
        return mobilePhoneCollection;
    };
    /**
     * Convert the SMS recipient list from MobilePhone collection type to EmailAddressCollection type.
     *
     * @param   {MobilePhone[]}   recipientCollection   Recipient list in a MobilePhone collection type.
     * @return  {EmailAddressCollection}		An EmailAddressCollection object containing recipients with "MOBILE" address type.
     */
    RuleActions.ConvertSMSRecipientsFromMobilePhoneCollectionToEmailAddressCollection = function (recipientCollection) {
        var emailCollection = new EmailAddressCollection_1.EmailAddressCollection(XmlElementNames_1.XmlElementNames.Address);
        for (var _i = 0, recipientCollection_1 = recipientCollection; _i < recipientCollection_1.length; _i++) {
            var recipient = recipientCollection_1[_i];
            var emailAddress = new EmailAddress_1.EmailAddress(recipient.Name, recipient.PhoneNumber, RuleActions.MobileType);
            emailCollection.Add(emailAddress);
        }
        return emailCollection;
    };
    /**
     * @internal Validates this instance.
     */
    RuleActions.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.forwardAsAttachmentToRecipients, "ForwardAsAttachmentToRecipients");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.forwardToRecipients, "ForwardToRecipients");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.redirectToRecipients, "RedirectToRecipients");
        for (var _i = 0, _a = this.sendSMSAlertToRecipients; _i < _a.length; _i++) {
            var sendSMSAlertToRecipient = _a[_i];
            EwsUtilities_1.EwsUtilities.ValidateParam(sendSMSAlertToRecipient, "SendSMSAlertToRecipient");
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    RuleActions.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.AssignCategories:
                    this.assignCategories.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.CopyToFolder:
                    this.copyToFolder = new FolderId_1.FolderId();
                    this.copyToFolder.LoadFromXmlJsObject(jsObject[key][XmlElementNames_1.XmlElementNames.FolderId], service);
                    break;
                case XmlElementNames_1.XmlElementNames.Delete:
                    this.delete = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.ForwardAsAttachmentToRecipients:
                    this.forwardAsAttachmentToRecipients.LoadFromXmlJsObject(jsObject[key][XmlElementNames_1.XmlElementNames.Address], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ForwardToRecipients:
                    this.forwardToRecipients.LoadFromXmlJsObject(jsObject[key][XmlElementNames_1.XmlElementNames.Address], service);
                    break;
                case XmlElementNames_1.XmlElementNames.MarkImportance:
                    this.markImportance = Importance_1.Importance[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.MarkAsRead:
                    this.markAsRead = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.MoveToFolder:
                    this.moveToFolder = new FolderId_1.FolderId();
                    this.moveToFolder.LoadFromXmlJsObject(jsObject[key][XmlElementNames_1.XmlElementNames.FolderId], service);
                    break;
                case XmlElementNames_1.XmlElementNames.PermanentDelete:
                    this.permanentDelete = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.RedirectToRecipients:
                    this.redirectToRecipients.LoadFromXmlJsObject(jsObject[key][XmlElementNames_1.XmlElementNames.Address], service);
                    break;
                case XmlElementNames_1.XmlElementNames.SendSMSAlertToRecipients:
                    var smsRecipientCollection = new EmailAddressCollection_1.EmailAddressCollection(XmlElementNames_1.XmlElementNames.Address);
                    smsRecipientCollection.LoadFromXmlJsObject(jsObject[key][XmlElementNames_1.XmlElementNames.Address], service);
                    this.sendSMSAlertToRecipients = RuleActions.ConvertSMSRecipientsFromEmailAddressCollectionToMobilePhoneCollection(smsRecipientCollection);
                    break;
                case XmlElementNames_1.XmlElementNames.ServerReplyWithMessage:
                    this.serverReplyWithMessage = new ItemId_1.ItemId();
                    this.serverReplyWithMessage.LoadFromXmlJsObject(jsObject[key][XmlElementNames_1.XmlElementNames.ItemId], service);
                    break;
                case XmlElementNames_1.XmlElementNames.StopProcessingRules:
                    this.stopProcessingRules = ExtensionMethods_1.Convert.toBool(jsObject[key]);
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
    RuleActions.prototype.WriteElementsToXml = function (writer) {
        if (this.AssignCategories.Count > 0) {
            this.AssignCategories.WriteToXml(writer, XmlElementNames_1.XmlElementNames.AssignCategories);
        }
        if (this.CopyToFolder != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.CopyToFolder);
            this.CopyToFolder.WriteToXml(writer);
            writer.WriteEndElement();
        }
        if (this.Delete != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Delete, this.Delete);
        }
        if (this.ForwardAsAttachmentToRecipients.Count > 0) {
            this.ForwardAsAttachmentToRecipients.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ForwardAsAttachmentToRecipients);
        }
        if (this.ForwardToRecipients.Count > 0) {
            this.ForwardToRecipients.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ForwardToRecipients);
        }
        if (this.MarkImportance) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MarkImportance, Importance_1.Importance[this.MarkImportance]);
        }
        if (this.MarkAsRead != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MarkAsRead, this.MarkAsRead);
        }
        if (this.MoveToFolder != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MoveToFolder);
            this.MoveToFolder.WriteToXml(writer);
            writer.WriteEndElement();
        }
        if (this.PermanentDelete != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.PermanentDelete, this.PermanentDelete);
        }
        if (this.RedirectToRecipients.Count > 0) {
            this.RedirectToRecipients.WriteToXml(writer, XmlElementNames_1.XmlElementNames.RedirectToRecipients);
        }
        if (this.SendSMSAlertToRecipients.length > 0) {
            var emailCollection = RuleActions.ConvertSMSRecipientsFromMobilePhoneCollectionToEmailAddressCollection(this.SendSMSAlertToRecipients);
            emailCollection.WriteToXml(writer, XmlElementNames_1.XmlElementNames.SendSMSAlertToRecipients);
        }
        if (this.ServerReplyWithMessage != null) {
            this.ServerReplyWithMessage.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ServerReplyWithMessage);
        }
        if (this.StopProcessingRules != false) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.StopProcessingRules, this.StopProcessingRules);
        }
    };
    /**
     * SMS recipient address type.
     */
    RuleActions.MobileType = "MOBILE";
    return RuleActions;
}(ComplexProperty_1.ComplexProperty));
exports.RuleActions = RuleActions;
