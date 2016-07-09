import {Item} from "../ServiceObjects/Items/Item";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {XmlElementNames} from "../XmlElementNames";
import {ServiceResponse} from "./ServiceResponse";
export class CreateItemResponseBase extends ServiceResponse {
    private items: Item[];//System.Collections.Generic.List<Item>;
    get Items(): Item[] {
        return this.items;
    }
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("CreateItemResponseBase.ts - GetObjectInstance : abstract must implement."); }
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("CreateItemResponseBase.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        
        if (responseObject[XmlElementNames.Items]) {
            this.items = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Item>(
                responseObject,
                service,
                XmlElementNames.Items,
                this.GetObjectInstance.bind(this),
                false,      /* clearPropertyBag */
                null,       /* requestedPropertySet */
                false);     /* summaryPropertiesOnly */


        }
    }
}

