//make necessay changes if needed
class Exception {// implements Error {
    //private name: string;
    //private message: string;
    Message: string;
    InnerException: Exception;
    constructor(message?: string, innerException?: Exception) {
        this.InnerException = innerException;
        this.Message = message;
    }

}

export = Exception;
