import Change = require("./Change");
import Folder = require("../Core/ServiceObjects/Folders/Folder");
import FolderId = require("../ComplexProperties/FolderId");
import ServiceId = require("../ComplexProperties/ServiceId");
			
 class FolderChange extends Change {
	Folder: Folder;
	FolderId: FolderId;
	CreateId(): ServiceId{ throw new Error("Not implemented.");}
}
export = FolderChange;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
