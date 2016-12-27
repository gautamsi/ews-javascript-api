
/**
 * @internal Defines the namespaces as used by the EwsXmlReader, EwsServiceXmlReader, and EwsServiceXmlWriter classes.
 */
export enum XmlNamespace {
    
    /**
     * The namespace is not specified.
     */
    NotSpecified = 0,
    
    /**
     * The EWS Messages namespace.
     */
    Messages = 1,
    
    /**
     * The EWS Types namespace.
     */
    Types = 2,
    
    /**
     * The EWS Errors namespace.
     */
    Errors = 3,
    
    /**
     * The SOAP 1.1 namespace.
     */
    Soap = 4,
    
    /**
     * The SOAP 1.2 namespace.
     */
    Soap12 = 5,
    
    /**
     * XmlSchema-Instance namespace.
     */
    XmlSchemaInstance = 6,
    
    /**
     * The Passport SOAP services SOAP fault namespace.
     */
    PassportSoapFault = 7,
    
    /**
     * The WS-Trust February 2005 namespace.
     */
    WSTrustFebruary2005 = 8,
    
    /**
     * The WS Addressing 1.0 namespace.
     */
    WSAddressing = 9,
    
    /**
     * The Autodiscover SOAP service namespace.
     */
    Autodiscover = 10
}