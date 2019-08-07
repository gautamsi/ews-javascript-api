import { AutodiscoverErrorCode } from "../Enumerations/AutodiscoverErrorCode";
import { ServiceRemoteException } from "./ServiceRemoteException";

/**
 * Represents an exception from an autodiscover error response.
 *
 * @extends {ServiceRemoteException}
 */
export class AutodiscoverResponseException extends ServiceRemoteException {
  /**
   * Error code when Autodiscover service operation failed remotely.
   */
  private errorCode: AutodiscoverErrorCode;

  /**
   * Gets the ErrorCode for the exception.
   */
  get ErrorCode(): AutodiscoverErrorCode {
    return this.errorCode;
  }

  /**
   * @internal Initializes a new instance of the **AutodiscoverResponseException** class.
   *
   * @param   {AutodiscoverErrorCode} errorCode   The error code.
   * @param   {string}                message     The message.
   */
  constructor(errorCode: AutodiscoverErrorCode, message: string) {
    super(message);
    this.errorCode = errorCode;
  }
}
