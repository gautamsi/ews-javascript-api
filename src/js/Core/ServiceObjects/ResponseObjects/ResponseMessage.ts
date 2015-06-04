import EmailMessage = require("../Items/EmailMessage");
import MessageBody = require("../../../ComplexProperties/MessageBody");
import ResponseObject = require("./ResponseObject");
import ResponseMessageType = require("../../../Enumerations/ResponseMessageType");
import EmailAddressCollection = require("../../../ComplexProperties/EmailAddressCollection");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import ServiceObjectSchema = require("../Schemas/ServiceObjectSchema");
class ResponseMessage extends ResponseObject<EmailMessage> {
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


export = ResponseMessage;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


