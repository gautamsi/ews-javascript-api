
/**
 * Defines the available properties of a rule. 
 */
export enum RuleProperty {

    /**
     * The RuleId property of a rule.
     */
    RuleId = 0,

    /**
     * The DisplayName property of a rule.
     */
    DisplayName = 1,

    /**
     * The Priority property of a rule.
     */
    Priority = 2,

    /**
     * The IsNotSupported property of a rule.
     */
    IsNotSupported = 3,

    /**
     * The Actions property of a rule.
     */
    Actions = 4,

    /**
     * The Categories property of a rule's set of conditions.
     */
    ConditionCategories = 5,

    /**
     * The ContainsBodyStrings property of a rule's set of conditions.
     */
    ConditionContainsBodyStrings = 6,

    /**
     * The ContainsHeaderStrings property of a rule's set of conditions.
     */
    ConditionContainsHeaderStrings = 7,

    /**
     * The ContainsRecipientStrings property of a rule's set of conditions.
     */
    ConditionContainsRecipientStrings = 8,

    /**
     * The ContainsSenderStrings property of a rule's set of conditions.
     */
    ConditionContainsSenderStrings = 9,

    /**
     * The ContainsSubjectOrBodyStrings property of a rule's set of conditions.
     */
    ConditionContainsSubjectOrBodyStrings = 10,

    /**
     * The ContainsSubjectStrings property of a rule's set of conditions.
     */
    ConditionContainsSubjectStrings = 11,

    /**
     * The FlaggedForAction property of a rule's set of conditions.
     */
    ConditionFlaggedForAction = 12,

    /**
     * The FromAddresses property of a rule's set of conditions.
     */
    ConditionFromAddresses = 13,

    /**
     * The FromConnectedAccounts property of a rule's set of conditions.
     */
    ConditionFromConnectedAccounts = 14,

    /**
     * The HasAttachments property of a rule's set of conditions.
     */
    ConditionHasAttachments = 15,

    /**
     * The Importance property of a rule's set of conditions.
     */
    ConditionImportance = 16,

    /**
     * The IsApprovalRequest property of a rule's set of conditions.
     */
    ConditionIsApprovalRequest = 17,

    /**
     * The IsAutomaticForward property of a rule's set of conditions.
     */
    ConditionIsAutomaticForward = 18,

    /**
     * The IsAutomaticReply property of a rule's set of conditions.
     */
    ConditionIsAutomaticReply = 19,

    /**
     * The IsEncrypted property of a rule's set of conditions.
     */
    ConditionIsEncrypted = 20,

    /**
     * The IsMeetingRequest property of a rule's set of conditions.
     */
    ConditionIsMeetingRequest = 21,

    /**
     * The IsMeetingResponse property of a rule's set of conditions.
     */
    ConditionIsMeetingResponse = 22,

    /**
     * The IsNonDeliveryReport property of a rule's set of conditions.
     */
    ConditionIsNonDeliveryReport = 23,

    /**
     * The IsPermissionControlled property of a rule's set of conditions.
     */
    ConditionIsPermissionControlled = 24,

    /**
     * The IsRead property of a rule's set of conditions.
     */
    ConditionIsRead = 25,

    /**
     * The IsSigned property of a rule's set of conditions.
     */
    ConditionIsSigned = 26,

    /**
     * The IsVoicemail property of a rule's set of conditions.
     */
    ConditionIsVoicemail = 27,

    /**
     * The IsReadReceipt property of a rule's set of conditions.
     */
    ConditionIsReadReceipt = 28,

    /**
     * The ItemClasses property of a rule's set of conditions.
     */
    ConditionItemClasses = 29,

    /**
     * The MessageClassifications property of a rule's set of conditions.
     */
    ConditionMessageClassifications = 30,

    /**
     * The NotSentToMe property of a rule's set of conditions.
     */
    ConditionNotSentToMe = 31,

    /**
     * The SentCcMe property of a rule's set of conditions.
     */
    ConditionSentCcMe = 32,

    /**
     * The SentOnlyToMe property of a rule's set of conditions.
     */
    ConditionSentOnlyToMe = 33,

    /**
     * The SentToAddresses property of a rule's set of conditions.
     */
    ConditionSentToAddresses = 34,

    /**
     * The SentToMe property of a rule's set of conditions.
     */
    ConditionSentToMe = 35,

    /**
     * The SentToOrCcMe property of a rule's set of conditions.
     */
    ConditionSentToOrCcMe = 36,

    /**
     * The Sensitivity property of a rule's set of conditions.
     */
    ConditionSensitivity = 37,

    /**
     * The WithinDateRange property of a rule's set of conditions.
     */
    ConditionWithinDateRange = 38,

    /**
     * The WithinSizeRange property of a rule's set of conditions.
     */
    ConditionWithinSizeRange = 39,

    /**
     * The Categories property of a rule's set of exceptions.
     */
    ExceptionCategories = 40,

    /**
     * The ContainsBodyStrings property of a rule's set of exceptions.
     */
    ExceptionContainsBodyStrings = 41,

    /**
     * The ContainsHeaderStrings property of a rule's set of exceptions.
     */
    ExceptionContainsHeaderStrings = 42,

    /**
     * The ContainsRecipientStrings property of a rule's set of exceptions.
     */
    ExceptionContainsRecipientStrings = 43,

    /**
     * The ContainsSenderStrings property of a rule's set of exceptions.
     */
    ExceptionContainsSenderStrings = 44,

    /**
     * The ContainsSubjectOrBodyStrings property of a rule's set of exceptions.
     */
    ExceptionContainsSubjectOrBodyStrings = 45,

    /**
     * The ContainsSubjectStrings property of a rule's set of exceptions.
     */
    ExceptionContainsSubjectStrings = 46,

    /**
     * The FlaggedForAction property of a rule's set of exceptions.
     */
    ExceptionFlaggedForAction = 47,

    /**
     * The FromAddresses property of a rule's set of exceptions.
     */
    ExceptionFromAddresses = 48,

    /**
     * The FromConnectedAccounts property of a rule's set of exceptions.
     */
    ExceptionFromConnectedAccounts = 49,

    /**
     * The HasAttachments property of a rule's set of exceptions.
     */
    ExceptionHasAttachments = 50,

    /**
     * The Importance property of a rule's set of exceptions.
     */
    ExceptionImportance = 51,

    /**
     * The IsApprovalRequest property of a rule's set of exceptions.
     */
    ExceptionIsApprovalRequest = 52,

    /**
     * The IsAutomaticForward property of a rule's set of exceptions.
     */
    ExceptionIsAutomaticForward = 53,

    /**
     * The IsAutomaticReply property of a rule's set of exceptions.
     */
    ExceptionIsAutomaticReply = 54,

    /**
     * The IsEncrypted property of a rule's set of exceptions.
     */
    ExceptionIsEncrypted = 55,

    /**
     * The IsMeetingRequest property of a rule's set of exceptions.
     */
    ExceptionIsMeetingRequest = 56,

    /**
     * The IsMeetingResponse property of a rule's set of exceptions.
     */
    ExceptionIsMeetingResponse = 57,

    /**
     * The IsNonDeliveryReport property of a rule's set of exceptions.
     */
    ExceptionIsNonDeliveryReport = 58,

    /**
     * The IsPermissionControlled property of a rule's set of exceptions.
     */
    ExceptionIsPermissionControlled = 59,

    /**
     * The IsRead property of a rule's set of exceptions.
     */
    ExceptionIsRead = 60,

    /**
     * The IsSigned property of a rule's set of exceptions.
     */
    ExceptionIsSigned = 61,

    /**
     * The IsVoicemail property of a rule's set of exceptions.
     */
    ExceptionIsVoicemail = 62,

    /**
     * The ItemClasses property of a rule's set of exceptions.
     */
    ExceptionItemClasses = 63,

    /**
     * The MessageClassifications property of a rule's set of exceptions.
     */
    ExceptionMessageClassifications = 64,

    /**
     * The NotSentToMe property of a rule's set of exceptions.
     */
    ExceptionNotSentToMe = 65,

    /**
     * The SentCcMe property of a rule's set of exceptions.
     */
    ExceptionSentCcMe = 66,

    /**
     * The SentOnlyToMe property of a rule's set of exceptions.
     */
    ExceptionSentOnlyToMe = 67,

    /**
     * The SentToAddresses property of a rule's set of exceptions.
     */
    ExceptionSentToAddresses = 68,

    /**
     * The SentToMe property of a rule's set of exceptions.
     */
    ExceptionSentToMe = 69,

    /**
     * The SentToOrCcMe property of a rule's set of exceptions.
     */
    ExceptionSentToOrCcMe = 70,

    /**
     * The Sensitivity property of a rule's set of exceptions.
     */
    ExceptionSensitivity = 71,

    /**
     * The WithinDateRange property of a rule's set of exceptions.
     */
    ExceptionWithinDateRange = 72,

    /**
     * The WithinSizeRange property of a rule's set of exceptions.
     */
    ExceptionWithinSizeRange = 73,

    /**
     * The Categories property in a rule's set of actions.
     */
    ActionCategories = 74,

    /**
     * The CopyToFolder property in a rule's set of actions.
     */
    ActionCopyToFolder = 75,

    /**
     * The Delete property in a rule's set of actions.
     */
    ActionDelete = 76,

    /**
     * The ForwardAsAttachmentToRecipients property in a rule's set of actions.
     */
    ActionForwardAsAttachmentToRecipients = 77,

    /**
     * The ForwardToRecipients property in a rule's set of actions.
     */
    ActionForwardToRecipients = 78,

    /**
     * The Importance property in a rule's set of actions.
     */
    ActionImportance = 79,

    /**
     * The MarkAsRead property in a rule's set of actions.
     */
    ActionMarkAsRead = 80,

    /**
     * The MoveToFolder property in a rule's set of actions.
     */
    ActionMoveToFolder = 81,

    /**
     * The PermanentDelete property in a rule's set of actions.
     */
    ActionPermanentDelete = 82,

    /**
     * The RedirectToRecipients property in a rule's set of actions.
     */
    ActionRedirectToRecipients = 83,

    /**
     * The SendSMSAlertToRecipients property in a rule's set of actions.
     */
    ActionSendSMSAlertToRecipients = 84,

    /**
     * The ServerReplyWithMessage property in a rule's set of actions.
     */
    ActionServerReplyWithMessage = 85,

    /**
     * The StopProcessingRules property in a rule's set of actions.
     */
    ActionStopProcessingRules = 86,

    /**
     * The IsEnabled property of a rule, indicating if the rule is enabled.
     */
    IsEnabled = 87,

    /**
     * The IsInError property of a rule, indicating if the rule is in error.
     */
    IsInError = 88,

    /**
     * The Conditions property of a rule, contains all conditions of the rule.
     */
    Conditions = 89,

    /**
     * The Exceptions property of a rule, contains all exceptions of the rule.
     */
    Exceptions = 90
}

export module RuleProperty {

    /**EwsEnumAttribute */
    export function FromEwsEnumString(value: string): RuleProperty {
        return RuleProperty[value.replace(":", "")];
    }

    /**EwsEnumAttribute */
    export function ToEwsEnumString(value: RuleProperty): string {
        let startsWith = ["Condition", "Exception", "Action"];
        let str2 = null;
        startsWith.map((str)=>{
            if(RuleProperty[value].indexOf(str) === 0){
                str2 = RuleProperty[value].replace(str, str + ":");
            }
        });
        
        return str2 || RuleProperty[value];
    }
}