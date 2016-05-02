import {Exception} from "./Exception";
import {Uri} from "../Uri";

import {ServiceRemoteException} from "./ServiceRemoteException";
/**
 * Represents an error that occurs when the account that is being accessed is locked and requires user interaction to be unlocked.
 */
export class AccountIsLockedException extends ServiceRemoteException {

    /**
     * Gets the URL of a web page where the user can navigate to unlock his or her account.
     * 
     * @internal set
     */
    AccountUnlockUrl: Uri = null;

    /**
     * Initializes a new instance of the  class.
     *
     * @param   {string}        message            Error message text.
     * @param   {Uri}           accountUnlockUrl   URL for client to visit to unlock account.
     * @param   {Exception}     innerException     Inner exception.
     */
    constructor(message: string, accountUnlockUrl: Uri, innerException: Exception) {
        super(message, innerException);
        this.AccountUnlockUrl = accountUnlockUrl;
    }
}