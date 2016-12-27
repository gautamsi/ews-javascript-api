
/**
 * Defines the folder traversal depth in queries.
 */
export enum ConversationQueryTraversal {

    /**
     * Shallow traversal
     */
    Shallow = 0,

    /**
     * Deep traversal
     */
    Deep = 1
}

import { ExchangeVersion } from "./ExchangeVersion"
export module ConversationQueryTraversal {
    
    /**RequiredServerVersionAttribute */
    export function RequiredServerVersion(value: ConversationQueryTraversal): ExchangeVersion {
        if (value <= 1) //<= ConversationQueryTraversal.Deep
            return ExchangeVersion.Exchange2013;
        return ExchangeVersion.Exchange_Version_Not_Updated;
    }
}