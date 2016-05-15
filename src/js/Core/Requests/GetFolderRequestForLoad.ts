import {GetFolderResponse} from "../Responses/GetFolderResponse";
import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {GetFolderRequestBase} from "./GetFolderRequestBase";
/** @internal */
export class GetFolderRequestForLoad extends GetFolderRequestBase<ServiceResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse {
        return new GetFolderResponse(this.FolderIds.__thisIndexer(responseIndex).GetFolder(), this.PropertySet);
    }
}
