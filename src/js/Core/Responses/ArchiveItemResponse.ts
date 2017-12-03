import {ServiceResponse} from "./ServiceResponse";
import {Item} from "../ServiceObjects/Items/Item";
import {ItemInfo} from "../ServiceObjects/Items/ItemInfo";
import {ExchangeService} from "../ExchangeService";
import {XmlElementNames} from "../XmlElementNames";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
export class ArchiveItemResponse extends ServiceResponse {
    Item: Item;
    private item: Item;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item {
        return (new ItemInfo()).CreateEwsObjectFromXmlElementName<Item>(service, xmlElementName);
    }
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("ArchiveItemResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        //debugger;
        var items: Item[] = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Item>(
            responseObject,
            service,
            XmlElementNames.Folders,
            this.GetObjectInstance.bind(this),
            false,  /* clearPropertyBag */
            null,   /* requestedPropertySet */
            false); /* summaryPropertiesOnly */

        if (items.length > 0) {
            this.item = items[0];
        }
    }
}