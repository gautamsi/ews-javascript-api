import { MailboxQuery } from "./MailboxQuery";
import { PreviewItemResponseShape } from "./PreviewItemResponseShape";
import { SearchPageDirection } from "../Enumerations/SearchPageDirection";
import { SearchResultType } from "../Enumerations/SearchResultType";
import { SortDirection } from "../Enumerations/SortDirection";

/**
 * Represents search mailbox parameters.
 * 
 * @sealed
 */
export class SearchMailboxesParameters {

    /**
     * Search queries
     */
    SearchQueries: MailboxQuery[] = null;

    /**
     * Result type
     */
    ResultType: SearchResultType = SearchResultType.PreviewOnly;

    /**
     * Sort by property
     */
    SortBy: string = null;

    /**
     * Sort direction
     */
    SortOrder: SortDirection = SortDirection.Ascending;

    /**
     * Perform deduplication
     */
    PerformDeduplication: boolean = false;

    /**
     * Page size
     */
    PageSize: number = 0;

    /**
     * Search page direction
     */
    PageDirection: SearchPageDirection = SearchPageDirection.Next;

    /**
     * Page item reference
     */
    PageItemReference: string = null;

    /**
     * Preview item response shape
     */
    PreviewItemResponseShape: PreviewItemResponseShape = null;

    /**
     * Query language
     */
    Language: string = null;
}