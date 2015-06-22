import {ServiceRemoteException} from "./ServiceRemoteException";
import {AutodiscoverError} from "../Autodiscover/AutodiscoverError";
export class AutodiscoverRemoteException extends ServiceRemoteException {
    Error: AutodiscoverError;
    private error: AutodiscoverError;
}