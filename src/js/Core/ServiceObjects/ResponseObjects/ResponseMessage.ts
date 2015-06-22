import {EmailMessage} from "../Items/EmailMessage";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {ResponseObject} from "./ResponseObject";
import {ResponseMessageType} from "../../../Enumerations/ResponseMessageType";
import {EmailAddressCollection} from "../../../ComplexProperties/EmailAddressCollection";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
export class ResponseMessage extends ResponseObject<EmailMessage> {
    ResponseType: ResponseMessageType;
    Body: MessageBody;
    ToRecipients: EmailAddressCollection;
    CcRecipients: EmailAddressCollection;
    BccRecipients: EmailAddressCollection;
    Subject: string;
    BodyPrefix: MessageBody;
    private responseType: ResponseMessageType;
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("ResponseMessage.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetSchema(): ServiceObjectSchema { throw new Error("ResponseMessage.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return this.GetXmlElementNameOverride(); }
    GetXmlElementNameOverride(): string { throw new Error("ResponseMessage.ts - GetXmlElementNameOverride : Not implemented."); }
}
