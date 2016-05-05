import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";

/**
 * Represents the base class for event subscriptions.
 */
export abstract class SubscriptionBase {

	protected service: ExchangeService = null;
	private id: string = null;
	private watermark: string = null;

	/**
	 * Gets the session.
	 * 
	 * @value The session.
	 */
	get Service(): ExchangeService {
		return this.service;
	}

	/**
	 * Gets the Id of the subscription.
	 * 
	 * @internal set
	 */
	get Id(): string {
		return this.id;
	}
	set Id(value: string) {
		this.id = value;
	}

	/**
	 * Gets the latest watermark of the subscription. Watermark is always null for streaming subscriptions.
	 * 
	 * @internal set
	 */
	get Watermark(): string {
		return this.watermark;
	}
	set Watermark(value: string) {
		this.watermark = value;
	}

	/**
	 * Gets whether or not this subscription uses watermarks.
	 */
	protected get UsesWatermark(): boolean {
		return true;
	}

	/**
	 * @internal Initializes a new instance of the **SubscriptionBase** class.
	 *
	 * @param   {ExchangeService}   service     The service.
	 */
	constructor(service: ExchangeService);
	/**
	 * @internal Initializes a new instance of the **SubscriptionBase** class.
	 *
	 * @param   {ExchangeService}   service     The service.
	 * @param   {string}   			id          The id.
	 */
	constructor(service: ExchangeService, id: string);
	/**
	 * @internal Initializes a new instance of the **SubscriptionBase** class.
	 *
	 * @param   {ExchangeService}   service     The service.
	 * @param   {string}   			id          The id.
	 * @param   {string}   			watermark   The watermark.
	 */
	constructor(service: ExchangeService, id: string, watermark: string);
	constructor(service: ExchangeService, id: string = null, watermark: string = null) {
		EwsUtilities.ValidateParam(service, "service");
		this.service = service;
		if (arguments.length >= 2) {
			EwsUtilities.ValidateParam(id, "id");
		}
		this.id = id;
		this.watermark = watermark;
	}

	/**
     * @internal Loads from XML.
     *
     * @param   {any}                 jsObject               Json Object converted from XML.
     * @param   {ExchangeService}     service                The service.    
     */
	LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		this.id = jsObject[XmlElementNames.SubscriptionId];

		if (this.UsesWatermark) {
			this.watermark = jsObject[XmlElementNames.Watermark];
		}
	}
}