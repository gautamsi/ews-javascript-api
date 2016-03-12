import {XmlElementNames} from "../../XmlElementNames";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {SearchFolderParameters} from "../../../ComplexProperties/SearchFolderParameters";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {FolderSchema} from "./FolderSchema";

/**
 * Field URIs for search folders.
 */
module FieldUris {
    export var SearchParameters: string = "folder:SearchParameters";
}

/**
 * Represents the schema for search folders.
 */
export class SearchFolderSchema extends FolderSchema {
    
    /**
     * Defines the **SearchParameters** property.
     */
    public SearchParameters: PropertyDefinition;

    /**
     * @internal Instance of **SearchFolderSchema** 
     */
    static Instance: SearchFolderSchema = new SearchFolderSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(this.SearchParameters);
    }

    protected init() {
        return;
        super.init();
        this.SearchParameters = new ComplexPropertyDefinition<SearchFolderParameters>(
            "SearchParameters",
            XmlElementNames.SearchParameters,
            FieldUris.SearchParameters,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new SearchFolderParameters(); }
        );
    }
}