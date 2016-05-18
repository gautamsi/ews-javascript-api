import {Exception} from "./Exception";

import {ServiceLocalException} from "./ServiceLocalException";
/**
 * Represents an error that occurs when a request cannot be handled due to a service version mismatch.
 * 
 * @sealed
 */
export class ServiceVersionException extends ServiceLocalException {

    /**
     * Initializes a new instance of **ServiceVersionException**.
     */
    constructor();
    /**
     * Initializes a new instance of **ServiceVersionException**.
     *
     * @param   {string}   message            The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of **ServiceVersionException**.
     *
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(message: string, innerException: Exception);
    constructor(message: string = null, innerException: Exception = null) {
        super(message, innerException);
    }
}