import { EmailMessageSchema } from "./EmailMessageSchema";
import { ItemSchema } from "./ItemSchema";
import { ResponseObjectSchema } from "./ResponseObjectSchema";
import { Schemas } from "./Schemas";

import { ServiceObjectSchema } from "./ServiceObjectSchema";
/**
 * Represents CalendarResponseObject schema definition.
 */
export class CalendarResponseObjectSchema extends ServiceObjectSchema {

    /**
     * @internal Instance of **CalendarResponseObjectSchema** 
     */
    public static Instance: CalendarResponseObjectSchema = new CalendarResponseObjectSchema();

    /**
     * Registers properties.
     * 
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.ItemSchema.ItemClass);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.ItemSchema.Sensitivity);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.ItemSchema.Body);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.ItemSchema.Attachments);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.ItemSchema.InternetMessageHeaders);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.EmailMessageSchema.Sender);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.EmailMessageSchema.ToRecipients);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.EmailMessageSchema.CcRecipients);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.EmailMessageSchema.BccRecipients);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.EmailMessageSchema.IsReadReceiptRequested);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        this.RegisterProperty(CalendarResponseObjectSchema, Schemas.ResponseObjectSchema.ReferenceItemId);
    }
}

/**
 * Represents CalendarResponseObject schema definition.
 */

export interface CalendarResponseObjectSchema {
    /**
     * @internal Instance of **CalendarResponseObjectSchema**
     */
    Instance: CalendarResponseObjectSchema;
}

/**
 * Represents CalendarResponseObject schema definition.
 */

export interface CalendarResponseObjectSchemaStatic extends CalendarResponseObjectSchema {
}