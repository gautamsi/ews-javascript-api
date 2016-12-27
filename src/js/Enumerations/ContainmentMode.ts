
/**
 * Defines the containment mode for Contains search filters.
 */
export enum ContainmentMode {
    
    /**
     * The comparison is between the full string and the constant. The property value and the supplied constant are precisely the same.
     */
    FullString = 0,
    
    /**
     * The comparison is between the string prefix and the constant.
     */
    Prefixed = 1,
    
    /**
     * The comparison is between a substring of the string and the constant.
     */
    Substring = 2,
    
    /**
     * The comparison is between a prefix on individual words in the string and the constant.
     */
    PrefixOnWords = 3,
    
    /**
     * The comparison is between an exact phrase in the string and the constant.
     */
    ExactPhrase = 4
}