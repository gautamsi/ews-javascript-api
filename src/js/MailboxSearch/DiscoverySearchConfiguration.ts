import {SearchableMailbox} from "./SearchableMailbox";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class DiscoverySearchConfiguration {
    SearchId: string;
    SearchQuery: string;
    SearchableMailboxes: SearchableMailbox[];
    InPlaceHoldIdentity: string;
    ManagedByOrganization: string;
    Language: string;
    LoadFromJson(jsonObject: JsonObject): DiscoverySearchConfiguration { throw new Error("DiscoverySearchConfiguration.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): DiscoverySearchConfiguration { throw new Error("DiscoverySearchConfiguration.ts - LoadFromXml : Not implemented."); }
}


//}



