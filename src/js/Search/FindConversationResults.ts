import {Conversation} from "../Core/ServiceObjects/Items/Conversation";
import {HighlightTerm} from "../ComplexProperties/HighlightTerm";
export class FindConversationResults {
	Conversations: Conversation[] /*System.Collections.ObjectModel.Collection<Conversation>*/;
	HighlightTerms: HighlightTerm[] /*System.Collections.ObjectModel.Collection<HighlightTerm>*/;
	TotalCount: number;
	IndexedOffset: number;
}






			

