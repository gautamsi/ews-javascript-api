import { SearchPageDirection } from "../Enumerations/SearchPageDirection";

/**
 * Represents non indexable item parameters base class
 */
export abstract class NonIndexableItemParameters {

    /**
     * List of mailboxes (in legacy DN format)
     */
    Mailboxes: string[] = null;

    /**
     * Search archive only
     */
    SearchArchiveOnly: boolean = false;
}

/**
 * Represents get non indexable item statistics parameters.
 * 
 * @sealed
 */
export class GetNonIndexableItemStatisticsParameters extends NonIndexableItemParameters {
}

/**
 * Represents get non indexable item details parameters.
 * 
 * @sealed
 */
export class GetNonIndexableItemDetailsParameters extends NonIndexableItemParameters {

    /**
     * @Nullable Page size
     */
    PageSize: number = null; //Nullable

    /**
     * Page item reference
     */
    PageItemReference: string = null;

    /**
     * @Nullable Search page direction 
     */
    PageDirection: SearchPageDirection = null; //Nullable
}