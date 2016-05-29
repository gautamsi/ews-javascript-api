import {DelegateUserResponse} from "../Core/Responses/DelegateUserResponse";
import {MeetingRequestsDeliveryScope} from "../Enumerations/MeetingRequestsDeliveryScope";

/**
 * Represents the results of a GetDelegates operation.
 * 
 * @sealed
 */
export class DelegateInformation {

	private delegateUserResponses: DelegateUserResponse[];
	private meetingReqestsDeliveryScope: MeetingRequestsDeliveryScope = MeetingRequestsDeliveryScope.DelegatesOnly;

	/**
	 * Gets a list of responses for each of the delegate users concerned by the operation.
	 */
	get DelegateUserResponses(): DelegateUserResponse[] {
		return this.delegateUserResponses;
	}

	/**
	 * Gets a value indicating if and how meeting requests are delivered to delegates.
	 */
	get MeetingRequestsDeliveryScope(): MeetingRequestsDeliveryScope {
		return this.meetingReqestsDeliveryScope;
	}

	/**
	 * @internal Initializes a **DelegateInformation** object
	 *
	 * @param   {DelegateUserResponse[]}   		delegateUserResponses         List of DelegateUserResponses from a GetDelegates request
	 * @param   {MeetingRequestsDeliveryScope}	meetingReqestsDeliveryScope   MeetingRequestsDeliveryScope from a GetDelegates request.
	 */
	constructor(delegateUserResponses: DelegateUserResponse[], meetingReqestsDeliveryScope: MeetingRequestsDeliveryScope) {
		this.delegateUserResponses = delegateUserResponses || [];
		this.meetingReqestsDeliveryScope = meetingReqestsDeliveryScope;
	}
}