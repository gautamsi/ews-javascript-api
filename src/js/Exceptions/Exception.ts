//make necessary changes if needed
//ref: 0.9 - extending Error as BlueBird throws error if promise is rejected without an Error object
export class Exception {//} extends Error { //ref: can not extend from Error. Typescript 1.8+ can not extend builtin objects property, it swallows inheriting properties see  https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work

    /** @internal  */
    message: string = null;
    //todo: implement stacktrace and source if needed - stack trace implemented by calling Error.captureStack
    stack: string = null;
    InnerException: Exception = null;

    get Message(): string {
        return this.message
    }
    /** @internal  needed for bluebird to work when rejected without inheriting from Error object. BlueBird checks for Error like object not Error subclass itself. */
    get name(): string {
        return '';
    }


    constructor();
    constructor(message: string);
    constructor(message: string, innerException: Exception);
    constructor(message: string = "", innerException: Exception = null) {
        this.InnerException = innerException;
        this.message = message || "";

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }

        //this.name = this.constructor.name; - no need to capture Name, can be infered by checking instance of Exception (or inheriting class)
    }

    /**
     * @override user JSON.stringify for now, todo: impelemtn real Exception tostring
     */
    toString() {
        return JSON.stringify(this);
    }
}