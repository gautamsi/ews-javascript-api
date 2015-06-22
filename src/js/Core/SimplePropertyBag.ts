import {PropertyBagChangedDelegate} from "../Misc/DelegateTypes";			
export class SimplePropertyBag<TKey> {
	AddedItems: TKey[] /*System.Collections.Generic.IEnumerable<TKey>*/;
	RemovedItems: TKey[] /*System.Collections.Generic.IEnumerable<TKey>*/;
	ModifiedItems: TKey[] /*System.Collections.Generic.IEnumerable<TKey>*/;
	Item: any;
	private items: any /*System.Collections.Generic.Dictionary<TKey, any>*/;
	private removedItems: TKey[] /*System.Collections.Generic.List<TKey>*/;
	private addedItems: TKey[] /*System.Collections.Generic.List<TKey>*/;
	private modifiedItems: TKey[] /*System.Collections.Generic.List<TKey>*/;
	private OnChange: PropertyBagChangedDelegate;
	Changed(): void{ throw new Error("SimplePropertyBag.ts - Changed : Not implemented.");}
	ClearChangeLog(): void{ throw new Error("SimplePropertyBag.ts - ClearChangeLog : Not implemented.");}
	ContainsKey(key: TKey): boolean{ throw new Error("SimplePropertyBag.ts - ContainsKey : Not implemented.");}
	GetEnumerator(): any /*System.Collections.Generic.IEnumerator<System.Collections.Generic.KeyValuePair<TKey, any>>*/{ throw new Error("SimplePropertyBag.ts - GetEnumerator : Not implemented.");}
	InternalAddItemToChangeList(key: TKey, changeList: TKey[] /*System.Collections.Generic.List<TKey>*/): void{ throw new Error("SimplePropertyBag.ts - InternalAddItemToChangeList : Not implemented.");}
	InternalRemoveItem(key: TKey): void{ throw new Error("SimplePropertyBag.ts - InternalRemoveItem : Not implemented.");}
	TryGetValue(key: TKey, value: any): boolean{ throw new Error("SimplePropertyBag.ts - TryGetValue : Not implemented.");}
}






			
