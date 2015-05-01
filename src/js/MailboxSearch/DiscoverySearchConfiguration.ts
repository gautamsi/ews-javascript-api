class DiscoverySearchConfiguration {
    SearchId: string;
    SearchQuery: string;
    SearchableMailboxes: SearchableMailbox[];
    InPlaceHoldIdentity: string;
    ManagedByOrganization: string;
    Language: string;
    LoadFromJson(jsonObject: JsonObject): DiscoverySearchConfiguration { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): DiscoverySearchConfiguration { throw new Error("Not implemented."); }
}
export = DiscoverySearchConfiguration;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
