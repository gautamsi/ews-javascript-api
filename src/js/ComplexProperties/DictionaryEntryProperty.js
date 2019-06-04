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
var ComplexProperty_1 = require("./ComplexProperty");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
/**
 * Represents an entry of a DictionaryProperty object.
 * @remarks All descendants of DictionaryEntryProperty must implement a parameterless constructor. That constructor does not have to be public.
 * @typeparam   {TKey}     The type of the key used by this dictionary.
 * [EditorBrowsable(EditorBrowsableState.Never)]
 */
var DictionaryEntryProperty = /** @class */ (function (_super) {
    __extends(DictionaryEntryProperty, _super);
    function DictionaryEntryProperty(key) {
        var _this = _super.call(this) || this;
        _this.key = null;
        _this.key = key;
        return _this;
    }
    Object.defineProperty(DictionaryEntryProperty.prototype, "Key", {
        /**
         * Gets or sets the key.
         * @value   The key.
         */
        get: function () {
            return this.key;
        },
        set: function (value) {
            this.key = value;
        },
        enumerable: true,
        configurable: true
    });
    /**@internal */
    DictionaryEntryProperty.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("DictionaryEntryProperty.ts - ReadAttributesFromXml : Not used."); };
    /**
     * @internal Writes attributes to XML.
     * @override
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    DictionaryEntryProperty.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Key, this.keyType[this.Key]);
    };
    /**
     * @internal Writes the delete update to XML.
     * @virtual
     * @param   {EwsServiceXmlWriter}   writer      The writer.
     * @param   {ServiceObject}         ewsObject   The ews object.
     * @return  {boolean}               True if update XML was written.
     */
    DictionaryEntryProperty.prototype.WriteDeleteUpdateToXml = function (writer, ewsObject) {
        return false;
    };
    /**
     * @internal Writes the set update to XML.
     * @virtual
     * @param   {EwsServiceXmlWriter}   writer                          The writer.
     * @param   {ServiceObject}         ewsObject                       The ews object.
     * @param   {string}                ownerDictionaryXmlElementName   Name of the owner dictionary XML element.
     * @return  {boolean}               True if update XML was written.
     */
    DictionaryEntryProperty.prototype.WriteSetUpdateToXml = function (writer, ewsObject, ownerDictionaryXmlElementName) {
        return false;
    };
    return DictionaryEntryProperty;
}(ComplexProperty_1.ComplexProperty));
exports.DictionaryEntryProperty = DictionaryEntryProperty;
