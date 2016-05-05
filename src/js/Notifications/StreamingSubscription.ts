import {ExchangeService} from "../Core/ExchangeService";
import {IPromise} from "../Interfaces";

import {SubscriptionBase} from "./SubscriptionBase";
/**
 * Represents a streaming subscription.
 * 
 * @sealed
 */
export class StreamingSubscription extends SubscriptionBase {

	/**
	 * Gets the service used to create this subscription.
	 */
	get Service(): ExchangeService {
		return this.service;
	}
	/**
	 * Gets a value indicating whether this subscription uses watermarks.
	 */
	protected get UsesWatermark(): boolean {
		return false;
	}

	/**
	 * @internal Initializes a new instance of the **StreamingSubscription** class.
	 *
	 * @param   {ExchangeService}   service     The service.
	 */
	constructor(service: ExchangeService) {
		super(service);
		this.service = service;
	}

	/**
	 * Unsubscribes from the streaming subscription.
	 */
	Unsubscribe(): IPromise<void> { return this.Service.Unsubscribe(this.Id); }
}