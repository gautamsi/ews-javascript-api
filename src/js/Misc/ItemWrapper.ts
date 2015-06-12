import {AbstractItemIdWrapper} from "./AbstractItemIdWrapper";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class ItemWrapper extends AbstractItemIdWrapper {
    private item: Item;
    constructor(item: Item) {
        super();
        EwsLogging.Assert(
            item != null,
            "ItemWrapper.ctor",
            "item is null");
        EwsLogging.Assert(
            !item.IsNew,
            "ItemWrapper.ctor",
            "item does not have an Id");

        this.item = item;
    }
    GetItem(): Item { return this.item; }
    IternalToJson(service: ExchangeService): any { throw new Error("ItemWrapper.ts - IternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): void { this.item.Id.WriteToXml(writer) }
}