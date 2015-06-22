import {GetItemRequestBase} from "./GetItemRequestBase";
import {ExchangeService} from "../ExchangeService";
import {GetItemResponse} from "../Responses/GetItemResponse";
export class GetItemRequest extends GetItemRequestBase<GetItemResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetItemResponse { throw new Error("GetItemRequest.ts - CreateServiceResponse : Not implemented."); }
}
