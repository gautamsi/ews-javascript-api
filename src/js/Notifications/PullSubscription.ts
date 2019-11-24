import { ExchangeService } from "../Core/ExchangeService";
import { GetEventsResults } from "./GetEventsResults";
import { Promise } from "../Promise";

import { SubscriptionBase } from "./SubscriptionBase";
/**
 * Represents a pull subscription.
 *
 * @sealed
 */
export class PullSubscription extends SubscriptionBase {
  private moreEventsAvailable: boolean = null;

  /**
   * Gets a value indicating whether more events are available on the server.
   * MoreEventsAvailable is undefined (null) until GetEvents is called.
   */
  get MoreEventsAvailable(): boolean {
    return this.moreEventsAvailable;
  }

  /**
   * @internal Initializes a new instance of the **PullSubscription** class.
   *
   * @param   {ExchangeService}   service     The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * Obtains a collection of events that occurred on the subscribed folders since the point in time defined by the Watermark property. When GetEvents succeeds, Watermark is updated.
   *
   * @return  {Promise<GetEventsResults>}      Returns a collection of events that occurred since the last watermark	:Promise.
   */
  async GetEvents(): Promise<GetEventsResults> {
    const results: GetEventsResults = await this.Service.GetEvents(this.Id, this.Watermark);

    this.Watermark = results.NewWatermark;
    this.moreEventsAvailable = results.MoreEventsAvailable;

    return results;
  }

  /**
   * Unsubscribes from the pull subscription.
   */
  Unsubscribe(): Promise<void> {
    return this.Service.Unsubscribe(this.Id);
  }
}
