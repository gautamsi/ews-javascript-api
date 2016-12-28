import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class ManagedFolderInformation extends ComplexProperty {
    CanDelete: boolean;
    CanRenameOrMove: boolean;
    MustDisplayComment: boolean;
    HasQuota: boolean;
    IsManagedFoldersRoot: boolean;
    ManagedFolderId: string;
    Comment: string;
    StorageQuota: number;
    FolderSize: number;
    HomePage: string;
    private canDelete: boolean;
    private canRenameOrMove: boolean;
    private mustDisplayComment: boolean;
    private hasQuota: boolean;
    private isManagedFoldersRoot: boolean;
    private managedFolderId: string;
    private comment: string;
    private storageQuota: number;
    private folderSize: number;
    private homePage: string;
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ManagedFolderInformation.ts - LoadFromJson : Not implemented."); }
    /**@internal */
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ManagedFolderInformation.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



