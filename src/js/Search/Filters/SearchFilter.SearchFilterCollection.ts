import {ArgumentOutOfRangeException, ArgumentNullException} from '../../Exceptions/ArgumentException';
import {ArrayHelper, StringHelper, TypeSystem} from '../../ExtensionMethods';
import {ComplexPropertyChangedDelegate} from "../../Misc/DelegateTypes";
import {ComplexProperty} from "../../ComplexProperties/ComplexProperty";
import {EwsServiceJsonReader} from "../../Core/EwsServiceJsonReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../Core/ExchangeService";
import {LogicalOperator} from "../../Enumerations/LogicalOperator";
import {ServiceValidationException} from '../../Exceptions/ServiceValidationException';
import {Strings} from "../../Strings";
import {XmlElementNames} from "../../Core/XmlElementNames";

import {SearchFilter} from "./SearchFilter";
/**
 * Represents a collection of search filters linked by a logical operator. Applications can use SearchFilterCollection to define complex search filters such as "Condition1 AND Condition2".
 */
export class SearchFilterCollection extends SearchFilter { //IEnumerable<SearchFilter>

	private searchFilters: SearchFilter[] = [];
	private logicalOperator: LogicalOperator = LogicalOperator.And;

	/**
	 * Gets the total number of search filters in the collection.
	 */
	get Count(): number {
		return this.searchFilters.length;
	}

	/**
	 * Gets or sets the search filter at the specified index.
	 *
	 * @param   {number}   index   The zero-based index of the search filter to get or set.
	 * @return  {SearchFilter}           The search filter at the specified index.
	 */
	_getItem(index: number): SearchFilter { // c# this indexer
		if (index < 0 || index >= this.Count) {
			throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
		}
		return this.searchFilters[index];
	}
	/**
	 * Gets or sets the search filter at the specified index.
	 *
	 * @param   {number}   index   The zero-based index of the search filter to get or set.
	 * @return  {SearchFilter}           The search filter at the specified index.
	 */
	_setItem(index: number, value: SearchFilter): void {
		if (index < 0 || index >= this.Count) {
			throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
		}
		this.searchFilters[index] = value;
	}

	/**
	 * Gets or sets the logical operator that links the serach filters in this collection.
	 */
	get LogicalOperator(): LogicalOperator {
		return this.logicalOperator;
	}
	set LogicalOperator(value: LogicalOperator) {
		this.logicalOperator = value;
	}

	/**
	 * Initializes a new instance of the **SearchFilterCollection** class. The LogicalOperator property is initialized to LogicalOperator.And.
	 */
	constructor();
	/**
	 * Initializes a new instance of the **SearchFilterCollection** class.
	 *
	 * @param   {LogicalOperator}   logicalOperator   The logical operator used to initialize the collection.
	 */
	constructor(logicalOperator: LogicalOperator);
	/**
	 * Initializes a new instance of the **SearchFilterCollection** class.
	 *
	 * @param   {LogicalOperator}   logicalOperator   The logical operator used to initialize the collection.
	 * @param   {SearchFilter[]}   	searchFilters     The search filters to add to the collection.
	 */
	constructor(logicalOperator: LogicalOperator, searchFilters: SearchFilter[]);
	/**
	 * Initializes a new instance of the **SearchFilterCollection** class.
	 *
	 * @param   {LogicalOperator}   logicalOperator   The logical operator used to initialize the collection.
	 * @param   {...SearchFilter[]}   	...searchFilters     The search filters to add to the collection.
	 */
	constructor(logicalOperator: LogicalOperator, ...searchFilters: SearchFilter[]);
	constructor(logicalOperator?: LogicalOperator, _searchFilters?: SearchFilter[] | SearchFilter) {
		super();
		var searchFilters: SearchFilter[] = [];
        if (arguments.length <= 2) {
            if (ArrayHelper.isArray(_searchFilters)) {
                searchFilters = _searchFilters;
            }
            else if (typeof SearchFilter[<any>_searchFilters] !== 'undefined') {
                searchFilters.push(arguments[1]);
            }
        }
        else {						
            for (var _i = 1; _i < arguments.length; _i++) {
                searchFilters[_i - 1] = arguments[_i];
            }
        }

		this.logicalOperator = logicalOperator || this.logicalOperator;
		this.AddRange(searchFilters);		
	}

	/**
	 * Adds a search filter of any type to the collection.
	 *
	 * @param   {SearchFilter}   searchFilter   The search filter to add. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
	 */
	Add(searchFilter: SearchFilter): void {
		if (searchFilter == null) {
			throw new ArgumentNullException("searchFilter");
		}

		searchFilter.OnChange.push(this.SearchFilterChanged);
		this.searchFilters.push(searchFilter);
		this.Changed();
	}

	/**
	 * Adds multiple search filters to the collection.
	 *
	 * @param   {SearchFilter[]}   searchFilters   The search filters to add. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
	 */
	AddRange(searchFilters: SearchFilter[]): void {
		if (searchFilters == null) {
			throw new ArgumentNullException("searchFilters");
		}

		for (let searchFilter of searchFilters) {
			searchFilter.OnChange.push(this.SearchFilterChanged);
		}
		ArrayHelper.AddRange(this.searchFilters, searchFilters);
		this.Changed();
	}

	/**
	 * Clears the collection.
	 */
	Clear(): void {
		if (this.Count > 0) {
			for (let searchFilter of this.searchFilters) {
				ArrayHelper.RemoveEntry(searchFilter.OnChange, this.SearchFilterChanged)
				//searchFilter.OnChange -= this.SearchFilterChanged;
			}
			this.searchFilters.splice(0);
			this.Changed();
		}
	}

	/**
	 * Determines whether a specific search filter is in the collection.
	 *
	 * @param   {SearchFilter} 	searchFilter   The search filter to locate in the collection.
	 * @return  {boolean}		True is the search filter was found in the collection, false otherwise.
	 */
	Contains(searchFilter: SearchFilter): boolean {
		return this.searchFilters.indexOf(searchFilter) >= 0;
	}

	//GetEnumerator(): SearchFilter[] { throw new Error("SearchFilter_SearchFilterCollection.ts - GetEnumerator : Not implemented."); }

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
	GetXmlElementName(): string { return LogicalOperator[this.LogicalOperator]; }

	/**
	 * @internal Validate instance.
	 */
	InternalValidate(): void {
		for (let i = 0; i < this.Count; i++) {
			try {
				this._getItem(i).InternalValidate();
			}
			catch (e) {
				if (e instanceof ServiceValidationException) {
					throw new ServiceValidationException(StringHelper.Format(Strings.SearchFilterAtIndexIsInvalid, i), e);
				}
			}
		}
	}

	/**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		for (var key in jsObject) {
			if (key.indexOf("__") === 0) continue;
			let filter = SearchFilter.LoadFromXmlJsObject(jsObject[key], service, key);
			if (filter) {
				this.Add(filter);
			}
		}
	}

	/**
	 * Removes a search filter from the collection.
	 *
	 * @param   {SearchFilter}   searchFilter   The search filter to remove.
	 */
	Remove(searchFilter: SearchFilter): void {
		if (searchFilter == null) {
			throw new ArgumentNullException("searchFilter");
		}

		if (this.Contains(searchFilter)) {
			ArrayHelper.RemoveEntry(searchFilter.OnChange, this.SearchFilterChanged);
			ArrayHelper.RemoveEntry(this.searchFilters, searchFilter);
			this.Changed();
		}
	}

	/**
	 * Removes the search filter at the specified index from the collection.
	 *
	 * @param   {number}   index   The zero-based index of the search filter to remove.
	 */
	RemoveAt(index: number): void {
		if (index < 0 || index >= this.Count) {
			throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
		}

		ArrayHelper.RemoveEntry(this._getItem(index).OnChange, this.SearchFilterChanged);
		this.searchFilters.splice(index, 1);
		this.Changed();
	}

	/**
	 * A search filter has changed.
	 *
	 * @param   {ComplexProperty}   complexProperty   The complex property.
	 */
	private SearchFilterChanged(complexProperty: ComplexProperty): void { this.Changed(); }

	/**
	 * @internal Writes the elements to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		for (let searchFilter of this.searchFilters) {
			searchFilter.WriteToXml(writer);
		}
	}

	/**
	 * @internal Writes to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteToXml(writer: EwsServiceXmlWriter): void {
		// If there is only one filter in the collection, which developers tend to do,
		// we need to not emit the collection and instead only emit the one filter within
		// the collection. This is to work around the fact that EWS does not allow filter
		// collections that have less than two elements.
		if (this.Count == 1) {
			this._getItem(0).WriteToXml(writer);
		}
		else {
			super.WriteToXml(writer);
		}
	}
}

export interface ISearchFilterCollection {
	new (): SearchFilterCollection;
	new (logicalOperator: LogicalOperator): SearchFilterCollection;
	new (logicalOperator: LogicalOperator, searchFilters: SearchFilter[]): SearchFilterCollection;
}
