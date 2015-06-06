import XmlElementNames = require("../../XmlElementNames");
import ComplexPropertyDefinition = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import ItemId = require("../../../ComplexProperties/ItemId");
import MessageBody = require("../../../ComplexProperties/MessageBody");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

import ServiceObjectSchema = require("./ServiceObjectSchema");
class ResponseObjectSchema extends ServiceObjectSchema {
    static ReferenceItemId: PropertyDefinition = new ComplexPropertyDefinition<ItemId>(
        "ReferenceItemId",
        XmlElementNames.ReferenceItemId,
        ExchangeVersion.Exchange2007_SP1,
        null,//FieldUri
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet,
        () => { return new ItemId(); }
        );

    static BodyPrefix: PropertyDefinition = new ComplexPropertyDefinition<MessageBody>(
        "NewBodyContent",
        XmlElementNames.NewBodyContent,
        ExchangeVersion.Exchange2007_SP1,
        null,//FieldUri
        PropertyDefinitionFlags.CanSet,
        () => { return new MessageBody(); }
        );

    static Instance: ResponseObjectSchema = new ResponseObjectSchema();
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(ResponseObjectSchema.ReferenceItemId);
    }
}

export = ResponseObjectSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
