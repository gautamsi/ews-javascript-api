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
var LogicalOperator_1 = require("../../Enumerations/LogicalOperator");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var ComplexProperty_1 = require("../../ComplexProperties/ComplexProperty");
/**
 * Represents the base search filter class. Use descendant search filter classes such as SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection to define search filters.
 */
var SearchFilter = /** @class */ (function (_super) {
    __extends(SearchFilter, _super);
    /**
     * Initializes a new instance of the **SearchFilter** class.
     */
    function SearchFilter() {
        return _super.call(this) || this;
    }
    /**
     * Gets the search filter instance.
     *
     * @param {string} localName Name of the local.
     * @returns {SearchFilter}
     */
    SearchFilter.GetSearchFilterInstance = function (localName) {
        var searchFilter;
        switch (localName) {
            case XmlElementNames_1.XmlElementNames.Exists:
                searchFilter = new SearchFilter.Exists();
                break;
            case XmlElementNames_1.XmlElementNames.Contains:
                searchFilter = new SearchFilter.ContainsSubstring();
                break;
            case XmlElementNames_1.XmlElementNames.Excludes:
                searchFilter = new SearchFilter.ExcludesBitmask();
                break;
            case XmlElementNames_1.XmlElementNames.Not:
                searchFilter = new SearchFilter.Not();
                break;
            case XmlElementNames_1.XmlElementNames.And:
                searchFilter = new SearchFilter.SearchFilterCollection(LogicalOperator_1.LogicalOperator.And);
                break;
            case XmlElementNames_1.XmlElementNames.Or:
                searchFilter = new SearchFilter.SearchFilterCollection(LogicalOperator_1.LogicalOperator.Or);
                break;
            case XmlElementNames_1.XmlElementNames.IsEqualTo:
                searchFilter = new SearchFilter.IsEqualTo();
                break;
            case XmlElementNames_1.XmlElementNames.IsNotEqualTo:
                searchFilter = new SearchFilter.IsNotEqualTo();
                break;
            case XmlElementNames_1.XmlElementNames.IsGreaterThan:
                searchFilter = new SearchFilter.IsGreaterThan();
                break;
            case XmlElementNames_1.XmlElementNames.IsGreaterThanOrEqualTo:
                searchFilter = new SearchFilter.IsGreaterThanOrEqualTo();
                break;
            case XmlElementNames_1.XmlElementNames.IsLessThan:
                searchFilter = new SearchFilter.IsLessThan();
                break;
            case XmlElementNames_1.XmlElementNames.IsLessThanOrEqualTo:
                searchFilter = new SearchFilter.IsLessThanOrEqualTo();
                break;
            default:
                searchFilter = null;
                break;
        }
        return searchFilter;
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}               jsObject                Json Object converted from XML.
     * @param   {ExchangeService}   service                 The service.
     * @param   {string}            typeName                 type name, when provided prevent call for type name check.
     * @return  {SearchFilter}      SearchFilter instance.
     */
    SearchFilter.LoadFromXmlJsObject = function (jsObject, service, typeName) {
        if (typeName === void 0) { typeName = null; }
        if (!typeName) {
            typeName = ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsObject);
        }
        var searchFilter = SearchFilter.GetSearchFilterInstance(jsObject.ReadTypeString());
        if (searchFilter != null) {
            searchFilter.LoadFromXmlJsObject(jsObject, service);
        }
        return searchFilter;
    };
    /**
     * @internal Writes to XML.
     *
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    SearchFilter.prototype.WriteToXml = function (writer) {
        _super.prototype.WriteToXml.call(this, writer, this.GetXmlElementName());
    };
    return SearchFilter;
}(ComplexProperty_1.ComplexProperty));
exports.SearchFilter = SearchFilter;
(function (SearchFilter) {
})(SearchFilter = exports.SearchFilter || (exports.SearchFilter = {}));
exports.SearchFilter = SearchFilter;
