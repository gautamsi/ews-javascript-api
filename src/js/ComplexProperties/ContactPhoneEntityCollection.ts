import {XmlElementNames} from "../Core/XmlElementNames";

import {ContactPhoneEntity} from "./ContactPhoneEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of ContactPhoneEntity objects.
 */
export class ContactPhoneEntityCollection extends ComplexPropertyCollection<ContactPhoneEntity> {

    /**
     * @internal Initializes a new instance of the **ContactPhoneEntityCollection** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **ContactPhoneEntityCollection** class.
     *
     * @param   {ContactPhoneEntity[]}   collection   The collection of objects to include.
     */
    constructor(collection: ContactPhoneEntity[]);
    constructor(collection: ContactPhoneEntity[] = null) {
        super();
        if (collection != null) {
            collection.forEach((phone) => { this.InternalAdd(phone); });
        }
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}                xmlElementName   Name of the XML element.
     * @return  {ContactPhoneEntity}    ContactPhoneEntity.
     */
    CreateComplexProperty(xmlElementName: string): ContactPhoneEntity { return new ContactPhoneEntity(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {ContactPhoneEntity}    ContactPhoneEntity.
     */
    CreateDefaultComplexProperty(): ContactPhoneEntity { return new ContactPhoneEntity(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {ContactPhoneEntity}    complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: ContactPhoneEntity): string { return XmlElementNames.NlgPhone; }
}