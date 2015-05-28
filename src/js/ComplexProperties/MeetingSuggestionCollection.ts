import MeetingSuggestion = require("./MeetingSuggestion");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class MeetingSuggestionCollection extends ComplexPropertyCollection<MeetingSuggestion> {
    CreateComplexProperty(xmlElementName: string): MeetingSuggestion { throw new Error("MeetingSuggestionCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): MeetingSuggestion { throw new Error("MeetingSuggestionCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: MeetingSuggestion): string { throw new Error("MeetingSuggestionCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}
export = MeetingSuggestionCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
