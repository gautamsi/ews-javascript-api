import {Folder} from "../ServiceObjects/Folders/Folder";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {MoveCopyRequest} from "./MoveCopyRequest";
import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class MoveCopyFolderRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Folder, TResponse> {
    FolderIds: FolderIdWrapperList;
    private folderIds: FolderIdWrapperList;
    AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("MoveCopyFolderRequest.ts - AddIdsToJson : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("MoveCopyFolderRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    Validate(): any { throw new Error("MoveCopyFolderRequest.ts - Validate : Not implemented."); }
    WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MoveCopyFolderRequest.ts - WriteIdsToXml : Not implemented."); }
}



//}




