import { ExchangeService } from "../ExchangeService";
import { SearchMailboxesResult } from "../../MailboxSearch/SearchMailboxesResult";
import { XmlElementNames } from "../XmlElementNames";

import { ServiceResponse } from "./ServiceResponse";
/**
 * Represents the SearchMailboxes response.
 * 
 * @sealed
 */
export class SearchMailboxesResponse extends ServiceResponse {

    private searchResult: SearchMailboxesResult = null;

    /**
     * Search mailboxes result
     */
    get SearchResult(): SearchMailboxesResult {
        return this.searchResult;
    }
    /**@internal set*/
    set SearchResult(value: SearchMailboxesResult) {
        this.searchResult = value;
    }

    /**
	 * @internal Initializes a new instance of the **SearchMailboxesResponse** class.
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
        //super.ReadElementsFromXmlJsObject(jsObject, service);

        if (jsObject[XmlElementNames.SearchMailboxesResult]) {
            this.searchResult = SearchMailboxesResult.LoadFromXmlJsObject(jsObject[XmlElementNames.SearchMailboxesResult], service);
        }
    }
}