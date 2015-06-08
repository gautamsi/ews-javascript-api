import {EwsLogging} from "../Core/EwsLogging"
import Item = require("../Core/ServiceObjects/Items/Item");
class ItemGroup<TItem extends Item> {
    GroupIndex: string;
    Items: TItem[] = [];//System.Collections.ObjectModel.Collection<TItem>;
    constructor(groupIndex: string, items: TItem[]) {
        EwsLogging.Assert(
            items != null,
            "ItemGroup.ctor",
            "items is null");

        this.GroupIndex = groupIndex;
        this.Items = items; //new Collection<TItem>(items);
    }
}
export = ItemGroup;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
