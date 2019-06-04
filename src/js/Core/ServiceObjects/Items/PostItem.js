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
var ExtensionMethods_1 = require("../../../ExtensionMethods");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var PostReply_1 = require("../ResponseObjects/PostReply");
var PropertySet_1 = require("../../PropertySet");
var ResponseMessage_1 = require("../ResponseObjects/ResponseMessage");
var ResponseMessageType_1 = require("../../../Enumerations/ResponseMessageType");
var Schemas_1 = require("../Schemas/Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var Item_1 = require("./Item");
/**
 * Represents a post item. Properties available on post items are defined in the PostItemSchema class.
 *
 * @sealed
 */
var PostItem = /** @class */ (function (_super) {
    __extends(PostItem, _super);
    function PostItem(serviceOrParentAttachment) {
        return _super.call(this, serviceOrParentAttachment) || this;
    }
    Object.defineProperty(PostItem, "Attachable", {
        /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
        get: function () { return this.name === "PostItem"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PostItem.prototype, "ConversationIndex", {
        /**
         * Gets the conversation index of the post item.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ConversationIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostItem.prototype, "ConversationTopic", {
        /**
         * Gets the conversation topic of the post item.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ConversationTopic);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostItem.prototype, "From", {
        /**
         * Gets or sets the "on behalf" poster of the post item.
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
    Object.defineProperty(PostItem.prototype, "InternetMessageId", {
        /**
         * Gets the Internet message Id of the post item.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.InternetMessageId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostItem.prototype, "IsRead", {
        /**
         * Gets or sets a value indicating whether the post item is read.
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
    Object.defineProperty(PostItem.prototype, "PostedTime", {
        /**
         * Gets the the date and time when the post item was posted.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.PostItemSchema.PostedTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostItem.prototype, "References", {
        /**
         * Gets or sets the references of the post item.
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
    Object.defineProperty(PostItem.prototype, "Sender", {
        /**
         * Gets or sets the sender (poster) of the post item.
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
    PostItem.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, PostItem);
    };
    /**
     * Creates a forward response to the post item.
     *
     * @return  {ResponseMessage}      A ResponseMessage representing the forward response that can subsequently be modified and sent.
     */
    PostItem.prototype.CreateForward = function () {
        this.ThrowIfThisIsNew();
        return new ResponseMessage_1.ResponseMessage(this, ResponseMessageType_1.ResponseMessageType.Forward);
    };
    /**
     * Creates a post reply to this post item.
     *
     * @return  {PostReply}      A PostReply that can be modified and saved.
     */
    PostItem.prototype.CreatePostReply = function () {
        this.ThrowIfThisIsNew();
        return new PostReply_1.PostReply(this);
    };
    /**
     * Creates a e-mail reply response to the post item.
     *
     * @param   {boolean}   replyAll   Indicates whether the reply should go to everyone involved in the thread.
     * @return  {ResponseMessage}      A ResponseMessage representing the e-mail reply response that can subsequently be modified and sent.
     */
    PostItem.prototype.CreateReply = function (replyAll) {
        this.ThrowIfThisIsNew();
        return new ResponseMessage_1.ResponseMessage(this, replyAll ? ResponseMessageType_1.ResponseMessageType.ReplyAll : ResponseMessageType_1.ResponseMessageType.Reply);
    };
    PostItem.prototype.Forward = function (bodyPrefix, _toRecipients) {
        var toRecipients = [];
        if (arguments.length <= 2) {
            if (ExtensionMethods_1.ArrayHelper.isArray(_toRecipients)) {
                toRecipients = _toRecipients;
            }
            else {
                toRecipients.push(arguments[1]);
            }
        }
        else {
            for (var _i = 1; _i < arguments.length; _i++) {
                toRecipients[_i - 1] = arguments[_i];
            }
        }
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
    PostItem.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    PostItem.prototype.GetSchema = function () {
        return Schemas_1.Schemas.PostItemSchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    PostItem.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.PostItem;
    };
    /**
     * Posts a reply to this post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   Body prefix.
     * @return  {Promise<void>}    :Promise.
     */
    PostItem.prototype.PostReply = function (bodyPrefix) {
        var postReply = this.CreatePostReply();
        postReply.BodyPrefix = bodyPrefix;
        return postReply.Save();
    };
    /**
     * Replies to the post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   The prefix to prepend to the original body of the post item.
     * @param   {boolean}       replyAll     Indicates whether the reply should be sent to everyone involved in the thread.
     * @return  {Promise<void>}    :Promise.
     */
    PostItem.prototype.Reply = function (bodyPrefix, replyAll) {
        var responseMessage = this.CreateReply(replyAll);
        responseMessage.BodyPrefix = bodyPrefix;
        return responseMessage.SendAndSaveCopy();
    };
    return PostItem;
}(Item_1.Item));
exports.PostItem = PostItem;
