"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Defines the namespaces as used by the EwsXmlReader, EwsServiceXmlReader, and EwsServiceXmlWriter classes.
 */
var XmlNamespace;
(function (XmlNamespace) {
    /**
     * The namespace is not specified.
     */
    XmlNamespace[XmlNamespace["NotSpecified"] = 0] = "NotSpecified";
    /**
     * The EWS Messages namespace.
     */
    XmlNamespace[XmlNamespace["Messages"] = 1] = "Messages";
    /**
     * The EWS Types namespace.
     */
    XmlNamespace[XmlNamespace["Types"] = 2] = "Types";
    /**
     * The EWS Errors namespace.
     */
    XmlNamespace[XmlNamespace["Errors"] = 3] = "Errors";
    /**
     * The SOAP 1.1 namespace.
     */
    XmlNamespace[XmlNamespace["Soap"] = 4] = "Soap";
    /**
     * The SOAP 1.2 namespace.
     */
    XmlNamespace[XmlNamespace["Soap12"] = 5] = "Soap12";
    /**
     * XmlSchema-Instance namespace.
     */
    XmlNamespace[XmlNamespace["XmlSchemaInstance"] = 6] = "XmlSchemaInstance";
    /**
     * The Passport SOAP services SOAP fault namespace.
     */
    XmlNamespace[XmlNamespace["PassportSoapFault"] = 7] = "PassportSoapFault";
    /**
     * The WS-Trust February 2005 namespace.
     */
    XmlNamespace[XmlNamespace["WSTrustFebruary2005"] = 8] = "WSTrustFebruary2005";
    /**
     * The WS Addressing 1.0 namespace.
     */
    XmlNamespace[XmlNamespace["WSAddressing"] = 9] = "WSAddressing";
    /**
     * The Autodiscover SOAP service namespace.
     */
    XmlNamespace[XmlNamespace["Autodiscover"] = 10] = "Autodiscover";
})(XmlNamespace = exports.XmlNamespace || (exports.XmlNamespace = {}));
