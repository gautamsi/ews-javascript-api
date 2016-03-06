import {DeleteAttachmentResponse} from "../Core/Responses/DeleteAttachmentResponse";
import {Exception} from "./Exception";
import { ServiceResponseCollection } from '../Core/Responses/ServiceResponseCollection';

import {BatchServiceResponseException} from "./BatchServiceResponseException";
/**
 * Represents an error that occurs when a call to the DeleteAttachment web method fails.
 */
export class DeleteAttachmentException extends BatchServiceResponseException<DeleteAttachmentResponse> {
    /**
     * Initializes a new instance of **DeleteAttachmentException**.
     *
     * @param   {ServiceResponseCollection<DeleteAttachmentResponse>}   serviceResponses   The list of responses to be associated with this exception.
     * @param   {string}   message            The message that describes the error.
     */
    constructor(serviceResponses: ServiceResponseCollection<DeleteAttachmentResponse>, message: string);
    /**
     * Initializes a new instance of **DeleteAttachmentException**.
     *
     * @param   {ServiceResponseCollection<DeleteAttachmentResponse>}   serviceResponses   The list of responses to be associated with this exception.
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(serviceResponses: ServiceResponseCollection<DeleteAttachmentResponse>, message: string, innerException: Exception);
    constructor(serviceResponses: ServiceResponseCollection<DeleteAttachmentResponse>, message: string, innerException?: Exception) {
        if (arguments.length == 2)
            super(serviceResponses, message);
        else
            super(serviceResponses, message, innerException);
    }
}