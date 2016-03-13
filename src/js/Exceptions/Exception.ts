//make necessay changes if needed
export class Exception {// implements Error {
    //private name: string;
    //private message: string;
    Message: string = null;
    InnerException: Exception = null;
    //todo: implement stacktrace and source if needed
    constructor();
    constructor(message : string);
    constructor(message: string, innerException: Exception);
    constructor(message: string = null, innerException: Exception = null) {
        this.InnerException = innerException;
        this.Message = message;
    }
    /**
     * @override user JSON.stringify for now, todo: impelemtn real Exception tostring
     */
    toString(){
        return JSON.stringify(this);
    }    
}