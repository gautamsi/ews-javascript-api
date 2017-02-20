import { ArgumentOutOfRangeException } from "../Exceptions/ArgumentException";
import { EwsLogging } from "../Core/EwsLogging";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { Strings } from "../Strings";

import { Change } from "./Change";
/**
 * Represents a collection of changes as returned by a synchronization operation.
 *
 * @sealed
 * @typeparam	{TChange}	Type representing the type of change (e.g. FolderChange or ItemChange)
 */
export class ChangeCollection<TChange extends Change> implements IEnumerable<TChange>{

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
     * @return  {TChange}		An single change.
     */
	_getItem(index: number): TChange {
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

	/**
     *  Returns an enumerator that iterates through the collection. this case this.changes
     */
	GetEnumerator(): TChange[] {
		return this.changes;
	}
}