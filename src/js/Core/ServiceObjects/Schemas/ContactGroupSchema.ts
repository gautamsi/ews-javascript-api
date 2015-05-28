import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

//module ContactGroupSchema {
module FieldUris {
    export var Members: string = "distributionlist:Members";
}
//}

class ContactGroupSchema extends ItemSchema {
    static DisplayName: PropertyDefinition;
    static FileAs: PropertyDefinition;
    static Members: PropertyDefinition;
    static Instance: ContactGroupSchema;
    RegisterProperties(): any { throw new Error("ContactGroupSchema.ts - RegisterProperties : Not implemented."); }
}


export = ContactGroupSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
