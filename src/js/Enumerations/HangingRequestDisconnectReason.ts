//todo - move to file where class Microsoft.Exchange.WebServices.Data.HangingServiceRequestBase is located
// - cant move - this is needed by shared eventargs type member

/**
 * @internal Enumeration of reasons that a hanging request may disconnect.
 */
export enum HangingRequestDisconnectReason {
    
    /**
     * The server cleanly closed the connection.
     */
    Clean = 0,
    
    /**
     * The client closed the connection.
     */
    UserInitiated = 1,
    
    /**
     * The connection timed out do to a lack of a heartbeat received.
     */
    Timeout = 2,
    
    /**
     * An exception occurred on the connection.
     */
    Exception = 3
}