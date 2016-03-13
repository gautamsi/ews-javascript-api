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
        this.RegisterProperty(ResponseMessageSchema, Schemas.ItemSchema.Subject);
        this.RegisterProperty(ResponseMessageSchema, Schemas.ItemSchema.Body);
        this.RegisterProperty(ResponseMessageSchema, Schemas.EmailMessageSchema.ToRecipients);
        this.RegisterProperty(ResponseMessageSchema, Schemas.EmailMessageSchema.CcRecipients);
        this.RegisterProperty(ResponseMessageSchema, Schemas.EmailMessageSchema.BccRecipients);
        this.RegisterProperty(ResponseMessageSchema, Schemas.EmailMessageSchema.IsReadReceiptRequested);
        this.RegisterProperty(ResponseMessageSchema, Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        this.RegisterProperty(ResponseMessageSchema, Schemas.ResponseObjectSchema.ReferenceItemId);
        this.RegisterProperty(ResponseMessageSchema, Schemas.ResponseObjectSchema.BodyPrefix);
    }
}

/**
 * Represents ResponseMessage schema definition.
 */
export interface ResponseMessageSchema {
    /**
     * @internal Instance of **ResponseMessageSchema**
     */
    Instance: ResponseMessageSchema;
}

/**
 * Represents ResponseMessage schema definition.
 */
export interface ResponseMessageSchemaStatic extends ResponseMessageSchema {
}