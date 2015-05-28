import TaskSuggestion = require("./TaskSuggestion");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class TaskSuggestionCollection extends ComplexPropertyCollection<TaskSuggestion> {
    CreateComplexProperty(xmlElementName: string): TaskSuggestion { throw new Error("TaskSuggestionCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): TaskSuggestion { throw new Error("TaskSuggestionCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: TaskSuggestion): string { throw new Error("TaskSuggestionCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}
export = TaskSuggestionCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
