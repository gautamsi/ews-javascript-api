import Item = require("../Core/ServiceObjects/Items/Item");
class ItemGroup<TItem extends Item> {
    GroupIndex: string;
    Items: TItem[];//System.Collections.ObjectModel.Collection<TItem>;
}
export = ItemGroup;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
