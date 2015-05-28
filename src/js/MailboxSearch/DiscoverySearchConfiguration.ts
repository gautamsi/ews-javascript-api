import SearchableMailbox = require("./SearchableMailbox");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class DiscoverySearchConfiguration {
    SearchId: string;
    SearchQuery: string;
    SearchableMailboxes: SearchableMailbox[];
    InPlaceHoldIdentity: string;
    ManagedByOrganization: string;
    Language: string;
    LoadFromJson(jsonObject: JsonObject): DiscoverySearchConfiguration { throw new Error("DiscoverySearchConfiguration.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): DiscoverySearchConfiguration { throw new Error("DiscoverySearchConfiguration.ts - LoadFromXml : Not implemented."); }
}
export = DiscoverySearchConfiguration;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
