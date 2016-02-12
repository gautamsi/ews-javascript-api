import {ItemSchema} from "../Schemas/ItemSchema";
import {EmailMessageSchema} from "../Schemas/EmailMessageSchema";
import {ResponseObjectSchema} from "../Schemas/ResponseObjectSchema";
import {Item} from "../Items/Item";
import {ResponseMessageSchema} from "../Schemas/ResponseMessageSchema";
import {XmlElementNames} from "../../XmlElementNames";
import {EwsLogging} from "../../EwsLogging";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {ResponseMessageType} from "../../../Enumerations/ResponseMessageType";
import {EmailAddressCollection} from "../../../ComplexProperties/EmailAddressCollection";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";

import {EmailMessage} from "../Items/EmailMessage";
import {ResponseObject} from "./ResponseObject";
/**
 * Represents the base class for e-mail related responses (Reply, Reply all and Forward).
 *
 */
export class ResponseMessage extends ResponseObject<EmailMessage> {
    private responseType: ResponseMessageType = ResponseMessageType.Reply;
    /**
     * Gets a value indicating the type of response this object represents.
     *
     */
    get ResponseType(): ResponseMessageType {
        return this.responseType;
    }
    /**
     * Gets or sets the body of the response.
     *
     */
    get Body(): MessageBody {
        return <MessageBody>this.PropertyBag._getItem(ItemSchema.Body);
    }
    set Body(value: MessageBody) {
        this.PropertyBag._setItem(ItemSchema.Body, value);
    }
    /**
     * Gets a list of recipients the response will be sent to.
     *
     */
    get ToRecipients(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(EmailMessageSchema.ToRecipients);
    }
    /**
     * Gets a list of recipients the response will be sent to as Cc.
     *
     */
    get CcRecipients(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(EmailMessageSchema.CcRecipients);
    }
    /**
     * Gets a list of recipients this response will be sent to as Bcc.
     *
     */
    get BccRecipients(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(EmailMessageSchema.BccRecipients);
    }
    /**
     * Gets or sets the subject of this response.
     *
     */
    get Subject(): string {
        return <string>this.PropertyBag._getItem(ItemSchema.Subject);
    }
    set Subject(value: string) {
        this.PropertyBag._setItem(ItemSchema.Subject, value);
    }
    /**
     * Gets or sets the body prefix of this response. The body prefix will be prepended to the original
    message's body when the response is created.
     *
     */
    get BodyPrefix(): MessageBody {
        return <MessageBody>this.PropertyBag._getItem(ResponseObjectSchema.BodyPrefix);
    }
    set BodyPrefix(value: MessageBody) {
        this.PropertyBag._setItem(ResponseObjectSchema.BodyPrefix, value);
    }
        
    /**
     * Initializes a new instance of the  class.
     *
     * @param   {Item}                    referenceItem   The reference item.
     * @param   {ResponseMessageType}     responseType    Type of the response.
     */
    constructor(referenceItem: Item, responseType: ResponseMessageType) {
        super(referenceItem);
        this.responseType = responseType;
    }
    /**
     * Gets the minimum required server version.
     *
     * @return  {type}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return ResponseMessageSchema.Instance; }
    /**
     * Get XML Element Name - workaround for c# attributes
     */
    GetXmlElementName(): string { return this.GetXmlElementNameOverride(); }
    /**
     * This methods lets subclasses of ServiceObject override the default mechanism by which the XML element name associated with their type is retrieved.
     *
     * @return  {string}      The XML element name associated with this type. If this method returns null or empty, the XML element name associated with this type is determined by the EwsObjectDefinition attribute that decorates the type, if present.
     */
    GetXmlElementNameOverride(): string {
        switch (this.responseType) {
            case ResponseMessageType.Reply:
                return XmlElementNames.ReplyToItem;
            case ResponseMessageType.ReplyAll:
                return XmlElementNames.ReplyAllToItem;
            case ResponseMessageType.Forward:
                return XmlElementNames.ForwardItem;
            default:
                EwsLogging.Assert(
                    false,
                    "ResponseMessage.GetXmlElementNameOverride",
                    "An unexpected value for responseType could not be handled.");
                return null; // Because the compiler wants it
        }
    }
}
