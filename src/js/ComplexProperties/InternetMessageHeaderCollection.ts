import {InternetMessageHeader} from "./InternetMessageHeader";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
export class InternetMessageHeaderCollection extends ComplexPropertyCollection<InternetMessageHeader> {

    /**
     * @internal Initializes a new instance of the **InternetMessageHeaderCollection** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {InternetMessageHeader}     InternetMessageHeader instance.
     */
    CreateComplexProperty(xmlElementName: string): InternetMessageHeader { return new InternetMessageHeader(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {InternetMessageHeader}      InternetMessageHeader instance.
     */
    CreateDefaultComplexProperty(): InternetMessageHeader { return new InternetMessageHeader(); }

    /**
     * Find a specific header in the collection.
     *
     * @param   {string}   name   The name of the header to locate.
     * @return  {InternetMessageHeader}     An InternetMessageHeader representing the header with the specified name; null if no header with the specified name was found.
     */
    Find(name: string): InternetMessageHeader { throw new Error("InternetMessageHeaderCollection.ts - Find : Not implemented."); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {InternetMessageHeader}   complexProperty   The complex property.
     * @return  {string}                     XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: InternetMessageHeader): string { throw new Error("InternetMessageHeaderCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}