import {EwsLogging} from "../Core/EwsLogging";
import {ArgumentOutOfRangeException} from "../Exceptions/ArgumentException";
import {Strings} from "../Strings";

import {Change} from "./Change";
/**
 * Represents a collection of changes as returned by a synchronization operation.
 *
 * @sealed
 * @typeparam	{TChange}	Type representing the type of change (e.g. FolderChange or ItemChange)
 */
export class ChangeCollection<TChange extends Change> {

	___implementsInterface: string[] = ["IEnumerable<TChange>"];
    ___typeName: string = "ChangeCollection";
    ___typeGenerics: string[] = ["Change"];


	private changes: TChange[] = [];
	private syncState: string = null;
	private moreChangesAvailable: boolean = false;

	/**
	 * Gets the number of changes in the collection.
	 */
	get Count(): number {
		return this.changes.length;
	}

	/**
	 * Gets the SyncState blob returned by a synchronization operation.
	 */
	get SyncState(): string {
		return this.syncState;
	}
	set SyncState(value: string) {
		this.syncState = value;
	}

	/**
	 * Gets a value indicating whether the there are more changes to be synchronized from the server.
	 */
	get MoreChangesAvailable(): boolean {
		return this.moreChangesAvailable;
	}
	set MoreChangesAvailable(value: boolean) {
		this.moreChangesAvailable = value;
	}

	/**
	 * @internal Initializes a new instance of the **ChangeCollection<TChange>** class. 
	 */
	constructor() {
	}

	/**
     * Gets an individual change from the change collection.
     *
     * @param   {number}   index   Zero-based index.
     * @return  {TComplexProperty}		An single change.
     */
    __thisIndexer(index: number): TChange {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }
        return this.changes[index];
    }

	/**
	 * @internal Adds the specified change.
	 *
	 * @param   {TChange}   change   The change.
	 */
	Add(change: TChange): void {
		EwsLogging.Assert(
			change != null,
			"ChangeList.Add",
			"change is null");

		this.changes.push(change);
	}


	//GetEnumerator(): TChange[] /*System.Collections.Generic.IEnumerator<TChange>*/ { throw new Error("ChangeCollection.ts - GetEnumerator : Not implemented."); }
}