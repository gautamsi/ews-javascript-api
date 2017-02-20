import { DiscoverySearchConfiguration } from "../../MailboxSearch/DiscoverySearchConfiguration";
import { EwsServiceJsonReader } from "../EwsServiceJsonReader";
import { ExchangeService } from "../ExchangeService";
import { XmlElementNames } from "../XmlElementNames";

import { ServiceResponse } from "./ServiceResponse";
/**
 * Represents the GetDiscoverySearchConfiguration response.
 * 
 * @sealed
 */
export class GetDiscoverySearchConfigurationResponse extends ServiceResponse {

    private configurations: DiscoverySearchConfiguration[] = [];

    /**
     * Searchable mailboxes result
     */
    get DiscoverySearchConfigurations(): DiscoverySearchConfiguration[] {
        return this.configurations;
    }

    /**
	 * @internal Initializes a new instance of the **GetDiscoverySearchConfigurationResponse** class.
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
        this.configurations.splice(0);

        //super.ReadElementsFromXmlJsObject(jsObject, service);

        if (jsObject[XmlElementNames.DiscoverySearchConfigurations]) {
            for (let searchConfiguration of EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.DiscoverySearchConfigurations], XmlElementNames.DiscoverySearchConfiguration)) {
                this.configurations.push(DiscoverySearchConfiguration.LoadFromXmlJsObject(searchConfiguration, service));
            }
        }
    }
}