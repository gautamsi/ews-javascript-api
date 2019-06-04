"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateTime_1 = require("../DateTime");
var EwsLogging_1 = require("./EwsLogging");
var EwsUtilities_1 = require("./EwsUtilities");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var TypeGuards_1 = require("../Interfaces/TypeGuards");
/**
 * @internal XML writer
 */
var EwsServiceXmlWriter = /** @class */ (function () {
    //#endregion
    /**
     * Initializes a new instance of the **EwsServiceXmlWriter** class.
     *
     * @param   {ExchangeServiceBase}   service   The service.
     */
    function EwsServiceXmlWriter(service) {
        //#region custome XML writer data;
        this.xmlElements = [];
        this.pendingElementData = "";
        this.pendingXMLTagClosure = false;
        this.soapData = "";
        this.rootUris = [];
        this.rootLevel = false;
        this.currentLevel = 0;
        this.service = service;
    }
    Object.defineProperty(EwsServiceXmlWriter.prototype, "Service", {
        //get InternalWriter(): System.Xml.XmlWriter;
        get: function () { return this.service; },
        enumerable: true,
        configurable: true
    });
    EwsServiceXmlWriter.prototype.Dispose = function () { throw new Error("EwsServiceXmlWriter.ts - Dispose : Not implemented."); };
    EwsServiceXmlWriter.prototype.Flush = function () {
    };
    /**
     * Gets the xml created by EWS XMl Writer.
     *
     * @param   {boolean}   keep   removes internal cache of XML data if false, otherwise keep the data.
     */
    EwsServiceXmlWriter.prototype.GetXML = function (keep) {
        if (keep === void 0) { keep = false; }
        var returnVal = this.soapData.trim();
        if (!keep)
            this.soapData = "";
        return returnVal;
    };
    /**
     * Closes XMl tag
     */
    EwsServiceXmlWriter.prototype.CloseTag = function () {
        if (this.pendingXMLTagClosure) {
            this.soapData += ">";
            this.pendingXMLTagClosure = false;
            this.rootLevel = false;
        }
    };
    /**
     * Pushes xml uri to internal tracker of used xml uris
     *
     * @param   {string}   prefix     Prefix of uri.
     * @param   {string}   uri        uri itself.
     */
    EwsServiceXmlWriter.prototype.PushUris = function (prefix, uri) {
        if (this.rootLevel) {
            this.rootUris.push(prefix + ":" + uri);
        }
    };
    /**
     * check if an uri exist in internal tracker
     *
     * @param   {string}   prefix     Prefix of uri.
     * @param   {string}   uri        uri itself.
     */
    EwsServiceXmlWriter.prototype.CheckRootUri = function (prefix, uri) {
        return this.rootUris.indexOf(prefix + ":" + uri) >= 0;
    };
    //TryConvertObjectToString(value: any, strValue: any): boolean { throw new Error("EwsServiceXmlWriter.ts - TryConvertObjectToString : Not implemented."); }
    /**
     * convert object to a string. transformed TryConvertObjectToString metho from c#
     *
     * @param   {any}     value      The value.
     * @return  {string}  The string representation of value.
     */
    EwsServiceXmlWriter.prototype.ConvertObjectToString = function (value) {
        var strValue = null;
        if (value === null)
            return null;
        if (value != null) {
            switch (typeof (value)) {
                case "boolean":
                    strValue = EwsUtilities_1.EwsUtilities.BoolToXSBool(value);
                    break;
                case "number":
                    strValue = value;
                    //todo check for datetime
                    //strValue = this.Service.ConvertDateTimeToUniversalDateTimeString((DateTime) value);
                    break;
                case "string":
                    return value;
                default:
                    if (value instanceof DateTime_1.DateTime) {
                        return this.service.ConvertDateTimeToUniversalDateTimeString(value);
                        //return EwsUtilities.DateTimeToXSDateTime(value as DateTime);
                    }
                    try {
                        if (TypeGuards_1.TypeGuards.isISearchStringProvider(value)) // ISearchStringProvider searchStringProvider = value as ISearchStringProvider;
                            return value.GetSearchString();
                        else
                            throw new Error("value can not be of type object");
                    }
                    catch (e) {
                        throw e;
                    }
                    break;
            }
            return strValue;
        }
        //return converted;
        return undefined;
    };
    EwsServiceXmlWriter.prototype.WriteAttributeString = function (localNameOrNamespacePrefix, localNameOrStringValue, stringValueToWrite) {
        var namespacePrefix = "";
        var localName = localNameOrNamespacePrefix;
        var stringValue = localNameOrStringValue;
        if (arguments.length === 3) {
            namespacePrefix = localNameOrNamespacePrefix;
            localName = localNameOrStringValue;
            stringValue = stringValueToWrite;
        }
        if (namespacePrefix !== "")
            namespacePrefix += ":";
        this.soapData += " " + namespacePrefix + localName + "=\"" + stringValue + "\"";
        if (namespacePrefix == "xmlns:") // push to rootUris cache
            this.PushUris(localName, stringValue);
        //try {
        //    this.xmlWriter.WriteAttributeString(
        //        namespacePrefix,
        //        localName,
        //        null,
        //        stringValue);
        //}
        //catch (ex) {
        //    // XmlTextWriter will throw ArgumentException if string includes invalid characters.
        //    //throw new ServiceXmlSerializationException(
        //    //    string.Format(Strings.InvalidAttributeValue, stringValue, localName),
        //    //    ex);
        //}
    };
    EwsServiceXmlWriter.prototype.WriteAttributeValue = function (localNameOrNamespacePrefix, localNameOrAlwaysWriteEmptyStringOrValue, valueToWrite) {
        var argsLength = arguments.length;
        var localName = localNameOrNamespacePrefix;
        var value = valueToWrite;
        var alwaysWriteEmptyString = false;
        var namespacePrefix = null;
        var callWithNameSpacePrifix = false;
        if (argsLength === 2) {
            value = localNameOrAlwaysWriteEmptyStringOrValue;
        }
        if (argsLength === 3) {
            if (typeof localNameOrAlwaysWriteEmptyStringOrValue === "boolean") {
                localName = localNameOrNamespacePrefix;
                alwaysWriteEmptyString = localNameOrAlwaysWriteEmptyStringOrValue;
            }
            else {
                namespacePrefix = localNameOrNamespacePrefix;
                localName = localNameOrAlwaysWriteEmptyStringOrValue;
                callWithNameSpacePrifix = true;
            }
        }
        var stringValue = this.ConvertObjectToString(value);
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(stringValue) || alwaysWriteEmptyString) {
            this.WriteAttributeString(callWithNameSpacePrifix ? namespacePrefix : "", localName, stringValue);
        }
    };
    //WriteBase64ElementValue(buffer: System.Byte[]): any{ throw new Error("EwsServiceXmlWriter.ts - WriteBase64ElementValue : Not implemented.");}
    //WriteBase64ElementValue(stream: System.IO.Stream): any{ throw new Error("EwsServiceXmlWriter.ts - WriteBase64ElementValue : Not implemented.");}
    /**
     * Writes the base64-encoded element value.
     *
     * @param   {any}   buffer   The buffer.
     */
    EwsServiceXmlWriter.prototype.WriteBase64ElementValue = function (buffer) {
        this.WriteValue(ExtensionMethods_1.base64Helper.btoa(buffer), null);
    };
    EwsServiceXmlWriter.prototype.WriteElementValue = function (xmlNamespace, localName, displayNameOrValue, valueToWrite) {
        var value = displayNameOrValue;
        var displayName = localName;
        if (arguments.length === 4) {
            value = valueToWrite;
            displayName = displayNameOrValue;
        }
        var stringValue = this.ConvertObjectToString(value);
        if (stringValue != undefined) {
            this.WriteStartElement(xmlNamespace, localName);
            this.WriteValue(stringValue, displayName);
            this.WriteEndElement();
        }
        else {
            EwsLogging_1.EwsLogging.Assert(stringValue !== 'undefined', 'WriteElementValue', ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ElementValueCannotBeSerialized, typeof (value), localName));
            // throw new Error(StringHelper.Format(
            //     Strings.ElementValueCannotBeSerialized,
            //     typeof (value), localName));
        }
    };
    /**
     * Writes the end element.
     */
    EwsServiceXmlWriter.prototype.WriteEndElement = function () {
        //this.xmlWriter.WriteEndElement();
        var element = "</" + this.xmlElements.pop() + ">";
        this.CloseTag();
        this.soapData += element;
    };
    //WriteNode(xmlNode: System.Xml.XmlNode): any{ throw new Error("EwsServiceXmlWriter.ts - WriteNode : Not implemented.");}
    /**
     * Writes the start element.
     *
     * @param   {XmlNamespace}    xmlNamespace   The XML namespace.
     * @param   {string}          localName      The local name of the element.
     */
    EwsServiceXmlWriter.prototype.WriteStartElement = function (xmlNamespace, localName) {
        this.CloseTag();
        if (this.soapData == "")
            this.rootLevel = true;
        else
            this.soapData += ""; //\r\n";
        var prefix = EwsUtilities_1.EwsUtilities.GetNamespacePrefix(xmlNamespace);
        this.soapData += "<" + prefix + ":" + localName;
        var uri = EwsUtilities_1.EwsUtilities.GetNamespaceUri(xmlNamespace);
        if (!this.CheckRootUri(prefix, uri)) {
            this.soapData += " xmlns:" + prefix + "=\"" + uri + "\"";
        }
        this.PushUris(prefix, uri);
        this.xmlElements.push(prefix + ":" + localName);
        this.pendingXMLTagClosure = true;
        //this.xmlWriter.WriteStartElement(
        //    EwsUtilities.GetNamespacePrefix(xmlNamespace),
        //    localName,
        //    EwsUtilities.GetNamespaceUri(xmlNamespace));
    };
    /**
     * Writes string value.
     *
     * @param   {string}   value   The value.
     * @param   {string}   name    Element name (used for error handling)
     */
    EwsServiceXmlWriter.prototype.WriteValue = function (value, name) {
        //var closeElement = this.soapData.charAt(this.soapData.length - 1) !== ">";
        //if (closeElement) this.soapData += ">";
        this.CloseTag();
        this.soapData += value;
        //todo: validate invalid characters
        // name is used for exception with invalid characters
    };
    /**
     * Buffer size for writing Base64 encoded content.
     *
     */
    EwsServiceXmlWriter.BufferSize = 4096;
    return EwsServiceXmlWriter;
}());
exports.EwsServiceXmlWriter = EwsServiceXmlWriter;
