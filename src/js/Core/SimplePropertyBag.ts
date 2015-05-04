			
 class SimplePropertyBag<TKey> {
	AddedItems: TKey[] /*System.Collections.Generic.IEnumerable<TKey>*/;
	RemovedItems: TKey[] /*System.Collections.Generic.IEnumerable<TKey>*/;
	ModifiedItems: TKey[] /*System.Collections.Generic.IEnumerable<TKey>*/;
	Item: any;
	private items: any /*System.Collections.Generic.Dictionary<TKey, any>*/;
	private removedItems: TKey[] /*System.Collections.Generic.List<TKey>*/;
	private addedItems: TKey[] /*System.Collections.Generic.List<TKey>*/;
	private modifiedItems: TKey[] /*System.Collections.Generic.List<TKey>*/;
	private OnChange: PropertyBagChangedDelegate;
	Changed(): void{ throw new Error("Not implemented.");}
	ClearChangeLog(): void{ throw new Error("Not implemented.");}
	ContainsKey(key: TKey): boolean{ throw new Error("Not implemented.");}
	GetEnumerator(): any /*System.Collections.Generic.IEnumerator<System.Collections.Generic.KeyValuePair<TKey, any>>*/{ throw new Error("Not implemented.");}
	InternalAddItemToChangeList(key: TKey, changeList: TKey[] /*System.Collections.Generic.List<TKey>*/): void{ throw new Error("Not implemented.");}
	InternalRemoveItem(key: TKey): void{ throw new Error("Not implemented.");}
	TryGetValue(key: TKey, value: any): boolean{ throw new Error("Not implemented.");}
}
export = SimplePropertyBag;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			