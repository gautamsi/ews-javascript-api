import {Item} from "../Core/ServiceObjects/Items/Item";
import {HighlightTerm} from "../ComplexProperties/HighlightTerm";
export class FindItemsResults<TItem extends Item> {//IEnumerable<TItem>
    TotalCount: number;
    NextPageOffset: number;
    MoreAvailable: boolean;
    get Items(): TItem[] { return this.items; }/*System.Collections.ObjectModel.Collection<TItem>*/
    get HighlightTerms(): HighlightTerm[] { return this.highlightTerms; }/*System.Collections.ObjectModel.Collection<HighlightTerm>*/
    //private totalCount: number;
    //private nextPageOffset: number;
    //private moreAvailable: boolean; - autoproperty sufficient
    private items: TItem[] = []/*System.Collections.ObjectModel.Collection<TItem>*/
    private highlightTerms: HighlightTerm[] = [];/*System.Collections.ObjectModel.Collection<HighlightTerm>*/
    constructor(){}
    //GetEnumerator(): any { throw new Error("FindItemsResults.ts - GetEnumerator : Not implemented."); }
}
