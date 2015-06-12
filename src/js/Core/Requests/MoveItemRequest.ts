import {MoveCopyItemRequest} from "./MoveCopyItemRequest";
import {ExchangeService} from "../ExchangeService";
import {MoveCopyItemResponse} from "../Responses/MoveCopyItemResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
export class MoveItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse { throw new Error("MoveItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MoveItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("MoveItemRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("MoveItemRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("MoveItemRequest.ts - GetXmlElementName : Not implemented."); }
}


//}



