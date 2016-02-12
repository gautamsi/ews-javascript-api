import {ResponseMessageType} from "../../../Enumerations/ResponseMessageType";
import {ConflictResolutionMode} from "../../../Enumerations/ConflictResolutionMode";
import {SuppressReadReceipt} from "../ResponseObjects/SuppressReadReceipt";
import {ItemSchema} from "../Schemas/ItemSchema";
import {ItemAttachment} from "../../../ComplexProperties/ItemAttachment";
import {EmailAddressCollection} from "../../../ComplexProperties/EmailAddressCollection";
import {EmailAddress} from "../../../ComplexProperties/EmailAddress";
import {ApprovalRequestData} from "../../../ComplexProperties/ApprovalRequestData";
import {VotingInformation} from "../../../ComplexProperties/VotingInformation";
import {ExchangeService} from "../../ExchangeService";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {PropertySet} from "../../PropertySet";
import {ResponseMessage} from "../ResponseObjects/ResponseMessage";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {EmailMessageSchema} from "../Schemas/EmailMessageSchema";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {MessageDisposition} from "../../../Enumerations/MessageDisposition";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
import {XmlElementNames} from "../../XmlElementNames";
import {IPromise} from "../../../Interfaces";

import {Item} from "./Item";
/**
 * Represents an **e-mail message**. Properties available on e-mail messages are defined in the *EmailMessageSchema* class.
 *
 */
export class EmailMessage extends Item {

    /**
     * Gets the list of To recipients for the e-mail message.
     *
     */
    get ToRecipients(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(EmailMessageSchema.ToRecipients);
    }
    
    /**
     * Gets the list of Bcc recipients for the e-mail message.
     *
     */
    get BccRecipients(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(EmailMessageSchema.BccRecipients);
    }
    
    /**
     * Gets the list of Cc recipients for the e-mail message.
     *
     */
    get CcRecipients(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(EmailMessageSchema.CcRecipients);
    }
    
    /**
     * Gets the conversation topic of the e-mail message.
     *
     */
    get ConversationTopic(): string {
        return <string>this.PropertyBag._getItem(EmailMessageSchema.ConversationTopic);
    }
    
    /**
     * Gets the conversation index of the e-mail message.
     *
     */
    get ConversationIndex(): number[] {
        return <number[]>this.PropertyBag._getItem(EmailMessageSchema.ConversationIndex);
    }
    
    /**
     * Gets or sets the "on behalf" sender of the e-mail message.
     *
     */
    get From(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(EmailMessageSchema.From);
    }
    set From(value: EmailAddress) {
        this.PropertyBag._setItem(EmailMessageSchema.From, value);
    }
    
    /**
     * Gets or sets a value indicating whether this is an associated message.
     *
     */
    get IsAssociated(): boolean {
        return this.IsAssociated;
    }
    set IsAssociated(value: boolean) {
        this.PropertyBag._setItem(ItemSchema.IsAssociated, value);
    }
    
    /**
     * Gets or sets a value indicating whether a read receipt is requested for the e-mail message.
     *
     */
    get IsDeliveryReceiptRequested(): boolean {
        return <boolean>this.PropertyBag._getItem(EmailMessageSchema.IsDeliveryReceiptRequested);
    }
    set IsDeliveryReceiptRequested(value: boolean) {
        this.PropertyBag._setItem(EmailMessageSchema.IsDeliveryReceiptRequested, value);
    }
    
    /**
     * Gets or sets a value indicating whether the e-mail message is read.
     *
     */
    get IsRead(): boolean {
        return <boolean>this.PropertyBag._getItem(EmailMessageSchema.IsRead);
    }
    set IsRead(value: boolean) {
        this.PropertyBag._setItem(EmailMessageSchema.IsRead, value);
    }
    
    /**
     * Gets or sets a value indicating whether a read receipt is requested for the e-mail message.
     *
     */
    get IsReadReceiptRequested(): boolean {
        return <boolean>this.PropertyBag._getItem(EmailMessageSchema.IsReadReceiptRequested);
    }
    set IsReadReceiptRequested(value: boolean) {
        this.PropertyBag._setItem(EmailMessageSchema.IsReadReceiptRequested, value);
    }
    
    /**
     * Gets or sets a value indicating whether a response is requested for the e-mail message.
     *
     */
    get IsResponseRequested(): boolean {
        return <boolean>this.PropertyBag._getItem(EmailMessageSchema.IsResponseRequested);
    }
    set IsResponseRequested(value: boolean) {
        this.PropertyBag._setItem(EmailMessageSchema.IsResponseRequested, value);
    }
    
    /**
     * Gets the Internat Message Id of the e-mail message.
     *
     */
    get InternetMessageId(): string {
        return <string>this.PropertyBag._getItem(EmailMessageSchema.InternetMessageId);
    }
    
    /**
     * Gets or sets the references of the e-mail message.
     *
     */
    get References(): string {
        return <string>this.PropertyBag._getItem(EmailMessageSchema.References);
    }
    set References(value: string) {
        this.PropertyBag._setItem(EmailMessageSchema.References, value);
    }
    
    /**
     * Gets a list of e-mail addresses to which replies should be addressed.
     *
     */
    get ReplyTo(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(EmailMessageSchema.ReplyTo);
    }
    
    /**
     * Gets or sets the sender of the e-mail message.
     *
     */
    get Sender(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(EmailMessageSchema.Sender);
    }
    set Sender(value: EmailAddress) {
        this.PropertyBag._setItem(EmailMessageSchema.Sender, value);
    }
    
    /**
     * Gets the ReceivedBy property of the e-mail message.
     *
     */
    get ReceivedBy(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(EmailMessageSchema.ReceivedBy);
    }
    
    /**
     * Gets the ReceivedRepresenting property of the e-mail message.
     *
     */
    get ReceivedRepresenting(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(EmailMessageSchema.ReceivedRepresenting);
    }
    
    /**
     * Gets the ApprovalRequestData property of the e-mail message.
     *
     */
    get ApprovalRequestData(): ApprovalRequestData {
        return <ApprovalRequestData>this.PropertyBag._getItem(EmailMessageSchema.ApprovalRequestData);
    }
    
    /**
     * Gets the VotingInformation property of the e-mail message.
     *
     */
    get VotingInformation(): VotingInformation {
        return <VotingInformation>this.PropertyBag._getItem(EmailMessageSchema.VotingInformation);
    }    
    
    /**
     * Initializes an unsaved local instance of . To bind to an existing e-mail message, use EmailMessage.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the e-mail message will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Initializes a new instance of the  class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    constructor(serviceOrParentAttachment: ExchangeService | ItemAttachment) {
        super(serviceOrParentAttachment);
    }


    /**
     * Binds to an existing e-mail message and loads its first class properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}         service     The service to use to bind to the e-mail message.
     * @param   {ItemId}                  id          The Id of the e-mail message to bind to.
     * @return  {IPromise<EmailMessage>}              An EmailMessage instance representing the e-mail message corresponding to the specified Id :Promise. 
     */
    static Bind(service: ExchangeService, id: ItemId): IPromise<EmailMessage>;
    /**
     * Binds to an existing e-mail message and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}         service         The service to use to bind to the e-mail message.
     * @param   {ItemId}                  id              The Id of the e-mail message to bind to.
     * @param   {PropertySet}             propertySet     The set of properties to load.
     * @return  {IPromise<EmailMessage>}                  An EmailMessage instance representing the e-mail message corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<EmailMessage>;
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<EmailMessage> {
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
    
    //Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): IPromise<void> { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
    //Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): IPromise<void> { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
    /**
     * Forwards the message. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix     The prefix to prepend to the original body of the message.
     * @param   {EmailAddress[]}   toRecipients   The recipients to forward the message to.
     */
    Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): IPromise<void> {
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
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return EmailMessageSchema.Instance; }
    
    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.Message; }
    
    /**
     * Send message.
     *
     * @param   {FolderId}            parentFolderId       The parent folder id.
     * @param   {MessageDisposition}  messageDisposition   The message disposition.
     */
    private InternalSend(parentFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<void> {
        this.ThrowIfThisIsAttachment();

        if (this.IsNew) {
            if ((this.Attachments.Count == 0) || (messageDisposition == MessageDisposition.SaveOnly)) {
                return this.InternalCreate(
                    parentFolderId,
                    messageDisposition,
                    null);
            }
            else {
                // If the message has attachments, save as a draft (and add attachments) before sending.
                this.InternalCreate(
                    null,                           // null means use the Drafts folder in the mailbox of the authenticated user.
                    MessageDisposition.SaveOnly,
                    null).then((results) => {
                        return this.Service.SendItem(this, parentFolderId);
                    });
            }
        }
        else {
            // Regardless of whether item is dirty or not, if it has unprocessed
            // attachment changes, process them now.
            
            debugger; //todo: check - check for attachment save() promise. 
            
            // Validate and save attachments before sending.
            if (this.HasUnprocessedAttachmentChanges()) {
                this.Attachments.Validate();
                this.Attachments.Save();
            }

            debugger; //todo: check - check for attachment save() promise.
            
            if (this.PropertyBag.GetIsUpdateCallNecessary()) {
                this.InternalUpdate(
                    parentFolderId,
                    ConflictResolutionMode.AutoResolve,
                    messageDisposition,
                    null);
            }
            else {
                return this.Service.SendItem(this, parentFolderId);
            }
        }
    }
    
    /**
     * Replies to the message. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   The prefix to prepend to the original body of the message.
     * @param   {boolean}   replyAll     Indicates whether the reply should be sent to all of the original recipients of the message.
     */
    Reply(bodyPrefix: MessageBody, replyAll: boolean): IPromise<void> {
        var responseMessage: ResponseMessage = this.CreateReply(replyAll);

        responseMessage.BodyPrefix = bodyPrefix;

        return responseMessage.SendAndSaveCopy();
    }
    
    /**
     * Sends this e-mail message. Calling this method results in at least one call to EWS.
     */
    Send(): IPromise<void> { return this.InternalSend(null, MessageDisposition.SendOnly); }
    
    /**
     * Sends this e-mail message and saves a copy of it in the Sent Items folder. SendAndSaveCopy does not work if the message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method results in a call to EWS.
     *
     */
    SendAndSaveCopy(): IPromise<void>;
    /**
     * Sends this e-mail message and saves a copy of it in the specified folder. SendAndSaveCopy does not work if the message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save the copy.
     */
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): IPromise<void>;
    /**
     * Sends this e-mail message and saves a copy of it in the specified folder. SendAndSaveCopy does not work if the
    message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method
    results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the copy.
     */
    SendAndSaveCopy(destinationFolderId: FolderId): IPromise<void>;
    SendAndSaveCopy(destinationFolderIdOrName?: FolderId | WellKnownFolderName): IPromise<void> {
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
    SuppressReadReceipt(): IPromise<void> {
        this.ThrowIfThisIsNew();
        return (new SuppressReadReceipt(this)).InternalCreate(null, null);
    }
}
