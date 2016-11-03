import { ArrayHelper } from '../../../ExtensionMethods';
import { AttachableAttribute } from "../../../Attributes/AttachableAttribute";
import { DateTime } from "../../../DateTime";
import { EmailAddress } from "../../../ComplexProperties/EmailAddress";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { IPromise } from "../../../Interfaces";
import { ItemAttachment } from "../../../ComplexProperties/ItemAttachment";
import { ItemId } from "../../../ComplexProperties/ItemId";
import { MessageBody } from "../../../ComplexProperties/MessageBody";
import { PostReply } from '../ResponseObjects/PostReply';
import { PropertySet } from "../../PropertySet";
import { ResponseMessage } from "../ResponseObjects/ResponseMessage";
import { ResponseMessageType } from "../../../Enumerations/ResponseMessageType";
import { Schemas } from "../Schemas/Schemas";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { XmlElementNames } from "../../XmlElementNames";

import { Item } from "./Item";
/**
 * Represents a post item. Properties available on post items are defined in the PostItemSchema class.
 * 
 * @sealed
 */
@AttachableAttribute(true)
export class PostItem extends Item {

    /**
     * Gets the conversation index of the post item.
     */
    get ConversationIndex(): number[] {
        return <number[]>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ConversationIndex);
    }

    /**
     * Gets the conversation topic of the post item.
     */
    get ConversationTopic(): string {
        return <string>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ConversationTopic);
    }

    /**
     * Gets or sets the "on behalf" poster of the post item.
     */
    get From(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(Schemas.EmailMessageSchema.From);
    }
    set From(value: EmailAddress) {
        this.PropertyBag._setItem(Schemas.EmailMessageSchema.From, value);
    }

    /**
     * Gets the Internet message Id of the post item.
     */
    get InternetMessageId(): string {
        return <string>this.PropertyBag._getItem(Schemas.EmailMessageSchema.InternetMessageId);
    }

    /**
     * Gets or sets a value indicating whether the post item is read.
     */
    get IsRead(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.EmailMessageSchema.IsRead);
    }
    set IsRead(value: boolean) {
        this.PropertyBag._setItem(Schemas.EmailMessageSchema.IsRead, value);
    }

    /**
     * Gets the the date and time when the post item was posted.
     */
    get PostedTime(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.PostItemSchema.PostedTime);
    }

    /**
     * Gets or sets the references of the post item.
     */
    get References(): string {
        return <string>this.PropertyBag._getItem(Schemas.EmailMessageSchema.References);
    }
    set References(value: string) {
        this.PropertyBag._setItem(Schemas.EmailMessageSchema.References, value);
    }

    /**
     * Gets or sets the sender (poster) of the post item.
     */
    get Sender(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(Schemas.EmailMessageSchema.Sender);
    }
    set Sender(value: EmailAddress) {
        this.PropertyBag._setItem(Schemas.EmailMessageSchema.Sender, value);
    }

    /**
     * Initializes an unsaved local instance of **PostItem**. To bind to an existing post item, use PostItem.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the e-mail message will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Initializes a new instance of the **PostItem** class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    constructor(serviceOrParentAttachment: any) {
        super(serviceOrParentAttachment);
    }

    /**
     * Binds to an existing post item and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the post item.
     * @param   {ItemId}            id            The Id of the post item to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<PostItem>}              An PostItem instance representing the post item corresponding to the specified Id  :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<PostItem>;
    /**
     * Binds to an existing post item and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the post item.
     * @param   {ItemId}            id            The Id of the post item to bind to.
     * @return  {IPromise<PostItem>}              An PostItem instance representing the post item corresponding to the specified Id  :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId): IPromise<PostItem>;
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<PostItem> {
        return service.BindToItem<PostItem>(id, propertySet, PostItem);
    }

    /**
     * Creates a forward response to the post item.
     *
     * @return  {ResponseMessage}      A ResponseMessage representing the forward response that can subsequently be modified and sent.
     */
    CreateForward(): ResponseMessage {
        this.ThrowIfThisIsNew();

        return new ResponseMessage(this, ResponseMessageType.Forward);
    }

    /**
     * Creates a post reply to this post item.
     *
     * @return  {PostReply}      A PostReply that can be modified and saved.
     */
    CreatePostReply(): PostReply {
        this.ThrowIfThisIsNew();

        return new PostReply(this);
    }

    /**
     * Creates a e-mail reply response to the post item.
     *
     * @param   {boolean}   replyAll   Indicates whether the reply should go to everyone involved in the thread.
     * @return  {ResponseMessage}      A ResponseMessage representing the e-mail reply response that can subsequently be modified and sent.
     */
    CreateReply(replyAll: boolean): ResponseMessage {
        this.ThrowIfThisIsNew();

        return new ResponseMessage(
            this,
            replyAll ? ResponseMessageType.ReplyAll : ResponseMessageType.Reply);
    }

    /**
     * Forwards the post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}           bodyPrefix     The prefix to prepend to the original body of the post item.
     * @param   {...EmailAddress[]}     toRecipients   The recipients to forward the post item to.
     * @return  {IPromise<void>}        :Promise.
     */
    Forward(bodyPrefix: MessageBody, ...toRecipients: EmailAddress[]): IPromise<void>;
    /**
     * Forwards the post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}       bodyPrefix     The prefix to prepend to the original body of the post item.
     * @param   {EmailAddress[]}    toRecipients   The recipients to forward the post item to.
     * @return  {IPromise<void>}    :Promise.
     */
    Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): IPromise<void>;
    Forward(bodyPrefix: MessageBody, _toRecipients: EmailAddress[] | EmailAddress): IPromise<void> {
        let toRecipients: EmailAddress[] = [];
        if (arguments.length <= 2) {
            if (ArrayHelper.isArray(_toRecipients)) {
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

        let responseMessage: ResponseMessage = this.CreateForward();

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
        return Schemas.PostItemSchema.Instance;
    }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string {
        return XmlElementNames.PostItem;
    }

    /**
     * Posts a reply to this post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   Body prefix.
     * @return  {IPromise<void>}    :Promise.
     */
    PostReply(bodyPrefix: MessageBody): IPromise<void> {
        let postReply: PostReply = this.CreatePostReply();

        postReply.BodyPrefix = bodyPrefix;

        return <any>postReply.Save();
    }

    /**
     * Replies to the post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   The prefix to prepend to the original body of the post item.
     * @param   {boolean}       replyAll     Indicates whether the reply should be sent to everyone involved in the thread.
     * @return  {IPromise<void>}    :Promise.
     */
    Reply(bodyPrefix: MessageBody, replyAll: boolean): IPromise<void> {
        let responseMessage: ResponseMessage = this.CreateReply(replyAll);

        responseMessage.BodyPrefix = bodyPrefix;

        return responseMessage.SendAndSaveCopy();
    }
}