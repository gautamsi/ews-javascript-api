import {XmlElementNames} from "../../XmlElementNames";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {EmailMessageSchema} from "./EmailMessageSchema";
import {ResponseObjectSchema} from "./ResponseObjectSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";
/**
 * Represents CancelMeetingMessage schema definition.
 */
export class CancelMeetingMessageSchema extends ServiceObjectSchema {

    /**
     * Defines the **Body** property.
     */
    public static Body: PropertyDefinition = new ComplexPropertyDefinition<MessageBody>(
        "Body",
        XmlElementNames.NewBodyContent,
        PropertyDefinitionFlags.CanSet,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new MessageBody(); }
    );

    /**
     * @internal Instance of **CancelMeetingMessageSchema** 
     */
    static Instance: CancelMeetingMessageSchema = new CancelMeetingMessageSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(CancelMeetingMessageSchema, Schemas.EmailMessageSchema.IsReadReceiptRequested);
        this.RegisterProperty(CancelMeetingMessageSchema, Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        this.RegisterProperty(CancelMeetingMessageSchema, Schemas.ResponseObjectSchema.ReferenceItemId);
        this.RegisterProperty(CancelMeetingMessageSchema, CancelMeetingMessageSchema.Body);
    }
}

/**
 * Represents CancelMeetingMessage schema definition.
 */
export interface CancelMeetingMessageSchema {
    /**
     * Defines the **Body** property.
     */
    Body: PropertyDefinition;
    /**
     * @internal Instance of **CancelMeetingMessageSchema**
     */
    Instance: CancelMeetingMessageSchema;
}

/**
 * Represents CancelMeetingMessage schema definition.
 */
export interface CancelMeetingMessageSchemaStatic extends CancelMeetingMessageSchema {
}