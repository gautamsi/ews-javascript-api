import {ItemSchema} from "./ItemSchema";
import {EmailMessageSchema} from "./EmailMessageSchema";
import {ResponseObjectSchema} from "./ResponseObjectSchema";
import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";
/**
 * Represents CalendarResponseObject schema definition.
 */
export class CalendarResponseObjectSchema extends ServiceObjectSchema {

    /**
     * @internal Instance of **CalendarResponseObjectSchema** 
     */
    static Instance: CalendarResponseObjectSchema = new CalendarResponseObjectSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
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