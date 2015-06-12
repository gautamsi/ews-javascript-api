import {Item} from "../ServiceObjects/Items/Item";
import {CreateItemRequestBase} from "./CreateItemRequestBase";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
export class CreateItemRequest extends CreateItemRequestBase<Item, ServiceResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("CreateItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CreateItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    Validate(): any { throw new Error("CreateItemRequest.ts - Validate : Not implemented."); }
}


//}



