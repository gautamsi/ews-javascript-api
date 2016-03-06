import {ItemSchema} from "./ItemSchema";
import {EmailMessageSchema} from "./EmailMessageSchema";
import {ResponseObjectSchema} from "./ResponseObjectSchema";
import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";
export class CalendarResponseObjectSchema extends ServiceObjectSchema {
    
    static Instance: CalendarResponseObjectSchema = new CalendarResponseObjectSchema();
    
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(Schemas.ItemSchema.ItemClass);
        super.RegisterProperty(Schemas.ItemSchema.Sensitivity);
        super.RegisterProperty(Schemas.ItemSchema.Body);
        super.RegisterProperty(Schemas.ItemSchema.Attachments);
        super.RegisterProperty(Schemas.ItemSchema.InternetMessageHeaders);
        super.RegisterProperty(Schemas.EmailMessageSchema.Sender);
        super.RegisterProperty(Schemas.EmailMessageSchema.ToRecipients);
        super.RegisterProperty(Schemas.EmailMessageSchema.CcRecipients);
        super.RegisterProperty(Schemas.EmailMessageSchema.BccRecipients);
        super.RegisterProperty(Schemas.EmailMessageSchema.IsReadReceiptRequested);
        super.RegisterProperty(Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        super.RegisterProperty(Schemas.ResponseObjectSchema.ReferenceItemId);
    }
}