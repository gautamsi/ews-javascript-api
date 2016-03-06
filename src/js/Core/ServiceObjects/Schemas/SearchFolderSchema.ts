import {XmlElementNames} from "../../XmlElementNames";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {SearchFolderParameters} from "../../../ComplexProperties/SearchFolderParameters";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {FolderSchema} from "./FolderSchema";

module FieldUris {
    export var SearchParameters: string = "folder:SearchParameters";
}

export class SearchFolderSchema extends FolderSchema {
    public SearchParameters: PropertyDefinition;

    static Instance: SearchFolderSchema = new SearchFolderSchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(this.SearchParameters);
    }

    protected init() {
        super.init();
        this.SearchParameters = new ComplexPropertyDefinition<SearchFolderParameters>(
            "SearchParameters",
            XmlElementNames.SearchParameters,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.SearchParameters,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            () => { return new SearchFolderParameters(); }
        );
    }
}