import { Folder } from "../Core/ServiceObjects/Folders/Folder";
import { IEnumerable } from "../Interfaces/IEnumerable";


/**
 * Represents the results of a folder search operation.
 * 
 * @sealed
 */
export class FindFoldersResults implements IEnumerable<Folder>  {

    private totalCount: number = 0;
    private nextPageOffset: number = null;
    private moreAvailable: boolean = false;
    private folders: Folder[] = [];

    /**
     * Gets the total number of folders matching the search criteria available in the searched folder. 
     */
    get TotalCount(): number {
        return this.totalCount;
    }
    set TotalCount(value: number) {
        this.totalCount = value;
    }

    /**
     * Gets the offset that should be used with FolderView to retrieve the next page of folders in a FindFolders operation.
     */
    get NextPageOffset(): number {
        return this.nextPageOffset;
    }
    set NextPageOffset(value: number) {
        this.nextPageOffset = value;
    }

    /**
     * Gets a value indicating whether more folders matching the search criteria.
     */
    get MoreAvailable(): boolean {
        return this.moreAvailable;
    }
    set MoreAvailable(value: boolean) {
        this.moreAvailable = value;
    }

    /**
     * Gets a collection containing the folders that were found by the search operation.
     */
    get Folders(): Folder[] {
        return this.folders;
    }

    /**
     * @internal Initializes a new instance of the **FindFoldersResults** class.
     *
     */
    constructor() { }

    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    GetEnumerator(): Folder[] {
        return this.folders;
    }
}