class ContactGroupSchema extends ItemSchema {
    static DisplayName: PropertyDefinition;
    static FileAs: PropertyDefinition;
    static Members: PropertyDefinition;
    static Instance: ContactGroupSchema;
    RegisterProperties(): any { throw new Error("Not implemented."); }
}

module ContactGroupSchema {
    export module FieldUris {
        export var /* static*/ Members: string = "distributionlist:Members";
    }
}



export = ContactGroupSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
