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
var EwsLogging_1 = require("../../EwsLogging");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var MessageDisposition_1 = require("../../../Enumerations/MessageDisposition");
var Promise_1 = require("../../../Promise");
var PropertySet_1 = require("../../PropertySet");
var Schemas_1 = require("../Schemas/Schemas");
var ServiceErrorHandling_1 = require("../../../Enumerations/ServiceErrorHandling");
var ServiceObjectSchema_1 = require("../Schemas/ServiceObjectSchema");
var ServiceVersionException_1 = require("../../../Exceptions/ServiceVersionException");
var Strings_1 = require("../../../Strings");
var TypeContainer_1 = require("../../../TypeContainer");
var XmlElementNames_1 = require("../../XmlElementNames");
var ServiceObject_1 = require("../ServiceObject");
/**
 * Represents a generic **Item**. Properties available on items are defined in the *ItemSchema* class.
 *
 */
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(obj) {
        var _this = _super.call(this, obj instanceof TypeContainer_1.TypeContainer.ExchangeService ? obj : obj instanceof TypeContainer_1.TypeContainer.ItemAttachment ? obj.Service : null) || this;
        _this.parentAttachment = null;
        if (obj instanceof TypeContainer_1.TypeContainer.ItemAttachment) {
            var parentAttachment = obj;
            EwsLogging_1.EwsLogging.Assert(parentAttachment != null, "Item.ctor", "parentAttachment is null");
            _this.parentAttachment = parentAttachment;
        }
        return _this;
    }
    Object.defineProperty(Item, "Attachable", {
        /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
        get: function () { return this.name === "Item"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Item.prototype, "ParentAttachment", {
        /**
         * @internal Gets the parent attachment of this item.
         *
         */
        get: function () {
            return this.parentAttachment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "RootItemId", {
        /**
         * @internal Gets Id of the root item for this item.
         *
         */
        get: function () {
            if (this.IsAttachment && this.ParentAttachment.Owner !== null) {
                return this.ParentAttachment.Owner.RootItemId;
            }
            return this.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IsAttachment", {
        /**
         * Gets a value indicating whether the item is an attachment.
         *
         */
        get: function () { return this.parentAttachment != null && typeof this.parentAttachment !== 'undefined'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IsNew", {
        /**
         * Gets a value indicating whether this object is a real store item, or if it's a local object that has yet to be saved.
         *
         */
        get: function () {
            // Item attachments don't have an Id, need to check whether the
            // parentAttachment is new or not.
            if (this.IsAttachment) {
                return this.ParentAttachment.IsNew;
            }
            else {
                var id = this.GetId();
                return id == null ? true : !id.IsValid;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Id", {
        /**
         * Gets the Id of this item.
         *
         */
        get: function () { return this.PropertyBag._getItem(this.GetIdPropertyDefinition()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "MimeContent", {
        /**
         * Get or sets the MIME content of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.MimeContent);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.MimeContent, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ParentFolderId", {
        /**
         * Gets the Id of the parent folder of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.ParentFolderId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Sensitivity", {
        /**
         * Gets or sets the sensitivity of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Sensitivity);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Sensitivity, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Attachments", {
        /**
         * Gets a list of the attachments to this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Attachments);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "DateTimeReceived", {
        /**
         * Gets the time when this item was received.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.DateTimeReceived);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Size", {
        /**
         * Gets the size of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Size);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Categories", {
        /**
         * Gets or sets the list of categories associated with this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Categories);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Categories, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Culture", {
        /**
         * Gets or sets the culture associated with this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Culture);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Culture, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Importance", {
        /**
         * Gets or sets the importance of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Importance);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Importance, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "InReplyTo", {
        /**
         * Gets or sets the In-Reply-To reference of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.InReplyTo);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.InReplyTo, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IsSubmitted", {
        /**
         * Gets a value indicating whether the message has been submitted to be sent.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.IsSubmitted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IsAssociated", {
        /**
         * Gets a value indicating whether this is an associated item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.IsAssociated);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IsDraft", {
        /**
         * Gets a value indicating whether the item is is a draft. An item is a draft when it has not yet been sent.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.IsDraft);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IsFromMe", {
        /**
         * Gets a value indicating whether the item has been sent by the current authenticated user.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.IsFromMe);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IsResend", {
        /**
         * Gets a value indicating whether the item is a resend of another item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.IsResend);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IsUnmodified", {
        /**
         * Gets a value indicating whether the item has been modified since it was created.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.IsUnmodified);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "InternetMessageHeaders", {
        /**
         * Gets a list of Internet headers for this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.InternetMessageHeaders);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "DateTimeSent", {
        /**
         * Gets the date and time this item was sent.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.DateTimeSent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "DateTimeCreated", {
        /**
         * Gets the date and time this item was created.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.DateTimeCreated);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "AllowedResponseActions", {
        /**
         * Gets a value indicating which response actions are allowed on this item. Examples of response actions are Reply and Forward.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.AllowedResponseActions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ReminderDueBy", {
        /**
         * Gets or sets the date and time when the reminder is due for this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.ReminderDueBy);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.ReminderDueBy, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IsReminderSet", {
        /**
         * Gets or sets a value indicating whether a reminder is set for this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.IsReminderSet);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.IsReminderSet, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ReminderMinutesBeforeStart", {
        /**
         * Gets or sets the number of minutes before the start of this item when the reminder should be triggered.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.ReminderMinutesBeforeStart);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.ReminderMinutesBeforeStart, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "DisplayCc", {
        /**
         * Gets a text summarizing the Cc receipients of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.DisplayCc);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "DisplayTo", {
        /**
         * Gets a text summarizing the To recipients of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.DisplayTo);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "HasAttachments", {
        /**
         * Gets a value indicating whether the item has attachments.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.HasAttachments);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Body", {
        /**
         * Gets or sets the body of this item.
         *
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
    Object.defineProperty(Item.prototype, "ItemClass", {
        /**
         * Gets or sets the custom class name of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.ItemClass);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.ItemClass, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Subject", {
        /**
         * Gets or sets the subject of this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Subject);
        },
        set: function (value) {
            this.SetSubject(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "WebClientReadFormQueryString", {
        /**
         * Gets the query string that should be appended to the Exchange Web client URL to open this item using the appropriate read form in a web browser.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.WebClientReadFormQueryString);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "WebClientEditFormQueryString", {
        /**
         * Gets the query string that should be appended to the Exchange Web client URL to open this item using the appropriate edit form in a web browser.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.WebClientEditFormQueryString);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ExtendedProperties", {
        /**
         * Gets a list of extended properties defined on this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(ServiceObjectSchema_1.ServiceObjectSchema.ExtendedProperties);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "EffectiveRights", {
        /**
         * Gets a value indicating the effective rights the current authenticated user has on this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.EffectiveRights);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "LastModifiedName", {
        /**
         * Gets the name of the user who last modified this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.LastModifiedName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "LastModifiedTime", {
        /**
         * Gets the date and time this item was last modified.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.LastModifiedTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ConversationId", {
        /**
         * Gets the Id of the conversation this item is part of.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.ConversationId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "UniqueBody", {
        /**
         * Gets the body part that is unique to the conversation this item is part of.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.UniqueBody);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "StoreEntryId", {
        /**
         * Gets the store entry id.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.StoreEntryId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "InstanceKey", {
        /**
         * Gets the item instance key.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.InstanceKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Flag", {
        /**
         * Get or set the Flag value for this item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Flag);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Flag, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "NormalizedBody", {
        /**
         * Gets the normalized body of the item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.NormalizedBody);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "EntityExtractionResult", {
        /**
         * Gets the EntityExtractionResult of the item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.EntityExtractionResult);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "PolicyTag", {
        /**
         * Gets or sets the policy tag.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.PolicyTag);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.PolicyTag, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ArchiveTag", {
        /**
         * Gets or sets the archive tag.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.ArchiveTag);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.ArchiveTag, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "RetentionDate", {
        /**
         * Gets the retention date.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.RetentionDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Preview", {
        /**
         * Gets the item Preview.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Preview);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "TextBody", {
        /**
         * Gets the text body of the item.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.TextBody);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "IconIndex", {
        /**
         * Gets the icon index.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.IconIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "DefaultAffectedTaskOccurrences", {
        /**
         * @internal Gets the default setting for how to treat affected task occurrences on Delete.
         * Subclasses will override this for different default behavior.
         *
         */
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "DefaultSendCancellationsMode", {
        /**
         * @internal Gets the default setting for sending cancellations on Delete.
         * Subclasses will override this for different default behavior.
         *
         */
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "DefaultSendInvitationsMode", {
        /**
         * @internal Gets the default settings for sending invitations on Save.
         * Subclasses will override this for different default behavior.
         *
         */
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "DefaultSendInvitationsOrCancellationsMode", {
        /**
         * @internal Gets the default settings for sending invitations or cancellations on Update.
         * Subclasses will override this for different default behavior.
         *
         */
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Item.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, Item);
    };
    Item.prototype.Copy = function (destinationFolderIdOrName) {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();
        var folderId = null;
        if (destinationFolderIdOrName instanceof FolderId_1.FolderId) {
            folderId = destinationFolderIdOrName;
        }
        else {
            folderId = new FolderId_1.FolderId(destinationFolderIdOrName);
        }
        //todo: EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        return this.Service.CopyItem(this.Id, folderId);
    };
    Item.prototype.Delete = function (deleteMode, suppressReadReceipts) {
        if (suppressReadReceipts === void 0) { suppressReadReceipts = false; }
        return this.InternalDelete(deleteMode, null, null, suppressReadReceipts);
    };
    /**
     * @internal Gets a list of extended properties defined on this object.
     *
     * @return  {ExtendedPropertyCollection}      Extended properties collection.
     */
    Item.prototype.GetExtendedProperties = function () { return this.ExtendedProperties; };
    /**
     * @inrtnal The property definition for the Id of this object.
     *
     * @return  {PropertyDefinition}      A PropertyDefinition instance.
     */
    Item.prototype.GetIdPropertyDefinition = function () { return Schemas_1.Schemas.ItemSchema.Id; };
    /**
     * Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}                       true if a time zone SOAP header should be emitted; otherwise, false.
     */
    Item.prototype.GetIsTimeZoneHeaderRequired = function (isUpdateOperation) {
        // Starting E14SP2, attachment will be sent along with CreateItem requests. 
        // if the attachment used to require the Timezone header, CreateItem request should do so too.
        //
        //debugger;//todo: filtering of specific type needed.
        if (!isUpdateOperation &&
            (this.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2010_SP2)) {
            for (var _i = 0, _a = ExtensionMethods_1.ArrayHelper.OfType(this.Attachments.Items, function (a) { return a instanceof TypeContainer_1.TypeContainer.ItemAttachment; }); _i < _a.length; _i++) {
                var itemAttachment = _a[_i];
                if ((itemAttachment.Item != null) && itemAttachment.Item.GetIsTimeZoneHeaderRequired(false /* isUpdateOperation */)) {
                    return true;
                }
            }
        }
        return _super.prototype.GetIsTimeZoneHeaderRequired.call(this, isUpdateOperation);
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    Item.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    Item.prototype.GetSchema = function () { return Schemas_1.Schemas.ItemSchema.Instance; };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    Item.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Item; };
    /**
     * @internal Gets a value indicating whether this instance has unprocessed attachment collection changes.
     *
     * @return  {boolean}      true or false.
     *
     */
    Item.prototype.HasUnprocessedAttachmentChanges = function () { return this.Attachments.HasUnprocessedChanges(); };
    /**
     * @internal Create item.
     *
     * @param   {FolderId}              parentFolderId        The parent folder id.
     * @param   {MessageDisposition}    messageDisposition    The message disposition.
     * @param   {SendInvitationsMode}   sendInvitationsMode   The send invitations mode.
     */
    Item.prototype.InternalCreate = function (parentFolderId, messageDisposition, sendInvitationsMode) {
        var _this = this;
        this.ThrowIfThisIsNotNew();
        this.ThrowIfThisIsAttachment();
        if (this.IsNew || this.IsDirty) {
            return this.Service.CreateItem(this, parentFolderId, messageDisposition, sendInvitationsMode !== null ? sendInvitationsMode : this.DefaultSendInvitationsMode)
                .then(function (response) {
                return _this.Attachments.Save();
            });
        }
        return;
    };
    Item.prototype.InternalDelete = function (deleteMode, sendCancellationsMode, affectedTaskOccurrences, suppressReadReceipts) {
        if (sendCancellationsMode === void 0) { sendCancellationsMode = this.DefaultSendCancellationsMode; }
        if (affectedTaskOccurrences === void 0) { affectedTaskOccurrences = this.DefaultAffectedTaskOccurrences; }
        if (suppressReadReceipts === void 0) { suppressReadReceipts = false; }
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();
        // If sendCancellationsMode is null, use the default value that's appropriate for item type.
        // if (!sendCancellationsMode)
        // {
        //     sendCancellationsMode = this.DefaultSendCancellationsMode;
        // }
        // If affectedTaskOccurrences is null, use the default value that's appropriate for item type.
        // if (!affectedTaskOccurrences)
        // {
        //     affectedTaskOccurrences = this.DefaultAffectedTaskOccurrences;
        // }
        return this.Service.DeleteItem(this.Id, deleteMode, sendCancellationsMode, affectedTaskOccurrences, suppressReadReceipts);
    };
    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    Item.prototype.InternalLoad = function (propertySet) {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();
        return this.Service.InternalLoadPropertiesForItems([this], //new Item[] { this },
        propertySet, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
    };
    Item.prototype.InternalUpdate = function (parentFolderId, conflictResolutionMode, messageDisposition, sendInvitationsOrCancellationsMode, suppressReadReceipts) {
        var _this = this;
        if (suppressReadReceipts === void 0) { suppressReadReceipts = false; }
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();
        var returnedPromise = null;
        var returnedItem = null;
        if (this.IsDirty && this.PropertyBag.GetIsUpdateCallNecessary()) {
            returnedPromise = this.Service.UpdateItem(this, parentFolderId, conflictResolutionMode, messageDisposition, sendInvitationsOrCancellationsMode !== null ? sendInvitationsOrCancellationsMode : this.DefaultSendInvitationsOrCancellationsMode, suppressReadReceipts);
        }
        return Promise_1.Promise.resolve(returnedPromise).then(function (item) {
            // Regardless of whether item is dirty or not, if it has unprocessed
            // attachment changes, validate them and process now.
            if (_this.HasUnprocessedAttachmentChanges()) {
                _this.Attachments.Validate();
                return _this.Attachments.Save().then(function () {
                    return item;
                });
            }
            return item;
        });
        //return Promise.resolve(returnedItem);
    };
    Item.prototype.Move = function (destinationFolderIdOrName) {
        this.ThrowIfThisIsNew();
        this.ThrowIfThisIsAttachment();
        var folderId = null;
        if (destinationFolderIdOrName instanceof FolderId_1.FolderId) {
            folderId = destinationFolderIdOrName;
        }
        else {
            folderId = new FolderId_1.FolderId(destinationFolderIdOrName);
        }
        //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        return this.Service.MoveItem(this.Id, folderId);
    };
    /**
     * Removes an extended property.
     *
     * @param   {ExtendedPropertyDefinition}    extendedPropertyDefinition   The extended property definition.
     * @return  {boolean}                       True if property was removed.
     */
    Item.prototype.RemoveExtendedProperty = function (extendedPropertyDefinition) { return this.ExtendedProperties.RemoveExtendedProperty(extendedPropertyDefinition); };
    Item.prototype.Save = function (parentFolderIdOrName) {
        if (parentFolderIdOrName === void 0) { parentFolderIdOrName = null; }
        var parentFolderId = null;
        if (parentFolderIdOrName !== null) {
            parentFolderId = parentFolderIdOrName;
            if (typeof parentFolderIdOrName === 'number') {
                parentFolderId = new FolderId_1.FolderId(parentFolderIdOrName);
            }
        }
        return this.InternalCreate(parentFolderId, MessageDisposition_1.MessageDisposition.SaveOnly, null);
    };
    /**
     * Sets the extended property.
     *
     * @param   {ExtendedPropertyDefinition}    extendedPropertyDefinition   The extended property definition.
     * @param   {value}                         value                        The value.
     */
    Item.prototype.SetExtendedProperty = function (extendedPropertyDefinition, value) { this.ExtendedProperties.SetExtendedProperty(extendedPropertyDefinition, value); };
    /**
     * @internal Sets the subject.
     *
     */
    Item.prototype.SetSubject = function (subject) { this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Subject, subject); };
    /**
     * Throws exception if this is attachment.
     *
     */
    Item.prototype.ThrowIfThisIsAttachment = function () {
        if (this.IsAttachment) {
            throw new Error(Strings_1.Strings.OperationDoesNotSupportAttachments); //InvalidOperationException
        }
    };
    Item.prototype.Update = function (conflictResolutionMode, suppressReadReceipts) {
        if (suppressReadReceipts === void 0) { suppressReadReceipts = false; }
        return this.InternalUpdate(null /* parentFolder */, conflictResolutionMode, MessageDisposition_1.MessageDisposition.SaveOnly, null, suppressReadReceipts);
    };
    /**
     * @internal Validates this instance.
     *
     */
    Item.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        this.Attachments.Validate();
        // Flag parameter is only valid for Exchange2013 or higher
        //
        var flag = { outValue: null };
        if (this.TryGetProperty(Schemas_1.Schemas.ItemSchema.Flag, flag) && flag.outValue != null) {
            if (this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "Flag", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
            }
            flag.outValue.Validate();
        }
    };
    return Item;
}(ServiceObject_1.ServiceObject));
exports.Item = Item;
