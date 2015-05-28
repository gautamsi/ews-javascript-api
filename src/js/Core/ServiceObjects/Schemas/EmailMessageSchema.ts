import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");


//module EmailMessageSchema {
module FieldUris {
    export var ConversationIndex: string = "message:ConversationIndex";
    export var ConversationTopic: string = "message:ConversationTopic";
    export var InternetMessageId: string = "message:InternetMessageId";
    export var IsRead: string = "message:IsRead";
    export var IsResponseRequested: string = "message:IsResponseRequested";
    export var IsReadReceiptRequested: string = "message:IsReadReceiptRequested";
    export var IsDeliveryReceiptRequested: string = "message:IsDeliveryReceiptRequested";
    export var References: string = "message:References";
    export var ReplyTo: string = "message:ReplyTo";
    export var From: string = "message:From";
    export var Sender: string = "message:Sender";
    export var ToRecipients: string = "message:ToRecipients";
    export var CcRecipients: string = "message:CcRecipients";
    export var BccRecipients: string = "message:BccRecipients";
    export var ReceivedBy: string = "message:ReceivedBy";
    export var ReceivedRepresenting: string = "message:ReceivedRepresenting";
    export var ApprovalRequestData: string = "message:ApprovalRequestData";
    export var VotingInformation: string = "message:VotingInformation";
}
//}

class EmailMessageSchema extends ItemSchema {
    static ToRecipients: PropertyDefinition;
    static BccRecipients: PropertyDefinition;
    static CcRecipients: PropertyDefinition;
    static ConversationIndex: PropertyDefinition;
    static ConversationTopic: PropertyDefinition;
    static From: PropertyDefinition;
    static IsDeliveryReceiptRequested: PropertyDefinition;
    static IsRead: PropertyDefinition;
    static IsReadReceiptRequested: PropertyDefinition;
    static IsResponseRequested: PropertyDefinition;
    static InternetMessageId: PropertyDefinition;
    static References: PropertyDefinition;
    static ReplyTo: PropertyDefinition;
    static Sender: PropertyDefinition;
    static ReceivedBy: PropertyDefinition;
    static ReceivedRepresenting: PropertyDefinition;
    static ApprovalRequestData: PropertyDefinition;
    static VotingInformation: PropertyDefinition;
    static Instance: EmailMessageSchema;
    RegisterProperties(): any { throw new Error("EmailMessageSchema.ts - RegisterProperties : Not implemented."); }
}


export = EmailMessageSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
