import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
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

module EmailMessageSchema {
    export module FieldUris {
        export var /* static*/ ConversationIndex: string = "message:ConversationIndex";
        export var /* static*/ ConversationTopic: string = "message:ConversationTopic";
        export var /* static*/ InternetMessageId: string = "message:InternetMessageId";
        export var /* static*/ IsRead: string = "message:IsRead";
        export var /* static*/ IsResponseRequested: string = "message:IsResponseRequested";
        export var /* static*/ IsReadReceiptRequested: string = "message:IsReadReceiptRequested";
        export var /* static*/ IsDeliveryReceiptRequested: string = "message:IsDeliveryReceiptRequested";
        export var /* static*/ References: string = "message:References";
        export var /* static*/ ReplyTo: string = "message:ReplyTo";
        export var /* static*/ From: string = "message:From";
        export var /* static*/ Sender: string = "message:Sender";
        export var /* static*/ ToRecipients: string = "message:ToRecipients";
        export var /* static*/ CcRecipients: string = "message:CcRecipients";
        export var /* static*/ BccRecipients: string = "message:BccRecipients";
        export var /* static*/ ReceivedBy: string = "message:ReceivedBy";
        export var /* static*/ ReceivedRepresenting: string = "message:ReceivedRepresenting";
        export var /* static*/ ApprovalRequestData: string = "message:ApprovalRequestData";
        export var /* static*/ VotingInformation: string = "message:VotingInformation";
    }
}


export = EmailMessageSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
