import {ItemSchema} from "./ItemSchema";
import {EmailMessageSchema} from "./EmailMessageSchema";
import {ResponseObjectSchema} from "./ResponseObjectSchema";
import {ServiceObjectSchema} from "./ServiceObjectSchema";
export class ResponseMessageSchema extends ServiceObjectSchema {
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