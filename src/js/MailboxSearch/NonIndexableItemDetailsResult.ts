import { EwsServiceJsonReader } from '../Core/EwsServiceJsonReader';
import { ExchangeService } from "../Core/ExchangeService";
import { FailedSearchMailbox } from "./FailedSearchMailbox";
import { NonIndexableItem } from "./NonIndexableItem";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents non indexable item details result.
 * 
 * @sealed
 */
export class NonIndexableItemDetailsResult {

    /**
     * Collection of items
     */
    Items: NonIndexableItem[] = null;

    /**
     * Failed mailboxes
     */
    FailedMailboxes: FailedSearchMailbox[] = null;

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {NonIndexableItemDetailsResult}       Non indexable item details result object
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): NonIndexableItemDetailsResult {
        let nonIndexableItemDetailsResult: NonIndexableItemDetailsResult = new NonIndexableItemDetailsResult();
        if (jsObject[XmlElementNames.Items]) {
            nonIndexableItemDetailsResult.Items = [];
            for (let nonIndexableItem of EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.Items], XmlElementNames.NonIndexableItemDetail)) {
                nonIndexableItemDetailsResult.Items.push(NonIndexableItem.LoadFromXmlJsObject(nonIndexableItem, service));
            }
            if (nonIndexableItemDetailsResult.Items.length === 0) {
                nonIndexableItemDetailsResult.Items = null;
            }
        }
        if (jsObject[XmlElementNames.FailedMailboxes]) {
            nonIndexableItemDetailsResult.FailedMailboxes = FailedSearchMailbox.LoadFromXmlJsObject(jsObject[XmlElementNames.FailedMailboxes], service);
        }
        return nonIndexableItemDetailsResult;
    }
}