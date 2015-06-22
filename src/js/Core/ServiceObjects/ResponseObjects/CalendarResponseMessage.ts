import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {InternetMessageHeaderCollection} from "../../../ComplexProperties/InternetMessageHeaderCollection";
import {CalendarResponseMessageBase} from "./CalendarResponseMessageBase";
import {EmailAddressCollection} from "../../../ComplexProperties/EmailAddressCollection";
import {Sensitivity} from "../../../Enumerations/Sensitivity";
import {AttachmentCollection} from "../../../ComplexProperties/AttachmentCollection";
import {EmailAddress} from "../../../ComplexProperties/EmailAddress";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
export class CalendarResponseMessage<TMessage> extends CalendarResponseMessageBase<TMessage> {
        Body: MessageBody;
        ToRecipients: EmailAddressCollection;
        CcRecipients: EmailAddressCollection;
        BccRecipients: EmailAddressCollection;
        ItemClass: string;
        Sensitivity: Sensitivity;
        Attachments: AttachmentCollection;
        InternetMessageHeaders: InternetMessageHeaderCollection;
        Sender: EmailAddress;
        GetSchema(): ServiceObjectSchema { throw new Error("CalendarResponseMessage.ts - GetSchema : Not implemented."); }
}