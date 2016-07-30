import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ItemInfo} from "../ServiceObjects/Items/ItemInfo";
import {Item} from "../ServiceObjects/Items/Item";
import {ExchangeService} from "../ExchangeService";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * Represents a response to a Move or Copy operation.
 * 
 */
export class MoveCopyItemResponse extends ServiceResponse {

    private item: Item = null;

    /**
     * Gets the copied or moved item. Item is null if the copy or move operation was between two mailboxes or between a mailbox and a public folder.
     *
     */
    get Item(): Item {
        return this.item;
    }

    /**
     * @internal Initializes a new instance of the *MoveCopyItemResponse* class.
     * 
     */
    constructor() {
        super();
    }

    /**
     * @internal Gets Item instance.
     *
     * @param   {ExchangeService}   service          The service.
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {Item}              Item.
     */
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item {
        var itemInfo: ItemInfo = new ItemInfo();
        return itemInfo.CreateEwsObjectFromXmlElementName<Item>(service, xmlElementName);
    }

    /**
     * @internal Reads response elements from XML parsed to JS Object.
     *
     * @param   {any}               responseObject   The response object.
     * @param   {ExchangeService}   service          The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        if (responseObject[XmlElementNames.Items]) {
            //debug: check if this works
            var items: Item[] = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Item>(
                responseObject,
                service,
                XmlElementNames.Items,
                this.GetObjectInstance.bind(this),
                false,      /* clearPropertyBag */
                null,       /* requestedPropertySet */
                false);     /* summaryPropertiesOnly */
            // We only receive the copied or moved items if the copy or move operation was within
            // a single mailbox. No item is returned if the operation is cross-mailbox, from a
            // mailbox to a public folder or from a public folder to a mailbox.
            this.item = items[0];
        }
    }
}