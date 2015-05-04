import ComplexPropertyCollection = require("./ComplexPropertyCollection");

    class TaskSuggestionCollection extends ComplexPropertyCollection<TaskSuggestion> {
        CreateComplexProperty(xmlElementName: string): TaskSuggestion { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): TaskSuggestion { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: TaskSuggestion): string { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
