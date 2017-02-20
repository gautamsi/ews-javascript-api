
/**
 * Defines the location for mailbox search.
 */
export enum MailboxSearchLocation {

    /**
     * Primary only (Exchange 2013 or later).
     */
    PrimaryOnly = 0,

    /**
     * Archive only (Exchange 2013 or later).
     */
    ArchiveOnly = 1,

    /**
     * Both Primary and Archive (Exchange 2013 or later).
     */
    All = 2
}

import { ExchangeVersion } from "./ExchangeVersion"
export module MailboxSearchLocation {

    /**RequiredServerVersionAttribute */
    export function RequiredServerVersion(value: MailboxSearchLocation): ExchangeVersion {
        if (value <= 2) //<= MailboxSearchLocation.All
            return ExchangeVersion.Exchange2013;
        
        return ExchangeVersion.Exchange_Version_Not_Updated;
    }
}