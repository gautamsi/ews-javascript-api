import { EwsServiceJsonReader } from "../EwsServiceJsonReader";
import { ExchangeService } from "../ExchangeService";
import { NonIndexableItemStatistic } from "../../MailboxSearch/NonIndexableItemStatistic";
import { XmlElementNames } from "../XmlElementNames";

import { ServiceResponse } from "./ServiceResponse";
/**
 * Represents the GetNonIndexableItemStatistics response.
 * 
 * @sealed
 */
export class GetNonIndexableItemStatisticsResponse extends ServiceResponse {

    /**
     * List of non indexable statistic
     */
    NonIndexableStatistics: NonIndexableItemStatistic[] = null;

    /**
	 * @internal Initializes a new instance of the **GetNonIndexableItemStatisticsResponse** class.
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
        this.NonIndexableStatistics = [];
        if (jsObject[XmlElementNames.NonIndexableItemStatistics]) {
            for (let nonIndexableItemStatistic of EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.NonIndexableItemStatistics], XmlElementNames.NonIndexableItemStatistic)) {
                this.NonIndexableStatistics.push(NonIndexableItemStatistic.LoadFromXmlJsObject(nonIndexableItemStatistic, service));
            }
        }
    }
}