import { HoldAction } from "../Enumerations/HoldAction";

/**
 * Represents set hold on mailboxes parameters.
 * 
 * @sealed
 */
export class SetHoldOnMailboxesParameters {

	/**
	 * Action type
	 */
	ActionType: HoldAction = HoldAction.Create;

	/**
	 * Hold id
	 */
	HoldId: string = null;

	/**
	 * Query
	 */
	Query: string = null;

	/**
	 * Collection of mailboxes
	 */
	Mailboxes: string[] = null;

	/**
	 * Query language
	 */
	Language: string = null;

	/**
	 * In-place hold identity
	 */
	InPlaceHoldIdentity: string = null;

	/**
     * Item hold period
     * *The text value can be "Unlimited" or the string value of any Timespan value.*
	 * 
	 * per github issue #120 
     */
    ItemHoldPeriod: string = null;
	
	/**
	 * Include Non Indexable Items
	 * 
	 * per github issue #120 
	 */
	IncludeNonIndexableItems: boolean = null;

	/**
	 * Perform deduplication
	 * 
	 * per github issue #120 
	 */
	PerformDeduplication: boolean = null;
}