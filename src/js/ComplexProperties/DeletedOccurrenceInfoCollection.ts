import {XmlElementNames} from "../Core/XmlElementNames";

import {DeletedOccurrenceInfo} from "./DeletedOccurrenceInfo";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of deleted occurrence objects.
 */
export class DeletedOccurrenceInfoCollection extends ComplexPropertyCollection<DeletedOccurrenceInfo> {

    /**
     * @internal Initializes a new instance of the **OccurrenceInfoCollection** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {DeletedOccurrenceInfo}     OccurenceInfo instance.
     */
    CreateComplexProperty(xmlElementName: string): DeletedOccurrenceInfo {
        if (xmlElementName == XmlElementNames.DeletedOccurrence) {
            return new DeletedOccurrenceInfo();
        }
        else {
            return null;
        }
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {DeletedOccurrenceInfo}     Default OccurenceInfo instance.
     */
    CreateDefaultComplexProperty(): DeletedOccurrenceInfo { return new DeletedOccurrenceInfo(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {DeletedOccurrenceInfo}   complexProperty   The complex property.
     * @return  {string}        XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: DeletedOccurrenceInfo): string { return XmlElementNames.Occurrence; }
}