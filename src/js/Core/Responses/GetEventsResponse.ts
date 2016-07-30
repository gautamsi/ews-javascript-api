import {ExchangeService} from "../ExchangeService";
import {GetEventsResults} from "../../Notifications/GetEventsResults";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal Represents the response to a subscription event retrieval operation.
 * 
 * @sealed
 */
export class GetEventsResponse extends ServiceResponse {

	private results: GetEventsResults = new GetEventsResults();

	/**
	 * @internal Gets event results from subscription.
	 */
	get Results(): GetEventsResults {
		return this.results;
	}

	/**
	 * @internal Initializes a new instance of the **GetEventsResponse** class.
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
		
		this.results.LoadFromXmlJsObject(jsObject, service);
	}
}