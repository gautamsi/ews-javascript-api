import {Exception} from "./Exception";
import {ServiceError} from "../Enumerations/ServiceError";
import {ServiceResponse} from "../Core/Responses/ServiceResponse";
import {StringHelper} from "../ExtensionMethods";
import {Strings} from "../Strings";

import {ServiceRemoteException} from "./ServiceRemoteException";
/**
 * Represents a remote service exception that has a single response.
 */
export class ServiceResponseException extends ServiceRemoteException {
    
    /**
     * Error details Value keys
     */
    private static ExceptionClassKey: string = "ExceptionClass";
    private static ExceptionMessageKey: string = "ExceptionMessage";
    private static StackTraceKey: string = "StackTrace";

    /**
     * ServiceResponse when service operation failed remotely.
     */
    private response: ServiceResponse;
    
    /**
     * Gets the ServiceResponse for the exception.
     */
    get Response(): ServiceResponse { 
        return this.response; 
    }
    
    /**
     * Gets the service error code.
     */
    get ErrorCode(): ServiceError { 
        return this.response ? this.response.ErrorCode : null; 
    }
    
    /**
     * Gets a message that describes the current exception.
     * 
     * @returns The error message that explains the reason for the exception.
     */
    get Message(): string {
        // Special case for Internal Server Error. If the server returned
        // stack trace information, include it in the exception message.
        if (this.Response.ErrorCode == ServiceError.ErrorInternalServerError) {
            var exceptionClass = this.Response.ErrorDetails.get(ServiceResponseException.ExceptionClassKey);
            var exceptionMessage = this.Response.ErrorDetails.get(ServiceResponseException.ExceptionMessageKey);
            var stackTrace = this.Response.ErrorDetails.get(ServiceResponseException.StackTraceKey);

            if (!StringHelper.IsNullOrEmpty(exceptionClass) && !StringHelper.IsNullOrEmpty(exceptionMessage) && !StringHelper.IsNullOrEmpty(stackTrace)) {
                return StringHelper.Format(
                    Strings.ServerErrorAndStackTraceDetails,
                    this.Response.ErrorMessage,
                    exceptionClass,
                    exceptionMessage,
                    stackTrace);
            }
        }

        return this.Response.ErrorMessage;
    }

    /**
     * @internal Initializes a new instance of the **ServiceResponseException** class.
     *
     * @param   {ServiceResponse}   response   The ServiceResponse when service operation failed remotely.
     */
    constructor(response: ServiceResponse) {
        super();
        this.response = response;
    }
}