import ItemSchema = require("./ItemSchema");
import EmailMessageSchema = require("./EmailMessageSchema");
import ResponseObjectSchema = require("./ResponseObjectSchema");
import ServiceObjectSchema = require("./ServiceObjectSchema");
class ResponseMessageSchema extends ServiceObjectSchema {
    static Instance: ResponseMessageSchema = new ResponseMessageSchema();
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(ItemSchema.Subject);
        super.RegisterProperty(ItemSchema.Body);
        super.RegisterProperty(EmailMessageSchema.ToRecipients);
        super.RegisterProperty(EmailMessageSchema.CcRecipients);
        super.RegisterProperty(EmailMessageSchema.BccRecipients);
        super.RegisterProperty(EmailMessageSchema.IsReadReceiptRequested);
        super.RegisterProperty(EmailMessageSchema.IsDeliveryReceiptRequested);
        super.RegisterProperty(ResponseObjectSchema.ReferenceItemId);
        super.RegisterProperty(ResponseObjectSchema.BodyPrefix);
    }
}

export = ResponseMessageSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
