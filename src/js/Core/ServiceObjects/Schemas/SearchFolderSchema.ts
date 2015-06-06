import XmlElementNames = require("../../XmlElementNames");
import FolderSchema = require("./FolderSchema");
import ComplexPropertyDefinition = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import SearchFolderParameters = require("../../../ComplexProperties/SearchFolderParameters");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

//module SearchFolderSchema {
module FieldUris {
    export var SearchParameters: string = "folder:SearchParameters";
}
//}

class SearchFolderSchema extends FolderSchema {
    static SearchParameters: PropertyDefinition = new ComplexPropertyDefinition<SearchFolderParameters>(
        "SearchParameters", 
        XmlElementNames.SearchParameters, 
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.SearchParameters, 
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate, 
        () => { return new SearchFolderParameters(); }
        );
        static Instance: SearchFolderSchema = new SearchFolderSchema();
        RegisterProperties(): void {
            super.RegisterProperties();
            super.RegisterProperty(SearchFolderSchema.SearchParameters);
        }
}


export = SearchFolderSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

