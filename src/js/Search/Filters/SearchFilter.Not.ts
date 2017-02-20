import {ArrayHelper} from '../../ExtensionMethods';
import {ComplexProperty} from "../../ComplexProperties/ComplexProperty";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../Core/ExchangeService";
import {ServiceValidationException} from '../../Exceptions/ServiceValidationException';
import {Strings} from "../../Strings";
import {XmlElementNames} from "../../Core/XmlElementNames";

import {SearchFilter} from "./SearchFilter";
/**
 * Represents a search filter that negates another. Applications can use NotFilter to define conditions such as "NOT(other filter)".
 */
export class Not extends SearchFilter {

	private searchFilter: SearchFilter;

	/**
	 * Gets or sets the search filter to negate. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
	 */
	get SearchFilter(): SearchFilter {
		return this.searchFilter;
	}
	set SearchFilter(value: SearchFilter) {
		if (this.searchFilter !== null) {
			ArrayHelper.RemoveEntry(this.searchFilter.OnChange, this.SearchFilterChanged);
		}
		this.SetFieldValue<SearchFilter>({ getValue: () => this.searchFilter, setValue: (updateValue) => { this.searchFilter = updateValue } }, value);

		if (this.searchFilter !== null) {
			this.searchFilter.OnChange.push(this.SearchFilterChanged.bind(this));
		}
	}

	/**
	 * Initializes a new instance of the **Not** class.
	 */
	constructor();
	/**
	 * Initializes a new instance of the **Not** class.
	 *
	 * @param   {SearchFilter}   searchFilter   The search filter to negate. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
	 */
	constructor(searchFilter: SearchFilter);
	constructor(searchFilter: SearchFilter = null) {
		super();
		this.searchFilter = searchFilter;
	}

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetXmlElementName(): string { return XmlElementNames.Not; }

	/**
	 * @internal Validate instance.
	 */
	InternalValidate(): void {
		if (this.searchFilter == null) {
			throw new ServiceValidationException(Strings.SearchFilterMustBeSet);
		}
	}

	/**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		this.searchFilter = SearchFilter.LoadFromXmlJsObject(jsObject, service);
	}

	/**
	 * Gets or sets the search filter to negate. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
	 */
	SearchFilterChanged(complexProperty: ComplexProperty): void { this.Changed(); }

	/**
	 * @internal Writes the elements to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void { this.SearchFilter.WriteToXml(writer); }
}

export interface INot {
	new (): Not;
	new (searchFilter: SearchFilter): Not;
}