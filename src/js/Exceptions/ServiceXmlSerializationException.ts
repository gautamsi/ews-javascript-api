import {Exception} from "./Exception";
import {ServiceLocalException} from "./ServiceLocalException";
export class ServiceXmlSerializationException extends ServiceLocalException {
    constructor(message?: string, innerException?: Exception) {
        //todo: implement base class
        super(message, innerException);

    }
}