import {Item} from "../Core/ServiceObjects/Items/Item";
import {ItemId} from "../ComplexProperties/ItemId";
import {ServiceId} from "../ComplexProperties/ServiceId";

import {Change} from "./Change";
/**
 * Represents a change on an item as returned by a synchronization operation.
 * 
 * @sealed
 */
export class ItemChange extends Change {

	private isRead: boolean = false;

	/**
	 * Gets the item the change applies to. Item is null when ChangeType is equal to either ChangeType.Delete or ChangeType.ReadFlagChange. In those cases, use the ItemId property to retrieve the Id of the item that was deleted or whose IsRead property changed.
	 */
	get Item(): Item {
		return <Item>this.ServiceObject;
	}

	/**
	 * Gets the IsRead property for the item that the change applies to. IsRead is only valid when ChangeType is equal to ChangeType.ReadFlagChange.
	 */
	get IsRead(): boolean {
		return this.isRead;
	}
	set IsRead(value: boolean) {
		this.isRead = value;
	}

	/**
	 * Gets the Id of the item the change applies to.
	 */
	get ItemId(): ItemId {
		return <ItemId>this.Id;
	}

	/**
	 * @internal Initializes a new instance of **ItemChange** class.
	 */
	constructor() {
		super()
	}

	/**
	 * @internal Creates an ItemId instance.
	 *
	 * @return  {ServiceId}      A ItemId.
	 */
	CreateId(): ServiceId {
		return new ItemId();
	}
}