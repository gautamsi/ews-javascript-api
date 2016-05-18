import {PropertySet} from "../PropertySet";
import {XmlElementNames} from "../XmlElementNames";

import {Item} from "../ServiceObjects/Items/Item";
import {ItemChange} from "../../Sync/ItemChange";
import {SyncResponse} from "./SyncResponse";
/**
 * Represents the response to a folder items synchronization operation.
 * 
 * @sealed
 */
export class SyncFolderItemsResponse extends SyncResponse<Item, ItemChange> {
	
	/**
	 * @internal Gets a value indicating whether this request returns full or summary properties.
	 * 
	 * @value	*true* if summary properties only; otherwise, *false*.
	 */
	get SummaryPropertiesOnly(): boolean{
		return true;
	}

	/**
	 * @internal Initializes a new instance of the **SyncFolderItemsResponse** class.
	 *
	 * @param   {PropertySet}   propertySet   PropertySet from request.
	 */
	constructor(propertySet: PropertySet) {
		super(propertySet);
	}

	/**
	 * @internal Creates an item change instance.
	 *
	 * @return  {ItemChange}      ItemChange instance
	 */
	CreateChangeInstance(): ItemChange {
		return new ItemChange();
	}

	/**
	 * @internal Gets the name of the change element.
	 *
	 * @return  {string}      Change element name.
	 */
	GetChangeElementName(): string {
		return XmlElementNames.Item;
	}

	/**
	 * @internal Gets the name of the change id element.
	 *
	 * @return  {string}      Change id element name.
	 */
	GetChangeIdElementName(): string {
		return XmlElementNames.ItemId;
	}

	/**
	 * @internal Gets the name of the includes last in range XML element.
	 *
	 * @return  {string}      XML element name.
	 */
	GetIncludesLastInRangeXmlElementName(): string {
		return XmlElementNames.IncludesLastItemInRange;
	}
}