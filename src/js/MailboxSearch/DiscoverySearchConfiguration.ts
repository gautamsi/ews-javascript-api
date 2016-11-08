import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { ExchangeService } from "../Core/ExchangeService";
import { SearchableMailbox } from "./SearchableMailbox";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents mailbox query object.
 * 
 * @sealed
 */
export class DiscoverySearchConfiguration {

    /**
     * Search Id
     */
    SearchId: string = null;

    /**
     * Search query
     */
    SearchQuery: string = null;

    /**
     * Set of mailbox and scope pair
     */
    SearchableMailboxes: SearchableMailbox[] = null;

    /**
     * In-Place hold identity
     */
    InPlaceHoldIdentity: string = null;

    /**
     * Managed by organization
     */
    ManagedByOrganization: string = null;

    /**
     * Language
     */
    Language: string = null;

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {DiscoverySearchConfiguration}              Discovery search configuration object.
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): DiscoverySearchConfiguration {
        let mailboxes: SearchableMailbox[] = [];
        let configuration: DiscoverySearchConfiguration = new DiscoverySearchConfiguration();

        if (jsObject[XmlElementNames.SearchId]) {
            configuration.SearchId = jsObject[XmlElementNames.SearchId];
        }

        if (jsObject[XmlElementNames.InPlaceHoldIdentity]) {
            configuration.InPlaceHoldIdentity = jsObject[XmlElementNames.InPlaceHoldIdentity];
        }

        if (jsObject[XmlElementNames.ManagedByOrganization]) {
            configuration.ManagedByOrganization = jsObject[XmlElementNames.ManagedByOrganization];
        }

        if (jsObject[XmlElementNames.SearchQuery]) {
            configuration.SearchQuery = jsObject[XmlElementNames.SearchQuery];
        }

        if (jsObject[XmlElementNames.SearchableMailboxes]) {
            for (let searchableMailboxObject of EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.SearchableMailboxes], XmlElementNames.SearchableMailbox)) {
                mailboxes.push(SearchableMailbox.LoadFromXmlJsObject(searchableMailboxObject, service));
            }
        }

        if (jsObject[XmlElementNames.Language]) {
            configuration.Language = jsObject[XmlElementNames.Language];
        }

        configuration.SearchableMailboxes = mailboxes.length == 0 ? null : mailboxes;

        return configuration;
    }
}