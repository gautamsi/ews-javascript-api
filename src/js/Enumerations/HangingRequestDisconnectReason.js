"use strict";
//todo - move to file where class Microsoft.Exchange.WebServices.Data.HangingServiceRequestBase is located
// - cant move - this is needed by shared eventargs type member
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Enumeration of reasons that a hanging request may disconnect.
 */
var HangingRequestDisconnectReason;
(function (HangingRequestDisconnectReason) {
    /**
     * The server cleanly closed the connection.
     */
    HangingRequestDisconnectReason[HangingRequestDisconnectReason["Clean"] = 0] = "Clean";
    /**
     * The client closed the connection.
     */
    HangingRequestDisconnectReason[HangingRequestDisconnectReason["UserInitiated"] = 1] = "UserInitiated";
    /**
     * The connection timed out do to a lack of a heartbeat received.
     */
    HangingRequestDisconnectReason[HangingRequestDisconnectReason["Timeout"] = 2] = "Timeout";
    /**
     * An exception occurred on the connection.
     */
    HangingRequestDisconnectReason[HangingRequestDisconnectReason["Exception"] = 3] = "Exception";
})(HangingRequestDisconnectReason = exports.HangingRequestDisconnectReason || (exports.HangingRequestDisconnectReason = {}));
