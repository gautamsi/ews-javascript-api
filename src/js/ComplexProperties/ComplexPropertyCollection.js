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
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var Strings_1 = require("../Strings");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a collection of properties that can be sent to and retrieved from EWS.
 *
 * @type <TComplexProperty>   ComplexProperty type.
 */
var ComplexPropertyCollection = /** @class */ (function (_super) {
    __extends(ComplexPropertyCollection, _super);
    /**
     * @internal Initializes a new instance of the **ComplexPropertyCollection** class.
     *
     */
    function ComplexPropertyCollection() {
        var _this = _super.call(this) || this;
        _this.___typeGenerics = ["ComplexProperty"];
        _this.items = [];
        _this.addedItems = [];
        _this.modifiedItems = [];
        _this.removedItems = [];
        return _this;
    }
    Object.defineProperty(ComplexPropertyCollection.prototype, "Items", {
        /**
         * @internal Gets the items. (workaround for GetEnumerator)
         *
         * @return The items.
         */
        get: function () { return this.items; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPropertyCollection.prototype, "AddedItems", {
        /**
         * @internal Gets the added items.
         *
         * @return The added items.
         */
        get: function () { return this.addedItems; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPropertyCollection.prototype, "ModifiedItems", {
        /**
         * @internal Gets the modified items.
         *
         * @return The modified items
         */
        get: function () { return this.modifiedItems; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPropertyCollection.prototype, "RemovedItems", {
        /**
         * @internal Gets the removed items.
         *
         * @return The removed items.
         */
        get: function () { return this.removedItems; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPropertyCollection.prototype, "Count", {
        /**
         * Gets the total number of properties in the collection.
         */
        get: function () { return this.items.length; },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the property at the specified index.
     *
     * @param   {number}   index   The zero-based index of the property to get.
     * @return  {TComplexProperty}           The property at the specified index.
     */
    ComplexPropertyCollection.prototype._getItem = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    };
    /**
     * @internal Clears the change log.
     */
    ComplexPropertyCollection.prototype.ClearChangeLog = function () {
        this.removedItems.splice(0);
        this.addedItems.splice(0);
        this.modifiedItems.splice(0);
    };
    /**
     * Determines whether a specific property is in the collection.
     *
     * @param   {TComplexProperty}   complexProperty   The property to locate in the collection.
     * @return  {boolean}           True if the property was found in the collection, false otherwise.
     */
    ComplexPropertyCollection.prototype.Contains = function (complexProperty) { return this.items.indexOf(complexProperty) >= 0; };
    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    ComplexPropertyCollection.prototype.CreateFromXmlJsObjectCollection = function (jsObjectCollection, service) {
        var collection = jsObjectCollection;
        if (!ExtensionMethods_1.ArrayHelper.isArray(collection)) {
            collection = [];
            var collectionElement = this.GetCollectionItemXmlElementName(null);
            var typeName = ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsObjectCollection);
            if (collectionElement === null || (typeName && collectionElement === typeName)) {
                collection = [jsObjectCollection];
            }
            else {
                for (var key in jsObjectCollection) {
                    if (key.indexOf("__") === 0) //skip xmljsobject conversion entries like __type and __prefix
                        continue;
                    var collectionObj = jsObjectCollection[key];
                    if (!ExtensionMethods_1.ArrayHelper.isArray(collectionObj)) {
                        collectionObj = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObjectCollection, key);
                    }
                    ExtensionMethods_1.ArrayHelper.AddRange(collection, collectionObj);
                }
            }
        }
        for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
            var jsonObject = collection_1[_i];
            var jsonProperty = jsonObject;
            if (jsonProperty != null) {
                var complexProperty = null;
                // If type property is present, use it. Otherwise create default property instance.
                // Note: polymorphic collections (such as Attachments) need a type property so
                // the CreateDefaultComplexProperty call will fail.
                if (ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsonProperty)) {
                    complexProperty = this.CreateComplexProperty(ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsonProperty));
                }
                else {
                    complexProperty = this.CreateDefaultComplexProperty();
                }
                if (complexProperty != null) {
                    complexProperty.LoadFromXmlJsObject(jsonProperty, service);
                    this.InternalAdd(complexProperty, true);
                }
            }
        }
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    ComplexPropertyCollection.prototype.GetEnumerator = function () {
        return this.items;
    };
    /**
     * Searches for a specific property and return its zero-based index within the collection.
     *
     * @param   {TComplexProperty}   complexProperty   The property to locate in the collection.
     * @return  {number}                     The zero-based index of the property within the collection.
     */
    ComplexPropertyCollection.prototype.IndexOf = function (complexProperty) {
        return this.items.indexOf(complexProperty);
    };
    ComplexPropertyCollection.prototype.InternalAdd = function (complexProperty, loading) {
        if (loading === void 0) { loading = false; }
        EwsLogging_1.EwsLogging.Assert(complexProperty != null, "ComplexPropertyCollection.InternalAdd", "complexProperty is null");
        if (this.items.indexOf(complexProperty) < 0) {
            this.items.push(complexProperty);
            if (!loading) {
                ExtensionMethods_1.ArrayHelper.RemoveEntry(this.removedItems, complexProperty); // this.removedItems.Remove(complexProperty);
                this.addedItems.push(complexProperty);
            }
            complexProperty.OnChange.push(this.ItemChanged.bind(this));
            this.Changed();
        }
    };
    /**
     * @internal Clear collection.
     */
    ComplexPropertyCollection.prototype.InternalClear = function () {
        while (this.Count > 0) {
            this.InternalRemoveAt(0);
        }
    };
    /**
     * @internal Remove specified complex property.
     *
     * @param   {TComplexProperty}   complexProperty   The complex property.
     * @return  {boolean}           True if the complex property was successfully removed from the collection, false otherwise.
     */
    ComplexPropertyCollection.prototype.InternalRemove = function (complexProperty) {
        EwsLogging_1.EwsLogging.Assert(complexProperty != null, "ComplexPropertyCollection.InternalRemove", "complexProperty is null");
        if (ExtensionMethods_1.ArrayHelper.RemoveEntry(this.items, complexProperty)) { // this.items.Remove(complexProperty))
            ExtensionMethods_1.ArrayHelper.RemoveEntry(complexProperty.OnChange, this.ItemChanged); // complexProperty.OnChange -= this.ItemChanged;
            if (this.addedItems.indexOf(complexProperty) < 0) {
                this.removedItems.push(complexProperty);
            }
            else {
                ExtensionMethods_1.ArrayHelper.RemoveEntry(this.addedItems, complexProperty); // this.addedItems.Remove(complexProperty);
            }
            ExtensionMethods_1.ArrayHelper.RemoveEntry(this.modifiedItems, complexProperty); // this.modifiedItems.Remove(complexProperty);
            this.Changed();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @internal Remote entry at index.
     *
     * @param   {number}   index   The index.
     */
    ComplexPropertyCollection.prototype.InternalRemoveAt = function (index) {
        EwsLogging_1.EwsLogging.Assert(index >= 0 && index < this.Count, "ComplexPropertyCollection.InternalRemoveAt", "index is out of range.");
        this.InternalRemove(this.items[index]);
    };
    /**
     * @internal Item changed.
     *
     * @param   {ComplexProperty}   complexProperty   The complex property.
     */
    ComplexPropertyCollection.prototype.ItemChanged = function (complexProperty) {
        //TComplexProperty property = complexProperty as TComplexProperty;
        var property = complexProperty;
        // EwsLogging.Assert(
        //     property != null,
        //     "ComplexPropertyCollection.ItemChanged",
        //     StringHelper.Format("ComplexPropertyCollection.ItemChanged: the type of the complexProperty argument ({0}) is not supported.", complexProperty.___typeName));
        if (this.addedItems.indexOf(property) < 0) {
            if (this.modifiedItems.indexOf(property) < 0) {
                this.modifiedItems.push(property);
                this.Changed();
            }
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    ComplexPropertyCollection.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        EwsLogging_1.EwsLogging.Assert(false, "ComplexPropertyCollection.LoadFromXmlJsObject", "LoadFromXmlJsObject was called, should not be calling. Fix it to direct to Create or Update call instad.");
        this.CreateFromXmlJsObjectCollection(jsObject, service);
    };
    /**
     * @internal Removes from change log.
     *
     * @param   {TComplexProperty}   complexProperty   The complex property.
     */
    ComplexPropertyCollection.prototype.RemoveFromChangeLog = function (complexProperty) {
        ExtensionMethods_1.ArrayHelper.RemoveEntry(this.removedItems, complexProperty); //this.removedItems.Remove(complexProperty);
        ExtensionMethods_1.ArrayHelper.RemoveEntry(this.modifiedItems, complexProperty); //this.modifiedItems.Remove(complexProperty);
        ExtensionMethods_1.ArrayHelper.RemoveEntry(this.addedItems, complexProperty); //this.addedItems.Remove(complexProperty);
    };
    /**
     * @internal Determine whether we should write collection to XML or not.
     *
     * @return  {boolean}      True if collection contains at least one element.
     */
    ComplexPropertyCollection.prototype.ShouldWriteToRequest = function () {
        // Only write collection if it has at least one element.
        return this.Count > 0;
    };
    /**
     * @internal Loads from XMLJsObject collection to update collection Items.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The XMLJsObject collection.
     * @param   {ExchangeService}   service          The service.
     */
    ComplexPropertyCollection.prototype.UpdateFromXmlJsObjectCollection = function (jsObjectCollection, service) {
        var collection = jsObjectCollection;
        if (!ExtensionMethods_1.ArrayHelper.isArray(collection)) {
            collection = [];
            var collectionElement = this.GetCollectionItemXmlElementName(null);
            var typeName = ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsObjectCollection);
            if (collectionElement === null || (typeName && collectionElement === typeName)) {
                collection = [jsObjectCollection];
            }
            else {
                for (var key in jsObjectCollection) {
                    if (key.indexOf("__") === 0) //skip xmljsobject conversion entries like __type and __prefix
                        continue;
                    var collectionObj = jsObjectCollection[key];
                    if (!ExtensionMethods_1.ArrayHelper.isArray(collectionObj)) {
                        collectionObj = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObjectCollection, key);
                    }
                    ExtensionMethods_1.ArrayHelper.AddRange(collection, collectionObj);
                }
            }
        }
        if (this.Count != collection.length) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.PropertyCollectionSizeMismatch);
        }
        var index = 0;
        for (var _i = 0, collection_2 = collection; _i < collection_2.length; _i++) {
            var jsonObject = collection_2[_i];
            var jsonProperty = jsonObject;
            if (jsonProperty != null) {
                var expectedComplexProperty = null;
                if (ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsonProperty)) {
                    expectedComplexProperty = this.CreateComplexProperty(ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsonProperty));
                }
                else {
                    expectedComplexProperty = this.CreateDefaultComplexProperty();
                }
                var actualComplexProperty = this._getItem(index++);
                if (expectedComplexProperty == null || !(actualComplexProperty instanceof expectedComplexProperty.constructor)) {
                    throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.PropertyTypeIncompatibleWhenUpdatingCollection);
                }
                actualComplexProperty.LoadFromXmlJsObject(jsonProperty, service);
            }
            else {
                throw new ServiceLocalException_1.ServiceLocalException();
            }
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ComplexPropertyCollection.prototype.WriteElementsToXml = function (writer) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var complexProperty = _a[_i];
            complexProperty.WriteToXml(writer, this.GetCollectionItemXmlElementName(complexProperty));
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          xmlNamespace     The XML namespace.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    ComplexPropertyCollection.prototype.WriteToXml = function (writer, xmlElementName, xmlNamespace) {
        if (xmlNamespace === void 0) { xmlNamespace = XmlNamespace_1.XmlNamespace.Types; }
        if (this.ShouldWriteToRequest()) {
            _super.prototype.WriteToXml.call(this, writer, xmlElementName, xmlNamespace);
        }
    };
    /**
     * @internal Writes the update to XML.
     * ICustomUpdateSerializer.WriteSetUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer.
     * @param   {ServiceObject}         ewsObject            The ews object.
     * @param   {PropertyDefinition}    propertyDefinition   Property definition.
     * @return  {boolean}               True if property generated serialization.
     */
    ComplexPropertyCollection.prototype.WriteSetUpdateToXml = function (writer, ewsObject, propertyDefinition) {
        // If the collection is empty, delete the property.
        if (this.Count == 0) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetDeleteFieldXmlElementName());
            propertyDefinition.WriteToXml(writer);
            writer.WriteEndElement();
            return true;
        }
        // Otherwise, use the default XML serializer.
        else {
            return false;
        }
    };
    /**
     * @internal Writes the deletion update to XML.
     * ICustomUpdateSerializer.WriteDeleteUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer      The writer.
     * @param   {ServiceObject}         ewsObject   The ews object.
     * @return  {boolean}               True if property generated serialization.
     */
    ComplexPropertyCollection.prototype.WriteDeleteUpdateToXml = function (writer, ewsObject) {
        // Use the default XML serializer.
        return false;
    };
    return ComplexPropertyCollection;
}(ComplexProperty_1.ComplexProperty));
exports.ComplexPropertyCollection = ComplexPropertyCollection;
