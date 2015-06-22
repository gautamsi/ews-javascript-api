import {Folder} from "../ServiceObjects/Folders/Folder";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MoveCopyRequest} from "./MoveCopyRequest";
export class MoveCopyFolderRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Folder, TResponse> {
    get FolderIds(): FolderIdWrapperList { return this.folderIds; }
    private folderIds: FolderIdWrapperList = new FolderIdWrapperList();
    
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

    AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("MoveCopyFolderRequest.ts - AddIdsToJson : Not implemented."); }
    GetExpectedResponseMessageCount(): number { return this.FolderIds.Count; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParamCollection(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    }
    WriteIdsToXml(writer: EwsServiceXmlWriter): void {
        this.folderIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.FolderIds);
    }
}


