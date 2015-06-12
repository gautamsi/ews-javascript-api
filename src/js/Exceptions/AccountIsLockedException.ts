import {Exception} from "./Exception";
import {ServiceRemoteException} from "./ServiceRemoteException";
export class AccountIsLockedException extends ServiceRemoteException {
    AccountUnlockUrl: string;//System.Uri;
}

