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
var ExtensionMethods_1 = require("../../ExtensionMethods");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var SearchFilter_1 = require("./SearchFilter");
/**
 * Represents a search filter that negates another. Applications can use NotFilter to define conditions such as "NOT(other filter)".
 */
var Not = /** @class */ (function (_super) {
    __extends(Not, _super);
    function Not(searchFilter) {
        if (searchFilter === void 0) { searchFilter = null; }
        var _this = _super.call(this) || this;
        _this.searchFilter = searchFilter;
        return _this;
    }
    Object.defineProperty(Not.prototype, "SearchFilter", {
        /**
         * Gets or sets the search filter to negate. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
         */
        get: function () {
            return this.searchFilter;
        },
        set: function (value) {
            var _this = this;
            if (this.searchFilter !== null) {
                ExtensionMethods_1.ArrayHelper.RemoveEntry(this.searchFilter.OnChange, this.SearchFilterChanged);
            }
            this.SetFieldValue({ getValue: function () { return _this.searchFilter; }, setValue: function (updateValue) { _this.searchFilter = updateValue; } }, value);
            if (this.searchFilter !== null) {
                this.searchFilter.OnChange.push(this.SearchFilterChanged.bind(this));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    Not.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Not; };
    /**
     * @internal Validate instance.
     */
    Not.prototype.InternalValidate = function () {
        if (this.searchFilter == null) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.SearchFilterMustBeSet);
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    Not.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        this.searchFilter = SearchFilter_1.SearchFilter.LoadFromXmlJsObject(jsObject, service);
    };
    /**
     * Gets or sets the search filter to negate. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
     */
    Not.prototype.SearchFilterChanged = function (complexProperty) { this.Changed(); };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    Not.prototype.WriteElementsToXml = function (writer) { this.SearchFilter.WriteToXml(writer); };
    return Not;
}(SearchFilter_1.SearchFilter));
exports.Not = Not;
