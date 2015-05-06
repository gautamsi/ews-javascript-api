import Folder = require("../Core/ServiceObjects/Folders/Folder");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import {EwsLogging} from "../Core/EwsLogging";

import AbstractFolderIdWrapper = require("./AbstractFolderIdWrapper");
class FolderWrapper extends AbstractFolderIdWrapper {
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
    //InternalToJson(service: ExchangeService): void{ throw new Error("Not implemented.");}
    WriteToXml(writer: EwsServiceXmlWriter): void { this.folder.Id.WriteToXml(writer); }
}
export = FolderWrapper;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
