import {MoveCopyItemRequest} from "./MoveCopyItemRequest";
import {ExchangeService} from "../ExchangeService";
import {MoveCopyItemResponse} from "../Responses/MoveCopyItemResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
export class CopyItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse { throw new Error("CopyItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CopyItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("CopyItemRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("CopyItemRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("CopyItemRequest.ts - GetXmlElementName : Not implemented."); }
}


//}



