//todo - move to file where class Microsoft.Exchange.WebServices.Dns.PrivilegedUserId is located

/**
 * @internal Interactive, charge against a copy of target mailbox budget.
 */
export enum PrivilegedUserIdBudgetType {
    
    /**
     * Interactive, charge against a copy of target mailbox budget.
     */
    Default = 0,

    /**
     * Running as background load
     */
    RunningAsBackgroundLoad = 1,

    /**
     * Unthrottled budget.
     */
    Unthrottled = 2
}