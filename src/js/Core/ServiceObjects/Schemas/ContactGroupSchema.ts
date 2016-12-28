import { ComplexPropertyDefinition } from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import { ContactSchema } from "./ContactSchema";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { GroupMemberCollection } from "../../../ComplexProperties/GroupMemberCollection";
import { PropertyDefinition } from "../../../PropertyDefinitions/PropertyDefinition";
import { PropertyDefinitionFlags } from "../../../Enumerations/PropertyDefinitionFlags";
import { Schemas } from "./Schemas";
import { XmlElementNames } from "../../XmlElementNames";

import { ItemSchema } from "./ItemSchema";

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
    public static DisplayName: PropertyDefinition = Schemas.ContactSchema.DisplayName;

    /**
     * Defines the **FileAs** property.
     */
    public static FileAs: PropertyDefinition = Schemas.ContactSchema.FileAs;

    /**
     * Defines the **Members** property.
     */
    public static Members: PropertyDefinition = new ComplexPropertyDefinition<GroupMemberCollection>(
        "Members",
        XmlElementNames.Members,
        FieldUris.Members,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        ExchangeVersion.Exchange2010,
        () => { return new GroupMemberCollection(); }
    );

    /**
     * @internal Instance of **ContactGroupSchema** 
     */
    static Instance: ContactGroupSchema = new ContactGroupSchema();

    /**
     * Registers properties.
     * 
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(ContactGroupSchema, ContactGroupSchema.DisplayName);
        this.RegisterProperty(ContactGroupSchema, ContactGroupSchema.FileAs);
        this.RegisterProperty(ContactGroupSchema, ContactGroupSchema.Members);
    }
}

/**
 * Represents the schema for contact groups.
 */
export interface ContactGroupSchema {
    /**
     * Defines the **DisplayName** property.
     */
    DisplayName: PropertyDefinition;
    /**
     * Defines the **FileAs** property.
     */
    FileAs: PropertyDefinition;
    /**
     * Defines the **Members** property.
     */
    Members: PropertyDefinition;
    /**
     * @internal Instance of **ContactGroupSchema**
     */
    Instance: ContactGroupSchema;
}

/**
 * Represents the schema for contact groups.
 */
export interface ContactGroupSchemaStatic extends ContactGroupSchema {
}