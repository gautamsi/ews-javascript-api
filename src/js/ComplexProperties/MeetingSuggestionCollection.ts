import {XmlElementNames} from "../Core/XmlElementNames";

import {MeetingSuggestion} from "./MeetingSuggestion";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of MeetingSuggestion objects.
 */
export class MeetingSuggestionCollection extends ComplexPropertyCollection<MeetingSuggestion> {

    /**
     * @internal Initializes a new instance of the **MeetingSuggestionCollection** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **MeetingSuggestionCollection** class.
     *
     * @param   {MeetingSuggestion[]}   collection   The collection of objects to include.
     */
    constructor(collection: MeetingSuggestion[]);
    constructor(collection: MeetingSuggestion[] = null) {
        super();
        if (collection != null) {
            collection.forEach((suggestion) => { this.InternalAdd(suggestion); });
        }
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}                xmlElementName   Name of the XML element.
     * @return  {MeetingSuggestion}     MeetingSuggestion.
     */
    CreateComplexProperty(xmlElementName: string): MeetingSuggestion { return new MeetingSuggestion(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {MeetingSuggestion}      MeetingSuggestion.
     */
    CreateDefaultComplexProperty(): MeetingSuggestion { return new MeetingSuggestion(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {MeetingSuggestion}     complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: MeetingSuggestion): string { return XmlElementNames.NlgMeetingSuggestion; }
}