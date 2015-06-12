//todo - move to file where class Microsoft.Exchange.WebServices.Data.HangingServiceRequestBase is located
// - cant move - this is needed by shared eventargs type member

export enum HangingRequestDisconnectReason {
    Clean = 0,
    UserInitiated = 1,
    Timeout = 2,
    Exception = 3
}




