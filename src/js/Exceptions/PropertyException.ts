import {Exception} from "./Exception";
import {ServiceLocalException} from "./ServiceLocalException";
export class PropertyException extends ServiceLocalException {
    Name: string;
    //private name: string;
    constructor(message: string, name: string = null, innerException: Exception = null) {
        super(message, innerException);
        this.Name = name;
    }
}