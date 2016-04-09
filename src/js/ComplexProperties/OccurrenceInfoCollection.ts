import {XmlElementNames} from "../Core/XmlElementNames";

import {OccurrenceInfo} from "./OccurrenceInfo";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of OccurrenceInfo objects.
 */
export class OccurrenceInfoCollection extends ComplexPropertyCollection<OccurrenceInfo> {

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
     * @return  {OccurrenceInfo}        OccurenceInfo instance.
     */
    CreateComplexProperty(xmlElementName: string): OccurrenceInfo {
        if (xmlElementName == XmlElementNames.Occurrence) {
            return new OccurrenceInfo();
        }
        else {
            return null;
        }
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {OccurrenceInfo}      OccurenceInfo instance.
     */
    CreateDefaultComplexProperty(): OccurrenceInfo { return new OccurrenceInfo(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {OccurrenceInfo}    complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: OccurrenceInfo): string { return XmlElementNames.Occurrence; }
}