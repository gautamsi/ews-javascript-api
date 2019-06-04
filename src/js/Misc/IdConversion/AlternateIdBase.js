"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdFormat_1 = require("../../Enumerations/IdFormat");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
/**
 * Represents the base class for Id expressed in a specific format.
 */
var AlternateIdBase = /** @class */ (function () {
    function AlternateIdBase(format) {
        if (format === void 0) { format = IdFormat_1.IdFormat.EwsLegacyId; }
        this.Format = format;
    }
    /**
     * @internal Validate this instance.
     */
    AlternateIdBase.prototype.InternalValidate = function () { };
    /**
     * @internal Loads the attributes from Xml JsObject.
     *
     * @param   {any}   responseObject   The response object.
     */
    AlternateIdBase.prototype.LoadAttributesFromXmlJsObject = function (responseObject) {
        this.Format = IdFormat_1.IdFormat[responseObject[XmlAttributeNames_1.XmlAttributeNames.Format]];
    };
    /**
     * Validate this instance.
     * ISelfValidate.Validate
     *
     */
    AlternateIdBase.prototype.Validate = function () {
        this.InternalValidate();
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    AlternateIdBase.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Format, IdFormat_1.IdFormat[this.Format]);
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    AlternateIdBase.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.GetXmlElementName());
        this.WriteAttributesToXml(writer);
        writer.WriteEndElement(); // this.GetXmlElementName()
    };
    return AlternateIdBase;
}());
exports.AlternateIdBase = AlternateIdBase;
