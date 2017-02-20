import { Convert } from "../ExtensionMethods";
import { DateTime } from "../DateTime";
import { ExchangeService } from "../Core/ExchangeService";
import { ItemId } from "../ComplexProperties/ItemId";
import { ItemIndexError } from "../Enumerations/ItemIndexError";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents non indexable item.
 * 
 * @sealed
 */
export class NonIndexableItem {

    /**
     * Item Identity
     */
    ItemId: ItemId = null;

    /**
     * Error code
     */
    ErrorCode: ItemIndexError = ItemIndexError.None;

    /**
     * Error description
     */
    ErrorDescription: string = null;

    /**
     * Is partially indexed
     */
    IsPartiallyIndexed: boolean = false;

    /**
     * Is permanent failure
     */
    IsPermanentFailure: boolean = false;

    /**
     * Attempt count
     */
    AttemptCount: number = 0;

    /**
     * Last attempt time
     */
    LastAttemptTime: DateTime = null;

    /**
     * Additional info
     */
    AdditionalInfo: string = null;

    /**
     * Sort value
     */
    SortValue: string = null;

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {NonIndexableItemDetailsResult}       Non indexable item details result object
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): NonIndexableItem {
        let result: NonIndexableItem = new NonIndexableItem();

        if (jsObject[XmlElementNames.ItemId]) {
            result.ItemId = new ItemId();
            result.ItemId.LoadFromXmlJsObject(jsObject[XmlElementNames.ItemId], service);
        }

        if (jsObject[XmlElementNames.ErrorDescription]) {
            result.ErrorDescription = jsObject[XmlElementNames.ErrorDescription];
        }

        if (jsObject[XmlElementNames.IsPartiallyIndexed]) {
            result.IsPartiallyIndexed = Convert.toBool(jsObject[XmlElementNames.IsPartiallyIndexed]);
        }

        if (jsObject[XmlElementNames.IsPermanentFailure]) {
            result.IsPermanentFailure = Convert.toBool(jsObject[XmlElementNames.IsPermanentFailure]);
        }

        if (jsObject[XmlElementNames.AttemptCount]) {
            result.AttemptCount = Convert.toNumber(jsObject[XmlElementNames.AttemptCount]);
        }

        if (jsObject[XmlElementNames.LastAttemptTime]) {
            result.LastAttemptTime = DateTime.Parse(jsObject[XmlElementNames.LastAttemptTime]);
        }

        if (jsObject[XmlElementNames.AdditionalInfo]) {
            result.AdditionalInfo = jsObject[XmlElementNames.AdditionalInfo];
        }

        if (jsObject[XmlElementNames.SortValue]) {
            result.SortValue = jsObject[XmlElementNames.SortValue];
        }

        return result;
    }
}