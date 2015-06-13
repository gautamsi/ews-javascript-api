import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {ExchangeService} from "../ExchangeService";
import {CreateResponseObjectResponse} from "../Responses/CreateResponseObjectResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {CreateItemRequestBase} from "./CreateItemRequestBase";
export class CreateResponseObjectRequest extends CreateItemRequestBase<ServiceObject, CreateResponseObjectResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: any) {
        super(service, errorHandlingModeServiceErrorHandling);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateResponseObjectResponse { return new CreateResponseObjectResponse(); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
}
