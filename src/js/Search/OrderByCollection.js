"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var SortDirection_1 = require("../Enumerations/SortDirection");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents an ordered collection of property definitions qualified with a sort direction.
 *
 * @sealed
 */
var OrderByCollection = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **OrderByCollection** class.
     */
    function OrderByCollection() {
        this.propDefSortOrderPairList = [];
    }
    Object.defineProperty(OrderByCollection.prototype, "Count", {
        /**
         * Gets the number of elements contained in the collection.
         */
        get: function () {
            return this.propDefSortOrderPairList.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the element at the specified index from the collection.
     *
     * @param   {number}   index   Index.
     */
    OrderByCollection.prototype._getItem = function (index) {
        return this.propDefSortOrderPairList[index];
    };
    /**
     * Adds the specified property definition / sort direction pair to the collection.
     *
     * @param   {PropertyDefinitionBase}    propertyDefinition   The property definition.
     * @param   {SortDirection}             sortDirection        The sort direction.
     */
    OrderByCollection.prototype.Add = function (propertyDefinition, sortDirection) {
        if (this.Contains(propertyDefinition)) {
            throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyAlreadyExistsInOrderByCollection, propertyDefinition.GetPrintableName()));
        }
        this.propDefSortOrderPairList.push({ key: propertyDefinition, value: sortDirection }); //new PropertyDefinitionSortDirectionPair() not seamless in javascript
    };
    /**
     * Removes all elements from the collection.
     */
    OrderByCollection.prototype.Clear = function () {
        this.propDefSortOrderPairList.splice(0);
    };
    /**
     * @internal Determines whether the collection contains the specified property definition.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition   The property definition.
     * @return  {boolean}   True if the collection contains the specified property definition; otherwise, false.
     */
    OrderByCollection.prototype.Contains = function (propertyDefinition) {
        this.propDefSortOrderPairList.forEach(function (pair, index) {
            //debugger;// check if equality works or need to use any property
            if (pair.key === propertyDefinition)
                return true;
        });
        return false;
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.propDefSortOrderPairList
     */
    OrderByCollection.prototype.GetEnumerator = function () {
        return this.propDefSortOrderPairList;
    };
    /**
     * @internal Removes the specified property definition from the collection.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition   The property definition.
     * @return  {boolean}   True if the property definition is successfully removed; otherwise, false
     */
    OrderByCollection.prototype.Remove = function (propertyDefinition) {
        var oldCount = this.Count;
        this.propDefSortOrderPairList = this.propDefSortOrderPairList.filter(function (value) { return value.key !== propertyDefinition; });
        return oldCount > this.Count;
    };
    /**
     * @internal Removes the element at the specified index from the collection.
     *
     * @param   {number}   index   The index.
     */
    OrderByCollection.prototype.RemoveAt = function (index) {
        this.propDefSortOrderPairList.splice(index, 1);
    };
    /**
     * Tries to get the value for a property definition in the collection.
     *
     * @param   {PropertyDefinitionBase}    propertyDefinition   The property definition.
     * @param   {IOutParam<SortDirection>}  sortDirection        The sort direction.
     * @return  {boolean}                   True if collection contains property definition, otherwise false.
     */
    OrderByCollection.prototype.TryGetValue = function (propertyDefinition, sortDirection) {
        for (var _i = 0, _a = this.propDefSortOrderPairList; _i < _a.length; _i++) {
            var pair = _a[_i];
            if (pair.key == propertyDefinition) { //possible bug - log at Github
                sortDirection.outValue = pair.value;
                return true;
            }
        }
        sortDirection.outValue = SortDirection_1.SortDirection.Ascending; // out parameter has to be set to some value.
        return false;
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    OrderByCollection.prototype.WriteToXml = function (writer, xmlElementName) {
        if (this.Count > 0) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, xmlElementName);
            for (var _i = 0, _a = this.propDefSortOrderPairList; _i < _a.length; _i++) {
                var keyValuePair = _a[_i];
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FieldOrder);
                writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Order, keyValuePair.value);
                keyValuePair.key.WriteToXml(writer);
                writer.WriteEndElement(); // FieldOrder
            }
            writer.WriteEndElement();
        }
    };
    return OrderByCollection;
}());
exports.OrderByCollection = OrderByCollection;
