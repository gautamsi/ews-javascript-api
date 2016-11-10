import { Convert } from "../ExtensionMethods";
import { ExchangeService } from "../Core/ExchangeService";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents non indexable item statistic.
 * 
 * @sealed
 */
export class NonIndexableItemStatistic {

    /**
     * Mailbox legacy DN
     */
    Mailbox: string = null;

    /**
     * Item count
     */
    ItemCount: number = 0;

    /**
     * Error message
     */
    ErrorMessage: string = null;

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {NonIndexableItemStatistic}       non indexable item statistic object
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): NonIndexableItemStatistic {
        let result: NonIndexableItemStatistic = new NonIndexableItemStatistic();

        if (jsObject[XmlElementNames.Mailbox]) {
            result.Mailbox = jsObject[XmlElementNames.Mailbox];
        }

        if (jsObject[XmlElementNames.ItemCount]) {
            result.ItemCount = Convert.toNumber(jsObject[XmlElementNames.ItemCount]);
        }

        if (jsObject[XmlElementNames.ErrorMessage]) {
            result.ErrorMessage = jsObject[XmlElementNames.ErrorMessage];
        }

        return result;
    }
}