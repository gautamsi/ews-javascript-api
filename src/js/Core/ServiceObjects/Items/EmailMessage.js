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
var ConflictResolutionMode_1 = require("../../../Enumerations/ConflictResolutionMode");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var MessageDisposition_1 = require("../../../Enumerations/MessageDisposition");
var Promise_1 = require("../../../Promise");
var PropertySet_1 = require("../../PropertySet");
var ResponseMessage_1 = require("../ResponseObjects/ResponseMessage");
var ResponseMessageType_1 = require("../../../Enumerations/ResponseMessageType");
var Schemas_1 = require("../Schemas/Schemas");
var SuppressReadReceipt_1 = require("../ResponseObjects/SuppressReadReceipt");
var WellKnownFolderName_1 = require("../../../Enumerations/WellKnownFolderName");
var XmlElementNames_1 = require("../../XmlElementNames");
var Item_1 = require("./Item");
/**
 * Represents an **e-mail message**. Properties available on e-mail messages are defined in the *EmailMessageSchema* class.
 *
 */
var EmailMessage = /** @class */ (function (_super) {
    __extends(EmailMessage, _super);
    function EmailMessage(serviceOrParentAttachment) {
        return _super.call(this, serviceOrParentAttachment) || this;
    }
    Object.defineProperty(EmailMessage, "Attachable", {
        /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
        get: function () { return this.name === "EmailMessage"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(EmailMessage.prototype, "ToRecipients", {
        /**
         * Gets the list of To recipients for the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ToRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "BccRecipients", {
        /**
         * Gets the list of Bcc recipients for the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.BccRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "CcRecipients", {
        /**
         * Gets the list of Cc recipients for the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.CcRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "ConversationTopic", {
        /**
         * Gets the conversation topic of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ConversationTopic);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "ConversationIndex", {
        /**
         * Gets the conversation index of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ConversationIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "From", {
        /**
         * Gets or sets the "on behalf" sender of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.From);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.From, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "IsAssociated", {
        /**
         * Gets or sets a value indicating whether this is an associated message.
         *
         */
        get: function () {
            return this.IsAssociated;
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.IsAssociated, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "IsDeliveryReceiptRequested", {
        /**
         * Gets or sets a value indicating whether a read receipt is requested for the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.IsDeliveryReceiptRequested, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "IsRead", {
        /**
         * Gets or sets a value indicating whether the e-mail message is read.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.IsRead);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.IsRead, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "IsReadReceiptRequested", {
        /**
         * Gets or sets a value indicating whether a read receipt is requested for the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.IsReadReceiptRequested);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.IsReadReceiptRequested, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "IsResponseRequested", {
        /**
         * Gets or sets a value indicating whether a response is requested for the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.IsResponseRequested);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.IsResponseRequested, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "InternetMessageId", {
        /**
         * Gets the Internat Message Id of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.InternetMessageId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "References", {
        /**
         * Gets or sets the references of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.References);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.References, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "ReplyTo", {
        /**
         * Gets a list of e-mail addresses to which replies should be addressed.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ReplyTo);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "Sender", {
        /**
         * Gets or sets the sender of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.Sender);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.Sender, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "ReceivedBy", {
        /**
         * Gets the ReceivedBy property of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ReceivedBy);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "ReceivedRepresenting", {
        /**
         * Gets the ReceivedRepresenting property of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ReceivedRepresenting);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "ApprovalRequestData", {
        /**
         * Gets the ApprovalRequestData property of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ApprovalRequestData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailMessage.prototype, "VotingInformation", {
        /**
         * Gets the VotingInformation property of the e-mail message.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.VotingInformation);
        },
        enumerable: true,
        configurable: true
    });
    EmailMessage.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, EmailMessage);
    };
    /**
     * Creates a forward response to the message.
     *
     * @return  {ResponseMessage}      A ResponseMessage representing the forward response that can subsequently be modified and sent.
     */
    EmailMessage.prototype.CreateForward = function () {
        this.ThrowIfThisIsNew();
        return new ResponseMessage_1.ResponseMessage(this, ResponseMessageType_1.ResponseMessageType.Forward);
    };
    /**
     * Creates a reply response to the message.
     *
     * @param   {boolean}             replyAll   Indicates whether the reply should go to all of the original recipients of the message.
     * @return  {ResponseMessage}     A ResponseMessage representing the reply response that can subsequently be modified and sent.
     */
    EmailMessage.prototype.CreateReply = function (replyAll) {
        this.ThrowIfThisIsNew();
        return new ResponseMessage_1.ResponseMessage(this, replyAll ? ResponseMessageType_1.ResponseMessageType.ReplyAll : ResponseMessageType_1.ResponseMessageType.Reply);
    };
    //Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): Promise<void> { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
    //Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): Promise<void> { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
    /**
     * Forwards the message. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix     The prefix to prepend to the original body of the message.
     * @param   {EmailAddress[]}   toRecipients   The recipients to forward the message to.
     */
    EmailMessage.prototype.Forward = function (bodyPrefix, toRecipients) {
        var responseMessage = this.CreateForward();
        responseMessage.BodyPrefix = bodyPrefix;
        responseMessage.ToRecipients.AddRange(toRecipients);
        return responseMessage.SendAndSaveCopy();
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    EmailMessage.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    EmailMessage.prototype.GetSchema = function () { return Schemas_1.Schemas.EmailMessageSchema.Instance; };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    EmailMessage.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Message; };
    /**
     * Send message.
     *
     * @param   {FolderId}            parentFolderId       The parent folder id.
     * @param   {MessageDisposition}  messageDisposition   The message disposition.
     */
    EmailMessage.prototype.InternalSend = function (parentFolderId, messageDisposition) {
        var _this = this;
        this.ThrowIfThisIsAttachment();
        if (this.IsNew) {
            if ((this.Attachments.Count == 0) || (messageDisposition == MessageDisposition_1.MessageDisposition.SaveOnly)) {
                return this.InternalCreate(parentFolderId, messageDisposition, null);
            }
            else {
                // If the message has attachments, save as a draft (and add attachments) before sending.
                return this.InternalCreate(null, // null means use the Drafts folder in the mailbox of the authenticated user.
                MessageDisposition_1.MessageDisposition.SaveOnly, null).then(function () {
                    return _this.Service.SendItem(_this, parentFolderId);
                });
            }
        }
        else {
            // Regardless of whether item is dirty or not, if it has unprocessed
            // attachment changes, process them now.
            //debugger; //todo: check - check for attachment save() promise. 
            return Promise_1.Promise.resolve(
            // Validate and save attachments before sending.
            this.HasUnprocessedAttachmentChanges() ? this.Attachments.ValidateAndSave() : void 0)
                .then(function () {
                if (_this.PropertyBag.GetIsUpdateCallNecessary()) {
                    return _this.InternalUpdate(//ref: //info: <any> to supress cast error, returning promise is required, this time it is not void but no action is taken on this promise. 
                    parentFolderId, ConflictResolutionMode_1.ConflictResolutionMode.AutoResolve, messageDisposition, null);
                }
                else {
                    return _this.Service.SendItem(_this, parentFolderId);
                }
            });
        }
    };
    /**
     * Replies to the message. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   The prefix to prepend to the original body of the message.
     * @param   {boolean}   replyAll     Indicates whether the reply should be sent to all of the original recipients of the message.
     */
    EmailMessage.prototype.Reply = function (bodyPrefix, replyAll) {
        var responseMessage = this.CreateReply(replyAll);
        responseMessage.BodyPrefix = bodyPrefix;
        return responseMessage.SendAndSaveCopy();
    };
    /**
     * Sends this e-mail message. Calling this method results in at least one call to EWS.
     */
    EmailMessage.prototype.Send = function () { return this.InternalSend(null, MessageDisposition_1.MessageDisposition.SendOnly); };
    EmailMessage.prototype.SendAndSaveCopy = function (destinationFolderIdOrName) {
        var destinationFolderId = new FolderId_1.FolderId(WellKnownFolderName_1.WellKnownFolderName.SentItems);
        if (arguments.length === 1) {
            if (typeof destinationFolderIdOrName === "number") {
                destinationFolderId = new FolderId_1.FolderId(destinationFolderIdOrName);
            }
            else {
                //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
                destinationFolderId = destinationFolderIdOrName;
            }
        }
        return this.InternalSend(destinationFolderId, MessageDisposition_1.MessageDisposition.SendAndSaveCopy);
    };
    /**
     * Suppresses the read receipt on the message. Calling this method results in a call to EWS.
     *
     */
    EmailMessage.prototype.SuppressReadReceipt = function () {
        this.ThrowIfThisIsNew();
        return (new SuppressReadReceipt_1.SuppressReadReceipt(this)).InternalCreate(null, null);
    };
    return EmailMessage;
}(Item_1.Item));
exports.EmailMessage = EmailMessage;
