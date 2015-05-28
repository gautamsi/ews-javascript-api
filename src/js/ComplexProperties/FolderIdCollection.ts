import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import FolderId = require("./FolderId");
import WellKnownFolderName = require("../Enumerations/WellKnownFolderName");

class FolderIdCollection extends ComplexPropertyCollection<FolderId> {
    Add(folderId: FolderId): any { throw new Error("FolderIdCollection.ts - Add : Not implemented."); }
    //Add(folderName: WellKnownFolderName): FolderId { throw new Error("FolderIdCollection.ts - Add : Not implemented."); }
    Clear(): any { throw new Error("FolderIdCollection.ts - Clear : Not implemented."); }
    CreateComplexProperty(xmlElementName: string): FolderId { throw new Error("FolderIdCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): FolderId { throw new Error("FolderIdCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: FolderId): string { throw new Error("FolderIdCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
    Remove(folderId: FolderId): boolean { throw new Error("FolderIdCollection.ts - Remove : Not implemented."); }
    //Remove(folderName: WellKnownFolderName): boolean { throw new Error("FolderIdCollection.ts - Remove : Not implemented."); }
    RemoveAt(index: number): any { throw new Error("FolderIdCollection.ts - RemoveAt : Not implemented."); }
}
export = FolderIdCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
