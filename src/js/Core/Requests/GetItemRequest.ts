import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeService} from "../ExchangeService";
import {GetItemResponse} from "../Responses/GetItemResponse";
import {GetItemRequestBase} from "./GetItemRequestBase";
/** @internal */
export class GetItemRequest extends GetItemRequestBase<GetItemResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetItemResponse { return new GetItemResponse(this.ItemIds[responseIndex], this.PropertySet); }
}