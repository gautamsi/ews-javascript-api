import {Schemas} from "../Schemas/Schemas";
import {Item} from "../Items/Item";
import {EmailMessage} from "../Items/EmailMessage";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {InternetMessageHeaderCollection} from "../../../ComplexProperties/InternetMessageHeaderCollection";
import {EmailAddressCollection} from "../../../ComplexProperties/EmailAddressCollection";
import {Sensitivity} from "../../../Enumerations/Sensitivity";
import {AttachmentCollection} from "../../../ComplexProperties/AttachmentCollection";
import {EmailAddress} from "../../../ComplexProperties/EmailAddress";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";

import {CalendarResponseMessageBase} from "./CalendarResponseMessageBase";
/**
 * Represents the base class for accept, tentatively accept and decline response messages.
 */
export class CalendarResponseMessage<TMessage extends EmailMessage> extends CalendarResponseMessageBase<TMessage> { //abstract //
    /**
     * Gets or sets the body of the response.
     */
    get Body(): MessageBody {
        return <MessageBody>this.PropertyBag._getItem(Schemas.ItemSchema.Body);
    }
    set Body(value: MessageBody) {
        this.PropertyBag._setItem(Schemas.ItemSchema.Body, value);
    }
    /**
     * Gets a list of recipients the response will be sent to.
     */
    get ToRecipients(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(Schemas.EmailMessageSchema.ToRecipients);
    }
    /**
     * Gets a list of recipients the response will be sent to as Cc.
     */
    get CcRecipients(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(Schemas.EmailMessageSchema.CcRecipients);
    }
    /**
     * Gets a list of recipients this response will be sent to as Bcc.
     */
    get BccRecipients(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(Schemas.EmailMessageSchema.BccRecipients);
    }
    get ItemClass(): string {
        return <string>this.PropertyBag._getItem(Schemas.ItemSchema.ItemClass);
    }
    set ItemClass(value: string) {
        this.PropertyBag._setItem(Schemas.ItemSchema.ItemClass, value);
    }
    /**
     * Gets or sets the sensitivity of this response.
     */
    get Sensitivity(): Sensitivity {
        return <Sensitivity>this.PropertyBag._getItem(Schemas.ItemSchema.Sensitivity);
    }
    set Sensitivity(value: Sensitivity) {
        this.PropertyBag._setItem(Schemas.ItemSchema.Sensitivity, value);
    }
    /**
     * Gets a list of attachments to this response.
     */
    get Attachments(): AttachmentCollection {
        return <AttachmentCollection>this.PropertyBag._getItem(Schemas.ItemSchema.Attachments);
    }
    get InternetMessageHeaders(): InternetMessageHeaderCollection {
        return <InternetMessageHeaderCollection>this.PropertyBag._getItem(Schemas.ItemSchema.InternetMessageHeaders);
    }
    /**
     * Gets or sets the sender of this response.
     */
    get Sender(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(Schemas.EmailMessageSchema.Sender);
    }
    set Sender(value: EmailAddress) {
        this.PropertyBag._setItem(Schemas.EmailMessageSchema.Sender, value);
    }
    /**
     * Initializes a new instance of the **CalendarResponseMessage** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item) {
        super(referenceItem);
    }
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return Schemas.CalendarResponseObjectSchema.Instance; }
}