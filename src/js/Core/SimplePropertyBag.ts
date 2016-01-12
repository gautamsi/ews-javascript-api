
import {EwsLogging} from "./EwsLogging";
import {IOutParam} from "../Interfaces/IOutParam";
import {StringHelper, ArrayHelper} from "../ExtensionMethods";
import {Dictionary, StringKeyPicker} from "../AltDictionary";
import {PropertyBagChangedDelegate} from "../Misc/DelegateTypes";
export class SimplePropertyBag<TKey> {
	private items: Dictionary<TKey, any> = null;
	private removedItems: TKey[] = [];
	private addedItems: TKey[] = [];
	private modifiedItems: TKey[] = [];
	public OnChange: PropertyBagChangedDelegate[] = [];
	get AddedItems(): TKey[] {
		return this.addedItems;
	}
	get RemovedItems(): TKey[] {
		return this.removedItems;
	}
	get ModifiedItems(): TKey[] {
		return this.modifiedItems;
	}


	constructor(keyPicker: StringKeyPicker<TKey>) {
		this.items = new Dictionary<TKey, any>(keyPicker);
	}

	_getItem(key: TKey): any {
        var value: IOutParam<any> = { outValue: null };

		if (this.TryGetValue(key, value)) {
			return value.outValue;
		}
		else {
			return null;
		}
    }

    _setItem(key: TKey, value: any) {
        if (value == null) {
			this.InternalRemoveItem(key);
		}
		else {
			// If the item was to be deleted, the deletion becomes an update.
			if (ArrayHelper.RemoveEntry(this.removedItems, key)) {
				this.InternalAddItemToChangeList(key, this.modifiedItems);
			}
			else {
				// If the property value was not set, we have a newly set property.
				if (!this.ContainsKey(key)) {
					this.InternalAddItemToChangeList(key, this.addedItems);
				}
				else {
					// The last case is that we have a modified property.
					if (this.modifiedItems.indexOf(key) === -1) {
						this.InternalAddItemToChangeList(key, this.modifiedItems);
					}
				}
			}

			this.items.set(key, value);
			this.Changed();
		}
    }

	Changed(): void {
		if (this.OnChange != null) {
			EwsLogging.Assert(false, "SimplePropertyBag.Changed", "OnChange events not fired due to circular calling, todo: fix needed");
			return;
			for (var changeDelegate of this.OnChange) {
				changeDelegate();
			}
		}
	}
	ClearChangeLog(): void {
		this.removedItems.splice(0);
		this.addedItems.splice(0);
		this.modifiedItems.splice(0);
	}
	ContainsKey(key: TKey): boolean { return this.items.containsKey(key); }
	GetEnumerator(): any /*System.Collections.Generic.IEnumerator<System.Collections.Generic.KeyValuePair<TKey, any>>*/ { throw new Error("SimplePropertyBag.ts - GetEnumerator : Not implemented."); }
	InternalAddItemToChangeList(key: TKey, changeList: TKey[]): void {
		if (changeList.indexOf(key) === -1) {
			changeList.push(key);
		}
	}
	InternalRemoveItem(key: TKey): void {
		var value: IOutParam<any> = { outValue: null };

		if (this.TryGetValue(key, value)) {
			this.items.remove(key);
			this.removedItems.push(key);
			this.Changed();
		}
	}
	TryGetValue(key: TKey, value: IOutParam<any>): boolean { return this.items.tryGetValue(key, value); }
}