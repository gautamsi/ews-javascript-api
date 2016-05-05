import {XmlElementNames} from "../Core/XmlElementNames";

import {EmailAddressEntity} from "./EmailAddressEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of EmailAddressEntity objects.
 */
export class EmailAddressEntityCollection extends ComplexPropertyCollection<EmailAddressEntity> {

    /**
     * @internal Initializes a new instance of the **EmailAddressEntityCollection** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **EmailAddressEntityCollection** class.
     *
     * @param   {EmailAddressEntity[]}   collection   The collection of objects to include.
     */
    constructor(collection: EmailAddressEntity[]);
    constructor(collection: EmailAddressEntity[] = null) {
        super();
        if (collection != null) {
            collection.forEach((entity) => { this.InternalAdd(entity); });
        }
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}                xmlElementName   Name of the XML element.
     * @return  {EmailAddressEntity}    EmailAddressEntity.
     */
    CreateComplexProperty(xmlElementName: string): EmailAddressEntity { return new EmailAddressEntity(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {EmailAddressEntity}      EmailAddressEntity.
     */
    CreateDefaultComplexProperty(): EmailAddressEntity { return new EmailAddressEntity(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {EmailAddressEntity}    complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: EmailAddressEntity): string { return XmlElementNames.NlgEmailAddress; }
}