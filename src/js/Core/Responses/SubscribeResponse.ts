import {EwsLogging} from "../EwsLogging";
import {ExchangeService} from "../ExchangeService";

import {ServiceResponse} from "./ServiceResponse";
import {SubscriptionBase} from "../../Notifications/SubscriptionBase";
/**
 * @internal Represents the base response class to subscription creation operations.
 * 
 * @sealed
 * @typeparam	{TSubscription}		The type of the subscription.
 */
export class SubscribeResponse<TSubscription extends SubscriptionBase> extends ServiceResponse {

    private subscription: TSubscription;

    /**
     * Gets the subscription that was created.
     */
    get Subscription(): TSubscription {
        return this.subscription;
    }

    /**
     * @internal Initializes a new instance of the **SubscribeResponse<TSubscription>** class.
     *
     * @param   {TSubscription}   subscription   The subscription.
     */
    constructor(subscription: TSubscription) {
        super();
        EwsLogging.Assert(
            subscription != null,
            "SubscribeResponse.ctor",
            "subscription is null");

        this.subscription = subscription;
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               responseObject      The response object.
     * @param   {ExchangeService}   service             The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        this.subscription.LoadFromXmlJsObject(responseObject, service)
    }
}