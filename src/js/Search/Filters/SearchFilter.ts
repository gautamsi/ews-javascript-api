import {ContainmentMode} from "../../Enumerations/ContainmentMode";
import {ContainsSubstring, IContainsSubstring} from "./SearchFilter.ContainsSubstring";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../Core/ExchangeService";
import {ExcludesBitmask, IExcludesBitmask} from "./SearchFilter.ExcludesBitmask";
import {Exists, IExists} from "./SearchFilter.Exists";
import {IsEqualTo, IIsEqualTo} from "./SearchFilter.IsEqualTo";
import {IsGreaterThan, IIsGreaterThan} from "./SearchFilter.IsGreaterThan";
import {IsGreaterThanOrEqualTo, IIsGreaterThanOrEqualTo} from "./SearchFilter.IsGreaterThanOrEqualTo";
import {IsLessThan, IIsLessThan} from "./SearchFilter.IsLessThan";
import {IsLessThanOrEqualTo, IIsLessThanOrEqualTo} from "./SearchFilter.IsLessThanOrEqualTo";
import {IsNotEqualTo, IIsNotEqualTo} from "./SearchFilter.IsNotEqualTo";
import {LogicalOperator} from "../../Enumerations/LogicalOperator";
import {Not, INot} from "./SearchFilter.Not";
import {PropertyBasedFilter, IPropertyBasedFilter} from "./SearchFilter.PropertyBasedFilter";
import {RelationalFilter, IRelationalFilter} from "./SearchFilter.RelationalFilter";
import {SearchFilterCollection, ISearchFilterCollection} from "./SearchFilter.SearchFilterCollection";
import {TypeSystem} from '../../ExtensionMethods';
import {XmlElementNames} from "../../Core/XmlElementNames";

import {ComplexProperty} from "../../ComplexProperties/ComplexProperty";
/**
 * Represents the base search filter class. Use descendant search filter classes such as SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection to define search filters.
 */
export abstract class SearchFilter extends ComplexProperty {

    /**
     * Initializes a new instance of the **SearchFilter** class.
     */
    constructor() {
        super();
    }

    /**
     * Gets the search filter instance.
     * 
     * @param {string} localName Name of the local.
     * @returns {SearchFilter} 
     */
    static GetSearchFilterInstance(localName: string): SearchFilter {
        let searchFilter: SearchFilter;
        switch (localName) {
            case XmlElementNames.Exists:
                searchFilter = new SearchFilter.Exists();
                break;
            case XmlElementNames.Contains:
                searchFilter = new SearchFilter.ContainsSubstring();
                break;
            case XmlElementNames.Excludes:
                searchFilter = new SearchFilter.ExcludesBitmask();
                break;
            case XmlElementNames.Not:
                searchFilter = new SearchFilter.Not();
                break;
            case XmlElementNames.And:
                searchFilter = new SearchFilter.SearchFilterCollection(LogicalOperator.And);
                break;
            case XmlElementNames.Or:
                searchFilter = new SearchFilter.SearchFilterCollection(LogicalOperator.Or);
                break;
            case XmlElementNames.IsEqualTo:
                searchFilter = new SearchFilter.IsEqualTo();
                break;
            case XmlElementNames.IsNotEqualTo:
                searchFilter = new SearchFilter.IsNotEqualTo();
                break;
            case XmlElementNames.IsGreaterThan:
                searchFilter = new SearchFilter.IsGreaterThan();
                break;
            case XmlElementNames.IsGreaterThanOrEqualTo:
                searchFilter = new SearchFilter.IsGreaterThanOrEqualTo();
                break;
            case XmlElementNames.IsLessThan:
                searchFilter = new SearchFilter.IsLessThan();
                break;
            case XmlElementNames.IsLessThanOrEqualTo:
                searchFilter = new SearchFilter.IsLessThanOrEqualTo();
                break;
            default:
                searchFilter = null;
                break;
        }
        return searchFilter;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    abstract GetXmlElementName(): string;

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}               jsObject                Json Object converted from XML.
     * @param   {ExchangeService}   service                 The service.    
     * @param   {string}            typeName                 type name, when provided prevent call for type name check.    
	 * @return  {SearchFilter}      SearchFilter instance.
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService, typeName: string = null): SearchFilter {
        if (!typeName) {
            typeName = TypeSystem.GetJsObjectTypeName(jsObject);
        }
        let searchFilter: SearchFilter = SearchFilter.GetSearchFilterInstance(jsObject.ReadTypeString());

        if (searchFilter != null) {
            searchFilter.LoadFromXmlJsObject(jsObject, service);
        }

        return searchFilter;
    }

    /**
     * @internal Writes to XML.
     * 
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        super.WriteToXml(writer, this.GetXmlElementName());
    }
}

export module SearchFilter {
    export var ContainsSubstring: IContainsSubstring;
    export var ExcludesBitmask: IExcludesBitmask;
    export var Exists: IExists;
    export var IsEqualTo: IIsEqualTo;
    export var IsGreaterThan: IIsGreaterThan;
    export var IsGreaterThanOrEqualTo: IIsGreaterThanOrEqualTo;
    export var IsLessThan: IIsLessThan;
    export var IsLessThanOrEqualTo: IIsLessThanOrEqualTo;
    export var IsNotEqualTo: IIsNotEqualTo;
    export var Not: INot;
    export var PropertyBasedFilter: IPropertyBasedFilter;
    export var RelationalFilter: IRelationalFilter;
    export var SearchFilterCollection: ISearchFilterCollection;
}