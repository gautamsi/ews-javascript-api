
import {Exception} from "./Exception";
import {ServiceResponseException} from "./ServiceResponseException";
export class ServerBusyException extends ServiceResponseException {
    private static BackOffMillisecondsKey: string = "BackOffMilliseconds";
    BackOffMilliseconds: number;
    private backOffMilliseconds: number;
}