import ExchangeCredentials = require("./ExchangeCredentials");
class WSSecurityBasedCredentials extends ExchangeCredentials {
    static WsAddressingHeadersFormat: string = "<wsa:Action soap:mustUnderstand='1'>http://schemas.microsoft.com/exchange/services/2006/messages/{0}</wsa:Action><wsa:ReplyTo><wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address></wsa:ReplyTo><wsa:To soap:mustUnderstand='1'>{1}</wsa:To>";
    static WsSecurityHeaderFormat: string = "<wsse:Security soap:mustUnderstand='1'>  {0}</wsse:Security>";
    static WsuTimeStampFormat: string = "<wsu:Timestamp><wsu:Created>{0:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Created><wsu:Expires>{1:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Expires></wsu:Timestamp>";
    //static WsSecurityPathSuffix: string = "/wssecurity";  ----imp--- Moved to ExchangeCredentials to close cyclic dependency.

    SecurityToken: string;
    EwsUrl: string;// System.Uri;
    static NamespaceManager: any;// System.Xml.XmlNamespaceManager;
    private addTimestamp: boolean;
    private securityToken: string;
    private ewsUrl: string;//System.Uri;
    private static namespaceManager: any;//System.Xml.XmlNamespaceManager;
    AdjustUrl(url: string/*System.Uri*/): string/*System.Uri*/ { throw new Error("WSSecurityBasedCredentials.ts - AdjustUrl : Not implemented."); }
    EmitExtraSoapHeaderNamespaceAliases(writer: any /*System.Xml.XmlWriter*/): any { throw new Error("WSSecurityBasedCredentials.ts - EmitExtraSoapHeaderNamespaceAliases : Not implemented."); }
    PreAuthenticate(): any { throw new Error("WSSecurityBasedCredentials.ts - PreAuthenticate : Not implemented."); }
    SerializeExtraSoapHeaders(writer: any/*System.Xml.XmlWriter*/, webMethodName: string): any { throw new Error("WSSecurityBasedCredentials.ts - SerializeExtraSoapHeaders : Not implemented."); }
    SerializeWSAddressingHeaders(xmlWriter: any /*System.Xml.XmlWriter*/, webMethodName: string): any { throw new Error("WSSecurityBasedCredentials.ts - SerializeWSAddressingHeaders : Not implemented."); }
    SerializeWSSecurityHeaders(xmlWriter: any /*System.Xml.XmlWriter*/): any { throw new Error("WSSecurityBasedCredentials.ts - SerializeWSSecurityHeaders : Not implemented."); }

}

export = WSSecurityBasedCredentials;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
