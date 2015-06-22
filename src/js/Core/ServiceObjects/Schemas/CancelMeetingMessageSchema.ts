import {XmlElementNames} from "../../XmlElementNames";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {EmailMessageSchema} from "./EmailMessageSchema";
import {ResponseObjectSchema} from "./ResponseObjectSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {ServiceObjectSchema} from "./ServiceObjectSchema";
export class CancelMeetingMessageSchema extends ServiceObjectSchema {
    static Body: PropertyDefinition = new ComplexPropertyDefinition<MessageBody>(
        "Body",
        XmlElementNames.NewBodyContent,
        ExchangeVersion.Exchange2007_SP1,
        null,
        PropertyDefinitionFlags.CanSet,
        () => { return new MessageBody(); }
        );
    static Instance: CancelMeetingMessageSchema;
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(EmailMessageSchema.IsReadReceiptRequested);
        super.RegisterProperty(EmailMessageSchema.IsDeliveryReceiptRequested);
        super.RegisterProperty(ResponseObjectSchema.ReferenceItemId);
        super.RegisterProperty(CancelMeetingMessageSchema.Body);
    }
}