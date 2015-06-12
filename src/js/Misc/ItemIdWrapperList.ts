import {ItemId} from "../ComplexProperties/ItemId";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {ItemIdWrapper} from "./ItemIdWrapper";
import {AbstractItemIdWrapper} from "./AbstractItemIdWrapper";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
export class ItemIdWrapperList {//IEnumerable<AbstractItemIdWrapper>
    get Count(): number { return this.itemIds.length; }
    //Item: Item;
    private itemIds: AbstractItemIdWrapper[] = [];//System.Collections.Generic.List<ItemId>;
    Add(itemId: ItemId): void;
    Add(item: Item): void;
    /**this is to shim add method with easy use within file/module. */
    Add(itemOrId: Item | ItemId): void;
    Add(itemOrId: Item | ItemId): void {
        if (itemOrId instanceof Item)
            this.itemIds.push(new ItemIdWrapper(itemOrId))
        else if (itemOrId instanceof ItemId)
            this.itemIds.push(new ItemIdWrapper(itemOrId));
        else
            throw new Error("FolderIdWrapperList.ts - Add - should not be seeing this.");
    }
    AddRange(itemIds: ItemId[]/*System.Collections.Generic.IEnumerable<ItemId>*/): void;
    AddRange(items: Item[]/*System.Collections.Generic.IEnumerable<ItemId>*/): void;
    AddRange(itemsOrIds: Item[]| ItemId[]): void {
        if (itemsOrIds != null) {
            for (var itemOrId of itemsOrIds) {
                this.Add(itemOrId);
            }
        }
    }
    GetEnumerator(): any { throw new Error("ItemIdWrapperList.ts - GetEnumerator : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("ItemIdWrapperList.ts - InternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): void {
        if (this.Count > 0) {
            writer.WriteStartElement(ewsNamesapce, xmlElementName);

            for (var itemIdWrapper of this.itemIds) {
                itemIdWrapper.WriteToXml(writer);
            }

            writer.WriteEndElement();
        }
    }
    __thisIndexer(index: number): Item {
        return this.itemIds[index].GetItem();
    }
}