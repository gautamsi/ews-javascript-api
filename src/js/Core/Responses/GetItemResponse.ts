import {Item} from "../ServiceObjects/Items/Item";
import {ItemInfo} from "../ServiceObjects/Items/ItemInfo";
import {PropertySet} from "../PropertySet";
import {ExchangeService} from "../ExchangeService";
import {EwsLogging} from "../EwsLogging";
import {XmlElementNames} from "../XmlElementNames";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ServiceResponse} from "./ServiceResponse";
export class GetItemResponse extends ServiceResponse {

    private item: Item = null;
    private propertySet: PropertySet = null;
    get Item(): Item {
        return this.item;
    }
    constructor(item: Item, propertySet: PropertySet) {
        super();
        this.item = item;
        this.propertySet = propertySet;
        EwsLogging.Assert(this.propertySet !== null, "GetItemResponse.ctor", "PropertySet should not be null");
    }
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item {
        if (this.Item != null) {
            return this.Item;
        }
        else {

            return new ItemInfo().CreateEwsObjectFromXmlElementName<Item>(service, xmlElementName);
        }
    }
    //ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("GetItemResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        
        var items: Item[] = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Item>(
            responseObject,
            service,
            XmlElementNames.Items,
            (s, e) => { return this.GetObjectInstance(s, e); },
            true,               /* clearPropertyBag         */
            this.propertySet,   /* requestedPropertySet     */
            false);             /* summaryPropertiesOnly    */

        this.item = items[0];
    }
}