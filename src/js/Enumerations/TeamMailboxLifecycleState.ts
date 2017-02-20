
/**
 * TeamMailbox lifecycle state
 */
export enum TeamMailboxLifecycleState {

    /**
     * Active
     */
    Active = 0,

    /**
     * Closed
     */
    Closed = 1,

    /**
     * Unlinked
     */
    Unlinked = 2,

    /**
     * PendingDelete
     */
    PendingDelete = 3
}

export module TeamMailboxLifecycleState {

    /**EwsEnumAttribute */
    export function FromEwsEnumString(value: string): TeamMailboxLifecycleState {
        return TeamMailboxLifecycleState[value];
    }

    /**EwsEnumAttribute */
    export function ToEwsEnumString(value: TeamMailboxLifecycleState): string {
        return TeamMailboxLifecycleState[value];
    }
}