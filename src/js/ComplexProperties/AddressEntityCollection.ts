import {XmlElementNames} from "../Core/XmlElementNames";

import {AddressEntity} from "./AddressEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of AddressEntity objects.
 */
export class AddressEntityCollection extends ComplexPropertyCollection<AddressEntity> {

    /**
     * @internal Initializes a new instance of the **AddressEntityCollection** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **AddressEntityCollection** class.
     *
     * @param   {AddressEntity[]}   collection   The collection of objects to include.
     */
    constructor(collection: AddressEntity[]);
    constructor(collection: AddressEntity[] = null) {
        super();
        if (collection != null) {
            collection.forEach((address) => { this.InternalAdd(address); });
        }
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {AddressEntity}     AddressEntity.
     */
    CreateComplexProperty(xmlElementName: string): AddressEntity { return new AddressEntity(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {AddressEntity}      AddressEntity.
     */
    CreateDefaultComplexProperty(): AddressEntity { return new AddressEntity(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {AddressEntity}     complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: AddressEntity): string { return XmlElementNames.NlgAddress; }
}