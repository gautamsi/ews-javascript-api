
/**
 * Defines how meeting requests are sent to delegates.
 */
export enum MeetingRequestsDeliveryScope {

    /**
     * Meeting requests are sent to delegates only.
     */
    DelegatesOnly = 0,

    /**
     * Meeting requests are sent to delegates and to the owner of the mailbox.
     */
    DelegatesAndMe = 1,

    /**
     * Meeting requests are sent to delegates and informational messages are sent to the owner of the mailbox.
     */
    DelegatesAndSendInformationToMe = 2,

    /**
     * Meeting requests are not sent to delegates.  This value is supported only for Exchange 2010 SP1 or later server versions.
     */
    NoForward = 3
}

import { ExchangeVersion } from "./ExchangeVersion"
export module MeetingRequestsDeliveryScope {

    /**RequiredServerVersionAttribute */
    export function RequiredServerVersion(value: MeetingRequestsDeliveryScope): ExchangeVersion {
        if (value <= 2) //<= MeetingRequestsDeliveryScope.DelegatesAndSendInformationToMe
            return ExchangeVersion.Exchange2007_SP1;
        else if (value == 3) // == NoForward
            return ExchangeVersion.Exchange2010_SP1;

        return ExchangeVersion.Exchange_Version_Not_Updated;
    }
}