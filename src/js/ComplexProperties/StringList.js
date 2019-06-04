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
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a list of strings.
 *
 * @sealed
 */
var StringList = /** @class */ (function (_super) {
    __extends(StringList, _super);
    function StringList(stringOrItemXmlElementName) {
        if (stringOrItemXmlElementName === void 0) { stringOrItemXmlElementName = null; }
        var _this = _super.call(this) || this;
        _this.items = [];
        _this.itemXmlElementName = XmlElementNames_1.XmlElementNames.String;
        if (stringOrItemXmlElementName !== null) {
            if (typeof stringOrItemXmlElementName === 'string') {
                _this.itemXmlElementName = stringOrItemXmlElementName;
            }
            else {
                _this.AddRange(stringOrItemXmlElementName);
            }
        }
        return _this;
    }
    Object.defineProperty(StringList.prototype, "Count", {
        /**
         * Gets the number of strings in the list.
         */
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets or sets the string at the specified index.
     *
     * @param   {number}    index   The index of the string to get or set.
     * @return  {string}    The string at the specified index.
     */
    StringList.prototype._getItem = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index - " + Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    };
    /**
     * Gets or sets the string at the specified index.
     *
     * @param   {number}    index   The index of the string to get or set.
     * @return  {string}    The string at the specified index.
     */
    StringList.prototype._setItem = function (index, value) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index - " + Strings_1.Strings.IndexIsOutOfRange);
        }
        if (this.items[index] !== value) {
            this.items[index] = value;
            this.Changed();
        }
    };
    /**
     * Adds a string to the list.
     *
     * @param   {string}   s   The string to add.
     */
    StringList.prototype.Add = function (s) {
        this.items.push(s);
        this.Changed();
    };
    /**
     * Adds multiple strings to the list.
     *
     * @param   {string[]}   strings   The strings to add.
     */
    StringList.prototype.AddRange = function (strings) {
        var changed = false;
        for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
            var s = strings_1[_i];
            if (!this.Contains(s)) {
                this.items.push(s);
                changed = true;
            }
        }
        if (changed) {
            this.Changed();
        }
    };
    /**
     * Clears the list.
     */
    StringList.prototype.Clear = function () {
        this.items.splice(0);
        this.Changed();
    };
    /**
     * Determines whether the list contains a specific string.
     *
     * @param   {string}    s   The string to check the presence of.
     * @return  {boolean}   True if s is present in the list, false otherwise.
     */
    StringList.prototype.Contains = function (s) { return this.items.indexOf(s) >= 0; };
    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    StringList.prototype.CreateFromXmlJsObjectCollection = function (jsObjectCollection, service) {
        var collection = jsObjectCollection[this.itemXmlElementName];
        if (!ExtensionMethods_1.ArrayHelper.isArray(collection)) {
            collection = [collection];
        }
        for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
            var item = collection_1[_i];
            this.Add(item);
        }
    };
    StringList.prototype.Equals = function (obj) { throw new Error("StringList.ts - Equals : Not implemented."); };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    StringList.prototype.GetEnumerator = function () {
        return this.items;
    };
    StringList.prototype.GetHashCode = function () { throw new Error("StringList.ts - GetHashCode : Not implemented."); };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    StringList.prototype.LoadFromXmlJsObject = function (jsObjectCollection, service) {
        this.CreateFromXmlJsObjectCollection(jsObjectCollection, service);
    };
    /**
     * Removes a string from the list.
     *
     * @param   {string}   s   The string to remove.
     * @return  {boolean}       True is s was removed, false otherwise.
     */
    StringList.prototype.Remove = function (s) {
        var result = ExtensionMethods_1.ArrayHelper.RemoveEntry(this.items, s);
        if (result) {
            this.Changed();
        }
        return result;
    };
    /**
     * Removes the string at the specified position from the list.
     *
     * @param   {number}   index   The index of the string to remove.
     */
    StringList.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index - " + Strings_1.Strings.IndexIsOutOfRange);
        }
        this.items.splice(index, 1);
        this.Changed();
    };
    /**
     * Generates a string representation of all the items in the list.
     *
     * @return  {string}      A comma-separated list of the strings present in the list.
     */
    StringList.prototype.ToString = function () {
        return this.items.join(",");
    };
    /**
     * @internal Loads from XMLJsObject collection to update collection Items.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The XMLJsObject collection.
     * @param   {ExchangeService}   service          The service.
     */
    StringList.prototype.UpdateFromXmlJsObjectCollection = function (jsObjectCollection, service) {
        throw new Error("StringList.ts - UpdateFromXmlJsObjectCollection : Not implemented.");
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    StringList.prototype.WriteElementsToXml = function (writer) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.itemXmlElementName);
            writer.WriteValue(item, this.itemXmlElementName);
            writer.WriteEndElement();
        }
    };
    return StringList;
}(ComplexProperty_1.ComplexProperty));
exports.StringList = StringList;
