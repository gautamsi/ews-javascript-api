//make necessary changes if needed
export class Exception {// implements Error {
    //private name: string;
    private message: string;
    get Message(): string {
        return this.message
    }
    InnerException: Exception = null;
    //todo: implement stacktrace and source if needed
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: Exception);
    constructor(message: string = null, innerException: Exception = null) {
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