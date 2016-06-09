import {ItemGroup} from "./ItemGroup";

import {Item} from "../Core/ServiceObjects/Items/Item";
/**
 * Represents the results of an item search operation.
 * 
 * @sealed
 * @type    {TItem} The type of item returned by the search operation.
 */
export class GroupedFindItemsResults<TItem extends Item> {    //: IEnumerable<ItemGroup<TItem>>

    private totalCount: number = 0;
    private nextPageOffset: number = null;
    private moreAvailable: boolean = false;

    /**
     * List of ItemGroups.
     */
    private itemGroups: ItemGroup<TItem>[] = [];

    /**
     * Gets the total number of items matching the search criteria available in the searched folder.
     */
    get TotalCount(): number {
        return this.totalCount;
    }
    set TotalCount(value: number) {
        this.totalCount = value;
    }

    /**
     * Gets the offset that should be used with ItemView to retrieve the next page of items in a FindItems operation.
     */
    get NextPageOffset(): number {
        return this.nextPageOffset;
    }
    set NextPageOffset(value: number) {
        this.nextPageOffset = value;
    }

    /**
     * Gets a value indicating whether more items corresponding to the search criteria are available in the searched folder. 
     */
    get MoreAvailable(): boolean {
        return this.moreAvailable;
    }
    set MoreAvailable(value: boolean) {
        this.moreAvailable = value;
    }

    /**
     * Gets the item groups returned by the search operation.
     */
    get ItemGroups(): ItemGroup<TItem>[] {
        return this.itemGroups;
    }

    /**
     * @internal Initializes a new instance of the **GroupedFindItemsResults<TItem>** class.
     */
    constructor() {
    }

    GetEnumerator(): any { throw new Error("GroupedFindItemsResults.ts - GetEnumerator : Not implemented."); }
}