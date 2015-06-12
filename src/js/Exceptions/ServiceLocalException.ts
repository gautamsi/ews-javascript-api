import {Exception} from "./Exception";
export class ServiceLocalException extends Exception {// extends System.Exception {
    constructor(message?: string, innerException?: Exception) {
        super(message, innerException);
        //this.message = message;
    }
}