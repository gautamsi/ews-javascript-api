			
 class ChangeCollection<TChange> {
	Count: number;
	Item: TChange;
	SyncState: string;
	MoreChangesAvailable: boolean;
	private changes: TChange[] /*System.Collections.Generic.List<TChange>*/;
	private syncState: string;
	private moreChangesAvailable: boolean;
	Add(change: TChange): void{ throw new Error("Not implemented.");}
	GetEnumerator(): TChange[] /*System.Collections.Generic.IEnumerator<TChange>*/{ throw new Error("Not implemented.");}
}
export = ChangeCollection;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			