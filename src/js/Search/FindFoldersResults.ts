class FindFoldersResults {   //: IEnumerable<Folder>
TotalCount: number;
NextPageOffset: number;
MoreAvailable: boolean;
Folders: Folder[];//System.Collections.ObjectModel.Collection<Folder>;
private totalCount: number;
private nextPageOffset: number;
private moreAvailable: boolean;
private folders: Folder[];//System.Collections.ObjectModel.Collection<Folder>;
GetEnumerator(): any { throw new Error("Not implemented."); }
}
export = FindFoldersResults;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
