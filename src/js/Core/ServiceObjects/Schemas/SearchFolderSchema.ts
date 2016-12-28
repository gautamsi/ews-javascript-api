import { ComplexPropertyDefinition } from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { PropertyDefinition } from "../../../PropertyDefinitions/PropertyDefinition";
import { PropertyDefinitionFlags } from "../../../Enumerations/PropertyDefinitionFlags";
import { SearchFolderParameters } from "../../../ComplexProperties/SearchFolderParameters";
import { XmlElementNames } from "../../XmlElementNames";

import { FolderSchema } from "./FolderSchema";

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
    public static SearchParameters: PropertyDefinition = new ComplexPropertyDefinition<SearchFolderParameters>(
        "SearchParameters",
        XmlElementNames.SearchParameters,
        FieldUris.SearchParameters,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new SearchFolderParameters(); }
    );

    /**
     * @internal Instance of **SearchFolderSchema** 
     */
    static Instance: SearchFolderSchema = new SearchFolderSchema();

    /**
     * Registers properties.
     * 
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(SearchFolderSchema, SearchFolderSchema.SearchParameters);
    }
}

/**
 * Represents the schema for search folders.
 */
export interface SearchFolderSchema {
    /**
     * Defines the **SearchParameters** property.
     */
    SearchParameters: PropertyDefinition;
    /**
     * @internal Instance of **SearchFolderSchema**
     */
    Instance: SearchFolderSchema;
}

/**
 * Represents the schema for search folders.
 */
export interface SearchFolderSchemaStatic extends SearchFolderSchema {
}