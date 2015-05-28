import Folder = require("../ServiceObjects/Folders/Folder");
import SyncResponse = require("./SyncResponse");
import FolderChange = require("../../Sync/FolderChange");
			
 class SyncFolderHierarchyResponse extends SyncResponse<Folder, FolderChange> {
	SummaryPropertiesOnly: boolean;
	CreateChangeInstance(): FolderChange{ throw new Error("SyncFolderHierarchyResponse.ts - CreateChangeInstance : Not implemented.");}
	GetChangeElementName(): string{ throw new Error("SyncFolderHierarchyResponse.ts - GetChangeElementName : Not implemented.");}
	GetChangeIdElementName(): string{ throw new Error("SyncFolderHierarchyResponse.ts - GetChangeIdElementName : Not implemented.");}
	GetIncludesLastInRangeXmlElementName(): string{ throw new Error("SyncFolderHierarchyResponse.ts - GetIncludesLastInRangeXmlElementName : Not implemented.");}
}
export = SyncFolderHierarchyResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
