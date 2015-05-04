import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import FolderId = require("./FolderId");
import WellKnownFolderName = require("../Enumerations/WellKnownFolderName");

class FolderIdCollection extends ComplexPropertyCollection<FolderId> {
    Add(folderId: FolderId): any { throw new Error("Not implemented."); }
    Add(folderName: WellKnownFolderName): FolderId { throw new Error("Not implemented."); }
    Clear(): any { throw new Error("Not implemented."); }
    CreateComplexProperty(xmlElementName: string): FolderId { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): FolderId { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: FolderId): string { throw new Error("Not implemented."); }
    Remove(folderId: FolderId): boolean { throw new Error("Not implemented."); }
    Remove(folderName: WellKnownFolderName): boolean { throw new Error("Not implemented."); }
    RemoveAt(index: number): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
