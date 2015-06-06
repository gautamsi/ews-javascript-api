import XmlElementNames = require("../../XmlElementNames");
import ContactSchema = require("./ContactSchema");
import ComplexPropertyDefinition = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import GroupMemberCollection = require("../../../ComplexProperties/GroupMemberCollection");
import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

//module ContactGroupSchema {
module FieldUris {
    export var Members: string = "distributionlist:Members";
}
//}

class ContactGroupSchema extends ItemSchema {
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


export = ContactGroupSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
