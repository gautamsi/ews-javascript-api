import Item = require("../Core/ServiceObjects/Items/Item");
import HighlightTerm = require("../ComplexProperties/HighlightTerm");
class FindItemsResults<TItem extends Item> {//IEnumerable<TItem>
    TotalCount: number;
    NextPageOffset: number;
    MoreAvailable: boolean;
    Items: TItem[]/*System.Collections.ObjectModel.Collection<TItem>*/;
    HighlightTerms: HighlightTerm[]/*System.Collections.ObjectModel.Collection<HighlightTerm>*/;
    private totalCount: number;
    private nextPageOffset: number;
    private moreAvailable: boolean;
    private items: TItem[]/*System.Collections.ObjectModel.Collection<TItem>*/;
    private highlightTerms: HighlightTerm[]/*System.Collections.ObjectModel.Collection<HighlightTerm>*/;
    GetEnumerator(): any { throw new Error("Not implemented."); }
}
export = FindItemsResults;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
