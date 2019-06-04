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
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexPropertyDefinition_1 = require("./ComplexPropertyDefinition");
/**
 * @internal Represents contained property definition.
 *
 * @type    <TComplexProperty>  ComplexProperty
 */
var ContainedPropertyDefinition = /** @class */ (function (_super) {
    __extends(ContainedPropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **ContainedPropertyDefinition<TComplexProperty>** class.
     *
     * @param   {string}                                            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                                            xmlElementName             Name of the XML element.
     * @param   {string}                                            uri                        The URI.
     * @param   {string}                                            containedXmlElementName    Name of the contained XML element.
     * @param   {PropertyDefinitionFlags}                           flags                      The flags.
     * @param   {ExchangeVersion}                                   version                    The version.
     * @param   {CreateComplexPropertyDelegate<TComplexProperty>}   propertyCreationDelegate   Delegate used to create instances of ComplexProperty.
     */
    function ContainedPropertyDefinition(propertyName, xmlElementName, uri, containedXmlElementName, flags, version, propertyCreationDelegate) {
        var _this = _super.call(this, propertyName, xmlElementName, uri, flags, version, propertyCreationDelegate) || this;
        _this.containedXmlElementName = containedXmlElementName;
        return _this;
    }
    /**
     * @internal Load from XMLJsObject.
     *
     * @param   {any}               reader        The reader.
     * @param   {ExchangeService}   service        The Service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    ContainedPropertyDefinition.prototype.InternalLoadFromXmlJsObject = function (jsObject, service, propertyBag) {
        //debug: //check for correct contained element name
        if (jsObject[this.containedXmlElementName]) {
            jsObject = jsObject[this.containedXmlElementName];
        }
        _super.prototype.InternalLoadFromXmlJsObject.call(this, jsObject, service, propertyBag);
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    ContainedPropertyDefinition.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) {
        var complexProperty = propertyBag._getItem(this);
        if (complexProperty) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.XmlElementName);
            complexProperty.WriteToXml(writer, this.containedXmlElementName);
            writer.WriteEndElement(); // this.XmlElementName
        }
    };
    return ContainedPropertyDefinition;
}(ComplexPropertyDefinition_1.ComplexPropertyDefinition));
exports.ContainedPropertyDefinition = ContainedPropertyDefinition;
