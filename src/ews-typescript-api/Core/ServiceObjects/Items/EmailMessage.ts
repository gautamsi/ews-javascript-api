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
    ////////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): EmailMessage { throw new Error("Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId): EmailMessage { throw new Error("Not implemented."); }
    ////////CreateForward(): ResponseMessage { throw new Error("Not implemented."); }
    ////////CreateReply(replyAll: boolean): ResponseMessage { throw new Error("Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: any): any { throw new Error("Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
    ////////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    ////////GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    ////////InternalSend(parentFolderId: FolderId, messageDisposition: MessageDisposition): any { throw new Error("Not implemented."); }
    ////////Reply(bodyPrefix: MessageBody, replyAll: boolean): any { throw new Error("Not implemented."); }
    ////////Send(): any { throw new Error("Not implemented."); }
    ////////SendAndSaveCopy(destinationFolderId: FolderId): any { throw new Error("Not implemented."); }
    ////////SendAndSaveCopy(destinationFolderName: WellKnownFolderName): any { throw new Error("Not implemented."); }
    ////////SendAndSaveCopy(): any { throw new Error("Not implemented."); }
    ////////SuppressReadReceipt(): any { throw new Error("Not implemented."); }
}

 export = EmailMessage;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;