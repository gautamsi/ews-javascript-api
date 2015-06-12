import {ServiceResponse} from "../Core/Responses/ServiceResponse";
import {ServiceResponseCollection} from "../Core/Responses/ServiceResponseCollection";
import {Exception} from "./Exception";
import {ServiceRemoteException} from "./ServiceRemoteException";
export class BatchServiceResponseException<TResponse extends ServiceResponse> extends ServiceRemoteException {
    ServiceResponses: ServiceResponseCollection<TResponse>;
    private responses: ServiceResponseCollection<TResponse>;
}