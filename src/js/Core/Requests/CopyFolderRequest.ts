import {MoveCopyFolderRequest} from "./MoveCopyFolderRequest";
import {ExchangeService} from "../ExchangeService";
import {MoveCopyFolderResponse} from "../Responses/MoveCopyFolderResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
export class CopyFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse { throw new Error("CopyFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CopyFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("CopyFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("CopyFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("CopyFolderRequest.ts - GetXmlElementName : Not implemented."); }
}



//}




