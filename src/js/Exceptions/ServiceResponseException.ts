import {Strings} from "../Strings";
import {ServiceResponse} from "../Core/Responses/ServiceResponse";

import {ServiceError} from "../Enumerations/ServiceError";

import {StringHelper} from "../ExtensionMethods";
import {Exception} from "./Exception";
import {ServiceRemoteException} from "./ServiceRemoteException";
export class ServiceResponseException extends ServiceRemoteException {
    private static ExceptionClassKey: string = "ExceptionClass";
    private static ExceptionMessageKey: string = "ExceptionMessage";
    private static StackTraceKey: string = "StackTrace";

    get Response(): ServiceResponse { return this.response; }
    get ErrorCode(): ServiceError { return this.response ? this.response.ErrorCode : null; }
    get Message(): string {
        // Special case for Internal Server Error. If the server returned
        // stack trace information, include it in the exception message.
        if (this.Response.ErrorCode == ServiceError.ErrorInternalServerError) {
            var exceptionClass = this.Response.ErrorDetails[ServiceResponseException.ExceptionClassKey];
            var exceptionMessage = this.Response.ErrorDetails[ServiceResponseException.ExceptionMessageKey];
            var stackTrace = this.Response.ErrorDetails[ServiceResponseException.StackTraceKey];

            //if (this.Response.ErrorDetails.TryGetValue(ExceptionClassKey, out exceptionClass) &&
            //    this.Response.ErrorDetails.TryGetValue(ExceptionMessageKey, out exceptionMessage) &&
            //    this.Response.ErrorDetails.TryGetValue(StackTraceKey, out stackTrace)) {
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

    private response: ServiceResponse;

    constructor(response: ServiceResponse) {
        super(response ? response.ErrorMessage : "", undefined);
        this.response = response;
    }

    //constructor(message?: string, innerException?: any) {
    //    //todo: implement base class
    //    super();

    //}

}