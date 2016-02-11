import {XmlElementNames} from "../../XmlElementNames";
import {Item} from "./Item";
/**
 * ## *Not Implemented* 
 */
export class PostItem extends Item {
    ////////ConversationIndex: System.Byte[];
    ////////ConversationTopic: string;
    ////////From: EmailAddress;
    ////////InternetMessageId: string;
    ////////IsRead: boolean;
    ////////PostedTime: Date;
    ////////References: string;
    ////////Sender: EmailAddress;
    ////////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): PostItem { throw new Error("PostItem.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId): PostItem { throw new Error("PostItem.ts - Bind : Not implemented."); }
    ////////CreateForward(): ResponseMessage { throw new Error("PostItem.ts - CreateForward : Not implemented."); }
    ////////CreatePostReply(): PostReply { throw new Error("PostItem.ts - CreatePostReply : Not implemented."); }
    ////////CreateReply(replyAll: boolean): ResponseMessage { throw new Error("PostItem.ts - CreateReply : Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: any): any { throw new Error("PostItem.ts - Forward : Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): any { throw new Error("PostItem.ts - Forward : Not implemented."); }
    ////////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("PostItem.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    ////////GetSchema(): ServiceObjectSchema { throw new Error("PostItem.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.PostItem; }
    ////////PostReply(bodyPrefix: MessageBody): any { throw new Error("PostItem.ts - PostReply : Not implemented."); }
    ////////Reply(bodyPrefix: MessageBody, replyAll: boolean): any { throw new Error("PostItem.ts - Reply : Not implemented."); }
}