import {ItemAttachment} from "./ItemAttachment";
import {Item} from "../Core/ServiceObjects/Items/Item";
export class GenericItemAttachment<TItem extends Item> extends ItemAttachment {
    get Item(): TItem { return <TItem>(this.item); }
    set Item(value: TItem) { this.item = value; }

    constructor(owner: Item) {
        super(/*Item*/);
    }
}
