import {Exception} from "../../Exceptions/Exception";
import {HangingRequestDisconnectReason} from "../../Enumerations/HangingRequestDisconnectReason";

/**
 * @internal Represents a collection of arguments for the HangingServiceRequestBase.HangingRequestDisconnectHandler delegate method.
 */
export class HangingRequestDisconnectEventArgs {  //extends  EventArgs{

	/**
	 * Gets the reason that the user was disconnected.
	 * 
	 * @internal set
	 */
	Reason: HangingRequestDisconnectReason;

	/**
	 * Gets the exception that caused the disconnection. Can be null.
	 * 
	 * @internal set
	 */
	Exception: Exception;

	/**
	 * Initializes a new instance of the  class.
	 *
	 * @param   {HangingRequestDisconnectReason}   	reason      The reason.
	 * @param   {Exception}   						exception   The exception.
	 */
	constructor(
		reason: HangingRequestDisconnectReason,
		exception: Exception) {
		this.Reason = reason;
		this.Exception = exception;
	}
}