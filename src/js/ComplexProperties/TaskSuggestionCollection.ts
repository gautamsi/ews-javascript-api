import {TaskSuggestion} from "./TaskSuggestion";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
export class TaskSuggestionCollection extends ComplexPropertyCollection<TaskSuggestion> {
    CreateComplexProperty(xmlElementName: string): TaskSuggestion { throw new Error("TaskSuggestionCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): TaskSuggestion { throw new Error("TaskSuggestionCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: TaskSuggestion): string { throw new Error("TaskSuggestionCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}


//}



