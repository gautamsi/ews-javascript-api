import {XmlElementNames} from "../../XmlElementNames";
import {ContactSchema} from "./ContactSchema";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {GroupMemberCollection} from "../../../ComplexProperties/GroupMemberCollection";
import {ItemSchema} from "./ItemSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

//module ContactGroupSchema {
module FieldUris {
    export var Members: string = "distributionlist:Members";
}
//}
export class ContactGroupSchema extends ItemSchema {
    static DisplayName: PropertyDefinition = ContactSchema.DisplayName;
    static FileAs: PropertyDefinition = ContactSchema.FileAs;
    static Members: PropertyDefinition = new ComplexPropertyDefinition<GroupMemberCollection>(
        "Members",
        XmlElementNames.Members,
        ExchangeVersion.Exchange2010,
        FieldUris.Members,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        () => { return new GroupMemberCollection(); }
        );
    static Instance: ContactGroupSchema = new ContactGroupSchema();
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(ContactGroupSchema.DisplayName);
        super.RegisterProperty(ContactGroupSchema.FileAs);
        super.RegisterProperty(ContactGroupSchema.Members);
    }
}