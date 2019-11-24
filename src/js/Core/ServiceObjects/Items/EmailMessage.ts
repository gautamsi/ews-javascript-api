import { ApprovalRequestData } from "../../../ComplexProperties/ApprovalRequestData";
import { ConflictResolutionMode } from "../../../Enumerations/ConflictResolutionMode";
import { EmailAddress } from "../../../ComplexProperties/EmailAddress";
import { EmailAddressCollection } from "../../../ComplexProperties/EmailAddressCollection";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { FolderId } from "../../../ComplexProperties/FolderId";
import { ItemAttachment } from "../../../ComplexProperties/ItemAttachment";
import { ItemId } from "../../../ComplexProperties/ItemId";
import { MessageBody } from "../../../ComplexProperties/MessageBody";
import { MessageDisposition } from "../../../Enumerations/MessageDisposition";
import { Promise } from "../../../Promise";
import { PropertySet } from "../../PropertySet";
import { ResponseMessage } from "../ResponseObjects/ResponseMessage";
import { ResponseMessageType } from "../../../Enumerations/ResponseMessageType";
import { Schemas } from "../Schemas/Schemas";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { SuppressReadReceipt } from "../ResponseObjects/SuppressReadReceipt";
import { VotingInformation } from "../../../ComplexProperties/VotingInformation";
import { WellKnownFolderName } from "../../../Enumerations/WellKnownFolderName";
import { XmlElementNames } from "../../XmlElementNames";

import { Item } from "./Item";
/**
 * Represents an **e-mail message**. Properties available on e-mail messages are defined in the *EmailMessageSchema* class.
 *
 */
export class EmailMessage extends Item {
  /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
  public static get Attachable(): boolean {
    return (<any>this).name === "EmailMessage";
  }

  /**
   * Gets the list of To recipients for the e-mail message.
   *
   */
  get ToRecipients(): EmailAddressCollection {
    return <EmailAddressCollection>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ToRecipients);
  }

  /**
   * Gets the list of Bcc recipients for the e-mail message.
   *
   */
  get BccRecipients(): EmailAddressCollection {
    return <EmailAddressCollection>this.PropertyBag._getItem(Schemas.EmailMessageSchema.BccRecipients);
  }

  /**
   * Gets the list of Cc recipients for the e-mail message.
   *
   */
  get CcRecipients(): EmailAddressCollection {
    return <EmailAddressCollection>this.PropertyBag._getItem(Schemas.EmailMessageSchema.CcRecipients);
  }

  /**
   * Gets the conversation topic of the e-mail message.
   *
   */
  get ConversationTopic(): string {
    return <string>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ConversationTopic);
  }

  /**
   * Gets the conversation index of the e-mail message.
   *
   */
  get ConversationIndex(): number[] {
    return <number[]>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ConversationIndex);
  }

  /**
   * Gets or sets the "on behalf" sender of the e-mail message.
   *
   */
  get From(): EmailAddress {
    return <EmailAddress>this.PropertyBag._getItem(Schemas.EmailMessageSchema.From);
  }
  set From(value: EmailAddress) {
    this.PropertyBag._setItem(Schemas.EmailMessageSchema.From, value);
  }

  /**
   * Gets or sets a value indicating whether this is an associated message.
   *
   */
  get IsAssociated(): boolean {
    return this.IsAssociated;
  }
  set IsAssociated(value: boolean) {
    this.PropertyBag._setItem(Schemas.ItemSchema.IsAssociated, value);
  }

  /**
   * Gets or sets a value indicating whether a read receipt is requested for the e-mail message.
   *
   */
  get IsDeliveryReceiptRequested(): boolean {
    return <boolean>this.PropertyBag._getItem(Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
  }
  set IsDeliveryReceiptRequested(value: boolean) {
    this.PropertyBag._setItem(Schemas.EmailMessageSchema.IsDeliveryReceiptRequested, value);
  }

  /**
   * Gets or sets a value indicating whether the e-mail message is read.
   *
   */
  get IsRead(): boolean {
    return <boolean>this.PropertyBag._getItem(Schemas.EmailMessageSchema.IsRead);
  }
  set IsRead(value: boolean) {
    this.PropertyBag._setItem(Schemas.EmailMessageSchema.IsRead, value);
  }

  /**
   * Gets or sets a value indicating whether a read receipt is requested for the e-mail message.
   *
   */
  get IsReadReceiptRequested(): boolean {
    return <boolean>this.PropertyBag._getItem(Schemas.EmailMessageSchema.IsReadReceiptRequested);
  }
  set IsReadReceiptRequested(value: boolean) {
    this.PropertyBag._setItem(Schemas.EmailMessageSchema.IsReadReceiptRequested, value);
  }

  /**
   * Gets or sets a value indicating whether a response is requested for the e-mail message.
   *
   */
  get IsResponseRequested(): boolean {
    return <boolean>this.PropertyBag._getItem(Schemas.EmailMessageSchema.IsResponseRequested);
  }
  set IsResponseRequested(value: boolean) {
    this.PropertyBag._setItem(Schemas.EmailMessageSchema.IsResponseRequested, value);
  }

  /**
   * Gets the Internat Message Id of the e-mail message.
   *
   */
  get InternetMessageId(): string {
    return <string>this.PropertyBag._getItem(Schemas.EmailMessageSchema.InternetMessageId);
  }

  /**
   * Gets or sets the references of the e-mail message.
   *
   */
  get References(): string {
    return <string>this.PropertyBag._getItem(Schemas.EmailMessageSchema.References);
  }
  set References(value: string) {
    this.PropertyBag._setItem(Schemas.EmailMessageSchema.References, value);
  }

  /**
   * Gets a list of e-mail addresses to which replies should be addressed.
   *
   */
  get ReplyTo(): EmailAddressCollection {
    return <EmailAddressCollection>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ReplyTo);
  }

  /**
   * Gets or sets the sender of the e-mail message.
   *
   */
  get Sender(): EmailAddress {
    return <EmailAddress>this.PropertyBag._getItem(Schemas.EmailMessageSchema.Sender);
  }
  set Sender(value: EmailAddress) {
    this.PropertyBag._setItem(Schemas.EmailMessageSchema.Sender, value);
  }

  /**
   * Gets the ReceivedBy property of the e-mail message.
   *
   */
  get ReceivedBy(): EmailAddress {
    return <EmailAddress>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ReceivedBy);
  }

  /**
   * Gets the ReceivedRepresenting property of the e-mail message.
   *
   */
  get ReceivedRepresenting(): EmailAddress {
    return <EmailAddress>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ReceivedRepresenting);
  }

  /**
   * Gets the ApprovalRequestData property of the e-mail message.
   *
   */
  get ApprovalRequestData(): ApprovalRequestData {
    return <ApprovalRequestData>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ApprovalRequestData);
  }

  /**
   * Gets the VotingInformation property of the e-mail message.
   *
   */
  get VotingInformation(): VotingInformation {
    return <VotingInformation>this.PropertyBag._getItem(Schemas.EmailMessageSchema.VotingInformation);
  }

  /**
   * Initializes an unsaved local instance of **EmailMessage**. To bind to an existing e-mail message, use EmailMessage.Bind() instead.
   *
   * @param   {ExchangeService}   service   The ExchangeService object to which the e-mail message will be bound.
   */
  constructor(service: ExchangeService);
  /**
   * @internal Initializes a new instance of the **EmailMessage** class.
   *
   * @param   {ItemAttachment}   parentAttachment   The parent attachment.
   */
  constructor(parentAttachment: ItemAttachment);
  /**
   * @internal ~~**used for super call, easier to manage, do not use in Actual code. //todo:fix - [ ] remove from d.ts file**~~.
   */
  constructor(serviceOrParentAttachment: ExchangeService | ItemAttachment);
  constructor(serviceOrParentAttachment: ExchangeService | ItemAttachment) {
    super(serviceOrParentAttachment);
  }

  /**
   * Binds to an existing e-mail message and loads its first class properties. Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}         service     The service to use to bind to the e-mail message.
   * @param   {ItemId}                  id          The Id of the e-mail message to bind to.
   * @return  {Promise<EmailMessage>}              An EmailMessage instance representing the e-mail message corresponding to the specified Id :Promise.
   */
  static Bind(service: ExchangeService, id: ItemId): Promise<EmailMessage>;
  /**
   * Binds to an existing e-mail message and loads the specified set of properties. Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}         service         The service to use to bind to the e-mail message.
   * @param   {ItemId}                  id              The Id of the e-mail message to bind to.
   * @param   {PropertySet}             propertySet     The set of properties to load.
   * @return  {Promise<EmailMessage>}                  An EmailMessage instance representing the e-mail message corresponding to the specified Id :Promise.
   */
  static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<EmailMessage>;
  static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): Promise<EmailMessage> {
    return service.BindToItem<EmailMessage>(id, propertySet, EmailMessage);
  }

  /**
   * Creates a forward response to the message.
   *
   * @return  {ResponseMessage}      A ResponseMessage representing the forward response that can subsequently be modified and sent.
   */
  CreateForward(): ResponseMessage {
    this.ThrowIfThisIsNew();
    return new ResponseMessage(this, ResponseMessageType.Forward);
  }

  /**
   * Creates a reply response to the message.
   *
   * @param   {boolean}             replyAll   Indicates whether the reply should go to all of the original recipients of the message.
   * @return  {ResponseMessage}     A ResponseMessage representing the reply response that can subsequently be modified and sent.
   */
  CreateReply(replyAll: boolean): ResponseMessage {
    this.ThrowIfThisIsNew();
    return new ResponseMessage(
      this,
      replyAll ? ResponseMessageType.ReplyAll : ResponseMessageType.Reply);
  }

  //Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): Promise<void> { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
  //Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): Promise<void> { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
  /**
   * Forwards the message. Calling this method results in a call to EWS.
   *
   * @param   {MessageBody}   bodyPrefix     The prefix to prepend to the original body of the message.
   * @param   {EmailAddress[]}   toRecipients   The recipients to forward the message to.
   */
  Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): Promise<void> {
    var responseMessage: ResponseMessage = this.CreateForward();

    responseMessage.BodyPrefix = bodyPrefix;
    responseMessage.ToRecipients.AddRange(toRecipients);

    return responseMessage.SendAndSaveCopy();
  }

  /**
   * @internal Gets the minimum required server version.
   *
   * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
   */
  GetMinimumRequiredServerVersion(): ExchangeVersion {
    return ExchangeVersion.Exchange2007_SP1;
  }

  /**
   * @internal Internal method to return the schema associated with this type of object.
   *
   * @return  {ServiceObjectSchema}      The schema associated with this type of object.
   */
  GetSchema(): ServiceObjectSchema {
    return Schemas.EmailMessageSchema.Instance;
  }

  /**
   * @internal Gets the element name of item in XML
   *
   * @return  {string} name of elelment
   */
  GetXmlElementName(): string {
    return XmlElementNames.Message;
  }

  /**
   * Send message.
   *
   * @param   {FolderId}            parentFolderId       The parent folder id.
   * @param   {MessageDisposition}  messageDisposition   The message disposition.
   */
  private async InternalSend(parentFolderId: FolderId, messageDisposition: MessageDisposition): Promise<void> {
    this.ThrowIfThisIsAttachment();

    if (this.IsNew) {
      if (this.Attachments.Count === 0 || messageDisposition === MessageDisposition.SaveOnly) {
        return this.InternalCreate(
          parentFolderId,
          messageDisposition,
          null);
      } else {
        // If the message has attachments, save as a draft (and add attachments) before sending.
        await this.InternalCreate(
          null, // null means use the Drafts folder in the mailbox of the authenticated user.
          MessageDisposition.SaveOnly,
          null
        );
        await this.Service.SendItem(this, parentFolderId);
      }
    } else {
      // Regardless of whether item is dirty or not, if it has unprocessed
      // attachment changes, process them now.

        // Validate and save attachments before sending.
        if(this.HasUnprocessedAttachmentChanges()){
          this.Attachments.Validate();
          await this.Attachments.Save();
        }

        if (this.PropertyBag.GetIsUpdateCallNecessary()) {
          await this.InternalUpdate(
            //ref: //info: <any> to supress cast error, returning promise is required, this time it is not void but no action is taken on this promise.
            parentFolderId,
            ConflictResolutionMode.AutoResolve,
            messageDisposition,
            null
          );
        } else {
          await this.Service.SendItem(this, parentFolderId);
        }
    }
  }

  /**
   * Replies to the message. Calling this method results in a call to EWS.
   *
   * @param   {MessageBody}   bodyPrefix   The prefix to prepend to the original body of the message.
   * @param   {boolean}   replyAll     Indicates whether the reply should be sent to all of the original recipients of the message.
   */
  Reply(bodyPrefix: MessageBody, replyAll: boolean): Promise<void> {
    var responseMessage: ResponseMessage = this.CreateReply(replyAll);

    responseMessage.BodyPrefix = bodyPrefix;

    return responseMessage.SendAndSaveCopy();
  }

  /**
   * Sends this e-mail message. Calling this method results in at least one call to EWS.
   */
  Send(): Promise<void> {
    return this.InternalSend(null, MessageDisposition.SendOnly);
  }

  /**
   * Sends this e-mail message and saves a copy of it in the Sent Items folder. SendAndSaveCopy does not work if the message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method results in a call to EWS.
   *
   */
  SendAndSaveCopy(): Promise<void>;
  /**
   * Sends this e-mail message and saves a copy of it in the specified folder. SendAndSaveCopy does not work if the message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save the copy.
   */
  SendAndSaveCopy(destinationFolderName: WellKnownFolderName): Promise<void>;
  /**
     * Sends this e-mail message and saves a copy of it in the specified folder. SendAndSaveCopy does not work if the
    message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method
    results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the copy.
     */
  SendAndSaveCopy(destinationFolderId: FolderId): Promise<void>;
  SendAndSaveCopy(destinationFolderIdOrName?: FolderId | WellKnownFolderName): Promise<void> {
    var destinationFolderId: FolderId = new FolderId(WellKnownFolderName.SentItems);
    if (arguments.length === 1) {
      if (typeof destinationFolderIdOrName === "number") {
        destinationFolderId = new FolderId(destinationFolderIdOrName);
      } else {
        //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
        destinationFolderId = destinationFolderIdOrName;
      }
    }
    return this.InternalSend(destinationFolderId, MessageDisposition.SendAndSaveCopy);
  }

  /**
   * Suppresses the read receipt on the message. Calling this method results in a call to EWS.
   *
   */
  SuppressReadReceipt(): Promise<void> {
    this.ThrowIfThisIsNew();
    return new SuppressReadReceipt(this).InternalCreate(null, null);
  }
}
