import {Exception} from "./Exception";
export class ArgumentException extends Exception {
    Name: string;
    ParamName: string;
    constructor();
    constructor(message: string);
    constructor(message: string, paramName: string);
    constructor(message: string, innerException: Exception);
    constructor(message: string, paramName: string, innerException: Exception);
    constructor(message?: string, paramNameOrInnerException?: string | Exception, innerException: Exception = null) {
        super(message);
        //this.Name = name;
        if (paramNameOrInnerException instanceof Exception) {
            this.InnerException = paramNameOrInnerException;
        }
        else if (typeof paramNameOrInnerException === 'string') {
            this.ParamName = paramNameOrInnerException;
        }
        if (innerException != null) {
            this.InnerException = innerException;
        }

    }
}

export class ArgumentOutOfRangeException extends ArgumentException {
    Name: string;
    ParamName: string;
    constructor();
    constructor(paramName: string);
    constructor(paramName: string, message: string);
    constructor(message: string, innerException: Exception);
    //constructor(paramName: string, objectValue: any, message: string);
    constructor(paramNameOrMessage?: string, messageOrObjValueOrException?: string | Exception) { //, message:string = null) {
        super(paramNameOrMessage);
        //this.Name = name;
        var argsLength = arguments.length;
        if (argsLength >= 1) {
            this.ParamName = paramNameOrMessage;
        }
        if (argsLength >= 2) {
            if (messageOrObjValueOrException instanceof Exception) {
                this.ParamName = null;
                this.Message = paramNameOrMessage;
                this.InnerException = messageOrObjValueOrException;
            }
            else if (typeof messageOrObjValueOrException === 'string') {
                this.Message = messageOrObjValueOrException;
            }
        }
    }
}