import { AbstractItemIdWrapper } from "./AbstractItemIdWrapper";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../Core/ExchangeService";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { Item } from "../Core/ServiceObjects/Items/Item";
import { ItemId } from "../ComplexProperties/ItemId";
import { ItemIdWrapper } from "./ItemIdWrapper";
import { ItemWrapper } from "./ItemWrapper";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

/**
 * @internal Represents a list a abstracted item Ids.
 */
export class ItemIdWrapperList implements IEnumerable<AbstractItemIdWrapper>{

    /**
     * List of ItemIdWrapper
     */
    private itemIds: AbstractItemIdWrapper[] = [];

    /**
     * @internal Gets the count.
     * 
     * @value   The count.
     */
    get Count(): number {
        return this.itemIds.length;
    }

    /**
     * @internal Initializes a new instance of the **ItemIdWrapperList** class.
     */
    constructor() {
    }

    /**
     * Gets the *Item* at the specified index.
     *
     * @param   {number}   index   the index
     */
    _getItem(index: number): Item {
        return this.itemIds[index].GetItem();
    }

    /**
     * @internal Adds the specified item id.
     *
     * @param   {ItemId}   itemId   The item id.
     */
    Add(itemId: ItemId): void;
    /**
     * @internal Adds the specified item.
     *
     * @param   {Item}   item   The item.
     */
    Add(item: Item): void;
    /**this is to shim add method with easy use within file/module. */
    Add(itemOrId: Item | ItemId): void;
    Add(itemOrId: Item | ItemId): void {
        if (itemOrId instanceof Item)
            this.itemIds.push(new ItemWrapper(itemOrId))
        else if (itemOrId instanceof ItemId)
            this.itemIds.push(new ItemIdWrapper(itemOrId));
        else
            throw new Error("FolderIdWrapperList.ts - Add - should not be seeing this.");
    }

    /**
     * @internal Adds the range.
     *
     * @param   {ItemId}   itemIds   The item ids.
     */
    AddRange(itemIds: ItemId[]): void;
    /**
     * @internal Adds the range.
     *
     * @param   {Item[]}   items   The items.
     */
    AddRange(items: Item[]): void;
    AddRange(itemsOrIds: Item[] | ItemId[]): void {
        if (itemsOrIds != null) {
            for (var itemOrId of itemsOrIds) {
                this.Add(itemOrId);
            }
        }
    }

    /**
     *  Returns an enumerator that iterates through the collection. this case this.itemIds
     */
    GetEnumerator(): AbstractItemIdWrapper[] {
        return this.itemIds;
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          ewsNamesapce     The ews namesapce.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): void {
        if (this.Count > 0) {
            writer.WriteStartElement(ewsNamesapce, xmlElementName);

            for (var itemIdWrapper of this.itemIds) {
                itemIdWrapper.WriteToXml(writer);
            }

            writer.WriteEndElement();
        }
    }
}