import {ExchangeService} from "../Core/ExchangeService";

import {SubscriptionBase} from "./SubscriptionBase";
/**
 * Represents a push subscriptions.
 * 
 * @sealed
 */
export class PushSubscription extends SubscriptionBase {

    /**
	 * @internal Initializes a new instance of the **PushSubscription** class.
	 *
	 * @param   {ExchangeService}   service     The service.
	 */
    constructor(service: ExchangeService) {
        super(service);
    }
}