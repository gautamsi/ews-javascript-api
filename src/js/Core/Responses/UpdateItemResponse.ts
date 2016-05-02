import {Item} from "../ServiceObjects/Items/Item";
import {ExchangeService} from "../ExchangeService";
import {ServiceResult} from "../../Enumerations/ServiceResult";
import {ItemInfo} from "../ServiceObjects/Items/ItemInfo";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {XmlElementNames} from "../XmlElementNames";
import {EwsLogging} from "../EwsLogging";
import {ServiceResponse} from "./ServiceResponse";
export class UpdateItemResponse extends ServiceResponse {
    private item: Item = null;
    private returnedItem: Item = null;
    private conflictCount: number = 0;
    get ReturnedItem(): Item {
        return this.returnedItem;
    }
    get ConflictCount(): number {
        return this.conflictCount;
    }

    constructor(item: Item) {
        super();
        EwsLogging.Assert(
            item != null,
            "UpdateItemResponse.ctor",
            "item is null");
        this.item = item;
    }

    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item {
        this.returnedItem = new ItemInfo().CreateEwsObjectFromXmlElementName<Item>(service, xmlElementName);
        return this.returnedItem;
    }
    Loaded(): void {
        if (this.Result == ServiceResult.Success) {
            this.item.ClearChangeLog();
        }
    }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        debugger;
        super.ReadElementsFromXmlJsObject(responseObject, service);

        EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Item>(
            responseObject,
            service,
            XmlElementNames.Items,
            this.GetObjectInstance,
            false,  /* clearPropertyBag */
            null,   /* requestedPropertySet */
            false); /* summaryPropertiesOnly */

        // ConflictResults was only added in 2007 SP1 so if this was a 2007 RTM request we shouldn't expect to find the element
        if (!service.Exchange2007CompatibilityMode) {
            this.conflictCount = responseObject.ReadAsJsonObject(XmlElementNames.ConflictResults).ReadAsInt(XmlElementNames.Count);
        }

        // If UpdateItem returned an item that has the same Id as the item that
        // is being updated, this is a "normal" UpdateItem operation, and we need
        // to update the ChangeKey of the item being updated with the one that was
        // returned. Also set returnedItem to indicate that no new item was returned.
        //
        // Otherwise, this in a "special" UpdateItem operation, such as a recurring
        // task marked as complete (the returned item in that case is the one-off
        // task that represents the completed instance).
        //
        // Note that there can be no returned item at all, as in an UpdateItem call
        // with MessageDisposition set to SendOnly or SendAndSaveCopy.
        if (this.returnedItem != null) {
            if (this.item.Id.UniqueId == this.returnedItem.Id.UniqueId) {
                this.item.Id.ChangeKey = this.returnedItem.Id.ChangeKey;
                this.returnedItem = null;
            }
        }
    }
}