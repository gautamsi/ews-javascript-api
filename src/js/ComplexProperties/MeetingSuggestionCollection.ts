import ComplexPropertyCollection = require("./ComplexPropertyCollection");

    class MeetingSuggestionCollection extends ComplexPropertyCollection<MeetingSuggestion> {
        CreateComplexProperty(xmlElementName: string): MeetingSuggestion { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): MeetingSuggestion { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: MeetingSuggestion): string { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
