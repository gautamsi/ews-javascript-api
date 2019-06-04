"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**custom created to simplify creation of above Enum(s) to ExchangeVersion mapping in EwsUtil, There is no c# like Attribute typesystem and reflection available */
var EnumToSchemaMappingHelper;
(function (EnumToSchemaMappingHelper) {
    EnumToSchemaMappingHelper[EnumToSchemaMappingHelper["WellKnownFolderName"] = 0] = "WellKnownFolderName";
    /**Item Traversal */
    EnumToSchemaMappingHelper[EnumToSchemaMappingHelper["ItemTraversal"] = 1] = "ItemTraversal";
    EnumToSchemaMappingHelper[EnumToSchemaMappingHelper["ConversationQueryTraversal"] = 2] = "ConversationQueryTraversal";
    EnumToSchemaMappingHelper[EnumToSchemaMappingHelper["FileAsMapping"] = 3] = "FileAsMapping";
    EnumToSchemaMappingHelper[EnumToSchemaMappingHelper["EventType"] = 4] = "EventType";
    EnumToSchemaMappingHelper[EnumToSchemaMappingHelper["MeetingRequestsDeliveryScope"] = 5] = "MeetingRequestsDeliveryScope";
    EnumToSchemaMappingHelper[EnumToSchemaMappingHelper["ViewFilter"] = 6] = "ViewFilter";
    EnumToSchemaMappingHelper[EnumToSchemaMappingHelper["MailboxType"] = 7] = "MailboxType";
})(EnumToSchemaMappingHelper = exports.EnumToSchemaMappingHelper || (exports.EnumToSchemaMappingHelper = {}));
