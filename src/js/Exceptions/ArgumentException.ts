import {Exception} from "./Exception";
export class ArgumentException extends Exception {
    ParamName: string = null;
    constructor();
    constructor(message: string);
    constructor(message: string, paramName: string);
    constructor(message: string, innerException: Exception);
    constructor(message: string, paramName: string, innerException: Exception);
    constructor(message: string = null, paramNameOrInnerException: string | Exception = null, innerException: Exception = null) {
        super(message, innerException || (paramNameOrInnerException instanceof Exception ? paramNameOrInnerException : null));
        if (typeof paramNameOrInnerException === 'string') {
            this.ParamName = message
        }
    }
}

export class ArgumentNullException extends ArgumentException {
    constructor();
    constructor(paramName: string);
    constructor(paramName: string, message: string);
    constructor(message: string, innerException: Exception);
    constructor(message: string, paramName: string, innerException: Exception);
    constructor(paramNameOrMessage: string = null, paramNameOrInnerException: string | Exception = null, innerException: Exception = null) {
        var argsLength = arguments.length;
        switch (argsLength) {
            case 1:
                super("Argument is Null", paramNameOrMessage);
                break;
            case 2:
                if (typeof paramNameOrInnerException === 'string') {
                    super(paramNameOrInnerException, paramNameOrMessage);
                }
                else {
                    super(paramNameOrMessage, paramNameOrInnerException);
                }
                break;
            default:
                super("Argument is Null");
                break;
        }
    }
}

export class ArgumentOutOfRangeException extends ArgumentException {
    actualValue: any;
    /**
     * Gets the value of the argument that caused the exception.
     */
    get ActualValue(): any { return this.actualValue; }
    constructor();
    constructor(paramName: string);
    constructor(paramName: string, message: string);
    constructor(message: string, innerException: Exception);
    constructor(paramName: string, actualValue: any, message: string);
    constructor(paramNameOrMessage?: string, messageOrActualValueOrException?: string | Exception, message: string = null) {
        //super((message || messageOrObjValueOrException instanceof Exception ? paramNameOrMessage : null);
        var argsLength = arguments.length;
        switch (argsLength) {
            case 0:
                super();
                break;
            case 1:
                super(null, paramNameOrMessage);
                break;
            case 2:
                if (typeof messageOrActualValueOrException === 'string') {
                    super(messageOrActualValueOrException, paramNameOrMessage);
                }
                else {
                    super(paramNameOrMessage, messageOrActualValueOrException);
                }
                break;
            case 3:
                super(message, paramNameOrMessage);
                this.actualValue = messageOrActualValueOrException;
                break;
            default:
                super();
                break;
        }
    }
}