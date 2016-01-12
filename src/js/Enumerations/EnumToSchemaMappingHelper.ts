/**custom created to simplify creation of above Enum(s) to ExchangeVersion mapping in EwsUtil, There is no c# like Attribute typesystem and reflection available */
export enum EnumToSchemaMappingHelper {
    WellKnownFolderName,
    /**Item Traversal */
    ItemTraversal,
    ConversationQueryTraversal,
    FileAsMapping,
    EventType,
    MeetingRequestsDeliveryScope,
    ViewFilter,
    MailboxType,
}
