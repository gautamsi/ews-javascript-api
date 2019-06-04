"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeetingRequestsDeliveryScope_1 = require("../Enumerations/MeetingRequestsDeliveryScope");
/**
 * Represents the results of a GetDelegates operation.
 *
 * @sealed
 */
var DelegateInformation = /** @class */ (function () {
    /**
     * @internal Initializes a **DelegateInformation** object
     *
     * @param   {DelegateUserResponse[]}   		delegateUserResponses         List of DelegateUserResponses from a GetDelegates request
     * @param   {MeetingRequestsDeliveryScope}	meetingReqestsDeliveryScope   MeetingRequestsDeliveryScope from a GetDelegates request.
     */
    function DelegateInformation(delegateUserResponses, meetingReqestsDeliveryScope) {
        this.meetingReqestsDeliveryScope = MeetingRequestsDeliveryScope_1.MeetingRequestsDeliveryScope.DelegatesOnly;
        this.delegateUserResponses = delegateUserResponses || [];
        this.meetingReqestsDeliveryScope = meetingReqestsDeliveryScope;
    }
    Object.defineProperty(DelegateInformation.prototype, "DelegateUserResponses", {
        /**
         * Gets a list of responses for each of the delegate users concerned by the operation.
         */
        get: function () {
            return this.delegateUserResponses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelegateInformation.prototype, "MeetingRequestsDeliveryScope", {
        /**
         * Gets a value indicating if and how meeting requests are delivered to delegates.
         */
        get: function () {
            return this.meetingReqestsDeliveryScope;
        },
        enumerable: true,
        configurable: true
    });
    return DelegateInformation;
}());
exports.DelegateInformation = DelegateInformation;
