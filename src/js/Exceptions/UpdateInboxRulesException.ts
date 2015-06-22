import {ServiceError} from "../Enumerations/ServiceError";
import {RuleOperationErrorCollection} from "../ComplexProperties/RuleOperationErrorCollection";
import {ServiceResponse} from "../Core/Responses/ServiceResponse";

import {Exception} from "./Exception";
import {ServiceRemoteException} from "./ServiceRemoteException";
export class UpdateInboxRulesException extends ServiceRemoteException {
    ServiceResponse: ServiceResponse;
    Errors: RuleOperationErrorCollection;
    ErrorCode: ServiceError;
    ErrorMessage: string;
    private serviceResponse: ServiceResponse;
    private errors: RuleOperationErrorCollection;
}