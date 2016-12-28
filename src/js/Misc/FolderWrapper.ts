import {Folder} from "../Core/ServiceObjects/Folders/Folder";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsLogging} from "../Core/EwsLogging";

import {AbstractFolderIdWrapper} from "./AbstractFolderIdWrapper";
export class FolderWrapper extends AbstractFolderIdWrapper {
    private folder: Folder;

    constructor(folder: Folder) {
        super();
        EwsLogging.Assert(
            folder != null,
            "FolderWrapper.ctor",
            "folder is null");
        EwsLogging.Assert(
            !folder.IsNew,
            "FolderWrapper.ctor",
            "folder does not have an Id");

        this.folder = folder;
    }

    GetFolder(): Folder { return this.folder; }
    //InternalToJson(service: ExchangeService): void{ throw new Error("FolderWrapper.ts - InternalToJson : Not implemented.");}
    /**@internal */
    WriteToXml(writer: EwsServiceXmlWriter): void { this.folder.Id.WriteToXml(writer); }
}