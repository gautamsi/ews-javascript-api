"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines how meeting requests are sent to delegates.
 */
var MeetingRequestsDeliveryScope;
(function (MeetingRequestsDeliveryScope) {
    /**
     * Meeting requests are sent to delegates only.
     */
    MeetingRequestsDeliveryScope[MeetingRequestsDeliveryScope["DelegatesOnly"] = 0] = "DelegatesOnly";
    /**
     * Meeting requests are sent to delegates and to the owner of the mailbox.
     */
    MeetingRequestsDeliveryScope[MeetingRequestsDeliveryScope["DelegatesAndMe"] = 1] = "DelegatesAndMe";
    /**
     * Meeting requests are sent to delegates and informational messages are sent to the owner of the mailbox.
     */
    MeetingRequestsDeliveryScope[MeetingRequestsDeliveryScope["DelegatesAndSendInformationToMe"] = 2] = "DelegatesAndSendInformationToMe";
    /**
     * Meeting requests are not sent to delegates.  This value is supported only for Exchange 2010 SP1 or later server versions.
     */
    MeetingRequestsDeliveryScope[MeetingRequestsDeliveryScope["NoForward"] = 3] = "NoForward";
})(MeetingRequestsDeliveryScope = exports.MeetingRequestsDeliveryScope || (exports.MeetingRequestsDeliveryScope = {}));
var ExchangeVersion_1 = require("./ExchangeVersion");
(function (MeetingRequestsDeliveryScope) {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value) {
        if (value <= 2) //<= MeetingRequestsDeliveryScope.DelegatesAndSendInformationToMe
            return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
        else if (value == 3) // == NoForward
            return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
        return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
    }
    MeetingRequestsDeliveryScope.RequiredServerVersion = RequiredServerVersion;
})(MeetingRequestsDeliveryScope = exports.MeetingRequestsDeliveryScope || (exports.MeetingRequestsDeliveryScope = {}));
