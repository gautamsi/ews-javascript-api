import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";
/**
 * Represents ResponseMessage schema definition.
 */
export class ResponseMessageSchema extends ServiceObjectSchema {

    /**
     * @internal Instance of **ResponseMessageSchema** 
     */
    static Instance: ResponseMessageSchema = new ResponseMessageSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
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