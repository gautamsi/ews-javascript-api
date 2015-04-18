import ServiceResponse = require("../Core/Responses/ServiceResponse");

import ServiceError = require("../Enumerations/ServiceError");

import ExtensionMethods = require("../ExtensionMethods");
import String = ExtensionMethods.stringFormatting
import Exception = require("./Exception");
import ServiceRemoteException = require("./ServiceRemoteException");
class ServiceResponseException extends ServiceRemoteException {
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
            if (!String.IsNullOrEmpty(exceptionClass) && !String.IsNullOrEmpty(exceptionMessage) && !String.IsNullOrEmpty(stackTrace)) {
                return String.Format(
                //Strings.ServerErrorAndStackTraceDetails,
                    "server error and stack tract details - Message: {0}\n, Class: {1}\n, Exception message: {2}\n, stack trace: {3}",
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

export = ServiceResponseException;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;