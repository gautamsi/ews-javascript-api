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
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var SimplePropertyBag_1 = require("../Core/SimplePropertyBag");
var LazyMember_1 = require("../Core/LazyMember");
var PhysicalAddressKey_1 = require("../Enumerations/PhysicalAddressKey");
var DictionaryEntryProperty_1 = require("./DictionaryEntryProperty");
var PhysicalAddressSchema = /** @class */ (function () {
    function PhysicalAddressSchema() {
    }
    Object.defineProperty(PhysicalAddressSchema, "XmlElementNames", {
        get: function () {
            return PhysicalAddressSchema.xmlElementNames.Member;
        },
        enumerable: true,
        configurable: true
    });
    PhysicalAddressSchema.Street = "Street";
    PhysicalAddressSchema.City = "City";
    PhysicalAddressSchema.State = "State";
    PhysicalAddressSchema.CountryOrRegion = "CountryOrRegion";
    PhysicalAddressSchema.PostalCode = "PostalCode";
    PhysicalAddressSchema.xmlElementNames = new LazyMember_1.LazyMember(function () {
        var list = [];
        list.push("Street");
        list.push("City");
        list.push("State");
        list.push("CountryOrRegion");
        list.push("PostalCode");
        return list;
    });
    return PhysicalAddressSchema;
}());
/**
 * PhysicalAddressEntry class
 */
var PhysicalAddressEntry = /** @class */ (function (_super) {
    __extends(PhysicalAddressEntry, _super);
    function PhysicalAddressEntry() {
        var _this = _super.call(this) || this;
        _this.propertyBag = null;
        _this.keyType = PhysicalAddressKey_1.PhysicalAddressKey;
        _this.propertyBag = new SimplePropertyBag_1.SimplePropertyBag(function (key) { return key; });
        _this.propertyBag.OnChange.push(_this.PropertyBagChanged.bind(_this));
        return _this;
    }
    Object.defineProperty(PhysicalAddressEntry.prototype, "Street", {
        get: function () {
            return this.propertyBag._getItem("Street");
        },
        set: function (value) {
            this.propertyBag._setItem("Street", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhysicalAddressEntry.prototype, "City", {
        get: function () {
            return this.propertyBag._getItem("City");
        },
        set: function (value) {
            this.propertyBag._setItem("City", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhysicalAddressEntry.prototype, "State", {
        get: function () {
            return this.propertyBag._getItem("State");
        },
        set: function (value) {
            this.propertyBag._setItem("State", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhysicalAddressEntry.prototype, "CountryOrRegion", {
        get: function () {
            return this.propertyBag._getItem("CountryOrRegion");
        },
        set: function (value) {
            this.propertyBag._setItem("CountryOrRegion", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhysicalAddressEntry.prototype, "PostalCode", {
        get: function () {
            return this.propertyBag._getItem("PostalCode");
        },
        set: function (value) {
            this.propertyBag._setItem("PostalCode", value);
        },
        enumerable: true,
        configurable: true
    });
    PhysicalAddressEntry.prototype.ClearChangeLog = function () { this.propertyBag.ClearChangeLog(); };
    PhysicalAddressEntry.prototype.GetFieldUri = function (xmlElementName) { return "contacts:PhysicalAddress:" + xmlElementName; };
    PhysicalAddressEntry.prototype.InternalToJson = function (service) { throw new Error("PhysicalAddressEntry.ts - InternalToJson : Not implemented."); };
    /**@internal */
    PhysicalAddressEntry.prototype.InternalWriteDeleteFieldToXml = function (writer, ewsObject, fieldXmlElementName) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetDeleteFieldXmlElementName());
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IndexedFieldURI);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldURI, this.GetFieldUri(fieldXmlElementName));
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldIndex, PhysicalAddressKey_1.PhysicalAddressKey[this.Key]);
        writer.WriteEndElement(); // IndexedFieldURI
        writer.WriteEndElement(); // ewsObject.GetDeleteFieldXmlElementName()
    };
    PhysicalAddressEntry.prototype.InternalWriteDeleteUpdateToJson = function (ewsObject, propertyName, updates /*System.Collections.Generic.List<any>*/) { throw new Error("PhysicalAddressEntry.ts - InternalWriteDeleteUpdateToJson : Not implemented."); };
    PhysicalAddressEntry.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("PhysicalAddressEntry.ts - LoadFromJson : Not implemented."); };
    PhysicalAddressEntry.prototype.PropertyBagChanged = function () { this.Changed(); };
    PhysicalAddressEntry.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        this.Key = PhysicalAddressKey_1.PhysicalAddressKey[jsonProperty[XmlAttributeNames_1.XmlAttributeNames.Key]];
        this.Street = jsonProperty[XmlElementNames_1.XmlElementNames.Street];
        this.City = jsonProperty[XmlElementNames_1.XmlElementNames.City];
        this.State = jsonProperty[XmlElementNames_1.XmlElementNames.State];
        this.Street = jsonProperty[XmlElementNames_1.XmlElementNames.Street];
        this.CountryOrRegion = jsonProperty[XmlElementNames_1.XmlElementNames.CountryOrRegion];
        this.PostalCode = jsonProperty[XmlElementNames_1.XmlElementNames.PostalCode];
    };
    PhysicalAddressEntry.prototype.WriteDeleteUpdateToJson = function (service, ewsObject, updates /*System.Collections.Generic.List<any>*/) { throw new Error("PhysicalAddressEntry.ts - WriteDeleteUpdateToJson : Not implemented."); };
    /**@internal */
    PhysicalAddressEntry.prototype.WriteDeleteUpdateToXml = function (writer, ewsObject) {
        for (var _i = 0, _a = PhysicalAddressSchema.XmlElementNames; _i < _a.length; _i++) {
            var xmlElementName = _a[_i];
            this.InternalWriteDeleteFieldToXml(writer, ewsObject, xmlElementName);
        }
        return true;
    };
    /**@internal */
    PhysicalAddressEntry.prototype.WriteElementsToXml = function (writer) {
        for (var _i = 0, _a = PhysicalAddressSchema.XmlElementNames; _i < _a.length; _i++) {
            var xmlElementName = _a[_i];
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, xmlElementName, this.propertyBag._getItem(xmlElementName));
        }
    };
    PhysicalAddressEntry.prototype.WriteSetUpdateToJson = function (service, ewsObject, propertyDefinition, updates /*System.Collections.Generic.List<JsonObject>*/) { throw new Error("PhysicalAddressEntry.ts - WriteSetUpdateToJson : Not implemented."); };
    /**@internal */
    PhysicalAddressEntry.prototype.WriteSetUpdateToXml = function (writer, ewsObject, ownerDictionaryXmlElementName) {
        var fieldsToSet = [];
        for (var _i = 0, _a = this.propertyBag.AddedItems; _i < _a.length; _i++) {
            var xmlElementName = _a[_i];
            fieldsToSet.push(xmlElementName);
        }
        for (var _b = 0, _c = this.propertyBag.ModifiedItems; _b < _c.length; _b++) {
            var xmlElementName = _c[_b];
            fieldsToSet.push(xmlElementName);
        }
        for (var _d = 0, fieldsToSet_1 = fieldsToSet; _d < fieldsToSet_1.length; _d++) {
            var xmlElementName = fieldsToSet_1[_d];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetSetFieldXmlElementName());
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IndexedFieldURI);
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldURI, this.GetFieldUri(xmlElementName));
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldIndex, PhysicalAddressKey_1.PhysicalAddressKey[this.Key]);
            writer.WriteEndElement(); // IndexedFieldURI
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetXmlElementName());
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ownerDictionaryXmlElementName);
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Entry);
            this.WriteAttributesToXml(writer);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, xmlElementName, this.propertyBag._getItem(xmlElementName));
            writer.WriteEndElement(); // Entry
            writer.WriteEndElement(); // ownerDictionaryXmlElementName
            writer.WriteEndElement(); // ewsObject.GetXmlElementName()
            writer.WriteEndElement(); // ewsObject.GetSetFieldXmlElementName()
        }
        for (var _e = 0, _f = this.propertyBag.RemovedItems; _e < _f.length; _e++) {
            var xmlElementName = _f[_e];
            this.InternalWriteDeleteFieldToXml(writer, ewsObject, xmlElementName);
        }
        return true;
    };
    return PhysicalAddressEntry;
}(DictionaryEntryProperty_1.DictionaryEntryProperty));
exports.PhysicalAddressEntry = PhysicalAddressEntry;
