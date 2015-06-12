import EmailAddressCollection = require("../../../ComplexProperties/EmailAddressCollection");
import EmailAddress = require("../../../ComplexProperties/EmailAddress");
import ApprovalRequestData = require("../../../ComplexProperties/ApprovalRequestData");
import VotingInformation = require("../../../ComplexProperties/VotingInformation");
import ExchangeService = require("../../ExchangeService");
import ItemId = require("../../../ComplexProperties/ItemId");
import PropertySet = require("../../PropertySet");
import ResponseMessage = require("../ResponseObjects/ResponseMessage");
import MessageBody = require("../../../ComplexProperties/MessageBody");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import ServiceObjectSchema = require("../Schemas/ServiceObjectSchema");
import EmailMessageSchema = require("../Schemas/EmailMessageSchema");
import FolderId = require("../../../ComplexProperties/FolderId");
import MessageDisposition = require("../../../Enumerations/MessageDisposition");
import WellKnownFolderName = require("../../../Enumerations/WellKnownFolderName");
import XmlElementNames = require("../../XmlElementNames");
import Item = require("./Item");
class EmailMessage extends Item {
    ToRecipients: EmailAddressCollection;
    BccRecipients: EmailAddressCollection;
    CcRecipients: EmailAddressCollection;
    ConversationTopic: string;
    ConversationIndex: any[];//System.Byte[];
    From: EmailAddress;
    IsAssociated: boolean;
    IsDeliveryReceiptRequested: boolean;
    IsRead: boolean;
    IsReadReceiptRequested: boolean;
    IsResponseRequested: boolean;
    InternetMessageId: string;
    References: string;
    ReplyTo: EmailAddressCollection;
    Sender: EmailAddress;
    ReceivedBy: EmailAddress;
    ReceivedRepresenting: EmailAddress;
    ApprovalRequestData: ApprovalRequestData;
    VotingInformation: VotingInformation;
    // Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): EmailMessage { throw new Error("EmailMessage.ts - Bind : Not implemented."); }
    // Bind(service: ExchangeService, id: ItemId): EmailMessage { throw new Error("EmailMessage.ts - Bind : Not implemented."); }
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): EmailMessage { throw new Error("EmailMessage.ts - Bind : Not implemented."); }
    CreateForward(): ResponseMessage { throw new Error("EmailMessage.ts - CreateForward : Not implemented."); }
    CreateReply(replyAll: boolean): ResponseMessage { throw new Error("EmailMessage.ts - CreateReply : Not implemented."); }
    // Forward(bodyPrefix: MessageBody, toRecipients: any): any { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
    // Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): any { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
    Forward(bodyPrefix: MessageBody, toRecipients: any| any[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("EmailMessage.ts - Forward : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("EmailMessage.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetSchema(): ServiceObjectSchema { return EmailMessageSchema.Instance;}
    GetXmlElementName(): string { return XmlElementNames.Message; }
    InternalSend(parentFolderId: FolderId, messageDisposition: MessageDisposition): any { throw new Error("EmailMessage.ts - InternalSend : Not implemented."); }
    Reply(bodyPrefix: MessageBody, replyAll: boolean): any { throw new Error("EmailMessage.ts - Reply : Not implemented."); }
    Send(): any { throw new Error("EmailMessage.ts - Send : Not implemented."); }
    SendAndSaveCopy(destinationFolderId: FolderId): void;
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): void;
    SendAndSaveCopy(): void;
    SendAndSaveCopy(destinationFolderIdOrName?: FolderId | WellKnownFolderName): void { throw new Error("EmailMessage.ts - SendAndSaveCopy : Not implemented."); }
    SuppressReadReceipt(): void { throw new Error("EmailMessage.ts - SuppressReadReceipt : Not implemented."); }
}

export = EmailMessage;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
