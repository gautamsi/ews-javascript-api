import FolderSchema = require("./FolderSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

//module SearchFolderSchema {
module FieldUris {
    export var SearchParameters: string = "folder:SearchParameters";
}
//}

class SearchFolderSchema extends FolderSchema {
    static SearchParameters: PropertyDefinition;
    static Instance: SearchFolderSchema;
    RegisterProperties(): any { throw new Error("SearchFolderSchema.ts - RegisterProperties : Not implemented."); }
}


export = SearchFolderSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

