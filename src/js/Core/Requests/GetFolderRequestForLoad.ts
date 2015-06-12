import {GetFolderRequestBase} from "./GetFolderRequestBase";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
export class GetFolderRequestForLoad extends GetFolderRequestBase<ServiceResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("GetFolderRequestForLoad.ts - CreateServiceResponse : Not implemented."); }
}
