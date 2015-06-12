import {DelegateManagementResponse} from "./DelegateManagementResponse";
import {MeetingRequestsDeliveryScope} from "../../Enumerations/MeetingRequestsDeliveryScope";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetDelegateResponse extends DelegateManagementResponse {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetDelegateResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}



//}



