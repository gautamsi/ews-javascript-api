import {MoveCopyFolderRequest} from "./MoveCopyFolderRequest";
import {ExchangeService} from "../ExchangeService";
import {MoveCopyFolderResponse} from "../Responses/MoveCopyFolderResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
export class MoveFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse { throw new Error("MoveFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MoveFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("MoveFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("MoveFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("MoveFolderRequest.ts - GetXmlElementName : Not implemented."); }
}


//}




