import {Folder} from "../Core/ServiceObjects/Folders/Folder";
import {FolderId} from "../ComplexProperties/FolderId";
import {ServiceId} from "../ComplexProperties/ServiceId";

import {Change} from "./Change";
/**
 * Represents a change on a folder as returned by a synchronization operation.
 * 
 * @sealed
 */
export class FolderChange extends Change {

	/**
	 * Gets the folder the change applies to. Folder is null when ChangeType is equal to ChangeType.Delete. In that case, use the FolderId property to retrieve the Id of the folder that was deleted.
	 */
	get Folder(): Folder {
		return <Folder>this.ServiceObject;
	}

	/**
	 * Gets the Id of the folder the change applies to.
	 */
	get FolderId(): FolderId {
		return <FolderId>this.Id;
	}

	/**
	 * @internal Initializes a new instance of **FolderChange** class.
	 */
	constructor() {
		super();
	}

	/**
	 * @internal Creates an FolderId instance.
	 *
	 * @return  {ServiceId}      A FolderId.
	 */
	CreateId(): ServiceId { 
		return new FolderId();
	}
}