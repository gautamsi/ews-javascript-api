import {Item} from "../ServiceObjects/Items/Item";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {CreateItemResponse} from "../Responses/CreateItemResponse";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {CreateItemRequestBase} from "./CreateItemRequestBase";
/** @internal */
export class CreateItemRequest extends CreateItemRequestBase<Item, ServiceResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling) {
        super(service, errorHandlingModeServiceErrorHandling);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { return new CreateItemResponse(this.Items[responseIndex]); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    Validate(): void {
        super.Validate();

        // Validate each item.
        for (var item of this.Items) {
            item.Validate();
        }
    }
}