import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";
export class ResponseMessageSchema extends ServiceObjectSchema {

    static Instance: ResponseMessageSchema = new ResponseMessageSchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(Schemas.ItemSchema.Subject);
        super.RegisterProperty(Schemas.ItemSchema.Body);
        super.RegisterProperty(Schemas.EmailMessageSchema.ToRecipients);
        super.RegisterProperty(Schemas.EmailMessageSchema.CcRecipients);
        super.RegisterProperty(Schemas.EmailMessageSchema.BccRecipients);
        super.RegisterProperty(Schemas.EmailMessageSchema.IsReadReceiptRequested);
        super.RegisterProperty(Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        super.RegisterProperty(Schemas.ResponseObjectSchema.ReferenceItemId);
        super.RegisterProperty(Schemas.ResponseObjectSchema.BodyPrefix);
    }
}