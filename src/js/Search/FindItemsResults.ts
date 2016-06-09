import {HighlightTerm} from "../ComplexProperties/HighlightTerm";

import {Item} from "../Core/ServiceObjects/Items/Item";
/**
 * Represents the results of an item search operation.
 * 
 * @sealed
 * @type    {TItem}  Item type
 */
export class FindItemsResults<TItem extends Item> { //IEnumerable<TItem>

    private totalCount: number = 0;
    private nextPageOffset: number = null;
    private moreAvailable: boolean = false;
    private items: TItem[] = [];
    private highlightTerms: HighlightTerm[] = [];

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
     * Gets a value indicating whether more items matching the search criteria are available in the searched folder. 
     */
    get MoreAvailable(): boolean {
        return this.moreAvailable;
    }
    set MoreAvailable(value: boolean) {
        this.moreAvailable = value;
    }

    /**
     * Gets a collection containing the items that were found by the search operation.
     */
    get Items(): TItem[] {
        return this.items;
    }

    /**
     * Gets a collection containing the highlight terms that were found by the search operation.
     */
    get HighlightTerms(): HighlightTerm[] {
        return this.highlightTerms;
    }

    /**
     * @internal Initializes a new instance of the **FindItemsResults<T>** class.
     */
    constructor() {
    }

    //GetEnumerator(): any { throw new Error("FindItemsResults.ts - GetEnumerator : Not implemented."); }
}