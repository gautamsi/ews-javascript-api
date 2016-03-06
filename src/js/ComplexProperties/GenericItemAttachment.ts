import {Item} from "../Core/ServiceObjects/Items/Item";

import {ItemAttachment} from "./ItemAttachment";
/**
 * Represents a strongly typed item attachment.
 */
export class GenericItemAttachment<TItem extends Item> extends ItemAttachment {
    /**
     * Gets the item associated with the attachment.
     */
    get Item(): TItem { return <TItem>this.item; }
    set Item(value: TItem) { /** this.Item = value; */  super._setItem(value)}

    /**
     * Initializes a new instance of the  class.
     *
     * @param   {}   owner   The owner of the attachment.
     */
    constructor(owner: Item) {
        super(owner);
    }
}
