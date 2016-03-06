import {XmlElementNames} from "../../XmlElementNames";
import {ContactSchema} from "./ContactSchema";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {GroupMemberCollection} from "../../../ComplexProperties/GroupMemberCollection";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {Schemas} from "./Schemas";

import {ItemSchema} from "./ItemSchema";

module FieldUris {
    export var Members: string = "distributionlist:Members";
}

export class ContactGroupSchema extends ItemSchema {
    public DisplayName: PropertyDefinition;
    public FileAs: PropertyDefinition ;
    public Members: PropertyDefinition;

    static Instance: ContactGroupSchema = new ContactGroupSchema();

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
            ExchangeVersion.Exchange2010,
            FieldUris.Members,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            () => { return new GroupMemberCollection(); }
        );
    }
}