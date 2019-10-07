import { AutodiscoverError } from "../Autodiscover/AutodiscoverError";
import { Exception } from "./Exception";
import { ServiceRemoteException } from "./ServiceRemoteException";

/**
 * Represents an exception that is thrown when the Autodiscover service returns an error.
 */
export class AutodiscoverRemoteException extends ServiceRemoteException {
  private error: AutodiscoverError;

  /**
   * Gets the error.
   *  @value the Error
   */
  get Error(): AutodiscoverError {
    return this.error;
  }

  /**
   * Initializes a new instance of the **AutodiscoverRemoteException** class.
   *
   * @param   {AutodiscoverError} error   The error.
   */
  constructor(error: AutodiscoverError);
  /**
   * Initializes a new instance of the **AutodiscoverRemoteException** class.
   *
   * @param   {string}            message     The message.
   * @param   {AutodiscoverError} error       The error.
   */
  constructor(message: string, error: AutodiscoverError);
  /**
   * Initializes a new instance of the **AutodiscoverRemoteException** class.
   *
   * @param   {string}            message          The message.
   * @param   {AutodiscoverError} error            The error.
   * @param   {Exception}         innerException   The inner exception.
   */
  constructor(message: string, error: AutodiscoverError, innerException: Exception);
  constructor(errorOrMessage: AutodiscoverError | string, error: AutodiscoverError = null, innerException: Exception = null) {
    let _error: AutodiscoverError = null;
    let message: string = null;
    if (arguments.length === 1 && errorOrMessage instanceof AutodiscoverError) {
      error = errorOrMessage;
    }
    if (arguments.length >= 2) {
      if (typeof errorOrMessage === 'string') {
        message = errorOrMessage;
        _error = error;
      }
    }
    super(message, innerException);
    this.error = _error;
  }
}
