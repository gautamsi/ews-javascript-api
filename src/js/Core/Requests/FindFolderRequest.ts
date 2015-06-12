import {FindRequest} from "./FindRequest";
import {ExchangeService} from "../ExchangeService";
import {FindFolderResponse} from "../Responses/FindFolderResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
export class FindFolderRequest extends FindRequest<FindFolderResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): FindFolderResponse { throw new Error("FindFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("FindFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("FindFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("FindFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("FindFolderRequest.ts - GetXmlElementName : Not implemented."); }
}
