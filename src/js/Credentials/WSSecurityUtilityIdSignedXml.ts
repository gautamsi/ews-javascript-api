export class WSSecurityUtilityIdSignedXml /*extends System.Security.Cryptography.Xml.SignedXml*/ {
    private document: /*System.Xml.XmlDocument*/any;
    private ids: /*System.Collections.Generic.Dictionary<TKey, TValue>*/any;
    private static nextId: number;
    private static commonPrefix: string;
    AddReference(xpath: string): any { throw new Error("WSSecurityUtilityIdSignedXml.ts - AddReference : Not implemented."); }
    GetIdElement(document: /*System.Xml.XmlDocument*/any, idValue: string): /*System.Xml.XmlElement*/any { throw new Error("WSSecurityUtilityIdSignedXml.ts - GetIdElement : Not implemented."); }
    GetUniqueId(): string { throw new Error("WSSecurityUtilityIdSignedXml.ts - GetUniqueId : Not implemented."); }
}