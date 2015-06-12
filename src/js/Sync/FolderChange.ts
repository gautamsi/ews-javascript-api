import {Change} from "./Change";
import {Folder} from "../Core/ServiceObjects/Folders/Folder";
import {FolderId} from "../ComplexProperties/FolderId";
import {ServiceId} from "../ComplexProperties/ServiceId";
export class FolderChange extends Change {
	Folder: Folder;
	FolderId: FolderId;
	CreateId(): ServiceId{ throw new Error("FolderChange.ts - CreateId : Not implemented.");}
}






			

