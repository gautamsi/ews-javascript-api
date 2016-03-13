import {XmlElementNames} from "../../XmlElementNames";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";
/**
 * Represents ResponseObject schema definition.
 */
export class ResponseObjectSchema extends ServiceObjectSchema {

    /**
     * Defines the **ReferenceItemId** property.
     */
    public static ReferenceItemId: PropertyDefinition = new ComplexPropertyDefinition<ItemId>(
        "ReferenceItemId",
        XmlElementNames.ReferenceItemId,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new ItemId(); }
    );

    /**
     * Defines the **BodyPrefix** property.
     */
    public static BodyPrefix: PropertyDefinition = new ComplexPropertyDefinition<MessageBody>(
        "NewBodyContent",
        XmlElementNames.NewBodyContent,
        PropertyDefinitionFlags.CanSet,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new MessageBody(); }
    );

    /**
     * @internal Instance of **ResponseObjectSchema** 
     */
    static Instance: ResponseObjectSchema = new ResponseObjectSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(ResponseObjectSchema, ResponseObjectSchema.ReferenceItemId);
    }
}

/**
 * Represents ResponseObject schema definition.
 */
export interface ResponseObjectSchema {
    /**
     * Defines the **ReferenceItemId** property.
     */
    ReferenceItemId: PropertyDefinition;
    /**
     * Defines the **BodyPrefix** property.
     */
    BodyPrefix: PropertyDefinition;
    /**
     * @internal Instance of **ResponseObjectSchema**
     */
    Instance: ResponseObjectSchema;
}

/**
 * Represents ResponseObject schema definition.
 */
export interface ResponseObjectSchemaStatic extends ResponseObjectSchema {
}