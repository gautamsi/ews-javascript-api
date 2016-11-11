import { EwsServiceJsonReader } from "../EwsServiceJsonReader";
import { ExchangeService } from "../ExchangeService";
import { FailedSearchMailbox } from "../../MailboxSearch/FailedSearchMailbox";
import { SearchableMailbox } from "../../MailboxSearch/SearchableMailbox";
import { XmlElementNames } from "../XmlElementNames";

import { ServiceResponse } from "./ServiceResponse";
/**
 * Represents the GetSearchableMailboxes response.
 * 
 * @sealed
 */
export class GetSearchableMailboxesResponse extends ServiceResponse {
    private searchableMailboxes: SearchableMailbox[] = [];

    /**
     * Searchable mailboxes result
     */
    get SearchableMailboxes(): SearchableMailbox[] {
        return this.searchableMailboxes;
    }

    /**
     * Failed mailboxes
     */
    FailedMailboxes: FailedSearchMailbox[] = null;

    /**
	 * @internal Initializes a new instance of the **GetSearchableMailboxesResponse** class.
	 */
    constructor() {
        super();
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void {

        this.searchableMailboxes.splice(0);

        //super.ReadElementsFromXmlJsObject(jsObject, service);

        if (jsObject[XmlElementNames.SearchableMailboxes]) {
            for (let searchableMailboxObject of EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.SearchableMailboxes], XmlElementNames.SearchableMailbox)) {
                this.searchableMailboxes.push(SearchableMailbox.LoadFromXmlJsObject(searchableMailboxObject, service));
            }
        }
        if (jsObject[XmlElementNames.FailedMailboxes]) {
            this.FailedMailboxes = FailedSearchMailbox.LoadFromXmlJsObject(jsObject[XmlElementNames.FailedMailboxes], service);
        }
    }
}