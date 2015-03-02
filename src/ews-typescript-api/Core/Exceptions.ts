//import enums = require("../Enums");
﻿
module Microsoft.Exchange.WebServices.Data {
    export class ServiceResponseException extends ServiceRemoteException {
        private static ExceptionClassKey: string = "ExceptionClass";
        private static ExceptionMessageKey: string = "ExceptionMessage";
        private static StackTraceKey: string = "StackTrace";

        get Response(): ServiceResponse  { return this.response; }
        get ErrorCode(): /*enums.Data.*/ServiceError { return this.response ? this.response.ErrorCode : null; }
        get Message(): string {
            // Special case for Internal Server Error. If the server returned
            // stack trace information, include it in the exception message.
            if (this.Response.ErrorCode == /*enums.Data.*/ServiceError.ErrorInternalServerError) {
                var exceptionClass = this.Response.ErrorDetails[ServiceResponseException.ExceptionClassKey];
                var exceptionMessage = this.Response.ErrorDetails[ServiceResponseException.ExceptionMessageKey];
                var stackTrace = this.Response.ErrorDetails[ServiceResponseException.StackTraceKey];

                //if (this.Response.ErrorDetails.TryGetValue(ExceptionClassKey, out exceptionClass) &&
                //    this.Response.ErrorDetails.TryGetValue(ExceptionMessageKey, out exceptionMessage) &&
                //    this.Response.ErrorDetails.TryGetValue(StackTraceKey, out stackTrace)) {
                if (!string.IsNullOrEmpty(exceptionClass) && !string.IsNullOrEmpty(exceptionMessage) && !string.IsNullOrEmpty(stackTrace)){
                    return string.Format(
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
        //    //todo: implement base export class
        //    super();

        //}

    }
    export class ServiceValidationException extends ServiceLocalException {
    }
    export class ServiceVersionException extends ServiceLocalException {
    }
    export class ServiceXmlDeserializationException extends ServiceLocalException {
    }
    export class ServiceXmlSerializationException extends ServiceLocalException {
        constructor(message?: string, innerException?: any) {
            //todo: implement base export class
            super(message, innerException);

        }
    }
    export class ServiceRemoteException implements Error {// extends System.Exception {
        //todo: implement System.Exception
        name: string;
        message: string;

        constructor(message: string, innerException: any) {
            this.message = message;
        }


    }
    export class ServiceRequestException extends ServiceRemoteException {
    }

    export class ServiceLocalException extends Exception {// extends System.Exception {
        constructor(message: string, innerException?: Exception) {
            super(message, innerException);
            //this.message = message;
        }
    }
    export class Exception {// implements Error {
        //private name: string;
        //private message: string;
        Message: string;
        InnerException: Exception;
        constructor(message: string, innerException?: Exception) {
            this.InnerException = innerException;
            this.Message = message;
        }

    }


    export class AccountIsLockedException extends ServiceRemoteException {
        AccountUnlockUrl: System.Uri;
    }
    export class AutodiscoverLocalException extends ServiceLocalException {
    }
    export class BatchServiceResponseException<TResponse> extends ServiceRemoteException {
        ServiceResponses: ServiceResponseCollection<TResponse>;
        private responses: ServiceResponseCollection<TResponse>;
    }
    export class CreateAttachmentException extends BatchServiceResponseException<CreateAttachmentResponse> {
    }
    export class DeleteAttachmentException extends BatchServiceResponseException<DeleteAttachmentResponse> {
    }
    export class JsonDeserializationNotImplementedException extends ServiceLocalException {
    }
    export class JsonSerializationNotImplementedException extends Exception { //System.Exception {
    }
    export class PropertyException extends ServiceLocalException {
        Name: string;
        //private name: string;
        constructor(message: string, name: string, innerException?: Exception) {
            super(message, innerException);
        }
    }
    export class ServerBusyException extends ServiceResponseException {
        private static BackOffMillisecondsKey: string = "BackOffMilliseconds";
        BackOffMilliseconds: number;
        private backOffMilliseconds: number;
    }
    export class ServiceJsonDeserializationException extends ServiceLocalException {
    }
    export class ServiceObjectPropertyException extends PropertyException {
        PropertyDefinition: PropertyDefinitionBase;
        //private propertyDefinition: PropertyDefinitionBase;
        constructor(message: string, propertyDefinition: PropertyDefinitionBase, innerException?: Exception) {
            super(message, propertyDefinition.GetPrintableName(), innerException);
            this.PropertyDefinition = propertyDefinition;
        }
    }
    export class TimeZoneConversionException extends ServiceLocalException {
    }
    export class UpdateInboxRulesException extends ServiceRemoteException {
        ServiceResponse: ServiceResponse;
        Errors: RuleOperationErrorCollection;
        ErrorCode: ServiceError;
        ErrorMessage: string;
        private serviceResponse: ServiceResponse;
        private errors: RuleOperationErrorCollection;
    }
    export class XmlDtdException extends System.Xml.XmlException {
        Message: string;
    }

}
