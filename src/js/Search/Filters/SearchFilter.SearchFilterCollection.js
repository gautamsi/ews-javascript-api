"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var LogicalOperator_1 = require("../../Enumerations/LogicalOperator");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var Strings_1 = require("../../Strings");
var SearchFilter_1 = require("./SearchFilter");
/**
 * Represents a collection of search filters linked by a logical operator. Applications can use SearchFilterCollection to define complex search filters such as "Condition1 AND Condition2".
 */
var SearchFilterCollection = /** @class */ (function (_super) {
    __extends(SearchFilterCollection, _super);
    function SearchFilterCollection(logicalOperator, _searchFilters) {
        var _this = _super.call(this) || this;
        _this.searchFilters = [];
        _this.logicalOperator = LogicalOperator_1.LogicalOperator.And;
        var searchFilters = [];
        if (arguments.length <= 2) {
            if (ExtensionMethods_1.ArrayHelper.isArray(_searchFilters)) {
                searchFilters = _searchFilters;
            }
            else if (typeof SearchFilter_1.SearchFilter[_searchFilters] !== 'undefined') {
                searchFilters.push(arguments[1]);
            }
        }
        else {
            for (var _i = 1; _i < arguments.length; _i++) {
                searchFilters[_i - 1] = arguments[_i];
            }
        }
        _this.logicalOperator = logicalOperator || _this.logicalOperator;
        _this.AddRange(searchFilters);
        return _this;
    }
    Object.defineProperty(SearchFilterCollection.prototype, "Count", {
        /**
         * Gets the total number of search filters in the collection.
         */
        get: function () {
            return this.searchFilters.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFilterCollection.prototype, "LogicalOperator", {
        /**
         * Gets or sets the logical operator that links the serach filters in this collection.
         */
        get: function () {
            return this.logicalOperator;
        },
        set: function (value) {
            this.logicalOperator = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets or sets the search filter at the specified index.
     *
     * @param   {number}   index   The zero-based index of the search filter to get or set.
     * @return  {SearchFilter}           The search filter at the specified index.
     */
    SearchFilterCollection.prototype._getItem = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.searchFilters[index];
    };
    /**
     * Gets or sets the search filter at the specified index.
     *
     * @param   {number}   index   The zero-based index of the search filter to get or set.
     * @return  {SearchFilter}           The search filter at the specified index.
     */
    SearchFilterCollection.prototype._setItem = function (index, value) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        this.searchFilters[index] = value;
    };
    /**
     * Adds a search filter of any type to the collection.
     *
     * @param   {SearchFilter}   searchFilter   The search filter to add. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
     */
    SearchFilterCollection.prototype.Add = function (searchFilter) {
        if (searchFilter == null) {
            throw new ArgumentException_1.ArgumentNullException("searchFilter");
        }
        searchFilter.OnChange.push(this.SearchFilterChanged.bind(this));
        this.searchFilters.push(searchFilter);
        this.Changed();
    };
    /**
     * Adds multiple search filters to the collection.
     *
     * @param   {SearchFilter[]}   searchFilters   The search filters to add. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
     */
    SearchFilterCollection.prototype.AddRange = function (searchFilters) {
        if (searchFilters == null) {
            throw new ArgumentException_1.ArgumentNullException("searchFilters");
        }
        for (var _a = 0, searchFilters_1 = searchFilters; _a < searchFilters_1.length; _a++) {
            var searchFilter = searchFilters_1[_a];
            searchFilter.OnChange.push(this.SearchFilterChanged.bind(this));
        }
        ExtensionMethods_1.ArrayHelper.AddRange(this.searchFilters, searchFilters);
        this.Changed();
    };
    /**
     * Clears the collection.
     */
    SearchFilterCollection.prototype.Clear = function () {
        if (this.Count > 0) {
            for (var _a = 0, _b = this.searchFilters; _a < _b.length; _a++) {
                var searchFilter = _b[_a];
                ExtensionMethods_1.ArrayHelper.RemoveEntry(searchFilter.OnChange, this.SearchFilterChanged);
                //searchFilter.OnChange -= this.SearchFilterChanged;
            }
            this.searchFilters.splice(0);
            this.Changed();
        }
    };
    /**
     * Determines whether a specific search filter is in the collection.
     *
     * @param   {SearchFilter} 	searchFilter   The search filter to locate in the collection.
     * @return  {boolean}		True is the search filter was found in the collection, false otherwise.
     */
    SearchFilterCollection.prototype.Contains = function (searchFilter) {
        return this.searchFilters.indexOf(searchFilter) >= 0;
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    SearchFilterCollection.prototype.GetEnumerator = function () {
        return this.searchFilters;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    SearchFilterCollection.prototype.GetXmlElementName = function () { return LogicalOperator_1.LogicalOperator[this.LogicalOperator]; };
    /**
     * @internal Validate instance.
     */
    SearchFilterCollection.prototype.InternalValidate = function () {
        for (var i = 0; i < this.Count; i++) {
            try {
                this._getItem(i).InternalValidate();
            }
            catch (e) {
                if (e instanceof ServiceValidationException_1.ServiceValidationException) {
                    throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.SearchFilterAtIndexIsInvalid, i), e);
                }
            }
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    SearchFilterCollection.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            if (key.indexOf("__") === 0)
                continue;
            var filter = SearchFilter_1.SearchFilter.LoadFromXmlJsObject(jsObject[key], service, key);
            if (filter) {
                this.Add(filter);
            }
        }
    };
    /**
     * Removes a search filter from the collection.
     *
     * @param   {SearchFilter}   searchFilter   The search filter to remove.
     */
    SearchFilterCollection.prototype.Remove = function (searchFilter) {
        if (searchFilter == null) {
            throw new ArgumentException_1.ArgumentNullException("searchFilter");
        }
        if (this.Contains(searchFilter)) {
            ExtensionMethods_1.ArrayHelper.RemoveEntry(searchFilter.OnChange, this.SearchFilterChanged);
            ExtensionMethods_1.ArrayHelper.RemoveEntry(this.searchFilters, searchFilter);
            this.Changed();
        }
    };
    /**
     * Removes the search filter at the specified index from the collection.
     *
     * @param   {number}   index   The zero-based index of the search filter to remove.
     */
    SearchFilterCollection.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        ExtensionMethods_1.ArrayHelper.RemoveEntry(this._getItem(index).OnChange, this.SearchFilterChanged);
        this.searchFilters.splice(index, 1);
        this.Changed();
    };
    /**
     * A search filter has changed.
     *
     * @param   {ComplexProperty}   complexProperty   The complex property.
     */
    SearchFilterCollection.prototype.SearchFilterChanged = function (complexProperty) { this.Changed(); };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SearchFilterCollection.prototype.WriteElementsToXml = function (writer) {
        for (var _a = 0, _b = this.searchFilters; _a < _b.length; _a++) {
            var searchFilter = _b[_a];
            searchFilter.WriteToXml(writer);
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SearchFilterCollection.prototype.WriteToXml = function (writer) {
        // If there is only one filter in the collection, which developers tend to do,
        // we need to not emit the collection and instead only emit the one filter within
        // the collection. This is to work around the fact that EWS does not allow filter
        // collections that have less than two elements.
        if (this.Count == 1) {
            this._getItem(0).WriteToXml(writer);
        }
        else {
            _super.prototype.WriteToXml.call(this, writer);
        }
    };
    return SearchFilterCollection;
}(SearchFilter_1.SearchFilter));
exports.SearchFilterCollection = SearchFilterCollection;
