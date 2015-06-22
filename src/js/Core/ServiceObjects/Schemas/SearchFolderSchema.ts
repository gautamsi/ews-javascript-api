import {XmlElementNames} from "../../XmlElementNames";
import {FolderSchema} from "./FolderSchema";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {SearchFolderParameters} from "../../../ComplexProperties/SearchFolderParameters";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

//module SearchFolderSchema {
module FieldUris {
    export var SearchParameters: string = "folder:SearchParameters";
}
//}
export class SearchFolderSchema extends FolderSchema {
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