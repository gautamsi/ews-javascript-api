import {DeleteRequest} from "./DeleteRequest";
import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class DeleteFolderRequest extends DeleteRequest<ServiceResponse> {
    FolderIds: FolderIdWrapperList;
    private folderIds: FolderIdWrapperList;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("DeleteFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("DeleteFolderRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("DeleteFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("DeleteFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("DeleteFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("DeleteFolderRequest.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(body: JsonObject): any { throw new Error("DeleteFolderRequest.ts - InternalToJson : Not implemented."); }
    Validate(): any { throw new Error("DeleteFolderRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DeleteFolderRequest.ts - WriteElementsToXml : Not implemented."); }
}




//}




