import {ExchangeService} from "../ExchangeService";
import {GetItemResponse} from "../Responses/GetItemResponse";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {GetItemRequestBase} from "./GetItemRequestBase";
/** @internal */
export class GetItemRequestForLoad extends GetItemRequestBase<ServiceResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling) {
        super(service, errorHandlingModeServiceErrorHandling);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { return new GetItemResponse(this.ItemIds.__thisIndexer(responseIndex), this.PropertySet); }
}