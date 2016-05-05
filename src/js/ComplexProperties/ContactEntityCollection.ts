import {XmlElementNames} from "../Core/XmlElementNames";

import {ContactEntity} from "./ContactEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of ContactEntity objects.
 */
export class ContactEntityCollection extends ComplexPropertyCollection<ContactEntity> {

    /**
     * @internal Initializes a new instance of the **ContactEntityCollection** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **ContactEntityCollection** class.
     *
     * @param   {ContactEntity[]}   collection   The collection of objects to include.
     */
    constructor(collection: ContactEntity[]);
    constructor(collection: ContactEntity[] = null) {
        super();
        if (collection != null) {
            collection.forEach((entity) => { this.InternalAdd(entity); });
        }
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}                xmlElementName   Name of the XML element.
     * @return  {ContactEntity}     ContactEntity.
     */
    CreateComplexProperty(xmlElementName: string): ContactEntity { return new ContactEntity(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {ContactEntity}      ContactEntity.
     */
    CreateDefaultComplexProperty(): ContactEntity { return new ContactEntity(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {ContactEntity}     complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: ContactEntity): string { return XmlElementNames.NlgContact; }
}