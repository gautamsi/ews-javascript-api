import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {CreateItemRequestBase} from "./CreateItemRequestBase";
import {ExchangeService} from "../ExchangeService";
import {CreateResponseObjectResponse} from "../Responses/CreateResponseObjectResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
export class CreateResponseObjectRequest extends CreateItemRequestBase<ServiceObject, CreateResponseObjectResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateResponseObjectResponse { throw new Error("CreateResponseObjectRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CreateResponseObjectRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
}


//}



