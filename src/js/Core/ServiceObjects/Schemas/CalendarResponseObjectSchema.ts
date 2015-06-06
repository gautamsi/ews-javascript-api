import ItemSchema = require("./ItemSchema");
import EmailMessageSchema = require("./EmailMessageSchema");
import ResponseObjectSchema = require("./ResponseObjectSchema");
import ServiceObjectSchema = require("./ServiceObjectSchema");
class CalendarResponseObjectSchema extends ServiceObjectSchema {
    static Instance: CalendarResponseObjectSchema = new CalendarResponseObjectSchema();
    RegisterProperties(): void {
            super.RegisterProperties();
            super.RegisterProperty(ItemSchema.ItemClass);
            super.RegisterProperty(ItemSchema.Sensitivity);
            super.RegisterProperty(ItemSchema.Body);
            super.RegisterProperty(ItemSchema.Attachments);
            super.RegisterProperty(ItemSchema.InternetMessageHeaders);
            super.RegisterProperty(EmailMessageSchema.Sender);
            super.RegisterProperty(EmailMessageSchema.ToRecipients);
            super.RegisterProperty(EmailMessageSchema.CcRecipients);
            super.RegisterProperty(EmailMessageSchema.BccRecipients);
            super.RegisterProperty(EmailMessageSchema.IsReadReceiptRequested);
            super.RegisterProperty(EmailMessageSchema.IsDeliveryReceiptRequested);
            super.RegisterProperty(ResponseObjectSchema.ReferenceItemId);
        }}

export = CalendarResponseObjectSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
