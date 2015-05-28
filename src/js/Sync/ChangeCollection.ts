			
 class ChangeCollection<TChange> {
	Count: number;
	Item: TChange;
	SyncState: string;
	MoreChangesAvailable: boolean;
	private changes: TChange[] /*System.Collections.Generic.List<TChange>*/;
	private syncState: string;
	private moreChangesAvailable: boolean;
	Add(change: TChange): void{ throw new Error("ChangeCollection.ts - Add : Not implemented.");}
	GetEnumerator(): TChange[] /*System.Collections.Generic.IEnumerator<TChange>*/{ throw new Error("ChangeCollection.ts - GetEnumerator : Not implemented.");}
}
export = ChangeCollection;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
