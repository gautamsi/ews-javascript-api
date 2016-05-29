import {Exception} from "./Exception";
import {RuleOperation} from "../ComplexProperties/RuleOperation";
import {RuleOperationErrorCollection} from "../ComplexProperties/RuleOperationErrorCollection";
import {ServiceError} from "../Enumerations/ServiceError";
import {ServiceResponse} from "../Core/Responses/ServiceResponse";
import {UpdateInboxRulesResponse} from "../Core/Responses/UpdateInboxRulesResponse";

import {ServiceRemoteException} from "./ServiceRemoteException";
/**
 * Represents an exception thrown when an error occurs as a result of calling the UpdateInboxRules operation.
 * 
 * @sealed
 */
export class UpdateInboxRulesException extends ServiceRemoteException {

    /**
     * ServiceResponse when service operation failed remotely.
     */
    private serviceResponse: ServiceResponse = null;

    /**
     * Rule operation error collection.
     */
    private errors: RuleOperationErrorCollection = null;

    /**
     * Gets the ServiceResponse for the exception.
     */
    get ServiceResponse(): ServiceResponse {
        return this.serviceResponse;
    }

    /**
     * Gets the rule operation error collection.
     */
    get Errors(): RuleOperationErrorCollection {
        return this.errors;
    }

    /**
     * Gets the rule operation error code.
     */
    get ErrorCode(): ServiceError {
        return this.serviceResponse.ErrorCode;
    }

    /**
     * Gets the rule operation error message.
     */
    get ErrorMessage(): string {
        return this.serviceResponse.ErrorMessage;
    }

    /**
     * Initializes a new instance of the **UpdateInboxRulesException** class.
     *
     * @param   {UpdateInboxRulesResponse}  serviceResponse   The rule operation service response.
     * @param   {RuleOperation[]}           ruleOperations    The original operations.
     */
    constructor(serviceResponse: UpdateInboxRulesResponse, ruleOperations: RuleOperation[]) {
        super();
        this.serviceResponse = serviceResponse;
        this.errors = serviceResponse.Errors;
        for (let error of this.errors.Items) {
            error.SetOperationByIndex(ruleOperations);
        }
    }
}