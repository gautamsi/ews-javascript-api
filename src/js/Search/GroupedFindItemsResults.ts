import {Item} from "../Core/ServiceObjects/Items/Item";
import {ItemGroup} from "./ItemGroup";
export class GroupedFindItemsResults<TItem extends Item> {    //: IEnumerable<ItemGroup<TItem>>
    TotalCount: number;
    NextPageOffset: number;
    MoreAvailable: boolean;
    get ItemGroups(): ItemGroup<TItem>[]{return this.itemGroups;}//System.Collections.ObjectModel.Collection<ItemGroup<TItem>>;
    // private totalCount: number;
    // private nextPageOffset: number;
    // private moreAvailable: boolean;
    private itemGroups: ItemGroup<TItem>[] = [];//System.Collections.ObjectModel.Collection<ItemGroup<TItem>>;
    GetEnumerator(): any { throw new Error("GroupedFindItemsResults.ts - GetEnumerator : Not implemented."); }
}