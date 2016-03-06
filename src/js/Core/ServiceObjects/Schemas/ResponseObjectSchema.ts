import {XmlElementNames} from "../../XmlElementNames";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";
export class ResponseObjectSchema extends ServiceObjectSchema {
    public ReferenceItemId: PropertyDefinition;
    public BodyPrefix: PropertyDefinition;

    static Instance: ResponseObjectSchema = new ResponseObjectSchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(this.ReferenceItemId);
    }

    protected init() {
        super.init();
        this.ReferenceItemId = new ComplexPropertyDefinition<ItemId>(
            "ReferenceItemId",
            XmlElementNames.ReferenceItemId,
            ExchangeVersion.Exchange2007_SP1,
            null,//FieldUri
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet,
            () => { return new ItemId(); }
        );

        this.BodyPrefix = new ComplexPropertyDefinition<MessageBody>(
            "NewBodyContent",
            XmlElementNames.NewBodyContent,
            ExchangeVersion.Exchange2007_SP1,
            null,//FieldUri
            PropertyDefinitionFlags.CanSet,
            () => { return new MessageBody(); }
        );
    }
}