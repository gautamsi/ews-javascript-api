
/**
 * Disable reason type
 */
export enum DisableReasonType {
    /**
     * Extension is being disabled with no reason
     */
    NoReason = 0,
    /**
     * Extension is being disabled from Outlook due to performance reasons
     */
    OutlookClientPerformance = 1,
    /**
     * Extension is being disabled from OWA due to performance reasons
     */
    OWAClientPerformance = 2,
    /**
     * Extension is being disabled from MOWA due to performance reasons
     */
    MobileClientPerformance = 3
}
