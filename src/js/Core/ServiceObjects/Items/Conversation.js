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
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var Flag_1 = require("../../../ComplexProperties/Flag");
var ItemFlagStatus_1 = require("../../../Enumerations/ItemFlagStatus");
var NotSupportedException_1 = require("../../../Exceptions/NotSupportedException");
var Schemas_1 = require("../Schemas/Schemas");
var ExtensionMethods_1 = require("../../../ExtensionMethods");
var XmlElementNames_1 = require("../../XmlElementNames");
var ServiceObject_1 = require("../ServiceObject");
/**
 * Represents a collection of Conversation related properties.
 * Properties available on this object are defined in the ConversationSchema class.
 */
var Conversation = /** @class */ (function (_super) {
    __extends(Conversation, _super);
    /**
     * @internal Initializes an unsaved local instance of **Conversation** class.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the item will be bound.
     */
    function Conversation(service) {
        return _super.call(this, service) || this;
    }
    Object.defineProperty(Conversation.prototype, "Id", {
        /**
         * Gets the Id of this Conversation.
         */
        get: function () {
            return this.PropertyBag._getItem(this.GetIdPropertyDefinition());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "Topic", {
        /**
         * Gets the topic of this Conversation.
         */
        get: function () {
            var returnValue = { outValue: ExtensionMethods_1.StringHelper.Empty };
            // This property need not be present hence the property bag may not contain it.
            // Check for the presence of this property before accessing it.
            if (this.PropertyBag.Contains(Schemas_1.Schemas.ConversationSchema.Topic)) {
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.ConversationSchema.Topic, returnValue);
            }
            return returnValue.outValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "UniqueRecipients", {
        /**
         * Gets a list of all the people who have received messages in this conversation in the current folder only.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.UniqueRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalUniqueRecipients", {
        /**
         * Gets a list of all the people who have received messages in this conversation across all folders in the mailbox.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalUniqueRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "UniqueUnreadSenders", {
        /**
         * Gets a list of all the people who have sent messages that are currently unread in this conversation in the current folder only.
         */
        get: function () {
            var unreadSenders = { outValue: null };
            // This property need not be present hence the property bag may not contain it.
            // Check for the presence of this property before accessing it.
            if (this.PropertyBag.Contains(Schemas_1.Schemas.ConversationSchema.UniqueUnreadSenders)) {
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.ConversationSchema.UniqueUnreadSenders, unreadSenders);
            }
            return unreadSenders.outValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalUniqueUnreadSenders", {
        /**
         * Gets a list of all the people who have sent messages that are currently unread in this conversation across all folders in the mailbox.
         */
        get: function () {
            var unreadSenders = { outValue: null };
            // This property need not be present hence the property bag may not contain it.
            // Check for the presence of this property before accessing it.
            if (this.PropertyBag.Contains(Schemas_1.Schemas.ConversationSchema.GlobalUniqueUnreadSenders)) {
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.ConversationSchema.GlobalUniqueUnreadSenders, unreadSenders);
            }
            return unreadSenders.outValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "UniqueSenders", {
        /**
         * Gets a list of all the people who have sent messages in this conversation in the current folder only.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.UniqueSenders);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalUniqueSenders", {
        /**
         * Gets a list of all the people who have sent messages in this conversation across all folders in the mailbox.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalUniqueSenders);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "LastDeliveryTime", {
        /**
         * Gets the delivery time of the message that was last received in this conversation in the current folder only.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.LastDeliveryTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalLastDeliveryTime", {
        /**
         * Gets the delivery time of the message that was last received in this conversation across all folders in the mailbox.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalLastDeliveryTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "Categories", {
        /**
         * Gets a list summarizing the categories stamped on messages in this conversation, in the current folder only.
         */
        get: function () {
            var returnValue = { outValue: null };
            // This property need not be present hence the property bag may not contain it.
            // Check for the presence of this property before accessing it.
            if (this.PropertyBag.Contains(Schemas_1.Schemas.ConversationSchema.Categories)) {
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.ConversationSchema.Categories, returnValue);
            }
            return returnValue.outValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalCategories", {
        /**
         * Gets a list summarizing the categories stamped on messages in this conversation, across all folders in the mailbox.
         */
        get: function () {
            var returnValue = { outValue: null };
            // This property need not be present hence the property bag may not contain it.
            // Check for the presence of this property before accessing it.
            if (this.PropertyBag.Contains(Schemas_1.Schemas.ConversationSchema.GlobalCategories)) {
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.ConversationSchema.GlobalCategories, returnValue);
            }
            return returnValue.outValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "FlagStatus", {
        /**
         * Gets the flag status for this conversation, calculated by aggregating individual messages flag status in the current folder.
         */
        get: function () {
            var returnValue = { outValue: null };
            // This property need not be present hence the property bag may not contain it.
            // Check for the presence of this property before accessing it.
            if (this.PropertyBag.Contains(Schemas_1.Schemas.ConversationSchema.FlagStatus)) {
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.ConversationSchema.FlagStatus, returnValue);
            }
            return returnValue.outValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalFlagStatus", {
        /**
         * Gets the flag status for this conversation, calculated by aggregating individual messages flag status across all folders in the mailbox.
         */
        get: function () {
            var returnValue = { outValue: null };
            // This property need not be present hence the property bag may not contain it.
            // Check for the presence of this property before accessing it.
            if (this.PropertyBag.Contains(Schemas_1.Schemas.ConversationSchema.GlobalFlagStatus)) {
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.ConversationSchema.GlobalFlagStatus, returnValue);
            }
            return returnValue.outValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "HasAttachments", {
        /**
         * Gets a value indicating if at least one message in this conversation, in the current folder only, has an attachment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.HasAttachments);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalHasAttachments", {
        /**
         * Gets a value indicating if at least one message in this conversation, across all folders in the mailbox, has an attachment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalHasAttachments);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "MessageCount", {
        /**
         * Gets the total number of messages in this conversation in the current folder only.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.MessageCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalMessageCount", {
        /**
         * Gets the total number of messages in this conversation across all folders in the mailbox.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalMessageCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "UnreadCount", {
        /**
         * Gets the total number of unread messages in this conversation in the current folder only.
         */
        get: function () {
            var returnValue = { outValue: 0 };
            // This property need not be present hence the property bag may not contain it.
            // Check for the presence of this property before accessing it.
            if (this.PropertyBag.Contains(Schemas_1.Schemas.ConversationSchema.UnreadCount)) {
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.ConversationSchema.UnreadCount, returnValue);
            }
            return returnValue.outValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalUnreadCount", {
        /**
         * Gets the total number of unread messages in this conversation across all folders in the mailbox.
         */
        get: function () {
            var returnValue = { outValue: 0 };
            // This property need not be present hence the property bag may not contain it.
            // Check for the presence of this property before accessing it.
            if (this.PropertyBag.Contains(Schemas_1.Schemas.ConversationSchema.GlobalUnreadCount)) {
                this.PropertyBag.TryGetPropertyAs(Schemas_1.Schemas.ConversationSchema.GlobalUnreadCount, returnValue);
            }
            return returnValue.outValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "Size", {
        /**
         * Gets the size of this conversation, calculated by adding the sizes of all messages in the conversation in the current folder only.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.Size);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalSize", {
        /**
         * Gets the size of this conversation, calculated by adding the sizes of all messages in the conversation across all folders in the mailbox.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "ItemClasses", {
        /**
         * Gets a list summarizing the classes of the items in this conversation, in the current folder only.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.ItemClasses);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalItemClasses", {
        /**
         * Gets a list summarizing the classes of the items in this conversation, across all folders in the mailbox.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalItemClasses);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "Importance", {
        /**
         * Gets the importance of this conversation, calculated by aggregating individual messages importance in the current folder only.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.Importance);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalImportance", {
        /**
         * Gets the importance of this conversation, calculated by aggregating individual messages importance across all folders in the mailbox.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalImportance);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "ItemIds", {
        /**
         * Gets the Ids of the messages in this conversation, in the current folder only.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.ItemIds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalItemIds", {
        /**
         * Gets the Ids of the messages in this conversation, across all folders in the mailbox.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalItemIds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "LastModifiedTime", {
        /**
         * Gets the date and time this conversation was last modified.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.LastModifiedTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "InstanceKey", {
        /**
         * Gets the conversation instance key.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.InstanceKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "Preview", {
        /**
         * Gets the conversation Preview.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.Preview);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "IconIndex", {
        /**
         * Gets the conversation IconIndex.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.IconIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalIconIndex", {
        /**
         * Gets the conversation global IconIndex.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalIconIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "DraftItemIds", {
        /**
         * Gets the draft item ids.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.DraftItemIds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "HasIrm", {
        /**
         * Gets a value indicating if at least one message in this conversation, in the current folder only, is an IRM.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.HasIrm);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "GlobalHasIrm", {
        /**
         * Gets a value indicating if at least one message in this conversation, across all folders in the mailbox, is an IRM.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ConversationSchema.GlobalHasIrm);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clear flags for conversation items. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId   The Id of the folder items must belong to in order to be unflagged. If contextFolderId is null, flags for items in conversation across the entire mailbox are cleared.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.ClearItemFlags = function (contextFolderId) {
        var flag = new Flag_1.Flag();
        flag.FlagStatus = ItemFlagStatus_1.ItemFlagStatus.NotFlagged;
        return this.Service.SetFlagStatusForItemsInConversations([{ key: this.Id, value: this.GlobalLastDeliveryTime }], contextFolderId, flag).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Copies items in the specified conversation to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId       The Id of the folder items must belong to in order to be copied. If contextFolderId is null, items across the entire mailbox are copied.
     * @param   {FolderId}   destinationFolderId   The Id of the destination folder.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.CopyItemsInConversation = function (contextFolderId, destinationFolderId) {
        return this.Service.CopyItemsInConversations([{ key: this.Id, value: this.GlobalLastDeliveryTime }], contextFolderId, destinationFolderId).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Deletes items in the specified conversation.
     * Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      contextFolderId   The Id of the folder items must belong to in order to be deleted. If contextFolderId is null, items across the entire mailbox are deleted.
     * @param   {DeleteMode}    deleteMode        The deletion mode.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.DeleteItems = function (contextFolderId, deleteMode) {
        return this.Service.DeleteItemsInConversations([{ key: this.Id, value: this.GlobalLastDeliveryTime }], contextFolderId, deleteMode).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Sets up a conversation so that any item received within that conversation is no longer categorized.
     * Calling this method results in a call to EWS.
     *
     * @param   {boolean}   processSynchronously   **<not used>**Indicates whether the method should return only once disabling this rule and removing the categories from existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.DisableAlwaysCategorizeItems = function (processSynchronously) {
        return this.Service.DisableAlwaysCategorizeItemsInConversations([this.Id], processSynchronously).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to Deleted Items folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once disabling this rule and restoring the items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.DisableAlwaysDeleteItems = function (processSynchronously) {
        return this.Service.DisableAlwaysDeleteItemsInConversations([this.Id], processSynchronously).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to a specific folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once disabling this rule is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.DisableAlwaysMoveItemsInConversation = function (processSynchronously) {
        return this.Service.DisableAlwaysMoveItemsInConversations([this.Id], processSynchronously).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Sets up a conversation so that any item received within that conversation is always categorized.
     * Calling this method results in a call to EWS.
     *
     * @param   {string[]}  categories             The categories that should be stamped on items in the conversation.
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once enabling this rule and stamping existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.EnableAlwaysCategorizeItems = function (categories, processSynchronously) {
        return this.Service.EnableAlwaysCategorizeItemsInConversations([this.Id], categories, processSynchronously).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Sets up a conversation so that any item received within that conversation is always moved to Deleted Items folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once enabling this rule and deleting existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.EnableAlwaysDeleteItems = function (processSynchronously) {
        return this.Service.EnableAlwaysDeleteItemsInConversations([this.Id], processSynchronously).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Sets up a conversation so that any item received within that conversation is always moved to a specific folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  destinationFolderId    The Id of the folder to which conversation items should be moved.
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once enabling this rule and moving existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.EnableAlwaysMoveItems = function (destinationFolderId, processSynchronously) {
        return this.Service.EnableAlwaysMoveItemsInConversations([this.Id], destinationFolderId, processSynchronously).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Flags conversation items. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId   The Id of the folder items must belong to in order to be flagged. If contextFolderId is null, items in conversation across the entire mailbox are flagged.
     * @param   {DateTime}   startDate         The start date (can be null).
     * @param   {DateTime}   dueDate           The due date (can be null).
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.FlagItems = function (contextFolderId, startDate, dueDate) {
        var flag = new Flag_1.Flag();
        flag.FlagStatus = ItemFlagStatus_1.ItemFlagStatus.Flagged;
        if (startDate) {
            flag.StartDate = startDate;
        }
        if (dueDate) {
            flag.DueDate = dueDate;
        }
        return this.Service.SetFlagStatusForItemsInConversations([{ key: this.Id, value: this.GlobalLastDeliveryTime }], contextFolderId, flag).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Flag conversation items as complete. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId   The Id of the folder items must belong to in order to be flagged as complete. If contextFolderId is null, items in conversation across the entire mailbox are marked as complete.
     * @param   {DateTime}   completeDate      The complete date (can be null).
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.FlagItemsComplete = function (contextFolderId, completeDate) {
        var flag = new Flag_1.Flag();
        flag.FlagStatus = ItemFlagStatus_1.ItemFlagStatus.Complete;
        if (completeDate) {
            flag.CompleteDate = completeDate;
        }
        return this.Service.SetFlagStatusForItemsInConversations([{ key: this.Id, value: this.GlobalLastDeliveryTime }], contextFolderId, flag).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * @internal This method is not supported in this object.
     * Gets the name of the change XML element.
     *
     * @return  {string}      XML element name,
     */
    Conversation.prototype.GetChangeXmlElementName = function () {
        throw new NotSupportedException_1.NotSupportedException();
    };
    /**
     * @internal This method is not supported in this object.
     * Gets the name of the delete field XML element.
     *
     * @return  {string}      XML element name,
     */
    Conversation.prototype.GetDeleteFieldXmlElementName = function () {
        throw new NotSupportedException_1.NotSupportedException();
    };
    /**
     * The property definition for the Id of this object.
     *
     * @return  {PropertyDefinition}      A PropertyDefinition instance.
     */
    Conversation.prototype.GetIdPropertyDefinition = function () {
        return Schemas_1.Schemas.ConversationSchema.Id;
    };
    /**
     * @internal This method is not supported in this object.
     * Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}                       true if a time zone SOAP header should be emitted; otherwise, false.
     */
    Conversation.prototype.GetIsTimeZoneHeaderRequired = function (isUpdateOperation) {
        throw new NotSupportedException_1.NotSupportedException();
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    Conversation.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    Conversation.prototype.GetSchema = function () {
        return Schemas_1.Schemas.ConversationSchema.Instance;
    };
    /**
     * @internal This method is not supported in this object.
     * Gets the name of the set field XML element.
     *
     * @return  {string}      XML element name,
     */
    Conversation.prototype.GetSetFieldXmlElementName = function () {
        throw new NotSupportedException_1.NotSupportedException();
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    Conversation.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.Conversation;
    };
    /**
     * @internal This is not supported in this object.
     * Deletes the object.
     *
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    Conversation.prototype.InternalDelete = function (deleteMode, sendCancellationsMode, affectedTaskOccurrences) {
        throw new NotSupportedException_1.NotSupportedException();
    };
    /**
     * @internal This method is not supported in this object.
     * Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    Conversation.prototype.InternalLoad = function (propertySet) {
        throw new NotSupportedException_1.NotSupportedException();
    };
    /**
     * Moves items in the specified conversation to a specific folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId       The Id of the folder items must belong to in order to be moved. If contextFolderId is null, items across the entire mailbox are moved.
     * @param   {FolderId}   destinationFolderId   The Id of the destination folder.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.MoveItemsInConversation = function (contextFolderId, destinationFolderId) {
        return this.Service.MoveItemsInConversations([{ key: this.Id, value: this.GlobalLastDeliveryTime }], contextFolderId, destinationFolderId).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    Conversation.prototype.SetReadStateForItemsInConversation = function (contextFolderId, isRead, suppressReadReceipts) {
        if (suppressReadReceipts === void 0) { suppressReadReceipts = null; }
        return this.Service.SetReadStateForItemsInConversations([{ key: this.Id, value: this.GlobalLastDeliveryTime }], contextFolderId, isRead, suppressReadReceipts).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    /**
     * Sets the retention policy of items in the specified conversation. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}          contextFolderId        The Id of the folder items must belong to in order for their retention policy to be set. If contextFolderId is null, the retention policy of items across the entire mailbox are set.
     * @param   {RetentionType}     retentionPolicyType    Retention policy type.
     * @param   {Guid}              retentionPolicyTagId   Retention policy tag id.  Null will clear the policy.
     * @return  {Promise<void>}    Promise
     */
    Conversation.prototype.SetRetentionPolicyForItemsInConversation = function (contextFolderId, retentionPolicyType, retentionPolicyTagId) {
        return this.Service.SetRetentionPolicyForItemsInConversations([{ key: this.Id, value: this.GlobalLastDeliveryTime }], contextFolderId, retentionPolicyType, retentionPolicyTagId).then(function (responses) {
            responses.__thisIndexer(0).ThrowIfNecessary();
        });
    };
    return Conversation;
}(ServiceObject_1.ServiceObject));
exports.Conversation = Conversation;
