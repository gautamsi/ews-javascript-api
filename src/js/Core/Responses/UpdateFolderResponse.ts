import {Folder} from "../ServiceObjects/Folders/Folder";
import {ExchangeService} from "../ExchangeService";
import {ServiceResult} from "../../Enumerations/ServiceResult";
import {EwsLogging} from "../EwsLogging";
import {ServiceResponse} from "./ServiceResponse";
export class UpdateFolderResponse extends ServiceResponse {
    private folder: Folder;
    constructor(folder: Folder) {
        super();
        EwsLogging.Assert(
            folder != null,
            "UpdateFolderResponse.ctor",
            "folder is null");
        this.folder = folder;
    }
    GetObjectInstance(session: ExchangeService, xmlElementName: string): Folder { return this.folder; }
    Loaded(): void {
        if (this.Result == ServiceResult.Success) {
            this.folder.ClearChangeLog();
        }
    }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        //debugger;//todo: check if this is needed. 
        //throw new Error("UpdateFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); 
    }
}

