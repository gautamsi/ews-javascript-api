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
var ExtensionMethods_1 = require("../ExtensionMethods");
var ComplexProperty_1 = require("./ComplexProperty");
var AltDictionary_1 = require("../AltDictionary");
var DictionaryKeyType_1 = require("../Enumerations/DictionaryKeyType");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents a generic dictionary that can be sent to or retrieved from EWS.
 *
 * @typeparam   <TKey>      The type of key.
 * @typeparam   <TEntry>    The type of entry.
 */
var DictionaryProperty = /** @class */ (function (_super) {
    __extends(DictionaryProperty, _super);
    /**
     * @internal Initializes a new instance of the **DictionaryProperty** class.
     *
     * @param   {DictionaryKeyType}	dictionaryKeyType	Dictionary Key type, needed to workaround c# type checking of generics.
     */
    function DictionaryProperty(dictionaryKeyType) {
        var _this = _super.call(this) || this;
        _this.dictionaryKeyType = DictionaryKeyType_1.DictionaryKeyType.EmailAddressKey;
        _this.dictionaryKeyDelegate = function (key) { return _this.dictionaryKeyTypeEnum[key]; };
        _this.entries = new AltDictionary_1.Dictionary(_this.dictionaryKeyDelegate);
        _this.removedEntries = new AltDictionary_1.Dictionary(_this.dictionaryKeyDelegate);
        _this.addedEntries = [];
        _this.modifiedEntries = [];
        _this.dictionaryKeyType = dictionaryKeyType;
        _this.dictionaryKeyTypeEnum = EwsUtilities_1.EwsUtilities.GetDictionaryKeyTypeEnum(_this.dictionaryKeyType);
        return _this;
    }
    Object.defineProperty(DictionaryProperty.prototype, "Entries", {
        /**
         * Gets the entries.
         *
         * @value   The entries.
         */
        get: function () {
            return this.entries;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Clears the change log.
     */
    DictionaryProperty.prototype.ClearChangeLog = function () {
        this.addedEntries.splice(0);
        this.removedEntries.clear();
        this.modifiedEntries.splice(0);
        for (var _i = 0, _a = this.entries.Values; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.ClearChangeLog();
        }
    };
    /**
     * Determines whether this instance contains the specified key.
     *
     * @param   {TKey}      key   The key.
     * @return  {boolean}   true if this instance contains the specified key; otherwise, false.
     */
    DictionaryProperty.prototype.Contains = function (key) {
        return this.Entries.containsKey(key);
    };
    /**
     * @internal Creates the entry.
     *
     * @return  {TEntry}  Dictionary entry.
     */
    DictionaryProperty.prototype.CreateEntry = function () {
        return this.CreateEntryInstance();
    };
    /**
     * Entry was changed.
     *
     * @param   {}   complexProperty   The complex property.
     */
    DictionaryProperty.prototype.EntryChanged = function (complexProperty) {
        var key = complexProperty.Key;
        if (this.addedEntries.indexOf(key) === -1 && this.modifiedEntries.indexOf(key) === -1) {
            this.modifiedEntries.push(key);
            this.Changed();
        }
    };
    /**
     * @internal Gets the name of the entry XML element.
     *
     * @param   {TEntry}    entry   The entry.
     * @return  {string}    XML element name.
     */
    DictionaryProperty.prototype.GetEntryXmlElementName = function (entry) {
        return XmlElementNames_1.XmlElementNames.Entry;
    };
    /**
     * @internal Gets the index of the field.
     *
     * @param   {TKey}      key   The key.
     * @return  {string}    Key index.
     */
    DictionaryProperty.prototype.GetFieldIndex = function (key) {
        return this.dictionaryKeyTypeEnum[key];
    };
    /**
     * @internal Gets the field URI.
     *
     * @return  {string}      Field URI.
     */
    DictionaryProperty.prototype.GetFieldURI = function () {
        return null;
    };
    /**
     * @internal Add entry.
     *
     * @param   {TEntry}   entry   The entry.
     */
    DictionaryProperty.prototype.InternalAdd = function (entry) {
        entry.OnChange.push(this.EntryChanged.bind(this));
        this.entries.Add(entry.Key, entry);
        this.addedEntries.push(entry.Key);
        this.removedEntries.remove(entry.Key);
        this.Changed();
    };
    /**
     * @internal Add or replace entry.
     *
     * @param   {TEntry}   entry   The entry.
     */
    DictionaryProperty.prototype.InternalAddOrReplace = function (entry) {
        var oldEntry = { outValue: null };
        if (this.entries.tryGetValue(entry.Key, oldEntry)) {
            ExtensionMethods_1.ArrayHelper.RemoveEntry(oldEntry.outValue.OnChange, this.EntryChanged);
            entry.OnChange.push(this.EntryChanged.bind(this));
            if (this.addedEntries.indexOf(entry.Key) === -1) {
                if (this.modifiedEntries.indexOf(entry.Key) === -1) {
                    this.modifiedEntries.push(entry.Key);
                }
            }
            this.Changed();
        }
        else {
            this.InternalAdd(entry);
        }
    };
    /**
     * Remove entry based on key.
     *
     * @param   {TKey}   key   The key.
     */
    DictionaryProperty.prototype.InternalRemove = function (key) {
        var entry = { outValue: null };
        if (this.entries.tryGetValue(key, entry)) {
            ExtensionMethods_1.ArrayHelper.RemoveEntry(entry.outValue.OnChange, this.EntryChanged);
            this.entries.remove(key);
            this.removedEntries.Add(key, entry.outValue);
            this.Changed();
        }
        ExtensionMethods_1.ArrayHelper.RemoveEntry(this.addedEntries, key);
        ExtensionMethods_1.ArrayHelper.RemoveEntry(this.modifiedEntries, key);
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    DictionaryProperty.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        if (jsonProperty[XmlElementNames_1.XmlElementNames.Entry]) {
            var entries = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsonProperty, XmlElementNames_1.XmlElementNames.Entry);
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var jsonEntry = entries_1[_i];
                var entry = this.CreateEntryInstance();
                entry.LoadFromXmlJsObject(jsonEntry, service);
                this.InternalAdd(entry);
            }
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    DictionaryProperty.prototype.WriteElementsToXml = function (writer) {
        for (var _i = 0, _a = this.entries.Items; _i < _a.length; _i++) {
            var keyValuePair = _a[_i];
            keyValuePair.value.WriteToXml(writer, this.GetEntryXmlElementName(keyValuePair.value));
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          xmlNamespace     The XML namespace.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    DictionaryProperty.prototype.WriteToXml = function (writer, xmlElementName, xmlNamespace) {
        // Only write collection if it has at least one element.
        if (this.entries.Count > 0) {
            _super.prototype.WriteToXml.call(this, writer, xmlElementName, xmlNamespace);
        }
    };
    /**
     * Writes the URI to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     * @param   {TKey}                  key      The key.
     */
    DictionaryProperty.prototype.WriteUriToXml = function (writer, key) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IndexedFieldURI);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldURI, this.GetFieldURI());
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldIndex, this.GetFieldIndex(key));
        writer.WriteEndElement();
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
    DictionaryProperty.prototype.WriteSetUpdateToXml = function (writer, ewsObject, propertyDefinition) {
        var tempEntries = [];
        for (var _i = 0, _a = this.addedEntries; _i < _a.length; _i++) {
            var key = _a[_i];
            tempEntries.push(this.entries.get(key));
        }
        for (var _b = 0, _c = this.modifiedEntries; _b < _c.length; _b++) {
            var key = _c[_b];
            tempEntries.push(this.entries.get(key));
        }
        for (var _d = 0, tempEntries_1 = tempEntries; _d < tempEntries_1.length; _d++) {
            var entry = tempEntries_1[_d];
            if (!entry.WriteSetUpdateToXml(writer, ewsObject, propertyDefinition.XmlElementName)) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetSetFieldXmlElementName());
                this.WriteUriToXml(writer, entry.Key);
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetXmlElementName());
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, propertyDefinition.XmlElementName);
                entry.WriteToXml(writer, this.GetEntryXmlElementName(entry));
                writer.WriteEndElement();
                writer.WriteEndElement();
                writer.WriteEndElement();
            }
        }
        for (var _e = 0, _f = this.removedEntries.Values; _e < _f.length; _e++) {
            var entry = _f[_e];
            if (!entry.WriteDeleteUpdateToXml(writer, ewsObject)) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetDeleteFieldXmlElementName());
                this.WriteUriToXml(writer, entry.Key);
                writer.WriteEndElement();
            }
        }
        return true;
    };
    /**
     * @internal Writes the deletion update to XML.
     * ICustomUpdateSerializer.WriteDeleteUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer      The writer.
     * @param   {ServiceObject}         ewsObject   The ews object.
     * @return  {boolean}               True if property generated serialization.
     */
    DictionaryProperty.prototype.WriteDeleteUpdateToXml = function (writer, ewsObject) {
        // Use the default XML serializer.
        return false;
    };
    return DictionaryProperty;
}(ComplexProperty_1.ComplexProperty));
exports.DictionaryProperty = DictionaryProperty;
