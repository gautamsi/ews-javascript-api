import {XmlElementNames} from "../../XmlElementNames";
import {ContactSchema} from "./ContactSchema";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {GroupMemberCollection} from "../../../ComplexProperties/GroupMemberCollection";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {Schemas} from "./Schemas";

import {ItemSchema} from "./ItemSchema";

/**
 * Field URIs for Members.
 */
module FieldUris {
    /**
     * FieldUri for members.
     */
    export var Members: string = "distributionlist:Members";
}

/**
 * Represents the schema for contact groups.
 */
export class ContactGroupSchema extends ItemSchema {

    /**
     * Defines the **DisplayName** property.
     */
    public DisplayName: PropertyDefinition;

    /**
     * Defines the **FileAs** property.
     */
    public FileAs: PropertyDefinition;

    /**
     * Defines the **Members** property.
     */
    public Members: PropertyDefinition;

    /**
     * @internal Instance of **ContactGroupSchema** 
     */
    static Instance: ContactGroupSchema = new ContactGroupSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(this.DisplayName);
        super.RegisterProperty(this.FileAs);
        super.RegisterProperty(this.Members);
    }

    protected init() {
        super.init();
        this.DisplayName = Schemas.ContactSchema.DisplayName;
        this.FileAs = Schemas.ContactSchema.FileAs;
        this.Members = new ComplexPropertyDefinition<GroupMemberCollection>(
            "Members",
            XmlElementNames.Members,
            FieldUris.Members,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            ExchangeVersion.Exchange2010,
            () => { return new GroupMemberCollection(); }
        );
    }
}