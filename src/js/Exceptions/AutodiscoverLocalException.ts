import {Exception} from "./Exception";
import {ServiceLocalException} from "./ServiceLocalException";
export class AutodiscoverLocalException extends ServiceLocalException {

    /**
     * Initializes a new instance of **AutodiscoverLocalException**.
     */
    constructor();
    /**
     * Initializes a new instance of **AutodiscoverLocalException**.
     *
     * @param   {string}   message            The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of **AutodiscoverLocalException**.
     *
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(message: string, innerException: Exception);
    constructor(message: string = null, innerException: Exception = null) {
        super(message, innerException);
    }
}