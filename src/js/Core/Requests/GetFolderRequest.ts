
import {GetFolderResponse} from "../Responses/GetFolderResponse";
import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";

import {GetFolderRequestBase} from "./GetFolderRequestBase";
export class GetFolderRequest extends GetFolderRequestBase<GetFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetFolderResponse {
        return new GetFolderResponse(this.FolderIds.__thisIndexer(responseIndex).GetFolder(), this.PropertySet);
    }
}
