//make necessary changes if needed
//ref: 0.9 - extending Error as BlueBird throws error if promise is rejected without an Error object
export class Exception extends Error {
    //private name: string;
    message: string;
    get Message(): string {
        return this.message
    }
    InnerException: Exception = null;
    //todo: implement stacktrace and source if needed
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: Exception);
    constructor(message: string = null, innerException: Exception = null) {
        super(message);
        this.InnerException = innerException;
        this.message = message;
    }
    /**
     * @override user JSON.stringify for now, todo: impelemtn real Exception tostring
     */
    toString() {
        return JSON.stringify(this);
    }
}