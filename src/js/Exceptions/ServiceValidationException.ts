import {Exception} from "./Exception";

import {ServiceLocalException} from "./ServiceLocalException";
/**
 * Represents an error that occurs when a validation check fails.
 * 
 * @sealed
 */
export class ServiceValidationException extends ServiceLocalException {

    /**
     * Initializes a new instance of **ServiceValidationException**.
     */
    constructor();
    /**
     * Initializes a new instance of **ServiceValidationException**.
     *
     * @param   {string}   message            The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of **ServiceValidationException**.
     *
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(message: string, innerException: Exception);
    constructor(message: string = null, innerException: Exception = null) {
        super(message, innerException);
    }
}