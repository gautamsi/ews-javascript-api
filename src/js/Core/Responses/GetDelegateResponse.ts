class GetDelegateResponse extends DelegateManagementResponse {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetDelegateResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
