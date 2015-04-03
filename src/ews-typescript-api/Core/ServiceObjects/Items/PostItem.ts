import Item = require("./Item");
class PostItem extends Item {
    ////////ConversationIndex: System.Byte[];
    ////////ConversationTopic: string;
    ////////From: EmailAddress;
    ////////InternetMessageId: string;
    ////////IsRead: boolean;
    ////////PostedTime: Date;
    ////////References: string;
    ////////Sender: EmailAddress;
    ////////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): PostItem { throw new Error("Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId): PostItem { throw new Error("Not implemented."); }
    ////////CreateForward(): ResponseMessage { throw new Error("Not implemented."); }
    ////////CreatePostReply(): PostReply { throw new Error("Not implemented."); }
    ////////CreateReply(replyAll: boolean): ResponseMessage { throw new Error("Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: any): any { throw new Error("Not implemented."); }
    ////////Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
    ////////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    ////////GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    ////////PostReply(bodyPrefix: MessageBody): any { throw new Error("Not implemented."); }
    ////////Reply(bodyPrefix: MessageBody, replyAll: boolean): any { throw new Error("Not implemented."); }
}
 export = PostItem;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
