import {ServiceResponse} from "../Core/Responses/ServiceResponse";
import {EwsLogging} from "../Core/EwsLogging";
import {ServiceResponseCollection} from "../Core/Responses/ServiceResponseCollection";
import {Exception} from "./Exception";

import {ServiceRemoteException} from "./ServiceRemoteException";
/**
 * Represents a remote service exception that can have multiple service responses.
 * 
 * @typeParam {TResponse}       The type of the response.
 */
export class BatchServiceResponseException<TResponse extends ServiceResponse> extends ServiceRemoteException {
    /**
     * The list of responses returned by the web method.
     */
    private responses: ServiceResponseCollection<TResponse>;
    /**
     * Gets a list of responses returned by the web method.
     */
    get ServiceResponses(): ServiceResponseCollection<TResponse> { return this.ServiceResponses; }
    
    /**
     * Initializes a new instance of **BatchServiceResponseException**.
     *
     * @param   {ServiceResponseCollection<DeleteAttachmentResponse>}   serviceResponses   The list of responses to be associated with this exception.
     * @param   {string}   message            The message that describes the error.
     */
    constructor(serviceResponses: ServiceResponseCollection<TResponse>, message: string);
    /**
     * Initializes a new instance of **BatchServiceResponseException**.
     *
     * @param   {ServiceResponseCollection<TResponse>}   serviceResponses   The list of responses to be associated with this exception.
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(serviceResponses: ServiceResponseCollection<TResponse>, message: string, innerException: Exception);
    constructor(serviceResponses: ServiceResponseCollection<TResponse>, message: string, innerException?: Exception) {
        if (arguments.length == 2) {
            super(message);
        }
        else {
            super(message, innerException);
        }

        EwsLogging.Assert(
            serviceResponses != null,
            "BatchServiceResponseException.ctor",
            "serviceResponses is null");
            this.responses = serviceResponses;
    }
}