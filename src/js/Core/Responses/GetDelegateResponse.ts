import DelegateManagementResponse = require("./DelegateManagementResponse");
import MeetingRequestsDeliveryScope = require("../../Enumerations/MeetingRequestsDeliveryScope");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetDelegateResponse extends DelegateManagementResponse {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetDelegateResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
