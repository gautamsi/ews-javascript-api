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
var EwsLogging_1 = require("../../EwsLogging");
var EwsUtilities_1 = require("../../EwsUtilities");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var InvalidOperationException_1 = require("../../../Exceptions/InvalidOperationException");
var PostItem_1 = require("../Items/PostItem");
var Schemas_1 = require("../Schemas/Schemas");
var Strings_1 = require("../../../Strings");
var XmlElementNames_1 = require("../../XmlElementNames");
var ServiceObject_1 = require("../ServiceObject");
/**
 * Represents a reply to a post item.
 *
 * @sealed
 */
var PostReply = /** @class */ (function (_super) {
    __extends(PostReply, _super);
    /**
     * @internal Initializes a new instance of the **PostReply** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    function PostReply(referenceItem) {
        var _this = _super.call(this, referenceItem.Service) || this;
        _this.referenceItem = null;
        EwsLogging_1.EwsLogging.Assert(referenceItem != null, "PostReply.ctor", "referenceItem is null");
        referenceItem.ThrowIfThisIsNew();
        _this.referenceItem = referenceItem;
        return _this;
    }
    Object.defineProperty(PostReply.prototype, "Subject", {
        /**
         * Gets or sets the subject of the post reply.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Subject);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Subject, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostReply.prototype, "Body", {
        /**
         * Gets or sets the body of the post reply.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Body);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Body, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostReply.prototype, "BodyPrefix", {
        /**
         * Gets or sets the body prefix that should be prepended to the original post item's body.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ResponseObjectSchema.BodyPrefix);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ResponseObjectSchema.BodyPrefix, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    PostReply.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    PostReply.prototype.GetSchema = function () {
        return Schemas_1.Schemas.PostReplySchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    PostReply.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.PostReplyItem;
    };
    /**
     * @internal Create a PostItem response.
     *
     * @param   {FolderId}              parentFolderId       The parent folder id.
     * @param   {MessageDisposition}    messageDisposition   The message disposition.
     * @return  {Promise<PostItem>}    Created PostItem    :Promise.
     */
    PostReply.prototype.InternalCreate = function (parentFolderId, messageDisposition) {
        this.PropertyBag._getItem(Schemas_1.Schemas.ResponseObjectSchema.ReferenceItemId).Assign(this.referenceItem.Id);
        return this.Service.InternalCreateResponseObject(this, parentFolderId, messageDisposition).then(function (items) {
            var postItem = EwsUtilities_1.EwsUtilities.FindFirstItemOfType(items, PostItem_1.PostItem);
            // This should never happen. If it does, we have a bug.
            EwsLogging_1.EwsLogging.Assert(postItem != null, "PostReply.InternalCreate", "postItem is null. The CreateItem call did not return the expected PostItem.");
            return postItem;
        });
    };
    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     * @return  {Promise<void>}    :Promise.
     */
    PostReply.prototype.InternalDelete = function (deleteMode, sendCancellationsMode, affectedTaskOccurrences) {
        throw new InvalidOperationException_1.InvalidOperationException(Strings_1.Strings.DeletingThisObjectTypeNotAuthorized);
    };
    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     * @return  {Promise<void>}    :Promise.
     */
    PostReply.prototype.InternalLoad = function (propertySet) {
        throw new InvalidOperationException_1.InvalidOperationException(Strings_1.Strings.LoadingThisObjectTypeNotSupported);
    };
    PostReply.prototype.Save = function (destinationFolderIdOrFolderName) {
        if (destinationFolderIdOrFolderName === void 0) { destinationFolderIdOrFolderName = null; }
        var destinationFolderId = destinationFolderIdOrFolderName;
        if (arguments.length > 0) {
            EwsUtilities_1.EwsUtilities.ValidateParam(destinationFolderIdOrFolderName, "destinationFolderId");
        }
        if (typeof destinationFolderIdOrFolderName === 'number') {
            destinationFolderId = new FolderId_1.FolderId(destinationFolderIdOrFolderName);
        }
        return this.InternalCreate(destinationFolderId, null);
    };
    return PostReply;
}(ServiceObject_1.ServiceObject));
exports.PostReply = PostReply;
