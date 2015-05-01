   class ResponseMessage extends ResponseObject<EmailMessage> {
        ResponseType: ResponseMessageType;
        Body: MessageBody;
        ToRecipients: EmailAddressCollection;
        CcRecipients: EmailAddressCollection;
        BccRecipients: EmailAddressCollection;
        Subject: string;
        BodyPrefix: MessageBody;
        private responseType: ResponseMessageType;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        GetXmlElementNameOverride(): string { throw new Error("Not implemented."); }
    }


   export = ResponseMessage;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


