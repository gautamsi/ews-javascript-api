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
var ExtensionMethods_1 = require("../ExtensionMethods");
var ServiceObjectPropertyDefinition_1 = require("./ServiceObjectPropertyDefinition");
/**
 * Represents an indexed property definition.
 */
var IndexedPropertyDefinition = /** @class */ (function (_super) {
    __extends(IndexedPropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **IndexedPropertyDefinition** class.
     *
     * @param   {string}   uri     The FieldURI attribute of the IndexedFieldURI element.
     * @param   {string}   index   The Index attribute of the IndexedFieldURI element.
     */
    function IndexedPropertyDefinition(uri, index) {
        var _this = _super.call(this, uri) || this;
        _this.index = index;
        return _this;
    }
    Object.defineProperty(IndexedPropertyDefinition.prototype, "Index", {
        /**
         * Gets the index of the property.
         */
        get: function () { return this.index; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedPropertyDefinition.prototype, "Type", {
        get: function () { return 'string'; /*return typeof string;*/ } //System.Type;
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * Determines whether a given indexed property definition is equal to this indexed property definition.
     *
     * @param   {any}   obj   The object to check for equality.
     * @return  {boolean}         True if the properties definitions define the same indexed property.
     */
    IndexedPropertyDefinition.prototype.Equals = function (obj) {
        var propertyDefinition = obj;
        return IndexedPropertyDefinition.IsEqualTo(propertyDefinition, this);
    };
    /**
     * Serves as a hash function for a particular type.
     *
     * @return  {number}      A hash code for the current System.Object.
     */
    IndexedPropertyDefinition.prototype.GetHashCode = function () { throw new Error("IndexedPropertyDefinition.ts - GetHashCode : Not implemented."); };
    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    IndexedPropertyDefinition.prototype.GetPrintableName = function () { return ExtensionMethods_1.StringHelper.Format("{0}:{1}", this.Uri, this.Index); };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    IndexedPropertyDefinition.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.IndexedFieldURI; };
    /**
     * @internal Determines whether two specified instances of IndexedPropertyDefinition are equal.
     *
     * @param   {IndexedPropertyDefinition}    extPropDef1   First extended property definition.
     * @param   {IndexedPropertyDefinition}    extPropDef2   Second extended property definition.
     * @return  {boolean}                      True if extended property definitions are equal.
     */
    IndexedPropertyDefinition.IsEqualTo = function (idxPropDef1, idxPropDef2) {
        return idxPropDef1 === idxPropDef2 ||
            (idxPropDef1.Uri == idxPropDef2.Uri &&
                idxPropDef1.Index == idxPropDef2.Index);
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    IndexedPropertyDefinition.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldIndex, this.Index);
    };
    return IndexedPropertyDefinition;
}(ServiceObjectPropertyDefinition_1.ServiceObjectPropertyDefinition));
exports.IndexedPropertyDefinition = IndexedPropertyDefinition;
