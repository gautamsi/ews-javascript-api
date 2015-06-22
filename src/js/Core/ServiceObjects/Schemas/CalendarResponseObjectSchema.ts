import {ItemSchema} from "./ItemSchema";
import {EmailMessageSchema} from "./EmailMessageSchema";
import {ResponseObjectSchema} from "./ResponseObjectSchema";
import {ServiceObjectSchema} from "./ServiceObjectSchema";
export class CalendarResponseObjectSchema extends ServiceObjectSchema {
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
    }
}