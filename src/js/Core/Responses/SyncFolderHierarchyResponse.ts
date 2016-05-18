import {PropertySet} from "../PropertySet";
import {XmlElementNames} from "../XmlElementNames";

import {Folder} from "../ServiceObjects/Folders/Folder";
import {FolderChange} from "../../Sync/FolderChange";
import {SyncResponse} from "./SyncResponse";
/**
 * Represents the response to a folder synchronization operation.
 * 
 * @sealed
 */
export class SyncFolderHierarchyResponse extends SyncResponse<Folder, FolderChange> {

	/**
	 * @internal Gets a value indicating whether this request returns full or summary properties.
	 * 
	 * @value	*true* if summary properties only; otherwise, *false*.
	 */
	get SummaryPropertiesOnly(): boolean {
		return true;
	}

	/**
	 * @internal Initializes a new instance of the **SyncFolderHierarchyResponse** class.
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
	CreateChangeInstance(): FolderChange {
		return new FolderChange();
	}

	/**
	 * @internal Gets the name of the change element.
	 *
	 * @return  {string}      Change element name.
	 */
	GetChangeElementName(): string {
		return XmlElementNames.Folder;
	}

	/**
	 * @internal Gets the name of the change id element.
	 *
	 * @return  {string}      Change id element name.
	 */
	GetChangeIdElementName(): string {
		return XmlElementNames.FolderId;
	}

	/**
	 * @internal Gets the name of the includes last in range XML element.
	 *
	 * @return  {string}      XML element name.
	 */
	GetIncludesLastInRangeXmlElementName(): string {
		return XmlElementNames.IncludesLastFolderInRange;
	}
}