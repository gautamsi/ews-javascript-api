/**
 * Represents the keyword statistics result.
 * 
 * @sealed
 */
export class KeywordStatisticsSearchResult {

    /**
     * Keyword string
     */
    Keyword: string;

    /**
     * Number of item hits
     */
    ItemHits: number;

    /**
     * Total size
     * [CLSCompliant(false)]
     */
    Size: number;
}