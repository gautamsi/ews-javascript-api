import {ExchangeService} from "../ExchangeService";
import {MeetingRequestsDeliveryScope} from "../../Enumerations/MeetingRequestsDeliveryScope";
import {ServiceError} from "../../Enumerations/ServiceError";
import {XmlElementNames} from "../XmlElementNames";

import {DelegateManagementResponse} from "./DelegateManagementResponse";
/**
 * @internal Represents the response to a delegate user retrieval operation.
 * 
 * @sealed
 */
export class GetDelegateResponse extends DelegateManagementResponse {

    private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope = MeetingRequestsDeliveryScope.NoForward;

    /**
     * @internal Gets a value indicating if and how meeting requests are delivered to delegates.
     */
    get MeetingRequestsDeliveryScope(): MeetingRequestsDeliveryScope {
        return this.meetingRequestsDeliveryScope;
    }

    /**
     * @internal Initializes a new instance of the **GetDelegateResponse** class.
     *
     * @param   {boolean}   readDelegateUsers   if set to *true* [read delegate users].
     */
    constructor(readDelegateUsers: boolean) {
        super(readDelegateUsers, null);
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        super.ReadElementsFromXmlJsObject(responseObject, service);

        if (this.ErrorCode == ServiceError.NoError) {
            if (responseObject[XmlElementNames.DeliverMeetingRequests]) {
                this.meetingRequestsDeliveryScope = MeetingRequestsDeliveryScope[<string>responseObject[XmlElementNames.DeliverMeetingRequests]];
            }
        }
    }
}