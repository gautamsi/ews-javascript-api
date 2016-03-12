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
    public ReferenceItemId: PropertyDefinition;
    
    /**
     * Defines the **BodyPrefix** property.
     */
    public BodyPrefix: PropertyDefinition;

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
        super.RegisterProperty(this.ReferenceItemId);
    }

    protected init() {
        super.init();
        this.ReferenceItemId = new ComplexPropertyDefinition<ItemId>(
            "ReferenceItemId",
            XmlElementNames.ReferenceItemId,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new ItemId(); }
        );

        this.BodyPrefix = new ComplexPropertyDefinition<MessageBody>(
            "NewBodyContent",
            XmlElementNames.NewBodyContent,
            PropertyDefinitionFlags.CanSet,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new MessageBody(); }
        );
    }
}