import {ExchangeService} from "../ExchangeService";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal  Represents the response to a GetAppMarketplaceUrl operation
 * 
 * @sealed
 */
export class GetAppMarketplaceUrlResponse extends ServiceResponse {

	private appMarketplaceUrl: string;

	/**
	 * App Marketplace Url
	 */
	get AppMarketplaceUrl(): string {
		return this.appMarketplaceUrl;
	}

	/**
	 * @internal Initializes a new instance of the **GetAppMarketplaceUrlResponse** class.
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

		this.appMarketplaceUrl = <string>jsObject[XmlElementNames.AppMarketplaceUrl];
	}
}