import {ItemId} from "../ComplexProperties/ItemId";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {AbstractItemIdWrapper} from "./AbstractItemIdWrapper";
export class ItemIdWrapper extends AbstractItemIdWrapper {
    private itemId: ItemId;
    constructor(itemId: ItemId) {
        super();
        EwsLogging.Assert(
            itemId != null,
            "ItemIdWrapper.ctor",
            "itemId is null");

        this.itemId = itemId;
    }
    IternalToJson(service: ExchangeService): any { throw new Error("ItemIdWrapper.ts - IternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): void {this.itemId.WriteToXml(writer);}
}