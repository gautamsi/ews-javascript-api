
/**
 * Defines the scope of FindItems operations.
 */
export enum ItemTraversal {

    /**
     * All non deleted items in the specified folder are retrieved.
     */
    Shallow = 0,

    /**
     * Only soft-deleted items are retrieved.
     */
    SoftDeleted = 1,

    /**
     * Only associated items are retrieved (Exchange 2010 or later).
     */
    Associated = 2
}

import { ExchangeVersion } from "./ExchangeVersion"
export module ItemTraversal {

    /**RequiredServerVersionAttribute */
    export function RequiredServerVersion(value: ItemTraversal): ExchangeVersion {
        if (value <= 1) //<= ItemTraversal.SoftDeleted
            return ExchangeVersion.Exchange2007_SP1;
        if (value == 2) // === Associated
            return ExchangeVersion.Exchange2010;

        return ExchangeVersion.Exchange_Version_Not_Updated;
    }
}