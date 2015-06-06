import XmlElementNames = require("../../XmlElementNames");
import MessageBody = require("../../../ComplexProperties/MessageBody");
import EmailMessageSchema = require("./EmailMessageSchema");
import ResponseObjectSchema = require("./ResponseObjectSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import ComplexPropertyDefinition = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
import ServiceObjectSchema = require("./ServiceObjectSchema");
class CancelMeetingMessageSchema extends ServiceObjectSchema {
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
export = CancelMeetingMessageSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
