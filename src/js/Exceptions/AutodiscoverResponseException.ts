import {ServiceRemoteException} from "./ServiceRemoteException";
import {AutodiscoverErrorCode} from "../Enumerations/AutodiscoverErrorCode";
export class AutodiscoverResponseException extends ServiceRemoteException {
    ErrorCode: AutodiscoverErrorCode;
    private errorCode: AutodiscoverErrorCode;
}