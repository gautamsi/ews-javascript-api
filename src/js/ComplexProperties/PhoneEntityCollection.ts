import {XmlElementNames} from "../Core/XmlElementNames";

import {PhoneEntity} from "./PhoneEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of PhoneEntity objects.
 */
export class PhoneEntityCollection extends ComplexPropertyCollection<PhoneEntity> {

    /**
     * @internal Initializes a new instance of the **PhoneEntityCollection** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **PhoneEntityCollection** class.
     *
     * @param   {PhoneEntity[]}   collection   The collection of objects to include.
     */
    constructor(collection: PhoneEntity[]);
    constructor(collection: PhoneEntity[] = null) {
        super();
        if (collection != null) {
            collection.forEach((suggestion) => { this.InternalAdd(suggestion); });
        }
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}        xmlElementName   Name of the XML element.
     * @return  {PhoneEntity}   PhoneEntity.
     */
    CreateComplexProperty(xmlElementName: string): PhoneEntity { return new PhoneEntity(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {PhoneEntity}      PhoneEntity.
     */
    CreateDefaultComplexProperty(): PhoneEntity { return new PhoneEntity(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {PhoneEntity}   complexProperty   The complex property.
     * @return  {string}        XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: PhoneEntity): string { return XmlElementNames.NlgPhone; }
}