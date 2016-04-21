import {XmlElementNames} from "../Core/XmlElementNames";

import {TaskSuggestion} from "./TaskSuggestion";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of TaskSuggestion objects.
 */
export class TaskSuggestionCollection extends ComplexPropertyCollection<TaskSuggestion> {

    /**
     * @internal Initializes a new instance of the **TaskSuggestionCollection** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **TaskSuggestionCollection** class.
     *
     * @param   {TaskSuggestion[]}   collection   The collection of objects to include.
     */
    constructor(collection: TaskSuggestion[]);
    constructor(collection: TaskSuggestion[] = null) {
        super();
        if (collection != null) {
            collection.forEach((suggestion) => { this.InternalAdd(suggestion); });
        }
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {TaskSuggestion}    TaskSuggestion.
     */
    CreateComplexProperty(xmlElementName: string): TaskSuggestion { return new TaskSuggestion(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {TaskSuggestion}      TaskSuggestion.
     */
    CreateDefaultComplexProperty(): TaskSuggestion { return new TaskSuggestion(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {TaskSuggestion}    complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: TaskSuggestion): string { return XmlElementNames.NlgTaskSuggestion; }
}