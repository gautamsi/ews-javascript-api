"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
/**
 * Represents an Out of Office response.
 */
var OofReply = /** @class */ (function () {
    function OofReply(message) {
        if (message === void 0) { message = null; }
        this.culture = ''; //todo: implement CultureInfo //  CultureInfo.CurrentCulture.Name;
        this.message = null;
        this.message = message;
    }
    Object.defineProperty(OofReply.prototype, "Culture", {
        /**
         * Gets or sets the culture of the reply.
         */
        get: function () {
            return this.culture;
        },
        set: function (value) {
            this.culture = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OofReply.prototype, "Message", {
        /**
         * Gets or sets the culture of the reply.
         */
        get: function () {
            return this.message;
        },
        set: function (value) {
            this.message = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads from xmlJsObject.
     *
     * @param   {any}   jsObject   The xmlJsObject object.
     * @param   {ExchangeService}   service      The service.
     */
    OofReply.prototype.LoadFromXmlJsObject = function (jsonObject, service) {
        if (jsonObject["xml:lang"]) {
            this.culture = jsonObject["xml:lang"];
        }
        this.message = jsonObject[XmlElementNames_1.XmlElementNames.Message];
    };
    /**
     * Obtains a string representation of the reply.
     *
     * @return  {string}      A string containing the reply message.
     */
    OofReply.prototype.ToString = function () { return this.Message; };
    OofReply.prototype.toString = function () { return this.Message; };
    /**
     * @internal Writes an empty OofReply to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    OofReply.WriteEmptyReplyToXml = function (writer, xmlElementName) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, xmlElementName);
        writer.WriteEndElement(); // xmlElementName
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    OofReply.prototype.WriteToXml = function (writer, xmlElementName) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, xmlElementName);
        if (this.Culture != null) {
            writer.WriteAttributeValue("xml", "lang", this.Culture);
        }
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Message, this.Message);
        writer.WriteEndElement(); // xmlElementName
    };
    return OofReply;
}());
exports.OofReply = OofReply;
