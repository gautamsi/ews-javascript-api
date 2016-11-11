import { ExchangeService } from "../ExchangeService";
import { NonIndexableItemDetailsResult } from "../../MailboxSearch/NonIndexableItemDetailsResult";
import { ServiceResponse } from "./ServiceResponse";
import { XmlElementNames } from "../XmlElementNames";

/**
 * Represents the GetNonIndexableItemDetails response.
 * 
 * @sealed
 */
export class GetNonIndexableItemDetailsResponse extends ServiceResponse {

    /**
     * Non indexable item result
     * 
     * internal set
     */
    NonIndexableItemsResult: NonIndexableItemDetailsResult = null;

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
        //super.ReadElementsFromXmlJsObject(jsObject,service);
        if (jsObject[XmlElementNames.NonIndexableItemDetailsResult]) {
            this.NonIndexableItemsResult = NonIndexableItemDetailsResult.LoadFromXmlJsObject(jsObject[XmlElementNames.NonIndexableItemDetailsResult], service);
        }
    }
}