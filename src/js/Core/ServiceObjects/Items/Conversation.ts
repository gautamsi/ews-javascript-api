import { AffectedTaskOccurrence } from "../../../Enumerations/AffectedTaskOccurrence";
import { ConversationFlagStatus } from "../../../Enumerations/ConversationFlagStatus";
import { ConversationId } from "../../../ComplexProperties/ConversationId";
import { DateTime } from "../../../DateTime";
import { DeleteMode } from "../../../Enumerations/DeleteMode";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { ExtendedPropertyCollection } from "../../../ComplexProperties/ExtendedPropertyCollection";
import { Flag } from "../../../ComplexProperties/Flag";
import { FolderId } from "../../../ComplexProperties/FolderId";
import { Guid } from "../../../Guid";
import { IconIndex } from "../../../Enumerations/IconIndex";
import { Importance } from "../../../Enumerations/Importance";
import { IOutParam } from "../../../Interfaces/IOutParam";
import { ItemFlagStatus } from "../../../Enumerations/ItemFlagStatus";
import { ItemIdCollection } from "../../../ComplexProperties/ItemIdCollection";
import { KeyValuePair } from "../../../AltDictionary";
import { NotSupportedException } from "../../../Exceptions/NotSupportedException";
import { Promise } from "../../../Promise";
import { PropertyDefinition } from "../../../PropertyDefinitions/PropertyDefinition";
import { PropertySet } from "../../PropertySet";
import { RetentionType } from "../../../Enumerations/RetentionType";
import { Schemas } from "../Schemas/Schemas";
import { SendCancellationsMode } from "../../../Enumerations/SendCancellationsMode";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { ServiceResponse } from "../../Responses/ServiceResponse";
import { ServiceResponseCollection } from "../../Responses/ServiceResponseCollection";
import { StringHelper } from "../../../ExtensionMethods";
import { StringList } from "../../../ComplexProperties/StringList";
import { XmlElementNames } from "../../XmlElementNames";

import { ServiceObject } from "../ServiceObject";
/**
 * Represents a collection of Conversation related properties.
 * Properties available on this object are defined in the ConversationSchema class.
 */
export class Conversation extends ServiceObject {
  /**
   * Gets the Id of this Conversation.
   */
  get Id(): ConversationId {
    return <ConversationId>this.PropertyBag._getItem(this.GetIdPropertyDefinition());
  }

  /**
   * Gets the topic of this Conversation.
   */
  get Topic(): string {
    var returnValue: IOutParam<string> = { outValue: StringHelper.Empty };

    // This property need not be present hence the property bag may not contain it.
    // Check for the presence of this property before accessing it.
    if (this.PropertyBag.Contains(Schemas.ConversationSchema.Topic)) {
      this.PropertyBag.TryGetPropertyAs<string>(Schemas.ConversationSchema.Topic, returnValue);
    }
    return returnValue.outValue;
  }

  /**
   * Gets a list of all the people who have received messages in this conversation in the current folder only.
   */
  get UniqueRecipients(): StringList {
    return <StringList>this.PropertyBag._getItem(Schemas.ConversationSchema.UniqueRecipients);
  }

  /**
   * Gets a list of all the people who have received messages in this conversation across all folders in the mailbox.
   */
  get GlobalUniqueRecipients(): StringList {
    return <StringList>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalUniqueRecipients);
  }

  /**
   * Gets a list of all the people who have sent messages that are currently unread in this conversation in the current folder only.
   */
  get UniqueUnreadSenders(): StringList {
    var unreadSenders: IOutParam<StringList> = { outValue: null };

    // This property need not be present hence the property bag may not contain it.
    // Check for the presence of this property before accessing it.
    if (this.PropertyBag.Contains(Schemas.ConversationSchema.UniqueUnreadSenders)) {
      this.PropertyBag.TryGetPropertyAs<StringList>(Schemas.ConversationSchema.UniqueUnreadSenders, unreadSenders);
    }
    return unreadSenders.outValue;
  }

  /**
   * Gets a list of all the people who have sent messages that are currently unread in this conversation across all folders in the mailbox.
   */
  get GlobalUniqueUnreadSenders(): StringList {
    var unreadSenders: IOutParam<StringList> = { outValue: null };

    // This property need not be present hence the property bag may not contain it.
    // Check for the presence of this property before accessing it.
    if (this.PropertyBag.Contains(Schemas.ConversationSchema.GlobalUniqueUnreadSenders)) {
      this.PropertyBag.TryGetPropertyAs<StringList>(Schemas.ConversationSchema.GlobalUniqueUnreadSenders, unreadSenders);
    }
    return unreadSenders.outValue;
  }

  /**
   * Gets a list of all the people who have sent messages in this conversation in the current folder only.
   */
  get UniqueSenders(): StringList {
    return <StringList>this.PropertyBag._getItem(Schemas.ConversationSchema.UniqueSenders);
  }

  /**
   * Gets a list of all the people who have sent messages in this conversation across all folders in the mailbox.
   */
  get GlobalUniqueSenders(): StringList {
    return <StringList>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalUniqueSenders);
  }

  /**
   * Gets the delivery time of the message that was last received in this conversation in the current folder only.
   */
  get LastDeliveryTime(): DateTime {
    return <DateTime>this.PropertyBag._getItem(Schemas.ConversationSchema.LastDeliveryTime);
  }

  /**
   * Gets the delivery time of the message that was last received in this conversation across all folders in the mailbox.
   */
  get GlobalLastDeliveryTime(): DateTime {
    return <DateTime>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalLastDeliveryTime);
  }

  /**
   * Gets a list summarizing the categories stamped on messages in this conversation, in the current folder only.
   */
  get Categories(): StringList {
    var returnValue: IOutParam<StringList> = { outValue: null };

    // This property need not be present hence the property bag may not contain it.
    // Check for the presence of this property before accessing it.
    if (this.PropertyBag.Contains(Schemas.ConversationSchema.Categories)) {
      this.PropertyBag.TryGetPropertyAs<StringList>(Schemas.ConversationSchema.Categories, returnValue);
    }
    return returnValue.outValue;
  }

  /**
   * Gets a list summarizing the categories stamped on messages in this conversation, across all folders in the mailbox.
   */
  get GlobalCategories(): StringList {
    var returnValue: IOutParam<StringList> = { outValue: null };

    // This property need not be present hence the property bag may not contain it.
    // Check for the presence of this property before accessing it.
    if (this.PropertyBag.Contains(Schemas.ConversationSchema.GlobalCategories)) {
      this.PropertyBag.TryGetPropertyAs<StringList>(Schemas.ConversationSchema.GlobalCategories, returnValue);
    }
    return returnValue.outValue;
  }

  /**
   * Gets the flag status for this conversation, calculated by aggregating individual messages flag status in the current folder.
   */
  get FlagStatus(): ConversationFlagStatus {
    var returnValue: IOutParam<ConversationFlagStatus> = { outValue: null };

    // This property need not be present hence the property bag may not contain it.
    // Check for the presence of this property before accessing it.
    if (this.PropertyBag.Contains(Schemas.ConversationSchema.FlagStatus)) {
      this.PropertyBag.TryGetPropertyAs<ConversationFlagStatus>(Schemas.ConversationSchema.FlagStatus, returnValue);
    }
    return returnValue.outValue;
  }

  /**
   * Gets the flag status for this conversation, calculated by aggregating individual messages flag status across all folders in the mailbox.
   */
  get GlobalFlagStatus(): ConversationFlagStatus {
    var returnValue: IOutParam<ConversationFlagStatus> = { outValue: null };

    // This property need not be present hence the property bag may not contain it.
    // Check for the presence of this property before accessing it.
    if (this.PropertyBag.Contains(Schemas.ConversationSchema.GlobalFlagStatus)) {
      this.PropertyBag.TryGetPropertyAs<ConversationFlagStatus>(Schemas.ConversationSchema.GlobalFlagStatus, returnValue);
    }
    return returnValue.outValue;
  }

  /**
   * Gets a value indicating if at least one message in this conversation, in the current folder only, has an attachment.
   */
  get HasAttachments(): boolean {
    return <boolean>this.PropertyBag._getItem(Schemas.ConversationSchema.HasAttachments);
  }

  /**
   * Gets a value indicating if at least one message in this conversation, across all folders in the mailbox, has an attachment.
   */
  get GlobalHasAttachments(): boolean {
    return <boolean>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalHasAttachments);
  }

  /**
   * Gets the total number of messages in this conversation in the current folder only.
   */
  get MessageCount(): number {
    return <number>this.PropertyBag._getItem(Schemas.ConversationSchema.MessageCount);
  }

  /**
   * Gets the total number of messages in this conversation across all folders in the mailbox.
   */
  get GlobalMessageCount(): number {
    return <number>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalMessageCount);
  }

  /**
   * Gets the total number of unread messages in this conversation in the current folder only.
   */
  get UnreadCount(): number {
    var returnValue: IOutParam<number> = { outValue: 0 };

    // This property need not be present hence the property bag may not contain it.
    // Check for the presence of this property before accessing it.
    if (this.PropertyBag.Contains(Schemas.ConversationSchema.UnreadCount)) {
      this.PropertyBag.TryGetPropertyAs<number>(Schemas.ConversationSchema.UnreadCount, returnValue);
    }
    return returnValue.outValue;
  }

  /**
   * Gets the total number of unread messages in this conversation across all folders in the mailbox.
   */
  get GlobalUnreadCount(): number {
    var returnValue: IOutParam<number> = { outValue: 0 };

    // This property need not be present hence the property bag may not contain it.
    // Check for the presence of this property before accessing it.
    if (this.PropertyBag.Contains(Schemas.ConversationSchema.GlobalUnreadCount)) {
      this.PropertyBag.TryGetPropertyAs<number>(Schemas.ConversationSchema.GlobalUnreadCount, returnValue);
    }
    return returnValue.outValue;
  }

  /**
   * Gets the size of this conversation, calculated by adding the sizes of all messages in the conversation in the current folder only.
   */
  get Size(): number {
    return <number>this.PropertyBag._getItem(Schemas.ConversationSchema.Size);
  }

  /**
   * Gets the size of this conversation, calculated by adding the sizes of all messages in the conversation across all folders in the mailbox.
   */
  get GlobalSize(): number {
    return <number>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalSize);
  }

  /**
   * Gets a list summarizing the classes of the items in this conversation, in the current folder only.
   */
  get ItemClasses(): StringList {
    return <StringList>this.PropertyBag._getItem(Schemas.ConversationSchema.ItemClasses);
  }

  /**
   * Gets a list summarizing the classes of the items in this conversation, across all folders in the mailbox.
   */
  get GlobalItemClasses(): StringList {
    return <StringList>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalItemClasses);
  }

  /**
   * Gets the importance of this conversation, calculated by aggregating individual messages importance in the current folder only.
   */
  get Importance(): Importance {
    return <Importance>this.PropertyBag._getItem(Schemas.ConversationSchema.Importance);
  }

  /**
   * Gets the importance of this conversation, calculated by aggregating individual messages importance across all folders in the mailbox.
   */
  get GlobalImportance(): Importance {
    return <Importance>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalImportance);
  }

  /**
   * Gets the Ids of the messages in this conversation, in the current folder only.
   */
  get ItemIds(): ItemIdCollection {
    return <ItemIdCollection>this.PropertyBag._getItem(Schemas.ConversationSchema.ItemIds);
  }

  /**
   * Gets the Ids of the messages in this conversation, across all folders in the mailbox.
   */
  get GlobalItemIds(): ItemIdCollection {
    return <ItemIdCollection>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalItemIds);
  }

  /**
   * Gets the date and time this conversation was last modified.
   */
  get LastModifiedTime(): DateTime {
    return <DateTime>this.PropertyBag._getItem(Schemas.ConversationSchema.LastModifiedTime);
  }

  /**
   * Gets the conversation instance key.
   */
  get InstanceKey(): number[] {
    return <number[]>this.PropertyBag._getItem(Schemas.ConversationSchema.InstanceKey);
  }

  /**
   * Gets the conversation Preview.
   */
  get Preview(): string {
    return <string>this.PropertyBag._getItem(Schemas.ConversationSchema.Preview);
  }

  /**
   * Gets the conversation IconIndex.
   */
  get IconIndex(): IconIndex {
    return <IconIndex>this.PropertyBag._getItem(Schemas.ConversationSchema.IconIndex);
  }

  /**
   * Gets the conversation global IconIndex.
   */
  get GlobalIconIndex(): IconIndex {
    return <IconIndex>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalIconIndex);
  }

  /**
   * Gets the draft item ids.
   */
  get DraftItemIds(): ItemIdCollection {
    return <ItemIdCollection>this.PropertyBag._getItem(Schemas.ConversationSchema.DraftItemIds);
  }

  /**
   * Gets a value indicating if at least one message in this conversation, in the current folder only, is an IRM.
   */
  get HasIrm(): boolean {
    return <boolean>this.PropertyBag._getItem(Schemas.ConversationSchema.HasIrm);
  }

  /**
   * Gets a value indicating if at least one message in this conversation, across all folders in the mailbox, is an IRM.
   */
  get GlobalHasIrm(): boolean {
    return <boolean>this.PropertyBag._getItem(Schemas.ConversationSchema.GlobalHasIrm);
  }

  /**
   * @internal Initializes an unsaved local instance of **Conversation** class.
   *
   * @param   {ExchangeService}   service   The ExchangeService object to which the item will be bound.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * Clear flags for conversation items. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}   contextFolderId   The Id of the folder items must belong to in order to be unflagged. If contextFolderId is null, flags for items in conversation across the entire mailbox are cleared.
   * @return  {Promise<void>}    Promise
   */
  async ClearItemFlags(contextFolderId: FolderId): Promise<void> {
    let flag: Flag = new Flag();
    flag.FlagStatus = ItemFlagStatus.NotFlagged;

    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.SetFlagStatusForItemsInConversations(
      [{ key: this.Id, value: this.GlobalLastDeliveryTime }],
      contextFolderId,
      flag
    );
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Copies items in the specified conversation to a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}   contextFolderId       The Id of the folder items must belong to in order to be copied. If contextFolderId is null, items across the entire mailbox are copied.
   * @param   {FolderId}   destinationFolderId   The Id of the destination folder.
   * @return  {Promise<void>}    Promise
   */
  async CopyItemsInConversation(contextFolderId: FolderId, destinationFolderId: FolderId): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.CopyItemsInConversations(
      [{ key: this.Id, value: this.GlobalLastDeliveryTime }],
      contextFolderId,
      destinationFolderId
    );
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Deletes items in the specified conversation.
   * Calling this method results in a call to EWS.
   *
   * @param   {FolderId}      contextFolderId   The Id of the folder items must belong to in order to be deleted. If contextFolderId is null, items across the entire mailbox are deleted.
   * @param   {DeleteMode}    deleteMode        The deletion mode.
   * @return  {Promise<void>}    Promise
   */
  async DeleteItems(contextFolderId: FolderId, deleteMode: DeleteMode): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.DeleteItemsInConversations(
      [{ key: this.Id, value: this.GlobalLastDeliveryTime }],
      contextFolderId,
      deleteMode);
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Sets up a conversation so that any item received within that conversation is no longer categorized.
   * Calling this method results in a call to EWS.
   *
   * @param   {boolean}   processSynchronously   **<not used>**Indicates whether the method should return only once disabling this rule and removing the categories from existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
   * @return  {Promise<void>}    Promise
   */
  async DisableAlwaysCategorizeItems(processSynchronously: boolean): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.DisableAlwaysCategorizeItemsInConversations(
      [this.Id],
      processSynchronously);
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Sets up a conversation so that any item received within that conversation is no longer moved to Deleted Items folder.
   * Calling this method results in a call to EWS.
   *
   * @param   {boolean}   processSynchronously   Indicates whether the method should return only once disabling this rule and restoring the items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
   * @return  {Promise<void>}    Promise
   */
  async DisableAlwaysDeleteItems(processSynchronously: boolean): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.DisableAlwaysDeleteItemsInConversations(
      [this.Id],
      processSynchronously);
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Sets up a conversation so that any item received within that conversation is no longer moved to a specific folder.
   * Calling this method results in a call to EWS.
   *
   * @param   {boolean}   processSynchronously   Indicates whether the method should return only once disabling this rule is completely done. If processSynchronously is false, the method returns immediately.
   * @return  {Promise<void>}    Promise
   */
  async DisableAlwaysMoveItemsInConversation(processSynchronously: boolean): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.DisableAlwaysMoveItemsInConversations(
      [this.Id],
      processSynchronously);
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Sets up a conversation so that any item received within that conversation is always categorized.
   * Calling this method results in a call to EWS.
   *
   * @param   {string[]}  categories             The categories that should be stamped on items in the conversation.
   * @param   {boolean}   processSynchronously   Indicates whether the method should return only once enabling this rule and stamping existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
   * @return  {Promise<void>}    Promise
   */
  async EnableAlwaysCategorizeItems(categories: string[], processSynchronously: boolean): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.EnableAlwaysCategorizeItemsInConversations(
      [this.Id],
      categories,
      processSynchronously);
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Sets up a conversation so that any item received within that conversation is always moved to Deleted Items folder.
   * Calling this method results in a call to EWS.
   *
   * @param   {boolean}   processSynchronously   Indicates whether the method should return only once enabling this rule and deleting existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
   * @return  {Promise<void>}    Promise
   */
  async EnableAlwaysDeleteItems(processSynchronously: boolean): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.EnableAlwaysDeleteItemsInConversations(
      [this.Id],
      processSynchronously);
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Sets up a conversation so that any item received within that conversation is always moved to a specific folder.
   * Calling this method results in a call to EWS.
   *
   * @param   {FolderId}  destinationFolderId    The Id of the folder to which conversation items should be moved.
   * @param   {boolean}   processSynchronously   Indicates whether the method should return only once enabling this rule and moving existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
   * @return  {Promise<void>}    Promise
   */
  async EnableAlwaysMoveItems(destinationFolderId: FolderId, processSynchronously: boolean): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.EnableAlwaysMoveItemsInConversations([this.Id], destinationFolderId, processSynchronously);
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Flags conversation items. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}   contextFolderId   The Id of the folder items must belong to in order to be flagged. If contextFolderId is null, items in conversation across the entire mailbox are flagged.
   * @param   {DateTime}   startDate         The start date (can be null).
   * @param   {DateTime}   dueDate           The due date (can be null).
   * @return  {Promise<void>}    Promise
   */
  async FlagItems(contextFolderId: FolderId, startDate: DateTime, dueDate: DateTime): Promise<void> {
    let flag: Flag = new Flag();

    flag.FlagStatus = ItemFlagStatus.Flagged;

    if (startDate) {
      flag.StartDate = startDate;
    }
    if (dueDate) {
      flag.DueDate = dueDate;
    }

    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.SetFlagStatusForItemsInConversations(
      [{ key: this.Id, value: this.GlobalLastDeliveryTime }],
      contextFolderId,
      flag
    );
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Flag conversation items as complete. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}   contextFolderId   The Id of the folder items must belong to in order to be flagged as complete. If contextFolderId is null, items in conversation across the entire mailbox are marked as complete.
   * @param   {DateTime}   completeDate      The complete date (can be null).
   * @return  {Promise<void>}    Promise
   */
  async FlagItemsComplete(contextFolderId: FolderId, completeDate: DateTime): Promise<void> {
    let flag: Flag = new Flag();
    flag.FlagStatus = ItemFlagStatus.Complete;

    if (completeDate) {
      flag.CompleteDate = completeDate;
    }

    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.SetFlagStatusForItemsInConversations(
      [{ key: this.Id, value: this.GlobalLastDeliveryTime }],
      contextFolderId,
      flag
    );
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * @internal This method is not supported in this object.
   * Gets the name of the change XML element.
   *
   * @return  {string}      XML element name,
   */
  GetChangeXmlElementName(): string {
    throw new NotSupportedException();
  }

  /**
   * @internal This method is not supported in this object.
   * Gets the name of the delete field XML element.
   *
   * @return  {string}      XML element name,
   */
  GetDeleteFieldXmlElementName(): string {
    throw new NotSupportedException();
  }

  /**
   * The property definition for the Id of this object.
   *
   * @return  {PropertyDefinition}      A PropertyDefinition instance.
   */
  GetIdPropertyDefinition(): PropertyDefinition {
    return Schemas.ConversationSchema.Id;
  }

  /**
   * @internal This method is not supported in this object.
   * Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
   *
   * @param   {boolean}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
   * @return  {boolean}                       true if a time zone SOAP header should be emitted; otherwise, false.
   */
  GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean {
    throw new NotSupportedException();
  }

  /**
   * @internal Gets the minimum required server version.
   *
   * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
   */
  GetMinimumRequiredServerVersion(): ExchangeVersion {
    return ExchangeVersion.Exchange2010_SP1;
  }

  /**
   * @internal Internal method to return the schema associated with this type of object.
   *
   * @return  {ServiceObjectSchema}      The schema associated with this type of object.
   */
  GetSchema(): ServiceObjectSchema {
    return Schemas.ConversationSchema.Instance;
  }

  /**
   * @internal This method is not supported in this object.
   * Gets the name of the set field XML element.
   *
   * @return  {string}      XML element name,
   */
  GetSetFieldXmlElementName(): string {
    throw new NotSupportedException();
  }

  /**
   * @internal Gets the element name of item in XML
   *
   * @return  {string} name of elelment
   */
  GetXmlElementName(): string {
    return XmlElementNames.Conversation;
  }

  /**
   * @internal This is not supported in this object.
   * Deletes the object.
   *
   * @param   {DeleteMode}                deleteMode                The deletion mode.
   * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
   * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
   */
  InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): Promise<void> {
    throw new NotSupportedException();
  }

  /**
   * @internal This method is not supported in this object.
   * Loads the specified set of properties on the object.
   *
   * @param   {PropertySet}   propertySet   The properties to load.
   */
  InternalLoad(propertySet: PropertySet): Promise<void> {
    throw new NotSupportedException();
  }

  /**
   * Moves items in the specified conversation to a specific folder.
   * Calling this method results in a call to EWS.
   *
   * @param   {FolderId}   contextFolderId       The Id of the folder items must belong to in order to be moved. If contextFolderId is null, items across the entire mailbox are moved.
   * @param   {FolderId}   destinationFolderId   The Id of the destination folder.
   * @return  {Promise<void>}    Promise
   */
  async MoveItemsInConversation(contextFolderId: FolderId, destinationFolderId: FolderId): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.MoveItemsInConversations(
      [{ key: this.Id, value: this.GlobalLastDeliveryTime }],
      contextFolderId,
      destinationFolderId
    );
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Sets the read state of items in the specified conversation. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}  contextFolderId   The Id of the folder items must belong to in order for their read state to be set. If contextFolderId is null, the read states of items across the entire mailbox are set.
   * @param   {boolean}   isRead            if set to true, conversation items are marked as read; otherwise they are marked as unread.
   * @return  {Promise<void>}    Promise
   */
  SetReadStateForItemsInConversation(contextFolderId: FolderId, isRead: boolean): Promise<void>;
  /**
   * Sets the read state of items in the specified conversation. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}  contextFolderId        The Id of the folder items must belong to in order for their read state to be set. If contextFolderId is null, the read states of items across the entire mailbox are set.
   * @param   {boolean}   isRead                 if set to true, conversation items are marked as read; otherwise they are marked as unread.
   * @param   {boolean}   suppressReadReceipts   if set to true read receipts are suppressed.
   * @return  {Promise<void>}    Promise
   */
  SetReadStateForItemsInConversation(contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): Promise<void>;
  async SetReadStateForItemsInConversation(contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean = null): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.SetReadStateForItemsInConversations(
      [{ key: this.Id, value: this.GlobalLastDeliveryTime }],
      contextFolderId,
      isRead,
      suppressReadReceipts
    );
    responses.__thisIndexer(0).ThrowIfNecessary();
  }

  /**
   * Sets the retention policy of items in the specified conversation. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}          contextFolderId        The Id of the folder items must belong to in order for their retention policy to be set. If contextFolderId is null, the retention policy of items across the entire mailbox are set.
   * @param   {RetentionType}     retentionPolicyType    Retention policy type.
   * @param   {Guid}              retentionPolicyTagId   Retention policy tag id.  Null will clear the policy.
   * @return  {Promise<void>}    Promise
   */
  async SetRetentionPolicyForItemsInConversation(contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: Guid): Promise<void> {
    const responses: ServiceResponseCollection<ServiceResponse> = await this.Service.SetRetentionPolicyForItemsInConversations(
      [{ key: this.Id, value: this.GlobalLastDeliveryTime }],
      contextFolderId,
      retentionPolicyType,
      retentionPolicyTagId
    );
    responses.__thisIndexer(0).ThrowIfNecessary();
  }
}
