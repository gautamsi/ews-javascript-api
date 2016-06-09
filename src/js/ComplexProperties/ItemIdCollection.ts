import {ItemId} from "./ItemId";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of item Ids.
 * 
 * @sealed
 */
export class ItemIdCollection extends ComplexPropertyCollection<ItemId> {

    /**
     * @internal Initializes a new instance of the **ItemIdCollection** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}    xmlElementName   Name of the XML element.
     * @return  {ItemId}    ItemId.
     */
    CreateComplexProperty(xmlElementName: string): ItemId {
        return new ItemId();
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {ItemId}      ItemId.
     */
    CreateDefaultComplexProperty(): ItemId {
        return new ItemId();
    }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {ItemId}   complexProperty   The complex property.
     * @return  {string}                     XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: ItemId): string {
        return complexProperty.GetXmlElementName();
    }
}