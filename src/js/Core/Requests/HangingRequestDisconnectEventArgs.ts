import {HangingRequestDisconnectReason} from "../../Enumerations/HangingRequestDisconnectReason";
import {Exception} from "../../Exceptions/Exception";
export class HangingRequestDisconnectEventArgs //extends  EventArgs
{
	/// <summary>
	/// Initializes a new instance of the <see cref="HangingRequestDisconnectEventArgs"/> class.
	/// </summary>
	/// <param name="reason">The reason.</param>
	/// <param name="exception">The exception.</param>
	constructor(
		reason: HangingRequestDisconnectReason,
		exception: Exception) {
		this.Reason = reason;
		this.Exception = exception;
	}

	/// <summary>
	/// Gets the reason that the user was disconnected.
	/// </summary>
	Reason: HangingRequestDisconnectReason;
       

	/// <summary>
	/// Gets the exception that caused the disconnection. Can be null.
	/// </summary>
	Exception: Exception;
}


