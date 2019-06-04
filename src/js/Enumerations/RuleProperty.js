"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the available properties of a rule.
 */
var RuleProperty;
(function (RuleProperty) {
    /**
     * The RuleId property of a rule.
     */
    RuleProperty[RuleProperty["RuleId"] = 0] = "RuleId";
    /**
     * The DisplayName property of a rule.
     */
    RuleProperty[RuleProperty["DisplayName"] = 1] = "DisplayName";
    /**
     * The Priority property of a rule.
     */
    RuleProperty[RuleProperty["Priority"] = 2] = "Priority";
    /**
     * The IsNotSupported property of a rule.
     */
    RuleProperty[RuleProperty["IsNotSupported"] = 3] = "IsNotSupported";
    /**
     * The Actions property of a rule.
     */
    RuleProperty[RuleProperty["Actions"] = 4] = "Actions";
    /**
     * The Categories property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionCategories"] = 5] = "ConditionCategories";
    /**
     * The ContainsBodyStrings property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionContainsBodyStrings"] = 6] = "ConditionContainsBodyStrings";
    /**
     * The ContainsHeaderStrings property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionContainsHeaderStrings"] = 7] = "ConditionContainsHeaderStrings";
    /**
     * The ContainsRecipientStrings property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionContainsRecipientStrings"] = 8] = "ConditionContainsRecipientStrings";
    /**
     * The ContainsSenderStrings property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionContainsSenderStrings"] = 9] = "ConditionContainsSenderStrings";
    /**
     * The ContainsSubjectOrBodyStrings property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionContainsSubjectOrBodyStrings"] = 10] = "ConditionContainsSubjectOrBodyStrings";
    /**
     * The ContainsSubjectStrings property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionContainsSubjectStrings"] = 11] = "ConditionContainsSubjectStrings";
    /**
     * The FlaggedForAction property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionFlaggedForAction"] = 12] = "ConditionFlaggedForAction";
    /**
     * The FromAddresses property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionFromAddresses"] = 13] = "ConditionFromAddresses";
    /**
     * The FromConnectedAccounts property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionFromConnectedAccounts"] = 14] = "ConditionFromConnectedAccounts";
    /**
     * The HasAttachments property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionHasAttachments"] = 15] = "ConditionHasAttachments";
    /**
     * The Importance property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionImportance"] = 16] = "ConditionImportance";
    /**
     * The IsApprovalRequest property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsApprovalRequest"] = 17] = "ConditionIsApprovalRequest";
    /**
     * The IsAutomaticForward property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsAutomaticForward"] = 18] = "ConditionIsAutomaticForward";
    /**
     * The IsAutomaticReply property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsAutomaticReply"] = 19] = "ConditionIsAutomaticReply";
    /**
     * The IsEncrypted property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsEncrypted"] = 20] = "ConditionIsEncrypted";
    /**
     * The IsMeetingRequest property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsMeetingRequest"] = 21] = "ConditionIsMeetingRequest";
    /**
     * The IsMeetingResponse property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsMeetingResponse"] = 22] = "ConditionIsMeetingResponse";
    /**
     * The IsNonDeliveryReport property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsNonDeliveryReport"] = 23] = "ConditionIsNonDeliveryReport";
    /**
     * The IsPermissionControlled property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsPermissionControlled"] = 24] = "ConditionIsPermissionControlled";
    /**
     * The IsRead property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsRead"] = 25] = "ConditionIsRead";
    /**
     * The IsSigned property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsSigned"] = 26] = "ConditionIsSigned";
    /**
     * The IsVoicemail property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsVoicemail"] = 27] = "ConditionIsVoicemail";
    /**
     * The IsReadReceipt property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionIsReadReceipt"] = 28] = "ConditionIsReadReceipt";
    /**
     * The ItemClasses property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionItemClasses"] = 29] = "ConditionItemClasses";
    /**
     * The MessageClassifications property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionMessageClassifications"] = 30] = "ConditionMessageClassifications";
    /**
     * The NotSentToMe property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionNotSentToMe"] = 31] = "ConditionNotSentToMe";
    /**
     * The SentCcMe property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionSentCcMe"] = 32] = "ConditionSentCcMe";
    /**
     * The SentOnlyToMe property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionSentOnlyToMe"] = 33] = "ConditionSentOnlyToMe";
    /**
     * The SentToAddresses property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionSentToAddresses"] = 34] = "ConditionSentToAddresses";
    /**
     * The SentToMe property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionSentToMe"] = 35] = "ConditionSentToMe";
    /**
     * The SentToOrCcMe property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionSentToOrCcMe"] = 36] = "ConditionSentToOrCcMe";
    /**
     * The Sensitivity property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionSensitivity"] = 37] = "ConditionSensitivity";
    /**
     * The WithinDateRange property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionWithinDateRange"] = 38] = "ConditionWithinDateRange";
    /**
     * The WithinSizeRange property of a rule's set of conditions.
     */
    RuleProperty[RuleProperty["ConditionWithinSizeRange"] = 39] = "ConditionWithinSizeRange";
    /**
     * The Categories property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionCategories"] = 40] = "ExceptionCategories";
    /**
     * The ContainsBodyStrings property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionContainsBodyStrings"] = 41] = "ExceptionContainsBodyStrings";
    /**
     * The ContainsHeaderStrings property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionContainsHeaderStrings"] = 42] = "ExceptionContainsHeaderStrings";
    /**
     * The ContainsRecipientStrings property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionContainsRecipientStrings"] = 43] = "ExceptionContainsRecipientStrings";
    /**
     * The ContainsSenderStrings property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionContainsSenderStrings"] = 44] = "ExceptionContainsSenderStrings";
    /**
     * The ContainsSubjectOrBodyStrings property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionContainsSubjectOrBodyStrings"] = 45] = "ExceptionContainsSubjectOrBodyStrings";
    /**
     * The ContainsSubjectStrings property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionContainsSubjectStrings"] = 46] = "ExceptionContainsSubjectStrings";
    /**
     * The FlaggedForAction property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionFlaggedForAction"] = 47] = "ExceptionFlaggedForAction";
    /**
     * The FromAddresses property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionFromAddresses"] = 48] = "ExceptionFromAddresses";
    /**
     * The FromConnectedAccounts property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionFromConnectedAccounts"] = 49] = "ExceptionFromConnectedAccounts";
    /**
     * The HasAttachments property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionHasAttachments"] = 50] = "ExceptionHasAttachments";
    /**
     * The Importance property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionImportance"] = 51] = "ExceptionImportance";
    /**
     * The IsApprovalRequest property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsApprovalRequest"] = 52] = "ExceptionIsApprovalRequest";
    /**
     * The IsAutomaticForward property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsAutomaticForward"] = 53] = "ExceptionIsAutomaticForward";
    /**
     * The IsAutomaticReply property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsAutomaticReply"] = 54] = "ExceptionIsAutomaticReply";
    /**
     * The IsEncrypted property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsEncrypted"] = 55] = "ExceptionIsEncrypted";
    /**
     * The IsMeetingRequest property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsMeetingRequest"] = 56] = "ExceptionIsMeetingRequest";
    /**
     * The IsMeetingResponse property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsMeetingResponse"] = 57] = "ExceptionIsMeetingResponse";
    /**
     * The IsNonDeliveryReport property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsNonDeliveryReport"] = 58] = "ExceptionIsNonDeliveryReport";
    /**
     * The IsPermissionControlled property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsPermissionControlled"] = 59] = "ExceptionIsPermissionControlled";
    /**
     * The IsRead property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsRead"] = 60] = "ExceptionIsRead";
    /**
     * The IsSigned property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsSigned"] = 61] = "ExceptionIsSigned";
    /**
     * The IsVoicemail property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionIsVoicemail"] = 62] = "ExceptionIsVoicemail";
    /**
     * The ItemClasses property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionItemClasses"] = 63] = "ExceptionItemClasses";
    /**
     * The MessageClassifications property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionMessageClassifications"] = 64] = "ExceptionMessageClassifications";
    /**
     * The NotSentToMe property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionNotSentToMe"] = 65] = "ExceptionNotSentToMe";
    /**
     * The SentCcMe property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionSentCcMe"] = 66] = "ExceptionSentCcMe";
    /**
     * The SentOnlyToMe property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionSentOnlyToMe"] = 67] = "ExceptionSentOnlyToMe";
    /**
     * The SentToAddresses property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionSentToAddresses"] = 68] = "ExceptionSentToAddresses";
    /**
     * The SentToMe property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionSentToMe"] = 69] = "ExceptionSentToMe";
    /**
     * The SentToOrCcMe property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionSentToOrCcMe"] = 70] = "ExceptionSentToOrCcMe";
    /**
     * The Sensitivity property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionSensitivity"] = 71] = "ExceptionSensitivity";
    /**
     * The WithinDateRange property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionWithinDateRange"] = 72] = "ExceptionWithinDateRange";
    /**
     * The WithinSizeRange property of a rule's set of exceptions.
     */
    RuleProperty[RuleProperty["ExceptionWithinSizeRange"] = 73] = "ExceptionWithinSizeRange";
    /**
     * The Categories property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionCategories"] = 74] = "ActionCategories";
    /**
     * The CopyToFolder property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionCopyToFolder"] = 75] = "ActionCopyToFolder";
    /**
     * The Delete property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionDelete"] = 76] = "ActionDelete";
    /**
     * The ForwardAsAttachmentToRecipients property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionForwardAsAttachmentToRecipients"] = 77] = "ActionForwardAsAttachmentToRecipients";
    /**
     * The ForwardToRecipients property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionForwardToRecipients"] = 78] = "ActionForwardToRecipients";
    /**
     * The Importance property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionImportance"] = 79] = "ActionImportance";
    /**
     * The MarkAsRead property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionMarkAsRead"] = 80] = "ActionMarkAsRead";
    /**
     * The MoveToFolder property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionMoveToFolder"] = 81] = "ActionMoveToFolder";
    /**
     * The PermanentDelete property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionPermanentDelete"] = 82] = "ActionPermanentDelete";
    /**
     * The RedirectToRecipients property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionRedirectToRecipients"] = 83] = "ActionRedirectToRecipients";
    /**
     * The SendSMSAlertToRecipients property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionSendSMSAlertToRecipients"] = 84] = "ActionSendSMSAlertToRecipients";
    /**
     * The ServerReplyWithMessage property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionServerReplyWithMessage"] = 85] = "ActionServerReplyWithMessage";
    /**
     * The StopProcessingRules property in a rule's set of actions.
     */
    RuleProperty[RuleProperty["ActionStopProcessingRules"] = 86] = "ActionStopProcessingRules";
    /**
     * The IsEnabled property of a rule, indicating if the rule is enabled.
     */
    RuleProperty[RuleProperty["IsEnabled"] = 87] = "IsEnabled";
    /**
     * The IsInError property of a rule, indicating if the rule is in error.
     */
    RuleProperty[RuleProperty["IsInError"] = 88] = "IsInError";
    /**
     * The Conditions property of a rule, contains all conditions of the rule.
     */
    RuleProperty[RuleProperty["Conditions"] = 89] = "Conditions";
    /**
     * The Exceptions property of a rule, contains all exceptions of the rule.
     */
    RuleProperty[RuleProperty["Exceptions"] = 90] = "Exceptions";
})(RuleProperty = exports.RuleProperty || (exports.RuleProperty = {}));
(function (RuleProperty) {
    /**EwsEnumAttribute */
    function FromEwsEnumString(value) {
        return RuleProperty[value.replace(":", "")];
    }
    RuleProperty.FromEwsEnumString = FromEwsEnumString;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value) {
        var startsWith = ["Condition", "Exception", "Action"];
        var str2 = null;
        startsWith.map(function (str) {
            if (RuleProperty[value].indexOf(str) === 0) {
                str2 = RuleProperty[value].replace(str, str + ":");
            }
        });
        return str2 || RuleProperty[value];
    }
    RuleProperty.ToEwsEnumString = ToEwsEnumString;
})(RuleProperty = exports.RuleProperty || (exports.RuleProperty = {}));
