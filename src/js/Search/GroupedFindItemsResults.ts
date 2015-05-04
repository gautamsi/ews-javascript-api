import Item = require("../Core/ServiceObjects/Items/Item");
import ItemGroup = require("./ItemGroup");

class GroupedFindItemsResults<TItem extends Item> {    //: IEnumerable<ItemGroup<TItem>>
    TotalCount: number;
    NextPageOffset: number;
    MoreAvailable: boolean;
    ItemGroups: ItemGroup<TItem>[];//System.Collections.ObjectModel.Collection<ItemGroup<TItem>>;
    private totalCount: number;
    private nextPageOffset: number;
    private moreAvailable: boolean;
    private itemGroups: ItemGroup<TItem>[];//System.Collections.ObjectModel.Collection<ItemGroup<TItem>>;
    GetEnumerator(): any { throw new Error("Not implemented."); }
}
export = GroupedFindItemsResults;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
