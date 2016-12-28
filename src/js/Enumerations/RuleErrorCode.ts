
/**
 * Defines the error codes identifying why a rule failed validation.
 */
export enum RuleErrorCode {
    
    /**
     * Active Directory operation failed.
     */
    ADOperationFailure = 0,
    
    /**
     * The e-mail account specified in the FromConnectedAccounts predicate was not found.
     */
    ConnectedAccountNotFound = 1,
    
    /**
     * The Rule object in a CreateInboxRuleOperation has an Id. 
     * The Ids of new  rules are generated server side and should not be provided by the client.
     */
    CreateWithRuleId = 2,
    
    /**
     * The value is empty. An empty value is not allowed for the property.
     */
    EmptyValueFound = 3,
    
    /**
     * There already is a rule with the same priority. 
     */
    DuplicatedPriority = 4,
    
    /**
     * There are multiple operations against the same rule. 
     * Only one operation per rule is allowed.
     */
    DuplicatedOperationOnTheSameRule = 5,
    
    /**
     * The folder does not exist in the user's mailbox.
     */
    FolderDoesNotExist = 6,
    
    /**
     * The e-mail address is invalid.
     */
    InvalidAddress = 7,
    
    /**
     * The date range is invalid.
     */
    InvalidDateRange = 8,
    
    /**
     * The folder Id is invalid.
     */
    InvalidFolderId = 9,
    
    /**
     * The size range is invalid.
     */
    InvalidSizeRange = 10,
    
    /**
     * The value is invalid.
     */
    InvalidValue = 11,
    
    /**
     * The message classification was not found.
     */
    MessageClassificationNotFound = 12,
    
    /**
     * No action was specified. At least one action must be specified.
     */
    MissingAction = 13,
    
    /**
     * The required parameter is missing.
     */
    MissingParameter = 14,
    
    /**
     * The range value is missing.
     */
    MissingRangeValue = 15,
    
    /**
     * The property cannot be modified.
     */
    NotSettable = 16,
    
    /**
     * The recipient does not exist.
     */
    RecipientDoesNotExist = 17,
    
    /**
     * The rule was not found.
     */
    RuleNotFound = 18,
    
    /**
     * The size is less than zero.
     */
    SizeLessThanZero = 19,
    
    /**
     * The string value is too big.
     */
    StringValueTooBig = 20,
    
    /**
     * The address is unsupported.
     */
    UnsupportedAddress = 21,
    
    /**
     * An unexpected error occured.
     */
    UnexpectedError = 22,
    
    /**
     * The rule is not supported.
     */
    UnsupportedRule = 23
}