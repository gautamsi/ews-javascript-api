import {Exception} from "./Exception";
/**
 * Represents an error that occurs when a service operation fails remotely.
 */
export class ServiceRemoteException extends Exception {
    /**
     * ServiceRemoteException Constructor.
     */
    constructor();
    /**
     * ServiceRemoteException Constructor.
     *
     * @param   {string}    message          Error message text.
     */
    constructor(message: string);
    /**
     * ServiceRemoteException Constructor.
     *
     * @param   {string}        message          Error message text.
     * @param   {Exception}     innerException   Inner exception.
     */
    constructor(message: string, innerException: Exception);
    constructor(message: string = null, innerException: Exception = null) {
        super(message, innerException);
    }
}