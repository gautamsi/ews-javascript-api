import {Conversation} from "../Core/ServiceObjects/Items/Conversation";
import {HighlightTerm} from "../ComplexProperties/HighlightTerm";

/**
 * Represents the results of an conversation search operation.
 * 
 * @sealed
 */
export class FindConversationResults {

	/**
	 * Gets a collection containing the conversations that were found by the search operation.
	 */
	Conversations: Conversation[] = [];

	/**
	 * Gets a collection containing the HighlightTerms that were returned by the search operation.
	 */
	HighlightTerms: HighlightTerm[] = [];

	/**
	 * Gets the total count of conversations in view.
	 */
	TotalCount: number = null;

	/**
	 * Gets the indexed offset of the first conversation by the search operation.
	 */
	IndexedOffset: number = null;

	/**
	 * @internal Initializes a new instance of the **FindConversationResults** class.
	 */
	constructor() {
	}
}