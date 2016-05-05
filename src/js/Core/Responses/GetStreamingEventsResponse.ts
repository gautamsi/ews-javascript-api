import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ExchangeService} from "../ExchangeService";
import {GetStreamingEventsResults} from "../../Notifications/GetStreamingEventsResults";
import {HangingRequestDisconnectReason} from "../../Enumerations/HangingRequestDisconnectReason";
import {HangingServiceRequestBase} from "../Requests/HangingServiceRequestBase";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";

/**
 * Enumeration of ConnectionStatus that can be returned by the server.
 */
enum ConnectionStatus {
	OK = 0,
	Closed = 1
}

/**
 * @internal Represents the response to a subscription event retrieval operation.
 * 
 * @sealed
 */
export class GetStreamingEventsResponse extends ServiceResponse {

	results: GetStreamingEventsResults = new GetStreamingEventsResults();
	request: HangingServiceRequestBase = null;

	/**
	 * Gets event results from subscription.
	 */
	get Results(): GetStreamingEventsResults {
		return this.results;
	}

	/**
	 * Gets the error subscription ids.
	 * 
	 * @private set
	 * @value	The error subscription ids.
	 */
	ErrorSubscriptionIds: string[] = [];

	/**
	 * Initializes a new instance of the **GetStreamingEventsResponse** class.
	 *
	 * @param   {HangingServiceRequestBase}   request   Request to disconnect when we get a close message.
	 */
	constructor(request: HangingServiceRequestBase) {
		super();
		this.ErrorSubscriptionIds = [];
		this.request = request;
	}

	/**
     * @internal Loads extra error details from XML
     *
     * @param   {any}   responseObject      Json Object converted from XML.
     */
    LoadExtraErrorDetailsFromXmlJsObject(responseObject: any): void {
		super.LoadExtraErrorDetailsFromXml(responseObject);

		if (responseObject[XmlElementNames.ErrorSubscriptionIds]) {
			let errorSubscriptionIds = responseObject[XmlElementNames.ErrorSubscriptionIds];
			if (errorSubscriptionIds[XmlElementNames.SubscriptionId]) {
				let subscriptionIds = EwsServiceJsonReader.ReadAsArray(errorSubscriptionIds, XmlElementNames.SubscriptionId);
				subscriptionIds.forEach((subscriptionId) => {
					this.ErrorSubscriptionIds.push(subscriptionId);
				});
			}
		}
	}

	/**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		if (jsObject[XmlElementNames.Notifications]) {
			this.results.LoadFromXmlJsObject(jsObject[XmlElementNames.Notifications], service);
		}

		if (jsObject[XmlElementNames.ConnectionStatus]) {
			let connectionStatus: string = jsObject[XmlElementNames.ConnectionStatus];
			if (connectionStatus === ConnectionStatus[ConnectionStatus.Closed]) {
				this.request.Disconnect(HangingRequestDisconnectReason.Clean, null);
			}
		}
	}
}