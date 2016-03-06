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
export class CancelMeetingMessageSchema extends ServiceObjectSchema {
    public Body: PropertyDefinition;

    static Instance: CancelMeetingMessageSchema;

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(Schemas.EmailMessageSchema.IsReadReceiptRequested);
        super.RegisterProperty(Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        super.RegisterProperty(Schemas.ResponseObjectSchema.ReferenceItemId);
        super.RegisterProperty(this.Body);
    }
    
    protected init() {
        super.init();
        this.Body = new ComplexPropertyDefinition<MessageBody>(
            "Body",
            XmlElementNames.NewBodyContent,
            ExchangeVersion.Exchange2007_SP1,
            null,
            PropertyDefinitionFlags.CanSet,
            () => { return new MessageBody(); }
        );
    }
}