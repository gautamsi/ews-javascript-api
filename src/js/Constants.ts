

module Microsoft.Exchange.WebServices.Data {
    export module AlternateId {
        export var /* static*/ SchemaTypeName: string = "AlternateIdType";
    }
    export module AlternatePublicFolderId {
        export var /* static*/ SchemaTypeName: string = "AlternatePublicFolderIdType";
    }
    export module AlternatePublicFolderItemId {
        export var /* static*/ SchemaTypeName: string = "AlternatePublicFolderItemIdType";
    }
    export module GetStreamingEventsRequest {
        export var /* static*/ HeartbeatFrequencyDefault: number = 45000;
    }

    export module HangingServiceRequestBase {
        export var /*private static*/ BufferSize: number = 4096;
    }
    export module JsonNames {
        export var /* static*/ Events: string = "Events";
        export var /* static*/ NotificationType: string = "NotificationType";
        export var /* static*/ OldFolderId: string = "OldFolderId";
        export var /* static*/ OldItemId: string = "OldItemId";
        export var /* static*/ PathToExtendedFieldType: string = "ExtendedPropertyUri";
        export var /* static*/ PathToIndexedFieldType: string = "DictionaryPropertyUri";
        export var /* static*/ PathToUnindexedFieldType: string = "PropertyUri";
        export var /* static*/ Path: string = "Path";
        export var /* static*/ RecurrencePattern: string = "RecurrencePattern";
        export var /* static*/ RecurrenceRange: string = "RecurrenceRange";
    }
    export module JsonObject {
        export var /*private static*/ TypeAttribute: string = "__type";
        export var /*private static*/ JsonTypeNamespace: string = "Exchange";
        export var /* static*/ JsonValueString: string = "Value";
    }
    export module JsonTokenizer {
        export var /*private static*/ JsonStringRegExCode: string = '"([^\\"]|\\"|\\\\|\\/|\\b|\\f|\\n|\\r|\\t|\\u[\da - fA - F]{4 }) * "';
        export var /*private static*/ JsonNumberRegExCode: string = "-?\d+(.\d+)?([eE][+-]?\d+)?";
        export var /*private static*/ JsonBooleanRegExCode: string = "(true|false)";
        export var /*private static*/ JsonNullRegExCode: string = "null";
        export var /*private static*/ JsonOpenObjectRegExCode: string = "\{";
        export var /*private static*/ JsonCloseObjectRegExCode: string = "\}";
        export var /*private static*/ JsonOpenArrayRegExCode: string = "\[";
        export var /*private static*/ JsonCloseArrayRegExCode: string = "\]";
        export var /*private static*/ JsonColonRegExCode: string = "\:";
        export var /*private static*/ JsonCommaRegExCode: string = "\,";
    }
    export module JsonWriter {
        export var /*private static*/ Indentation: string = "  ";
    }
    export module MapiTypeConverter {
        export var /*private static*/ UtcDataTimeStyles: any /*System.Globalization.DateTimeStyles*/ = "AdjustToUniversal, AssumeUniversal";
    }
    export module OAuthCredentials {
        export var /*private static*/ BearerAuthenticationType: string = "Bearer";
    }
    export module PartnerTokenCredentials {
        export var /*private static*/ WsSecuritySymmetricKeyPathSuffix: string = "/wssecurity/symmetrickey";
    }
    export module SecurityTimestamp {
        export var /* static*/ DefaultTimestampValidityDurationString: string = "00:05:00";
        export var /* static*/ DefaultFormat: string = "yyyy-MM-ddTHH:mm:ss.fffZ";
    }
    export module WindowsLiveCredentials {
        export var /* static*/ XmlEncNamespace: string = "http://www.w3.org/2001/04/xmlenc#";
        export var /* static*/ WindowsLiveSoapNamespacePrefix: string = "S";
        export var /* static*/ RequestSecurityTokenResponseCollectionElementName: string = "RequestSecurityTokenResponseCollection";
        export var /* static*/ RequestSecurityTokenResponseElementName: string = "RequestSecurityTokenResponse";
        export var /* static*/ EncryptedDataElementName: string = "EncryptedData";
        export var /* static*/ PpElementName: string = "pp";
        export var /* static*/ ReqstatusElementName: string = "reqstatus";
        export var /* static*/ SuccessfulReqstatus: string = "0x0";
        export var /* static*/ XmlSignatureReference: string = "_EWSTKREF";
    }
    export module X509CertificateCredentials {
        export var /*private static*/ BinarySecurityTokenFormat: string = "<wsse:BinarySecurityToken EncodingType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary' ValueType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3' wsu:Id='{0}'>{1}</wsse:BinarySecurityToken>";
		export var /*private static*/ KeyInfoClauseFormat: string = "<wsse:SecurityTokenReference xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd' ><wsse:Reference URI='#{0}' ValueType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3' /></wsse:SecurityTokenReference>";
		export var /*private static*/ WsSecurityX509CertPathSuffix: string = "/wssecurity/x509cert";
    }
}


module Microsoft.Exchange.WebServices.Data.PhysicalAddressEntry_ {
    export module PhysicalAddressSchema {
        export var /* static*/ Street: string = "Street";
        export var /* static*/ City: string = "City";
        export var /* static*/ State: string = "State";
        export var /* static*/ CountryOrRegion: string = "CountryOrRegion";
        export var /* static*/ PostalCode: string = "PostalCode";
    }
}
module Microsoft.Exchange.WebServices.Dns {
    export module DnsClient {
        export var /*private static*/ Win32Success: number = 0;
    }
    export module DnsNativeMethods {
        export var /*private static*/ DNSAPI: string = "dnsapi.dll";
    }
}

//import _temp = Microsoft.Exchange.WebServices;
//export = _temp;
