
/**
 * Defines the way values are compared in search filters.
 */
export enum ComparisonMode {

    /**
     * The comparison is exact.
     */
    Exact = 0,

    /**
     * The comparison ignores casing.
     */
    IgnoreCase = 1,

    /**
     * The comparison ignores spacing characters.
     */
    IgnoreNonSpacingCharacters = 2,

    /**
     * The comparison ignores casing and spacing characters.
     */
    IgnoreCaseAndNonSpacingCharacters = 3

    // Although the following four values are defined in the EWS schema, they are useless
    // as they are all technically equivalent to Loose. We are not exposing those values
    // in this API. When we encounter one of these values on an existing search folder
    // restriction, we map it to IgnoreCaseAndNonSpacingCharacters.
    //
    // Loose,
    // LooseAndIgnoreCase,
    // LooseAndIgnoreNonSpace,
    // LooseAndIgnoreCaseAndIgnoreNonSpace
}