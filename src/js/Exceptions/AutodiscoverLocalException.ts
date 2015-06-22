import {Exception} from "./Exception";
import {ServiceLocalException} from "./ServiceLocalException";
export class AutodiscoverLocalException extends ServiceLocalException {

    constructor(message?: string, innerException?:Exception)
    {
        super(message,innerException);
    }
}