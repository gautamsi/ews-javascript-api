class WSSecurityUtilityIdSignedXml /*extends System.Security.Cryptography.Xml.SignedXml*/ {
    private document: /*System.Xml.XmlDocument*/any;
    private ids: /*System.Collections.Generic.Dictionary<TKey, TValue>*/any;
    private static nextId: number;
    private static commonPrefix: string;
    AddReference(xpath: string): any { throw new Error("Not implemented."); }
    GetIdElement(document: /*System.Xml.XmlDocument*/any, idValue: string): /*System.Xml.XmlElement*/any { throw new Error("Not implemented."); }
    GetUniqueId(): string { throw new Error("Not implemented."); }
}
export = WSSecurityUtilityIdSignedXml;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
