module Microsoft.Exchange.WebServices.Data {
    export enum XmlNamespace {
        NotSpecified = 0,
        Messages = 1,
        Types = 2,
        Errors = 3,
        Soap = 4,
        Soap12 = 5,
        XmlSchemaInstance = 6,
        PassportSoapFault = 7,
        WSTrustFebruary2005 = 8,
        WSAddressing = 9,
        Autodiscover = 10
    }
}

import _export = Microsoft.Exchange.WebServices.Data.XmlNamespace;
export =_export;
