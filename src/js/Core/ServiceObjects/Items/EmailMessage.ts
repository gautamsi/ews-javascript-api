import Item = require("./Item");
 class EmailMessage extends Item {
    ////////ToRecipients: EmailAddressCollection;
    ////////BccRecipients: EmailAddressCollection;
    ////////CcRecipients: EmailAddressCollection;
    ////////ConversationTopic: string;
    ////////ConversationIndex: System.Byte[];
    ////////From: EmailAddress;
    ////////IsAssociated: boolean;
    ////////IsDeliveryReceiptRequested: boolean;
    ////////IsRead: boolean;
    ////////IsReadReceiptRequested: boolean;
    ////////IsResponseRequested: boolean;
    ////////InternetMessageId: string;
    ////////References: string;
    ////////ReplyTo: EmailAddressCollection;
    ////////Sender: EmailAddress;
    ////////ReceivedBy: EmailAddress;
    ////////ReceivedRepresenting: EmailAddress;
    ////////ApprovalRequestData: ApprovalRequestData;
    ////////VotingInformation: VotingInformation;
    ////////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): EmailMessage { throw new Error("EmailMessage.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId): EmailMessage { throw new Error("EmailMessage.ts - Bind : Not implemented."); }
    ////////CreateForward(): ResponseMessage { throw new Error("EmailMessage.ts - CreateForward : Not implemented."); }
    ////////CreateReply(replyAll: boolean): ResponseMessage { throw new Error("EmailMessage.ts - CreateReply : Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: any): any { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): any { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
    ////////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("EmailMessage.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    ////////GetSchema(): ServiceObjectSchema { throw new Error("EmailMessage.ts - GetSchema : Not implemented."); }
    ////////InternalSend(parentFolderId: FolderId, messageDisposition: MessageDisposition): any { throw new Error("EmailMessage.ts - InternalSend : Not implemented."); }
    ////////Reply(bodyPrefix: MessageBody, replyAll: boolean): any { throw new Error("EmailMessage.ts - Reply : Not implemented."); }
    ////////Send(): any { throw new Error("EmailMessage.ts - Send : Not implemented."); }
    ////////SendAndSaveCopy(destinationFolderId: FolderId): any { throw new Error("EmailMessage.ts - SendAndSaveCopy : Not implemented."); }
    ////////SendAndSaveCopy(destinationFolderName: WellKnownFolderName): any { throw new Error("EmailMessage.ts - SendAndSaveCopy : Not implemented."); }
    ////////SendAndSaveCopy(): any { throw new Error("EmailMessage.ts - SendAndSaveCopy : Not implemented."); }
    ////////SuppressReadReceipt(): any { throw new Error("EmailMessage.ts - SuppressReadReceipt : Not implemented."); }
}

 export = EmailMessage;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
