import {FolderId} from "../ComplexProperties/FolderId";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";

import {AbstractFolderIdWrapper} from "./AbstractFolderIdWrapper";
export class FolderIdWrapper extends AbstractFolderIdWrapper {
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