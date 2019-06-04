"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the error codes identifying why a rule failed validation.
 */
var RuleErrorCode;
(function (RuleErrorCode) {
    /**
     * Active Directory operation failed.
     */
    RuleErrorCode[RuleErrorCode["ADOperationFailure"] = 0] = "ADOperationFailure";
    /**
     * The e-mail account specified in the FromConnectedAccounts predicate was not found.
     */
    RuleErrorCode[RuleErrorCode["ConnectedAccountNotFound"] = 1] = "ConnectedAccountNotFound";
    /**
     * The Rule object in a CreateInboxRuleOperation has an Id.
     * The Ids of new  rules are generated server side and should not be provided by the client.
     */
    RuleErrorCode[RuleErrorCode["CreateWithRuleId"] = 2] = "CreateWithRuleId";
    /**
     * The value is empty. An empty value is not allowed for the property.
     */
    RuleErrorCode[RuleErrorCode["EmptyValueFound"] = 3] = "EmptyValueFound";
    /**
     * There already is a rule with the same priority.
     */
    RuleErrorCode[RuleErrorCode["DuplicatedPriority"] = 4] = "DuplicatedPriority";
    /**
     * There are multiple operations against the same rule.
     * Only one operation per rule is allowed.
     */
    RuleErrorCode[RuleErrorCode["DuplicatedOperationOnTheSameRule"] = 5] = "DuplicatedOperationOnTheSameRule";
    /**
     * The folder does not exist in the user's mailbox.
     */
    RuleErrorCode[RuleErrorCode["FolderDoesNotExist"] = 6] = "FolderDoesNotExist";
    /**
     * The e-mail address is invalid.
     */
    RuleErrorCode[RuleErrorCode["InvalidAddress"] = 7] = "InvalidAddress";
    /**
     * The date range is invalid.
     */
    RuleErrorCode[RuleErrorCode["InvalidDateRange"] = 8] = "InvalidDateRange";
    /**
     * The folder Id is invalid.
     */
    RuleErrorCode[RuleErrorCode["InvalidFolderId"] = 9] = "InvalidFolderId";
    /**
     * The size range is invalid.
     */
    RuleErrorCode[RuleErrorCode["InvalidSizeRange"] = 10] = "InvalidSizeRange";
    /**
     * The value is invalid.
     */
    RuleErrorCode[RuleErrorCode["InvalidValue"] = 11] = "InvalidValue";
    /**
     * The message classification was not found.
     */
    RuleErrorCode[RuleErrorCode["MessageClassificationNotFound"] = 12] = "MessageClassificationNotFound";
    /**
     * No action was specified. At least one action must be specified.
     */
    RuleErrorCode[RuleErrorCode["MissingAction"] = 13] = "MissingAction";
    /**
     * The required parameter is missing.
     */
    RuleErrorCode[RuleErrorCode["MissingParameter"] = 14] = "MissingParameter";
    /**
     * The range value is missing.
     */
    RuleErrorCode[RuleErrorCode["MissingRangeValue"] = 15] = "MissingRangeValue";
    /**
     * The property cannot be modified.
     */
    RuleErrorCode[RuleErrorCode["NotSettable"] = 16] = "NotSettable";
    /**
     * The recipient does not exist.
     */
    RuleErrorCode[RuleErrorCode["RecipientDoesNotExist"] = 17] = "RecipientDoesNotExist";
    /**
     * The rule was not found.
     */
    RuleErrorCode[RuleErrorCode["RuleNotFound"] = 18] = "RuleNotFound";
    /**
     * The size is less than zero.
     */
    RuleErrorCode[RuleErrorCode["SizeLessThanZero"] = 19] = "SizeLessThanZero";
    /**
     * The string value is too big.
     */
    RuleErrorCode[RuleErrorCode["StringValueTooBig"] = 20] = "StringValueTooBig";
    /**
     * The address is unsupported.
     */
    RuleErrorCode[RuleErrorCode["UnsupportedAddress"] = 21] = "UnsupportedAddress";
    /**
     * An unexpected error occured.
     */
    RuleErrorCode[RuleErrorCode["UnexpectedError"] = 22] = "UnexpectedError";
    /**
     * The rule is not supported.
     */
    RuleErrorCode[RuleErrorCode["UnsupportedRule"] = 23] = "UnsupportedRule";
})(RuleErrorCode = exports.RuleErrorCode || (exports.RuleErrorCode = {}));
