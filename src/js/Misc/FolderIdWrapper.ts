import FolderId = require("../ComplexProperties/FolderId");
import {EwsLogging} from "../Core/EwsLogging";
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");

import AbstractFolderIdWrapper = require("./AbstractFolderIdWrapper");
class FolderIdWrapper extends AbstractFolderIdWrapper {
    private folderId: FolderId;

    constructor(folderId: FolderId) {
        super();
        EwsLogging.Assert(
            folderId != null,
            "FolderIdWrapper.ctor",
            "folderId is null");

        this.folderId = folderId;
    }

    //InternalToJson(service: ExchangeService): any{ throw new Error("FolderIdWrapper.ts - InternalToJson : Not implemented.");}
    Validate(version: ExchangeVersion): void { this.folderId.Validate(version); }
    WriteToXml(writer: EwsServiceXmlWriter): void { this.folderId.WriteToXml(writer); }
}
export = FolderIdWrapper;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
