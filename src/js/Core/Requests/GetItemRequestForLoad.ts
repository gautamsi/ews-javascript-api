import {GetItemRequestBase} from "./GetItemRequestBase";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
export class GetItemRequestForLoad extends GetItemRequestBase<ServiceResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("GetItemRequestForLoad.ts - CreateServiceResponse : Not implemented."); }
}


//}



