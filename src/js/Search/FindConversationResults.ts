import Conversation = require("../Core/ServiceObjects/Items/Conversation");
import HighlightTerm = require("../ComplexProperties/HighlightTerm");
			
 class FindConversationResults {
	Conversations: Conversation[] /*System.Collections.ObjectModel.Collection<Conversation>*/;
	HighlightTerms: HighlightTerm[] /*System.Collections.ObjectModel.Collection<HighlightTerm>*/;
	TotalCount: number;
	IndexedOffset: number;
}
export = FindConversationResults;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
