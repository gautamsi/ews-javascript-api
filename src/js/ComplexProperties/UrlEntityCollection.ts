import {XmlElementNames} from "../Core/XmlElementNames";

import {UrlEntity} from "./UrlEntity";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of UrlEntity objects.
 */
export class UrlEntityCollection extends ComplexPropertyCollection<UrlEntity> {

    /**
     * @internal Initializes a new instance of the **UrlEntityCollection** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **UrlEntityCollection** class.
     *
     * @param   {UrlEntity[]}   collection   The collection of objects to include.
     */
    constructor(collection: UrlEntity[]);
    constructor(collection: UrlEntity[] = null) {
        super();
        if (collection != null) {
            collection.forEach((entity) => { this.InternalAdd(entity); });
        }
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}        xmlElementName   Name of the XML element.
     * @return  {UrlEntity}     UrlEntity.
     */
    CreateComplexProperty(xmlElementName: string): UrlEntity { return new UrlEntity(); }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {UrlEntity}      UrlEntity.
     */
    CreateDefaultComplexProperty(): UrlEntity { return new UrlEntity(); }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {UrlEntity}     complexProperty   The complex property.
     * @return  {string}        XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: UrlEntity): string { return XmlElementNames.NlgUrl; }
}